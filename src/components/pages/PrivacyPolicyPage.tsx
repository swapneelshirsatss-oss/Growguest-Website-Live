import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

export default function PrivacyPolicyPage() {
  const canonicalUrl = "https://growguest.in/privacy-policy/";
  const breadcrumbItems = [
    { name: 'Privacy Policy', url: '/privacy-policy/' }
  ];

  return (
    <div className="bg-[#fcfbf9] text-[#141716] min-h-screen">
      <SEO
        title="Privacy Policy | Growguest — Digital Growth for Hospitality"
        description="Learn how Growguest collects, uses, and safeguards your data. We respect property owner confidentiality and guest privacy under Indian IT & DPDP regulations."
        keywords="Growguest privacy policy, hospitality marketing data privacy, hotel data confidentiality"
        canonicalUrl={canonicalUrl}
      />

      {/* Header */}
      <header className="pt-10 pb-12 lg:pt-14 lg:pb-16 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Breadcrumbs items={breadcrumbItems} maxWidth="4xl" className="px-0 pt-0 pb-6" />
          <div className="hero-pill-badge mb-6">
            <span className="pulse-dot" />
            <span>Data Protection & Transparency</span>
          </div>
          <h1 className="hero-title mb-4">
            Privacy <em className="font-serif italic font-normal text-[#c99a2e]">Policy</em>
          </h1>
          <p className="hero-desc">
            Last Updated: August 2026. How Growguest collects, handles, and protects information for hospitality property owners and website visitors.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-16">
        <div className="bg-white rounded-3xl border border-[rgba(16,41,32,0.08)] p-8 sm:p-12 shadow-sm space-y-10 text-[#546059] leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-[#c99a2e]" />
              1. Overview & Commitment
            </h2>
            <p>
              Growguest ("we", "us", "our") operates as a boutique hospitality digital marketing consultancy based in Nagpur, Maharashtra, India. We are committed to protecting the privacy and confidentiality of independent hotel owners, homestay hosts, resort managers, and website visitors who engage with our direct booking audit tools, consultation services, and educational resources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#c99a2e]" />
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information only when voluntarily provided by you through our website audit forms, WhatsApp inquiries, contact forms, or direct phone conversations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#071510]">Contact Information:</strong> Full name, business email address, WhatsApp/mobile phone number.</li>
              <li><strong className="text-[#071510]">Property Details:</strong> Property name, city/location (e.g. Nagpur, Mukteshwar), room inventory count, average room rate (ARR), and current OTA commission estimates for the Direct Booking Audit.</li>
              <li><strong className="text-[#071510]">Technical Web Analytics:</strong> Anonymous browser type, referring URL, time on page, and device type collected through privacy-respecting analytics tools to improve site performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#c99a2e]" />
              3. How We Use Your Information
            </h2>
            <p className="mb-3">Your data is strictly used for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To prepare and deliver customized <strong>Free Direct Booking Audits</strong>, Google Business Profile analyses, and OTA commission leakage calculations.</li>
              <li>To respond to your inquiries via WhatsApp, email, or telephone.</li>
              <li>To provide ongoing digital marketing, SEO, and website conversion services if engaged.</li>
              <li>We <strong className="text-[#071510]">never sell, rent, or trade</strong> your business contact information or property financial figures to third-party brokers or advertisers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#25d366]" />
              4. Property Data Confidentiality & Non-Disclosure
            </h2>
            <p>
              We understand that hotel revenue metrics, OTA commission payout numbers, and direct booking figures are highly sensitive proprietary data. All audit metrics shared with Growguest are treated with strict confidentiality. Any case studies published on our platform use anonymized metrics unless explicit written consent is provided by the property owner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              5. Third-Party Integrations & Cookies
            </h2>
            <p>
              Our website may utilize essential cookies to ensure smooth navigation, embedded Google Maps for office directions, and standard web analytics. You have the right to disable cookies in your web browser settings at any time without restricting access to our website content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              6. Indian Data Protection Compliance (DPDP Act 2023)
            </h2>
            <p>
              Growguest complies with the Digital Personal Data Protection Act, 2023 (DPDP) and the Information Technology Act, 2000 of India. You have the right to request access to your stored contact details, request corrections, or request complete deletion of your data from our internal records at any time.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(16,41,32,0.08)]">
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              7. Contact Our Privacy Officer
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <div className="bg-[#f7f5ef] rounded-2xl p-6 border border-[rgba(16,41,32,0.08)] space-y-3 text-sm">
              <div className="flex items-center text-[#071510]">
                <MapPin className="w-4 h-4 mr-2 text-[#c99a2e] flex-shrink-0" />
                <span>GrowGuest Digital Growth for Hospitality — 60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034</span>
              </div>
              <div className="flex items-center text-[#071510]">
                <Phone className="w-4 h-4 mr-2 text-[#c99a2e] flex-shrink-0" />
                <span>+91 89569 07343 (WhatsApp & Call)</span>
              </div>
              <div className="flex items-center text-[#071510]">
                <Mail className="w-4 h-4 mr-2 text-[#c99a2e] flex-shrink-0" />
                <span>hello@growguest.com</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
