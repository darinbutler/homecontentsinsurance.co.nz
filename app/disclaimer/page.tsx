import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Services Disclaimer | HomeContentsInsurance.co.nz',
  description: 'Important disclaimer regarding financial services and information provided by HomeContentsInsurance.co.nz.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Services Disclaimer</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Important information about how we operate and the limits of our service.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-8">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-700">
          {/* General Information Only */}
          <section className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-red-600">⚠</span>
              General Information Only
            </h2>
            <p className="mb-4">
              The information on homecontentsinsurance.co.nz is provided for general informational purposes only. It
              does not constitute:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Financial advice</li>
              <li>Insurance advice or a recommendation to purchase any policy</li>
              <li>Legal advice</li>
              <li>Personalised guidance for your specific situation</li>
            </ul>
            <p className="mt-4">
              You should not rely on this information alone to make decisions about home contents insurance cover.
              Always consult a qualified NZ-licensed financial adviser before making insurance decisions.
            </p>
          </section>

          {/* Not an Insurer or Adviser */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not an Insurer, Broker, or Adviser</h2>
            <p className="mb-4">
              HomeContentsInsurance.co.nz is a lead generation and referral service only. We are NOT:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A licensed insurance insurer or underwriter</li>
              <li>A registered insurance broker</li>
              <li>A licensed financial adviser</li>
              <li>Authorised to provide financial advice or recommendations</li>
            </ul>
            <p className="mt-4">
              We connect consumers with NZ-licensed financial advisers who are regulated under the Financial Markets
              Conduct Act 2013. Any advice or quotes come from those advisers, not from us.
            </p>
          </section>

          {/* About the Advisers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Advisers We Refer To</h2>
            <p className="mb-4">
              The financial advisers we refer your enquiry to are:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Licensed financial advisers under the Financial Markets Conduct Act 2013</li>
              <li>Regulated by the Financial Markets Authority (FMA)</li>
              <li>Responsible for their own advice and conduct</li>
              <li>Required to disclose their licences, commissions, and conflicts of interest</li>
            </ul>
            <p className="mt-4">
              We do not control advisers' advice, pricing, or behaviour. You should obtain a disclosure statement from
              any adviser before accepting their advice.
            </p>
          </section>

          {/* Adviser Commission Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Advisers Are Paid</h2>
            <p className="mb-4">
              NZ-licensed financial advisers typically earn commission from the insurance company when a policy is
              placed through them. This means:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>There is NO cost to you for using this service</li>
              <li>Advisers are paid by insurers, not by you</li>
              <li>Advisers have a financial interest in placing a policy</li>
              <li>Advisers should disclose their commission rates and any conflicts of interest</li>
            </ul>
            <p className="mt-4">
              You have no obligation to purchase a policy. You can decline any offer without penalty or cost.
            </p>
          </section>

          {/* No Guarantee of Cover */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantee of Cover or Availability</h2>
            <p className="mb-4">
              Important: Mentioning a coverage type, limit, or insurance product on this website does NOT guarantee
              that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Such cover is available for your specific situation</li>
              <li>Any particular insurer will accept your risk</li>
              <li>Cover will be provided on the terms or at the price mentioned</li>
              <li>Coverage is available without modification or exclusion</li>
            </ul>
            <p className="mt-4">
              All cover is subject to insurer underwriting, policy terms and conditions, and may be declined or modified
              based on your individual circumstances.
            </p>
          </section>

          {/* Earthquake Cover Disclaimer */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important: Earthquake Cover Not Provided by Private Insurers</h2>
            <p className="mb-4">
              Earthquake damage to your home contents is NOT covered by private home contents insurance. Instead:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                The NZ government scheme (NHC—National Hazard Commission, formerly EQC) covers only the building
                structure and land—NOT contents
              </li>
              <li>To cover contents earthquake damage, you must arrange optional earthquake cover from your insurer</li>
              <li>Earthquake cover is typically charged as an optional add-on and is not automatically included</li>
            </ul>
            <p className="mt-4">
              If you live in a seismic area, ask your adviser specifically about earthquake cover for your contents.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Content</h2>
            <p>
              This website may contain links to third-party websites (insurers, government agencies, regulators). We
              are not responsible for the content, accuracy, reliability, or privacy practices of those external sites.
              Use of third-party links is at your own risk and subject to their own terms of use and privacy policies.
            </p>
          </section>

          {/* Information Accuracy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Accuracy</h2>
            <p className="mb-4">
              While we endeavour to keep information on this website accurate and current:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Insurance products and pricing change frequently</li>
              <li>We make no guarantee of completeness or accuracy</li>
              <li>Information may become outdated between updates</li>
              <li>You should verify details directly with an adviser or insurer</li>
            </ul>
          </section>

          {/* Complaints and Disputes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints and Dispute Resolution</h2>
            <p className="mb-4">
              If you have a complaint:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About an adviser or insurance product:</h3>
                <p className="text-gray-700">
                  Contact the adviser directly first. If unresolved, the adviser is required to provide dispute
                  resolution details. Most are members of the Financial Services Complaints Limited (FSCL) or Insurance
                  and Financial Services Ombudsman (IFSO).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About this website:</h3>
                <p className="text-gray-700">
                  Contact us at hello@cover4you.co.nz. We will respond to complaints within 20 working days.
                </p>
              </div>
            </div>
          </section>

          {/* Regulatory Status */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Status</h2>
            <p>
              HomeContentsInsurance.co.nz is a referral service and is regulated under the Financial Markets Conduct
              Act 2013 in its capacity as a service provider. The financial advisers we refer are separately licensed
              and regulated by the Financial Markets Authority. You can verify an adviser license on the FMA register
              at register.fma.org.nz.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, HomeContentsInsurance.co.nz and its owners, operators, employees,
              and agents accept no liability for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Any loss or damage arising from use of this website</li>
              <li>Reliance on information provided here</li>
              <li>Loss resulting from adviser actions or advice</li>
              <li>Loss resulting from insurer actions or policy terms</li>
              <li>Indirect, consequential, or punitive damages</li>
            </ul>
          </section>

          {/* No Endorsement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Endorsement of Insurers or Advisers</h2>
            <p>
              Listing an insurer or adviser on this website does not constitute our endorsement or recommendation.
              The presence of an insurer does not mean we recommend their products. You should evaluate all options
              presented to you by advisers before deciding.
            </p>
          </section>

          {/* Contact for Questions */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About This Disclaimer?</h2>
            <p className="mb-2">
              Contact us at hello@cover4you.co.nz or by completing a contact form on this website.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              We are committed to providing clear, honest information about how we operate and what we can and cannot do
              for you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
