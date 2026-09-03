'use client';
import Link from 'next/link';
import { school } from '../lib/site';

// Fixed bottom action bar, mobile only.
export default function CallBar() {
  return (
    <div className="call-bar" role="region" aria-label="Contact the Academy">
      <a className="cb-call" href={`tel:${school.phoneRaw}`}>
        <span aria-hidden="true">&#9742;</span> Call {school.phone}
      </a>
      <Link className="cb-apply" href="/admissions/apply">Apply</Link>
    </div>
  );
}
