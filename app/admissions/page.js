import Link from 'next/link';
import { PageHero, CTA, Disclosure } from '../components/Blocks';
import Faq from '../components/Faq';
import { school, admissionRequirements, admissionPaths, tuition, classSchedule } from '../lib/site';

export const metadata = {
  title: 'Admissions',
  description:
    'How to get into CDTA College of Law: admission requirements, the four admission paths, and what the Registrar needs from you. Indio, CA. (760) 342-0900.',
  alternates: { canonical: '/admissions' }
};

const FAQ = [
  ['Do I need a bachelor’s degree?',
    'No. A four-year degree is one path in. CDTA also admits students holding a two-year degree, and students with at least 60 transferable college credits or an equivalent qualifying result.'],
  ['Is there an age limit?',
    'You must be at least 18. There is no upper limit, and evening and Saturday classes exist precisely so that people with careers and families can do this.'],
  ['Do I need the LSAT?',
    'Yes. Admission requires an appropriate LSAT score. The Admissions Office will tell you what is appropriate for the current entering class.'],
  ['What if I live a long way from Indio?',
    'Students living 50 miles or more from the campus may complete most of their studies through the Distance Learning Option. Confirm your eligibility with Admissions before you plan around it.'],
  ['Will this let me practice outside California?',
    'Not necessarily. Study at, or graduation from, this law school may not qualify a student to take the bar examination or to satisfy the requirements for admission to practice in jurisdictions other than California. If you intend to practice elsewhere, contact that jurisdiction’s admitting authority before you enroll.'],
  ['How much does it cost?',
    `Tuition is ${tuition.annual} per academic year, ${tuition.total} across the four-year course of study, and it includes textbooks, LexisNexis, ExamSoft, AdaptiBar in the first year and bar preparation reviews. Confirm current figures and the payment schedule with the Registrar.`]
];

export default function Admissions() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Admissions' }]}
        label="Admissions"
        title={<>More than one way <em>in.</em></>}
        lede="CDTA admits students from a range of academic backgrounds. If you have the drive to advocate, there is very likely a path here for you."
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>What is required</h2>
              <p>To begin your course of study you must:</p>
              <ul>
                {admissionRequirements.map((r) => (
                  <li key={r.t}><strong>{r.t}</strong>{r.s}</li>
                ))}
              </ul>

              <h2>The four paths in</h2>
              <p>
                Most people assume law school requires a four-year degree. At CDTA it does not,
                and the difference is worth understanding before you rule yourself out.
              </p>
              <ol>
                {admissionPaths.map((p) => (
                  <li key={p.tag}><strong>{p.h}</strong>{p.p}</li>
                ))}
              </ol>

              <h2>How the process runs</h2>
              <p>
                It starts with a short initial admissions application, which opens your file and
                starts a conversation with the Registrar. If you qualify, you are then invited to
                complete the comprehensive CDTA admissions application.
              </p>
              <p>
                Application deadlines and the current entering class timetable come from the
                Registrar, {school.registrar}. Call{' '}
                <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>, email{' '}
                <a className="inline" href={`mailto:${school.email}`}>{school.email}</a>, or{' '}
                <Link className="inline" href="/admissions/apply">start the conversation here</Link>.
              </p>

              <h2>What you are signing up for</h2>
              <p>
                A four-year course of study. Classes meet {classSchedule.evenings} Saturday
                classes run {classSchedule.saturday.replace('Saturday, ', '')} Instruction in a working courtroom, and
                the First-Year Law Students&rsquo; Examination after the first year.
              </p>
              <p>
                Read the <Link className="inline" href="/programs/juris-doctor">J.D. program page</Link>{' '}
                and the <Link className="inline" href="/admissions/tuition">tuition page</Link> before
                you apply. Read the{' '}
                <Link className="inline" href="/required-disclosures">required disclosures</Link>{' '}
                before you do either.
              </p>

              {/* Required on every admissions page, in addition to the footer. */}
              <Disclosure />

              <h2 id="faq">Common questions</h2>
              <Faq items={FAQ} />
            </div>

            <div className="side-col">
              <aside className="side-card">
                <div className="sc-label">Admissions Office</div>
                <h3>Talk to the Registrar.</h3>
                <p>
                  {school.registrar} handles admissions, eligibility and State Bar compliance.
                  Ask her directly rather than guessing from a website.
                </p>
                <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
                <Link className="btn btn-gold" href="/admissions/apply">Start Your Application</Link>
                <div className="side-links">
                  <div className="sl-h">Admissions</div>
                  <Link href="/admissions" aria-current="page">Requirements</Link>
                  <Link href="/admissions/tuition">Tuition &amp; what is included</Link>
                  <Link href="/admissions/apply">Apply</Link>
                  <Link href="/required-disclosures">Required disclosures</Link>
                  <Link href="/programs/distance-learning">Distance Learning Option</Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
