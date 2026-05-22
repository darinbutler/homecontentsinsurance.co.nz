import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Get a Quote | HomeContentsInsurance.co.nz',
  description: 'Request a home contents insurance quote in New Zealand. NZ-licensed advisers respond within one business day.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Full-width quote form section */}
      <QuoteForm variant="full" />

      {/* What Happens Next + disclosure */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">What Happens Next?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { n: '1', title: 'We receive your enquiry', desc: 'Your details are securely forwarded to a NZ-licensed insurance adviser.' },
            { n: '2', title: 'Adviser reviews your situation', desc: 'The adviser assesses your cover requirements — whether you rent, own, or are a landlord.' },
            { n: '3', title: 'You receive a call or email', desc: 'Within one business day, the adviser contacts you with options and a quote.' },
            { n: '4', title: 'Choose your cover', desc: `Compare options and proceed only if you're happy. No pressure, no obligation.` },
          ].map(step => (
            <div key={step.n} className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col items-start">
              <span className="w-9 h-9 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center mb-4 flex-shrink-0">{step.n}</span>
              <div className="font-semibold text-slate-900 mb-1">{step.title}</div>
              <div className="text-slate-600 text-sm leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-brand-50 rounded-xl border border-brand-200 p-6">
            <h3 className="font-bold text-brand-900 mb-3">Contact Directly</h3>
            <p className="text-brand-800 text-sm mb-2">Prefer to reach us directly?</p>
            <p className="font-semibold text-brand-900">Email: <a href={`mailto:${SITE.email}`} className="underline hover:no-underline">{SITE.email}</a></p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900 mb-2">Financial Advice Disclosure</p>
            <p>HomeContentsInsurance.co.nz is a referral service. We connect you with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. Advisers earn commission from insurers; there is no cost to you for the referral.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
