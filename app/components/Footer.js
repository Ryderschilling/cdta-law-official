import Link from 'next/link';
import {
  school, programs,
  UNACCREDITED_DISCLOSURE, METHOD_OF_INSTRUCTION, NONDISCRIMINATION
} from '../lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" href="/" aria-label={`${school.name}, home`}>
              <div className="brand-seal" aria-hidden="true">CD</div>
              <div className="brand-text">
                <div className="top">California Desert Trial Academy</div>
                <div className="bottom">College of Law</div>
              </div>
            </Link>
            <p>{school.tagline} in the heart of the Coachella Valley.</p>
            <div className="foot-social">
              <a href={school.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={school.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={school.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>

          <div className="foot-col">
            <h2 className="foot-h">Academy</h2>
            <Link href="/about">About CDTA</Link>
            <Link href="/campus">The Campus</Link>
            <Link href="/faculty">Faculty</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="foot-col">
            <h2 className="foot-h">Study</h2>
            {programs.map((p) => (
              <Link key={p.slug} href={`/programs/${p.slug}`}>{p.name}</Link>
            ))}
            <Link href="/mcle">MCLE for Attorneys</Link>
          </div>

          <div className="foot-col">
            <h2 className="foot-h">Admissions</h2>
            <Link href="/admissions">Requirements</Link>
            <Link href="/admissions/tuition">Tuition</Link>
            <Link href="/admissions/apply">Apply Now</Link>
            <a href={`tel:${school.phoneRaw}`}>{school.phone}</a>
            <span>{school.street}<br />{school.city}, {school.state} {school.zip}</span>
          </div>
        </div>

        {/* ------------------------------------------------------------
            REQUIRED DISCLOSURE BLOCK. The State Bar of California
            requires the unaccredited-status disclosure. It renders on
            EVERY page through this footer, and again on every admissions
            and program page. Do not remove, shorten, or paraphrase it.
           ------------------------------------------------------------ */}
        <div className="legal-block">
          <div className="lh">California State Bar Required Disclosure</div>
          <p><strong>{UNACCREDITED_DISCLOSURE}</strong></p>
          <p>{METHOD_OF_INSTRUCTION} The full disclosure required by the State Bar of California, including the First-Year Law Students&rsquo; Examination requirement, is published on the{' '}
            <Link href="/required-disclosures">Required Disclosures</Link> page.</p>
          <p>{NONDISCRIMINATION}</p>
          {/* The service-area line and the campus address used to sit here too. Both
              are duplicated a few inches up in the Contact column and on /campus, and
              they were adding a quarter of the footer's height on a phone. Cut at every
              breakpoint rather than hidden on small screens, so nothing disappears from
              a mobile-first crawl. The required disclosure above is untouched. */}
          <p>
            Nothing on this website is legal advice. Information about admission,
            tuition and program requirements is subject to change; confirm current
            terms with the Admissions Office.
          </p>
        </div>

        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} {school.name}. All rights reserved.</span>
          <nav aria-label="Legal">
            <Link href="/required-disclosures">Required Disclosures</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
