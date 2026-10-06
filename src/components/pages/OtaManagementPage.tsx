import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Percent, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  RefreshCw, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal,
  Eye,
  AlertTriangle
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const otaServices = [
  {
    icon: <Eye className="w-8 h-8 text-[#dfad3c]" />,
    title: "100% Content Score & Listing Optimization",
    subtitle: "MakeMyTrip, Booking.com, Agoda & Goibibo algorithm optimization",
    description: "OTAs rank listings with high content scores higher in search results. We restructure room categories, audit high-definition photos, tag amenities accurately, and craft high-converting room descriptions to maximize organic OTA impressions.",
    tags: ["95%+ Score Target", "HD Room Photos", "Amenity Tagging"]
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#dfad3c]" />,
    title: "Rate Parity Management & The Billboard Strategy",
    subtitle: "Use OTAs as a discovery billboard without losing margin",
    description: "Over 65% of guests discover your hotel on MakeMyTrip or Booking.com, then search for your official website. We maintain rate parity on base tariffs while engineering exclusive direct perks (free breakfast, early check-in, room upgrades) that compel them to book direct.",
    tags: ["Billboard Effect", "Direct Price Perks", "Parity Defense"]
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-[#dfad3c]" />,
    title: "Channel Manager & Inventory Distribution",
    subtitle: "Zero overbookings and automated real-time calendar sync",
    description: "We configure and manage leading hospitality channel managers (Staah, AxisRooms, eZee, RateGain, Cloudbeds). We balance room allocations across platforms, optimize minimum length of stay (MLOS), and automate real-time availability.",
    tags: ["Channel Manager Sync", "Zero Overbooking", "Occupancy Boost"]
  },
  {
    icon: <SlidersHorizontal className="w-8 h-8 text-[#dfad3c]" />,
    title: "Dynamic Pricing & Promotional Strategy",
    subtitle: "Capture maximum revenue during peak weekends and low seasons",
    description: "Blindly turning on OTA discount campaigns drains property profits. We design surgical promotional campaigns, flash sales, and advance purchase rates, ensuring you gain visibility without eroding your room yields.",
    tags: ["Yield Management", "Seasonal Rates", "Smart Promotions"]
  },
  {
    icon: <Star className="w-8 h-8 text-[#dfad3c]" />,
    title: "OTA Review & Reputation Elevation",
    subtitle: "Turn guest feedback into higher search ranking and booking trust",
    description: "Property review scores directly dictate OTA placement. We provide a structured system to collect 5-star reviews from satisfied check-outs and craft professional, keyword-rich responses to every review on MMT, Agoda, and Booking.com.",
    tags: ["5-Star Elevation", "Review Turnaround", "Trust Building"]
  },
  {
    icon: <Layers className="w-8 h-8 text-[#dfad3c]" />,
    title: "OTA-to-Direct Guest Conversion Funnels",
    subtitle: "Convert one-time OTA guests into repeat direct bookers forever",
    description: "Never pay commission twice for the same guest. We implement seamless front-desk check-in QR registration, Wi-Fi login captures, and WhatsApp post-checkout feedback loops to secure repeat stays at 0% commission.",
    tags: ["0% Repeat Comm.", "Guest Data Capture", "WhatsApp Loops"]
  }
];

const faqs = [
  {
    question: "What is OTA Management and why is it essential for hotels?",
    answer: "OTA Management is the end-to-end administration and optimization of your property listings on Online Travel Agencies like MakeMyTrip, Booking.com, Agoda, and Goibibo. It includes listing ranking, room content optimization, rate parity, channel manager synchronization, and promotional strategy to maximize bookings while keeping commission payouts under control."
  },
  {
    question: "Should our property stop using OTAs completely?",
    answer: "No. OTAs spend billions on marketing and brand awareness, making them an essential top-of-funnel discovery engine. The goal is not to abandon OTAs, but to use them strategically as a 'billboard' to attract travelers, and then leverage rate parity perks, direct booking websites, and front-desk capture to convert repeat and new guests into direct, commission-free bookers."
  },
  {
    question: "How does GrowGuest help fix rate parity issues across OTAs?",
    answer: "OTAs frequently undercut direct hotel rates using unapproved coupons and unauthorized third-party rate wholesale feeds. We monitor your rate distribution daily, identify rate parity violations, and coordinate with OTA account managers to lock your pricing hierarchy so your direct site remains the best place to book."
  },
  {
    question: "Which channel managers does GrowGuest support?",
    answer: "We manage and integrate all major hospitality channel managers, including Staah, AxisRooms, eZee Technosys, RateGain, Cloudbeds, and SiteMinder. If you don't have a channel manager yet, we help you select and configure the right platform for your property size."
  },
  {
    question: "How does GrowGuest convert OTA guests into direct bookers?",
    answer: "We implement on-property guest capture systems: digital Wi-Fi registration, customized WhatsApp concierge greetings, and front-desk direct loyalty cards. When an OTA guest stays at your property once, our system captures their direct contact details so their next stay is booked 100% directly with zero OTA commission."
  }
];

export default function OtaManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyOtaBookings, setMonthlyOtaBookings] = useState<number>(120);
  const [avgTariff, setAvgTariff] = useState<number>(4200);

  const breadcrumbItems = [
    { name: 'Services', url: '/hotel-digital-marketing-services/' },
    { name: 'OTA Management', url: '/hotel-ota-management-services/' }
  ];

  // Calculated estimates
  const monthlyOtaRevenue = monthlyOtaBookings * avgTariff;
  const currentOtaCommission = monthlyOtaRevenue * 0.20;
  // With GrowGuest OTA optimization + Direct conversion, 40% shifted to direct
  const convertedDirectBookings = Math.round(monthlyOtaBookings * 0.40);
  const annualSavedCommission = convertedDirectBookings * avgTariff * 0.20 * 12;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel OTA Management Services — MakeMyTrip, Booking.com & Agoda",
    "serviceType": "Hospitality OTA Distribution & Revenue Management",
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
    "description": "Comprehensive OTA management for hotels, resorts, and homestays. Listing optimization on MakeMyTrip, Agoda, Booking.com, rate parity defense, and direct guest conversion systems.",
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
  };  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#141716]">
      <SEO
        title="Hotel OTA Management Services | MakeMyTrip, Booking.com & Agoda | GrowGuest"
        description="Professional OTA management for hotels, resorts, and homestays. Listing score optimization, rate parity defense, channel manager sync, and converting OTA guests into direct bookers."
        keywords="hotel OTA management, MakeMyTrip management for hotels, booking com listing optimization, agoda hotel management, rate parity for hotels, channel manager setup hotel, OTA commission reduction"
        canonicalUrl="https://growguest.in/hotel-ota-management-services/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Hero Section */}
      <section className="subpage-hero">
        <div className="container">
          <div className="breadcrumbs-wrapper">
            <Breadcrumbs items={breadcrumbItems} maxWidth="full" className="px-0 py-0" />
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="hero-pill-badge mb-6"
            >
              <span className="pulse-dot" />
              <span>STRATEGIC CHANNEL & YIELD OPTIMIZATION</span>
            </motion.div>

            <motion.h1 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title mb-6"
            >
              Hotel OTA Management: <br className="hidden sm:inline" /><em>Turn Aggregators into Direct Billboards</em>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-desc mb-8"
            >
              Take back control of your room inventory on MakeMyTrip, Booking.com, and Agoda. We boost your OTA ranking scores while converting OTA guests into commission-free direct bookers.
            </motion.p>

            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-actions"
            >
              <a
                href="/free-hotel-digital-marketing-audit/"
                className="btn btn-gold"
              >
                <span>Claim Free OTA Audit</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#25d366]" />
                <span>Discuss OTA Strategy</span>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#0c2018] text-slate-300 py-6 border-y border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-semibold">
            <div className="flex items-center justify-center space-x-2">
              <Building2 className="w-5 h-5 text-[#dfad3c] flex-shrink-0" />
              <span>MMT, Agoda, Booking.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>95%+ Content Quality Score</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Percent className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>Rate Parity Protection</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-[#25d366] flex-shrink-0" />
              <span>Convert 40%+ to Direct</span>
            </div>
          </div>
        </div>
      </section>

      {/* OTA Bleed Breakdown */}
      <section className="py-16">
        <div className="container">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[rgba(16,41,32,0.08)] shadow-sm">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                COMMISSION REALITY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] mb-4">
                Stop Being Held Hostage by <em className="font-serif italic font-normal text-[#c99a2e] not-italic">OTA Algorithms</em>
              </h2>
              <p className="text-[#546059] text-base sm:text-lg leading-relaxed">
                When an independent hotel leaves OTA listings unattended, OTAs run wild: undercutting official room prices, pushing competitor hotels in your listing recommendations, and eating 20% of your hard-earned revenue.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center space-x-3 mb-4 text-red-700 font-extrabold">
                  <AlertTriangle className="w-6 h-6" />
                  <h3 className="text-lg">Unmanaged OTA Pitfalls</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#222724]">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Low content scores that bury your property on page 4 of search results.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Uncontrolled discounts and parity violations that undercut your direct site.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Overbooking disasters and double-sold rooms caused by manual inventory updates.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Paying 20% commission repeatedly for returning guests because no contact info was saved.
                  </li>
                </ul>
              </div>

              <div className="bg-[#fbf6e8]/60 p-6 rounded-2xl border border-[#dfad3c]/30">
                <div className="flex items-center space-x-3 mb-4 text-[#071510] font-extrabold">
                  <CheckCircle2 className="w-6 h-6 text-[#25d366]" />
                  <h3 className="text-lg">The GrowGuest OTA Optimization Playbook</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#222724]">
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    95%+ content score across all platforms to capture high organic algorithm rank.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Strict rate parity enforcement with exclusive value-add perks on direct channels.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Automated channel manager sync (Staah, AxisRooms, eZee) with zero overbooking risk.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    On-property guest capture systems that turn first-time OTA guests into direct repeat stays.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 OTA Services Breakdown */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            WHAT WE MANAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071510] mb-4">
            End-to-End OTA Distribution & <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Revenue Management</em>
          </h2>
          <p className="text-[#546059] text-lg leading-relaxed">
            We handle the technical and operational distribution so your property stays fully booked at the highest possible room yield.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otaServices.map((service, index) => (
            <motion.div
              key={index}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[rgba(16,41,32,0.08)] hover:shadow-xl hover:border-[#dfad3c]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#fbf6e8] rounded-2xl flex items-center justify-center mb-6 border border-[#dfad3c]/20 shadow-xs">
                  {service.icon}
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#c99a2e] mb-2 block font-semibold">
                  {service.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-[#071510] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#546059] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,41,32,0.08)]">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-[#f7f5ef] text-[#071510] font-semibold text-xs px-2.5 py-1 rounded-md border border-[rgba(16,41,32,0.08)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Commission Recovery Calculator */}
      <section className="py-20 bg-[#071510] text-white">
        <div className="container">
          <div className="bg-[#0c2018] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-mono font-semibold text-[#dfad3c] uppercase tracking-widest mb-3">
                  COMMISSION RECOVERY CALCULATOR
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  How Much OTA Commission <span className="font-serif italic font-normal text-[#dfad3c]">Can You Recover?</span>
                </h2>
                <p className="text-slate-300 text-base mb-8">
                  Shift just 40% of your OTA bookings to direct channels using GrowGuest's Billboard Effect and on-property guest capture.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Monthly OTA Room Nights:</span>
                      <span className="text-[#dfad3c] font-bold">{monthlyOtaBookings} nights</span>
                    </div>
                    <input 
                      type="range" 
                      min="30" 
                      max="600" 
                      step="10"
                      value={monthlyOtaBookings} 
                      onChange={(e) => setMonthlyOtaBookings(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Average Room Tariff:</span>
                      <span className="text-[#dfad3c] font-bold">₹{avgTariff.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="15000" 
                      step="500"
                      value={avgTariff} 
                      onChange={(e) => setAvgTariff(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#071510] p-8 rounded-2xl border border-[#dfad3c]/30 text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-semibold block mb-1">
                    Annual Commission Saved with GrowGuest
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-400">
                    ₹{Math.round(annualSavedCommission).toLocaleString('en-IN')}
                  </span>
                  <span className="block text-xs text-emerald-200/80 mt-1">
                    Recovered directly into your property profit
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="bg-[#0c2018] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block uppercase">Monthly OTA Fee Paid</span>
                    <span className="text-xl font-bold text-red-400">₹{Math.round(currentOtaCommission).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="bg-[#0c2018] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-[#dfad3c] block uppercase">Monthly Direct Shift</span>
                    <span className="text-xl font-bold text-emerald-400">~{convertedDirectBookings} rooms</span>
                  </div>
                </div>

                <a 
                  href="#audit" 
                  className="btn btn-gold w-full justify-center"
                >
                  <span>Get Free OTA Listing Audit</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7f5ef] border-t border-[rgba(16,41,32,0.08)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              COMMON QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] mb-3">
              Frequently Asked Questions About <em className="font-serif italic font-normal text-[#c99a2e] not-italic">OTA Management</em>
            </h2>
            <p className="text-[#546059]">
              Clear answers on how we manage MakeMyTrip, Agoda, and Booking.com for property owners.
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
