import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';

export const metadata: Metadata = {
  title: 'How Much Does Contents Insurance Cost in NZ? | HomeContentsInsurance.co.nz',
  description: 'Contents insurance costs in NZ: renters $280–$600/yr, homeowners $480–$1,100/yr, landlords $380–$850/yr. See what affects price and how to save.',
};

export default function ContentsInsuranceCostPage() {
  const pricingTable = [
    {
      type: 'Renters ($20k contents)',
      budget: '~$280/yr',
      midrange: '~$420/yr',
      comprehensive: '~$600/yr'
    },
    {
      type: 'Homeowners ($50k contents)',
      budget: '~$480/yr',
      midrange: '~$720/yr',
      comprehensive: '~$1,100/yr'
    },
    {
      type: 'Landlords (furnished)',
      budget: '~$380/yr',
      midrange: '~$580/yr',
      comprehensive: '~$850/yr'
    }
  ];

  const priceFactors = [
    {
      factor: 'Sum Insured',
      impact: 'Higher coverage = higher premium. $20k renters policy costs less than $50k homeowners.'
    },
    {
      factor: 'Location (City)',
      impact: 'Auckland & Wellington are 15–20% above national average. Rural areas are often cheaper.'
    },
    {
      factor: 'Excess Level',
      impact: '$250 excess is cheaper than $0. Choosing $500–$1,000 excess can save 20–30% on premium.'
    },
    {
      factor: 'Security Features',
      impact: 'Alarm system, deadbolts, and security cameras reduce risk. Can save 10–15%.'
    },
    {
      factor: 'Claims History',
      impact: 'Previous claims increase your premium. No claims = better rates.'
    },
    {
      factor: 'Occupancy Type',
      impact: 'Owner-occupied is cheaper than rental. Furnished properties cost more than unfurnished.'
    }
  ];

  const reduceCosts = [
    {
      tip: 'Increase Your Excess',
      savings: 'Save 20–30% by choosing $500–$1,000 excess instead of $0–$250.'
    },
    {
      tip: 'Install an Alarm System',
      savings: 'Many insurers offer 5–15% discount for alarm or security system.'
    },
    {
      tip: 'Bundle Policies',
      savings: 'Bundle home + contents + car insurance with one insurer for 10–20% discount.'
    },
    {
      tip: 'Pay Annually (Not Monthly)',
      savings: 'Annual payment is typically 5–10% cheaper than monthly instalments.'
    },
    {
      tip: 'Review Annually',
      savings: 'Get fresh quotes every year. New insurers often offer new-customer discounts.'
    },
    {
      tip: 'Reduce Sum Insured',
      savings: 'Only insure what you actually own. Avoid over-insuring (paying for empty space).'
    }
  ];

  const faqs = [
    {
      q: 'How much contents insurance should I get?',
      a: 'Add up everything you own: furniture, electronics, clothes, kitchen items, etc. Most NZ renters need $15k–$25k cover. Homeowners typically need $40k–$80k. Use an online calculator or get advice from an insurer.'
    },
    {
      q: 'Is contents insurance compulsory in NZ?',
      a: 'No, it&apos;s optional. But if you have a mortgage or rent, your lender/landlord may require it. Either way, it&apos;s smart protection—one theft or fire could cost $30k+.'
    },
    {
      q: 'What&apos;s the average contents insurance cost in NZ?',
      a: 'National average is around $804/year ($67/month) for standard cover. This varies widely based on location, sum insured, and excess. Renters average $420/yr; homeowners average $720/yr.'
    },
    {
      q: 'Does contents insurance cover accidental damage?',
      a: 'Not usually under standard cover. You must add accidental damage as an optional extra. This covers things like breaking a TV, spilling liquid on a laptop, or dropping a picture frame.'
    },
    {
      q: 'Do I need to add an EQC/NHC levy to my contents insurance?',
      a: 'Yes. NZ law applies a FENZ (Fire and Emergency New Zealand) levy to all contents insurance policies. This currently costs around $28–$35/year and is mandatory.'
    },
    {
      q: 'Does EQC/NHC cover contents after an earthquake?',
      a: 'No. EQC only covers buildings, not contents. For earthquake damage to your belongings, you need contents insurance. This is why having cover is critical in NZ.'
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
              How Much Does Contents Insurance Cost in NZ?
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              National average: $804/year ($67/month). See what factors affect price and how to save money on your premium.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#quote"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-brand-900 hover:bg-slate-100"
              >
                Get Your Quote
              </a>
              <a
                href="#pricing"
                className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white hover:bg-white/10"
              >
                See Pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16" id="pricing">
        <h2 className="text-3xl font-bold text-slate-900">Contents Insurance Costs by Category</h2>
        <p className="mt-4 text-lg text-slate-700">These are estimated annual premiums for standard cover in most NZ locations:</p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand-700">
                <th className="border border-brand-600 px-4 py-4 text-left font-semibold text-white">Cover Type</th>
                <th className="border border-brand-600 px-4 py-4 text-left font-semibold text-white">Budget</th>
                <th className="border border-brand-600 px-4 py-4 text-left font-semibold text-white">Mid-Range</th>
                <th className="border border-brand-600 px-4 py-4 text-left font-semibold text-white">Comprehensive</th>
              </tr>
            </thead>
            <tbody>
              {pricingTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="border border-slate-300 px-4 py-4 font-semibold text-slate-900">{row.type}</td>
                  <td className="border border-slate-300 px-4 py-4 text-slate-700">{row.budget}</td>
                  <td className="border border-slate-300 px-4 py-4 text-slate-700">{row.midrange}</td>
                  <td className="border border-slate-300 px-4 py-4 text-slate-700">{row.comprehensive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-slate-600">
          <strong>Note:</strong> Prices vary by insurer, location, excess, and cover options. Get instant quotes to compare.
        </p>
      </div>

      {/* Factors Affecting Price */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 bg-slate-100 rounded-lg">
        <h2 className="text-3xl font-bold text-slate-900">Factors That Affect Your Premium</h2>
        <div className="mt-10 space-y-4">
          {priceFactors.map((item, i) => (
            <div key={i} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-700">{item.factor}</h3>
              <p className="mt-2 text-slate-700">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Reduce Costs */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900">How to Reduce Your Premium</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reduceCosts.map((item, i) => (
            <div key={i} className="rounded-lg border-l-4 border-green-600 bg-green-50 p-6">
              <h3 className="font-semibold text-green-900">{item.tip}</h3>
              <p className="mt-2 text-green-800">{item.savings}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NZ-Specific Info */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 bg-blue-50 rounded-lg border-l-4 border-brand-700">
        <h2 className="text-3xl font-bold text-slate-900">NZ-Specific: EQC, NHC & FENZ Levy</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <p>
            <strong>EQC/NHC:</strong> Earthquake Commission only covers <em>building</em> damage, not contents. For earthquake damage to your belongings, you must have contents insurance.
          </p>
          <p>
            <strong>FENZ Levy:</strong> All contents insurance policies must include a Fire and Emergency New Zealand (FENZ) levy. This currently costs around $28–$35/year and is mandatory by law.
          </p>
          <p>
            <strong>Why it matters:</strong> Your $600/year quote might be broken down as: $560 for cover + $40 FENZ levy. Always ask if the quote includes the levy.
          </p>
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
          <h2 className="text-2xl font-bold text-slate-900">Get Your Instant Quote</h2>
          <p className="mt-2 text-slate-700">Compare quotes from multiple NZ insurers in minutes. See what you&apos;ll actually pay.</p>
          <div className="mt-8">
            <QuoteForm variant="full" />
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Get the Right Cover at the Right Price</h3>
          <p className="mt-4 text-slate-700">Compare quotes from NZ&apos;s top insurers. No obligation, no hidden fees.</p>
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
