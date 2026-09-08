'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { school } from '../lib/site';
import { steps, INTAKE_NOTICE } from '../lib/intake';

const CONTACT = { name: '', email: '', phone: '', reach: '', message: '', consent: false, company: '' };

export default function StudentIntake() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({});
  const [c, setC] = useState(CONTACT);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  const headRef = useRef(null);
  const errRef = useRef(false);

  // Focus the first invalid field AFTER React commits the error markup.
  // Querying inside the submit handler runs a render too early and focus
  // silently stays put. Same bug that was fixed on the contact form.
  useEffect(() => {
    if (!errRef.current) return;
    errRef.current = false;
    document.querySelector('.intake .err')
      ?.closest('.field, fieldset')
      ?.querySelector('input,select,textarea')?.focus();
  }, [errors]);

  useEffect(() => { if (step > 0) headRef.current?.focus(); }, [step]);

  const setAns = (id, val) => {
    setA((s) => ({ ...s, [id]: val }));
    setErrors((s) => ({ ...s, [id]: undefined }));
  };
  const setCon = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setC((s) => ({ ...s, [k]: val }));
    setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const validate = (i) => {
    const e = {};
    if (i < 2) {
      steps[i].questions.forEach((q) => {
        if (!a[q.id]) e[q.id] = 'Please choose an answer, or “Not sure”.';
      });
    } else {
      if (!c.name.trim()) e.name = 'Please enter your name.';
      if (!c.email.trim() && !c.phone.trim()) {
        e.email = 'An email address or a phone number, so the Registrar can reach you.';
      } else if (c.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email.trim())) {
        e.email = 'That email address does not look right.';
      }
      if (!c.consent) e.consent = 'Please confirm you have read the notice above.';
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length) { errRef.current = true; return; }
    setStep((s) => s + 1);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate(2);
    setErrors(e);
    if (Object.keys(e).length) {
      errRef.current = true;
      setStatus({ type: 'bad', msg: 'Please correct the highlighted fields and try again.' });
      return;
    }
    setBusy(true);
    setStatus(null);

    const answers = [];
    steps.slice(0, 2).forEach((s) =>
      s.questions.forEach((q) => { if (a[q.id]) answers.push({ q: q.label, a: a[q.id] }); })
    );

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: c.name,
          email: c.email,
          phone: c.phone,
          interest: a.program || '',
          education: a.prelegal || '',
          distance: a.where || '',
          message: c.message?.trim() || 'Submitted through the student intake form.',
          consent: c.consent,
          company: c.company,
          source: 'Student intake form',
          bestTime: c.reach,
          answers
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setStep(3);
      else setStatus({ type: 'bad', msg: data.error || `Your answers could not be sent. Please call ${school.phone}.` });
    } catch {
      setStatus({ type: 'bad', msg: `Your answers could not be sent. Please call ${school.phone}.` });
    } finally {
      setBusy(false);
    }
  };

  if (step === 3) {
    return (
      <div className="intake intake-done">
        <div className="sec-label"><div className="line" aria-hidden="true" /><span>Received</span></div>
        <h2>Thank you. The Registrar has your answers.</h2>
        <p>
          {school.registrar} reviews every response personally and will be in touch about the next
          step. If you would rather talk it through now, call{' '}
          <a href={`tel:${school.phoneRaw}`}>{school.phone}</a>.
        </p>
        <div className="intake-actions">
          <Link className="btn btn-brand" href="/programs">Read about the programs</Link>
          <Link className="btn btn-ghost" href="/admissions/tuition">Tuition and costs</Link>
        </div>
      </div>
    );
  }

  const s = steps[step];

  return (
    <form className="intake" onSubmit={submit} noValidate>
      <ol className="intake-steps" aria-label="Progress">
        {steps.map((st, i) => (
          <li key={st.key} className={i === step ? 'now' : i < step ? 'done' : ''}
              aria-current={i === step ? 'step' : undefined}>
            <span className="n">{i + 1}</span>
            <span className="t">{st.title}</span>
          </li>
        ))}
      </ol>

      <h2 className="intake-head" ref={headRef} tabIndex={-1}>{s.title}</h2>

      {step === 0 && <p className="intake-lede">{INTAKE_NOTICE}</p>}

      {step < 2 &&
        s.questions.map((q) => (
          <div className="intake-q" key={q.id}>
            <fieldset>
              <legend>{q.label}</legend>
              <div className="opts">
                {q.options.map((o) => (
                  <label key={o} className={a[q.id] === o ? 'opt on' : 'opt'}>
                    <input type="radio" name={q.id} value={o}
                           checked={a[q.id] === o} onChange={() => setAns(q.id, o)} />
                    <span>{o}</span>
                  </label>
                ))}
              </div>
              {errors[q.id] && <span className="err">{errors[q.id]}</span>}
            </fieldset>
          </div>
        ))}

      {step === 2 && (
        <>
          <div className="field">
            <label htmlFor="si-name">Your name <span className="req" aria-hidden="true">*</span></label>
            <input id="si-name" value={c.name} onChange={setCon('name')} autoComplete="name" required
                   aria-invalid={!!errors.name} />
            {errors.name && <div className="err">{errors.name}</div>}
          </div>

          <div className="field">
            <label htmlFor="si-email">Email address</label>
            <input id="si-email" type="email" value={c.email} onChange={setCon('email')} autoComplete="email"
                   aria-invalid={!!errors.email} />
            {errors.email
              ? <div className="err">{errors.email}</div>
              : <div className="hint">Give us an email address or a phone number, whichever you prefer.</div>}
          </div>

          <div className="field">
            <label htmlFor="si-phone">Phone number</label>
            <input id="si-phone" type="tel" value={c.phone} onChange={setCon('phone')} autoComplete="tel" />
          </div>

          <div className="field">
            <label htmlFor="si-reach">Best time to reach you</label>
            <select id="si-reach" value={c.reach} onChange={setCon('reach')}>
              <option value="">No preference</option>
              <option>Weekday mornings</option>
              <option>Weekday afternoons</option>
              <option>Evenings</option>
              <option>Saturdays</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="si-message">Anything you would like the Registrar to know</label>
            <textarea id="si-message" value={c.message} onChange={setCon('message')} rows={4} />
            <div className="hint">Optional. A couple of sentences is plenty.</div>
          </div>

          <label className="consent" htmlFor="si-consent">
            <input id="si-consent" type="checkbox" checked={c.consent} onChange={setCon('consent')} />
            <span>
              I have read the notice above and the{' '}
              <Link href="/required-disclosures">State Bar required disclosure</Link>, and I understand
              that sending this form is not an application and does not admit me to the Academy.
            </span>
          </label>
          {errors.consent && <div className="err">{errors.consent}</div>}

          <div className="hp" aria-hidden="true">
            <label htmlFor="si-company">Company</label>
            <input id="si-company" tabIndex={-1} autoComplete="off" value={c.company} onChange={setCon('company')} />
          </div>
        </>
      )}

      {status && <p className={`form-status ${status.type}`} role="alert">{status.msg}</p>}

      <div className="intake-actions">
        {step > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => setStep((x) => x - 1)}>← Back</button>
        )}
        {step < 2
          ? <button type="button" className="btn btn-brand" onClick={next}>Continue →</button>
          : <button type="submit" className="btn btn-brand" disabled={busy}>{busy ? 'Sending…' : 'Send to the Registrar'}</button>}
        <a className="intake-call" href={`tel:${school.phoneRaw}`}>or call {school.phone}</a>
      </div>
    </form>
  );
}
