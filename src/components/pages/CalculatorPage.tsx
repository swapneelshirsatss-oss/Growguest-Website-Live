import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Percent, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Sparkles,
  Zap,
  TrendingUp,
  HelpCircle,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import OtaCalculator from '../OtaCalculator';
import AuditForm from '../AuditForm';

const faqs = [
  {
    question: "What is an OTA commission calculator for hotels?",
    answer: "An OTA commission calculator is a financial tool designed for independent hotel and homestay owners to estimate the exact revenue lost to online travel agencies (MakeMyTrip, Agoda, Booking.com, Expedia) and quantify the annual cash retained by shifting a portion of room bookings to direct channels."
  },
  {
    question: "What is the average OTA commission rate in India?",
    answer: "In India, OTA commission rates typically range from 15% to 25% plus GST on every room night booked. For premium marketing placements, preferred partner programs, or flash sales, total OTA deductions can reach 28% to 30% of gross booking revenue."
  },
  {
    question: "Can an independent property realistically shift 25% of OTA bookings to direct?",
    answer: "Yes. Most travelers who discover a boutique hotel or resort on an OTA will subsequently search Google for the property's official website, photos, and contact number. By optimizing your Google Business Profile and having a sub-1.5s mobile website with WhatsApp inquiry buttons, capturing 25% to 40% of those guests directly is standard."
  },
  {
    question: "Does offering direct booking discounts violate OTA rate parity clauses?",
    answer: "Hotels can protect their direct margins without triggering OTA parity penalties by packaging added value rather than just lowering the public room rate: offer complimentary breakfast, early check-in, flexible cancellation, room upgrades, or exclusive WhatsApp member rates."
  }
];

export default function CalculatorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'OTA Commission Calculator', url: '/calculator/' }
  ];

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GrowGuest Hotel OTA Commission & Direct ROI Calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": "https://growguest.in/calculator/",
    "description": "Interactive financial tool for independent hotels and homestays to calculate OTA commission bleed and direct booking ROI.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="bg-[#fcfbf9] text-[#141716] min-h-screen">
      <SEO
        title="Hotel OTA Commission Calculator & Direct ROI Savings Tool | GrowGuest"
        description="Calculate how much money your hotel or homestay loses to MakeMyTrip, Agoda, and Booking.com commissions. See real direct booking ROI and savings."
        keywords="hotel OTA commission calculator, direct booking ROI calculator, hotel commission savings, reduce MakeMyTrip commission, hotel revenue calculator India"
        canonicalUrl="https://growguest.in/calculator/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(softwareAppSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Intro */}
      <section className="pt-10 pb-12 lg:pt-14 lg:pb-16 relative">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} maxWidth="full" className="px-0 pt-0 pb-6" />

          <div className="max-w-4xl">
            <div className="hero-pill-badge mb-6">
              <span className="pulse-dot" />
              <span>INTERACTIVE FINANCIAL TOOL</span>
            </div>

            <h1 className="hero-title mb-6">
              Hotel OTA Commission & <em>Direct ROI Calculator</em>
            </h1>
            <p className="hero-desc mb-6">
              See exactly how much revenue third-party aggregators (MakeMyTrip, Agoda, Booking.com) take from your property—and how much profit you reclaim by going direct.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Live Interactive Calculator */}
      <OtaCalculator />

      {/* Educational Breakdown Section */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[rgba(16,41,32,0.08)] shadow-sm space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-[#dfad3c] uppercase tracking-wider block mb-2">
                HOW THE MATH WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071510] mb-4">
                Understanding Your Property's Commission Bleed
              </h2>
              <p className="text-[#546059] leading-relaxed text-base">
                When an independent hotel generates ₹3,00,000 to ₹10,00,000 in monthly room revenue, relying on OTAs for 65%+ of bookings results in <strong>₹36,000 to ₹1,20,000+ paid in middleman commissions every single month</strong>. Over a year, this amounts to ₹4,30,000 to ₹14,00,000+ extracted directly from your bottom line.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[rgba(16,41,32,0.08)]">
              <div className="p-5 bg-[#fcfbf9] rounded-2xl border border-[rgba(16,41,32,0.06)]">
                <span className="text-xs font-bold text-red-600 uppercase block mb-1">THE OTA TAX</span>
                <p className="text-2xl font-extrabold text-[#071510] mb-1">18% – 25%</p>
                <p className="text-xs text-[#546059]">Deducted from gross booking revenue on every single completed stay.</p>
              </div>
              <div className="p-5 bg-[#fcfbf9] rounded-2xl border border-[rgba(16,41,32,0.06)]">
                <span className="text-xs font-bold text-[#0c2018] uppercase block mb-1">THE DIRECT TARGET</span>
                <p className="text-2xl font-extrabold text-[#071510] mb-1">25% – 50%</p>
                <p className="text-xs text-[#546059]">Realistic share of bookings that can be diverted to your website and WhatsApp.</p>
              </div>
              <div className="p-5 bg-[#fcfbf9] rounded-2xl border border-[rgba(16,41,32,0.06)]">
                <span className="text-xs font-bold text-[#dfad3c] uppercase block mb-1">ANNUAL RETENTION</span>
                <p className="text-2xl font-extrabold text-[#071510] mb-1">₹1L – ₹5L+</p>
                <p className="text-xs text-[#546059]">Net operating profit retained in your business bank account.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-[rgba(16,41,32,0.08)]">
              <h3 className="text-lg font-bold text-[#071510] mb-3">4 Ways to Capture Direct Bookings Without Parity Penalties:</h3>
              <ul className="space-y-3 text-sm text-[#546059]">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#dfad3c] mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#071510]">Google Maps 3-Pack Rank:</strong> Rank your Google Business Profile so local travelers call you directly instead of launching an app.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#dfad3c] mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#071510]">Google Hotel Free Booking Links:</strong> Claim free direct booking listing spots alongside OTA ads inside Google Search.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#dfad3c] mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#071510]">Direct Value Perks:</strong> Offer early check-in, free high-speed Wi-Fi, or welcome drinks that OTAs cannot duplicate.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#dfad3c] mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-[#071510]">Instant WhatsApp Concierge:</strong> Respond within 2 minutes with room photos and instant booking confirmation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7f5ef] border-t border-[rgba(16,41,32,0.08)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#071510] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#546059] text-sm">
              Everything you need to know about OTA commission structures and direct booking ROI.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[rgba(16,41,32,0.08)] overflow-hidden shadow-xs hover:border-[#dfad3c]/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base sm:text-lg font-bold text-[#071510] pr-4">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#dfad3c] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#546059] leading-relaxed border-t border-[rgba(16,41,32,0.06)] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Form Section */}
      <section id="audit" className="py-16 lg:py-20">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[rgba(16,41,32,0.08)] shadow-xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono font-bold text-[#dfad3c] bg-[#dfad3c]/10 border border-[#dfad3c]/30 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                LOCK IN YOUR SAVINGS
              </span>
              <h2 className="text-3xl font-extrabold text-[#071510] mb-2">
                Get Your Free Direct Booking Audit
              </h2>
              <p className="text-[#546059] text-sm sm:text-base max-w-xl mx-auto">
                Ready to stop losing 20% on every booking? Request a customized audit of your property's OTA commission bleed and direct channels.
              </p>
            </div>

            <AuditForm />
          </div>
        </div>
      </section>

    </div>
  );
}
