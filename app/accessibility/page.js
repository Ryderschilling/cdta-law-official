import Link from 'next/link';
import { PageHero } from '../components/Blocks';
import { school, addressLine } from '../lib/site';

export const metadata = {
  title: 'Accessibility',
  description:
    'Accessibility statement for California Desert Trial Academy College of Law, built to WCAG 2.1 Level AA.',
  alternates: { canonical: '/accessibility' }
};

export default function Accessibility() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Accessibility' }]}
        label="Accessibility"
        title="Accessibility statement"
        lede="This site was built to the Web Content Accessibility Guidelines 2.1 at Level AA. If something here does not work for you, tell us and we will fix it."
      />
      <section className="prose">
        <div className="wrap-narrow">
          <div className="prose-body">
            <h2>The standard we built to</h2>
            <p>
              {school.name} is committed to making this website usable by everyone, including
              people who use screen readers, keyboard navigation, magnification, or who need
              motion reduced.
            </p>
            <p>
              The site targets the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.
            </p>

            <h2>What that meant in practice</h2>
            <ul>
              <li><strong>Color contrast</strong>Every text and background pair was measured. Body text meets or exceeds a 4.5:1 contrast ratio and large display text meets or exceeds 3:1. Colors from the original design that failed were replaced rather than kept.</li>
              <li><strong>Keyboard operation</strong>Every link, button, form field and menu can be reached and operated with a keyboard alone, and the focus indicator is always visible.</li>
              <li><strong>A skip link</strong>The first thing a keyboard user reaches is a link that jumps straight past the navigation to the main content.</li>
              <li><strong>Semantic structure</strong>One first-level heading per page, headings in order, real landmarks, and lists marked up as lists.</li>
              <li><strong>Images</strong>Every image carries alternative text, or is marked decorative so a screen reader passes over it rather than reading a filename.</li>
              <li><strong>Forms</strong>Every field has a visible label, errors are announced and described in text rather than by color alone, and inputs are large enough not to force a zoom on a phone.</li>
              <li><strong>Motion</strong>If your system is set to reduce motion, the scroll animations and the moving banner stop.</li>
              <li><strong>Resizing</strong>Text can be enlarged without the layout breaking or content being cut off, and no page scrolls sideways at any screen width.</li>
              <li><strong>Touch targets</strong>Interactive elements are at least 44 pixels on their smallest side.</li>
            </ul>

            <h2>Where we know there is more to do</h2>
            <p>
              Photographs on this site are currently marked placeholders while the Academy
              supplies its own photography. When real images are added, each will receive
              descriptive alternative text.
            </p>
            <p>
              Any video the Academy publishes should carry captions and a transcript. If you find
              a video without them, tell us.
            </p>
            <p>
              Third-party content, including the embedded map, is not fully under our control.
              The map is supplementary; the full address is written in text everywhere the map
              appears.
            </p>

            <h2>Tell us if something does not work</h2>
            <p>
              This is the part that matters. If any part of this site is difficult or impossible
              for you to use, we want to know, and we will fix it and give you the information
              you were after by another route in the meantime.
            </p>
            <p>
              Call <a className="inline" href={`tel:${school.phoneRaw}`}>{school.phone}</a>, email{' '}
              <a className="inline" href={`mailto:${school.email}`}>{school.email}</a>, or write to{' '}
              {addressLine}. Please tell us the page and what happened, and we will respond.
            </p>

            <h2>Also</h2>
            <p>
              See our <Link className="inline" href="/privacy-policy">privacy policy</Link> and{' '}
              <Link className="inline" href="/disclaimer">disclaimer</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
