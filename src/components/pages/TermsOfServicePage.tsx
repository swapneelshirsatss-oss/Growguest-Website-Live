import { FileCheck, ShieldAlert, Award, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

export default function TermsOfServicePage() {
  const canonicalUrl = "https://growguest.in/terms-of-service/";
  const breadcrumbItems = [
    { name: 'Terms of Service', url: '/terms-of-service/' }
  ];

  return (
    <div className="bg-[#fcfbf9] text-[#141716] min-h-screen">
      <SEO
        title="Terms of Service | Growguest — Digital Growth for Hospitality"
        description="Terms and conditions governing the use of Growguest website, free direct booking audit tools, and consulting engagements."
        keywords="Growguest terms of service, hospitality marketing contract terms, hotel audit terms"
        canonicalUrl={canonicalUrl}
      />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <section className="relative bg-[#071510] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#dfad3c_0%,_transparent_65%)] opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/15 border border-[#dfad3c]/30 text-[#dfad3c] text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#dfad3c] animate-pulse" />
            <span>Service Agreement & Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms of <span className="font-serif italic font-normal text-[#dfad3c]">Service</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Last Updated: August 2026. Standard terms governing website use, audit tools, and marketing engagements with Growguest.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="bg-white rounded-3xl border border-[rgba(16,41,32,0.08)] p-8 sm:p-12 shadow-sm space-y-10 text-[#546059] leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (growguest.in), submitting an audit request, utilizing our OTA commission calculator, or engaging Growguest for digital marketing advisory, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              2. Free Direct Booking Audit Scope
            </h2>
            <p className="mb-3">
              Our <strong className="text-[#071510]">Free Direct Booking Audit</strong> provides an independent preliminary assessment of a property's digital footprint (including Google Business Profile visibility, mobile website UX, and OTA leakage).
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The audit is provided free of cost with zero obligation to hire Growguest.</li>
              <li>Calculations provided by the OTA Commission Calculator are estimations based on user-inputted occupancy, room count, and ARR figures.</li>
              <li>Growguest reserves the right to prioritize in-person and detailed video audits for verified hospitality properties in Nagpur, Vidarbha, and Uttarakhand.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              3. Consulting Engagements & Deliverables
            </h2>
            <p>
              Formal ongoing services (such as Google Map Pack optimization, local SEO retainers, website conversion overhauls, or WhatsApp direct booking automation) are governed by specific service proposals agreed upon between Growguest and the property owner. Growth timelines in organic SEO typically range from 60 to 120 days depending on local competition and algorithmic updates.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              4. Intellectual Property & Advisory Content
            </h2>
            <p>
              All proprietary case study breakdowns, frameworks, ROI formulas, blog guides, and custom website UI assets on this website are the intellectual property of Growguest. You may reference our guides and statistics for educational purposes with proper attribution and a backlink to growguest.in.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any legal dispute or claim arising from these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Nagpur, Maharashtra, India.
            </p>
          </div>

          <div className="pt-6 border-t border-[rgba(16,41,32,0.08)]">
            <h2 className="text-2xl font-bold text-[#071510] mb-4">
              6. Contact Information
            </h2>
            <p className="mb-4">
              For any questions or legal notices regarding these Terms of Service:
            </p>
            <div className="bg-[#f7f5ef] rounded-2xl p-6 border border-[rgba(16,41,32,0.08)] space-y-3 text-sm">
              <div className="flex items-center text-[#071510]">
                <MapPin className="w-4 h-4 mr-2 text-[#c99a2e] flex-shrink-0" />
                <span>GrowGuest Digital Growth for Hospitality — 60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034</span>
              </div>
              <div className="flex items-center text-[#071510]">
                <Phone className="w-4 h-4 mr-2 text-[#c99a2e] flex-shrink-0" />
                <span>+91 89569 07343</span>
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
