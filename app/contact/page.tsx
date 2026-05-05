import QuoteForm from '../../components/QuoteForm';
import { SITE } from '../../data/site';

export const metadata = {
  title: 'Get a Home Contents Insurance Quote | HomeContentsInsurance.co.nz',
  description: 'Request a free home contents insurance quote in New Zealand. NZ-licensed advisers respond within one business day.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-br from-brand-800 to-brand-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-blue-100">
            Complete the form below and a NZ-licensed home contents insurance adviser will be in touch within one business day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <QuoteForm variant="full" />
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="font-bold text-slate-900 text-lg mb-4">What Happens Next?</h2>
              <ol className="space-y-4">
                {[
                  { n: '1', title: 'We receive your enquiry', desc: 'Your details are securely forwarded to a NZ-licensed insurance adviser.' },
                  { n: '2', title: 'Adviser reviews your situation', desc: 'The adviser assesses your home contents and cover requirements.' },
                  { n: '3', title: 'You receive a call or email', desc: 'Within one business day, the adviser contacts you with options and a quote.' },
                  { n: '4', title: 'Choose your cover', desc: 'Compare options and proceed only if you\'re happy. No pressure, no obligation.' },
                ].map(step => (
                  <li key={step.n} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">{step.n}</span>
                    <div>
                      <div className="font-semibold text-slate-900">{step.title}</div>
                      <div className="text-slate-600 text-sm mt-0.5">{step.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-bold text-blue-900 mb-3">Contact Directly</h3>
              <p className="text-blue-800 text-sm mb-4">Prefer to speak with us directly?</p>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-semibold text-blue-900">Email:</span> <a href="mailto:hello@cover4you.co.nz" className="underline hover:no-underline">hello@cover4you.co.nz</a></p>
                <p className="text-sm"><span className="font-semibold text-blue-900">Phone:</span> <a href="tel:0800123456" className="underline hover:no-underline">0800 123 456</a></p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Trust Badges</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> NZ-Licensed Advisers</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> No Obligation Quotes</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 256-bit SSL Secure</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 1 Business Day Response</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">Financial Advice Disclosure</p>
              <p>HomeContentsInsurance.co.nz is a referral service. We connect you with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. The advisers we refer you to earn commission from insurers; there is no cost to you.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
