import PageHero from "../components/ui/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Legal"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-20 sm:py-28 bg-brand-cream">
        <div className="container-tight max-w-4xl">
          <div className="bg-white p-8 sm:p-12 rounded-sm shadow-sm border border-gray-100 space-y-8 font-body text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">Introduction</h2>
              <p>
                Taaj Constructions Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Project details and property information you provide</li>
                <li>Technical data including IP address, browser type, and usage patterns</li>
                <li>Communication records when you contact us</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your enquiries and provide quotes</li>
                <li>To deliver and manage our construction services</li>
                <li>To improve our website and customer experience</li>
                <li>To send relevant updates about our services (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and retained only for as long as necessary to fulfill the purposes outlined in this policy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">Your Rights</h2>
              <p>
                Under UK GDPR, you have the right to access, rectify, erase, restrict processing, and port your personal data. You may also withdraw consent at any time. To exercise these rights, contact us at avtar@taajconstructions.co.uk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-black mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at avtar@taajconstructions.co.uk or call +44 7934 353738.
              </p>
            </div>

            <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
              Last updated: June 2026
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
