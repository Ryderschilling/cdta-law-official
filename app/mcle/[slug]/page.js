import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, CTA, SideCard, McleDisclosure } from '../../components/Blocks';
import { mcleSubjects, school, MCLE_TOTAL_HOURS, MCLE_CYCLE_YEARS, MCLE_STATE_BAR_URL } from '../../lib/site';
import { mcleContent } from '../../lib/content';

export function generateStaticParams() {
  return mcleSubjects.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = mcleSubjects.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name} MCLE`,
    description: m.meta,
    alternates: { canonical: `/mcle/${m.slug}` }
  };
}

export default async function McleSubject({ params }) {
  const { slug } = await params;
  const m = mcleSubjects.find((x) => x.slug === slug);
  const c = mcleContent[slug];
  if (!m || !c) notFound();

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${m.name} (MCLE)`,
    description: m.teaser,
    provider: {
      '@type': 'CollegeOrUniversity',
      name: school.name,
      url: school.url
    },
    educationalCredentialAwarded: `${m.hours} ${m.hours === 1 ? 'hour' : 'hours'} of California MCLE credit`,
    url: `${school.url}/mcle/${m.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <PageHero
        crumbs={[{ label: 'MCLE', href: '/mcle' }, { label: m.name }]}
        label={`${m.hours} ${m.hours === 1 ? 'required hour' : 'required hours'}`}
        title={m.name}
        lede={c.lede}
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>Why this credit exists</h2>
              {c.body.map((t, i) => <p key={i}>{t}</p>)}

              <h2>Where it sits in the California cycle</h2>
              <p>
                Active California attorneys complete {MCLE_TOTAL_HOURS} hours of MCLE every{' '}
                {MCLE_CYCLE_YEARS} years. Within that total, the State Bar requires{' '}
                <strong>{m.hours} {m.hours === 1 ? 'hour' : 'hours'}</strong> in{' '}
                {m.name.toLowerCase()}.
              </p>
              <p>
                Compliance groups, deadlines and required hours are set by the State Bar and
                change from time to time. Confirm yours at{' '}
                <a className="inline" href={MCLE_STATE_BAR_URL} target="_blank" rel="noopener noreferrer">
                  calbar.ca.gov
                </a>.
              </p>

              <h2>How CDTA delivers it</h2>
              <p>
                As part of full-day MCLE events at the Indio campus, taught by practicing trial
                attorneys, prosecutors, public defenders and judges rather than by a recording.
                All required subjects are covered across the academic year.
              </p>
              <p>
                For dates and registration, call{' '}
                <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a> or{' '}
                <Link className="inline" href="/contact">request the schedule</Link>.
              </p>

              <McleDisclosure />

              <h2>Other required subjects</h2>
              <ul>
                {mcleSubjects.filter((x) => x.slug !== m.slug).map((x) => (
                  <li key={x.slug}>
                    <Link className="inline" href={`/mcle/${x.slug}`}>{x.name}</Link>
                    <br />{x.hours} {x.hours === 1 ? 'required hour' : 'required hours'}. {x.teaser}
                  </li>
                ))}
              </ul>
            </div>
            <div className="side-col">
              <SideCard
                activeSlug={m.slug}
                links="mcle"
                heading="Request the MCLE schedule."
                copy="Full-day courses at the Indio campus through the academic year. Provider number 1167."
              />
            </div>
          </div>
        </div>
      </section>

      <CTA
        label="For Practicing Attorneys"
        heading={<>Get the hours <em>done.</em></>}
        copy="Full-day MCLE at the Indio campus, taught by trial practitioners."
        ctaHref="/contact"
        ctaText="Request the MCLE Schedule"
      />
    </>
  );
}
