import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-700 flex items-center justify-center text-white text-sm font-black">🏠</span>
              <span className="font-extrabold text-white text-base">HomeContentsInsurance<span className="text-brand-400">.co.nz</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Protecting what matters most at home. NZ-licensed advisers match you with the right contents insurance — for renters, homeowners, and landlords.
            </p>
          </div>
          {/* Coverage */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Coverage Types</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coverage/renters-contents/" className="hover:text-brand-400 transition">Renters Contents</Link></li>
              <li><Link href="/coverage/homeowner-contents/" className="hover:text-brand-400 transition">Homeowner Contents</Link></li>
              <li><Link href="/coverage/landlord-contents/" className="hover:text-brand-400 transition">Landlord Contents</Link></li>
              <li><Link href="/coverage/high-value-items/" className="hover:text-brand-400 transition">High-Value Items</Link></li>
              <li><Link href="/coverage/portable-valuables/" className="hover:text-brand-400 transition">Portable Valuables</Link></li>
              <li><Link href="/coverage/accidental-damage/" className="hover:text-brand-400 transition">Accidental Damage</Link></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/" className="hover:text-brand-400 transition">Compare Insurers</Link></li>
              <li><Link href="/faq/" className="hover:text-brand-400 transition">FAQs</Link></li>
              <li><Link href="/blog/" className="hover:text-brand-400 transition">Blog &amp; Guides</Link></li>
              <li><Link href="/about/" className="hover:text-brand-400 transition">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-brand-400 transition">Get a Quote</Link></li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy/" className="hover:text-brand-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-brand-400 transition">Terms of Use</Link></li>
              <li><Link href="/disclaimer/" className="hover:text-brand-400 transition">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-sm text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-400">Financial Advice Disclosure:</strong> HomeContentsInsurance.co.nz connects consumers with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013. We are a referral service and do not provide financial advice directly. Advisers earn commission from insurers; there is no cost to you for the referral.
          </p>
          <p>
            © {year} HomeContentsInsurance.co.nz · All rights reserved ·{' '}
            <Link href="/privacy/" className="hover:text-brand-400 transition">Privacy</Link> ·{' '}
            <Link href="/terms/" className="hover:text-brand-400 transition">Terms</Link> ·{' '}
            <Link href="/disclaimer/" className="hover:text-brand-400 transition">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
