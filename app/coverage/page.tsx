import Link from 'next/link';
import { coverageTypes } from '../../data/coverage-types';

export const metadata = {
  title: 'Home Contents Insurance Coverage Types | HomeContentsInsurance.co.nz',
  description: 'Compare home contents insurance coverage types for renters, homeowners, and landlords. Renters cover, homeowner protection, high-value items, accidental damage, portable valuables, temporary accommodation.',
};

const coverageImages: Record<string, string> = {
  'renters-contents': 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=80',
  'homeowner-contents': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
  'landlord-contents': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
  'high-value-items': 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80',
  'portable-valuables': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
  'accidental-damage': 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&auto=format&fit=crop&q=80',
  'temporary-accommodation': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
};

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* TALL HERO */}
      <div
        className="relative text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,20,60,0.72) 0%, rgba(15,30,80,0.55) 50%, rgba(10,20,60,0.80) 100%), url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Coverage Types
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              Home Contents<br />Cover Types
            </h1>
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed drop-shadow">
              Whether you rent, own, or invest — find the right contents insurance to protect everything inside your home.
            </p>
          </div>
        </div>
      </div>

      {/* CARDS — pulled up to overlap hero bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coverageTypes.map(ct => (
            <Link
              key={ct.slug}
              href={`/coverage/${ct.slug}/`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card image */}
              <div className="relative h-44 bg-brand-800 overflow-hidden">
                <img
                  src={coverageImages[ct.slug] ?? 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=80'}
                  alt={ct.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-white/80 bg-brand-700/60 px-2 py-1 rounded">
                    Contents Cover
                  </span>
                </div>
              </div>
              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition">
                  {ct.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{ct.shortDesc}</p>
                <div className="mt-4 text-brand-700 font-semibold text-sm group-hover:text-brand-800 transition flex items-center gap-1">
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-brand-800 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not Sure What Cover You Need?</h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto text-lg">
            Our advisers will help you work out exactly what coverage fits your situation — whether you&apos;re renting, buying, or managing rental properties.
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
