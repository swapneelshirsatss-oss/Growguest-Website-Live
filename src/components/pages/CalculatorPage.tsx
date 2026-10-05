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
    <div className="bg-slate-50 min-h-screen">
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

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Intro */}
      <section className="relative bg-[#043f2e] text-white pt-16 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c8f169]/15 border border-[#c8f169]/30 text-[#c8f169] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>INTERACTIVE FINANCIAL TOOL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Hotel OTA Commission & Direct ROI Calculator
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            See exactly how much revenue third-party aggregators (MakeMyTrip, Agoda, Booking.com) take from your property—and how much profit you reclaim by going direct.
          </p>
        </div>
      </section>

      {/* Embedded Live Interactive Calculator */}
      <OtaCalculator />

      {/* Educational Breakdown Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-[#043f2e] uppercase tracking-wider block mb-2">
              HOW THE MATH WORKS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Understanding Your Property's Commission Bleed
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              When an independent hotel generates ₹3,00,000 to ₹10,00,000 in monthly room revenue, relying on OTAs for 65%+ of bookings results in <strong>₹36,000 to ₹1,20,000+ paid in middleman commissions every single month</strong>. Over a year, this amounts to ₹4,30,000 to ₹14,00,000+ extracted directly from your bottom line.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-red-600 uppercase block mb-1">THE OTA TAX</span>
              <p className="text-xl font-extrabold text-slate-900 mb-1">18% – 25%</p>
              <p className="text-xs text-slate-500">Deducted from gross booking revenue on every single completed stay.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-emerald-700 uppercase block mb-1">THE DIRECT TARGET</span>
              <p className="text-xl font-extrabold text-slate-900 mb-1">25% – 50%</p>
              <p className="text-xs text-slate-500">Realistic share of bookings that can be diverted to your website and WhatsApp.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-[#043f2e] uppercase block mb-1">ANNUAL RETENTION</span>
              <p className="text-xl font-extrabold text-slate-900 mb-1">₹1L – ₹5L+</p>
              <p className="text-xs text-slate-500">Net operating profit retained in your business bank account.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">4 Ways to Capture Direct Bookings Without Parity Penalties:</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Google Maps 3-Pack Rank:</strong> Rank your Google Business Profile so local travelers call you directly instead of launching an app.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Google Hotel Free Booking Links:</strong> Claim free direct booking listing spots alongside OTA ads inside Google Search.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Direct Value Perks:</strong> Offer early check-in, free high-speed Wi-Fi, or welcome drinks that OTAs cannot duplicate.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Instant WhatsApp Concierge:</strong> Respond within 2 minutes with room photos and instant booking confirmation.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about OTA commission structures and direct booking ROI.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#043f2e] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Form Section */}
      <section id="audit" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#043f2e] bg-[#c8f169]/40 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              LOCK IN YOUR SAVINGS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Get Your Free Direct Booking Audit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Ready to stop losing 20% on every booking? Request a customized audit of your property's OTA commission bleed and direct channels.
            </p>
          </div>

          <AuditForm />
        </div>
      </section>

    </div>
  );
}
