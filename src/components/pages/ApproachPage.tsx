import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Sparkles,
  Zap,
  Globe,
  MessageSquare,
  TrendingUp,
  Users,
  CheckCircle2,
  Layers,
  Search,
  Clock
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const pillars = [
  {
    num: "01",
    tag: "SPEED & CRO ENGINE",
    title: "High-Converting Web Architecture",
    headline: "Eliminating the friction that drives travelers back to OTAs",
    description: "OTAs spend millions making their apps instantaneous and slick. If your property website takes 5+ seconds to load, has broken mobile formatting, or hides pricing behind complex reservation forms, guests immediately bounce back to MakeMyTrip or Booking.com.",
    features: [
      "Sub-1.5 second loading speed optimized for 4G/5G mobile travelers",
      "High-resolution experiential room showcases and suite galleries",
      "Transparent rate disparity callouts showing direct value (e.g. free breakfast, flexible check-in)",
      "Clear, 1-tap booking inquiry triggers on every single screen"
    ],
    metric: "Sub-1.5s Load Time • +68% Booking Conversion Rate"
  },
  {
    num: "02",
    tag: "GOOGLE BUSINESS PROFILE & LOCAL SEO",
    title: "Google Maps 3-Pack & Local Search Dominance",
    headline: "Intercepting high-intent travelers at the exact moment of discovery",
    description: "Over 80% of independent hotel and homestay bookings originate on Google Search and Google Maps. When a traveler searches 'resort near Wardha Road' or 'luxury homestay in Mukteshwar', ranking in the top 3 Map Pack delivers commission-free direct phone calls and website clicks daily.",
    features: [
      "Comprehensive Google Business Profile (GBP) category and attribute optimization",
      "Geotagged property photography highlighting amenities, dining, and scenic views",
      "Proactive Google Review velocity and sentiment response management",
      "Google Hotel Center Free Booking Links integration bypassing OTA aggregators"
    ],
    metric: "Top 3 Map Pack Rank • +45% Organic Direct Calls"
  },
  {
    num: "03",
    tag: "WHATSAPP CONCIERGE FUNNEL",
    title: "Direct WhatsApp Lead & Reservation Automation",
    headline: "Meeting Indian guests on their preferred communication channel",
    description: "Indian travelers don't want to fill out 10-step credit card booking engines. They want instant answers: 'Is room with valley view available this weekend? What is the group tariff?' We build 1-click WhatsApp inquiry pipelines that connect travelers directly to your reservations team with zero delay.",
    features: [
      "1-click WhatsApp inquiry triggers with automated pre-filled booking parameters",
      "Instant greeting flows answering room rates, food menus, and directions 24/7",
      "Standardized closing scripts for your front desk to lock in advance UPI deposits",
      "Seasonal re-engagement campaigns for high-margin repeat weekend stays"
    ],
    metric: "1-Click Direct Enquiries • Instant 2-Minute Response Flow"
  }
];

const blueprintSteps = [
  {
    step: "01",
    phase: "AUDIT",
    title: "Analyze The Bleed & Opportunities",
    description: "We perform a thorough 360° audit of your property's digital footprint: actual OTA commission payout statements, Google Maps ranking across high-intent keywords, mobile page speed scores, and front-desk response times."
  },
  {
    step: "02",
    phase: "BLUEPRINT",
    title: "Architect The Direct Booking Funnel",
    description: "We map out an actionable roadmap addressing OTA rate parity traps, defining direct-booking value perks (complimentary high tea, early check-in), and restructuring your Google Business Profile categories."
  },
  {
    step: "03",
    phase: "ACTIVATE",
    title: "Deploy Channels & Conversion Tech",
    description: "We deploy sub-second mobile website optimizations, set up Google Hotel Center free booking links, integrate WhatsApp lead triggers, and optimize local citation authority across Nagpur and regional destinations."
  },
  {
    step: "04",
    phase: "RETAIN",
    title: "Scale Direct Bookings & Guest Database",
    description: "Every guest who books direct belongs to your property. We establish guest CRM workflows to nurture repeat visits, family reunions, and corporate retreats without paying middleman fees ever again."
  }
];

const faqs = [
  {
    question: "What makes GrowGuest's methodology different from generic digital marketing agencies?",
    answer: "Generic agencies run vanity social media posts and broad ads for e-commerce or retail. GrowGuest specializes exclusively in hospitality (hotels, resorts, homestays). Our founder Swapneel Shirsat brings 18+ years of marketing experience and 10+ years directly inside hospitality, focusing purely on RevPAR, ADR, and cutting 18-25% OTA commission bleed."
  },
  {
    question: "Do we need to stop using MakeMyTrip or Booking.com to use this approach?",
    answer: "No. Our approach does not require cutting off OTAs overnight. OTAs serve as a 'billboard' for initial traveler discovery. Our methodology ensures that when travelers inevitably look up your property on Google, they find your optimized Google Business Profile and fast direct website—allowing you to convert 40% to 60%+ of those guests directly."
  },
  {
    question: "How long does it take to see measurable direct booking growth?",
    answer: "Most properties experience significant increases in direct phone calls and WhatsApp inquiries within 30 to 45 days of implementing Google Business Profile optimization and mobile website conversion triggers. Complete OTA dependence reduction scales sustainably over 3 to 6 months."
  },
  {
    question: "Does this methodology work for small independent homestays and boutique resorts?",
    answer: "Yes, this methodology is specifically engineered for independent properties with 4 to 50 rooms. Large chain hotels have multi-crore marketing budgets, but independent properties win decisively through local SEO agility, personalized WhatsApp interactions, and genuine founder-led storytelling."
  }
];

export default function ApproachPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'Methodology & Approach', url: '/approach/' }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build a Direct Booking Pipeline for Independent Hotels & Homestays",
    "description": "GrowGuest's proven 4-step blueprint to reduce OTA commissions and establish a high-margin direct booking channel.",
    "step": blueprintSteps.map((s, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": s.title,
      "text": s.description
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospitality Direct Booking Framework & Growth Methodology",
    "serviceType": "Hospitality Digital Marketing Strategy & Implementation",
    "provider": {
      "@type": "ProfessionalService",
      "name": "GrowGuest Digital Growth for Hospitality",
      "url": "https://growguest.in/",
      "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
      "founder": {
        "@type": "Person",
        "name": "Swapneel Shirsat",
        "jobTitle": "Director & Founder"
      }
    },
    "description": "GrowGuest's proprietary 3-pillar framework combining Web CRO, Google Maps 3-Pack SEO, and WhatsApp automation to eliminate OTA commission leakage.",
    "areaServed": "India"
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
        title="Hospitality Marketing Methodology & Direct Booking Framework | GrowGuest"
        description="GrowGuest's proven 3-pillar hospitality marketing methodology: High-Converting Web Architecture, Google Maps 3-Pack Local SEO, and WhatsApp Automation. Built for hotels and homestays."
        keywords="hospitality marketing methodology, hotel direct booking framework, OTA commission reduction strategy, hotel marketing blueprint, local SEO for hotels Nagpur, hotel conversion architecture, Swapneel Shirsat GrowGuest"
        canonicalUrl="https://growguest.in/approach/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(howToSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-[#043f2e] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#c8f169_0%,_transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              THE GROWGUEST HOSPITALITY FRAMEWORK
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              You Craft The Hospitality.<br />
              <span className="text-[#c8f169]">We Engineer The Pipeline To Fill It.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              A stunning property without a connected direct booking journey surrenders 18% to 25% of its gross revenue to OTAs. Here is the exact 3-pillar framework we use to turn lookers into commission-free direct guests.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-[#c8f169] bg-slate-900/90 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-[#c8f169] font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary: Founder-Led Hospitality Engineering</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                Created by <strong>Swapneel Shirsat</strong> (18+ years digital marketing, 10+ years exclusively inside hospitality), this methodology addresses the root cause of OTA commission bleed: slow websites, invisible Google Maps profiles, and sluggish inquiry handling. By uniting <strong>Speed & CRO</strong>, <strong>Local Google Dominance</strong>, and <strong>WhatsApp Automation</strong>, independent hotels reclaim ₹1,00,000+ to ₹5,00,000+ in annual profit.
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                WhatsApp Strategy Call
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-slate-900 text-slate-300 py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-[#c8f169] flex-shrink-0" />
              <span>Sub-1.5s Web Speed</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Google Maps 3-Pack Dominance</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>1-Click WhatsApp Funnel</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span>18+ Yrs Marketing Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#043f2e] bg-[#c8f169]/30 px-3.5 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
            Core Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Three Pillars of Direct Booking Growth
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Every dollar in direct booking revenue requires three connected gears. When all three run in unison, independent properties consistently beat OTA aggregators.
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#043f2e] bg-slate-100 px-3 py-1 rounded-md mb-4 inline-block">
                    PILLAR {pillar.num} / {pillar.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-[#043f2e] mb-4">
                    {pillar.headline}
                  </p>
                  <div className="inline-block bg-[#043f2e] text-[#c8f169] text-xs font-bold px-3.5 py-1.5 rounded-full">
                    {pillar.metric}
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-600 leading-relaxed text-base">
                    {pillar.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4-Step Operational Blueprint */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c8f169] uppercase tracking-widest block mb-2">
              HOW WE WORK WITH YOU
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              The 4-Step Operational Blueprint
            </h2>
            <p className="text-slate-400 text-lg">
              No generic playbooks. A systematic, step-by-step process tailored to your property's exact location, room count, and current commission leakage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blueprintSteps.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#c8f169]/40 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs font-bold text-[#c8f169] tracking-wider">
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                      {item.phase}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connected Link to Case Studies */}
          <div className="mt-14 text-center">
            <a 
              href="/hospitality-marketing-case-studies/" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold bg-[#c8f169] text-[#043f2e] hover:bg-[#d8f68e] transition-all"
            >
              <span>See Real Case Studies & Property Results</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Verified Property Proof Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#043f2e] uppercase tracking-widest block mb-2">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Field-Tested Across Premier Retreats
          </h2>
          <p className="text-slate-600 text-lg">
            From luxury boutique resorts in Nainital to heritage private villas in North Goa and Nagpur homestays.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                MUKTESHWAR, UTTARAKHAND
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Stone Heritage</h3>
              <p className="text-xs font-semibold text-[#043f2e] mb-4">📈 +42% Direct Bookings via WhatsApp</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Traditional stone cottage retreat. Engineered custom direct rate packages and Google Maps optimization, diverting weekend buyouts from OTAs.
              </p>
            </div>
            <a href="https://thestoneheritage.in/" target="_blank" rel="noopener" className="text-xs font-bold text-[#043f2e] hover:underline inline-flex items-center">
              Visit Property Website ↗
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                RAMGARH, NAINITAL
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Whispering Pines Resort</h3>
              <p className="text-xs font-semibold text-[#043f2e] mb-4">⚡ OTA Share Cut from 75% to 38%</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Tranquil orchard destination resort. Captured top 3 Google Business Profile rankings for Ramgarh family vacations and corporate retreats.
              </p>
            </div>
            <a href="https://whisperingpinesresort.in/" target="_blank" rel="noopener" className="text-xs font-bold text-[#043f2e] hover:underline inline-flex items-center">
              Visit Property Website ↗
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                ASSAGAO, NORTH GOA
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">The Goan House</h3>
              <p className="text-xs font-semibold text-[#043f2e] mb-4">✨ 100% Commission-Free Buyouts</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Exclusive Portuguese heritage villa. Deployed a friction-free WhatsApp concierge reservation pipeline for affluent family and group buyouts.
              </p>
            </div>
            <a href="https://thegoanhouse.com/" target="_blank" rel="noopener" className="text-xs font-bold text-[#043f2e] hover:underline inline-flex items-center">
              Visit Property Website ↗
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#043f2e] uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Methodology & Growth Questions
            </h2>
            <p className="text-slate-600">
              Clear, honest answers about shifting room nights from OTAs to direct channels.
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

      {/* Embedded Audit Form Section */}
      <section id="audit" className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#043f2e] bg-[#c8f169]/40 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
              ZERO RISK · IN-PERSON OR REMOTE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
              Apply This Methodology to Your Property
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
              Request a free 360° direct booking audit. We will inspect your Google Business Profile, site speed, and OTA commission leakage.
            </p>
          </div>

          <AuditForm />
        </div>
      </section>

    </div>
  );
}
