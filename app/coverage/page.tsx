import Link from 'next/link';
import { coverageTypes } from '../../data/coverage-types';

export const metadata = {
  title: 'Home Contents Insurance Coverage Types NZ | HomeContentsInsurance.co.nz',
  description: 'Compare home contents insurance coverage types for renters, homeowners, and landlords in New Zealand. Renters cover, homeowner protection, high-value items, accidental damage, portable valuables, temporary accommodation, and landlord contents insurance.',
};

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Home Contents Cover Types</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Whether you rent, own your home, or are a landlord, we help you find the right contents insurance to protect your belongings.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coverageTypes.map(ct => (
            <Link
              key={ct.slug}
              href={`/coverage/${ct.slug}/`}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-brand-500 hover:shadow-md transition group flex flex-col"
            >
              <div className="text-5xl mb-4">{ct.icon}</div>
              <h2 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-brand-700 transition">
                {ct.name}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{ct.shortDesc}</p>
              <div className="mt-4 text-brand-700 font-semibold text-sm group-hover:text-brand-800 transition">
                Learn more →
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-brand-800 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not Sure What Cover You Need?</h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto text-lg">
            Our insurance advisers will help you work out exactly what coverage you need for your situation — whether you&apos;re renting, buying, or managing rental properties.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold py-3 px-8 rounded-xl hover:bg-slate-100 transition"
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
