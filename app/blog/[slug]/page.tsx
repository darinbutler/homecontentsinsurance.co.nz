import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | HomeContentsInsurance.co.nz`,
    description: post.excerpt,
    alternates: { canonical: `https://www.homecontentsinsurance.co.nz/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.homecontentsinsurance.co.nz/blog/${slug}/`,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const moreArticles = blogPosts
    .filter(p => p.slug !== post.slug && !related.find(r => r.slug === p.slug))
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-900 text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/" className="text-brand-300 hover:text-white text-sm font-semibold mb-5 inline-block">
            ← All Guides
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide text-brand-200 bg-brand-700/60 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">📖 {post.readTime}</span>
            <span className="text-slate-400 text-sm">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight max-w-3xl">{post.title}</h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Article */}
          <article className="lg:col-span-2">
            {/* Feature image */}
            <div className="rounded-xl overflow-hidden mb-8 shadow-md">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Lead excerpt */}
            <div className="bg-brand-50 border-l-4 border-brand-600 rounded-r-xl p-6 mb-8">
              <p className="text-lg text-brand-900 font-medium leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <div
                className="prose prose-slate max-w-none
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-bold prose-h3:text-slate-800 prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-li:text-slate-700 prose-li:leading-relaxed
                  prose-ul:my-4 prose-ol:my-4
                  prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author + date */}
            <div className="mt-8 flex items-center gap-4 bg-white rounded-xl border border-slate-200 p-5">
              <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                HC
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">HomeContentsInsurance.co.nz Editorial Team</div>
                <div className="text-xs text-slate-500">
                  Published {new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>

            {/* More articles */}
            {moreArticles.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-5">More Articles</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {moreArticles.map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`}
                      className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <div className="h-32 bg-brand-800 overflow-hidden">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-3">
                        <span className="text-xs text-brand-700 font-semibold">{p.category}</span>
                        <p className="text-xs font-semibold text-slate-900 mt-1 line-clamp-2 group-hover:text-brand-700 transition">{p.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <QuoteForm variant="compact" />

            {/* Related in same category */}
            {related.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Related Guides</h3>
                <ul className="space-y-4">
                  {related.map(p => (
                    <li key={p.slug} className="flex gap-3">
                      <div className="w-14 h-14 rounded-lg bg-brand-800 overflow-hidden flex-shrink-0">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <Link href={`/blog/${p.slug}/`}
                          className="text-sm font-semibold text-brand-700 hover:text-brand-800 leading-snug block hover:underline">
                          {p.title}
                        </Link>
                        <span className="text-xs text-slate-500">{p.readTime}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA box */}
            <div className="bg-brand-800 rounded-xl p-6 text-white text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-lg mb-2">Get a Quote Today</h3>
              <p className="text-blue-200 text-sm mb-4">Licensed advisers compare up to 6 insurers for you — at no cost.</p>
              <Link href="/contact/"
                className="inline-block bg-white text-brand-800 font-bold py-2.5 px-6 rounded-lg hover:bg-blue-50 transition text-sm">
                Get My Quote →
              </Link>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Browse Guides</h3>
              <div className="flex flex-wrap gap-2">
                {['Renters', 'Homeowners', 'Landlords', 'Cost', 'Claims', 'High Value', 'Guides'].map(cat => (
                  <Link key={cat} href="/blog/"
                    className="text-xs text-brand-700 font-semibold bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-full transition border border-brand-200">
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        dateModified: post.date,
        url: `https://www.homecontentsinsurance.co.nz/blog/${post.slug}/`,
        author: {
          '@type': 'Organization',
          name: SITE.name,
          url: SITE.domain,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE.name,
          url: SITE.domain,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.homecontentsinsurance.co.nz/blog/${post.slug}/`,
        },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.homecontentsinsurance.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.homecontentsinsurance.co.nz/blog/' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.homecontentsinsurance.co.nz/blog/${post.slug}/` },
        ],
      })}} />
    </div>
  );
}
