import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

export default function PrivacyPolicyPage() {
  const canonicalUrl = "https://growguest.in/privacy-policy/";
  const breadcrumbItems = [
    { name: 'Privacy Policy', url: '/privacy-policy/' }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#242423] min-h-screen">
      <SEO
        title="Privacy Policy | Growguest — Digital Growth for Hospitality"
        description="Learn how Growguest collects, uses, and safeguards your data. We respect property owner confidentiality and guest privacy under Indian IT & DPDP regulations."
        keywords="Growguest privacy policy, hospitality marketing data privacy, hotel data confidentiality"
        canonicalUrl={canonicalUrl}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white py-16 lg:py-20 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 backdrop-blur-md mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Data Protection & Transparency
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Last Updated: August 2026. How Growguest collects, handles, and protects information for hospitality property owners and website visitors.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-10 text-slate-700 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-[#78c51c]" />
              1. Overview & Commitment
            </h2>
            <p>
              Growguest ("we", "us", "our") operates as a boutique hospitality digital marketing consultancy based in Nagpur, Maharashtra, India. We are committed to protecting the privacy and confidentiality of independent hotel owners, homestay hosts, resort managers, and website visitors who engage with our direct booking audit tools, consultation services, and educational resources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#78c51c]" />
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information only when voluntarily provided by you through our website audit forms, WhatsApp inquiries, contact forms, or direct phone conversations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Full name, business email address, WhatsApp/mobile phone number.</li>
              <li><strong>Property Details:</strong> Property name, city/location (e.g. Nagpur, Mukteshwar), room inventory count, average room rate (ARR), and current OTA commission estimates for the Direct Booking Audit.</li>
              <li><strong>Technical Web Analytics:</strong> Anonymous browser type, referring URL, time on page, and device type collected through privacy-respecting analytics tools to improve site performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-[#78c51c]" />
              3. How We Use Your Information
            </h2>
            <p className="mb-3">Your data is strictly used for legitimate business purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To prepare and deliver customized <strong>Free Direct Booking Audits</strong>, Google Business Profile analyses, and OTA commission leakage calculations.</li>
              <li>To respond to your inquiries via WhatsApp, email, or telephone.</li>
              <li>To provide ongoing digital marketing, SEO, and website conversion services if engaged.</li>
              <li>We <strong>never sell, rent, or trade</strong> your business contact information or property financial figures to third-party brokers or advertisers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-[#78c51c]" />
              4. Property Data Confidentiality & Non-Disclosure
            </h2>
            <p>
              We understand that hotel revenue metrics, OTA commission payout numbers, and direct booking figures are highly sensitive proprietary data. All audit metrics shared with Growguest are treated with strict confidentiality. Any case studies published on our platform use anonymized metrics unless explicit written consent is provided by the property owner.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              5. Third-Party Integrations & Cookies
            </h2>
            <p>
              Our website may utilize essential cookies to ensure smooth navigation, embedded Google Maps for office directions, and standard web analytics. You have the right to disable cookies in your web browser settings at any time without restricting access to our website content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              6. Indian Data Protection Compliance (DPDP Act 2023)
            </h2>
            <p>
              Growguest complies with the Digital Personal Data Protection Act, 2023 (DPDP) and the Information Technology Act, 2000 of India. You have the right to request access to your stored contact details, request corrections, or request complete deletion of your data from our internal records at any time.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              7. Contact Our Privacy Officer
            </h2>
            <p className="mb-4">
              If you have any questions regarding this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3 text-sm">
              <div className="flex items-center text-slate-800">
                <MapPin className="w-4 h-4 mr-2 text-[#043f2e] flex-shrink-0" />
                <span>GrowGuest Digital Growth for Hospitality — 60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034</span>
              </div>
              <div className="flex items-center text-slate-800">
                <Phone className="w-4 h-4 mr-2 text-[#043f2e] flex-shrink-0" />
                <span>+91 89569 07343 (WhatsApp & Call)</span>
              </div>
              <div className="flex items-center text-slate-800">
                <Mail className="w-4 h-4 mr-2 text-[#043f2e] flex-shrink-0" />
                <span>hello@growguest.com</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
