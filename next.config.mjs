/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      // Old Wix URLs -> new structure
      { source: '/ca-bar-standard-required-disclosure', destination: '/required-disclosures', permanent: true },
      { source: '/apply-now', destination: '/admissions/apply', permanent: true },
      // Wix blog lived at /post/<slug>
      { source: '/post/the-local-advantage-studying-law-in-the-coachella-valley', destination: '/blog/studying-law-in-the-coachella-valley', permanent: true },
      { source: '/post/the-benefits-of-small-class-sizes-in-legal-education-why-cdta-stands-apart', destination: '/blog/small-class-sizes-law-school', permanent: true },
      { source: '/post/small-but-mighty-the-advantages-of-choosing-a-small-law-school', destination: '/blog/small-class-sizes-law-school', permanent: true },
      { source: '/post/a-debt-free-path-to-becoming-an-attorney-the-cdta-way', destination: '/blog/law-school-without-student-loans', permanent: true },
      { source: '/post/pursuing-a-law-degree-as-a-non-traditional-student', destination: '/blog/law-school-as-a-non-traditional-student', permanent: true },
      { source: '/post/breaking-boundaries-why-nontraditional-students-should-consider-law-school', destination: '/blog/law-school-as-a-non-traditional-student', permanent: true },
      { source: '/post/am-i-too-old-to-go-to-law-school', destination: '/blog/am-i-too-old-for-law-school', permanent: true },
      { source: '/post/distance-learning-direction-on-the-road-to-success', destination: '/blog/distance-learning-law-degree', permanent: true },
      { source: '/post/mastering-the-art-of-legal-education-john-patrick-dolan-s-expertise-as-dean-of-cdta-college-of-law', destination: '/faculty/john-patrick-dolan', permanent: true },
      { source: '/post/a-debate-team-ace-becomes-an-award-winning-trial-lawyer-speech-communication-alum-john-dolan-honore', destination: '/faculty/john-patrick-dolan', permanent: true },
      { source: '/post/:slug', destination: '/blog', permanent: true }
    ];
  }
};
export default nextConfig;
