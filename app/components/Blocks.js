import Link from 'next/link';
import {
  school, addressLine, programs, mcleSubjects,
  UNACCREDITED_DISCLOSURE, MCLE_STATE_BAR_URL
} from '../lib/site';

export function PageHero({ crumbs = [], label, title, lede }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        {crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} style={{ display: 'contents' }}>
                <span className="sep" aria-hidden="true">/</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {label && (
          <div className="sec-label"><div className="line" aria-hidden="true" /><span>{label}</span></div>
        )}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------
   REQUIRED DISCLOSURE. Renders on every admissions page and every
   program page, in addition to the site-wide footer block.
   Required by the State Bar of California. Do not remove.
   -------------------------------------------------------------- */
export function Disclosure({ light = false }) {
  return (
    <div className={`disclosure${light ? ' on-light' : ''}`}>
      <div className="dh">California State Bar Required Disclosure</div>
      <p><strong>{UNACCREDITED_DISCLOSURE}</strong></p>
      <p>
        CDTA College of Law is a law school registered with the Committee of Bar Examiners
        of the State Bar of California. It is not accredited by the American Bar Association
        or by the Committee of Bar Examiners. Read the{' '}
        <Link href="/required-disclosures">full required disclosure</Link> before you apply.
      </p>
    </div>
  );
}

export function McleDisclosure() {
  return (
    <div className="disclosure">
      <div className="dh">MCLE Provider Information</div>
      <p>
        <strong>{school.mcleProvider} is a State Bar of California approved MCLE provider,
        provider number {school.mcleProviderNumber}.</strong>
      </p>
      <p>
        MCLE requirements are set by the State Bar of California and change from time to time.
        Confirm your own compliance period and required hours at{' '}
        <a href={MCLE_STATE_BAR_URL} target="_blank" rel="noopener noreferrer">calbar.ca.gov</a>{' '}
        before you register. Attendance records and certificates are issued by the provider.
      </p>
    </div>
  );
}

export function SideCard({ activeSlug, heading, copy, links = 'programs' }) {
  const list = links === 'mcle' ? mcleSubjects : programs;
  const base = links === 'mcle' ? '/mcle' : '/programs';
  return (
    <aside className="side-card">
      <div className="sc-label">Admissions Office</div>
      <h3>{heading || 'Talk to the Registrar.'}</h3>
      <p>{copy || 'Speak with Irene Garcia Dolan about eligibility, transcripts and the next entering class. No admissions call center, no chase.'}</p>
      <a className="side-phone" href={`tel:${school.phoneRaw}`}>{school.phone}</a>
      <Link className="btn btn-gold" href="/admissions/apply">Start Your Application</Link>
      <div className="side-links">
        <div className="sl-h">{links === 'mcle' ? 'Required Subjects' : 'Programs of Study'}</div>
        {list.map((p) => (
          <Link
            key={p.slug}
            href={`${base}/${p.slug}`}
            aria-current={activeSlug === p.slug ? 'page' : undefined}
          >{p.name}</Link>
        ))}
      </div>
    </aside>
  );
}

export function CTA({
  label = 'Your Move, Counselor',
  heading = <>The courtroom is <em>waiting.</em></>,
  copy = 'Join the only law school in the Coachella Valley, in a program built around trial advocacy from the first term.',
  ctaHref = '/admissions/apply',
  ctaText = 'Apply to CDTA'
}) {
  return (
    <section className="cta">
      <div className="cta-bg" data-parallax="0.16" aria-hidden="true" />
      <div className="cta-inner">
        <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>{label}</span></div>
        <h2 className="reveal d1">{heading}</h2>
        <p className="reveal d2">{copy}</p>
        <div className="reveal d3">
          <Link href={ctaHref} className="btn btn-gold">{ctaText} <span className="arr" aria-hidden="true">&rarr;</span></Link>
        </div>
        <p className="phone reveal d4">
          Or call the Academy, <a href={`tel:${school.phoneRaw}`}>{school.phone}</a>
        </p>
        <p className="phone reveal d4" style={{ marginTop: 10 }}>{addressLine}</p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------
   TEMPORARY PHOTOGRAPHY. These are licensed stock images standing in
   until the Academy supplies its own. Alt text is deliberately
   generic: no image on this site claims to be a CDTA room, a CDTA
   building, or a CDTA person. Faculty portraits stay as marked
   <Placeholder> until real headshots arrive. See HANDOFF.md.
   -------------------------------------------------------------- */
export function Photo({ src, alt, w, h, priority = false, cool = false }) {
  return (
    <img
      src={src}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // pulls a cool-toned source back toward the warm gold palette
        filter: cool ? 'saturate(.5) sepia(.12) brightness(.92)' : 'saturate(.85)'
      }}
    />
  );
}

export function Placeholder({ label, initials }) {
  // Marked placeholder. The Academy owes real photography before launch.
  // Deliberately designed rather than left blank: a stock photograph of a
  // stranger must never stand in for a named member of this faculty.
  return (
    <div
      className={`ph${initials ? ' ph-mono' : ''}`}
      role="img"
      aria-label={`Placeholder image: ${label}. Photography to be supplied by the Academy.`}
    >
      {initials && <b className="ph-initials" aria-hidden="true">{initials}</b>}
      <span>{label}</span>
    </div>
  );
}
