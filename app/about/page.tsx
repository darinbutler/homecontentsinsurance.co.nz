import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HomeContentsInsurance.co.nz — NZ Home Contents Insurance Advisers',
  description: 'HomeContentsInsurance.co.nz connects Kiwis with NZ-licensed insurance advisers to find affordable, comprehensive home contents cover.',
  openGraph: {
    title: 'About HomeContentsInsurance.co.nz',
    description: 'NZ home contents insurance comparison and broker referral service',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 text-white" style={{backgroundImage: `linear-gradient(to bottom right, rgba(15,30,80,0.82) 0%, rgba(29,78,216,0.65) 55%, rgba(10,20,60,0.88) 100%), url('https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=1600&auto=format&fit=crop&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center 40%'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About HomeContentsInsurance.co.nz</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Helping Kiwis find affordable, comprehensive home contents insurance.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Who We Are */}
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HomeContentsInsurance.co.nz is a home contents insurance broker referral service. We help New Zealanders
            compare home contents insurance and connect with licensed insurance advisers who can arrange affordable,
            comprehensive cover for your belongings.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We exist because shopping for home contents insurance can be confusing. There are multiple insurers, dozens
            of policy options, varying coverage limits, and significant premium differences for identical cover. We make
            it simpler by connecting you with advisers who understand the NZ market and can find the best deal for your
            situation.
          </p>
        </section>

        {/* How We Work */}
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-700 text-white rounded-full flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">You Submit Your Details</h3>
                <p className="text-gray-700">
                  Tell us about your home, contents, and insurance needs via our simple quote form. It takes just a few minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-700 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">We Connect You With Advisers</h3>
                <p className="text-gray-700">
                  Your enquiry goes to NZ-licensed financial advisers who specialise in home and contents insurance.
                  They are regulated under the Financial Markets Conduct Act 2013.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-brand-700 text-white rounded-full flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Advisers Find Your Best Options</h3>
                <p className="text-gray-700">
                  Our advisers are not tied to a single insurer. They access the broker market to source competitive
                  quotes from multiple underwriters. You get options, not hard sell.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-brand-700 text-2xl">✓</span>
                FMCA Regulated
              </h3>
              <p className="text-gray-700 text-sm">
                All advisers we refer are licensed financial advisers regulated under the Financial Markets Conduct Act 2013.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-brand-700 text-2xl">✓</span>
                No Cost to You
              </h3>
              <p className="text-gray-700 text-sm">
                Using this service is free. Advisers earn commission from insurers when a policy is placed. You pay no fee.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-brand-700 text-2xl">✓</span>
                No Obligation
              </h3>
              <p className="text-gray-700 text-sm">
                Getting quotes is not a commitment. You can decline any offer without penalty. The choice is yours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-brand-700 text-2xl">✓</span>
                Fast Response
              </h3>
              <p className="text-gray-700 text-sm">
                Advisers aim to contact you within one business day. Get quotes quickly and make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">NZ-Licensed Advisers</h3>
            <p className="text-xs text-gray-600">Regulated and professional</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">FMCA Regulated</h3>
            <p className="text-xs text-gray-600">Financial Markets Conduct Act</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">No Cost to You</h3>
            <p className="text-xs text-gray-600">Free comparison service</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-semibold text-gray-900 text-sm mb-1">1 Business Day</h3>
            <p className="text-xs text-gray-600">Fast response time</p>
          </div>
        </section>

        {/* Financial Services Disclosure */}
        <section className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Services Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            HomeContentsInsurance.co.nz is a lead generation and referral service. We are not a licensed financial adviser,
            insurer, or insurance broker. The information on this website is general in nature and does not constitute
            financial advice or a recommendation to purchase any product.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The advisers we refer enquiries to are NZ-licensed financial advisers regulated under the Financial Markets
            Conduct Act 2013. Before proceeding with any insurance product, you will receive a disclosure statement from
            your adviser outlining their licensing, commissions, and any conflicts of interest.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This website is provided for information purposes only. We do not underwrite, sell, or issue insurance policies.
            All insurance is arranged through the advisers we refer and the underwriting insurers.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-brand-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Compare?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get quotes from multiple home contents insurers in minutes. No obligation, no cost.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}
