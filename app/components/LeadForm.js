'use client';
import { useState, useEffect, useRef } from 'react';
import { school, FORM_NOTICE } from '../lib/site';

const EMPTY = { name: '', email: '', phone: '', interest: '', education: '', distance: '', message: '', consent: false, company: '' };

const INTERESTS = [
  'Juris Doctor program',
  'Distance Learning Option',
  'MCLE for practicing attorneys',
  'Saturday Enrichment Program',
  'Something else, or not sure yet'
];

const EDUCATION = [
  'Bachelor’s degree (four-year)',
  'Associate degree (two-year)',
  'At least 60 transferable college credits',
  'Fewer than 60 credits, or not sure'
];

export default function LeadForm() {
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  const focusError = useRef(false);

  // Move focus to the first invalid field AFTER React has committed the error
  // markup. Querying for .err inside the submit handler runs before the render
  // lands, finds nothing, and silently leaves focus where it was.
  useEffect(() => {
    if (!focusError.current) return;
    focusError.current = false;
    const first = document.querySelector('.field .err');
    if (!first) return;
    const control = first.closest('.field')?.querySelector('input,select,textarea');
    if (control) control.focus();
  }, [errors]);

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setV((s) => ({ ...s, [k]: val }));
    setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!v.name.trim()) e.name = 'Please enter your name.';
    if (!v.email.trim() && !v.phone.trim()) {
      e.email = 'Enter an email address or a phone number so Admissions can reach you.';
    } else if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
      e.email = 'That email address does not look right.';
    }
    if (!v.message.trim()) e.message = 'Tell us briefly what you would like to know.';
    if (!v.consent) e.consent = 'Please confirm you have read the notice above.';
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      setStatus({ type: 'bad', msg: 'Please correct the highlighted fields and try again.' });
      focusError.current = true;
      return;
    }
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(v)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({
          type: 'ok',
          msg: `Thank you. Your message has gone to the Admissions Office and someone will be in touch. If you would rather talk now, call ${school.phone}.`
        });
        setV(EMPTY);
      } else {
        setStatus({
          type: 'bad',
          msg: data.error || `Your message could not be sent. Please call ${school.phone} and Admissions will take your information by phone.`
        });
      }
    } catch {
      setStatus({
        type: 'bad',
        msg: `Your message could not be sent. Please call ${school.phone} and Admissions will take your information by phone.`
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} noValidate>
      <div className="form-notice">
        <strong>Before you write:</strong> {FORM_NOTICE}
      </div>

      {/* honeypot */}
      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" style={{ fontSize: 16 }} value={v.company} onChange={set('company')} />
      </div>

      <div className="field">
        <label htmlFor="name">Your name <span className="req" aria-hidden="true">*</span></label>
        <input
          id="name" name="name" type="text" autoComplete="name" required
          value={v.name} onChange={set('name')}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
        />
        {errors.name && <div className="err" id="name-err">{errors.name}</div>}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email" name="email" type="email" autoComplete="email"
          value={v.email} onChange={set('email')}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : 'email-hint'}
        />
        {errors.email
          ? <div className="err" id="email-err">{errors.email}</div>
          : <div className="hint" id="email-hint">Give us an email address or a phone number, whichever you prefer.</div>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" value={v.phone} onChange={set('phone')} />
      </div>

      <div className="field">
        <label htmlFor="interest">What are you asking about?</label>
        <select id="interest" name="interest" value={v.interest} onChange={set('interest')}>
          <option value="">Select one</option>
          {INTERESTS.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
      </div>

      <div className="field">
        <label htmlFor="education">Your education so far</label>
        <select id="education" name="education" value={v.education} onChange={set('education')}>
          <option value="">Select one</option>
          {EDUCATION.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        <div className="hint">This tells Admissions which admission path applies to you.</div>
      </div>

      <div className="field">
        <label htmlFor="distance">Where are you writing from?</label>
        <input
          id="distance" name="distance" type="text" value={v.distance} onChange={set('distance')}
          placeholder="e.g. La Quinta, or Riverside"
        />
        <div className="hint">Students living 50 miles or more from the Indio campus may qualify for the Distance Learning Option.</div>
      </div>

      <div className="field">
        <label htmlFor="message">What would you like to know? <span className="req" aria-hidden="true">*</span></label>
        <textarea
          id="message" name="message" required value={v.message} onChange={set('message')}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : 'message-hint'}
        />
        {errors.message
          ? <div className="err" id="message-err">{errors.message}</div>
          : <div className="hint" id="message-hint">A couple of sentences is plenty.</div>}
      </div>

      <div className="field">
        <label htmlFor="consent" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', textTransform: 'none', letterSpacing: 0, fontSize: 14.5, fontWeight: 400, lineHeight: 1.7, fontFamily: 'var(--sans)', minHeight: 44 }}>
          <input
            id="consent" name="consent" type="checkbox" required
            checked={v.consent} onChange={set('consent')}
            style={{ width: 24, height: 24, minHeight: 24, minWidth: 24, marginTop: 10, marginBottom: 10, flexShrink: 0, padding: 0, fontSize: 16 }}
            aria-invalid={!!errors.consent} aria-describedby={errors.consent ? 'consent-err' : undefined}
          />
          <span>
            I have read the notice above. I understand that sending this form is an inquiry,
            not an application, and that it does not guarantee admission.
          </span>
        </label>
        {errors.consent && <div className="err" id="consent-err">{errors.consent}</div>}
      </div>

      <button className="btn btn-gold" type="submit" disabled={busy}>
        {busy ? 'Sending...' : 'Send to Admissions'}
      </button>

      <div aria-live="polite" role="status">
        {status && <div className={`form-status ${status.type}`}>{status.msg}</div>}
      </div>
    </form>
  );
}
