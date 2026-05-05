import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'

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
    description:
      'Expert home contents insurance advice from NZ-licensed advisers. Renters, homeowners, landlords. Free quotes within one business day.',
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
    description:
      'Expert home contents insurance advice from NZ-licensed advisers. Get quotes within one business day.',
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
  alternates: {
    canonical: 'https://homecontentsinsurance.co.nz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NZ">
      <head>
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
              sameAs: [
                'https://www.icnz.org.nz',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NZ',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+64-XXX-XXX-XXXX',
                contactType: 'Customer Service',
              },
              areaServed: {
                '@type': 'Country',
                name: 'New Zealand',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://homecontentsinsurance.co.nz',
              name: 'HomeContentsInsurance.co.nz',
              description:
                'Compare home contents insurance and get expert advice from NZ-licensed advisers.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate:
                    'https://homecontentsinsurance.co.nz/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
