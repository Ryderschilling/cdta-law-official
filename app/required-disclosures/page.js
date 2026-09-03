import Link from 'next/link';
import { PageHero } from '../components/Blocks';
import {
  school, addressLine,
  UNACCREDITED_DISCLOSURE, METHOD_OF_INSTRUCTION, FYLSX_DISCLOSURE,
  OTHER_JURISDICTIONS, NONDISCRIMINATION, SERVICE_AREA, outcomes
} from '../lib/site';

export const metadata = {
  title: 'California State Bar Required Disclosures',
  description:
    'The State Bar of California required disclosures for California Desert Trial Academy College of Law: method of instruction, First-Year Law Students’ Examination, and admission to practice outside California.',
  alternates: { canonical: '/required-disclosures' }
};

export default function RequiredDisclosures() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Required Disclosures' }]}
        label="State Bar of California"
        title="Required disclosures"
        lede="Read this page before you apply. These disclosures are required of this law school by the State Bar of California, and they describe real limits on what this degree qualifies you to do."
      />

      <section className="prose">
        <div className="wrap-narrow">
          <div className="prose-body">
            <div className="disclosure" style={{ marginTop: 0, marginBottom: 44 }}>
              <div className="dh">The disclosure that matters most</div>
              <p><strong>{UNACCREDITED_DISCLOSURE}</strong></p>
            </div>

            <h2>Method of instruction</h2>
            <p>{METHOD_OF_INSTRUCTION}</p>
            <p>
              CDTA offers a Distance Learning Option to students living fifty miles or more from
              the Indio campus, within a program whose method of instruction is, as stated above,
              principally in physical classroom facilities. Ask the Admissions Office which
              components require attendance in person before you enroll.{' '}
              <Link className="inline" href="/programs/distance-learning">More on the Distance Learning Option</Link>.
            </p>

            <h2>First-Year Law Students&rsquo; Examination</h2>
            <p>{FYLSX_DISCLOSURE}</p>

            <h2>Admission to practice in other jurisdictions</h2>
            <p><strong>{UNACCREDITED_DISCLOSURE}</strong></p>
            <p>{OTHER_JURISDICTIONS}</p>
            <p>
              Do this before you enroll rather than after you graduate. Requirements vary widely
              between states, and some will not accept a degree from a California registered
              unaccredited law school at all.
            </p>

            <h2>Accreditation status</h2>
            <p>
              CDTA College of Law is a law school registered with the Committee of Bar Examiners
              of the State Bar of California. It is not accredited by the American Bar
              Association, and it is not accredited by the Committee of Bar Examiners.
            </p>
            <p>
              The school&rsquo;s own published comparison is to other schools in the same
              category: {outcomes.fylsxContext.charAt(0).toLowerCase() + outcomes.fylsxContext.slice(1)}
            </p>

            <h2>Outcomes</h2>
            <p>
              CDTA publishes one outcome figure: <strong>{outcomes.fylsxRate}</strong>{' '}
              {outcomes.fylsxLabel}.
            </p>
            <p>
              That figure concerns the First-Year Law Students&rsquo; Examination, which is not
              the California Bar Examination. CDTA does not publish a General Bar Examination
              passage rate, and nothing on this website states or implies one.
            </p>

            <h2>Statement of nondiscrimination</h2>
            <p>{NONDISCRIMINATION}</p>

            <h2>Service area</h2>
            <p>{SERVICE_AREA}</p>

            <h2>Official disclosure filings</h2>
            <p>
              The State Bar of California publishes its own information about registered
              unaccredited law schools, including this one. The school&rsquo;s current official
              disclosure filings are available from the Admissions Office on request.
            </p>
            <div className="callout">
              <div className="callout-h">Ask for anything you want in writing</div>
              <p>
                Call <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a> or
                email <a className="inline" href={`mailto:${school.email}`}>{school.email}</a>.
                Campus: {addressLine}.
              </p>
            </div>

            <h2>Currency of this page</h2>
            <p>
              Disclosure requirements and the school&rsquo;s own figures change. If anything here
              conflicts with a current official filing by the school or with the State Bar of
              California, the official filing governs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
