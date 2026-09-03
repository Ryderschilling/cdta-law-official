import Link from 'next/link';
import { PageHero, Disclosure } from '../../components/Blocks';
import LeadForm from '../../components/LeadForm';
import { school, addressLine, admissionRequirements } from '../../lib/site';

export const metadata = {
  title: 'Apply',
  description:
    'Start your application to CDTA College of Law in Indio, CA. Send a message to the Admissions Office or call (760) 342-0900.',
  alternates: { canonical: '/admissions/apply' }
};

export default function Apply() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Admissions', href: '/admissions' }, { label: 'Apply' }]}
        label="Apply"
        title={<>Start the <em>conversation.</em></>}
        lede="Applications begin with a short message or a phone call to the Admissions Office. Tell us where you are and the Registrar will tell you what the next step is."
      />

      <section className="prose">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 30, marginBottom: 26 }}>
                Send a message to Admissions
              </h2>
              <LeadForm />
            </div>

            <div>
              <div className="contact-detail">
                <div className="cd-h">Registrar</div>
                <p>{school.registrar}</p>
                <p><a href={`tel:${school.phoneRaw}`}>{school.phone}</a></p>
                <p><a href={`mailto:${school.email}`}>{school.email}</a></p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Campus</div>
                <p>{school.street}<br />{school.city}, {school.state} {school.zip}</p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Before You Apply</div>
                <p style={{ fontSize: 15 }}>You must:</p>
                <ul style={{ listStyle: 'none', marginTop: 10 }}>
                  {admissionRequirements.map((r) => (
                    <li key={r.t} style={{ fontSize: 14.5, color: 'var(--dim)', padding: '10px 0', borderBottom: '1px solid var(--hair)', lineHeight: 1.7 }}>
                      {r.t}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 16, fontSize: 14.5 }}>
                  Full detail on the{' '}
                  <Link href="/admissions" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-line)' }}>admissions page</Link>.
                </p>
              </div>

              {/* Required on every admissions page, in addition to the footer. */}
              <Disclosure />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
