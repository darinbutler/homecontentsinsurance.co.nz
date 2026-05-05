import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | HomeContentsInsurance.co.nz',
  description: 'Terms of use and conditions for using HomeContentsInsurance.co.nz.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Conditions for using HomeContentsInsurance.co.nz.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using homecontentsinsurance.co.nz (the "website"), you agree to be bound by these Terms
              of Use. If you do not agree to these terms, please do not use this website.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature of the Service</h2>
            <p className="mb-4">
              HomeContentsInsurance.co.nz is a home contents insurance broker referral service. We connect consumers
              with NZ-licensed financial advisers. We do not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide insurance quotes directly</li>
              <li>Underwrite or issue insurance policies</li>
              <li>Make insurance recommendations</li>
              <li>Provide financial advice</li>
            </ul>
            <p className="mt-4">
              Any quote or financial advice you receive will come from a separately licensed financial adviser or
              insurer. We are a referral service only.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information on This Website</h2>
            <p className="mb-4">
              We endeavour to keep the information on this website accurate and up to date. However, we make no
              warranties or representations about:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The completeness or accuracy of any information</li>
              <li>Its suitability for any particular purpose</li>
              <li>That it reflects current insurer products or policies</li>
            </ul>
            <p className="mt-4">
              Insurance products, providers, pricing, and regulations change frequently. The information provided is
              for general guidance only. Always verify details directly with an adviser or insurer before making
              decisions.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Not Financial Advice</h2>
            <p className="mb-4">
              Nothing on this website constitutes financial advice within the meaning of the Financial Markets Conduct
              Act 2013. The information provided is general in nature and does not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Take account of your personal circumstances, goals, or needs</li>
              <li>Constitute a recommendation to buy or avoid any product</li>
              <li>Replace advice from a licensed financial adviser</li>
            </ul>
            <p className="mt-4">
              Before making any insurance decision, you should obtain personalised financial advice from a
              NZ-licensed financial adviser who understands your situation.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Obligations</h2>
            <p className="mb-4">
              When using this website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and truthful information in quote requests</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the website for unlawful, fraudulent, or harmful purposes</li>
              <li>Not attempt to gain unauthorised access to the website or its systems</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Referrals to Advisers</h2>
            <p className="mb-4">
              When you submit a quote request, we refer your details to NZ-licensed financial advisers. These advisers
              are separate entities and are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contacting you about your quote request</li>
              <li>Providing insurance quotes and financial advice</li>
              <li>Compliance with the Financial Markets Conduct Act 2013</li>
              <li>Their own privacy and data handling practices</li>
            </ul>
            <p className="mt-4">
              We do not control advisers' actions or representations. You are not obligated to engage with any adviser
              or purchase any product they offer.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. No Guarantee of Service</h2>
            <p>
              We make no guarantee that advisers will contact you, that quotes will be provided, or that any particular
              outcome will result from using this service. While we aim to connect you with advisers, we cannot control
              their response times or decisions.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, HomeContentsInsurance.co.nz and its operators, employees, and
              agents accept no liability for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any loss or damage arising from use of this website</li>
              <li>Reliance on information provided on this website</li>
              <li>Loss resulting from failure to receive adviser contact</li>
              <li>Loss resulting from any adviser's actions or advice</li>
              <li>Indirect, consequential, or punitive damages</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. No Endorsement of Insurers</h2>
            <p>
              Listing an insurer or adviser on this website does not constitute an endorsement or recommendation.
              The presence of an insurer on this site does not mean we recommend their products.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website (including text, graphics, logos, and images) is the property of
              HomeContentsInsurance.co.nz or licensed content providers. You may not reproduce, modify, or distribute
              this content without permission.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites (insurers, regulators, government agencies). We
              are not responsible for the content, accuracy, or practices of those websites. Use of third-party links
              is at your own risk and subject to their terms of use.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use at any time. Your continued use of the website after changes are
              posted constitutes your acceptance of the updated terms. We encourage you to review these terms
              periodically.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p>
              These terms are governed by the laws of New Zealand. Any legal disputes arising from use of this website
              are subject to the exclusive jurisdiction of the New Zealand courts.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact</h2>
            <p>
              For questions about these terms, contact us at hello@cover4you.co.nz.
            </p>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
          <p className="text-gray-700">
            Please contact us at hello@cover4you.co.nz if you have any questions about these Terms of Use.
          </p>
        </section>
      </div>
    </div>
  );
}
