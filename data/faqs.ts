export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 'what-is-contents-insurance',
    question: 'What is home contents insurance?',
    answer: `Home contents insurance covers your personal belongings — everything inside your home that isn't physically part of the building itself. Think of it this way: if you turned your house upside down and shook it, everything that fell out would be your contents. This includes furniture, electronics, appliances, clothing, jewellery, sporting equipment, and personal possessions. Contents insurance protects these items against loss, theft, or damage from events like fire, flood, storm, and burglary.`,
    category: 'Basics',
  },
  {
    id: 'do-renters-need-contents-insurance',
    question: `I'm renting — do I really need contents insurance?`,
    answer: `Yes. Your landlord's house insurance covers the building — not your belongings. If there's a burglary, fire, or flood, your landlord's insurer will pay to fix the building, but you'll be left to replace your furniture, electronics, clothing, and everything else out of your own pocket. The average Kiwi renter owns more than $30,000 worth of contents. Contents insurance costs around $400–$800 per year and is one of the most cost-effective forms of insurance available.`,
    category: 'Renters',
  },
  {
    id: 'contents-vs-house-insurance',
    question: `What's the difference between house insurance and contents insurance?`,
    answer: `House (building) insurance covers the physical structure of your home — walls, roof, floors, fixed fittings, plumbing, and electrical wiring. Contents insurance covers everything inside that isn't fixed to the building. You need both if you own your home. If you rent, you only need contents insurance, as your landlord handles the building cover. Some insurers offer a combined house and contents package, which can be more convenient and sometimes cheaper.`,
    category: 'Basics',
  },
  {
    id: 'how-much-sum-insured',
    question: 'How much should I insure my contents for?',
    answer: `The sum insured should equal the full replacement cost of all your belongings — not what you paid for them, but what it would cost to replace everything new today. The average Kiwi household has $70,000 or more in contents. Go room by room: bedroom furniture and clothing, living room electronics and furniture, kitchen appliances and cookware, plus any high-value items like jewellery or cameras. Many people significantly underestimate this figure. When in doubt, err on the higher side — the premium difference is usually modest compared to the risk of underinsurance.`,
    category: 'Cover & Limits',
  },
  {
    id: 'how-much-does-contents-insurance-cost',
    question: 'How much does contents insurance cost in NZ?',
    answer: `Based on Q1 2026 market data, the average cost of contents insurance in New Zealand is around $804 per year ($67 per month). This varies significantly by region: Auckland averages $676/year, Christchurch $790/year, and Wellington $995/year — the highest in NZ due to earthquake and weather risk. Your actual premium depends on your sum insured, excess level, location, and insurer. Premiums for the same level of cover can vary by $400–$700 between insurers, so comparing is worthwhile.`,
    category: 'Cost',
  },
  {
    id: 'what-excess-should-i-choose',
    question: 'What excess should I choose for contents insurance?',
    answer: `The excess is the amount you pay towards a claim before your insurer covers the rest. Standard excesses across NZ policies range from $250 to $750. Increasing your excess is the fastest way to lower your premium — moving from $250 to $1,000 can reduce your premium by 30% or more. However, you need to be confident you can afford the excess at claim time. For most people, a $500–$750 excess strikes the right balance between affordable premiums and manageable out-of-pocket costs.`,
    category: 'Cost',
  },
  {
    id: 'replacement-vs-indemnity',
    question: `What's the difference between replacement value and indemnity value?`,
    answer: `Replacement value (new-for-old) cover pays the cost of replacing your item with a brand-new equivalent today — regardless of age. Indemnity value pays what the item was worth second-hand, accounting for age and wear. For example, a 3-year-old laptop stolen from your home might have an indemnity value of $300 but cost $1,800 to replace new. Replacement value is strongly recommended. Most comprehensive NZ contents policies now offer replacement value as standard — but always check the policy wording before buying.`,
    category: 'Cover & Limits',
  },
  {
    id: 'high-value-items-limits',
    question: 'Are my jewellery and high-value items fully covered?',
    answer: `Most standard contents policies have sub-limits on individual items — often $1,000 to $2,500 per item for jewellery, and similar limits for cameras, watches, and art. Tower's Plus tier limits jewellery to $2,500 per item; their Premium tier increases this to $10,000. If you own items worth more than these sub-limits, you need to specify them individually on your policy at agreed value. Without a specified item endorsement, you'll only receive the sub-limit amount at claim time — regardless of the item's true value.`,
    category: 'Cover & Limits',
  },
  {
    id: 'portable-valuables',
    question: 'Are my belongings covered outside the home?',
    answer: `It depends on your policy. Most comprehensive contents policies include some away-from-home cover for your laptop, phone, camera, or handbag if they're lost, stolen, or damaged outside the home within New Zealand. However, limits on away-from-home cover are often lower than at-home cover, and coverage may not extend overseas automatically. Tower's Premium policy covers accidental loss or damage anywhere in NZ up to the full sum insured. Portable valuables extensions provide full named-item cover anywhere in NZ and sometimes internationally for up to 90 days.`,
    category: 'Cover & Limits',
  },
  {
    id: 'does-contents-cover-my-flatmates',
    question: 'Does my contents policy cover my flatmates?',
    answer: `No. Contents insurance covers you and your immediate family members living at the same address. It does not cover flatmates, boarders, or guests. Every person in a flatting situation needs their own individual contents policy. This is one of the most common misunderstandings among younger renters — if you're flatting, each flatmate should take out their own policy to ensure their belongings are protected.`,
    category: 'Renters',
  },
  {
    id: 'earthquake-contents-cover',
    question: 'Are my contents covered for earthquake damage?',
    answer: `Yes — but not through NHC (formerly EQC). NHC cover only applies to residential buildings and land, not to contents. Your household contents are covered for earthquake damage through your private contents insurance policy. Most comprehensive policies include natural disaster damage as standard. However, the excess for natural hazard claims can be higher than your standard excess — always check the policy wording. In Wellington or Christchurch, make sure your sum insured reflects current replacement costs, as premiums are higher in these regions for good reason.`,
    category: 'Cover & Limits',
  },
  {
    id: 'landlord-contents-insurance',
    question: `I rent out a furnished property — is my contents covered?`,
    answer: `Standard landlord building insurance typically includes a small amount of landlord contents cover (usually $5,000–$20,000), but this may not be enough if you provide significant furniture and appliances. Initio's landlord policy includes $20,000 of landlord contents by default. For fully furnished rental properties, dedicated landlord contents insurance covers your furniture, whiteware, and fittings against tenant damage, accidental damage, and theft — and can include loss of rental income protection and liability cover. This is a specialist area where a NZ-licensed adviser adds real value.`,
    category: 'Landlords',
  },
  {
    id: 'accidental-damage',
    question: 'Does contents insurance cover accidental damage?',
    answer: `Basic contents policies typically only cover defined events — fire, theft, flood, storm. Accidental damage is an optional extension (or included in comprehensive policies) that protects against sudden, unintended damage — spilling wine on a laptop, dropping a TV, or a child breaking a mirror. Tower includes accidental damage in their Plus and Premium tiers. It typically adds 10–20% to your premium but provides significant peace of mind, especially for households with young children or pets.`,
    category: 'Cover & Limits',
  },
  {
    id: 'can-i-insure-contents-without-house-insurance',
    question: 'Can I get contents insurance without house insurance?',
    answer: `Yes — contents insurance is available as a standalone product from most major NZ insurers: AMI, State, AA Insurance, Tower, Trade Me Insurance, and AMP all offer standalone contents policies. One notable exception is Initio, which only offers contents insurance as an add-on to a house or landlord policy — making it unsuitable as a standalone option for renters. If you rent, you simply need a standalone contents policy, and you have plenty of options to choose from.`,
    category: 'Basics',
  },
  {
    id: 'best-insurer-for-contents',
    question: 'Which is the best home contents insurer in NZ?',
    answer: `There's no single best insurer — the right choice depends on your situation, location, and what you're insuring. In 2026, AMP is most often the cheapest in comparison tools (cheapest more than 30% of the time). Tower has been awarded Canstar's Insurer of the Year for Home and Contents two years running (2024–2025). AA Insurance has been voted NZ's Most Trusted General Insurer for 15 consecutive years. The best policy balances premium cost, cover features, sub-limits on valuables, and claims reputation. A licensed adviser can compare the full market for you.`,
    category: 'Basics',
  },
  {
    id: 'temporary-accommodation',
    question: 'What happens if my home is damaged and I have to move out?',
    answer: `Most comprehensive contents policies include temporary accommodation cover, which pays for alternative housing if your home becomes uninhabitable after an insured event — fire, flood, earthquake, or other covered damage. AMI offers up to $20,000 (or 12 months, whichever is less); AA Insurance and State also offer $20,000; Tower's Standard policy provides $15,000. Check the time cap on your policy as well as the dollar limit. This cover is particularly important for renters, who may have limited options for alternative accommodation.`,
    category: 'Cover & Limits',
  },
  {
    id: 'how-to-lower-premium',
    question: 'How can I reduce my contents insurance premium?',
    answer: `Several approaches can lower your premium: Increase your excess (moving from $250 to $1,000 can save 30%+). Pay annually rather than monthly to avoid instalment fees. Install a monitored burglar alarm — some insurers discount this. Review and adjust your sum insured if you've sold high-value items. Compare the market every 12 months — premiums change annually and the cheapest insurer last year may not be cheapest now. Never reduce your sum insured below genuine replacement cost, as underinsurance can cost you far more than the premium saving.`,
    category: 'Cost',
  },
  {
    id: 'moving-house-covered',
    question: 'Are my contents covered when I move house?',
    answer: `Many policies include a moving house benefit that covers contents during a move — typically for up to 14 days at both your old and new address. Tower's policies explicitly include this. However, not all policies cover contents during transit or moving, and some may have limitations on the period. Check your policy wording before you move. If your policy doesn't include transit cover, ask your adviser about temporary cover for the moving period.`,
    category: 'Cover & Limits',
  },
  {
    id: 'students-contents-insurance',
    question: 'Do students at university need their own contents insurance?',
    answer: `Usually yes. If you're a student in a hall of residence, hostel, or rental flat, your parents' contents policy typically does not cover your belongings — though Tower's policies offer up to $5,000–$10,000 for dependent children in university halls or boarding school, depending on the policy tier. In most cases, students need their own standalone policy. Student contents policies are available and generally affordable for modest sum insured levels.`,
    category: 'Renters',
  },
  {
    id: 'wellington-contents-insurance',
    question: 'Why is contents insurance more expensive in Wellington?',
    answer: `Wellington consistently has the highest contents premiums in NZ — averaging $995/year in Q1 2026 compared to $676/year in Auckland. The primary reason is Wellington's significantly higher earthquake exposure and severe weather risk. Insurers use risk-based pricing, and Wellington's location on major fault lines means higher potential claim costs. Your contents policy does cover earthquake damage (unlike NHC/EQC, which only covers buildings), so in Wellington it's particularly important to ensure your sum insured is adequate and your temporary accommodation limit is sufficient.`,
    category: 'Cost',
  },
  {
    id: 'nhc-eqc-contents',
    question: `Does EQC (NHC) cover my contents in an earthquake?`,
    answer: `No. The Natural Hazards Commission (NHC, formerly EQC) only provides cover for residential buildings and certain residential land — not for contents or personal belongings. Your household contents are not covered by NHC regardless of what caused the damage. Contents are only covered by your private home contents insurance policy. This is a common misconception, particularly in earthquake-prone areas. Make sure your private contents policy explicitly includes natural disaster cover.`,
    category: 'Cover & Limits',
  },
  {
    id: 'claims-process',
    question: 'How do I make a contents insurance claim?',
    answer: `Contact your insurer as soon as possible — most insurers have 24/7 claims lines or online portals. Document everything: take photos and videos of all damaged items. Make a list of affected belongings with estimated replacement values. For theft, file a police report — most insurers require this. Keep receipts for any emergency repairs or temporary purchases. Your insurer will assign a claims assessor to review the claim. If you can't reach agreement, disputes can be referred to the Insurance and Financial Services Ombudsman (IFSO), a free external resolution service.`,
    category: 'Claims',
  },
  {
    id: 'broker-vs-direct',
    question: 'Should I use a broker or buy contents insurance directly?',
    answer: `Both are valid, but a broker adds particular value when your situation is complex — if you own high-value items, run a home-based business, are a landlord, or have had previous claims. A NZ-licensed financial adviser is legally required (under the Financial Markets Conduct Act 2013) to act in your best interests and can compare across multiple insurers to find the right fit. They can also advocate for you at claim time. Buying direct is convenient for straightforward situations, but without professional advice you may miss important cover features or overpay.`,
    category: 'Basics',
  },
  {
    id: 'fire-emergency-levy',
    question: `What is the Fire and Emergency levy on my insurance bill?`,
    answer: `The Fire and Emergency NZ (FENZ) levy is added to all residential insurance premiums to fund the fire service. For contents policies, the maximum levy is currently $23.90 per year (dropping to $21.48 from July 2026). It appears as a separate line item on your invoice. This is a government levy — consistent across all insurers — and is not part of the insurer's premium calculation.`,
    category: 'Cost',
  },
  {
    id: 'what-is-gradual-damage',
    question: `What is a 'gradual damage' extension?`,
    answer: `Standard policies exclude gradual damage — deterioration that occurs slowly over time, like rot or mould from a hidden leaking pipe. A gradual damage extension covers the cost of fixing damage from a leak you couldn't reasonably have detected, typically up to $2,000–$3,000. This is more commonly a feature of house policies than contents policies, but it's worth asking your adviser whether the policy you're considering has any gradual damage protections.`,
    category: 'Cover & Limits',
  },
];
