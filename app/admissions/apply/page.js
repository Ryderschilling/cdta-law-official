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
        lede="Your name, how to reach you, and a line about what you are looking for. It is not an application and it does not admit you. The Registrar will reach out with the next step."
      />

      <section className="prose">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 30, marginBottom: 26 }}>
                Quick apply
              </h2>
              <LeadForm quick />
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
                  <Link href="/admissions" style={{ color: 'var(--pur)', borderBottom: '1px solid var(--pur-line)' }}>admissions page</Link>.
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
