import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../data/blog-posts';

export const metadata: Metadata = {
  title: 'Home Contents Insurance Blog & Guides | HomeContentsInsurance.co.nz',
  description: 'Read expert guides on home contents insurance for renters, homeowners and landlords in New Zealand. Learn about coverage, claims, costs and protection.'
};

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

export default function BlogPage() {
  const getEmojiForCategory = (category: string) => {
    return categoryEmojis[category] || '📄';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Home Contents Insurance Blog
          </h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            Expert guides and articles on protecting your belongings. Learn what's covered, how to choose the right policy, and navigate the claims process.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Category Badge */}
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">{getEmojiForCategory(post.category)}</span>
                    <span className="text-sm font-medium text-brand-700 bg-brand-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <span>📖 {post.readTime}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-NZ', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-700 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Have a Question?</h2>
            <p className="mb-4 text-brand-100">
              Can't find what you're looking for? Get in touch with our team for personalized advice.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
