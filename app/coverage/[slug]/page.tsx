import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '../../../data/coverage-types';
import { coverageContent } from '../../../data/coverage-content';
import QuoteForm from '../../../components/QuoteForm';
import { SITE } from '../../../data/site';

export function generateStaticParams() {
  return coverageTypes.map(ct => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) return {};
  return {
    title: `${ct.name} | HomeContentsInsurance.co.nz`,
    description: ct.shortDesc,
  };
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = coverageTypes.find(c => c.slug === slug);
  if (!ct) notFound();

  const cc = coverageContent[ct.slug];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/coverage/" className="text-brand-300 hover:text-white text-sm font-semibold mb-4 inline-block">
            ← Back to Coverage Types
          </Link>
          <div className="flex items-start gap-4">
            <span className="text-6xl">{ct.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{ct.name}</h1>
              <p className="text-lg text-brand-100 max-w-2xl">{ct.shortDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {cc?.fullDescription && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About {ct.name}</h2>
                <div className="text-slate-700 leading-relaxed space-y-4 prose prose-sm max-w-none">
                  {cc.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {!cc?.fullDescription && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About {ct.name}</h2>
                <p className="text-slate-700 leading-relaxed">{ct.description}</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Who Needs This Cover</h3>
                <ul className="space-y-3">
                  {ct.whoNeeds.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">What&apos;s Covered</h3>
                <ul className="space-y-3">
                  {ct.whatCovers.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-brand-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cc?.notCovered && cc.notCovered.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What&apos;s NOT Covered</h3>
                <ul className="space-y-3">
                  {cc.notCovered.map(item => (
                    <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="text-red-600 font-bold mt-0.5 flex-shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cc?.nzContext && (
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-4">New Zealand Context</h3>
                <div className="text-blue-900 leading-relaxed space-y-4 prose prose-sm max-w-none">
                  {cc.nzContext.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {cc?.faqs && cc.faqs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {cc.faqs.map((faq, i) => (
                    <details key={i} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 cursor-pointer">
                      <summary className="font-semibold text-slate-900 flex items-center justify-between">
                        <span>{faq.q}</span>
                        <span className="text-brand-600 text-lg flex-shrink-0">+</span>
                      </summary>
                      <div className="mt-4 text-slate-700 leading-relaxed pt-4 border-t border-slate-200">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {cc?.relatedSlugs && cc.relatedSlugs.length > 0 && (
              <div className="bg-white rounded-xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Related Coverage Types</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {cc.relatedSlugs.map(relatedSlug => {
                    const relatedCt = coverageTypes.find(c => c.slug === relatedSlug);
                    if (!relatedCt) return null;
                    return (
                      <Link
                        key={relatedSlug}
                        href={`/coverage/${relatedSlug}/`}
                        className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-brand-50 hover:border-brand-300 transition"
                      >
                        <span className="text-3xl">{relatedCt.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-900 text-sm">{relatedCt.name}</p>
                          <p className="text-xs text-slate-600">Learn more →</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <QuoteForm variant="compact" />
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${ct.name} — ${SITE.name}`,
        description: ct.description,
        provider: { '@type': 'InsuranceAgency', name: SITE.name, url: SITE.domain },
        areaServed: 'NZ',
      })}} />
    </div>
  );
}
