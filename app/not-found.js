import Link from 'next/link';
import { PageHero } from './components/Blocks';

export const metadata = { title: 'Page Not Found', robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <>
      <PageHero
        label="404"
        title={<>That page is not <em>here.</em></>}
        lede="The page you were looking for has moved or no longer exists. The main sections of the site are below."
      />
      <section className="prose">
        <div className="wrap-narrow">
          <div className="prose-body">
            <ul>
              <li><Link className="inline" href="/">Home</Link></li>
              <li><Link className="inline" href="/about">The Academy</Link></li>
              <li><Link className="inline" href="/programs">Programs of study</Link></li>
              <li><Link className="inline" href="/faculty">Faculty</Link></li>
              <li><Link className="inline" href="/mcle">MCLE for practicing attorneys</Link></li>
              <li><Link className="inline" href="/admissions">Admissions</Link></li>
              <li><Link className="inline" href="/required-disclosures">Required disclosures</Link></li>
              <li><Link className="inline" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
