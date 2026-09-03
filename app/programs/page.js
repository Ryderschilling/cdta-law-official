import Link from 'next/link';
import { PageHero, CTA, Disclosure } from '../components/Blocks';
import { programs, classSchedule } from '../lib/site';

export const metadata = {
  title: 'Programs of Study',
  description:
    'The CDTA Juris Doctor program, the Distance Learning Option, bar preparation and the Saturday Enrichment Program. Evening and Saturday classes in Indio, CA.',
  alternates: { canonical: '/programs' }
};

export default function Programs() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Programs' }]}
        label="Programs of Study"
        title={<>Four paths. One <em>standard.</em></>}
        lede="Whether you are beginning your legal education, studying from a distance, preparing for an examination, or already practicing, there is a route through CDTA that fits."
      />

      <section className="prose" style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <div className="dark-grid two" style={{ marginTop: 0 }}>
            {programs.map((p, i) => (
              <article className={`dcard reveal${i % 2 ? ' d1' : ''}`} key={p.slug}>
                <div className="idx">( {p.num} )</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, marginBottom: 12 }}>{p.name}</h2>
                <p>{p.teaser}</p>
                <span className="card-link">Explore {p.short} <span className="arr" aria-hidden="true">&rarr;</span></span>
                <Link className="card-cover" href={`/programs/${p.slug}`}>
                  <span>Read more about the {p.name}</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="prose-body" style={{ marginTop: 64 }}>
            <h2>How the schedule works</h2>
            <p>
              Classes meet {classSchedule.evenings.toLowerCase()}, and{' '}
              {classSchedule.saturday.toLowerCase()}. The J.D. is a four-year course of study.
            </p>
            <p>
              That timetable is the reason a large share of CDTA students are working adults and
              career changers. It is designed so that a person can become a lawyer without first
              becoming unemployed.
            </p>
            <Disclosure />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
