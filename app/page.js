import Link from 'next/link';
import { CTA, Photo } from './components/Blocks';
import {
  school, programs, outcomes, courtrooms, admissionPaths, UNACCREDITED_DISCLOSURE
} from './lib/site';

export const metadata = {
  title: 'California Desert Trial Academy College of Law | Indio, CA',
  description:
    'The only law school in the Coachella Valley. Earn your J.D. inside a real courtroom, taught by practicing attorneys and judges. Distance learning available. Indio, CA.',
  alternates: { canonical: '/' }
};

const MARQUEE = [
  'Trial Advocacy', 'Real Courtroom Instruction', 'Juris Doctor Program',
  'Attorneys & Judges as Faculty', 'Distance Learning', 'MCLE for Practicing Attorneys'
];

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <header className="hero">
        <div className="hero-bg" data-parallax="0.22" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-kicker reveal">
            <span className="line" aria-hidden="true" />
            <span>The Only Law School in the Coachella Valley</span>
          </div>
          <h1 className="reveal d1">Where trial lawyers are <em>made.</em></h1>
          <p className="hero-sub reveal d2">
            A law school built around trial advocacy. Earn your Juris Doctor inside a real
            courtroom, taught by practicing attorneys and sitting and retired judges.
          </p>
          <div className="hero-ctas reveal d3">
            <Link href="/admissions/apply" className="btn btn-gold">
              Begin Your Application <span className="arr" aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/programs" className="btn btn-ghost">Explore Programs</Link>
          </div>
        </div>
        <div className="hero-meta">
          <span>Indio, California</span>
          <div className="scroll-cue"><span>Scroll</span><div className="wheel" aria-hidden="true" /></div>
          <span>Educating Extraordinary Advocates</span>
        </div>
      </header>

      {/* ---------------- MARQUEE ---------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track" id="marquee">
          {MARQUEE.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      {/* ---------------- MISSION ---------------- */}
      <section className="mission">
        <div className="wrap">
          <div className="mission-grid">
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>The Academy</span></div>
              <h2 className="reveal d1">Educating, training and developing <em>extraordinary</em> legal advocates.</h2>
              <p className="lead reveal d2">
                Most law schools teach students to think about the law.{' '}
                <strong>CDTA trains students to stand up and argue it.</strong> Your legal
                education is built from bar-tested academic subjects, skills training and values
                reinforcement, and it is taught in a working courtroom rather than a lecture hall.
              </p>
              <p className="lead reveal d2">
                On completing the four-year course of study you will be qualified to sit the
                California Bar Examination, and trained to represent a client on your first day
                of practice.
              </p>
              <blockquote className="mission-quote reveal d3">
                Legal theory alone does not win cases. Advocacy does.
                <cite>The CDTA philosophy</cite>
              </blockquote>
              <div className="hero-ctas reveal d3" style={{ marginTop: 36 }}>
                <Link href="/about" className="btn btn-ghost">More About the Academy</Link>
              </div>
            </div>
            <div className="mission-img reveal-right d2">
              <div className="frame" aria-hidden="true" />
              <div className="img-reveal">
                <Photo src="/img/columns.webp" w={1000} h={1300}
                  alt="Stone columns and carved pediment of a courthouse against an overcast sky" />
              </div>
              <div className="badge">
                <span className="big">4</span>
                A four-year course of study, built around the California bar-tested subjects.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="stats" aria-labelledby="stats-h">
        <div className="wrap">
          <h2 id="stats-h" className="sr-only">The Academy by the numbers</h2>
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="num">{outcomes.fylsxRate}</div>
              <div className="lbl">Passed the First-Year<br />Law Students&rsquo; Exam</div>
            </div>
            <div className="stat reveal d1">
              <div className="num"><span data-count="1">1</span></div>
              <div className="lbl">Law school in the<br />Coachella Valley</div>
            </div>
            <div className="stat reveal d2">
              <div className="num"><span data-count="3">3</span></div>
              <div className="lbl">Courtrooms on campus:<br />trial, appellate, federal</div>
            </div>
            <div className="stat reveal d3">
              <div className="num"><span data-count="2">2</span></div>
              <div className="lbl">Instructors in most classes:<br />attorneys and judges</div>
            </div>
          </div>
          <p className="stats-note reveal d3">
            {outcomes.fylsxContext} The First-Year Law Students&rsquo; Examination is not the
            California Bar Examination, and CDTA does not publish a General Bar Examination
            passage rate. {UNACCREDITED_DISCLOSURE}
          </p>
        </div>
      </section>

      {/* ---------------- COURTROOM ---------------- */}
      <section className="feature">
        <div className="wrap">
          <div className="feature-grid">
            <div className="img-stack reveal-left">
              <div className="img-a img-reveal">
                <Photo src="/img/library.webp" w={1200} h={1100}
                  alt="A law library corridor lined floor to ceiling with bound volumes" />
              </div>
              <div className="img-b img-reveal d2">
                <Photo src="/img/books.webp" w={900} h={660}
                  alt="Law books stacked beside an open notebook and pen" />
              </div>
              <div className="float-tag reveal d3">{school.street} &middot; {school.city}</div>
            </div>
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>A Different Classroom</span></div>
              <h2 className="reveal d1">Your lecture hall is a <em>real courtroom.</em></h2>
              <div className="num-list">
                <div className="num-item reveal d1">
                  <span className="n" aria-hidden="true">01</span>
                  <div>
                    <h3>Learn where lawyers work</h3>
                    <p>Every State Bar tested course is taught in a real courtroom environment, so the room you learn in is the room you will one day work in.</p>
                  </div>
                </div>
                <div className="num-item reveal d2">
                  <span className="n" aria-hidden="true">02</span>
                  <div>
                    <h3>Two instructors, most classes</h3>
                    <p>Most classes are led by two instructors, experienced attorneys and judges who bring live courtroom perspective to every subject.</p>
                  </div>
                </div>
                <div className="num-item reveal d3">
                  <span className="n" aria-hidden="true">03</span>
                  <div>
                    <h3>Built around the bar</h3>
                    <p>A curriculum centered on California bar-tested subjects, practical skills training, and the values that define good advocates.</p>
                  </div>
                </div>
              </div>
              <div className="hero-ctas reveal d3" style={{ marginTop: 36 }}>
                <Link href="/campus" className="btn btn-ghost">See the Campus</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMS ---------------- */}
      <section className="light" id="programs">
        <div className="wrap">
          <div className="light-head">
            <div>
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>Programs of Study</span></div>
              <h2 className="reveal d1">Four paths.<br />One <em>standard.</em></h2>
            </div>
            <p className="reveal d2">
              Whether you are beginning your legal education, studying from a distance, preparing
              for an examination, or already practicing, CDTA meets you where you are.
            </p>
          </div>
          <div className="card-grid two cols-2">
            {programs.map((p) => (
              <div className="card tile" key={p.slug}>
                <span className="idx">( {p.num} )</span>
                <h3>{p.name}</h3>
                <p>{p.teaser}</p>
                <span className="card-link">
                  Explore {p.short} <span className="arr" aria-hidden="true">&rarr;</span>
                </span>
                <Link className="card-cover" href={`/programs/${p.slug}`}>
                  <span>Read more about the {p.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="story">
        <div className="story-bg-word" aria-hidden="true">Advocacy</div>
        <div className="story-inner">
          <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>The Origin</span></div>
          <p className="story-quote reveal d1">
            Born from conversations with the trial attorneys <em>F. Lee Bailey</em> and{' '}
            <em>Gerry Spence</em>, and one plain observation: law schools were not producing
            lawyers who were ready for a courtroom.
          </p>
          <p className="story-body reveal d2">
            <strong>John Patrick Dolan and Irene Garcia Dolan</strong> founded CDTA to close that
            gap. Here the art of trial advocacy is not an elective bolted onto the third year. It
            is the point of the school.
          </p>
          <div className="dean-card reveal d3">
            <div className="avatar"><div className="ph" role="img" aria-label="Placeholder portrait of John Patrick Dolan. Photography to be supplied by the Academy."><span>JD</span></div></div>
            <div className="who">
              <div className="name">John Patrick Dolan</div>
              <div className="role">President, CEO &amp; Dean</div>
              <div className="cred">A California trial lawyer with over forty years in criminal defense, and a State Bar Certified Specialist in Criminal Law.</div>
            </div>
          </div>
          <div className="hero-ctas reveal d4" style={{ marginTop: 40, justifyContent: 'center' }}>
            <Link href="/faculty" className="btn btn-ghost">Meet the Faculty</Link>
          </div>
        </div>
      </section>

      {/* ---------------- ADMISSIONS ---------------- */}
      <section className="mission" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--gold-line-soft)' }} id="admissions">
        <div className="wrap">
          <div className="two-col">
            <div className="sticky-col">
              <div className="sec-label reveal"><div className="line" aria-hidden="true" /><span>Admissions</span></div>
              <h2 className="reveal d1">More than one way <em>in.</em></h2>
              <p className="reveal d2">
                CDTA admits students from a range of academic backgrounds. A four-year degree is
                one route in. It is not the only one.
              </p>
              <div className="hero-ctas reveal d3" style={{ marginTop: 32 }}>
                <Link href="/admissions/apply" className="btn btn-gold">
                  Start Your Application <span className="arr" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div>
              {admissionPaths.map((p, i) => (
                <div className={`path reveal${i ? ` d${Math.min(i, 4)}` : ''}`} key={p.tag}>
                  <span className="tag">{p.tag}</span>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
              <p style={{ marginTop: 26, fontSize: 14, color: 'var(--dim)', lineHeight: 1.85 }} className="reveal d4">
                Admission also requires an appropriate LSAT score and completion of the CDTA
                admissions application. See the full{' '}
                <Link href="/admissions" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold-line)' }}>admission requirements</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
