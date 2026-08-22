import { FileCheck, ShieldAlert, Award, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

export default function TermsOfServicePage() {
  const canonicalUrl = "https://growguest.in/terms-of-service";
  const breadcrumbItems = [
    { name: 'Terms of Service', url: '/terms-of-service' }
  ];

  return (
    <div className="bg-[#fcfcfc] text-[#242423] min-h-screen">
      <SEO
        title="Terms of Service | Growguest — Digital Growth for Hospitality"
        description="Terms and conditions governing the use of Growguest website, free direct booking audit tools, and consulting engagements."
        keywords="Growguest terms of service, hospitality marketing contract terms, hotel audit terms"
        canonicalUrl={canonicalUrl}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white py-16 lg:py-20 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 backdrop-blur-md mb-6">
            <FileCheck className="w-4 h-4 mr-2" />
            Service Agreement & Guidelines
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto">
            Last Updated: August 2026. Standard terms governing website use, audit tools, and marketing engagements with Growguest.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-10 text-slate-700 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (growguest.in), submitting an audit request, utilizing our OTA commission calculator, or engaging Growguest for digital marketing advisory, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              2. Free Direct Booking Audit Scope
            </h2>
            <p className="mb-3">
              Our <strong>Free Direct Booking Audit</strong> provides an independent preliminary assessment of a property's digital footprint (including Google Business Profile visibility, mobile website UX, and OTA leakage).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The audit is provided free of cost with zero obligation to hire Growguest.</li>
              <li>Calculations provided by the OTA Commission Calculator are estimations based on user-inputted occupancy, room count, and ARR figures.</li>
              <li>Growguest reserves the right to prioritize in-person and detailed video audits for verified hospitality properties in Nagpur, Vidarbha, and Uttarakhand.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              3. Consulting Engagements & Deliverables
            </h2>
            <p>
              Formal ongoing services (such as Google Map Pack optimization, local SEO retainers, website conversion overhauls, or WhatsApp direct booking automation) are governed by specific service proposals agreed upon between Growguest and the property owner. Growth timelines in organic SEO typically range from 60 to 120 days depending on local competition and algorithmic updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              4. Intellectual Property & Advisory Content
            </h2>
            <p>
              All proprietary case study breakdowns, frameworks, ROI formulas, blog guides, and custom website UI assets on this website are the intellectual property of Growguest. You may reference our guides and statistics for educational purposes with proper attribution and a backlink to growguest.in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal dispute or claim arising from these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Nagpur, Maharashtra, India.
            </p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-[#043f2e] mb-4">
              6. Contact Information
            </h2>
            <p className="mb-4">
              For any questions or legal notices regarding these Terms of Service:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-3 text-sm">
              <div className="flex items-center text-slate-800">
                <MapPin className="w-4 h-4 mr-2 text-[#043f2e] flex-shrink-0" />
                <span>Growguest — 60, Swami Samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034</span>
              </div>
              <div className="flex items-center text-slate-800">
                <Phone className="w-4 h-4 mr-2 text-[#043f2e] flex-shrink-0" />
                <span>+91 89569 07343</span>
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
