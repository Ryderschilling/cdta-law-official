import Link from 'next/link';
import { PageHero, CTA, Placeholder } from '../components/Blocks';
import { faculty, additionalFaculty, school } from '../lib/site';

export const metadata = {
  title: 'Faculty',
  description:
    'CDTA faculty are practicing attorneys, prosecutors, public defenders and sitting and retired Riverside County judges who teach in the courtrooms they work in.',
  alternates: { canonical: '/faculty' }
};

export default function Faculty() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Faculty' }]}
        label="The People in the Room"
        title={<>Taught by the people who <em>practice.</em></>}
        lede="Most classes at CDTA are led by two instructors. They are trial lawyers, prosecutors, public defenders and judges, and they teach in the courtrooms they work in."
        img="/img/hero-courtroom.webp"
        alt="A CDTA courtroom on campus, where classes are taught."
      />

      <section className="prose" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="fac-grid cols-3" style={{ marginTop: 0 }}
              role="group" tabIndex={0} aria-label="Faculty">
            {faculty.map((f) => (
              <article className="fac-card tile" key={f.slug}>
                <div className="fac-img img-reveal"><Placeholder label={f.name} initials={f.initials} /></div>
                <div className="fac-body">
                  <div className="fac-role">{f.role}</div>
                  <h2 className="fac-name">{f.name}</h2>
                  {f.teaching && <div className="fac-teach">{f.teaching}</div>}
                  <p className="fac-teaser">{f.teaser}</p>
                  <span className="fac-more">Full profile <span className="arr" aria-hidden="true">&rarr;</span></span>
                </div>
                <Link className="card-cover" href={`/faculty/${f.slug}`}>
                  <span>Read the full profile of {f.name}</span>
                </Link>
              </article>
            ))}
          </div>

          {additionalFaculty.length > 0 && (
            <>
              <h2 style={{ marginTop: 70 }}>Also on the faculty</h2>
              <div className="fac-extra">
                {additionalFaculty.map((f) => (
                  <div className="fx" key={f.name}>
                    <div className="n">{f.name}</div>
                    {f.role && <div className="r">{f.role}</div>}
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 26, fontSize: 14, color: 'var(--dim)', lineHeight: 1.85 }}>
                Full profiles for these faculty members are being prepared. In the meantime,
                the Admissions Office can tell you who teaches which subject:{' '}
                <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>.
              </p>
            </>
          )}
        </div>
      </section>

      <CTA
        label="Sit in the Room"
        heading={<>Argue in front of a <em>judge.</em></>}
        copy="At CDTA the person hearing your argument has heard thousands of real ones. Ask Admissions about visiting a class."
      />
    </>
  );
}
