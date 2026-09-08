'use client';
import { useState } from 'react';

/**
 * 360 campus tour, click to load.
 *
 * The Academy already has a CloudPano tour of the building on the old site.
 * It is embedded here the same way every other third party on this site is:
 * a poster and a button, with the iframe mounted only after a click.
 *
 * A 360 tour is the heaviest single thing that could go on this page. It pulls
 * a WebGL viewer plus a set of full panoramas, and auto-loading it would drop a
 * third party's cookies before the visitor has touched the consent banner and
 * would take the campus page's LCP with it. Do not "simplify" this into a bare
 * iframe.
 *
 * With no `tour.url` set, this renders a marked reservation rather than a
 * broken frame. Fill in `virtualTour` in site.js and it goes live.
 */
export default function VirtualTour({ tour, poster }) {
  const [on, setOn] = useState(false);

  if (!tour?.url) {
    return (
      <div className="vt vt-empty">
        <div className="vt-empty-in">
          <div className="vt-label">360° campus tour</div>
          <p>
            Reserved for the Academy&rsquo;s existing CloudPano tour. Paste the share link into
            <code> virtualTour </code> in <code>site.js</code> and it appears here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="vt">
      {on ? (
        <iframe
          className="vt-frame"
          src={tour.url}
          title={tour.title || 'Virtual tour of the CDTA campus'}
          allow="accelerometer; gyroscope; magnetometer; xr-spatial-tracking; fullscreen"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button className="vt-play" onClick={() => setOn(true)} aria-label="Open the 360 degree campus tour">
          {poster && <span className="vt-poster" style={{ backgroundImage: `url(${poster})` }} />}
          <span className="vt-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor"
                 strokeWidth="1.7" strokeLinecap="round">
              <ellipse cx="12" cy="12" rx="10" ry="4.6" />
              <path d="M4.2 10.4A10 10 0 0 0 12 22a10 10 0 0 0 7.8-11.6" />
              <path d="M9.4 4.2 12 2l2.6 2.2" />
            </svg>
          </span>
          <span className="vt-cap">
            <span className="vt-label">360° campus tour</span>
            <span className="vt-title">{tour.title || 'Walk through the courtrooms'}</span>
            <span className="vt-hint">Loads when you open it</span>
          </span>
        </button>
      )}
    </div>
  );
}
