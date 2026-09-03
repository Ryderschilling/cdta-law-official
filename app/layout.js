import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollFX from './components/ScrollFX';
import CookieBanner from './components/CookieBanner';
import CallBar from './components/CallBar';
import { school, outcomes } from './lib/site';

export const metadata = {
  metadataBase: new URL(school.url),
  title: {
    default: 'California Desert Trial Academy College of Law | Indio, CA',
    template: '%s | CDTA College of Law'
  },
  description:
    'The only law school in the Coachella Valley. Earn your J.D. in a real courtroom, taught by practicing attorneys and judges. Distance learning available. Indio, CA. (760) 342-0900.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'California Desert Trial Academy College of Law',
    locale: 'en_US',
    title: 'California Desert Trial Academy College of Law | Indio, CA',
    description:
      'The only law school in the Coachella Valley. Earn your J.D. in a real courtroom. Distance learning available. (760) 342-0900.'
  },
  robots: { index: true, follow: true }
};

export const viewport = {
  themeColor: '#0c0f14',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
};

const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': ['CollegeOrUniversity', 'EducationalOrganization'],
  name: school.name,
  alternateName: 'CDTA College of Law',
  description:
    'A law school in Indio, California dedicated to trial advocacy. Juris Doctor program, distance learning, bar preparation and MCLE for practicing attorneys.',
  slogan: school.tagline,
  url: school.url,
  telephone: school.phone,
  email: school.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: school.street,
    addressLocality: school.city,
    addressRegion: school.state,
    postalCode: school.zip,
    addressCountry: 'US'
  },
  areaServed: [
    'Coachella Valley, CA', 'Riverside County, CA', 'Imperial County, CA',
    'Los Angeles County, CA', 'Orange County, CA', 'San Bernardino County, CA'
  ],
  sameAs: [school.social.facebook, school.social.linkedin, school.social.youtube],
  founder: [
    { '@type': 'Person', name: 'John Patrick Dolan' },
    { '@type': 'Person', name: 'Irene Garcia Dolan' }
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'degree',
    educationalLevel: 'Juris Doctor',
    name: 'Juris Doctor (J.D.)'
  },
  // The school's own published outcome figure, stated exactly as the school states it.
  publicAccess: true,
  knowsAbout: [
    'Trial advocacy', 'Juris Doctor degree', 'First-Year Law Students Examination',
    'California Bar Examination preparation', 'Minimum Continuing Legal Education'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Oswald:wght@400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <div id="progress" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CallBar />
        <CookieBanner />
        <ScrollFX />
      </body>
    </html>
  );
}
