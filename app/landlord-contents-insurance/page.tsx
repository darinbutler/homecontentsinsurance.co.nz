import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Landlord Contents Insurance NZ — Furnished Rental Protection | HomeContentsInsurance.co.nz',
  description: 'Landlord contents insurance for furnished rentals in NZ. Cover whiteware, malicious tenant damage, loss of rent. Get quotes from NZ insurers today.',
};

export default function LandlordContentsInsurancePage() {
  const differences = [
    {
      title: 'Standard vs. Landlord Contents',
      items: [
        'Landlord cover includes furnished items (sofas, beds, appliances)',
        'Standard renters/homeowner cover excludes rental income protection',
        'Landlord policies cover malicious tenant damage and theft by tenants',
        'Loss of rent endorsement protects your income if tenant can\'t occupy'
      ]
    },
    {
      title: 'What\'s Unique to Furnished Rentals',
      items: [
        'Wear and tear expectations are higher (stains, minor damage)',
        'Tenant turnover increases risk of damage and theft',
        'Whiteware (fridge, washing machine, dryer) is high-value and portable',
        'Liability is complex—tenant injuries may fall on you, the owner'
      ]
    },
    {
      title: 'Coverage You Can Add',
      items: [
        'Loss of rent endorsement (if tenant can\'t occupy due to covered peril)',
        'Malicious tenant damage (beyond normal wear and tear)',
        'Public liability (visitor injuries on your property)',
        'Accidental damage (optional add-on, covers breakages)'
      ]
    },
    {
      title: 'Items That Qualify for Cover',
      items: [
        'Kitchen appliances: fridge, stove, dishwasher, microwave, toaster',
        'Laundry: washing machine, dryer, iron, ironing board',
        'Furniture: sofa, beds, dining table, chairs, wardrobes, drawers',
        'Soft furnishings: curtains, blinds, rugs, cushions, mattresses'
      ]
    }
  ];

  const coverageList = [
    'Furnished household items and furniture',
    'Whiteware (fridges, ovens, washing machines, dryers)',
    'Malicious damage by tenants',
    'Theft by tenants or break-ins',
    'Loss of rent (if unit is uninhabitable due to covered damage)',
    'Public liability (visitor injuries on property)',
    'Fire and natural perils',
    'Weather damage (floods, storms, hail)'
  ];

  const faqs = [
    {
      q: 'Why do landlords need separate contents insurance?',
      a: 'Standard building insurance covers the structure, not the furnishings you provide. Landlord contents insurance protects the items you own in the rental—furniture, whiteware, and fittings.'
    },
    {
      q: 'What\'s the difference between contents and loss of rent?',
      a: 'Contents insurance covers your belongings (furniture, appliances). Loss of rent protects your income if the property becomes uninhabitable due to a covered event like fire or storm damage.'
    },
    {
      q: 'How much does landlord contents insurance cost in NZ?',
      a: 'Costs typically range $380–$850/year depending on sum insured, location, excess, and included add-ons. A furnished 2-bed rental with $15k–$30k sum insured costs $500–$700/year on average.'
    },
    {
      q: 'Will I be covered if a tenant damages items?',
      a: 'Yes, if you have malicious damage cover included. However, normal wear and tear (minor stains, small dents) are typically excluded. You should also hold a bond from the tenant.'
    },
    {
      q: 'Do I need public liability as a landlord?',
      a: 'It\'s strongly recommended. If a visitor or guest is injured on your property, you could be liable for their medical bills and legal costs. Many landlords add $5M public liability to their policy.'
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
              Landlord Contents Insurance NZ
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Protect your furnished rental items, appliances, and rental income. Comprehensive cover tailored for property owners.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#quote"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand-900 hover:bg-slate-100"
              >
                Get a Quote
              </a>
              <a
                href="#coverage"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10"
              >
                See Coverage
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alert: Standard Contents Doesn't Cover Furnished Rentals */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-6">
          <div className="flex gap-4">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-amber-900">Standard Contents Insurance Won&apos;t Work</h3>
              <p className="mt-2 text-amber-800">
                Standard homeowner or rental contents policies are designed for owner-occupied properties. They don&apos;t cover furnished rental items, malicious tenant damage, or loss of rental income. You need a dedicated landlord contents policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Differences */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Landlord Contents vs. Standard Insurance</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {differences.map((section, i) => (
            <div key={i} className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-700">{section.title}</h3>
              <ul className="mt-6 space-y-3">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-slate-700">
                    <span className="text-brand-700 font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Details */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-100 rounded-lg" id="coverage">
        <h2 className="text-3xl font-bold text-slate-900">What&apos;s Covered</h2>
        <p className="mt-4 text-lg text-slate-700">A comprehensive landlord contents policy typically covers:</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {coverageList.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 text-brand-700 font-bold">✓</span>
              <span className="text-slate-700">{item}</span>
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
          <h2 className="text-2xl font-bold text-slate-900">Get Your Landlord Quote Today</h2>
          <p className="mt-2 text-slate-700">Compare landlord contents policies from multiple NZ insurers. Instant quotes, no obligation.</p>
          <div className="mt-8">
            <QuoteForm variant="full" />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Protect Your Rental Investment</h3>
          <p className="mt-4 text-slate-700">Don&apos;t leave your furnished rental exposed. Get comprehensive cover for items, income, and liability.</p>
          <a
            href="#quote"
            className="mt-6 inline-block rounded-lg bg-brand-700 px-8 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Compare Quotes Now
          </a>
        </div>
      </div>
    </div>
  );
}
