// Horizontal-overflow guard.
//   npm run build && npx next start -p 3000   (in one terminal)
//   npm i -D playwright && npx playwright install chromium
//   node widths.mjs
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
  const p = await b.newPage({ viewport: { width: w, height: 800 } });
  await p.route('**/*', (route) =>
    route.request().url().includes('localhost') ? route.continue() : route.abort()
  );
  const bad = [];
  for (const r of routes) {
    await p.goto(`http://localhost:${PORT}${r}`, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(120);
    const o = await p.evaluate(() => ({
      s: document.documentElement.scrollWidth,
      v: document.documentElement.clientWidth
    }));
    if (o.s > o.v) bad.push(`${r} (${o.s}>${o.v})`);
  }
  fails += bad.length;
  console.log(`${w}px  ${bad.length ? 'FAIL ' + bad.join(', ') : `all ${routes.length} routes fit`}`);
  await p.close();
}

console.log(fails ? `\n${fails} failures` : '\nNo horizontal overflow at any tested width.');
await b.close();
process.exit(fails ? 1 : 0);
