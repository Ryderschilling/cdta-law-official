import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, CTA, SideCard, Disclosure } from '../../components/Blocks';
import Faq from '../../components/Faq';
import { programs, school } from '../../lib/site';
import { programContent } from '../../lib/content';

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.meta,
    alternates: { canonical: `/programs/${p.slug}` }
  };
}

export default async function Program({ params }) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  const c = programContent[slug];
  if (!p || !c) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        crumbs={[{ label: 'Programs', href: '/programs' }, { label: p.name }]}
        label={`Program ${p.num}`}
        title={p.name}
        lede={c.lede}
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              {c.sections.map((s, i) => (
                <div key={i}>
                  <h2>{s.h}</h2>
                  {s.body && s.body.map((t, j) => <p key={j}>{t}</p>)}
                  {s.list && (
                    <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>
                  )}
                </div>
              ))}

              {/* Required on every program page, in addition to the footer. */}
              <Disclosure />

              <h2 id="faq">Common questions</h2>
              <Faq items={c.faq} />

              <div className="callout">
                <div className="callout-h">Ask before you commit</div>
                <p>
                  The Registrar, {school.registrar}, answers eligibility and program questions
                  directly. Call <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>{' '}
                  or <Link className="inline" href="/contact">send a message</Link>.
                </p>
              </div>

              <h2>Other programs</h2>
              <ul>
                {programs.filter((x) => x.slug !== p.slug).map((x) => (
                  <li key={x.slug}>
                    <Link className="inline" href={`/programs/${x.slug}`}>{x.name}</Link>
                    <br />{x.teaser}
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-col"><SideCard activeSlug={p.slug} /></div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
