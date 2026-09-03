import { school, programs, mcleSubjects, faculty } from '../lib/site';
import { posts } from '../lib/posts';

export const dynamic = 'force-static';

export function GET() {
  const base = school.url;
  const now = new Date().toISOString().slice(0, 10);
  const entry = (path, priority, freq = 'monthly') =>
    `  <url><loc>${base}${path}</loc><lastmod>${now}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`;

  const urls = [
    entry('/', '1.0', 'weekly'),
    entry('/about', '0.9'),
    entry('/campus', '0.7'),
    entry('/faculty', '0.8'),
    ...faculty.map((f) => entry(`/faculty/${f.slug}`, '0.6')),
    entry('/programs', '0.9'),
    ...programs.map((p) => entry(`/programs/${p.slug}`, '0.9')),
    entry('/mcle', '0.8'),
    ...mcleSubjects.map((m) => entry(`/mcle/${m.slug}`, '0.7')),
    entry('/admissions', '0.9'),
    entry('/admissions/tuition', '0.9'),
    entry('/admissions/apply', '0.9'),
    entry('/required-disclosures', '0.7', 'yearly'),
    entry('/blog', '0.6', 'weekly'),
    ...posts.map((p) => entry(`/blog/${p.slug}`, '0.6')),
    entry('/contact', '0.8'),
    entry('/disclaimer', '0.3', 'yearly'),
    entry('/privacy-policy', '0.3', 'yearly'),
    entry('/accessibility', '0.3', 'yearly')
  ].join('\n');

  return new Response(
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } }
  );
}
