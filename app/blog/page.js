import Link from 'next/link';
import { PageHero, CTA } from '../components/Blocks';
import { posts } from '../lib/posts';

export const metadata = {
  title: 'Blog',
  description:
    'Writing from CDTA College of Law on studying law in the Coachella Valley, non-traditional students, distance learning, and paying for law school without loans.',
  alternates: { canonical: '/blog' }
};

export default function Blog() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog' }]}
        label="Writing"
        title={<>Notes for people <em>deciding.</em></>}
        lede="Straight answers to the questions prospective students actually ask, from a school that admits working adults and career changers rather than treating them as exceptions."
      />

      <section className="prose">
        <div className="wrap">
          <div className="post-grid cols-3" style={{ marginTop: 0 }}
              role="group" tabIndex={0} aria-label="Blog posts">
            {posts.map((p) => (
              <article className="post-card tile" key={p.slug}>
                <div className="post-date">{p.dateLabel}</div>
                <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 23, lineHeight: 1.24 }}>{p.title}</h2>
                <p>{p.excerpt}</p>
                <span className="card-link">Read <span className="arr" aria-hidden="true">&rarr;</span></span>
                <Link className="card-cover" href={`/blog/${p.slug}`}><span>Read: {p.title}</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
