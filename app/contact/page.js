import Link from 'next/link';
import { PageHero } from '../components/Blocks';
import LeadForm from '../components/LeadForm';
import { school, addressLine, classSchedule } from '../lib/site';

export const metadata = {
  title: 'Contact',
  description:
    'Contact California Desert Trial Academy College of Law: 45-290 Fargo Street, Indio, CA 92201. (760) 342-0900.',
  alternates: { canonical: '/contact' }
};

export default function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        label="Contact"
        title={<>Talk to the <em>Academy.</em></>}
        lede="Admissions questions, MCLE registration, or a request to look around the courtrooms. All of it starts here or on the phone."
      />

      <section className="prose">
        <div className="wrap">
          <div className="form-grid">
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 30, marginBottom: 26 }}>
                Send a message
              </h2>
              <LeadForm />
            </div>

            <div>
              <div className="contact-detail">
                <div className="cd-h">Phone</div>
                <p><a href={`tel:${school.phoneRaw}`}>{school.phone}</a></p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Email</div>
                <p><a href={`mailto:${school.email}`}>{school.email}</a></p>
                <p style={{ fontSize: 14 }}>{school.registrar}, Registrar</p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Campus</div>
                <p>{school.street}<br />{school.city}, {school.state} {school.zip}</p>
                <p style={{ fontSize: 14 }}>Downtown Indio, {school.county}</p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Classes Meet</div>
                <p style={{ fontSize: 15.5 }}>{classSchedule.evenings}</p>
                <p style={{ fontSize: 15.5 }}>{classSchedule.saturday}</p>
              </div>
              <div className="contact-detail">
                <div className="cd-h">Follow</div>
                <p>
                  <a href={school.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  {' · '}
                  <a href={school.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {' · '}
                  <a href={school.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
                </p>
              </div>

              <div className="map-embed">
                <iframe
                  title={`Map showing ${addressLine}`}
                  src="https://www.google.com/maps?q=45-290%20Fargo%20Street%2C%20Indio%2C%20CA%2092201&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <p style={{ marginTop: 26, fontSize: 14, color: 'var(--dim)', lineHeight: 1.85 }}>
                Applying? Start at{' '}
                <Link href="/admissions/apply" style={{ color: 'var(--pur)', borderBottom: '1px solid var(--pur-line)' }}>Admissions</Link>.
                Practicing attorney after MCLE hours? Ask for the{' '}
                <Link href="/mcle" style={{ color: 'var(--pur)', borderBottom: '1px solid var(--pur-line)' }}>MCLE schedule</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
