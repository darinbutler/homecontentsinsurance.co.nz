import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | HomeContentsInsurance.co.nz',
  description: 'Privacy policy for HomeContentsInsurance.co.nz — how we collect and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who We Are</h2>
            <p>
              HomeContentsInsurance.co.nz ("we", "us", "our") is a New Zealand-based home contents insurance broker
              referral service. We operate at homecontentsinsurance.co.nz and can be contacted at
              hello@cover4you.co.nz.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              When you submit a quote request on this website, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Personal details: name, email address, phone number</li>
              <li>Property details: address, property type, sum insured</li>
              <li>Insurance preferences: coverage requirements, excess preference</li>
              <li>Technical data: IP address, browser type, pages visited, device type (for analytics and security)</li>
            </ul>
            <p>
              We also use cookies to remember your preferences and improve your website experience. You can disable
              cookies in your browser settings.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Match you with suitable NZ-licensed insurance advisers</li>
              <li>Respond to your quote request within one business day</li>
              <li>Improve our website and services based on user feedback</li>
              <li>Comply with legal obligations under the Financial Markets Conduct Act 2013</li>
              <li>Send you updates about insurance news and offers (with your permission)</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties. We do not use your information for any purpose
              other than those listed above without your explicit consent.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
            <p className="mb-4">
              We share your quote request details with NZ-licensed insurance advisers for the purpose of providing you
              with home contents insurance quotes. These advisers are:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Regulated by the Financial Markets Conduct Act 2013</li>
              <li>Required to comply with the Privacy Act 2020</li>
              <li>Bound by their own privacy obligations and professional standards</li>
            </ul>
            <p>
              We may also share information with our website hosting provider and analytics partner (both bound by
              confidentiality agreements). We do not share your information with any other third parties without your
              consent.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We take reasonable steps to protect your personal information from loss, misuse, and unauthorised access,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>256-bit SSL encryption for all data transmission over the internet</li>
              <li>Secure, encrypted storage of personal information</li>
              <li>Access controls limiting who can view your information</li>
              <li>Regular security audits and updates</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your
              personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights Under the Privacy Act 2020</h2>
            <p className="mb-4">
              Under the Privacy Act 2020, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Access your personal information held by us</li>
              <li>Request corrections to any inaccurate information</li>
              <li>Request deletion of your information (in certain circumstances)</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, contact us at hello@cover4you.co.nz or write to the address below. We will
              respond to requests within 20 working days.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retention of Information</h2>
            <p>
              We retain your personal information for as long as necessary to provide services to you, respond to your
              enquiries, and comply with legal obligations. Generally, we retain quote request information for 3 years
              after you submit it. If you do not convert to a policy, we may delete your information sooner at your
              request.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites (e.g., insurer websites, regulatory bodies). We
              are not responsible for the privacy practices of those websites. We encourage you to read their privacy
              policies before providing personal information.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              For privacy-related enquiries or to exercise your privacy rights, contact us:
            </p>
            <p>
              Email: hello@cover4you.co.nz
            </p>
            <p className="mt-2">
              We will aim to respond to your request within 20 working days.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices or for other
              operational, legal, or regulatory reasons. We will notify you of material changes by updating the
              "Last updated" date on this page and, where appropriate, by email.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h2>
          <p className="text-gray-700 mb-6">
            If you have any concerns about how we handle your personal information, please contact us at
            hello@cover4you.co.nz.
          </p>
        </section>
      </div>
    </div>
  );
}
