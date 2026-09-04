// Horizontal-overflow guard.
//   npm run build && npx next start -p 3000   (in one terminal)
//   npm i -D playwright && npx playwright install chromium
//   node widths.mjs
//
// IMPORTANT: globals.css sets html,body{overflow-x:clip} as a safety net, which
// forces scrollWidth === clientWidth no matter how badly something overflows.
// Measuring that value proves nothing. This strips the net first, so a real
// blowout (a grid or flex item stuck at min-width:auto, say) actually fails.
//
// Blocks non-localhost requests, otherwise Google Fonts and the map iframe hang it.
// Set PW_CHROMIUM to an existing Chromium binary to skip the browser download.
import { chromium } from 'playwright';

const PORT = process.env.PORT || 3000;
const routes = [
  '/', '/about', '/campus',
  '/faculty', '/faculty/john-patrick-dolan', '/faculty/elizabeth-tucker',
  '/programs', '/programs/juris-doctor', '/programs/distance-learning',
  '/programs/bar-preparation', '/programs/saturday-enrichment',
  '/mcle', '/mcle/legal-ethics', '/mcle/civility',
  '/admissions', '/admissions/tuition', '/admissions/apply',
  '/required-disclosures',
  '/blog', '/blog/studying-law-in-the-coachella-valley', '/blog/am-i-too-old-for-law-school',
  '/contact', '/disclaimer', '/privacy-policy', '/accessibility', '/no-such-page'
];
const widths = [320, 360, 390, 414, 768, 1024];

const b = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
let fails = 0;

for (const w of widths) {
  const p = await b.newPage({ viewport: { width: w, height: 844 } });
  await p.route('**/*', (route) =>
    route.request().url().includes('localhost') ? route.continue() : route.abort()
  );
  const bad = [];
  for (const r of routes) {
    await p.goto(`http://localhost:${PORT}${r}`, { waitUntil: 'domcontentloaded' });
    await p.addStyleTag({ content: 'html,body{overflow-x:visible!important;max-width:none!important}' });
    await p.waitForTimeout(120);
    const o = await p.evaluate(() => {
      const de = document.documentElement;
      const over = de.scrollWidth - de.clientWidth;
      let worst = null;
      if (over > 1) {
        for (const el of document.querySelectorAll('body *')) {
          const box = el.getBoundingClientRect();
          if (box.width === 0 || box.height === 0) continue;
          if (box.right <= de.clientWidth + 1) continue;
          // ignore anything a scrolling or clipping ancestor already contains
          let clipped = false, a = el.parentElement;
          while (a && a !== document.body) {
            const ox = getComputedStyle(a).overflowX;
            if (ox === 'hidden' || ox === 'clip' || ox === 'auto' || ox === 'scroll') { clipped = true; break; }
            a = a.parentElement;
          }
          if (clipped) continue;
          const cand = {
            t: `${el.tagName}.${(el.className || '').toString().trim().split(/\s+/)[0] || '-'}`,
            right: Math.round(box.right), w: Math.round(box.width)
          };
          if (!worst || cand.right > worst.right) worst = cand;
        }
      }
      return { over, worst };
    });
    if (o.over > 1) bad.push(`${r} (+${o.over}px${o.worst ? `, ${o.worst.t} w=${o.worst.w}` : ''})`);
  }
  fails += bad.length;
  console.log(`${w}px  ${bad.length ? 'FAIL ' + bad.join(', ') : `all ${routes.length} routes fit`}`);
  await p.close();
}

console.log(fails ? `\n${fails} failures` : '\nNo horizontal overflow at any tested width, safety net removed.');
await b.close();
process.exit(fails ? 1 : 0);
