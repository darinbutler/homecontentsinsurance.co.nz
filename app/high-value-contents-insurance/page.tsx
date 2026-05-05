import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'High-Value Items & Specified Contents Insurance NZ | HomeContentsInsurance.co.nz',
  description: 'Insurance for high-value items in NZ: jewellery, watches, art, cameras, collectibles. Agreed value cover protects items above standard policy limits.',
};

export default function HighValueContentsInsurancePage() {
  const itemsQualify = [
    'Jewellery (rings, necklaces, watches, bracelets)',
    'Luxury watches and chronographs',
    'Fine art and paintings',
    'Vintage and professional cameras',
    'Musical instruments (pianos, guitars, violins)',
    'Wine collections and rare spirits',
    'Collectibles (stamps, coins, memorabilia)',
    'Designer bags and accessories',
    'Antique furniture and valuables',
    'Bicycles and e-bikes'
  ];

  const standardPolicyCaps = [
    {
      insurer: 'Tower',
      limit: '$1,500'
    },
    {
      insurer: 'AMI',
      limit: '$2,000'
    },
    {
      insurer: 'AA',
      limit: '$2,500'
    },
    {
      insurer: 'State',
      limit: '$1,500'
    }
  ];

  const valueTypes = [
    {
      type: 'Agreed Value',
      description: 'You and the insurer agree upfront on the value of the item. If it\'s stolen or damaged, you get that amount (no depreciation).',
      best_for: 'Jewellery, watches, art, collectibles'
    },
    {
      type: 'Market Value',
      description: 'The item is valued at what it would sell for on the open market at the time of claim. Subject to depreciation.',
      best_for: 'Everyday items, electronics'
    },
    {
      type: 'Depreciated Value',
      description: 'Value decreases over time based on condition and age. Most standard policies use this method.',
      best_for: 'Furniture, appliances (not ideal for collectibles)'
    }
  ];

  const faqs = [
    {
      q: 'How do I insure my engagement ring?',
      a: 'Have the ring professionally valued by a jeweller, then get a separate specified cover quote. Most insurers charge $50–$150/year to insure a $5k ring. Agreed value is essential—it means you\'ll get the full value if lost, without depreciation.'
    },
    {
      q: 'How do I value high-value items?',
      a: 'For jewellery, watches, and art: Get a professional valuation from a certified jeweller or appraiser. Keep receipts and valuations in a safe place (or digitally backed up). For collectibles: Check recent auction prices and comparable sales. Update valuations every 2–3 years.'
    },
    {
      q: 'What\'s the difference between agreed value and standard cover?',
      a: 'Agreed value: You and the insurer agree on price before a claim. You get that amount regardless of depreciation. Standard cover: Insurer decides value at claim time, often applying depreciation. Agreed value is much better for items that don\'t depreciate (jewellery, art).'
    },
    {
      q: 'What\'s the difference between all-risks and named perils cover?',
      a: 'All-risks: Covers almost any accidental damage (theft, breakage, loss, drop damage), except what\'s explicitly excluded. Named perils: Only covers specific events listed (fire, theft, storm). All-risks is broader and better for valuable items.'
    },
    {
      q: 'How do I claim for a lost or damaged high-value item?',
      a: 'Report the loss/damage to your insurer within 30 days. Provide photos, valuation documents, and proof of ownership (receipt, appraisal, or photos from before the loss). If you have agreed value cover, the claim process is faster because value is pre-established.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-800 to-brand-900 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 bg-brand-700/20 blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              High-Value Items Insurance NZ
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Protect jewellery, watches, art, and collectibles with agreed-value cover. Standard policies cap single items at $1,500–$2,500.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#quote"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand-900 hover:bg-slate-100"
              >
                Get a Quote
              </a>
              <a
                href="#items"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10"
              >
                What Qualifies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Card */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg border-l-4 border-red-600 bg-red-50 p-6">
          <div className="flex gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-red-900">Standard Policies Cap Single Items</h3>
              <p className="mt-2 text-red-800">
                Most standard contents insurance policies impose a per-item limit of $1,500–$2,500. If your engagement ring is worth $8,000 or your watch is worth $5,000, it&apos;s not fully covered. You need specified cover for high-value items.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Items That Qualify */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16" id="items">
        <h2 className="text-3xl font-bold text-slate-900">Items That Qualify for High-Value Cover</h2>
        <p className="mt-4 text-lg text-slate-700">If any of your belongings are worth more than $2,500, you should get specified cover:</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {itemsQualify.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 text-brand-700 font-bold">◆</span>
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Standard Policy Caps */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-100 rounded-lg">
        <h2 className="text-3xl font-bold text-slate-900">Standard Policy Per-Item Caps</h2>
        <p className="mt-4 text-slate-700">Here&apos;s what major NZ insurers cap individual items at under standard cover:</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-200">
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Insurer</th>
                <th className="border border-slate-300 px-4 py-3 text-left font-semibold">Per-Item Limit (Standard)</th>
              </tr>
            </thead>
            <tbody>
              {standardPolicyCaps.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="border border-slate-300 px-4 py-3">{row.insurer}</td>
                  <td className="border border-slate-300 px-4 py-3 font-semibold text-brand-700">{row.limit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-700">
          <strong>To get more:</strong> You must add specified/scheduled cover for high-value items. This is an endorsement that lists each valuable item with its agreed value.
        </p>
      </div>

      {/* Value Types Explained */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Agreed vs. Market vs. Depreciated Value</h2>
        <div className="mt-12 space-y-8">
          {valueTypes.map((item, i) => (
            <div key={i} className="rounded-lg border-l-4 border-brand-700 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{item.type}</h3>
              <p className="mt-3 text-slate-700">{item.description}</p>
              <p className="mt-3 text-sm text-slate-600">
                <strong>Best for:</strong> {item.best_for}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="rounded-lg border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer font-semibold text-slate-900 hover:text-brand-700">
                {faq.q}
              </summary>
              <p className="mt-4 text-slate-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a
              }
            }))
          })
        }}
      />

      {/* Quote Form */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16" id="quote">
        <div className="rounded-lg bg-brand-50 p-12">
          <h2 className="text-2xl font-bold text-slate-900">Get a Quote for High-Value Cover</h2>
          <p className="mt-2 text-slate-700">List your valuables and get instant quotes for specified/scheduled cover.</p>
          <div className="mt-8">
            <QuoteForm variant="full" />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Don&apos;t Gamble on Valuables</h3>
          <p className="mt-4 text-slate-700">Get proper agreed-value cover for jewellery, watches, art, and collectibles. Protect what matters most.</p>
          <a
            href="#quote"
            className="mt-6 inline-block rounded-lg bg-brand-700 px-8 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Get Your Quote
          </a>
        </div>
      </div>
    </div>
  );
}
