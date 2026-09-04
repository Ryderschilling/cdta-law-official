import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, CTA, SideCard } from '../../components/Blocks';
import { posts, postBySlug } from '../../lib/posts';
import { school } from '../../lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.meta,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: 'article', title: p.title, description: p.meta, publishedTime: p.date }
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();

  const idx = posts.findIndex((x) => x.slug === slug);
  const others = posts.filter((x) => x.slug !== slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.meta,
    datePublished: p.date,
    author: { '@type': 'Organization', name: school.name, url: school.url },
    publisher: { '@type': 'Organization', name: school.name, url: school.url },
    mainEntityOfPage: `${school.url}/blog/${p.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        crumbs={[{ label: 'Blog', href: '/blog' }, { label: p.title }]}
        label={p.dateLabel}
        title={p.title}
        lede={p.excerpt}
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              {p.body.map((b, i) => (
                <div key={i}>
                  {b.h && <h2>{b.h}</h2>}
                  {b.p && b.p.map((t, j) => <p key={j}>{t}</p>)}
                </div>
              ))}

              <div className="callout">
                <div className="callout-h">Questions this raised?</div>
                <p>
                  The Registrar answers them directly rather than routing you through a form
                  funnel. Call <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>{' '}
                  or <Link className="inline" href="/admissions/apply">send a message</Link>.
                </p>
              </div>

              <h2>Keep reading</h2>
              <ul>
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link className="inline" href={`/blog/${o.slug}`}>{o.title}</Link>
                    <br />{o.excerpt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-col">
              <SideCard
                heading="Thinking about applying?"
                copy="Evening and Saturday classes, four admission paths, and a Registrar who will tell you straight whether you qualify."
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
