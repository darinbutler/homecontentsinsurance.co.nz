import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Contents Insurance Comparison | NZ Insurers Side-by-Side',
  description: 'Compare home contents insurance from Tower, AA Insurance, AMI, State, AMP & Trade Me. See coverage limits, pricing, and features side-by-side.',
  openGraph: {
    title: 'Home Contents Insurance Comparison',
    description: 'Compare NZ home contents insurance insurers side-by-side',
    type: 'website',
  },
};

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(29, 78, 216, 0.85), rgba(30, 64, 175, 0.85)), url('/images/home_contents_insurance.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Home Contents Insurance — Compare Insurers
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Find the right coverage at the right price. Premiums vary by up to $400–$700 for identical cover.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Home contents insurance premiums vary significantly across New Zealand—and across insurers.
            Our research found that identical cover costs between <strong>$400–$700 more</strong> with one insurer
            than another, even for the same property and sum insured. Location, sum insured, excess, and your claims
            history all play a role. This comparison shows feature coverage across New Zealand's leading home contents
            insurers so you can compare apples to apples.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-12 overflow-x-auto">
          <div className="min-w-max">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-brand-700">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900 sticky left-0 bg-blue-50 z-10">
                    Feature
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    Tower Premium
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    Tower Plus
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    Tower Standard
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    AA Insurance
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    AMI
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    State
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    AMP
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    Trade Me
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Replacement value (new-for-old)
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Personal liability
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Included</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Included</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Included</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$2M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1M</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1M+</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1M</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Temp. accommodation
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Included</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Included</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$15k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$20k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$20k/12mo</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$20k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$20k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$20k</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Keys & locks
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$2k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$500</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$500</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Mobile phone cover
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$10k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$500</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Jewellery per item limit
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$10k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$2.5k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$1k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">See policy</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">See policy</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">See policy</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">See policy</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">See policy</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Away-from-home cover
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Full NZ</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Full NZ</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$5k</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Limited</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Accidental damage
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">Basic</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Moving house cover
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">14 days</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">14 days</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">14 days</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 sticky left-0 bg-white z-10">
                    Standalone contents
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold mb-2">Legend:</p>
            <ul className="space-y-1">
              <li>✓ = Included as standard</li>
              <li>~ = Available as optional add-on</li>
              <li>✗ = Not available</li>
              <li>See policy = Refer to policy wording for details</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer Box */}
        <section className="mb-12 bg-blue-50 border-l-4 border-brand-700 p-6 rounded">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong>Important:</strong> This comparison is general information only and is based on publicly available
            policy wordings and published insurer information as at May 2026. Actual coverage, limits, and pricing vary
            by policy tier, location, and individual circumstances. All policy details should be verified directly with
            the insurer. Premiums quoted are illustrative examples based on Q1 2026 market data—your actual premium depends
            on your sum insured, excess, location, and insurer. Tower pricing and features vary by policy tier
            (Standard, Plus, Premium). NZ-licensed advisers can compare the full market for your specific situation.
            HomeContentsInsurance.co.nz is a referral service regulated under the Financial Markets Conduct Act 2013 and
            does not underwrite or sell insurance directly.
          </p>
        </section>

        {/* Why Premiums Vary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Premiums Vary So Much</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Location</h3>
              <p className="text-gray-700">
                Auckland averages $676/year, Wellington $995/year, and Christchurch $790/year for comparable cover.
                Urban areas, natural disaster risk, and local claims history all affect pricing.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Sum Insured</h3>
              <p className="text-gray-700">
                The total value of your contents determines your premium. Insuring $25k costs significantly less than $50k,
                but under-insuring means you might not recover your losses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Excess</h3>
              <p className="text-gray-700">
                Higher excesses (the amount you pay toward a claim) reduce premiums. A $250 excess is typically cheaper
                than a $100 excess, but you need to cover that amount yourself in a claim.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Claims History</h3>
              <p className="text-gray-700">
                Recent claims increase your premium. Most insurers offer discounts for claims-free periods.
                Your insurance history significantly impacts your quote.
              </p>
            </div>
          </div>
        </section>

        {/* Indicative Premiums */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Indicative Premium Examples</h2>
          <p className="text-gray-700 mb-4">
            Scenario: 30-year-old, Auckland, $25k sum insured, $250 excess (Q1 2026 data)
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-blue-50 border-b-2 border-brand-700">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Insurer
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-900">
                    Approx. Annual Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">AMP</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~$507</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Trade Me</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~$643</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">AA Insurance</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~$664</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">MAS</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~$720</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Tower Standard</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">~$1,253</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Note: Tower pricing varies by tier (Standard, Plus, Premium). This example is for Tower Standard tier.
            Actual premiums depend on your specific situation and are subject to change.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-gray-900 flex items-center justify-between hover:text-brand-700">
                <span>What is home contents insurance and why do I need it?</span>
                <span className="text-brand-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Home contents insurance covers your personal belongings—furniture, electronics, clothing, jewellery, and
                more—against theft, damage, or loss. Your landlord or mortgagee will not replace your contents, so this
                insurance protects your investment in your belongings.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-gray-900 flex items-center justify-between hover:text-brand-700">
                <span>How much should I insure my contents for?</span>
                <span className="text-brand-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                You should insure your contents for their replacement value—the cost to replace them new, not their
                current age-adjusted value. Make a room-by-room inventory of furniture, electronics, and personal items.
                Most NZ homes range from $20k to $50k depending on contents quality and quantity. Underinsuring means you
                do not recover your full loss; overinsuring unnecessarily increases your premium.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-gray-900 flex items-center justify-between hover:text-brand-700">
                <span>Does home contents insurance cover earthquake damage?</span>
                <span className="text-brand-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                Home contents insurance does NOT cover earthquake damage to your contents. The NZ government scheme
                (formerly EQC, now NHC—National Hazard Commission) covers the building structure and land but does not
                cover contents. Private insurers offer optional earthquake cover for contents, typically at additional cost.
                If you live in a seismic area, ask your insurer about earthquake cover for your belongings.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 cursor-pointer group">
              <summary className="font-semibold text-gray-900 flex items-center justify-between hover:text-brand-700">
                <span>Should I choose a $250 or $500 excess?</span>
                <span className="text-brand-700 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-700">
                A higher excess lowers your premium, but you must be able to afford it in a claim. If you have an
                emergency fund, a $500 excess might save you $50–$100/year. If you cannot cover $500 quickly, a lower excess
                gives you peace of mind. Consider how often you might claim and your cash reserves.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Compare Quotes?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get personalized quotes from multiple insurers in minutes. No obligation, no cost to you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Quotes
          </a>
        </section>
      </div>

      {/* JSON-LD FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is home contents insurance and why do I need it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Home contents insurance covers your personal belongings—furniture, electronics, clothing, jewellery, and more—against theft, damage, or loss. Your landlord or mortgagee will not replace your contents, so this insurance protects your investment in your belongings.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much should I insure my contents for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You should insure your contents for their replacement value—the cost to replace them new, not their current age-adjusted value. Make a room-by-room inventory of furniture, electronics, and personal items. Most NZ homes range from $20k to $50k depending on contents quality and quantity.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does home contents insurance cover earthquake damage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Home contents insurance does NOT cover earthquake damage to your contents. The NZ government scheme (formerly EQC, now NHC) covers the building structure and land but does not cover contents. Private insurers offer optional earthquake cover for contents, typically at additional cost.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should I choose a $250 or $500 excess?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A higher excess lowers your premium, but you must be able to afford it in a claim. If you have an emergency fund, a $500 excess might save you $50–$100/year. If you cannot cover $500 quickly, a lower excess gives you peace of mind.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
