export interface FAQ { q: string; a: string; }
export interface CoverageContent {
  fullDescription: string;
  notCovered: string[];
  nzContext: string;
  howToChoose: string;
  faqs: FAQ[];
  relatedSlugs: string[];
}

export const coverageContent: Record<string, CoverageContent> = {
  'renters-contents': {
    fullDescription: `Renters contents insurance, also known as tenants insurance, protects your personal belongings while you're renting a home in New Zealand. This coverage is essential because your landlord's building insurance only covers the structure of the property—it doesn't cover your furniture, electronics, clothing, or other possessions inside. As a tenant, you're responsible for protecting your own belongings against theft, accidental damage, and other insured events.

Unlike homeowners who can claim against their building insurance for damage to the structure caused by fire or storms, renters have no recourse if their possessions are damaged or destroyed. A single incident—whether it's a kitchen fire, a burst pipe, or theft—can result in significant financial loss without proper coverage. Contents insurance gives you peace of mind knowing that your essential items are protected.

New Zealand renters often underestimate the value of their possessions until they need to replace everything. The average one-bedroom flat can contain $15,000 to $30,000 worth of belongings, including appliances, bedding, kitchenware, and personal items. If you've furnished your flat yourself or have valuable electronics, the replacement cost could be even higher.

Most renters contents policies offer flexible coverage options. You can choose what level of cover suits your situation, from basic accidental damage protection to more comprehensive policies that include coverage for items away from home. Many insurers also offer discounts if you're part of a community watch scheme or have security features like deadbolts and window locks.

When selecting a renters contents policy, consider whether you need new-for-old replacement cover or indemnity cover (which factors in depreciation). New-for-old is more expensive but means you'll receive modern replacements rather than depreciated values. Many younger renters opt for indemnity cover to keep premiums affordable while still having basic protection.

Your contents insurance also typically includes personal liability coverage, which protects you if someone is injured in your rental property and you're found legally responsible. This is an important but often overlooked benefit that can protect your personal assets in a dispute.`,
    notCovered: [
      `Cash, cheques, traveller's cheques, cryptocurrency, or valuable documents`,
      'Motor vehicles, motorcycles, bicycles, or their accessories',
      'Business equipment or stock if you run a business from your home',
      'Items left in a locked vehicle unless specified in your policy',
      'Damage from wear and tear, gradual deterioration, or poor maintenance',
      `Items damaged while moving house unless you've purchased transit cover`,
      'Pets or animals (unless you have separate pet insurance)',
      'Illegal activities or items obtained unlawfully'
    ],
    nzContext: `As a tenant in New Zealand, you're not protected by the landlord's building insurance or the Earthquake Commission (EQC) scheme, which only covers buildings and land. Your personal belongings are your responsibility. The Residential Tenancies Act places certain obligations on landlords regarding the condition of the property, but this doesn't extend to protecting your contents.

If your rental property is damaged by an insured event, your landlord will claim on their building insurance for structural repairs, but your belongings remain your responsibility. This is particularly important in earthquake-prone areas of New Zealand, where EQC may cover building damage up to $15,000 per claim, but won't compensate you for damaged contents. Many renters in Wellington, Christchurch, and other seismic areas have learned this lesson the hard way.

New Zealand's increasingly stringent Healthy Homes standards mean rental properties must meet certain conditions, but this doesn't guarantee your contents are safe. Proper insurance is the only way to protect your belongings against the full range of risks in a rental property.`,
    howToChoose: `The first step is to conduct a thorough inventory of your belongings and estimate their replacement value. Walk through your flat room by room and list items with their approximate purchase price or replacement cost. Don't forget items in wardrobes, drawers, and storage areas—these add up quickly. Many insurers provide online calculators to help you estimate the total.

Consider your lifestyle and habits when choosing cover. If you frequently leave items outside (like a bike on the balcony) or entertain guests regularly, you might want additional coverage options. If you have high-value electronics or jewellery, check whether these have sub-limits under standard policies and consider whether you need specified item cover.

Look beyond just the premium. Compare what's included, what the excess is, whether you get new-for-old replacement or indemnity cover, and what additional covers are available. Some policies offer automatic inflation protection, which increases your cover amount annually to keep pace with inflation—a valuable feature when you're holding a policy long-term.`,
    faqs: [
      {
        q: `Do I need contents insurance if I'm renting?`,
        a: `While it's not legally required, contents insurance is strongly recommended. Your landlord's building insurance won't cover your personal belongings, and replacing everything out of pocket could be financially devastating. Insurance protects you against theft, accidental damage, and other insured events.`
      },
      {
        q: `What's the difference between new-for-old and indemnity cover?`,
        a: `New-for-old (agreed value) means you receive modern replacements if items are damaged or stolen, regardless of how old they were. Indemnity cover accounts for depreciation, so you'll receive less money for older items. New-for-old costs more but provides better protection.`
      },
      {
        q: `Can I claim for items I've left in a locked car?`,
        a: `This depends on your policy. Standard cover usually excludes items in vehicles. You'll need to check your policy wording or ask about transit cover if you regularly transport valuable items in your car.`
      },
      {
        q: `Does renters insurance cover my bike and sports equipment?`,
        a: `Most standard policies include items in your home, but bikes, surfboards, and sports equipment may have sub-limits or exclusions. Check your policy to see if these items are covered or if you need specified item cover for high-value equipment.`
      },
      {
        q: `What if my landlord is responsible for damage to my belongings?`,
        a: `If your landlord's negligence caused damage (like a faulty pipe they didn't repair), you may be able to claim from your insurance first, then pursue your landlord for the excess. Keep documentation of maintenance requests and photos of damage.`
      },
      {
        q: `Does my contents insurance include personal liability cover?`,
        a: `Most policies include basic personal liability protection, which covers you if someone is injured at your rental and you're found legally responsible. This is an important safeguard for your personal assets.`
      }
    ],
    relatedSlugs: ['homeowner-contents', 'accidental-damage', 'portable-valuables']
  },

  'homeowner-contents': {
    fullDescription: `Homeowner contents insurance protects your personal belongings inside your home in New Zealand. Unlike renters, homeowners typically have building insurance that covers the structure itself, but this doesn't extend to your furniture, appliances, clothing, electronics, and other possessions. Contents insurance is a separate policy designed specifically to protect these items against theft, accidental damage, fire, storms, and other insured events.

As a homeowner, you've likely invested tens of thousands of dollars in furnishing and equipping your home. A well-furnished three-bedroom home typically contains $40,000 to $80,000 worth of belongings, not including high-value items like jewellery or art. If you've spent time collecting quality furniture, appliances, and personal items, contents insurance is essential to protect this investment.

New Zealand homeowners face specific risks that make contents insurance particularly important. The country's variable weather patterns mean homes are vulnerable to storms, flooding, and other weather events. In earthquake-prone regions, even if the EQC covers some building damage, your contents are your responsibility. Many homeowners in Christchurch and other affected areas discovered this after the earthquakes when they realized their contents weren't adequately insured.

Most homeowner contents policies offer flexible coverage options that you can tailor to your situation. You can choose between comprehensive cover that includes accidental damage or more basic cover focused on specific perils like fire and theft. Many policies also allow you to specify particularly valuable items separately for full coverage.

A key advantage of homeowner contents insurance is that it often costs less per dollar of cover than renters insurance because homeowners typically invest in security measures like alarms, security doors, and good locks. Your insurer may offer discounts for these features, bringing your premiums down significantly.

It's important to review your contents insurance regularly, especially after major purchases or home renovations. If you've added a new kitchen, replaced furniture, or made other significant changes, your coverage needs may have changed. Many homeowners find their cover is inadequate because they haven't updated their sums insured to reflect their current possessions.`,
    notCovered: [
      `Cash, cheques, traveller's cheques, or cryptocurrency`,
      'Motor vehicles, motorcycles, or their accessories (including car stereos)',
      'Damage from wear and tear, poor maintenance, or lack of care',
      'Business equipment or stock used for business purposes',
      'Items in an uninhabited part of the property (like an abandoned shed)',
      'Gradual damage, mould, or fungus growth',
      'Unattended items left in gardens or unprotected outdoor areas',
      'Penalties or fines related to any illegal activity'
    ],
    nzContext: `In New Zealand, homeowners benefit from the Earthquake Commission (EQC) scheme, which covers insurable land and buildings (including fixtures and fittings that are part of the building) up to $15,000 per claim, plus loss of rent. However, EQC doesn't cover your contents at all. After significant earthquakes in Christchurch (2011) and other regions, many homeowners found this gap devastating—while EQC covered building repairs, they had to cover contents losses themselves.

The Financial Markets Authority regulates both building and contents insurance to ensure fair dealing and proper disclosure. Homeowners should be aware that standard building insurance doesn't cover your personal possessions, which is why separate contents coverage is essential. The regulatory framework requires insurers to be clear about what's covered and what's excluded.

New Zealand's climate and geography create specific risks that contents insurance addresses. Coastal properties face salt spray and flooding risk, Auckland and northland face cyclone risk, and most of the country faces earthquake risk. Your contents insurer should understand these regional risks and offer appropriate cover.`,
    howToChoose: `Start by creating a detailed inventory of everything in your home and its replacement value. This is the most important step in choosing appropriate cover. Go room by room, including wardrobes, storage spaces, and outbuildings. Be realistic about values—check current retail prices for similar items rather than guessing. Many homeowners significantly underestimate their total contents value.

Next, consider what level of cover is appropriate for your situation. If you have a high-value collection (art, wine, jewellery, or antiques), you'll need specified item cover in addition to basic contents cover. If you have young children or pets, accidental damage cover becomes more valuable. Consider your lifestyle—do you regularly have guests? Do you live alone? These factors affect your risk profile.

Compare policies not just on price but on what's included, what the excess is, and whether you get new-for-old cover or indemnity. Check for automatic inflation protection, which increases your cover annually. Look for policies that include accidental damage as standard or as a low-cost optional extra, since this dramatically increases your protection.`,
    faqs: [
      {
        q: `What's the difference between homeowner contents insurance and building insurance?`,
        a: `Building insurance covers the structure of your home and fixed items like built-in wardrobes and permanently installed fixtures. Contents insurance covers your personal belongings like furniture, appliances, clothing, and electronics. You typically need both policies.`
      },
      {
        q: `Does the EQC cover my contents in an earthquake?`,
        a: `No, the EQC only covers buildings, land, and some fixtures. Your contents are completely your responsibility. This is a critical gap that contents insurance fills, particularly important in earthquake-prone areas like Wellington and Canterbury.`
      },
      {
        q: `Should I choose new-for-old or indemnity cover for my home contents?`,
        a: `New-for-old is more expensive but gives you modern replacements regardless of how old the damaged items were. Indemnity accounts for depreciation, so older items are worth less when claimed. Homeowners often prefer new-for-old for better protection, but indemnity is more affordable.`
      },
      {
        q: `What happens if I don't declare high-value items to my insurer?`,
        a: `Undeclared high-value items may have limited cover or may not be covered at all under standard policies. If you have jewellery, art, or collectibles worth more than the sub-limit (often $1,000 to $2,500), you need to specify them separately for full protection.`
      },
      {
        q: `How often should I review my contents insurance?`,
        a: `Review your policy annually and whenever you make significant purchases or renovations. Many people don't update their sums insured for several years, leaving themselves underinsured. Keeping an inventory with photos helps ensure your cover stays adequate.`
      },
      {
        q: `Does contents insurance cover items I store in my garage or shed?`,
        a: `Items in a garage attached to your home or a locked shed are typically covered, but check your policy for any requirements about security or access. Items left in an unsecured or uninhabited outbuilding may have reduced cover or be excluded entirely.`
      }
    ],
    relatedSlugs: ['high-value-items', 'accidental-damage', 'temporary-accommodation']
  },

  'landlord-contents': {
    fullDescription: `Landlord contents insurance, also called landlord's fixtures and fittings insurance, is designed specifically for property owners who rent out homes in New Zealand. This insurance covers the items you provide for tenants—furniture, carpets, curtains, appliances, and other fixtures that are part of the rental agreement. It's separate from your building insurance and separate from the contents insurance your tenants should have for their own belongings.

As a landlord, you're required under the Residential Tenancies Act to keep the property in reasonable condition and to maintain all fixtures and fittings you've provided. However, wear and tear from normal use is often the landlord's responsibility, while damage caused by your tenants can be claimed against their bond. Landlord contents insurance protects your investment in the property's furnishings by covering damage and loss that exceeds normal wear and tear.

Most furnished and partially furnished rentals require landlord contents cover. If you've provided a bed, lounge, kitchen table, or any other major furniture items, you should have this insurance. The replacement cost of rental furniture can be substantial—a fully furnished flat might contain $15,000 to $35,000 worth of items you're responsible for maintaining.

Landlord contents insurance typically covers accidental damage, theft, malicious damage, and certain other perils. The policy usually includes protection for furnishings, floor coverings, light fittings, and other items that remain the landlord's property. Some policies also cover liability if someone is injured as a result of a defect in the fixtures or fittings you've provided.

One important consideration is the difference between what tenants are responsible for under the Residential Tenancies Act and what's covered by your insurance. Normal wear and tear is typically the landlord's responsibility and isn't covered by insurance. However, damage beyond normal use—like stains, burns, or broken furniture caused by tenant misuse—can be claimed from the tenant's bond and potentially from your insurance if the bond doesn't fully cover it.

Choosing the right level of cover is important. You need to accurately declare the value of all fixtures and fittings you've provided. Underinsuring means you won't receive full compensation for major items, while overinsuring wastes money on unnecessary premiums.`,
    notCovered: [
      'Damage from normal wear and tear or gradual deterioration',
      'Damage caused by your tenant that they should pay for through their bond',
      'Items the tenant has damaged intentionally or through reckless behaviour (if you pursue the tenant directly)',
      'Damage from lack of maintenance or repairs you should have performed',
      'Cash, cheques, or valuable documents left in the property',
      'Items not declared or not permanently fixed to the property',
      'Damage from pest infestations or rodents',
      'Decoration and redecoration costs (painting, wallpaper, etc.)'
    ],
    nzContext: `In New Zealand, the Residential Tenancies Act imposes specific obligations on landlords regarding the condition of rental properties. Since 2021, the Healthy Homes Standards have required rental properties to meet minimum standards for heating, ventilation, insulation, moisture, draught exclusion, and hot water. These standards affect what condition fixtures and fittings must be maintained in, which influences insurance claims.

Landlords can't simply charge tenants for all damage through bond deductions. The Residential Tenancies Dispute Resolution Services has clear guidance on what constitutes normal wear and tear (landlord's responsibility) versus damage caused by tenant misuse (potentially tenant responsibility). Insurance helps fill the gap where bond money doesn't cover damage costs.

The Financial Markets Authority provides guidance on landlord insurance obligations and fair dealing. Landlords should ensure they're properly insured and have clear documentation of the condition of furnishings and fittings at the start of each tenancy. Regular inspections and photographs help establish liability if damage occurs.`,
    howToChoose: `Start by creating a detailed inventory of everything you've provided in the rental property. Walk through each room and list every item with its replacement value. Include obvious items like beds and sofas, but also easy-to-forget items like curtains, light fittings, kitchen utensils, bedding, and towels. Be realistic about replacement costs—check current retail prices for similar items.

Decide what level of cover you need based on your rental strategy. If you rent to long-term tenants and provide basic furnishings, you might need less cover than someone who operates a holiday rental with high-value furniture and electronics. Consider the type of tenants you attract and the wear-and-tear patterns you've experienced with previous rentals.

Ensure your declaration is accurate and up-to-date. If you replace items or upgrade furnishings, update your insurer. Underinsuring because you haven't updated your inventory in years means you won't receive proper compensation if something is damaged or destroyed. Review your policy annually, especially after maintenance work or furniture replacements.`,
    faqs: [
      {
        q: `What's the difference between landlord contents insurance and my building insurance?`,
        a: `Building insurance covers the structure of the property and permanent fixtures. Landlord contents insurance covers moveable items you've provided like furniture, appliances, and fittings. Building insurance is usually required by your mortgage lender; contents insurance is optional but essential if you've furnished the property.`
      },
      {
        q: `Am I required to have landlord contents insurance?`,
        a: `It's not legally required, but it's strongly recommended if you've furnished your rental property. Without it, you'll be paying for damage repairs and replacements out of pocket. The Residential Tenancies Act doesn't guarantee you can recover these costs from tenants or their bonds.`
      },
      {
        q: `Can I claim on my landlord contents insurance if a tenant damages furniture?`,
        a: `Yes, but the process is usually: first attempt to recover from the tenant's bond, then if the bond doesn't fully cover it, you can claim on your insurance for the remainder. You can't claim from both sources for the same damage.`
      },
      {
        q: `Does landlord contents insurance cover normal wear and tear?`,
        a: `No, normal wear and tear is considered the landlord's responsibility and isn't covered by insurance. Insurance covers accidental damage, theft, and malicious damage, but not gradual deterioration from normal use.`
      },
      {
        q: `Do I need separate insurance if I use my property for holiday rentals?`,
        a: `Yes, standard landlord contents insurance typically doesn't cover holiday or short-term rental properties. You'll need specific holiday rental insurance, which usually costs more and may require different cover levels.`
      },
      {
        q: `How should I document the condition of my rental furniture?`,
        a: `Take detailed photographs of all furniture and furnishings when they're new or before a tenant moves in. Keep receipts for major items and maintain a spreadsheet with item descriptions and purchase dates. This documentation helps if you need to claim on your insurance.`
      }
    ],
    relatedSlugs: ['homeowner-contents', 'accidental-damage', 'high-value-items']
  },

  'high-value-items': {
    fullDescription: `High-value items insurance is a specialized form of cover that protects items of particular value—jewellery, art, antiques, collectibles, wine collections, and other treasured possessions. Standard contents insurance policies usually have sub-limits for valuable items, often capping cover at $1,000 to $2,500 for all jewellery, or $500 to $1,000 for individual items. If you own items worth more than these limits, you need specified item cover.

Jewellery is one of the most common items that requires separate cover. An engagement ring, wedding band, or vintage brooch inherited from a family member might be worth $5,000 or more, far exceeding standard policy limits. Without specified cover, you might find your claim is limited to the sub-limit, leaving you significantly out of pocket if the item is lost or stolen.

Art and collectibles present similar challenges. If you collect original paintings, sculptures, rare books, or vintage items, their individual values often exceed standard policy limits. Insurance companies struggle to assess the value of specialist items like these, which is why specified item cover asks you to provide valuation from a qualified expert.

New Zealand homeowners often underestimate the value of their collections. A watch collection, vintage camera collection, or vinyl record collection might seem like a hobby, but the items' combined value could easily exceed $10,000. Specified item cover is relatively affordable if you only need cover for a few high-value pieces rather than whole-policy cover increases.

The key advantage of specified item cover is that it typically excludes the sub-limits that apply to standard cover. Each specified item is covered for its full declared value, and the insurer won't reduce the claim based on depreciation if you have new-for-old cover. For valuable items that you'd struggle to replace, this is essential.

Getting the valuation right is crucial when you take out specified item cover. For jewellery, you'll need a jeweller's valuation. For art and antiques, you'll need a valuation from a qualified appraiser or auction house. These valuations don't need to be expensive formal assessments—many jewellers provide valuations as part of their service—but they should be credible and documented.`,
    notCovered: [
      `Specified items that haven't been formally valued or declared to your insurer`,
      `Items whose value has significantly increased beyond their last valuation (unless you've notified and paid for updated cover)`,
      'Damage from gradual deterioration, poor maintenance, or storage in unsuitable conditions',
      'Loss or theft of items left unattended in public places without supervision',
      'Damage from restoration attempts made without professional advice',
      `Items sent through the post unless you've purchased registered post or courier cover`,
      `Collectible items whose value depends on rarity or condition that you've damaged yourself`,
      'Items held in bank safe deposit boxes or vaults (usually not covered by home contents policies)'
    ],
    nzContext: `In New Zealand, high-value items deserve special attention under fair dealing requirements. Insurers must make it clear that standard policies have sub-limits for valuables, and they can't simply refuse claims after the fact. If you own valuable items, the onus is on you to declare them and obtain specified cover, but insurers must be transparent about why this is necessary.

New Zealand's art market has grown significantly, and local artists' works can be quite valuable. If you're collecting contemporary New Zealand art or have original works by established artists, specified item cover is essential. The NZ Art Foundation can provide guidance on valuation services for New Zealand artworks.

Many New Zealand families hold inherited jewellery or items of sentimental and financial value. Items like grandmother's pearls, vintage watches, or family heirlooms deserve protection. New Zealand has excellent jewellers and valuers who can assess these items professionally.`,
    howToChoose: `The first step is to identify what items in your home are worth more than your standard policy's sub-limit. Most policies limit jewellery cover to $1,000 to $2,500 total, and individual items might be limited to $500 to $1,000. If you have any item worth more than this, or if several items collectively exceed the limit, you need specified cover.

Obtain professional valuations for the items you want to specify. For jewellery, visit a reputable jeweller—many provide valuations at minimal cost as part of their service. For art, antiques, or collectibles, consult an appropriate expert. The valuation doesn't need to be an expensive formal appraisal, but it should be credible and documented.

Consider what value you want to insure. You don't need to insure items at their sentimental value—only their replacement value matters for insurance purposes. Be realistic about what it would cost to replace the item. For vintage or rare items, this might be less than you think if similar items aren't currently being sold.

Ensure you update your valuations periodically, especially for items whose values fluctuate (like fine art or precious metals). Some insurers allow you to review valuations annually as part of the policy. It's worth doing this, particularly for jewellery where gold and silver prices vary.`,
    faqs: [
      {
        q: `Do I need separate insurance for my engagement ring?`,
        a: `If your ring is worth more than your standard policy's jewellery sub-limit (usually $1,000 to $2,500), yes. Most engagement rings and wedding bands exceed these limits, so specified item cover is essential. It typically costs only a small amount extra.`
      },
      {
        q: `What counts as a valuable item that needs separate cover?`,
        a: `Any individual item or collection of similar items (like all your jewellery combined) that exceeds your standard policy's sub-limit needs specified cover. This typically means items worth over $1,000, but check your specific policy. Art, antiques, watches, cameras, and collectibles are common examples.`
      },
      {
        q: `How much will it cost to add specified item cover for my valuables?`,
        a: `The cost varies depending on the item, its value, and whether it's regularly worn or stored safely. Jewellery worn regularly costs more to insure than jewellery stored in a safe. You'll usually pay between 1% and 3% of the item's value annually, though this varies by insurer.`
      },
      {
        q: `Do I need a professional valuation for specified item cover?`,
        a: `Yes, insurers require credible valuations for specified items. For jewellery, this can be a simple valuation from a qualified jeweller. For art and antiques, you'll need a valuation from an appropriate expert. These don't need to be expensive formal appraisals.`
      },
      {
        q: `What if my item's value has increased since I insured it?`,
        a: `You should notify your insurer of significant value increases, especially for items like art or collectibles whose values fluctuate. Your current coverage might be inadequate if the item's value has risen substantially. Regular reviews ensure you remain properly insured.`
      },
      {
        q: `Are items in a bank safe deposit box covered by contents insurance?`,
        a: `Usually not—items in bank vaults are typically excluded from home contents policies. However, some policies may cover specific items stored off-premises under certain conditions. Check your policy wording and discuss alternatives with your insurer.`
      }
    ],
    relatedSlugs: ['homeowner-contents', 'portable-valuables', 'accidental-damage']
  },

  'portable-valuables': {
    fullDescription: `Portable valuables insurance, also called personal valuables or all-risks personal cover, extends protection for your valuable items beyond your home. Standard contents insurance only covers items while they're inside your home. If your watch, camera, laptop, jewellery, or other valuable items are stolen or damaged while you're out—at work, travelling, or anywhere else—standard cover won't help. Portable valuables insurance closes this gap.

This type of cover is particularly valuable for New Zealand professionals who regularly carry expensive items. If you use a laptop for work and it's stolen from your office or a café, portable valuables cover will protect it. If you're travelling overseas and your camera is damaged, this cover responds. For frequent travellers, this coverage is almost essential.

Many New Zealand travellers discover too late that their standard contents insurance only covers items at their home address. If you're hiking the Milford Track and your camera is lost, or you're at Piha Beach and your phone is stolen, your standard contents policy won't cover it. Portable valuables insurance means you have protection wherever you are.

The coverage typically includes items like cameras, watches, jewellery, phones, laptops, and other portable electronics. It's often offered as an all-risks policy, meaning it covers accidental damage, theft, and loss under a much broader range of circumstances than standard cover. You don't need to prove exactly what happened to the item—if it's lost or damaged and you've reported it appropriately, you'll be compensated.

One important consideration is that portable valuables cover typically has higher excesses and may have limits on individual items. The cost is also generally higher than building contents cover, sometimes 2-5% of the item's value annually, since the risk of loss is higher when items are carried around.

It's important to understand what's included and what's excluded. Some policies exclude items in unattended vehicles, items left unattended in public, or items damaged through negligence. Coverage limits might apply to individual items or to your total cover, so understanding these limits is crucial.`,
    notCovered: [
      'Items left unattended in public places for extended periods without supervision',
      'Items in a locked vehicle in high-risk situations or left overnight in a car parked in the street',
      'Damage from wear and tear or gradual deterioration',
      `Loss or theft if you didn't take reasonable care of the item`,
      'Items damaged through your own negligence or recklessness',
      'Items sent through the post unless using registered or insured courier services',
      'Theft from backpacks, bags, or luggage in hostels or shared accommodation unless items are locked away',
      `Items used for professional purposes if that use isn't covered under your policy`
    ],
    nzContext: `In New Zealand's outdoor-focused culture, portable valuables insurance is particularly valuable. Kiwis regularly take cameras, drones, and expensive outdoor gear to beaches, mountains, and national parks. A camera dropped on a tramp, a phone stolen at a beach café, or a laptop lost on a plane are all real risks for active New Zealanders. Portable valuables cover provides peace of mind for outdoor adventures.

Travel is also a key reason for this cover. New Zealand is geographically remote, and many Kiwis travel internationally regularly. Having comprehensive portable valuables cover means your items are protected while travelling overseas, whether you're in Australia, Asia, or further afield. This is often more affordable than buying travel insurance that covers valuables separately in each destination.

New Zealand's insurance market strongly encourages customers to declare their valuables and understand their coverage limits. The Financial Markets Authority advocates for transparent disclosure so customers aren't surprised when claiming.`,
    howToChoose: `Start by identifying which items you regularly carry or take outside your home. Do you take a laptop to work or cafés? Do you travel with an expensive camera or drone? Do you wear valuable watches or jewellery? These are the items most at risk of being lost, stolen, or accidentally damaged while outside your home.

Assess the replacement value of these items. A laptop might be worth $2,000, a good camera $3,000, a watch $5,000. These values quickly add up, making portable valuables cover worthwhile. Consider both the financial cost of replacement and the inconvenience—if your laptop is stolen while travelling, not only do you lose the device, you lose access to your work and data.

Evaluate your lifestyle and risk profile. If you're a homebody, you might not need this cover. But if you're always on the go, regularly travel, or spend time in outdoor settings, the risk is genuine. Active New Zealanders who hike, camp, and travel regularly face real risks to portable valuables.

Compare different policies based on their coverage limits, excesses, and what specific items are covered. Some policies have lower premiums but higher excesses. Some limit cover on individual items or have exclusions for certain activities. Understanding these details helps you choose the right balance of cost and protection for your situation.`,
    faqs: [
      {
        q: `Does my standard home contents insurance cover items I take outside the house?`,
        a: `No, standard contents insurance only covers items at your home address. Once you take something outside—to work, to a café, or while travelling—it's not covered unless you have portable valuables insurance or specific all-risks cover.`
      },
      {
        q: `What items are covered under portable valuables insurance?`,
        a: `Typically cameras, watches, jewellery, laptops, phones, tablets, and similar personal items are covered. The policy should specify exactly what's included. Some policies have limits on individual items (e.g., $2,000 maximum per item) or total cover limits.`
      },
      {
        q: `Is my laptop covered if I leave it in a locked car while at work?`,
        a: `This depends on your specific policy. Some policies exclude items in vehicles, especially if left overnight or in high-risk locations. Check your policy wording. If you regularly leave valuables in your car, this exclusion might mean the cover isn't right for you.`
      },
      {
        q: `If my camera is stolen in a crowded public place, will I be covered?`,
        a: `It depends on the circumstances and your policy terms. If you left it unattended, some policies might refuse the claim. If it was stolen from your possession despite reasonable care, you should be covered. Always report theft to the police and provide this evidence.`
      },
      {
        q: `Does portable valuables cover work if I'm travelling overseas?`,
        a: `Yes, this is one of the main advantages. Your cover typically extends worldwide, protecting items while you're travelling. This is often more cost-effective than buying separate travel insurance that covers valuables, and coverage is comprehensive.`
      },
      {
        q: `How much does portable valuables insurance cost?`,
        a: `Costs vary but are typically 2-5% of the total value of items covered annually. So a laptop worth $2,000 might cost $40-100 per year to cover. Some insurers charge a flat amount instead. Premiums depend on the type of items and your claims history.`
      }
    ],
    relatedSlugs: ['high-value-items', 'homeowner-contents', 'accidental-damage']
  },

  'accidental-damage': {
    fullDescription: `Accidental damage cover extends your contents insurance to protect against accidents that wouldn't normally be covered under a standard policy. While standard contents insurance covers specific perils like fire, theft, and storm damage, it typically excludes accidents caused by carelessness, mishandling, or simple human error. Accidental damage cover means that if you spill wine on your sofa, drop and break your television, or damage your laptop by knocking it off a table, you're still protected.

For families with young children or busy households, accidental damage cover is invaluable. Children naturally create accidents—a lamp knocked over during playtime, juice spilled on a bedroom chair, or a hole punched in the wall during roughhousing. Without accidental damage cover, these costs come out of your pocket. With cover, they're insurable claims.

Accidental damage doesn't cover carelessness in maintaining your home or contents. If you've neglected a leaking pipe and water damage has resulted, that's not accidental—it's negligence on your part. Similarly, if you've damaged something through deliberate action or normal wear and tear, it won't be covered. But genuine accidents—the kinds of things that happen in normal family life—are protected.

Many insurers now include accidental damage as part of their standard cover, while others offer it as an optional extra for an additional premium. The cost is usually quite reasonable—perhaps $5 to $15 per month—considering the broad protection it provides. This makes it excellent value for most households.

The scope of accidental damage cover varies between insurers, so it's important to understand exactly what's included. Most cover accidental damage to furniture, appliances, and electronics within your home. Some may have specific exclusions or limitations. For example, damage to glass items might be limited, or items in certain locations like garages might have reduced cover.

Understanding when accidental damage applies is important. If something is damaged during normal use—someone sits on a chair and it breaks—that's not accidental damage; it's product failure and might be covered under the manufacturer's warranty instead. But if someone falls over and damages the chair, that's accidental and would be covered.`,
    notCovered: [
      'Damage from normal wear and tear or gradual deterioration',
      'Intentional damage or deliberate vandalism you caused',
      'Damage from lack of maintenance or poor care (like rust from not protecting metal items)',
      `Damage to items being used in a manner they weren't designed for`,
      `Damage that occurs while you're attempting repairs or maintenance yourself`,
      'Damage from poor workmanship during installation or assembly by yourself or unqualified people',
      'Damage from structural defects in items (manufacturing faults—covered by warranty instead)',
      'Flea or insect infestations resulting from poor hygiene'
    ],
    nzContext: `New Zealand's damp climate and coastal properties make accidental damage cover particularly valuable. Moisture issues, salt damage, and weather-related accidents are common in many NZ homes. A pipe bursting due to frost (accidental), a window broken in a storm (normally covered, but accidental damage extends cover), or items damaged by damp conditions—these are real risks in New Zealand homes.

The Healthy Homes Act requires rental properties to meet strict insulation and ventilation standards, but these are only minimums. Many homes, especially older ones, still struggle with moisture and damp. While insurers don't cover damage from poor maintenance, accidental damage cover helps when accidents happen in these challenging environments.

The Financial Markets Authority encourages customers to understand the difference between accidental damage cover and other exclusions. Carelessness (not the same as accident) and negligence might still be excluded, but genuine accidents are covered. Clear communication from insurers about what constitutes an accident versus negligence is important.`,
    howToChoose: `Consider your household composition and lifestyle when deciding on accidental damage cover. Families with young children, teenagers, or pets face higher accident rates and benefit significantly from this cover. If you live alone or with adults only, accidental damage is less critical but still valuable.

Think about your furniture and appliances. Do you have expensive sofas, good quality electronics, or items of value that you'd struggle to replace if accidentally damaged? The cost of accidental damage cover is usually modest compared to the replacement cost of even one major item.

Assess your home type. If you live in a flat with tight corridors and stairways, you're more likely to bump into things and cause accidental damage. If you have a spacious home with room to move, accidents are less likely. Similarly, if you have a family home with lots of activity, accidents are more probable than if you have a quiet, orderly home.

Check exactly what's included in the accidental damage cover offered by different insurers. Some exclude certain items like electronics or have specific sub-limits. Others provide comprehensive cover for all contents. The specific exclusions matter, so ensure the cover matches your needs.`,
    faqs: [
      {
        q: `What's the difference between accidental damage and normal exclusions in my policy?`,
        a: `Standard contents policies exclude damage from carelessness or negligence. Accidental damage cover changes this so that genuine accidents—like knocking over a lamp or spilling liquid on furniture—are covered. You're still not covered for negligence or intentional damage.`
      },
      {
        q: `Will accidental damage cover protect me if I spill something on my sofa?`,
        a: `Yes, if the spill genuinely is accidental (you knocked over a drink), accidental damage cover should protect you. However, if the claim is that you were negligent or didn't take reasonable care, the insurer might refuse. The key is that the damage happened through accident, not carelessness.`
      },
      {
        q: `Is damage from pets covered under accidental damage?`,
        a: `Not usually, unless you can argue the damage was accidental rather than a result of normal pet ownership. A cat scratching furniture or a dog chewing a chair leg is excluded as normal pet damage. But if a pet causes accidental damage (like knocking over a lamp), it might be covered.`
      },
      {
        q: `Does accidental damage cover include water damage from pipes?`,
        a: `Accidental damage covers sudden, unexpected water damage (like a pipe bursting suddenly). It doesn't cover damage from leaks you could have prevented through maintenance. If a pipe has been slowly leaking because you didn't repair it, that's negligence, not an accident.`
      },
      {
        q: `Will my accidental damage claim increase my premiums?`,
        a: `This depends on your insurer's policy. Some don't increase premiums for accidental damage claims, while others might after multiple claims. It's worth checking with your insurer what their claims history policy is before taking out the cover.`
      },
      {
        q: `How much does accidental damage cover cost to add to my policy?`,
        a: `Accidental damage cover typically costs $5 to $20 per month, sometimes more for high-value contents. This is modest compared to the cost of replacing accidentally damaged items, making it good value for most households, especially those with children or active lifestyles.`
      }
    ],
    relatedSlugs: ['homeowner-contents', 'renters-contents', 'temporary-accommodation']
  },

  'temporary-accommodation': {
    fullDescription: `Temporary accommodation cover provides protection for your belongings while you're living away from home for a temporary period. This might include your contents while you're renting a holiday home, staying in a hotel or motel for extended periods, living in temporary accommodation after your home has been damaged, or staying with family or friends while between properties. Your standard contents insurance typically only covers items at your permanent address, leaving you unprotected while living elsewhere.

New Zealand homeowners and renters sometimes find themselves needing temporary accommodation for various reasons. After an earthquake, fire, or serious storm damage, you might need to stay elsewhere while repairs are made. If you're renovating your home, you might rent accommodation temporarily. If you've just bought a new home but your current home hasn't sold, you might be in temporary accommodation. Without temporary accommodation cover, your belongings in that alternative location are unprotected.

The type of temporary accommodation matters. Holiday rental properties, rental apartments, hotel rooms, and even private homes have different risk profiles. Holiday homes are particularly important—many New Zealanders own baches or rent holiday homes for extended stays, and these need adequate coverage for the contents you bring with you.

Most temporary accommodation cover extends your standard contents insurance to protect your belongings at alternative addresses. The coverage typically applies for a limited period—usually up to 12 months, though this varies. You need to declare the temporary address and the expected duration of your stay when arranging cover.

One important consideration is that temporary accommodation cover might have different terms or sub-limits than your home cover. For example, your standard excess might be higher at a temporary address, or coverage for certain items might be more limited. Understanding these differences is important when you arrange the cover.

Documentation is particularly important with temporary accommodation. Make a detailed list of what you've taken to the temporary location, including approximate values. Take photos of the condition of furnishings and contents when you arrive. This documentation helps if you need to claim—the insurer will want to be certain about what you brought with you and in what condition.`,
    notCovered: [
      'Items left at the temporary address after the accommodation period has ended',
      'Damage caused by the condition of the temporary accommodation (unless it was unexpected)',
      'Items not declared to your insurer before the temporary accommodation begins',
      'Coverage beyond the agreed temporary accommodation period',
      'Items left in a locked vehicle or unattended in public areas',
      'Damage from normal wear and tear or the temporary location being unsuitable',
      'High-value items not specifically declared and covered',
      'Items damaged by pests or poor maintenance of the temporary property'
    ],
    nzContext: `After significant earthquakes in Christchurch and other regions, New Zealand has seen many homeowners and renters needing temporary accommodation while repairs were made. The earthquake experience highlighted the importance of having comprehensive coverage for belongings in temporary locations. Many people discovered their contents insurance didn't extend to rental properties they stayed in while waiting for repairs.

The Residential Tenancies Act has specific requirements when renting temporary accommodation in New Zealand. As a tenant, you're responsible for protecting your belongings, and your landlord's insurance doesn't cover your contents. Having portable contents coverage or temporary accommodation cover is essential when renting anywhere in New Zealand, even for short periods.

The Financial Markets Authority encourages customers to notify insurers of temporary moves and changes to their circumstances. Insurers must be informed promptly to ensure coverage is maintained. Failing to declare a temporary address or change of circumstances might result in your coverage being invalid if you need to claim.`,
    howToChoose: `The first step is to determine if you'll have a temporary address and how long you'll be there. If the stay is expected to be short (a few weeks), you might rely on basic personal liability coverage. But for stays of one month or longer, you should arrange formal temporary accommodation cover to protect your contents.

When arranging temporary accommodation cover, provide your insurer with full details of where you'll be staying, what the property is like, and how long you'll be there. Be accurate—if you're extending your stay, notify your insurer. If you're moving to a different temporary address, let them know.

Take an inventory of what you're bringing to the temporary location and its approximate value. Do you need to bring furniture, electronics, bedding, and personal items? Or are these provided? The more you're bringing, the more important it is to have temporary accommodation cover.

When you arrive at the temporary address, inspect it carefully and document the condition with photographs. This protects you against being blamed for damage you didn't cause. Similarly, document the condition of the contents you brought with you.`,
    faqs: [
      {
        q: `Does my standard contents insurance cover my belongings while I'm in temporary accommodation?`,
        a: `No, standard contents insurance typically only covers items at your permanent address. You need to arrange temporary accommodation cover to protect your belongings while staying elsewhere. This is essential if you're in the temporary location for more than a few weeks.`
      },
      {
        q: `How long can I be in temporary accommodation and still be covered?`,
        a: `Most policies offer temporary accommodation cover for up to 12 months, though this varies by insurer. You need to declare the temporary address and expected duration when arranging cover. If you extend your stay beyond the agreed period, you need to notify your insurer.`
      },
      {
        q: `What should I do before moving into temporary accommodation?`,
        a: `Contact your insurer and declare the temporary address and your expected duration. Make an inventory of what you're bringing and its approximate value. When you arrive, inspect the property and the condition of any furnished contents, taking photos as evidence.`
      },
      {
        q: `Am I covered if something is damaged in the temporary property?`,
        a: `It depends on what caused the damage. Accidental damage to your own belongings is typically covered if you have accidental damage cover. Damage caused by the condition of the property or the landlord's negligence is different—you'd typically pursue the landlord for compensation.`
      },
      {
        q: `Do I need different coverage for a holiday rental than for an apartment I'm renting?`,
        a: `Both should be covered under temporary accommodation cover, but the terms might differ. Some insurers treat holiday homes differently from residential rentals. It's important to declare the property type and location to ensure your cover is appropriate.`
      },
      {
        q: `What happens to my coverage when the temporary accommodation period ends?`,
        a: `Once the declared period ends, your coverage for that temporary address ends automatically. Your standard home contents coverage remains in effect at your permanent address. If you extend your temporary stay, you must notify your insurer immediately.`
      }
    ],
    relatedSlugs: ['renters-contents', 'homeowner-contents', 'portable-valuables']
  }
};
