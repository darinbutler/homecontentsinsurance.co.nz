import Link from 'next/link'
import QuoteForm from '../components/QuoteForm'
import { coverageTypes } from '../data/coverage-types'
import { blogPosts } from '../data/blog-posts'
import { faqs } from '../data/faqs'

export const metadata = {
  title: 'Home Contents Insurance | Compare & Save — Expert Advice for Renters, Homeowners & Landlords',
  description:
    'Stop overpaying for home contents insurance. Compare quotes from multiple insurers via licensed advisers. Save up to $275/year. Renters, homeowners and landlords welcome.',
}

const whoWeHelp = [
  {
    icon: '🏘️',
    title: 'Renters & Tenants',
    desc: "Your landlord's policy covers the building — not your belongings. Get standalone contents cover from as little as $6/week.",
    href: '/coverage/renters-contents/',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: '🏠',
    title: 'Homeowners',
    desc: 'Full contents cover for everything inside your home — furniture, electronics, jewellery, and accidental damage.',
    href: '/coverage/homeowner-contents/',
    gradient: 'from-brand-700 to-brand-900',
  },
  {
    icon: '🏢',
    title: 'Landlords',
    desc: 'Specialist landlord contents cover for furnished rentals, liability protection, and temporary accommodation.',
    href: '/coverage/landlord-contents/',
    gradient: 'from-slate-600 to-slate-800',
  },
]

const brokerBenefits = [
  { icon: '🧑‍💼', title: 'A Real Person Reviews Your Needs', body: "Not an algorithm. A licensed adviser reads your situation and finds cover that actually fits — not just the cheapest checkbox." },
  { icon: '🔍', title: 'We Compare 6+ Insurers', body: "Tower, AA, AMI, AMP, Trade Me and more. One conversation and we do the comparison legwork — so you don't have to." },
  { icon: '💡', title: "Expertise the Tools Don't Have", body: 'High-value items, landlord situations, Airbnb rentals, earthquake-prone areas — these fall through the gaps of comparison tools. We do not.' },
  { icon: '💰', title: 'Average Saving of $275/Year', body: 'When customers switch using a broker, the average saving is $275/year. Why pay the loyalty tax on auto-renewal?' },
]

const compToolLimitations = [
  'Shows only direct insurers, not the full broker market',
  "Can't advise on high-value or specialist items",
  'No guidance on policy exclusions that matter to you',
  'Auto-renew traps — premiums creep up year on year',
]

const insurerComparison = [
  { insurer: 'Tower', personalLiability: 'Up to $20M', tempAccommodation: '28 days', keysAndLocks: '$500', standaloneContents: 'Yes', replacementValue: 'Yes' },
  { insurer: 'AA Insurance', personalLiability: 'Up to $20M', tempAccommodation: '28 days', keysAndLocks: '$250', standaloneContents: 'Yes', replacementValue: 'Yes' },
  { insurer: 'AMI / State', personalLiability: 'Up to $25M', tempAccommodation: '14 days', keysAndLocks: '$500', standaloneContents: 'Yes', replacementValue: 'Yes' },
  { insurer: 'AMP', personalLiability: 'Up to $20M', tempAccommodation: '21 days', keysAndLocks: '$250', standaloneContents: 'Optional', replacementValue: 'Yes' },
  { insurer: 'Trade Me Insurance', personalLiability: 'Up to $20M', tempAccommodation: '28 days', keysAndLocks: '$500', standaloneContents: 'Yes', replacementValue: 'Yes' },
]

const coverageColors = [
  'bg-blue-600', 'bg-brand-700', 'bg-purple-700', 'bg-teal-700', 'bg-orange-600', 'bg-slate-600', 'bg-green-700',
]

const howItWorks = [
  { step: '1', title: 'Tell Us Your Situation', desc: 'Renter, homeowner, or landlord — submit your details in 2 minutes.', icon: '📋' },
  { step: '2', title: 'We Compare the Market', desc: 'Your licensed adviser reviews options from 6+ insurers on your behalf.', icon: '🔍' },
  { step: '3', title: 'Receive Your Options', desc: 'Get clear, comparable quotes matched to your exact situation.', icon: '📊' },
  { step: '4', title: 'You Choose — No Pressure', desc: 'Pick the best deal or walk away. Your call, no obligation.', icon: '✅' },
]

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-step-1 { animation: fadeSlideRight 0.5s ease both; animation-delay: 0.1s; }
        .anim-step-2 { animation: fadeSlideRight 0.5s ease both; animation-delay: 0.3s; }
        .anim-step-3 { animation: fadeSlideRight 0.5s ease both; animation-delay: 0.5s; }
        .anim-step-4 { animation: fadeSlideRight 0.5s ease both; animation-delay: 0.7s; }
        .anim-broker-1 { animation: fadeSlideUp 0.5s ease both; animation-delay: 0.1s; }
        .anim-broker-2 { animation: fadeSlideUp 0.5s ease both; animation-delay: 0.25s; }
        .anim-broker-3 { animation: fadeSlideUp 0.5s ease both; animation-delay: 0.4s; }
        .anim-broker-4 { animation: fadeSlideUp 0.5s ease both; animation-delay: 0.55s; }
      `}</style>

      {/* HERO */}
      <section
        className="relative overflow-hidden text-white pt-20 pb-28"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(15,30,80,0.60) 0%, rgba(29,78,216,0.42) 55%, rgba(10,20,60,0.68) 100%), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-semibold mb-6 border border-white/25">
              The Home Contents Insurance Specialists
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Stop Overpaying for<br /><span className="text-blue-300">Home Contents Insurance</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed drop-shadow">
              Our licensed advisers compare up to 6 insurers and find the best deal for your situation — renters, homeowners and landlords welcome. Average saving: $275/year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact/"
                className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-xl transition shadow-lg text-lg">
                Get a Free Quote →
              </Link>
              <Link href="/compare/"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-xl transition backdrop-blur-sm">
                Compare Insurers
              </Link>
            </div>
            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 text-center max-w-xl mx-auto">
              <div className="bg-white/12 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/20">
                <div className="text-lg font-bold text-white">🛡️ Licensed</div>
                <div className="text-xs text-blue-100 mt-1">FMCA-Regulated Advisers</div>
              </div>
              <div className="bg-white/12 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/20">
                <div className="text-lg font-bold text-white">Save $275</div>
                <div className="text-xs text-blue-100 mt-1">Average annual saving</div>
              </div>
              <div className="bg-white/12 backdrop-blur-sm rounded-xl px-3 py-3 border border-white/20">
                <div className="text-lg font-bold text-white">6 Providers</div>
                <div className="text-xs text-blue-100 mt-1">We compare for you</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who We Help</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you rent, own, or invest — we match you with an adviser who knows your situation inside out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whoWeHelp.map((item) => (
              <Link key={item.title} href={item.href}
                className={`group bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed mb-5">{item.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BROKER VS COMPARISON TOOL */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Use a Broker Instead of a Comparison Tool?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The world is full of comparison tools — but not every insurance need fits a template. We spend the time understanding your requirements. Why pay over the odds when a conversation could save you hundreds?
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Limitations column */}
            <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xl">🖥️</div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Comparison Tools</h3>
                  <p className="text-slate-500 text-sm">Good for simple, standard needs</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {compToolLimitations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                <strong>The loyalty tax is real:</strong> insurers often quietly increase premiums at renewal. Comparison tools do not flag this.
              </div>
            </div>
            {/* Broker benefits column */}
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">🧑‍💼</div>
                <div>
                  <h3 className="font-bold text-white text-lg">Our Broker Service</h3>
                  <p className="text-blue-200 text-sm">Human expertise. Real savings.</p>
                </div>
              </div>
              <div className="space-y-5">
                {brokerBenefits.map((b, i) => (
                  <div key={i} className={`flex items-start gap-4 anim-broker-${i + 1}`}>
                    <div className="text-2xl flex-shrink-0">{b.icon}</div>
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{b.title}</div>
                      <div className="text-blue-200 text-xs leading-relaxed">{b.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-brand-50 border-2 border-brand-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-brand-900 text-lg">Ready to stop overpaying?</p>
              <p className="text-brand-700 text-sm">Our advisers are licensed by the Financial Markets Authority and bound to act in your best interest.</p>
            </div>
            <Link href="/contact/"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-700 text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-800 transition shadow-md">
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* COVERAGE TYPES */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Coverage Types</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every home is different. Find the right cover for your situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coverageTypes.map((ct, idx) => (
              <Link key={ct.slug} href={`/coverage/${ct.slug}/`}
                className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-brand-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${coverageColors[idx % coverageColors.length]} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {ct.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand-400 transition">{ct.name}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{ct.shortDesc}</p>
                  </div>
                </div>
                <div className="mt-4 text-brand-400 text-sm font-semibold group-hover:text-brand-300 transition">Learn more →</div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/coverage/"
              className="inline-flex items-center gap-2 border-2 border-slate-600 hover:border-brand-500 text-slate-300 hover:text-white font-semibold py-3 px-8 rounded-xl transition">
              View All Coverage Types →
            </Link>
          </div>
        </div>
      </section>

      {/* INSURER COMPARISON SNAPSHOT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Insurer Snapshot
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How the Major Insurers Stack Up
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Premiums for identical cover can vary by $400–$700 per year. See how key features compare across the market.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-brand-200 shadow-lg overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-brand-800 text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-bold">Insurer</th>
                    <th className="text-left px-6 py-4 font-bold">Personal Liability</th>
                    <th className="text-left px-6 py-4 font-bold">Temp Accommodation</th>
                    <th className="text-left px-6 py-4 font-bold">Keys &amp; Locks</th>
                    <th className="text-center px-6 py-4 font-bold">Standalone</th>
                    <th className="text-center px-6 py-4 font-bold">New-for-Old</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {insurerComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-bold text-brand-800">{row.insurer}</td>
                      <td className="px-6 py-4 text-slate-700">{row.personalLiability}</td>
                      <td className="px-6 py-4 text-slate-700">{row.tempAccommodation}</td>
                      <td className="px-6 py-4 text-slate-700">{row.keysAndLocks}</td>
                      <td className="px-6 py-4 text-center">
                        {row.standaloneContents === 'Yes'
                          ? <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</span>
                          : <span className="text-slate-400 text-xs">Optional</span>}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold">✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-brand-50 border-t-2 border-brand-200 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-600">
                <strong>Disclaimer:</strong> Illustrative only. Based on publicly available information Q1 2026. Premiums vary by postcode, sum insured and circumstances.
              </p>
              <Link href="/compare/"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-brand-700 text-white font-bold text-sm py-2.5 px-5 rounded-lg hover:bg-brand-800 transition">
                Full Comparison →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="py-14 bg-gradient-to-r from-brand-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$804', label: 'National Avg Premium', sub: 'Q1 2026' },
              { value: '$70k+', label: 'Avg Contents Value', sub: 'Typical household' },
              { value: '$275', label: 'Avg Annual Saving', sub: 'When comparing' },
              { value: '76%', label: 'Find Cheaper Cover', sub: 'By comparing quotes' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-200 mb-2">{stat.value}</div>
                <div className="font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Simple. Fast. No obligation.</p>
          </div>
          <div className="relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 z-0" />
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((item, i) => (
                <div key={item.step} className={`text-center anim-step-${i + 1}`}>
                  <div className="w-16 h-16 rounded-full bg-brand-700 text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-700 text-white font-bold py-4 px-10 rounded-xl hover:bg-brand-800 transition shadow-lg text-lg">
              Start Your Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <QuoteForm variant="full" />

      {/* BLOG PREVIEW */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-slate-600">Guides and insights for renters, homeowners, and landlords.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="bg-brand-800 h-48 overflow-hidden">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">📰</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-brand-100 text-brand-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{post.category}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700 transition line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="text-brand-700 font-semibold group-hover:underline">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SNIPPET */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Answers to the most common questions about home contents insurance.</p>
          </div>
          <div className="space-y-3">
            {faqs.slice(0, 6).map((faq, idx) => (
              <details key={idx}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:border-brand-400 transition cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-slate-900 select-none px-6 py-4 hover:bg-slate-50 transition">
                  <span>{faq.question}</span>
                  <span className="text-brand-700 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/faq/" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-800 transition">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'HomeContentsInsurance.co.nz',
        description: 'Home contents insurance broker referral service for renters, homeowners, and landlords.',
        url: 'https://www.homecontentsinsurance.co.nz',
        areaServed: 'NZ',
        serviceType: ['Renters Contents', 'Homeowner Contents', 'Landlord Contents'],
        priceRange: 'NZD$67/month',
      })}} />
    </>
  )
}
