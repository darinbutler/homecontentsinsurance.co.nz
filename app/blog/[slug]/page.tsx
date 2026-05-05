import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../../data/blog-posts';
import QuoteForm from '../../../components/QuoteForm';

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
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const categoryEmojis: Record<string, string> = {
    'Renters': '🏠',
    'Homeowners': '🏡',
    'Landlords': '🔑',
    'High Value': '💎',
    'Cost': '💰',
    'Claims': '📋',
    'Guides': '📘',
    'Tips & Advice': '💡',
    'Cover Types': '📋',
  };

  const getEmojiForCategory = (category: string) => {
    return categoryEmojis[category] || '📄';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-brand-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/" className="text-brand-100 hover:text-white text-sm font-semibold mb-6 inline-block">
            ← Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg">{getEmojiForCategory(post.category)}</span>
            <span className="text-xs font-bold uppercase tracking-wide text-brand-200 bg-brand-700 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-brand-200 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Article */}
          <article className="lg:col-span-2">
            {/* Post Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full max-h-80 object-cover"
              />
            </div>

            {/* Post Metadata */}
            <div className="flex items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <span>{new Date(post.date).toLocaleDateString('en-NZ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span>By HomeContentsInsurance.co.nz Editorial Team</span>
            </div>

            {/* Post Content */}
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quote Form */}
            <QuoteForm />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Related Articles</h3>
                <ul className="space-y-3">
                  {relatedPosts.map(p => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}/`}
                        className="text-sm text-brand-700 hover:text-brand-800 font-medium leading-snug block hover:underline"
                      >
                        {p.title}
                      </Link>
                      <span className="text-xs text-slate-500">{p.readTime}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
