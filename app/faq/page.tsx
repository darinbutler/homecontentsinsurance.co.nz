import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Contents Insurance FAQs | Common Questions',
  description: 'Answers to common questions about home contents insurance in New Zealand.',
  openGraph: {
    title: 'Home Contents Insurance FAQs',
    description: 'Frequently asked questions about NZ home contents insurance',
    type: 'website',
  },
};

// Define FAQ data with categories
const faqs = [
  // Basics
  {
    category: 'Basics',
    question: 'What is home contents insurance?',
    answer:
      'Home contents insurance covers your personal belongings inside your home—furniture, electronics, clothing, jewellery, kitchenware, and more—against theft, damage, loss, or accidental damage. It is different from home insurance (building insurance), which covers the structure of your house.',
  },
  {
    category: 'Basics',
    question: 'Why do I need home contents insurance?',
    answer:
      'Your landlord or mortgagee will not replace your belongings if they are stolen or damaged. If your house is damaged, your home insurance covers the building structure—not your contents. Contents insurance protects your investment in your belongings. Without it, a major loss (fire, theft, flood) could cost you thousands of dollars.',
  },
  {
    category: 'Basics',
    question: 'How much does home contents insurance cost in New Zealand?',
    answer:
      'Average NZ contents insurance costs around $804 per year (Q1 2026), but this varies widely by location. Auckland averages $676/year, Wellington $995/year, and Christchurch $790/year. Your premium depends on your sum insured, excess, location, claims history, and the insurer you choose.',
  },
  {
    category: 'Basics',
    question: 'Can I get contents insurance without home insurance?',
    answer:
      'Yes. Most insurers offer standalone contents insurance that does not require you to have building insurance with them (or even the same insurer). This is ideal for renters or flat-dwellers. However, some insurers (like Initio) only offer contents as a bundle with home insurance.',
  },
  {
    category: 'Basics',
    question: 'What does "sum insured" mean?',
    answer:
      'The sum insured is the total amount your insurer will pay in a claim. You choose this amount based on the replacement value of all your belongings. If you insure $25k and your contents are worth $40k, you will only recover $25k in a claim. Most NZ homes range from $20k to $50k.',
  },
  {
    category: 'Basics',
    question: 'How do I calculate my sum insured?',
    answer:
      'Walk through each room and list your items: furniture, electronics, appliances, books, clothes, jewellery, sports equipment, tools, and decorations. Write down the replacement cost (new price, not what you paid) for each. Add them all up. A typical furniture suite might be $3–5k, kitchen appliances $2–3k, bedroom $2–4k, lounge electronics $1–2k, and personal items $3–5k. Online calculators can help.',
  },
  {
    category: 'Basics',
    question: 'Is the FENZ levy included in home contents insurance?',
    answer:
      'Yes. The Fire and Emergency NZ levy is automatically added to your contents insurance premium. As of Q1 2026, it is $23.90/year and is dropping to $21.48/year from July 2026. This levy funds emergency services and is required by law.',
  },

  // Renters
  {
    category: 'Renters',
    question: 'Should renters get home contents insurance?',
    answer:
      'Absolutely. Your landlord insurance does not cover your belongings—only the building. If your flat is burgled or damaged, you will lose your furniture, electronics, and personal items without contents insurance. It is affordable (often $400–800/year) and essential protection.',
  },
  {
    category: 'Renters',
    question: 'Can I insure contents in a flat or apartment?',
    answer:
      'Yes. Flat and apartment dwellers can get standalone contents insurance to cover their personal belongings. Some insurers also ask whether you are in a house or flat—flats may have different pricing or coverage terms. Check the policy terms for any flat-specific exclusions (e.g., limitations on stairwell cover).',
  },
  {
    category: 'Renters',
    question: 'What if I move house frequently?',
    answer:
      'Most insurers cover contents during moving house. Tower, AA Insurance, AMI, State, and AMP all include 14 days of cover while your belongings are in transit or temporarily stored. Tell your insurer when you are moving so your cover stays active during the transition.',
  },
  {
    category: 'Renters',
    question: 'Are my contents covered when I am away from home?',
    answer:
      'Yes, but with limits. Away-from-home cover typically includes accidental damage and theft to items you take with you (suitcases, phones, laptops) while you are on holiday or away for work. Coverage limits vary—Tower Premium covers full NZ, Tower Standard covers up to $5k away, and other insurers vary. Check your policy.',
  },
  {
    category: 'Renters',
    question: 'Does my contents insurance cover temporary accommodation if the rental is uninhabitable?',
    answer:
      'Many insurers include temporary accommodation cover if your flat becomes unliveable due to insured damage (fire, flood, etc.). AA Insurance, State, and AMP cover up to $20k. Tower Standard covers $15k, while Tower Plus and Premium cover it fully. This helps with hotel or alternative rental costs.',
  },

  // Cover & Limits
  {
    category: 'Cover & Limits',
    question: 'What is "new-for-old" or replacement value cover?',
    answer:
      'New-for-old cover means your insurer will replace your damaged items with brand new equivalents—not age-adjusted. If your 10-year-old sofa burns down, they replace it with a new sofa of similar quality. All major NZ insurers offer this as standard.',
  },
  {
    category: 'Cover & Limits',
    question: 'Does home contents insurance cover my jewellery and valuables?',
    answer:
      'Yes, jewellery is covered, but with limits. Tower Standard covers up to $1k per item and $5k total jewellery; Tower Plus covers $2.5k per item and $15k total; Tower Premium covers $10k per item and $30k total. Other insurers typically cover $1k–2k per item. High-value jewellery may need a separate scheduled item or policy.',
  },
  {
    category: 'Cover & Limits',
    question: 'Can I schedule specific high-value items?',
    answer:
      'Yes. If you own engagement rings, watches, art, antiques, or other valuable items, most insurers allow you to schedule them separately with their own agreed value and cover. This costs extra but ensures they are fully protected without relying on the general jewellery limit.',
  },
  {
    category: 'Cover & Limits',
    question: 'Do I have personal liability coverage with home contents insurance?',
    answer:
      'Most home contents policies include personal liability cover to protect you if you accidentally injure someone or damage their property. AA Insurance offers $2M (the highest), while Tower, AMI, State, AMP, and Trade Me typically offer $1M–$1M+. This is important protection.',
  },
  {
    category: 'Cover & Limits',
    question: 'What is accidental damage cover and do I need it?',
    answer:
      'Accidental damage cover protects you if you break or damage your own belongings—for example, spilling wine on the sofa or accidentally dropping your laptop. It is not included as standard with all insurers (Tower Plus/Premium include it, others offer it as optional). It typically costs $50–100/year extra.',
  },
  {
    category: 'Cover & Limits',
    question: 'Does home contents insurance cover my mobile phone and electronics?',
    answer:
      'Yes. Mobile phones, laptops, tablets, and other electronics are covered under contents insurance. Coverage limits vary: Tower Standard covers phones up to $500, Tower Plus up to $1k, Tower Premium up to $10k. Other insurers offer varying limits. Away-from-home cover may have separate limits for phones taken outside the house.',
  },
  {
    category: 'Cover & Limits',
    question: 'Does contents insurance cover bicycle and garden equipment?',
    answer:
      'Yes, bicycles and garden tools are covered. However, items left outside (garden furniture, sheds, trampolines) may have limited cover or may require an outdoor structures rider. Check your policy wording for outdoor item limits. High-value bikes might need to be scheduled separately.',
  },

  // Cost
  {
    category: 'Cost',
    question: 'Why do premiums vary so much between insurers?',
    answer:
      'Premiums vary because insurers price risk differently, use different pricing models, and have different claims histories. AMP is often 30%+ cheaper than Tower for identical cover. Location, sum insured, excess, and your personal claims history all affect the final premium. Always compare quotes.',
  },
  {
    category: 'Cost',
    question: 'What is an excess and how does it affect my premium?',
    answer:
      'An excess is the amount you pay toward a claim. Choosing a higher excess ($500 instead of $100) lowers your premium because you share the risk. If you can afford a higher excess and have good reserves, a $500 excess might save $50–100/year. But you must be able to pay it in a claim.',
  },
  {
    category: 'Cost',
    question: 'Do I get a discount for not claiming?',
    answer:
      'Yes. Most insurers offer no-claims discounts (typically 5–15% off your premium for each claims-free year). This rewards careful customers and incentivizes you not to claim for minor losses. The discount may reset if you make a claim.',
  },
  {
    category: 'Cost',
    question: 'Can I reduce my premium by increasing my sum insured?',
    answer:
      'No. Higher sum insured costs more because there is more to replace. However, underinsuring is a common mistake that costs money in a claim. The small premium saving from underinsuring is not worth the risk of uncompensated loss.',
  },
  {
    category: 'Cost',
    question: 'Do I get a discount for bundling contents with home insurance?',
    answer:
      'Yes, typically. Many insurers offer a 5–10% discount if you bundle contents and home insurance with them. This can save you $40–80/year. However, sometimes buying separately from different insurers is cheaper overall. Always compare the bundled and separate options.',
  },
  {
    category: 'Cost',
    question: 'Are there any ongoing fee or account-keeping fees?',
    answer:
      'Most home contents insurance has no ongoing fees. You pay an annual premium (or split into monthly payments, sometimes with a fee). Some insurers may charge for changes or add-ons, but standard policies have no hidden fees. Check the policy wording.',
  },

  // Landlords
  {
    category: 'Landlords',
    question: 'As a landlord, do I need to insure my rental property contents?',
    answer:
      'Typically, landlords provide a rental property with basic furniture and appliances. You can insure these as landlord contents—a specialized policy that covers your furnishings and liability as the property owner. Tenants get their own contents insurance for their personal belongings.',
  },
  {
    category: 'Landlords',
    question: 'What is the difference between landlord contents and tenant contents insurance?',
    answer:
      'Landlord contents insurance covers the furniture, appliances, and fixtures you (as the property owner) provide. Tenant contents insurance covers the tenants personal belongings (their furniture, electronics, clothes). Both are separate policies. Landlords also often get a separate landlord liability policy.',
  },
  {
    category: 'Landlords',
    question: 'Do landlords get higher discounts on contents insurance?',
    answer:
      'Some insurers offer landlord-specific policies with different pricing. Initio is known for strong landlord cover. Check whether bundling with a landlord home insurance policy gives you a better rate than tenant contents insurance.',
  },

  // Claims
  {
    category: 'Claims',
    question: 'How do I make a claim on my contents insurance?',
    answer:
      'Contact your insurer as soon as possible after loss or damage. For theft, file a police report and get a reference number. For other claims, photograph damage, gather receipts or proof of ownership, document the value, and submit your claim to your insurer. Most have online claim forms or phone lines.',
  },
  {
    category: 'Claims',
    question: 'How long does a contents claim take to settle?',
    answer:
      'Most insurers aim to settle straightforward claims within 15–30 days. Complex claims (where you need multiple quotes for replacement) may take longer. Your insurer must acknowledge your claim within 10 working days and keep you updated on progress. Check your policy terms for timeframes.',
  },
  {
    category: 'Claims',
    question: 'Do I need receipts to claim on contents insurance?',
    answer:
      'Receipts help, but are not always required. For older items, you may not have original receipts. Your insurer may ask for bank statements, credit card records, photos, or witness statements to prove ownership and value. Keep photos of major items and maintain an inventory.',
  },
  {
    category: 'Claims',
    question: 'Does making a claim increase my premium?',
    answer:
      'Usually yes. Most insurers increase your premium or remove your no-claims discount after a claim. Typical increases are 10–20%, depending on the claim type and your insurer. Some claims (theft, accidental damage) may increase premiums more than others (water damage). Check your policy terms.',
  },
];

// Group FAQs by category
const faqsByCategory = faqs.reduce(
  (acc, faq) => {
    const category = faq.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  },
  {} as Record<string, typeof faqs>
);

const categories = ['Basics', 'Renters', 'Cover & Limits', 'Cost', 'Landlords', 'Claims'];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Contents Insurance FAQs</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Find answers to common questions about home contents insurance in New Zealand.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FAQ Sections by Category */}
        {categories.map((category) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
            <div className="space-y-3">
              {faqsByCategory[category]?.map((faq, index) => (
                <details
                  key={index}
                  className="bg-gray-50 rounded-lg border border-gray-200 cursor-pointer group transition-all hover:border-brand-700"
                >
                  <summary className="font-semibold text-gray-900 p-6 flex items-center justify-between hover:text-brand-700 transition-colors">
                    <span>{faq.question}</span>
                    <span className="text-brand-700 group-open:rotate-180 transition-transform flex-shrink-0 ml-4">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mt-16 bg-brand-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Still Have Questions?</h2>
          <p className="text-lg mb-6">
            Contact our NZ-licensed advisers for personalized guidance on your home contents insurance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
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
            mainEntity: faqs.slice(0, 20).map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
