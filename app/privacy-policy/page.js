import Link from 'next/link';
import { PageHero } from '../components/Blocks';
import { school, addressLine } from '../lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for California Desert Trial Academy College of Law, including California Consumer Privacy Act rights.',
  alternates: { canonical: '/privacy-policy' }
};

export default function Privacy() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Privacy Policy' }]}
        label="Legal"
        title="Privacy policy"
        lede="What this website collects, why, and what you can require us to do about it."
      />
      <section className="prose">
        <div className="wrap-narrow">
          <div className="prose-body">
            <h2>What we collect</h2>
            <p>
              <strong>Information you give us.</strong> When you submit the inquiry form, we
              collect your name, and whichever of email address and phone number you provide,
              plus what you tell us about your education, your location and your question. We
              collect it in order to answer you.
            </p>
            <p>
              <strong>Information collected automatically.</strong> Like most websites, ours
              records basic technical information such as IP address, browser type and the pages
              visited, so we can keep the site working and understand which pages are useful.
            </p>
            <p>
              We do not ask for and do not want government identification numbers, financial
              account numbers, or sensitive personal information through this website. Please do
              not send them.
            </p>

            <h2>Cookies</h2>
            <p>
              We use cookies to run the site and to understand how visitors use it. The banner
              you saw on arrival lets you decline non-essential cookies, and the site works
              exactly the same if you do. Your choice is stored in your own browser.
            </p>
            <p>
              We do not sell or share personal information for cross-context behavioral
              advertising.
            </p>

            <h2>How we use what you send</h2>
            <p>
              To reply to your inquiry, to send you admissions or MCLE information you asked for,
              and to keep our own records of correspondence with prospective students. We do not
              sell your information, and we do not rent or trade contact lists.
            </p>
            <p>
              Form submissions are delivered by email to the Admissions Office through a
              third-party email delivery service acting on our behalf.
            </p>

            <h2>Your rights under the California Consumer Privacy Act</h2>
            <p>If you are a California resident, you have the right to:</p>
            <ul>
              <li><strong>Know</strong>What personal information we have collected about you, where it came from, why we collected it, and who we disclosed it to.</li>
              <li><strong>Delete</strong>Ask us to delete personal information we collected from you, subject to legal exceptions.</li>
              <li><strong>Correct</strong>Ask us to correct inaccurate personal information we hold about you.</li>
              <li><strong>Opt out</strong>Direct us not to sell or share your personal information. We do not do either, but the right stands.</li>
              <li><strong>Non-discrimination</strong>Exercise any of these rights without being treated differently for it.</li>
            </ul>
            <p>
              To exercise any of these, call{' '}
              <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a> or email{' '}
              <a className="inline" href={`mailto:${school.email}`}>{school.email}</a> with
              &ldquo;Privacy request&rdquo; in the subject. We will verify your identity before
              acting, so that nobody else can make a request about you.
            </p>

            <h2>Student records</h2>
            <p>
              This website does not host a student portal and does not hold student education
              records. Enrolled students&rsquo; records are held by the Academy directly and are
              handled under the school&rsquo;s own records policies. Ask the Registrar for those.
            </p>

            <h2>Retention and security</h2>
            <p>
              We keep inquiry correspondence for as long as it is useful to the admissions
              relationship, and then dispose of it. This site is served over HTTPS. No method of
              transmission over the internet is perfectly secure, which is the reason for the
              notice above the inquiry form.
            </p>

            <h2>Children</h2>
            <p>
              This site is directed at prospective law students and practicing attorneys. We do
              not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes</h2>
            <p>
              We will update this page when our practices change, and the current version always
              governs.
            </p>

            <h2>Contact</h2>
            <p>
              {school.name}, {addressLine}.{' '}
              <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>.{' '}
              <a className="inline" href={`mailto:${school.email}`}>{school.email}</a>.{' '}
              See also our <Link className="inline" href="/disclaimer">disclaimer</Link> and{' '}
              <Link className="inline" href="/accessibility">accessibility statement</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
