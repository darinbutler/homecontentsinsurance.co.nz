# Code Highlights: homecontentsinsurance.co.nz

## File 1: app/layout.tsx (121 lines)

### Metadata Export (SEO-Optimized)
```typescript
export const metadata: Metadata = {
  title: {
    default: 'Home Contents Insurance NZ | Compare & Get Covered',
    template: '%s | HomeContentsInsurance.co.nz',
  },
  description:
    'Compare home contents insurance in New Zealand. Expert advice for renters, homeowners and landlords from NZ-licensed advisers. Get quotes within one business day.',
  metadataBase: new URL('https://homecontentsinsurance.co.nz'),
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://homecontentsinsurance.co.nz',
    siteName: 'HomeContentsInsurance.co.nz',
    title: 'Home Contents Insurance NZ | Compare & Get Covered',
    description: 'Expert home contents insurance advice from NZ-licensed advisers...',
    images: [
      {
        url: '/images/home_contents_insurance.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Contents Insurance New Zealand',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Contents Insurance NZ | Compare & Get Covered',
    description: 'Expert home contents insurance advice from NZ-licensed advisers...',
    images: ['/images/home_contents_insurance.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Organization Schema
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'HomeContentsInsurance.co.nz',
      url: 'https://homecontentsinsurance.co.nz',
      description:
        'Home contents insurance broker referral service connecting NZ renters, homeowners, and landlords with expert FMCA-regulated advisers.',
      sameAs: ['https://www.icnz.org.nz'],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NZ',
      },
    }),
  }}
/>
```

---

## File 2: app/page.tsx (552 lines)

### Market Stats Data Integration
```typescript
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
```

### Hero Section Structure
```typescript
<section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-blue-900 to-slate-900 text-white pt-20 pb-28">
  {/* Background noise texture */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'url("data:image/svg+xml,...")',
  }}/>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 text-blue-100 text-sm font-semibold mb-6 border border-blue-400/30">
        <span>🏠</span> NZ Home Contents Insurance Specialists
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Home Contents Insurance
        <span className="text-blue-300"> — Expert Advice for Renters, Homeowners & Landlords</span>
      </h1>

      <p className="text-xl text-blue-100 mb-8 leading-relaxed">
        Compare quotes from NZ-licensed advisers. National average $804/year...
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link href="/contact/" className="...bg-brand-700 hover:bg-brand-600...">
          Get a Free Quote →
        </Link>
        <Link href="/compare/" className="...border-2 border-blue-300...">
          Compare Insurers
        </Link>
      </div>

      {/* Trust Stats */}
      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-300">NZ-Licensed</div>
          <div className="text-sm text-blue-100 mt-1">Regulated Advisers</div>
        </div>
        {/* ... more stats ... */}
      </div>
    </div>
  </div>
</section>
```

### Broker vs Comparison Tool Section
```typescript
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

{/* Rendered */}
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
```

### Insurer Comparison Table
```typescript
const insurerComparison = [
  {
    insurer: 'Tower',
    personalLiability: 'Up to $20M',
    tempAccommodation: '28 days',
    keysAndLocks: '$500',
    standaloneContents: 'Yes',
    replacementValue: 'Yes',
  },
  /* ... 4 more insurers ... */
]

{/* Rendered */}
<div className="overflow-x-auto mb-6">
  <table className="w-full text-sm">
    <thead className="bg-slate-900 text-white">
      <tr>
        <th className="text-left px-6 py-4 font-bold">Insurer</th>
        <th className="text-left px-6 py-4 font-bold">Personal Liability</th>
        {/* ... more columns ... */}
      </tr>
    </thead>
    <tbody className="divide-y divide-stone-200">
      {insurerComparison.map((row, idx) => (
        <tr key={idx} className="hover:bg-stone-50 transition">
          <td className="px-6 py-4 font-semibold text-slate-900">
            {row.insurer}
          </td>
          {/* ... more cells ... */}
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### FAQ Accordion (No useState)
```typescript
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
```

### Blog Preview Cards
```typescript
<div className="grid md:grid-cols-3 gap-8 mb-8">
  {blogPosts.slice(0, 3).map((post) => (
    <Link
      key={post.slug}
      href={`/blog/${post.slug}/`}
      className="group bg-white rounded-xl overflow-hidden border border-stone-200 hover:shadow-lg transition"
    >
      <div className="bg-slate-200 h-48 flex items-center justify-center">
        <span className="text-5xl">{post.icon || '📰'}</span>
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
```

### Schema at Bottom of Page
```typescript
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
```

---

## Key Classes & Patterns Used

### Colors
- **brand-700**: `#1d4ed8` (primary buttons)
- **brand-800**: `#1e40af` (hero, section backgrounds)
- **slate-900**: Headings and primary text
- **stone-50**: Alternating section backgrounds
- **blue-100/200/300**: Text on dark backgrounds

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px (grid columns)
- **lg**: 1024px (max-width containers)

### Common Classes
- `max-w-7xl`: Container width
- `mx-auto px-4 sm:px-6 lg:px-8`: Padding/centering
- `rounded-xl`: Button/card corners
- `hover:shadow-lg transition`: Interactive states
- `text-center mb-12`: Section headers
- `group-hover:text-brand-700 transition`: Hover effects

### Layout Patterns
- **Grid 2-column**: `grid md:grid-cols-2 gap-8`
- **Grid 3-column**: `grid md:grid-cols-3 gap-6`
- **Grid 4-column**: `grid md:grid-cols-4 gap-6`
- **Flex center**: `flex items-center justify-center`

---

## Imports Required

From `@/components`:
```typescript
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { QuoteForm } from '@/components/QuoteForm'
```

From `@/data`:
```typescript
import { coverageTypes } from '@/data/coverage-types'
import { blogPosts } from '@/data/blog-posts'
import { faqs } from '@/data/faqs'
```

From `next`:
```typescript
import type { Metadata } from 'next'
import Link from 'next/link'
```

---

## Expected Data Structure

### coverageTypes
```typescript
{
  slug: 'renters-contents',
  name: 'Renters Contents',
  icon: '🏘️',
  shortDesc: 'Protect your belongings...'
}
```

### blogPosts
```typescript
{
  slug: 'how-to-value-contents',
  title: 'How to Value Your Home Contents',
  excerpt: 'Step-by-step guide...',
  date: 'May 5, 2026',
  category: 'Guides',
  icon: '📝'
}
```

### faqs
```typescript
{
  question: 'What does home contents insurance cover?',
  answer: 'Home contents insurance covers...'
}
```

