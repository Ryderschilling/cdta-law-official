'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const KEY = 'cdta-cookie-consent';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try { if (!localStorage.getItem(KEY)) setShow(true); } catch { setShow(true); }
  }, []);

  useEffect(() => {
    if (show) document.body.dataset.cookie = 'open';
    else delete document.body.dataset.cookie;
    return () => { delete document.body.dataset.cookie; };
  }, [show]);

  const decide = (value) => {
    try { localStorage.setItem(KEY, value); } catch {}
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cdta-consent', { detail: value }));
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie" role="region" aria-label="Cookie consent">
      <p>
        We use cookies to run this site and to understand how visitors use it. You can decline
        non-essential cookies and the site will work exactly the same. See our{' '}
        <Link href="/privacy-policy">Privacy Policy</Link> for details, including your rights
        under the California Consumer Privacy Act.
      </p>
      <div className="cookie-actions">
        <button onClick={() => decide('declined')}>Decline Non-Essential</button>
        <button className="primary" onClick={() => decide('accepted')}>Accept</button>
      </div>
    </div>
  );
}
