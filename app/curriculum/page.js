import { notFound } from 'next/navigation';
import { PageHero, Disclosure, CTA } from '../components/Blocks';
import { curriculum, hasCurriculum } from '../lib/academics';

export const metadata = {
  title: 'Curriculum',
  description:
    'The course of study at CDTA College of Law in Indio, California, year by year.',
  alternates: { canonical: '/curriculum' }
};

export default function Curriculum() {
  // Guarded: the page is fully built and 404s until the Academy supplies the
  // course list. See the note at the top of app/lib/academics.js.
  if (!hasCurriculum()) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Curriculum' }]}
        label="Course of Study"
        title={<>What you will <em>study.</em></>}
        lede="The full course of study, year by year."
      />

      <section className="prose light">
        <div className="wrap">
          {curriculum.map((y) => (
            <div className="curr-year" key={y.year}>
              <div className="sec-label">
                <div className="line" aria-hidden="true" />
                <span>{y.year}</span>
              </div>
              {y.note && <p className="curr-note">{y.note}</p>}
              <ul className="curr-list">
                {y.courses.map((c) => (
                  <li key={c.title}>
                    <div className="cc-head">
                      <h3>{c.title}</h3>
                      {c.units ? <span className="cc-units">{c.units} units</span> : null}
                    </div>
                    {c.description && <p>{c.description}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Disclosure light />
        </div>
      </section>

      <CTA />
    </>
  );
}
