import Link from 'next/link';
import { PageHero, CTA, Photo, Disclosure } from '../components/Blocks';
import { school, outcomes, tenReasons, courtrooms, classSchedule } from '../lib/site';

export const metadata = {
  title: 'The Academy',
  description:
    'California Desert Trial Academy College of Law: the only law school in the Coachella Valley, founded to close the gap between legal theory and courtroom advocacy.',
  alternates: { canonical: '/about' }
};

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'The Academy' }]}
        label="About CDTA"
        title={<>A law school built for the <em>courtroom.</em></>}
        lede="Our mission is to educate, train, and develop extraordinary legal advocates. Everything below follows from that one sentence."
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>The mission, in the school&rsquo;s own words</h2>
              <p>
                Our mission at California Desert Trial Academy College of Law is to educate,
                train, and develop extraordinary legal advocates. Your legal education will be
                comprised of bar-tested academic subjects, skills training, and values
                reinforcement. Upon completion of your four-year course of study you will be
                fully qualified to take and pass the California Bar Examination. Upon admission
                to the Bar you will be fully educated, trained and coached to represent your
                clients on your first day of practice with skills far beyond your contemporaries
                from other law schools.
              </p>

              <h2>Why the school exists</h2>
              <p>
                CDTA grew out of conversations that <strong>John Patrick Dolan</strong> and{' '}
                <strong>Irene Garcia Dolan</strong> had with the trial attorneys F. Lee Bailey
                and Gerry Spence, and out of an observation neither of them could unsee: law
                schools were producing graduates who understood doctrine and had never stood up
                and argued anything.
              </p>
              <p>
                They founded a school where trial advocacy is not an elective in the third year.
                It is the organizing principle. CDTA describes itself as the only law school in
                the country dedicated to trial advocacy, and it is the only law school of any
                kind in the Coachella Valley.
              </p>

              <h2>How that changes the teaching</h2>
              <p>
                Every California State Bar tested course is taught in a real courtroom
                environment. Most classes are led by two instructors rather than one, and those
                instructors are practicing attorneys and sitting and retired judges.
              </p>
              <p>
                The campus has three courtrooms: a fully functioning California trial courtroom,
                a California appellate courtroom, and a federal courtroom. Students argue in all
                three. <Link className="inline" href="/campus">See the campus</Link>.
              </p>

              <h2>Who the school admits</h2>
              <p>
                CDTA welcomes students holding a four-year degree, students holding a two-year
                degree, and students with at least 60 transferable college credits. Applicants
                must be at least eighteen and achieve an appropriate LSAT score.
              </p>
              <p>
                Classes meet {classSchedule.evenings} Saturday classes run{' '}
                {classSchedule.saturday.replace('Saturday, ', '')} That schedule exists so that people with
                jobs, families and existing careers can do this without abandoning any of it.
                Students living fifty miles or more from the Indio campus may complete most of
                their studies through the{' '}
                <Link className="inline" href="/programs/distance-learning">Distance Learning Option</Link>.
              </p>

              <h2>What the school publishes about results</h2>
              <p>
                <strong>{outcomes.fylsxRate}</strong> {outcomes.fylsxLabel}.{' '}
                {outcomes.fylsxContext}
              </p>
              <p>
                That figure concerns the First-Year Law Students&rsquo; Examination, which is not
                the California Bar Examination. CDTA does not publish a General Bar Examination
                passage rate, and nothing on this site should be read as promising one. No law
                school can guarantee an examination outcome.
              </p>

              <Disclosure />
            </div>

            <div className="side-col">
              <aside className="side-card">
                <div className="sc-label">At a Glance</div>
                <h3>{school.shortName}</h3>
                <div className="side-links" style={{ marginTop: 22, borderTop: 'none', paddingTop: 0 }}>
                  <Link href="/campus">The campus and three courtrooms</Link>
                  <Link href="/faculty">Faculty: attorneys and judges</Link>
                  <Link href="/programs/juris-doctor">The J.D. program</Link>
                  <Link href="/admissions">Admission requirements</Link>
                  <Link href="/admissions/tuition">Tuition and what is included</Link>
                  <Link href="/required-disclosures">Required disclosures</Link>
                </div>
                <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
                <Link className="btn btn-gold" href="/admissions/apply">Start Your Application</Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ten reasons ---------- */}
      <section className="light">
        <div className="wrap">
          <div className="light-head">
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>Ten Reasons</span></div>
              <h2 className="reveal d1">What is <em>included</em>, and what that means.</h2>
            </div>
            <p className="reveal d2">
              The list the school has always published, without the brochure language. Every item
              here is covered by tuition rather than billed separately.
            </p>
          </div>
          <ol className="card-grid cols-3" style={{ listStyle: 'none' }}
              tabIndex={0} aria-label="Ten reasons to attend CDTA">
            {tenReasons.map(([n, h, p]) => (
              <li className="card tile" key={n}>
                <span className="idx">( {n} )</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- courtrooms ---------- */}
      <section className="feature">
        <div className="wrap">
          <div className="feature-grid">
            <div className="img-stack reveal-left">
              <div className="img-a img-reveal">
                <Photo src="/img/busts.webp" w={1200} h={1100}
                  alt="Marble busts standing along a gallery of law library shelving" />
              </div>
              <div className="img-b img-reveal d2">
                <Photo src="/img/desk.webp" w={900} h={660} cool
                  alt="A hand signing a document at a desk" />
              </div>
            </div>
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>Three Courtrooms</span></div>
              <h2 className="reveal d1">Not a lecture hall with a <em>gavel.</em></h2>
              <div className="num-list">
                {courtrooms.map((c, i) => (
                  <div className={`num-item reveal d${i + 1}`} key={c.n}>
                    <span className="n" aria-hidden="true">{c.n}</span>
                    <div><h3>{c.h}</h3><p>{c.p}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
