import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare Home Contents Insurance NZ | Side-by-Side Insurer Guide',
  description: 'Compare Tower, AA Insurance, AMI, State, AMP and Trade Me home contents insurance side-by-side. See coverage limits, pricing, and features — then get expert advice.',
};

const INSURERS = ['Tower Premium', 'Tower Plus', 'Tower Std', 'AA Insurance', 'AMI', 'State', 'AMP', 'Trade Me'];

const rows = [
  {
    label: 'Replacement value (new-for-old)',
    vals: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓'],
    good: [true, true, true, true, true, true, true, true],
  },
  {
    label: 'Personal liability',
    vals: ['Included', 'Included', 'Included', '$2M', '$1M', '$1M', '$1M+', '$1M'],
    good: [true, true, true, true, false, false, false, false],
  },
  {
    label: 'Temporary accommodation',
    vals: ['Included', 'Included', '$15k', '$20k', '$20k/12mo', '$20k', '$20k', '$20k'],
    good: [true, true, false, true, true, true, true, true],
  },
  {
    label: 'Keys & locks',
    vals: ['$2k', '$1k', '$500', '✓', '$1k', '$500', '✓', '✓'],
    good: [true, true, false, true, true, false, true, true],
  },
  {
    label: 'Mobile phone cover',
    vals: ['$10k', '$1k', '$500', '✓', '✓', '✓', '✓', '✓'],
    good: [true, false, false, true, true, true, true, true],
  },
  {
    label: 'Jewellery per-item limit',
    vals: ['$10k', '$2.5k', '$1k', 'See policy', 'See policy', 'See policy', 'See policy', 'See policy'],
    good: [true, true, false, null, null, null, null, null],
  },
  {
    label: 'Away-from-home cover',
    vals: ['Full NZ', 'Full NZ', '$5k', '✓', '✓', '✓', '✓', 'Limited'],
    good: [true, true, false, true, true, true, true, false],
  },
  {
    label: 'Accidental damage',
    vals: ['✓', '✓', 'Basic', '✓', 'Add-on', 'Add-on', 'Add-on', 'Add-on'],
    good: [true, true, false, true, null, null, null, null],
  },
  {
    label: 'Moving house cover',
    vals: ['14 days', '14 days', '14 days', '✓', '✓', '✓', '✓', '✓'],
    good: [null, null, null, true, true, true, true, true],
  },
  {
    label: 'Standalone contents (no house policy needed)',
    vals: ['✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓'],
    good: [true, true, true, true, true, true, true, true],
  },
];

const premiums = [
  { insurer: 'AMP', approx: 507, pct: 40 },
  { insurer: 'Trade Me', approx: 643, pct: 51 },
  { insurer: 'AA Insurance', approx: 664, pct: 53 },
  { insurer: 'MAS', approx: 720, pct: 57 },
  { insurer: 'AMI / State', approx: 850, pct: 68 },
  { insurer: 'Tower Standard', approx: 1253, pct: 100 },
];

function Cell({ val, good }: { val: string; good: boolean | null }) {
  const base = 'px-3 py-3 text-center text-sm border-r border-slate-200 last:border-r-0';
  if (good === true) return <td className={`${base} bg-green-50 text-green-800 font-semibold`}>{val}</td>;
  if (good === false) return <td className={`${base} bg-amber-50 text-amber-700`}>{val}</td>;
  return <td className={`${base} text-slate-600`}>{val}</td>;
}

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(15,30,80,0.86) 0%, rgba(29,78,216,0.72) 55%, rgba(10,20,60,0.90) 100%), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Compare NZ Home Contents Insurance
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Premiums for identical cover can vary by <strong className="text-white">$400–$700</strong> between insurers. See every major insurer side-by-side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white text-brand-800 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition shadow">
              Get a Quote →
            </Link>
            <a href="#compare-table" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition">
              See the Table ↓
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM SNAPSHOT — bars animate left-to-right on scroll */}
      <section id="premium-snapshot" className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Indicative Premium Comparison</h2>
          <p className="text-slate-500 mb-8 text-sm">Scenario: Auckland, $25k sum insured, $250 excess (Q1 2026). Prices illustrative — your quote will vary.</p>
          <div className="space-y-4">
            {premiums.map((p) => (
              <div key={p.insurer} className="flex items-center gap-4">
                <span className="w-36 text-sm font-semibold text-slate-700 text-right shrink-0">{p.insurer}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-8 relative overflow-hidden">
                  <div
                    className="premium-bar h-8 rounded-full flex items-center justify-end pr-3"
                    style={{
                      width: '0%',
                      background: p.pct < 55 ? '#16a34a' : p.pct < 70 ? '#2563eb' : '#dc2626',
                      transition: 'width 0.9s cubic-bezier(0.34, 1.0, 0.64, 1)',
                    }}
                    data-width={`${p.pct}%`}
                  >
                    <span className="premium-bar-label text-white text-xs font-bold opacity-0" style={{ transition: 'opacity 0.3s ease 0.6s' }}>~${p.approx.toLocaleString()}/yr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">Green = most competitive. Red = most expensive for this scenario. A broker can identify which insurer offers best value <em>for your situation</em>.</p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="compare-table" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Feature Comparison</h2>
              <p className="text-slate-500 text-sm mt-1">Coverage features across NZ&apos;s major home contents insurers</p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-200 inline-block"></span> Strong feature</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-100 inline-block"></span> Limited / add-on</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-white border border-slate-200 inline-block"></span> Standard</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border-2 border-brand-200 shadow-md">
            <table className="w-full border-collapse text-sm bg-white">
              <thead>
                <tr className="bg-brand-800 text-white">
                  <th className="px-4 py-4 text-left font-semibold text-sm sticky left-0 bg-brand-800 z-10 min-w-[180px] border-r border-brand-700">Feature</th>
                  {INSURERS.map((ins, i) => (
                    <th key={ins} className={`px-3 py-4 text-center font-semibold text-xs whitespace-nowrap border-r border-brand-700 last:border-r-0 ${i === 0 ? 'bg-blue-700' : ''}`}>
                      {ins}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={`border-t border-slate-200 ${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>
                    <td className={`px-4 py-3 font-semibold text-slate-800 sticky left-0 z-10 text-sm border-r border-slate-200 ${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      {row.label}
                    </td>
                    {row.vals.map((val, vi) => (
                      <Cell key={vi} val={val} good={row.good[vi]} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
            <span>✓ = Included as standard</span>
            <span>Add-on = Available as optional extra</span>
            <span>See policy = Refer to policy wording</span>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-brand-600 rounded-r-xl p-5 text-sm text-slate-700">
            <p><strong>Important:</strong> This comparison is general information only, based on publicly available policy information as at May 2026. Actual coverage, limits, and premiums vary by tier, location, and individual circumstances. Always verify details directly with the insurer or your adviser. HomeContentsInsurance.co.nz is a referral and lead generation service. We are not a licensed financial adviser, insurer, or insurance broker. The information on this website is general in nature and does not constitute financial advice or a recommendation to purchase any insurance product. The advisers we refer enquiries to are NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013 (FMCA). Before proceeding with any insurance product you will receive a disclosure statement from your adviser outlining their licensing, commissions, and any conflicts of interest.</p>
          </div>
        </div>
      </section>

      {/* WHY PREMIUMS VARY */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Premiums Vary So Much</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📍', title: 'Location', body: 'Auckland averages $676/yr, Wellington $995/yr, Christchurch $790/yr. Urban risk, disaster history, and local claims all affect pricing.' },
              { icon: '💰', title: 'Sum Insured', body: 'Insuring $50k of contents costs significantly more than $25k. Get this wrong and you could be underinsured — or overpaying.' },
              { icon: '📊', title: 'Excess Level', body: 'A $500 excess can save $50–$100/yr vs a $100 excess, but you absorb more of any claim. Match your excess to your cash reserves.' },
              { icon: '📋', title: 'Claims History', body: 'Recent claims increase your premium significantly. Most insurers reward claims-free periods with discounts.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'Does home contents insurance cover earthquake damage to my belongings?', a: `No — NHC (National Hazard Commission, formerly EQC) covers the building structure but NOT your contents. Private insurers can cover contents for earthquake, typically as an optional add-on. This is especially important in Wellington, Christchurch, and other seismic areas.` },
              { q: 'How much should I insure my contents for?', a: `Insure at full replacement value — what it would cost to buy everything new today, not the depreciated value. Walk room-by-room and total up furniture, electronics, clothing, and valuables. Most NZ households sit between $25k and $75k. Underinsuring is a common and costly mistake.` },
              { q: 'Should I use a comparison tool or a broker?', a: `Comparison tools work well for straightforward situations. But if you have high-value items, are a landlord, rent out via Airbnb, have a history of claims, or live in an earthquake-prone area, a licensed broker will identify policies and endorsements that a comparison tool may miss.` },
              { q: 'Can I get standalone contents insurance without a house (building) policy?', a: `Yes — all major NZ insurers offer standalone contents policies. Renters need contents-only cover. Homeowners typically have a separate building policy. You don't need to bundle with the same insurer, though some discounts apply if you do.` },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:text-brand-700 transition list-none">
                  <span>{faq.q}</span>
                  <span className="text-brand-700 ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Adviser Can Compare All of These — For Free</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            No spreadsheets needed. A NZ-licensed adviser will match you with the best insurer for your specific situation and present your options within one business day.
          </p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-brand-800 font-bold py-4 px-10 rounded-xl hover:bg-blue-50 transition shadow-lg text-lg">
            Get Your Free Quote →
          </Link>
        </div>
      </section>

      {/* Bar chart scroll animation */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function animateBars() {
                var bars = document.querySelectorAll('.premium-bar');
                bars.forEach(function(bar, i) {
                  setTimeout(function() {
                    bar.style.width = bar.getAttribute('data-width');
                    var label = bar.querySelector('.premium-bar-label');
                    if (label) label.style.opacity = '1';
                  }, i * 130);
                });
              }
              var triggered = false;
              var section = document.getElementById('premium-snapshot');
              if (!section) return;
              if ('IntersectionObserver' in window) {
                var observer = new IntersectionObserver(function(entries) {
                  if (entries[0].isIntersecting && !triggered) {
                    triggered = true;
                    animateBars();
                    observer.disconnect();
                  }
                }, { threshold: 0.25 });
                observer.observe(section);
              } else {
                animateBars();
              }
            })();
          `,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Does home contents insurance cover earthquake damage?', acceptedAnswer: { '@type': 'Answer', text: 'No — NHC covers the building structure but NOT your contents. Private insurers offer optional earthquake cover for contents.' } },
              { '@type': 'Question', name: 'How much should I insure my contents for?', acceptedAnswer: { '@type': 'Answer', text: 'Insure at full replacement value — the cost to buy everything new today. Walk room-by-room and total up furniture, electronics, clothing, and valuables. Most NZ households sit between $25k and $75k.' } },
              { '@type': 'Question', name: 'Should I use a comparison tool or a broker?', acceptedAnswer: { '@type': 'Answer', text: 'Comparison tools work well for straightforward situations. But if you have high-value items, are a landlord, or live in an earthquake-prone area, a licensed broker will identify better options.' } },
              { '@type': 'Question', name: 'Can I get standalone contents insurance without a building policy?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — all major NZ insurers offer standalone contents policies. Renters need contents-only cover and all major insurers support this.' } },
            ],
          }),
        }}
      />
    </div>
  );
}
