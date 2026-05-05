import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'Renters & Tenant Contents Insurance NZ | HomeContentsInsurance.co.nz',
  description: 'Contents insurance for NZ renters and tenants. Your landlord\'s policy doesn\'t cover your belongings. Compare quotes from NZ-licensed advisers today.',
};

export default function RentersInsurancePage() {
  const stats = [
    {
      value: '2 in 3',
      label: 'renters are underinsured or uninsured'
    },
    {
      value: '$35k',
      label: 'average contents value per renter'
    },
    {
      value: '$67/mo',
      label: 'average renters insurance cost'
    }
  ];

  const whyNeedCover = [
    {
      icon: '🏠',
      title: 'Landlord Insurance Doesn\'t Cover You',
      description: 'Your landlord\'s property insurance protects the building structure only. Your belongings are completely unprotected in theft, fire, or damage.'
    },
    {
      icon: '💰',
      title: 'Replace Everything Out of Pocket',
      description: 'Without insurance, you must pay 100% of replacement costs for furniture, clothes, electronics, and personal items after a loss.'
    },
    {
      icon: '📋',
      title: 'Liability Protection Included',
      description: 'Renters policies include public liability cover (up to $5M) if a visitor is injured in your rental property.'
    },
    {
      icon: '🔓',
      title: 'Covers Theft & Break-ins',
      description: 'Protection against burglary, theft from your room, and malicious damage by other residents or intruders.'
    }
  ];

  const covered = [
    'Furniture and appliances',
    'Clothing and personal items',
    'Electronics and computers',
    'Bedding and household goods',
    'Kitchenware and utensils',
    'Books, CDs, and media',
    'Sporting equipment',
    'Musical instruments',
    'Bike and outdoor gear',
    'Contents in locked containers'
  ];

  const myths = [
    {
      myth: 'It\'s Too Expensive',
      truth: 'Renters insurance averages just $67/month in NZ. A single theft or damage claim could cost $5k–$30k+. The protection far outweighs the cost.'
    },
    {
      myth: 'My Landlord\'s Insurance Covers Me',
      truth: 'Absolutely not. Landlord policies cover the building structure only, not tenants\' belongings. You must get your own cover.'
    },
    {
      myth: 'I Don\'t Have Enough Stuff to Insure',
      truth: 'Most renters underestimate their contents value. A laptop, TV, bike, and clothes easily add up to $15k–$25k. Check an online calculator.'
    }
  ];

  const faqs = [
    {
      q: 'Do I need contents insurance as a renter?',
      a: 'Yes. Landlord insurance doesn\'t cover your belongings. If there\'s a fire, theft, or damage, you\'ll be liable for all losses. Contents insurance is essential.'
    },
    {
      q: 'What\'s the average cost of renters insurance in NZ?',
      a: 'Average renters insurance costs $67–$100/month ($800–$1,200/year) depending on sum insured, location, and selected excess.'
    },
    {
      q: 'What does renters insurance NOT cover?',
      a: 'Typically excludes: gradual wear and tear, damage from lack of maintenance, high-risk items (bikes, jewellery) unless specified, and claims related to illegal activity.'
    },
    {
      q: 'Can I claim on renters insurance if items are stolen while I\'m away?',
      a: 'Yes, standard renters policies cover theft and burglary at your rental address. Check your policy for any exclusions on unattended properties.'
    },
    {
      q: 'What happens when I move to a new rental?',
      a: 'You can usually update your address and sum insured with your insurer. Most policies are annual and can be renewed or transferred easily.'
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
              Contents Insurance for Renters & Tenants
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Your belongings aren&apos;t covered by your landlord&apos;s insurance. Get affordable protection for everything you own—starting from $67/month.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#quote"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand-900 hover:bg-slate-100"
              >
                Get a Quote
              </a>
              <a
                href="#faq"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl font-bold text-brand-700">{stat.value}</div>
              <p className="mt-2 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Renters Need Cover */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Why Renters Need Cover</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {whyNeedCover.map((item, i) => (
            <div key={i} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Covered */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-100 rounded-lg">
        <h2 className="text-3xl font-bold text-slate-900">What&apos;s Covered</h2>
        <p className="mt-4 text-lg text-slate-700">Typical renters policies cover:</p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {covered.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 text-brand-700 font-bold">✓</span>
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common Myths */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Common Myths Busted</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {myths.map((item, i) => (
            <div key={i} className="rounded-lg bg-red-50 border border-red-200 p-8">
              <h3 className="text-lg font-semibold text-red-900">Myth: {item.myth}</h3>
              <p className="mt-4 text-red-700">{item.truth}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16" id="faq">
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
          <h2 className="text-2xl font-bold text-slate-900">Get Your Quote Today</h2>
          <p className="mt-2 text-slate-700">Compare quotes from multiple NZ-licensed insurance advisers in minutes.</p>
          <div className="mt-8">
            <QuoteForm variant="full" />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Ready to protect your belongings?</h3>
          <p className="mt-4 text-slate-700">Get instant quotes from NZ&apos;s top insurers. No hidden fees, no commitment.</p>
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
