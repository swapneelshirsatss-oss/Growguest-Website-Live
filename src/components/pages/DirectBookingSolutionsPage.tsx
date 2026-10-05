import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Percent, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Sparkles,
  Zap,
  Lock,
  Globe,
  MapPin,
  MessageSquare,
  Users
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';
import WhatsAppOtaBypass from '../WhatsAppOtaBypass';

const comparisonMatrix = [
  {
    feature: "Commission Per Booking",
    ota: "15% - 25% Fee Every Single Room Night",
    growguest: "0% Commission (100% Revenue Kept)",
    isWinner: true
  },
  {
    feature: "Guest Data Ownership",
    ota: "Masked Emails & Phone Numbers (OTA owns guest)",
    growguest: "Direct Phone & Email Access for Repeat Stays",
    isWinner: true
  },
  {
    feature: "Brand Control & Visibility",
    ota: "Competitor Ads Shown Beside Your Property Listing",
    growguest: "100% Dedicated Custom Website & Local Google Ranking",
    isWinner: true
  },
  {
    feature: "Payment Payout Speed",
    ota: "Delayed Weekly/Monthly Payout Cycles",
    growguest: "Instant Payouts Direct to Front Desk UPI / Bank Account",
    isWinner: true
  },
  {
    feature: "Inquiry Response Time",
    ota: "Sluggish Chat Systems with High Abandonment",
    growguest: "1-Click Direct WhatsApp Instant Auto-Response Flow",
    isWinner: true
  }
];

const pillars = [
  {
    icon: <MapPin className="w-8 h-8 text-[#dfad3c]" />,
    title: "1. Google Local Map Pack Dominance",
    subtitle: "Intercepting travelers before they launch OTA apps",
    description: "80%+ of hotel searches start on Google Maps. We optimize your Google Business Profile, geotag room photos, manage reviews, and rank your property in the top 3 map pack so local travelers click 'Call' or 'Visit Website' directly.",
    metrics: "+45% increase in direct calls within 30 days"
  },
  {
    icon: <Globe className="w-8 h-8 text-[#dfad3c]" />,
    title: "2. Fast Mobile Direct Booking Web Engine",
    subtitle: "Eliminating friction that causes guests to bounce back to OTAs",
    description: "OTAs spend millions making their app feel instant. We build lightning-fast, mobile-friendly websites with clear room galleries, direct pricing, and prominent booking triggers so lookers convert into bookers without hesitation.",
    metrics: "Sub-1.5s load speed & +68% booking conversion rate"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-[#dfad3c]" />,
    title: "3. Direct WhatsApp Lead Automation",
    subtitle: "Meeting Indian guests on their favorite communication app",
    description: "Indian travelers prefer quick, human answers over filling out long reservation forms. We integrate 1-click WhatsApp booking buttons with automated greeting flows and staff closing scripts to instantly capture room inquiries.",
    metrics: "Zero lost room leads during off-peak hours"
  },
  {
    icon: <Users className="w-8 h-8 text-[#dfad3c]" />,
    title: "4. Guest Data Ownership & Repeat Stay Loop",
    subtitle: "Building long-term asset value instead of renting guest traffic",
    description: "Every guest who books direct belongs to your property. We help you build a guest CRM database to send seasonal offers, corporate booking deals, and return visit promotions directly without paying OTA middleman fees.",
    metrics: "+30% repeat guest stays year-over-year"
  }
];

const faqs = [
  {
    question: "What are hotel direct booking solutions?",
    answer: "Hotel direct booking solutions are digital marketing systems — including Google Business Profile optimization, local SEO, mobile-optimized direct booking websites, and WhatsApp inquiry engines — engineered to capture guest bookings directly on your own channels without paying 15-25% OTA commissions."
  },
  {
    question: "Can small independent hotels and homestays compete with OTAs on Google?",
    answer: "Yes! While OTAs spend heavily on broad national ads, independent hotels and homestays have a huge unfair advantage in Local Map Pack search. When someone searches 'hotel near Wardha Road' or 'resort in Nagpur', Google prioritizes local Google Business Profiles over OTA aggregators."
  },
  {
    question: "Do we need to stop using MakeMyTrip or Booking.com completely?",
    answer: "No. You don't need to exit OTAs entirely. The smart strategy is to use OTAs as a billboard for initial discovery while building a robust direct pipeline so 50%+ of your total room nights book commission-free on your own site."
  },
  {
    question: "How does GrowGuest help reduce OTA commissions in Nagpur?",
    answer: "GrowGuest is a founder-led boutique consultancy based in Nagpur. We conduct in-person property audits, fix your Google Business Profile, optimize your site for local keywords, and implement WhatsApp booking flows tailored to Indian travelers."
  }
];

export default function DirectBookingSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyRooms, setMonthlyRooms] = useState<number>(250);
  const [roomTariff, setRoomTariff] = useState<number>(4000);

  const breadcrumbItems = [
    { name: 'Direct Booking Solutions', url: '/hotel-direct-booking-solutions/' }
  ];

  const avgOtaCommission = 0.20;
  const otaShare = 0.45;
  const otaNightsMonthly = monthlyRooms * otaShare;
  const otaFeesMonthly = otaNightsMonthly * roomTariff * avgOtaCommission;
  const yearlySavings = otaFeesMonthly * 0.65 * 12;

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel Direct Booking Solutions & Strategy",
    "serviceType": "Direct Booking Engine & OTA Reduction Strategy",
    "provider": {
      "@type": "ProfessionalService",
      "name": "GrowGuest Digital Growth for Hospitality",
      "url": "https://growguest.in/",
      "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
      "director": {
        "@type": "Person",
        "name": "Swapneel Shirsat",
        "jobTitle": "Director & Founder"
      }
    },
    "description": "Eliminate 15-25% OTA commissions with GrowGuest's end-to-end direct booking pipeline. Google Map Pack, speed-optimized website & WhatsApp booking engine.",
    "areaServed": "Nagpur"
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#141716]">
      <SEO
        title="Hotel Direct Booking Solutions & OTA Reduction Strategy | GrowGuest"
        description="Eliminate 15-25% OTA commissions with GrowGuest's end-to-end direct booking pipeline. Google Map Pack, speed-optimized website & WhatsApp booking engine."
        keywords="hotel direct booking solutions, reduce OTA commissions hotel, direct booking strategy for hotels, OTA commission reduction Nagpur, hotel website booking engine, direct booking conversion rate"
        canonicalUrl="https://growguest.in/hotel-direct-booking-solutions/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-[#071510] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#dfad3c_0%,_transparent_65%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/15 border border-[#dfad3c]/30 text-[#dfad3c] text-xs font-mono font-semibold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#dfad3c] animate-pulse" />
              <span>DIRECT BOOKING PIPELINE ARCHITECTURE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Hotel Direct Booking Solutions:<br />
              <span className="font-serif italic font-normal text-[#dfad3c]">Stop Paying 20% OTA Commissions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              We build high-converting direct booking engines for independent hotels, resorts, and homestays. Dominate Google Map Pack, own your guest relationships, and convert lookers into commission-free direct bookings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-[#dfad3c] bg-[#0c2018]/95 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-[#dfad3c] font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary: Direct Booking Strategy</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                A <strong className="text-white">hotel direct booking solution</strong> combines Google Business Profile (GBP) map optimization, sub-1.5s website loading speed, and 1-click WhatsApp lead triggers. Shifting just 30% of room nights from OTAs (MakeMyTrip, Agoda, Booking.com) to direct bookings saves independent hotels ₹3,00,000+ annually in middleman commissions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="#audit"
                className="btn btn-gold"
              >
                <span>Get Free Direct Booking Audit</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#25d366]" />
                <span>WhatsApp Strategy Call</span>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Metrics Bar */}
      <section className="bg-[#0c2018] text-slate-300 py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
              <Percent className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>0% Commission Kept</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#dfad3c] flex-shrink-0" />
              <span>+68% Direct Inquiries</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Lock className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>100% Guest Data Ownership</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#25d366] flex-shrink-0" />
              <span>Founder-Led Nagpur Agency</span>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppOtaBypass />

      {/* OTA Comparison Matrix */}
      <section id="disparity" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            THE HARD TRUTH ABOUT OTAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071510] mb-4">
            OTAs vs. <em className="font-serif italic font-normal text-[#c99a2e] not-italic">GrowGuest Direct Pipeline</em>
          </h2>
          <p className="text-[#546059] text-lg">
            See how relying on third-party aggregators drains your property profit compared to owning your direct booking engine.
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-[rgba(16,41,32,0.08)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#071510] text-white">
                <th className="p-5 sm:p-6 text-sm sm:text-base font-bold">Key Feature</th>
                <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-red-400">OTA Dependence (MakeMyTrip/Agoda)</th>
                <th className="p-5 sm:p-6 text-sm sm:text-base font-bold text-[#dfad3c] bg-[#0c2018]">GrowGuest Direct Pipeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonMatrix.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-5 sm:p-6 font-semibold text-[#071510] text-sm sm:text-base">
                    {item.feature}
                  </td>
                  <td className="p-5 sm:p-6 text-slate-600 text-sm sm:text-base">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item.ota}</span>
                    </div>
                  </td>
                  <td className="p-5 sm:p-6 text-slate-900 font-semibold text-sm sm:text-base bg-[#fbf6e8]/40">
                    <div className="flex items-start text-emerald-900">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item.growguest}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-[#f7f5ef] border-y border-[rgba(16,41,32,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071510] mb-4">
              The 4 Pillars of a <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Direct Booking Engine</em>
            </h2>
            <p className="text-[#546059] text-lg">
              We implement an integrated marketing strategy that turns search intent into confirmed direct revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[rgba(16,41,32,0.08)] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#fbf6e8] rounded-2xl flex items-center justify-center mb-6 border border-[#dfad3c]/20">
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#c99a2e] mb-1 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#071510] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[#546059] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="bg-[#f7f5ef] p-4 rounded-xl border border-[rgba(16,41,32,0.08)]">
                  <span className="text-xs font-mono font-semibold text-[#071510] uppercase tracking-wider block mb-1">
                    Proven Result:
                  </span>
                  <span className="text-[#c99a2e] font-bold text-sm">
                    {pillar.metrics}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Savings Calculator Section */}
      <section className="py-20 bg-[#071510] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0c2018] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-mono font-semibold text-[#dfad3c] uppercase tracking-widest mb-3">
                  ROI SAVINGS CALCULATOR
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Calculate Your Yearly <span className="font-serif italic font-normal text-[#dfad3c]">OTA Commission Bleed</span>
                </h2>
                <p className="text-slate-300 text-base mb-8">
                  Move the sliders to calculate how much profit you lose to OTAs and how much you keep with a GrowGuest direct booking engine.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Booked Room Nights / Month:</span>
                      <span className="text-[#dfad3c] font-bold">{monthlyRooms} nights</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="1000" 
                      step="25"
                      value={monthlyRooms} 
                      onChange={(e) => setMonthlyRooms(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Average Tariff Per Night (₹):</span>
                      <span className="text-[#dfad3c] font-bold">₹{roomTariff.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="15000" 
                      step="500"
                      value={roomTariff} 
                      onChange={(e) => setRoomTariff(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#071510] p-8 rounded-2xl border border-[#dfad3c]/30 text-center space-y-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block mb-1">
                    Monthly OTA Commissions Paid
                  </span>
                  <span className="text-3xl md:text-4xl font-extrabold text-red-400">
                    ₹{Math.round(otaFeesMonthly).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-[#dfad3c] uppercase tracking-widest font-semibold block mb-1">
                    Yearly Revenue Saved With Direct Engine
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-400">
                    ₹{Math.round(yearlySavings).toLocaleString('en-IN')}
                  </span>
                </div>

                <a 
                  href="#audit" 
                  className="btn btn-gold w-full justify-center"
                >
                  <span>Start Saving Now — Claim Free Audit</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7f5ef] border-t border-[rgba(16,41,32,0.08)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              QUESTIONS & ANSWERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] mb-3">
              Direct Booking <em className="font-serif italic font-normal text-[#c99a2e] not-italic">FAQ</em>
            </h2>
            <p className="text-[#546059]">
              Clear answers to common questions about reducing OTA commissions and building a direct booking strategy.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-[rgba(16,41,32,0.08)] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-[#071510] text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#c99a2e] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[#546059] leading-relaxed border-t border-slate-100 pt-4 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuditForm />
    </div>
  );
}
