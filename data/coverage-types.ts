export interface CoverageType {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  whoNeeds: string[];
  whatCovers: string[];
  icon: string;
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'renters-contents',
    name: 'Renters & Tenants Contents Insurance',
    shortDesc: 'Covers your personal belongings when you rent — your landlord\'s policy only covers the building, not your stuff.',
    description: 'If you rent your home, your landlord\'s insurance policy covers the building — not your furniture, electronics, clothing, or personal possessions. Renters contents insurance is designed specifically for tenants in New Zealand, covering your belongings against fire, theft, accidental damage, flooding, and more. Whether you\'re renting a house, apartment, flat, or room in a shared house, a contents policy protects you from having to replace everything out of pocket after an unexpected event.',
    whoNeeds: ['Tenants renting a house or apartment', 'Flatmates in shared rental accommodation', 'Students renting during university', 'People in short-term rental or temporary accommodation', 'Anyone renting who doesn\'t own the building'],
    whatCovers: ['Furniture and household goods', 'Electronics and appliances', 'Clothing and personal effects', 'Jewellery and accessories', 'Bicycles and sports equipment', 'Loss or theft outside the home', 'Fire and smoke damage', 'Storm, flood, and water damage'],
    icon: '🏠',
  },
  {
    slug: 'homeowner-contents',
    name: 'Homeowner Contents Insurance',
    shortDesc: 'Protects everything inside your home — separate from your house (building) insurance policy.',
    description: 'Your house insurance (building policy) covers the structure of your home — the walls, roof, floors, and fixed fittings. But everything inside — your furniture, appliances, wardrobe, valuables, and personal possessions — requires a separate contents policy. Home contents insurance for owner-occupiers ensures that if a fire, burglary, flood, or disaster strikes, you can replace your belongings without financial hardship. Getting the sum insured right is critical; many New Zealanders are significantly underinsured on their contents.',
    whoNeeds: ['Owner-occupiers with a separate house policy', 'Homeowners who haven\'t reviewed their contents cover recently', 'People who have accumulated significant possessions', 'Homeowners with high-value items like jewellery or art', 'Anyone whose contents sum insured hasn\'t kept up with inflation'],
    whatCovers: ['All furniture and household goods', 'Whiteware and kitchen appliances', 'Consumer electronics and computers', 'Clothing, footwear, and accessories', 'Tools and garden equipment', 'Sporting equipment and hobbies', 'Art, antiques, and collectibles', 'Named high-value items by endorsement'],
    icon: '🛋️',
  },
  {
    slug: 'landlord-contents',
    name: 'Landlord Contents Insurance',
    shortDesc: 'Protects the contents you provide in your rental property — furniture, whiteware, and furnishings from tenant damage.',
    description: 'Landlords who provide furnished or partially furnished rental properties face a unique risk: tenant damage, accidental destruction, or theft of the items they\'ve invested in. Standard contents insurance doesn\'t cover landlord-supplied contents in a rental setting. Landlord contents insurance is specifically designed to cover furniture, appliances, whiteware, window treatments, and other items you provide for your tenants — and can include cover for loss of rental income and liability for tenant injury.',
    whoNeeds: ['Landlords with furnished rental properties', 'Landlords providing whiteware or appliances', 'Property investors with multiple furnished rentals', 'Airbnb hosts and short-stay accommodation providers', 'Landlords renting rooms in their own home'],
    whatCovers: ['Furniture and furnishings provided by landlord', 'Whiteware and kitchen appliances', 'Window treatments (curtains, blinds)', 'Accidental tenant damage to your contents', 'Malicious tenant damage', 'Theft by tenants', 'Loss of rental income (by endorsement)', 'Public liability for tenant injury'],
    icon: '🔑',
  },
  {
    slug: 'high-value-items',
    name: 'High-Value Items & Specified Cover',
    shortDesc: 'Named item cover for jewellery, art, watches, collections, and other valuables that exceed standard policy limits.',
    description: 'Most standard home contents policies cap individual item payouts at $1,000–$2,500 and have blanket limits on jewellery, art, and electronics. If you own items worth more than these limits — engagement rings, watches, fine art, antiques, camera equipment, musical instruments, or wine collections — you need to specify them individually on your policy to ensure full replacement value. High-value item endorsements give each item its own agreed value, so you know exactly what you\'ll receive if the item is lost, stolen, or damaged.',
    whoNeeds: ['Jewellery and watch owners', 'Art, antique, and collectible owners', 'Camera and photographic equipment owners', 'Musical instrument owners', 'Wine, whisky, and collection holders', 'Anyone with items worth more than $2,000 each'],
    whatCovers: ['Engagement rings and jewellery', 'Watches and luxury accessories', 'Fine art and original artworks', 'Antiques and collectibles', 'Camera and photography equipment', 'Musical instruments', 'Wine, spirits, and valuable collections', 'Agreed value — no depreciation on payout'],
    icon: '💎',
  },
  {
    slug: 'portable-valuables',
    name: 'Portable Valuables & Away-From-Home Cover',
    shortDesc: 'Extends your contents cover to protect belongings you take outside the home — laptops, phones, bikes, and more.',
    description: 'Standard contents insurance covers your belongings inside your home. But what about your laptop you take to work, your phone that goes everywhere with you, your bicycle, or your camera at a weekend event? Portable valuables cover (sometimes called away-from-home or all-risks cover) extends your protection so your belongings are insured wherever you take them — in New Zealand and often overseas. It\'s particularly valuable in a world where high-cost electronics go everywhere with us.',
    whoNeeds: ['Laptop and tablet users who work remotely or travel', 'Smartphone users who rely on expensive devices', 'Cyclists with high-value bikes', 'Photography and video equipment owners', 'Students carrying expensive equipment to class', 'Travellers who take valuables overseas'],
    whatCovers: ['Laptops, tablets, and computers', 'Smartphones and wearables', 'Cameras and optical equipment', 'Bicycles (including e-bikes)', 'Handbags and wallets', 'Sporting equipment away from home', 'Musical instruments at performances', 'International cover (up to 90 days)'],
    icon: '🎒',
  },
  {
    slug: 'accidental-damage',
    name: 'Accidental Damage Cover',
    shortDesc: 'Extends your contents policy to cover sudden, unintended damage — spilling wine on a sofa, dropping a TV, or breaking a mirror.',
    description: 'Standard contents policies cover defined events — fire, theft, flood — but not everyday accidents. Accidental damage cover is an extension that protects you when you or a family member unintentionally damage your own belongings: knocking a flat-screen TV off the wall, spilling coffee on a laptop, a child breaking a mirror, or sitting down too hard and snapping a chair. It fills the gap between what your standard policy covers and the reality of everyday household accidents.',
    whoNeeds: ['Families with young children at home', 'Pet owners (accidental damage by pets)', 'Anyone with expensive electronics or furniture', 'People who want comprehensive, worry-free cover', 'Renters who want cover for accidental damage to landlord\'s contents'],
    whatCovers: ['Dropping or knocking over electronics', 'Liquid spills on furniture or appliances', 'Accidental breakage of glass, mirrors, ceramics', 'Child-caused accidental damage', 'Pet-caused accidental damage (policy-dependent)', 'Furniture accidentally broken during normal use', 'Accidental damage to fixed glass (if contents-only policy)'],
    icon: '⚡',
  },
  {
    slug: 'temporary-accommodation',
    name: 'Temporary Accommodation Cover',
    shortDesc: 'Pays for alternative accommodation if your home is uninhabitable after an insured event — so you\'re never left without a roof.',
    description: 'If your home is damaged by fire, flood, earthquake, or another covered event and becomes uninhabitable during repairs, where do you go? Temporary accommodation cover (also called loss of use cover) pays for the cost of alternative housing — whether that\'s a rental, hotel, or serviced apartment — while your home is being repaired or rebuilt. This is particularly important in New Zealand where earthquake, flooding, and weather events can render homes uninhabitable for weeks or months at a time.',
    whoNeeds: ['All homeowners — especially in earthquake or flood-prone areas', 'Renters who would struggle to find alternative accommodation quickly', 'Families with children who need stable housing during repairs', 'People without a support network who could otherwise stay with family', 'Anyone in a high-weather-risk area (coastal, flood plain, etc.)'],
    whatCovers: ['Hotel or motel accommodation costs', 'Short-term rental costs during repair period', 'Additional living expenses above your normal costs', 'Pet boarding costs if accommodation doesn\'t allow pets', 'Storage costs for undamaged contents', 'Moving costs to and from temporary accommodation'],
    icon: '🏨',
  },
];
