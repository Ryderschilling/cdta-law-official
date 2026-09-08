'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { school, programs, mcleSubjects } from '../lib/site';
import { hasCurriculum, hasAlumni } from '../lib/academics';

// The three sections that have children. Everything else in the mobile menu is a
// single link, so collapsing only these takes the menu from ~20 rows to 11.
const SECTIONS = [
  {
    id: 'programs',
    label: 'Programs',
    href: '/programs',
    items: () => programs.map((p) => ({ href: `/programs/${p.slug}`, label: p.name }))
  },
  {
    id: 'mcle',
    label: 'MCLE for Attorneys',
    href: '/mcle',
    items: () => mcleSubjects.map((m) => ({ href: `/mcle/${m.slug}`, label: m.name }))
  },
  {
    id: 'admissions',
    label: 'Admissions',
    href: '/admissions',
    items: () => [
      { href: '/admissions/tuition', label: 'Tuition & What Is Included' },
      { href: '/admissions/apply', label: 'Apply' }
    ]
  }
];

const sectionForPath = (p) => SECTIONS.find((s) => p === s.href || p.startsWith(`${s.href}/`))?.id ?? null;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [open]);

  // Opening the menu expands the section you are already inside, so the page you
  // are on is never buried behind a tap. Everything else starts collapsed.
  useEffect(() => {
    if (!open) return;
    const current = sectionForPath(pathname);
    setExpanded(current ? [current] : []);
  }, [open, pathname]);

  const close = () => setOpen(false);
  const toggle = (id) =>
    setExpanded((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const current = (href) => (pathname === href ? 'page' : undefined);

  return (
    <>
      <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} aria-label="Main">
        <Link className="brand" href="/" aria-label={`${school.name}, home`}>
          <div className="brand-seal" aria-hidden="true">CD</div>
          <div className="brand-text">
            <div className="top">California Desert Trial Academy</div>
            <div className="bottom">College of Law</div>
          </div>
        </Link>

        <div className="nav-links">
          <Link href="/about">The Academy</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/faculty">Faculty</Link>
          {/* Guarded routes. They 404 while empty, so they must not be linked
              until app/lib/academics.js has data. Both appear on their own. */}
          {hasCurriculum() && <Link href="/curriculum">Curriculum</Link>}
          {hasAlumni() && <Link href="/alumni">Alumni</Link>}
          <Link href="/mcle">MCLE</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/admissions/apply" className="nav-cta">Apply Now</Link>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >{open ? 'Close' : 'Menu'}</button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        <Link href="/" onClick={close} aria-current={current('/')}>Home</Link>
        <Link href="/about" onClick={close} aria-current={current('/about')}>The Academy</Link>
        <Link href="/campus" onClick={close} aria-current={current('/campus')}>Campus</Link>
        <Link href="/faculty" onClick={close} aria-current={current('/faculty')}>Faculty</Link>

        {SECTIONS.map((s) => {
          const isOpen = expanded.includes(s.id);
          const items = s.items();
          return (
            <div className="mm-group" key={s.id}>
              {/* The label stays a link to the section's own index page. The
                  chevron is a separate control, so expanding the children never
                  costs you the ability to reach the parent. */}
              <div className="mm-row">
                <Link href={s.href} onClick={close} aria-current={current(s.href)}>{s.label}</Link>
                <button
                  type="button"
                  className="mm-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`mm-${s.id}`}
                  onClick={() => toggle(s.id)}
                >
                  <span className="sr-only">
                    {isOpen ? `Hide ${s.label} pages` : `Show ${s.label} pages`}
                  </span>
                  <span className="mm-chev" aria-hidden="true" />
                </button>
              </div>
              <div className="mm-sub" id={`mm-${s.id}`} data-open={isOpen ? 'true' : 'false'}>
                <div>
                  {items.map((i) => (
                    <Link key={i.href} className="sub" href={i.href} onClick={close} aria-current={current(i.href)}>
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <Link href="/required-disclosures" onClick={close} aria-current={current('/required-disclosures')}>Required Disclosures</Link>
        <Link href="/blog" onClick={close} aria-current={current('/blog')}>Blog</Link>
        <Link href="/contact" onClick={close} aria-current={current('/contact')}>Contact</Link>
        <a className="mm-call" href={`tel:${school.phoneRaw}`} onClick={close}>Call {school.phone}</a>
      </div>
    </>
  );
}
