import Link from 'next/link';
import { PageHero, CTA, McleDisclosure } from '../components/Blocks';
import { school, mcleSubjects, MCLE_TOTAL_HOURS, MCLE_CYCLE_YEARS, MCLE_STATE_BAR_URL } from '../lib/site';

export const metadata = {
  title: 'MCLE for Practicing Attorneys',
  description:
    'Full-day MCLE courses in Indio, CA from LawTalk / CDTA, State Bar of California approved provider #1167. All 25 hours at one event, all required subjects covered.',
  alternates: { canonical: '/mcle' }
};

export default function Mcle() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'MCLE' }]}
        label="For Practicing Attorneys"
        title={<>All {MCLE_TOTAL_HOURS} hours. <em>One event.</em></>}
        lede={`${school.mcleProvider} is a State Bar of California approved MCLE provider, number ${school.mcleProviderNumber}, offering full-day Minimum Continuing Legal Education courses through the academic year.`}
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>What is offered</h2>
              <p>
                CDTA offers full-day MCLE courses in substantive legal issues and in
                skills-oriented training throughout the academic year, at the Indio campus.
                Registration is open to practicing attorneys.
              </p>
              <p>
                <strong>Current CDTA students in good standing attend as part of their tuition.</strong>{' '}
                A student who has been sitting in a room with practicing attorneys since first
                year does not meet the profession for the first time at admission.
              </p>

              <h2>The California requirement</h2>
              <p>
                Active California attorneys must complete {MCLE_TOTAL_HOURS} hours of
                MCLE every {MCLE_CYCLE_YEARS} years, including a set number of hours in
                specific required subjects. CDTA schedules its programming so that all required
                subjects are covered.
              </p>
              <p>
                Requirements are set by the State Bar and change from time to time. Confirm your
                own compliance group, deadline and required hours at{' '}
                <a className="inline" href={MCLE_STATE_BAR_URL} target="_blank" rel="noopener noreferrer">
                  calbar.ca.gov
                </a>{' '}
                before you register for anything, including this.
              </p>

              <h2>The required subject areas</h2>
              <p>
                Each of these carries its own required hours inside the California cycle. The
                hour figures shown are the State Bar&rsquo;s, not CDTA&rsquo;s.
              </p>

              <div className="dark-grid two" style={{ marginTop: 34 }}>
                {mcleSubjects.map((m, i) => (
                  <article className={`dcard reveal${i % 2 ? ' d1' : ''}`} key={m.slug}>
                    <div className="idx">( {m.num} ) &nbsp;&middot;&nbsp; {m.hours} {m.hours === 1 ? 'hour' : 'hours'}</div>
                    <h3>{m.name}</h3>
                    <p>{m.teaser}</p>
                    <span className="card-link">Read more <span className="arr" aria-hidden="true">&rarr;</span></span>
                    <Link className="card-cover" href={`/mcle/${m.slug}`}>
                      <span>Read more about {m.name} MCLE</span>
                    </Link>
                  </article>
                ))}
              </div>

              <h2 style={{ marginTop: 60 }}>Registering</h2>
              <p>
                Dates, pricing and registration for the current academic year are handled by the
                Academy directly. Call{' '}
                <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a> or{' '}
                <Link className="inline" href="/contact">send a message</Link> and ask for the MCLE
                schedule.
              </p>

              <McleDisclosure />
            </div>
            <div>
              <aside className="side-card">
                <div className="sc-label">MCLE Inquiries</div>
                <h3>Ask for the current schedule.</h3>
                <p>
                  Full-day courses at the Indio campus, taught by trial practitioners. Provider
                  number {school.mcleProviderNumber}.
                </p>
                <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
                <Link className="btn btn-gold" href="/contact">Request the MCLE Schedule</Link>
                <div className="side-links">
                  <div className="sl-h">Required Subjects</div>
                  {mcleSubjects.map((m) => (
                    <Link key={m.slug} href={`/mcle/${m.slug}`}>{m.name}</Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <CTA
        label="For Practicing Attorneys"
        heading={<>Get the hours <em>done.</em></>}
        copy="Full-day MCLE at the Indio campus, taught by trial practitioners rather than read from a slide deck."
        ctaHref="/contact"
        ctaText="Request the MCLE Schedule"
      />
    </>
  );
}
