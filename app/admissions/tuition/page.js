import Link from 'next/link';
import { PageHero, CTA, Disclosure } from '../../components/Blocks';
import { school, tuition } from '../../lib/site';

export const metadata = {
  title: 'Tuition & What Is Included',
  description:
    'CDTA College of Law tuition: $15,000 per academic year, $60,000 across the four-year course of study, including textbooks, LexisNexis, ExamSoft and AdaptiBar.',
  alternates: { canonical: '/admissions/tuition' }
};

export default function Tuition() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Tuition' }]}
        label="Tuition"
        title={<>What it costs, and what is <em>inside</em> that.</>}
        lede="The number matters less than what it covers and how it is paid. Both are below, and the Registrar confirms current terms before you commit to anything."
      />

      <section className="prose">
        <div className="wrap">
          <div className="prose-grid">
            <div className="prose-body">
              <h2>The figures</h2>
              <dl>
                <dt>Per academic year</dt>
                <dd>{tuition.annual}</dd>
                <dt>Four-year course of study</dt>
                <dd>{tuition.total}</dd>
              </dl>
              <p>
                CDTA is built to be paid for out of income rather than out of a loan. Tuition is
                structured as monthly payments across the course of study, and because classes
                meet on evenings and Saturdays, most students keep working while they study.
              </p>
              <div className="callout">
                <div className="callout-h">Confirm the payment schedule with the Registrar</div>
                <p>
                  Deposit amounts, monthly payment figures and due dates change between entering
                  classes and are not published here for that reason. {school.registrar} will give
                  you the current schedule in writing before you commit to anything. Call{' '}
                  <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>.
                </p>
              </div>

              <h2>What tuition includes</h2>
              <p>
                The second half of the cost question is what gets billed separately, and at most
                law schools the answer is a great deal. Here these are included:
              </p>
              <ul>
                {tuition.included.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <p>
                Bar preparation is the one worth pausing on. At most schools it is a separate
                four-figure purchase after graduation, at exactly the point a new graduate has
                the least money. Here the internal First-Year Law Students&rsquo; Examination
                reviews, AdaptiBar and ExamSoft are part of tuition.
              </p>

              <h2>Why debt is the real cost</h2>
              <p>
                A graduate carrying six figures of student debt cannot take a public defender
                role, a small-firm associate seat, or two lean years building a practice. The
                repayment schedule makes that decision for them.
              </p>
              <p>
                Paying monthly out of income rather than borrowing is the mechanism that keeps
                those options open. That is the point of the structure.{' '}
                <Link className="inline" href="/blog/law-school-without-student-loans">More on this here</Link>.
              </p>

              <h2>Financial aid</h2>
              <p>
                Ask the Registrar what is currently available and what is not. CDTA is a
                registered unaccredited law school, and eligibility for federal financial aid
                programs is not the same as at an accredited institution. Get that answer in
                writing before you enroll, not afterwards.
              </p>

              {/* Required on every admissions page, in addition to the footer. */}
              <Disclosure />
            </div>

            <div className="side-col">
              <aside className="side-card">
                <div className="sc-label">Tuition</div>
                <h3>{tuition.annual} per year</h3>
                <p>{tuition.total} across the four-year course of study, with textbooks, research tools and bar preparation included.</p>
                <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
                <Link className="btn btn-brand" href="/admissions/apply">Start Your Application</Link>
                <div className="side-links">
                  <div className="sl-h">Admissions</div>
                  <Link href="/admissions">Requirements</Link>
                  <Link href="/admissions/tuition" aria-current="page">Tuition &amp; what is included</Link>
                  <Link href="/admissions/apply">Apply</Link>
                  <Link href="/required-disclosures">Required disclosures</Link>
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
