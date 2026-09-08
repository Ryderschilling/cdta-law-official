import { notFound } from 'next/navigation';
import { PageHero, Disclosure, CTA, Placeholder } from '../components/Blocks';
import { alumni, hasAlumni } from '../lib/academics';

export const metadata = {
  title: 'Alumni',
  description:
    'Graduates of CDTA College of Law in Indio, California, and where their work has taken them.',
  alternates: { canonical: '/alumni' }
};

export default function Alumni() {
  // Guarded: built and ready, 404s until the Academy supplies real graduates.
  // Nobody appears here without their permission. See app/lib/academics.js.
  if (!hasAlumni()) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Alumni' }]}
        label="Alumni"
        title={<>Where our graduates <em>went.</em></>}
        lede="Graduates of the Academy, in their own words."
      />

      <section className="prose light">
        <div className="wrap">
          <div className="tile-grid cols-3" role="group" aria-label="Alumni">
            {alumni.map((p) => (
              <article className="tile alum-card" key={p.slug}>
                <div className="alum-img">
                  {p.img
                    ? <img src={p.img} alt={`${p.name}, CDTA College of Law graduate`} loading="lazy" />
                    : <Placeholder label={p.name} initials={p.name.split(' ').map((w) => w[0]).join('').slice(0, 2)} />}
                </div>
                <h3>{p.name}</h3>
                {p.classYear && <div className="alum-year">Class of {p.classYear}</div>}
                {p.practice && <p className="alum-practice">{p.practice}</p>}
                {p.bio && <p className="alum-bio">{p.bio}</p>}
                {p.admitted && <div className="alum-admitted">Admitted: {p.admitted}</div>}
              </article>
            ))}
          </div>
          <p className="alum-note">
            Individual experiences are not a prediction of any other student’s result. Admission to
            practice law in California is determined by the State Bar, not by the Academy.
          </p>
          <Disclosure light />
        </div>
      </section>

      <CTA />
    </>
  );
}
