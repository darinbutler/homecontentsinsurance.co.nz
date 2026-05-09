import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand — spans 2 cols on large */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 font-extrabold text-white text-lg">
              <span className="text-brand-400">Home</span>ContentsInsurance<span className="text-brand-500">.co.nz</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Helping New Zealanders compare home contents insurance and connect with licensed advisers who find the right cover — for renters, homeowners, and landlords.
            </p>
            <div className="flex flex-wrap gap-2">
              {['FMCA-Regulated', 'No Cost to You', 'Licensed Advisers', 'No Obligation'].map(b => (
                <span key={b} className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Coverage Types</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coverage/renters-contents/" className="hover:text-brand-400 transition">Renters Contents</Link></li>
              <li><Link href="/coverage/homeowner-contents/" className="hover:text-brand-400 transition">Homeowner Contents</Link></li>
              <li><Link href="/coverage/landlord-contents/" className="hover:text-brand-400 transition">Landlord Contents</Link></li>
              <li><Link href="/coverage/high-value-items/" className="hover:text-brand-400 transition">High-Value Items</Link></li>
              <li><Link href="/coverage/portable-valuables/" className="hover:text-brand-400 transition">Portable Valuables</Link></li>
              <li><Link href="/coverage/accidental-damage/" className="hover:text-brand-400 transition">Accidental Damage</Link></li>
              <li><Link href="/coverage/temporary-accommodation/" className="hover:text-brand-400 transition">Temporary Accommodation</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare/" className="hover:text-brand-400 transition">Compare Insurers</Link></li>
              <li><Link href="/faq/" className="hover:text-brand-400 transition">FAQs</Link></li>
              <li><Link href="/blog/" className="hover:text-brand-400 transition">Blog &amp; Guides</Link></li>
              <li><Link href="/about/" className="hover:text-brand-400 transition">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-brand-400 transition">Get a Quote</Link></li>
              <li><Link href="/renters-insurance/" className="hover:text-brand-400 transition">Renters Insurance Guide</Link></li>
              <li><Link href="/contents-insurance-cost/" className="hover:text-brand-400 transition">What Does it Cost?</Link></li>
            </ul>
          </div>

          {/* Legal & External */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/privacy/" className="hover:text-brand-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-brand-400 transition">Terms of Use</Link></li>
              <li><Link href="/disclaimer/" className="hover:text-brand-400 transition">Disclaimer</Link></li>
            </ul>
            <h4 className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Industry Bodies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition">
                  ICNZ — Insurance Council NZ ↗
                </a>
              </li>
              <li>
                <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition">
                  FMA — Financial Markets Authority ↗
                </a>
              </li>
              <li>
                <a href="https://www.consumer.org.nz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition">
                  Consumer NZ ↗
                </a>
              </li>
              <li>
                <a href="https://www.nhc.govt.nz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition">
                  NHC — Natural Hazards Commission ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Disclaimer */}
        <div className="border-t border-slate-700 pt-8 space-y-4 text-sm text-slate-500">
          <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
            <p className="font-semibold text-slate-400 mb-2">Financial Services Disclosure</p>
            <p className="leading-relaxed">
              HomeContentsInsurance.co.nz is a referral and lead generation service. We connect consumers with NZ-licensed financial advisers regulated under the Financial Markets Conduct Act 2013 (FMCA). We are not a licensed financial adviser, insurer, or insurance broker. The information on this website is general in nature and does not constitute financial advice or a recommendation to purchase any insurance product. Advisers referred by this service earn commission from insurers when a policy is placed — there is no cost to you for the referral. Before proceeding with any insurance product you will receive a disclosure statement from your adviser outlining their licensing, commissions, and any conflicts of interest.
            </p>
          </div>
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
