import Link from 'next/link';

export const metadata = {
  title: 'Thank You — Quote Request Received | HomeContentsInsurance.co.nz',
  description: 'Your home contents insurance quote request has been received. A NZ-licensed adviser will be in touch within one business day.',
};

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(15,30,80,0.88) 0%, rgba(29,78,216,0.75) 60%, rgba(10,20,60,0.90) 100%), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <div className="text-7xl mb-6">🏡</div>
        <h1 className="text-4xl font-extrabold text-white mb-4">Quote Request Received!</h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          A NZ-licensed insurance adviser will review your home contents details and be in touch within <strong>one business day</strong> with options and a quote.
        </p>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8 text-left">
          <h2 className="font-bold text-white mb-4">What to expect:</h2>
          <ul className="space-y-3 text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-blue-300 font-bold mt-0.5">✓</span>
              An adviser will contact you by phone or email within one business day
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 font-bold mt-0.5">✓</span>
              They may ask a few additional questions about your home contents
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 font-bold mt-0.5">✓</span>
              You&apos;ll receive one or more quotes tailored to your specific situation
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-300 font-bold mt-0.5">✓</span>
              No obligation — you choose whether to proceed
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 px-8 rounded-xl transition">
            Back to Home
          </Link>
          <Link href="/blog/" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-xl transition">
            Read Our Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
