import Link from 'next/link';
import { PageHero } from '../components/Blocks';
import { school, addressLine, UNACCREDITED_DISCLOSURE } from '../lib/site';

export const metadata = {
  title: 'Disclaimer',
  description: 'Website disclaimer for California Desert Trial Academy College of Law.',
  alternates: { canonical: '/disclaimer' }
};

export default function Disclaimer() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Disclaimer' }]}
        label="Legal"
        title="Disclaimer"
        lede="What this website is, what it is not, and what you should not rely on it for."
      />
      <section className="prose">
        <div className="wrap-narrow">
          <div className="prose-body">
            <h2>This site is informational</h2>
            <p>
              This website describes the programs, faculty and admission requirements of{' '}
              {school.name}. It is provided for general informational purposes only.
            </p>

            <h2>Nothing here is legal advice</h2>
            <p>
              CDTA is a law school. It does not provide legal services to the public through this
              website. Nothing on this site is legal advice, and reading it, contacting the
              Academy, or submitting a form does not create an attorney-client relationship with
              CDTA, with its faculty, or with any attorney associated with the school.
            </p>
            <p>
              Several CDTA faculty members practice law independently at their own firms. Their
              biographies on this site describe that practice. They are not offering to represent
              you through this website, and you should not send confidential information about a
              legal matter through any form on this site.
            </p>

            <h2>Admissions and program information can change</h2>
            <p>
              Admission requirements, tuition, fees, payment schedules, class schedules, faculty
              assignments and program content are subject to change. Nothing on this website is
              an offer of admission, a guarantee of admission, or a contract.
            </p>
            <p>
              Confirm current terms with the Admissions Office before you make any decision or
              payment. Where information on this site conflicts with the school&rsquo;s official
              published materials or its filings with the State Bar of California, those govern.
            </p>

            <h2>No guarantee of examination or career outcomes</h2>
            <p>
              No law school can guarantee that a student will pass the First-Year Law
              Students&rsquo; Examination, the California Bar Examination, or any other
              examination, or that a graduate will be admitted to practice or obtain employment.
              CDTA makes no such guarantee, and nothing on this site should be read as one.
            </p>
            <p>
              Where this site states an outcome figure, it is the figure the school publishes,
              stated as the school states it. It describes past results for past students. It is
              not a prediction about you.
            </p>

            <h2>Required State Bar disclosure</h2>
            <p><strong>{UNACCREDITED_DISCLOSURE}</strong></p>
            <p>
              The full set of disclosures required of this school by the State Bar of California
              is on the <Link className="inline" href="/required-disclosures">Required Disclosures</Link> page.
              Read it before you apply.
            </p>

            <h2>External links</h2>
            <p>
              This site links to third-party websites, including the State Bar of California and
              the school&rsquo;s social media pages. CDTA does not control those sites and is not
              responsible for their content.
            </p>

            <h2>Contact</h2>
            <p>
              {school.name}, {addressLine}.{' '}
              <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>.{' '}
              <a className="inline" href={`mailto:${school.email}`}>{school.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
