'use client';
import { useRef, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '../data/site';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

interface QuoteFormProps {
  workerUrl?: string;
  thankYouUrl?: string;
  formSubject?: string;
  variant?: 'compact' | 'full';
}

export default function QuoteForm({ workerUrl, thankYouUrl, formSubject, variant = 'compact' }: QuoteFormProps) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  void workerUrl;
  const redirectUrl = thankYouUrl ?? SITE.thankYouUrl;
  const subject = formSubject ?? SITE.formSubject;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });
    setSubmitting(true);
    try {
      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setSubmitting(false);
        setError('Security check could not complete. Please try again.');
        return;
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, cfTurnstileToken: cfToken }),
      });
      if (!res.ok) throw new Error('Submission failed');
      const target = redirectUrl?.startsWith('http') ? new URL(redirectUrl).pathname : (redirectUrl ?? '/thank-you/');
      router.push(target);
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  const whoFor = [
    ['renter', 'Renter / Tenant'],
    ['homeowner', 'Homeowner (I own my home)'],
    ['landlord', 'Landlord (I rent it out)'],
    ['not-sure', 'Not sure — need advice'],
  ];

  const coverTypes = [
    ['contents-only', 'Contents Insurance Only'],
    ['high-value', 'High-Value / Specified Items'],
    ['portable', 'Portable Valuables Cover'],
    ['landlord-contents', 'Landlord Contents Cover'],
    ['full-review', 'Full Review — Not Sure'],
  ];

  const hiddenFields = (
    <>
      <input type="hidden" name="_next" value={redirectUrl} />
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" style={{ display: 'none' }} />
    </>
  );

  if (variant === 'full') {
    return (
      <section
        className="py-16 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(15,30,80,0.92) 0%, rgba(29,78,216,0.85) 60%, rgba(10,20,60,0.95) 100%), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: trust & benefits */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-blue-200 text-sm font-semibold mb-6 border border-white/20">
                🛡️ FMCA-Regulated Advisers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Ready to Protect Your Contents?
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                A licensed adviser will compare options across the market and be in touch within one business day — at no cost to you.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: '✓', text: 'We compare up to 6 leading insurers for you' },
                  { icon: '✓', text: 'Expert advice for renters, owners & landlords' },
                  { icon: '✓', text: 'High-value & specified item specialists' },
                  { icon: '✓', text: 'Average saving of $275/year when switching' },
                  { icon: '✓', text: 'No obligation — choose only if it works for you' },
                ].map(f => (
                  <li key={f.text} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-green-500/30 border border-green-400/50 flex items-center justify-center text-green-300 text-xs font-bold flex-shrink-0 mt-0.5">{f.icon}</span>
                    <span className="text-blue-100">{f.text}</span>
                  </li>
                ))}
              </ul>
              {/* Trust pills */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🛡️', label: 'FMCA Licensed', sub: 'Regulated advisers' },
                  { icon: '💰', label: 'Save $275/yr', sub: 'Average saving' },
                  { icon: '🔍', label: '6 Providers', sub: 'We compare for you' },
                  { icon: '⚡', label: '1 Business Day', sub: 'Fast response' },
                ].map(p => (
                  <div key={p.label} className="bg-white/10 border border-white/20 rounded-xl p-3 backdrop-blur-sm">
                    <div className="text-xl mb-1">{p.icon}</div>
                    <div className="text-white font-bold text-sm">{p.label}</div>
                    <div className="text-blue-200 text-xs">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <form onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-brand-200">
                {hiddenFields}
                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">Get Your Personalised Quote Now</h3>
                  <p className="text-sm text-slate-500">Fill in your details and a licensed adviser will be in touch within one business day.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                    <input type="text" name="name" required placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                    <input type="email" name="email" required placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Phone</label>
                    <input type="tel" name="phone" required placeholder="09 XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">I am a...</label>
                    <select name="who_for" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                      <option value="">Select your situation...</option>
                      {whoFor.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-1">Cover Required</label>
                    <select name="cover_type" required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                      <option value="">Select cover type...</option>
                      {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                  <TurnstileWidget ref={turnstileRef} />
                  {error && <p className="text-sm bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
                  <button type="submit" disabled={submitting}
                    className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-500 text-white font-bold py-4 rounded-lg transition-colors text-base shadow-md">
                    {submitting ? 'Submitting…' : 'Get My Quote — It\'s Free →'}
                  </button>
                  {/* Trust badges under button */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { icon: '🔒', label: '256-bit SSL', sub: 'Secure' },
                        { icon: '🚫', label: 'No Spam', sub: 'Ever' },
                        { icon: '🆓', label: 'No Cost', sub: 'Free to use' },
                      ].map(b => (
                        <div key={b.label} className="text-center bg-slate-50 rounded-lg p-2">
                          <div className="text-lg">{b.icon}</div>
                          <div className="text-xs font-bold text-slate-700">{b.label}</div>
                          <div className="text-xs text-slate-500">{b.sub}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-center text-xs text-slate-400 mt-3">
                      By submitting you agree to our <a href="/privacy/" className="underline hover:text-slate-600">Privacy Policy</a>. Advisers are licensed under the FMCA 2013.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-1">Get Your Contents Quote</h3>
      <p className="text-slate-400 text-sm mb-5">Licensed advisers respond within 1 business day</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        {hiddenFields}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Email</label>
          <input type="email" name="email" required placeholder="your@email.com"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Phone</label>
          <input type="tel" name="phone" required placeholder="09 XXX XXXX"
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm placeholder-slate-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">I am a...</label>
          <select name="who_for" required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <option value="">Select situation...</option>
            {whoFor.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Cover Required</label>
          <select name="cover_type" required
            className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <option value="">Select cover...</option>
            {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <TurnstileWidget ref={turnstileRef} />
        {error && <p className="text-xs bg-red-50 text-red-700 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
        <button type="submit" disabled={submitting}
          className="w-full bg-brand-700 hover:bg-brand-600 disabled:bg-brand-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
          {submitting ? 'Submitting…' : 'Get My Quote →'}
        </button>
        <div className="border-t border-slate-700 pt-3 grid grid-cols-3 gap-1 text-center">
          <div className="text-xs text-slate-400"><span className="block">🔒</span>Secure</div>
          <div className="text-xs text-slate-400"><span className="block">🚫</span>No Spam</div>
          <div className="text-xs text-slate-400"><span className="block">🆓</span>Free</div>
        </div>
      </form>
    </div>
  );
}
