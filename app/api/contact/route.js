import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const TO = process.env.CONTACT_TO || 'Irene@CDTALAW.com';
const FROM = process.env.CONTACT_FROM || 'CDTA Website <website@cdtalaw.com>';
const PHONE = '(760) 342-0900';

const esc = (s = '') =>
  String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, phone, interest, education, distance, message, consent, company,
          source, bestTime, answers } = body || {};

  // honeypot: silently accept, send nothing
  if (company) return NextResponse.json({ ok: true });

  if (!name?.trim() || !message?.trim() || !consent) {
    return NextResponse.json({ error: 'Please complete the required fields.' }, { status: 400 });
  }
  if (!email?.trim() && !phone?.trim()) {
    return NextResponse.json({ error: 'Please provide an email address or a phone number.' }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'That message is too long. Please shorten it or call the Academy.' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('[contact] RESEND_API_KEY is not set. Form submission was not delivered.');
    return NextResponse.json(
      { error: `The inquiry form is not yet connected. Please call ${PHONE} and Admissions will help you directly.` },
      { status: 503 }
    );
  }

  const row = (k, val) =>
    `<tr><td style="padding:6px 14px 6px 0"><b>${k}</b></td><td>${esc(val) || '&mdash;'}</td></tr>`;

  const html = `
    <h2 style="font-family:Georgia,serif">New admissions inquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${row('Name', name)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Asking about', interest)}
      ${row('Education so far', education)}
      ${row('Location', distance)}
      ${row('Best time to reach', bestTime)}
      ${row('Came from', source || 'Contact form')}
    </table>
    ${Array.isArray(answers) && answers.length
      ? `<h3 style="font-family:Arial,sans-serif;font-size:15px;margin-top:26px">Intake answers</h3>
         <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
           ${answers
             .slice(0, 40)
             .map((x) => `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;color:#555">${esc(x?.q)}</td><td style="padding:6px 0"><b>${esc(x?.a)}</b></td></tr>`)
             .join('')}
         </table>`
      : ''}
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;margin-top:20px">${esc(message)}</p>
    <hr />
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#666">
      Sent from the inquiry form at cdtalaw.com. The sender was shown the notice that this
      form is an inquiry and not an application.
    </p>`;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email?.trim() || undefined,
        subject: `${source ? 'Student intake' : 'Admissions inquiry'}, ${name}${interest ? ` (${interest})` : ''}`,
        html
      })
    });
    if (!res.ok) {
      console.error('[contact] Resend error', res.status, await res.text());
      return NextResponse.json(
        { error: `Your message could not be sent. Please call ${PHONE}.` },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json(
      { error: `Your message could not be sent. Please call ${PHONE}.` },
      { status: 502 }
    );
  }
}
