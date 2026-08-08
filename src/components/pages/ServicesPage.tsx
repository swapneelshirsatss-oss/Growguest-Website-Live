import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Globe, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Percent, 
  ChevronDown, 
  ChevronUp,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';
import DirectConnectionEngine from '../DirectConnectionEngine';

const servicesList = [
  {
    id: 'gbp-optimization',
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    title: "Google Business Profile (GBP) Fixes & Map Pack SEO",
    tagline: "Dominating local search when guests search 'Hotels near me' in Nagpur",
    description: "When travelers search for places to stay in Nagpur or nearby hill stations, your property needs to appear in the top 3 Google Map Pack. We optimize your GBP listing, handle category mapping, geotag images, remove duplicate spam listings, and implement automated review acquisition strategies.",
    outcomes: [
      "Top 3 rank on Google Maps for local Nagpur hospitality queries",
      "Direct click-to-call and website traffic without middleman fees",
      "Consistent 5-star Google review growth that builds guest trust"
    ]
  },
  {
    id: 'direct-booking-website',
    icon: <Globe className="w-8 h-8 text-brand-gold" />,
    title: "Direct Booking Website Conversion Fixes",
    tagline: "Turning window shoppers into commission-free direct guests",
    description: "If your website is slow, hard to navigate on mobile, or lacks clear booking call-to-actions, guests will instantly bounce back to MakeMyTrip or Booking.com. We design and build ultra-fast, mobile-first direct booking websites that build instant credibility and feature seamless booking flows.",
    outcomes: [
      "Mobile speed score under 1.5 seconds loading time",
      "Higher website conversion rate turning visitors into direct inquiries",
      "Professional room galleries, clear pricing, and instant trust badges"
    ]
  },
  {
    id: 'local-seo-nagpur',
    icon: <Search className="w-8 h-8 text-brand-gold" />,
    title: "Hospitality Local SEO & Content Strategy",
    tagline: "Capturing high-intent travelers searching for stays and dining",
    description: "As a specialized hotel marketing agency in Nagpur, we target location-specific keywords like 'best luxury resort Nagpur', 'homestay near Wardha Road', or 'boutique stay Mukteshwar'. We optimize your on-page metadata, local citations, schema markup, and content to rank above competitors.",
    outcomes: [
      "Targeted organic traffic from travelers with ready-to-book intent",
      "Higher rankings for competitive hotel & resort search terms",
      "Long-term SEO equity that compounds without paying per click"
    ]
  },
  {
    id: 'whatsapp-automation',
    icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
    title: "WhatsApp Booking Engine & Lead Automation",
    tagline: "Instant responses that convert casual inquiries into paid bookings",
    description: "In India, guests love booking directly via WhatsApp. We integrate one-click WhatsApp chat triggers on your website, set up professional greeting auto-responders, and equip your staff with high-converting response scripts to close bookings before guests look elsewhere.",
    outcomes: [
      "Instant 24/7 inquiry response flow for room availability",
      "Fewer abandoned guest inquiries and higher closing rates",
      "Direct relationship with guests for repeat visits & upsells"
    ]
  }
];

const faqs = [
  {
    question: "Why should my hotel hire a specialized hospitality digital marketing agency in Nagpur?",
    answer: "Generic agencies don't understand OTA commission structures, seasonality, or local Nagpur guest behavior. As a hospitality-exclusive consultant, GrowGuest focuses strictly on one metric: increasing direct, commission-free bookings while reducing your dependence on OTAs like MakeMyTrip and Booking.com."
  },
  {
    question: "How fast can we see results from Google Business Profile optimization?",
    answer: "GBP optimization and local citation cleanups usually yield noticeable improvements in Google Maps visibility and direct phone calls within 14 to 30 days. Full organic SEO results compound over 60 to 90 days."
  },
  {
    question: "Will you help my property cut OTA commissions?",
    answer: "Yes! OTA commissions range between 15% and 25% per booking. Our entire service stack — from local SEO to direct booking website conversion fixes — is built to capture travelers directly on Google so they book straight with your front desk."
  },
  {
    question: "Do you offer in-person consultations in Nagpur?",
    answer: "Absolutely. We are based in Nagpur (Besa-Pipla Rd) and regularly conduct in-person audits for hotel owners across Wardha Road, Dharampeth, Civil Lines, and Sadar. We also serve property owners in Uttarakhand hill stations like Mukteshwar and Ramgarh."
  }
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyRooms, setMonthlyRooms] = useState<number>(300);
  const [avgRoomPrice, setAvgRoomPrice] = useState<number>(3500);

  const breadcrumbItems = [
    { name: 'Services', url: '/hotel-digital-marketing-services' }
  ];

  const otaCommissionRate = 0.18;
  const otaBookingsPortion = 0.40;
  const otaRoomsMonthly = monthlyRooms * otaBookingsPortion;
  const totalOtaCommissionsMonthly = otaRoomsMonthly * avgRoomPrice * otaCommissionRate;
  const potentialDirectSavingsYearly = totalOtaCommissionsMonthly * 0.6 * 12;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hotel Digital Marketing Services",
    "name": "Hotel Digital Marketing Services Nagpur | GrowGuest",
    "provider": {
      "@type": "ProfessionalService",
      "name": "GrowGuest — Digital Marketing Agency for Hotels & Resorts",
      "url": "https://growguest.in/"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Nagpur"
    },
    "description": "GBP optimisation, website fixes & SEO built for hotels and homestays. Free Direct Booking Audit included. Serving Nagpur & beyond.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospitality Digital Marketing Offerings",
      "itemListElement": servicesList.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Hotel Digital Marketing Services Nagpur | GrowGuest"
        description="GBP optimisation, website fixes & SEO built for hotels and homestays. Free Direct Booking Audit included. Serving Nagpur & beyond."
        keywords="digital marketing agency for hotels Nagpur, hospitality digital marketing consultant India, hotel marketing agency Nagpur, GBP optimisation for hotels, hotel direct booking website, local SEO for resorts Nagpur"
        canonicalUrl="https://growguest.in/hotel-digital-marketing-services"
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
      <section className="relative bg-brand-teal text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#C99A2E_0%,_transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Boutique Hospitality Agency — Nagpur & Beyond
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Hotel Digital Marketing Services <span className="text-brand-gold">in Nagpur</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8"
            >
              Custom Google Business Profile optimization, website conversion fixes, and local SEO engineered specifically for independent hotels, resorts, and homestays to stop OTA commission bleed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
            >
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-brand-teal bg-brand-gold hover:bg-brand-gold-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Claim Free Direct Booking Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Speak with Consultant
              </a>
            </motion.div>
          </div>

          {/* Interactive Direct Connection Engine Banner */}
          <DirectConnectionEngine />

        </div>
      </section>

      <section className="bg-slate-900 text-slate-300 py-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-medium">
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>Nagpur Local Agency</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Percent className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Cut 15-25% OTA Fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>Rank #1 on Google Maps</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span>WhatsApp Native Booking</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mb-4">
            End-to-End Hotel Digital Marketing Stack
          </h2>
          <p className="text-slate-600 text-lg">
            No vague metrics or useless impressions. Every service we deliver is designed to put your property directly in front of guests who are ready to book.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-brand-teal/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2 block">
                  {service.tagline}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-4">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                  Expected Business Outcomes:
                </span>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-brand-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">
                  Direct Booking ROI Simulator
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  How Much Are OTAs Costing Your Hotel Every Year?
                </h2>
                <p className="text-slate-300 text-base mb-8">
                  Adjust the sliders to calculate your current estimated OTA commission loss and see how much revenue you recover by shifting guests to direct booking.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Total Booked Rooms Per Month:</span>
                      <span className="text-brand-gold font-bold">{monthlyRooms} rooms</span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="1000" 
                      step="25"
                      value={monthlyRooms} 
                      onChange={(e) => setMonthlyRooms(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Average Room Night Tariff (₹):</span>
                      <span className="text-brand-gold font-bold">₹{avgRoomPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="15000" 
                      step="500"
                      value={avgRoomPrice} 
                      onChange={(e) => setAvgRoomPrice(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-950 p-8 rounded-2xl border border-brand-gold/30 text-center space-y-6">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block mb-1">
                    Estimated Monthly OTA Commission Paid
                  </span>
                  <span className="text-3xl md:text-4xl font-extrabold text-red-400">
                    ₹{Math.round(totalOtaCommissionsMonthly).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs text-brand-gold uppercase tracking-widest font-semibold block mb-1">
                    Potential Yearly Revenue Recovered With GrowGuest
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-400">
                    ₹{Math.round(potentialDirectSavingsYearly).toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-slate-400 pt-2">
                  *Based on shifting 60% of current OTA bookings to direct website & Google Map Pack inquiries.
                </p>

                <a 
                  href="#audit" 
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full text-brand-teal font-bold bg-brand-gold hover:bg-brand-gold-light transition-all shadow-md"
                >
                  Stop The OTA Bleed — Request Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mb-4">
            Our 4-Step Direct Booking Implementation
          </h2>
          <p className="text-slate-600 text-lg">
            We follow a structured, founder-led execution process to transform your property’s digital presence into a direct booking engine.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Free Direct Booking Audit",
              desc: "We analyze your Google Business Profile, website speed, OTA visibility, and local Nagpur search ranking gaps."
            },
            {
              step: "02",
              title: "GBP & Local Citation Setup",
              desc: "We optimize map listings, fix categories, eliminate spam competitors, and optimize local citations."
            },
            {
              step: "03",
              title: "Conversion Engine Build",
              desc: "We fix your website user experience, add mobile booking CTAs, and integrate instant WhatsApp booking triggers."
            },
            {
              step: "04",
              title: "Growth & Retention",
              desc: "Continuous local SEO rank monitoring, review management, and monthly performance reports."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
              <span className="text-4xl font-black text-brand-teal/20 mb-3 block">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Got questions about our hotel digital marketing services in Nagpur? Here are direct answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
