import Link from 'next/link'
import QuoteForm from '../components/QuoteForm'
import { coverageTypes } from '../data/coverage-types'
import { blogPosts } from '../data/blog-posts'
import { faqs } from '../data/faqs'

export const metadata = {
  title:
    'Home Contents Insurance NZ | Compare & Get Covered — Expert Advice for Renters, Homeowners & Landlords',
  description:
    'Compare home contents insurance quotes from NZ licensed advisers. $804/yr national average. Get matched with expert brokers. Renters, homeowners, landlords welcome. Free quotes within one business day.',
}

const marketStats = [
  {
    value: '$804',
    label: 'National Average Premium',
    subtext: 'Q1 2026 data',
  },
  {
    value: '$70k+',
    label: 'Average Contents Value',
    subtext: 'In typical NZ household',
  },
  {
    value: '$275',
    label: 'Average Annual Saving',
    subtext: 'When comparing policies',
  },
  {
    value: '76%',
    label: 'Find Cheaper Cover',
    subtext: 'By comparing quotes',
  },
]

const whoWeHelp = [
  {
    icon: '🏘️',
    title: 'Renters & Tenants',
    desc: 'Protect your belongings under a rented roof. Landlord insurance does not cover your possessions.',
    href: '/coverage/renters-contents/',
  },
  {
    icon: '🏠',
    title: 'Homeowners',
    desc: 'Full contents cover for your home and everything inside. Plus accidental damage and high-value items.',
    href: '/coverage/homeowner-contents/',
  },
  {
    icon: '🏢',
    title: 'Landlords',
    desc: 'Specialist landlord contents cover for furnished rentals, landlord liability, and temporary accommodation.',
    href: '/coverage/landlord-contents/',
  },
]

const brokerVsComparison = [
  {
    scenario: 'Standard renters or homeowners',
    broker: 'Comparison tools work fine',
    advantage: false,
  },
  {
    scenario: 'High-value items ($50k+)',
    broker: 'Broker finds specialist insurers',
    advantage: true,
  },
  {
    scenario: 'Landlord with furnished rental',
    broker: 'Complex cover, broker adds value',
    advantage: true,
  },
  {
    scenario: 'Airbnb or holiday rental',
    broker: 'Most insurers exclude this — broker finds options',
    advantage: true,
  },
]

const insurerComparison = [
  {
    insurer: 'Tower',
    personalLiability: 'Up to $20M',
    tempAccommodation: '28 days',
    keysAndLocks: '$500',
    standaloneContents: 'Yes',
    replacementValue: 'Yes',
  },
  {
    insurer: 'AA Insurance',
    personalLiability: 'Up to $20M',
    tempAccommodation: '28 days',
    keysAndLocks: '$250',
    standaloneContents: 'Yes',
    replacementValue: 'Yes',
  },
  {
    insurer: 'AMI / State Insurance',
    personalLiability: 'Up to $25M',
    tempAccommodation: '14 days',
    keysAndLocks: '$500',
    standaloneContents: 'Yes',
    replacementValue: 'Yes',
  },
  {
    insurer: 'AMP',
    personalLiability: 'Up to $20M',
    tempAccommodation: '21 days',
    keysAndLocks: '$250',
    standaloneContents: 'Optional',
    replacementValue: 'Yes',
  },
  {
    insurer: 'Trade Me Insurance',
    personalLiability: 'Up to $20M',
    tempAccommodation: '28 days',
    keysAndLocks: '$500',
    standaloneContents: 'Yes',
    replacementValue: 'Yes',
  },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-blue-900 to-slate-900 text-white pt-20 pb-28">
        {/* Background noise texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 text-blue-100 text-sm font-semibold mb-6 border border-blue-400/30">
              <span>🏠</span> NZ Home Contents Insurance Specialists
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Home Contents Insurance<span className="text-blue-300"> — Expert Advice for Renters, Homeowners & Landlords</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Compare quotes from NZ-licensed advisers. National average $804/year. Renters, homeowners, and landlords get matched with experts who understand your situation. Free quotes within one business day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg"
              >
                Get a Free Quote →
              </Link>
              <Link
                href="/compare/"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 hover:bg-blue-500/10 text-white font-semibold py-4 px-8 rounded-xl transition"
              >
                Compare Insurers
              </Link>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-300">NZ-Licensed</div>
                <div className="text-sm text-blue-100 mt-1">Regulated Advisers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">$804/yr</div>
                <div className="text-sm text-blue-100 mt-1">Avg Premium</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-300">1 Business Day</div>
                <div className="text-sm text-blue-100 mt-1">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who We Help
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you rent, own, or invest in property, we match you with advisers who specialise in your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whoWeHelp.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-brand-400 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ADVISER NOT COMPARISON TOOL */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Broker vs Comparison Tool
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comparison tools are great for straightforward policies. But when your situation is complex, a broker adds real value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {brokerVsComparison.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${
                  item.advantage
                    ? 'bg-blue-50 border-2 border-brand-700'
                    : 'bg-white border border-stone-200'
                }`}
              >
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {item.scenario}
                </h3>
                <div className="flex items-start gap-3">
                  <div className="text-2xl flex-shrink-0">
                    {item.advantage ? '✓' : '•'}
                  </div>
                  <p className="text-slate-700">{item.broker}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-700 text-white rounded-xl p-8 text-center">
            <p className="text-lg font-semibold mb-2">
              FMCA-Regulated Advisers
            </p>
            <p className="text-blue-100">
              Our advisers are licensed by the Financial Markets Authority. They're bound by a code of conduct to act in your best interest.
            </p>
          </div>
        </div>
      </section>

      {/* COVERAGE TYPES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Coverage Types
            </h2>
            <p className="text-lg text-slate-600">
              Seven types of cover for every situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((ct) => (
              <Link
                key={ct.slug}
                href={`/coverage/${ct.slug}/`}
                className="group bg-stone-50 rounded-xl p-6 border border-stone-200 hover:border-brand-400 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{ct.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition">
                  {ct.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ct.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="py-16 bg-gradient-to-r from-brand-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Numbers: NZ Home Contents Market
            </h2>
            <p className="text-blue-100 text-lg">
              Data-driven insights to help you understand home contents insurance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {marketStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURER COMPARISON TABLE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Insurer Comparison Snapshot
            </h2>
            <p className="text-lg text-slate-600">
              How five major insurers compare on key features. Full comparison at{' '}
              <Link href="/compare/" className="text-brand-700 font-semibold hover:underline">
                /compare/
              </Link>
              .
            </p>
          </div>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="text-left px-6 py-4 font-bold">Insurer</th>
                  <th className="text-left px-6 py-4 font-bold">Personal Liability</th>
                  <th className="text-left px-6 py-4 font-bold">Temp Accommodation</th>
                  <th className="text-left px-6 py-4 font-bold">Keys & Locks</th>
                  <th className="text-left px-6 py-4 font-bold">Standalone Contents</th>
                  <th className="text-left px-6 py-4 font-bold">Replacement Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {insurerComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {row.insurer}
                    </td>
                    <td className="px-6 py-4 text-slate-700">{row.personalLiability}</td>
                    <td className="px-6 py-4 text-slate-700">{row.tempAccommodation}</td>
                    <td className="px-6 py-4 text-slate-700">{row.keysAndLocks}</td>
                    <td className="px-6 py-4">
                      {row.standaloneContents === 'Yes' ? (
                        <span className="text-green-700 font-bold">✓</span>
                      ) : (
                        <span className="text-slate-400">Optional</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {row.replacementValue === 'Yes' && (
                        <span className="text-green-700 font-bold">✓</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-slate-700">
            <p>
              <strong>Disclaimer:</strong> This comparison is for illustrative purposes only and based on publicly available information as of Q1 2026. Features and premiums vary by policy, postcode, and personal circumstances. Full details available at /compare/. Get a personalised quote to compare actual rates for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600">
              Simple four-step process. No pressure, no obligation.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Your Details',
                desc: 'Enter your postcode, home type, and cover needs. Takes 2 minutes.',
              },
              {
                step: '2',
                title: 'Adviser Reviews',
                desc: 'A NZ-licensed adviser reviews your situation and understands your needs.',
              },
              {
                step: '3',
                title: 'You Receive Options',
                desc: 'Get quotes from multiple insurers matched to your situation.',
              },
              {
                step: '4',
                title: 'Choose with No Obligation',
                desc: 'Compare options at your pace. Only proceed if it works for you.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-700 text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <QuoteForm variant="full" />

      {/* BLOG PREVIEW */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-slate-600">
              Guides and insights for renters, homeowners, and landlords.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition"
              >
                <div className="bg-slate-200 h-48 overflow-hidden">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">📰</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="text-brand-700 font-semibold group-hover:underline">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SNIPPET */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Answers to the most common questions about home contents insurance.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, idx) => (
              <details
                key={idx}
                className="group border border-stone-200 rounded-lg p-6 hover:border-brand-400 transition cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-900 select-none">
                  {faq.question}
                  <span className="text-brand-700 transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/faqs/"
              className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'HomeContentsInsurance.co.nz',
            description:
              'Home contents insurance broker referral service for NZ renters, homeowners, and landlords.',
            url: 'https://homecontentsinsurance.co.nz',
            areaServed: 'NZ',
            serviceType: ['Renters Contents', 'Homeowner Contents', 'Landlord Contents'],
            priceRange: 'NZD$67/month',
          }),
        }}
      />
    </>
  )
}
