'use client';
import { useState } from 'react';
import { SITE } from '../data/site';

interface QuoteFormProps {
  workerUrl?: string;
  thankYouUrl?: string;
  formSubject?: string;
  variant?: 'compact' | 'full';
}

export default function QuoteForm({ workerUrl, thankYouUrl, formSubject, variant = 'compact' }: QuoteFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = () => setSubmitting(true);

  const actionUrl = workerUrl ?? SITE.workerUrl;
  const redirectUrl = thankYouUrl ?? SITE.thankYouUrl;
  const subject = formSubject ?? SITE.formSubject;

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
      <section className="bg-gradient-to-r from-brand-700 to-brand-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Contents?</h2>
              <p className="text-lg text-brand-100 mb-6">
                A NZ-licensed adviser will compare options across the market and be in touch within one business day — no obligation.
              </p>
              <ul className="space-y-3 text-brand-100">
                {['Compare quotes from leading NZ insurers', 'Expert advice for renters, owners & landlords', 'High-value & specified item specialists', 'One business day response'].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <form action={actionUrl} method="POST" onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl">
              {hiddenFields}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name</label>
                  <input type="text" name="name" required placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Phone</label>
                  <input type="tel" name="phone" required placeholder="09 XXX XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">I am a...</label>
                  <select name="who_for" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                    <option value="">Select your situation...</option>
                    {whoFor.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1">Cover Required</label>
                  <select name="cover_type" required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent">
                    <option value="">Select cover type...</option>
                    {coverTypes.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </div>
                <button type="submit" disabled={submitting}
                  className="w-full bg-brand-700 hover:bg-brand-800 disabled:bg-brand-500 text-white font-semibold py-3 rounded-lg transition-colors">
                  {submitting ? 'Submitting…' : 'Get My Quote →'}
                </button>
                <div className="border-t pt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>🔒 256-bit SSL</span>
                  <span>🚫 No Spam</span>
                  <span>⚡ 1 Business Day</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-1">Get Your Contents Quote</h3>
      <p className="text-slate-400 text-sm mb-5">NZ-licensed advisers respond within 1 business day</p>
      <form action={actionUrl} method="POST" onSubmit={handleSubmit} className="space-y-3">
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
        <button type="submit" disabled={submitting}
          className="w-full bg-brand-700 hover:bg-brand-600 disabled:bg-brand-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
          {submitting ? 'Submitting…' : 'Get My Quote →'}
        </button>
        <div className="border-t border-slate-700 pt-3 flex items-center justify-between text-xs text-slate-400">
          <span>🔒 Secure</span>
          <span>🚫 No Spam</span>
          <span>⚡ Fast Response</span>
        </div>
      </form>
    </div>
  );
}
