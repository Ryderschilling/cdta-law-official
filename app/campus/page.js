import Link from 'next/link';
import { PageHero, CTA, Photo } from '../components/Blocks';
import { school, addressLine, courtrooms, classSchedule, SERVICE_AREA } from '../lib/site';

export const metadata = {
  title: 'The Campus',
  description:
    'The CDTA campus in downtown Indio: a working California trial courtroom, an appellate courtroom and a federal courtroom. Evening and Saturday classes.',
  alternates: { canonical: '/campus' }
};

export default function Campus() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Campus' }]}
        label="Downtown Indio"
        title={<>Three courtrooms, <em>one campus.</em></>}
        lede="The CDTA campus is in downtown Indio. Instruction happens in working courtrooms rather than lecture theaters, which is the whole design."
      />

      <section className="feature">
        <div className="wrap">
          <div className="feature-grid">
            <div className="img-stack reveal-left">
              <div className="img-a img-reveal">
                <Photo src="/img/library.webp" w={1200} h={1100}
                  alt="A law library corridor lined floor to ceiling with bound volumes" />
              </div>
              <div className="img-b img-reveal d2">
                <Photo src="/img/columns.webp" w={1000} h={1300}
                  alt="Stone columns and carved pediment of a courthouse" />
              </div>
              <div className="float-tag reveal d3">{school.street} &middot; {school.city}</div>
            </div>
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>The Rooms</span></div>
              <h2 className="reveal d1">Where the teaching <em>happens.</em></h2>
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

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>When classes meet</h2>
              <p>
                <strong>Evenings.</strong> {classSchedule.evenings}
              </p>
              <p>
                <strong>Saturdays.</strong> {classSchedule.saturday} Saturday is also when the{' '}
                <Link className="inline" href="/programs/saturday-enrichment">Saturday Enrichment Program</Link>{' '}
                and the weekly Barrister luncheon run.
              </p>

              <h2>Getting here</h2>
              <p>
                The campus is at {addressLine}, in downtown Indio, minutes from the Riverside
                County Superior Court at the Larson Justice Center. Most students drive in from
                across the valley: Palm Desert, La Quinta, Palm Springs, Coachella, Cathedral
                City and Rancho Mirage are all a short trip.
              </p>
              <p>{SERVICE_AREA}</p>
              <p>
                Living fifty miles or more away? The{' '}
                <Link className="inline" href="/programs/distance-learning">Distance Learning Option</Link>{' '}
                may apply to you.
              </p>

              <div className="callout">
                <div className="callout-h">Come and see it</div>
                <p>
                  The courtrooms are the reason to visit rather than read. Call{' '}
                  <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a> and ask
                  the Admissions Office to arrange a look around, or{' '}
                  <Link className="inline" href="/contact">send a message</Link>.
                </p>
              </div>

              <div className="map-embed">
                <iframe
                  title="Map showing the CDTA College of Law campus in Indio, California"
                  src="https://www.google.com/maps?q=45-290%20Fargo%20Street%2C%20Indio%2C%20CA%2092201&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="side-col">
              <aside className="side-card">
                <div className="sc-label">Visit the Academy</div>
                <h3>{school.street}<br />{school.city}, {school.state} {school.zip}</h3>
                <p>Downtown Indio, Riverside County. Ask for the Admissions Office.</p>
                <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
                <Link className="btn btn-gold" href="/contact">Arrange a Visit</Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
