import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero, CTA, Placeholder } from '../../components/Blocks';
import { faculty, school } from '../../lib/site';

export function generateStaticParams() {
  return faculty.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const f = faculty.find((x) => x.slug === slug);
  if (!f) return {};
  return {
    title: `${f.name}, ${f.role}`,
    description: f.teaser,
    alternates: { canonical: `/faculty/${f.slug}` }
  };
}

export default async function FacultyMember({ params }) {
  const { slug } = await params;
  const f = faculty.find((x) => x.slug === slug);
  if (!f) notFound();

  const idx = faculty.findIndex((x) => x.slug === slug);
  const next = faculty[(idx + 1) % faculty.length];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: f.name,
    jobTitle: f.role,
    description: f.teaser,
    worksFor: { '@type': 'CollegeOrUniversity', name: school.name, url: school.url },
    url: `${school.url}/faculty/${f.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <PageHero
        crumbs={[{ label: 'Faculty', href: '/faculty' }, { label: f.name }]}
        label={f.role}
        title={f.name}
        lede={f.teaser}
      />

      <section className="prose">
        <div className="wrap">
          <div className="profile">
            <div>
              <div className="profile-img img-reveal"><Placeholder label={f.name} initials={f.initials} /></div>
              <h2 style={{ fontSize: 20, marginTop: 34 }}>Credentials</h2>
              <ul className="cred-list">
                {f.credentials.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div className="prose-body">
              <h2>About {f.name.replace(/^Hon\.?\s+/, '')}</h2>
              {f.detail.map((p, i) => <p key={i}>{p}</p>)}

              <div className="callout">
                <div className="callout-h">Photography</div>
                <p>
                  The portrait on this page is a marked placeholder. CDTA supplies faculty
                  photography, and it will replace this before launch. Nothing on this site
                  uses a stock photograph of a stranger in place of a real person.
                </p>
              </div>

              <h2>Teaching at CDTA</h2>
              <p>
                Most classes at CDTA are led by two instructors, and every California State Bar
                tested course is taught in a real courtroom environment. Students argue in a
                working trial courtroom, an appellate courtroom and a federal courtroom on the
                Indio campus.
              </p>
              <p>
                <Link className="inline" href="/faculty">See the whole faculty</Link>, or read
                about the <Link className="inline" href="/programs/juris-doctor">Juris Doctor program</Link>.
              </p>

              <h2>Next profile</h2>
              <p>
                <Link className="inline" href={`/faculty/${next.slug}`}>{next.name}</Link>, {next.role}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
