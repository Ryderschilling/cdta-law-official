'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { school, programs, mcleSubjects } from '../lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  const close = () => setOpen(false);

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
        <Link href="/" onClick={close}>Home</Link>
        <Link href="/about" onClick={close}>The Academy</Link>
        <Link href="/campus" onClick={close}>Campus</Link>
        <Link href="/faculty" onClick={close}>Faculty</Link>
        <Link href="/programs" onClick={close}>Programs</Link>
        {programs.map((p) => (
          <Link key={p.slug} className="sub" href={`/programs/${p.slug}`} onClick={close}>{p.name}</Link>
        ))}
        <Link href="/mcle" onClick={close}>MCLE for Attorneys</Link>
        {mcleSubjects.map((m) => (
          <Link key={m.slug} className="sub" href={`/mcle/${m.slug}`} onClick={close}>{m.name}</Link>
        ))}
        <Link href="/admissions" onClick={close}>Admissions</Link>
        <Link className="sub" href="/admissions/tuition" onClick={close}>Tuition &amp; What Is Included</Link>
        <Link className="sub" href="/admissions/apply" onClick={close}>Apply</Link>
        <Link href="/required-disclosures" onClick={close}>Required Disclosures</Link>
        <Link href="/blog" onClick={close}>Blog</Link>
        <Link href="/contact" onClick={close}>Contact</Link>
        <a className="mm-call" href={`tel:${school.phoneRaw}`} onClick={close}>Call {school.phone}</a>
      </div>
    </>
  );
}
