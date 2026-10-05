import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  MapPin, 
  Search, 
  Target, 
  Instagram,
  Building2, 
  MessageSquare, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertTriangle
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const servicesList = [
  {
    id: 'website-design-development',
    number: '01',
    emoji: '🚀',
    icon: <Globe className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Website Design & Development',
    tagline: 'High-Converting & Sub-1.5s Direct Booking Websites',
    bullets: [
      'Sub-1.5 second loading speed built for mobile travelers',
      'High-trust room galleries, transparent rate cards & booking triggers',
      'Friction-free UX preventing bounce-backs to OTA apps'
    ],
    outcome: 'Turn window shoppers into direct bookers with zero middleman fees.',
    link: '/hotel-direct-booking-solutions/'
  },
  {
    id: 'local-seo-gbp',
    number: '02',
    emoji: '📍',
    icon: <MapPin className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Local SEO & Google Business Profile (GBP)',
    tagline: 'Dominating Local Google Maps & Nearby Search 3-Pack',
    bullets: [
      'Complete Google Maps profile category setup & geotagged photos',
      'Spam listing removal and aggressive map pack rankings',
      'Systematic 5-star Google review acquisition & automated replies'
    ],
    outcome: 'Rank #1 on Google Maps for local queries like "hotel near me" or "resort in Nagpur".',
    link: '/free-hotel-digital-marketing-audit/'
  },
  {
    id: 'paid-ads-google-meta',
    number: '03',
    emoji: '🎯',
    icon: <Target className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Paid Ads — Google Ads & Social Media Ads',
    tagline: 'High-ROAS Google Search, Hotel Ads & Instagram Campaigns',
    bullets: [
      'Google Search Ads targeting high-intent traveler booking keywords',
      'Google Hotel Ads showing your direct tariff next to OTA aggregators',
      'Targeted Instagram Reels & Facebook Ads with Click-to-WhatsApp triggers'
    ],
    outcome: 'Immediate high-intent leads and direct bookings with 8.5x+ average ROAS.',
    link: '/hotel-paid-ads-google-meta/'
  },
  {
    id: 'ota-management',
    number: '04',
    emoji: '🏨',
    icon: <Building2 className="w-8 h-8 text-[#dfad3c]" />,
    title: 'OTA Management & Distribution',
    tagline: 'MakeMyTrip, Booking.com & Agoda Optimization',
    bullets: [
      '95%+ OTA listing content scores and high-definition photo audits',
      'Rate parity management & leveraging the Billboard Effect for direct bookings',
      'Channel manager calendar sync (Staah, AxisRooms, eZee) with zero overbookings'
    ],
    outcome: 'Maximum OTA visibility while shifting 40%+ of bookings to 0% direct commission.',
    link: '/hotel-ota-management-services/'
  },
  {
    id: 'social-media-management',
    number: '05',
    emoji: '📸',
    icon: <Instagram className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Social Media Management & Visual Storytelling',
    tagline: 'Cinematic Instagram Reels & Guest Experience Ambiance',
    bullets: [
      'Short-form 4K video reels showcasing suites, dining & mountain views',
      'Monthly strategic content calendars across Instagram & Facebook',
      'Instant DM-to-WhatsApp booking inquiry automation & creator vetting'
    ],
    outcome: 'A captivating social brand that builds guest desire and generates direct reservations.',
    link: '/hospitality-social-media-management/'
  },
  {
    id: 'seo-search-engine-optimization',
    number: '06',
    emoji: '🔍',
    icon: <Search className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Sustainable High-Ranking Google Search Visibility',
    bullets: [
      'Targeted destination keywords ("luxury resort near Nagpur", "homestay Mukteshwar")',
      'Authoritative pillar articles & travel guides that capture traveler research',
      'Technical SEO, speed fixes & Schema.org JSON-LD structured data'
    ],
    outcome: 'Long-term organic traffic that compounds month over month without paying per click.',
    link: '/hospitality-digital-marketing-blog/'
  },
  {
    id: 'whatsapp-booking-flow',
    number: '07',
    emoji: '💬',
    icon: <MessageSquare className="w-8 h-8 text-[#dfad3c]" />,
    title: 'WhatsApp Booking Flow & Lead Automation',
    tagline: '1-Click Direct Chat Reservation Engine for Indian Guests',
    bullets: [
      '1-Click WhatsApp booking triggers embedded on mobile websites',
      'Instant greeting auto-responders for 24/7 room availability queries',
      'Front-desk response scripts to convert chats into confirmed deposits'
    ],
    outcome: 'Faster replies = zero lost inquiries and 3x higher booking close rates.',
    link: '/hotel-direct-booking-solutions/'
  },
  {
    id: 'analytics-lead-automation',
    number: '08',
    emoji: '📊',
    icon: <BarChart3 className="w-8 h-8 text-[#dfad3c]" />,
    title: 'Analytics, Conversion Tracking & Revenue Reports',
    tagline: 'Data-Driven Insights & Transparent Profit Attribution',
    bullets: [
      'Google Analytics 4 (GA4) with custom reservation revenue tracking',
      'Call attribution and Meta Pixel tracking for zero blind spend',
      'Transparent weekly reports showing direct bookings vs OTA commission saved'
    ],
    outcome: 'Complete clarity on marketing ROI with measurable direct revenue growth.',
    link: '/free-hotel-digital-marketing-audit/'
  }
];

const faqs = [
  {
    question: "Why should my hotel choose GrowGuest for digital marketing?",
    answer: "Unlike generic digital agencies that treat hotels like retail stores, GrowGuest specializes exclusively in hospitality. Founder Swapneel Shirsat brings 18+ years of digital marketing expertise with 10+ years inside hospitality. We focus on measurable business outcomes: eliminating 18-25% OTA commissions, ranking #1 on Google Maps, and driving high-converting direct guest bookings."
  },
  {
    question: "How do your Paid Ads (Google & Meta) differ from standard ad agencies?",
    answer: "We don't waste budget on generic broad keywords or boosted Facebook posts that collect empty likes. We run bottom-of-funnel Google Search and Hotel Ads with negative keyword filtering, paired with cinematic Instagram Reels featuring Click-to-WhatsApp triggers. Our hospitality ad campaigns routinely generate 7x to 14x Return on Ad Spend (ROAS)."
  },
  {
    question: "What does your OTA Management service include?",
    answer: "Our OTA management covers listing score audits (aiming for 95%+ content score on MakeMyTrip, Agoda, and Booking.com), rate parity enforcement, dynamic weekend pricing, channel manager calendar sync (Staah, AxisRooms, eZee), and on-property guest capture systems that turn first-time OTA guests into repeat direct bookers."
  },
  {
    question: "How does Social Media Management generate direct hotel bookings?",
    answer: "We produce aesthetic short-form video reels highlighting room ambiance, food presentation, and local views. Crucially, we set up conversational DM automation that immediately transitions interested viewers from 'How much is a room?' into a 1-click WhatsApp chat with your reservation team, turning video engagement into booked revenue."
  },
  {
    question: "How fast can we expect results from Local SEO & Google Business Profile optimization?",
    answer: "Google Business Profile cleanup, category fixing, and local citation work typically deliver noticeable increases in Google Maps phone calls and directions within 14 to 30 days. Full organic search engine optimization (SEO) builds compounding traffic over 60 to 90 days."
  },
  {
    question: "Can we start with a Free Direct Booking Audit before hiring?",
    answer: "Yes, 100%! We provide an in-depth, zero-obligation 4-point property audit analyzing your Google Map Pack visibility, website loading speed, OTA commission bleed, and local search opportunities delivered directly to WhatsApp within 24 to 48 hours."
  },
  {
    question: "How does GrowGuest solve zero Google visibility and the OTA commission trap?",
    answer: "We deploy a targeted two-step direct revenue system. First, we fix your search engine presence through Google Business Profile optimization, local 3-pack SEO, and high-intent Google Hotel Ads so nearby travelers find your property directly. Second, we eliminate OTA commission bleed by launching a mobile-first direct booking website with 1-click WhatsApp reservation triggers and automated guest retention, shifting 30% to 50%+ of your bookings from 18-25% OTA commissions to 100% direct profit."
  }
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'Services', url: '/hotel-digital-marketing-services/' }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Hospitality Digital Marketing Services",
    "name": "Hotel Digital Marketing Services Nagpur & India | GrowGuest",
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
    "areaServed": "India",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GrowGuest Hospitality Digital Services Catalog",
      "itemListElement": servicesList.map((s, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.tagline
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#141716]">
      <SEO
        title="Hotel Digital Marketing Services Nagpur | GrowGuest"
        description="Comprehensive hospitality marketing by GrowGuest: Website design, Google & Meta Paid Ads, OTA Management, Social Media Management, Local SEO & WhatsApp booking flows."
        keywords="hotel digital marketing services, paid ads for hotels, OTA management make my trip booking com, hospitality social media marketing, local SEO for hotels Nagpur, direct booking engine, hotel marketing agency India"
        canonicalUrl="https://growguest.in/hotel-digital-marketing-services/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      {/* Hero Section */}
      <section className="pt-8 pb-12 lg:pt-10 lg:pb-14 relative">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} className="px-0 pt-0 pb-6" />

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-pill-badge mb-6"
            >
              <span className="pulse-dot" />
              <span>SPECIALIZED HOSPITALITY GROWTH ARCHITECTURE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title mb-6"
            >
              Hospitality Digital Marketing: <em>Services by GrowGuest</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-desc mb-8"
            >
              Struggling with zero Google visibility and bleeding profits to the heavy OTA commission trap? We build end-to-end direct booking engines, local SEO dominance, and high-ROAS paid ads to reclaim your hotel's revenue.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-actions mb-10"
            >
              <a
                href="/free-hotel-digital-marketing-audit/"
                className="btn btn-gold"
              >
                <span>Claim Free Growth Audit</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#25d366]" />
                <span>WhatsApp Consultation</span>
              </a>
            </motion.div>

            {/* Problem Callout: Zero Google Visibility & OTA Commission Trap */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0c2018] border-l-4 border-[#c99a2e] rounded-r-2xl p-6 sm:p-8 shadow-xl text-white border-y border-r border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#dfad3c]/15 border border-[#dfad3c]/30 flex items-center justify-center flex-shrink-0 text-[#dfad3c] mt-1">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#dfad3c] block mb-1">
                      The Dual Trap Costing Property Owners 20%+ In Profit
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-2">
                      Zero Google Visibility & The Heavy OTA Commission Trap
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      When travelers search for stays in your area, being invisible on Google forces you into total reliance on OTAs — surrendering 18% to 25% of your gross revenue on every booking. GrowGuest engineers the exact direct booking systems needed to break this cycle.
                    </p>
                  </div>
                </div>
                <a
                  href="/free-hotel-digital-marketing-audit/"
                  className="btn btn-gold text-xs sm:text-sm whitespace-nowrap shrink-0"
                >
                  <span>Fix Your Leaks</span>
                  <span className="btn-arrow">↗</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16">
        <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            OUR CORE OFFERINGS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071510] mb-4">
            End-to-End <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Digital Services</em>
          </h2>
          <p className="text-[#546059] text-lg leading-relaxed">
            Engineered specifically to eliminate Google search invisibility and break free from OTA commission bleed — capturing high-intent travelers directly for independent hotels, resorts, and homestays.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-[rgba(16,41,32,0.08)] hover:shadow-xl hover:border-[#dfad3c]/40 transition-all flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-[#0c2018] text-[#dfad3c] border-b border-l border-[#dfad3c]/20 px-4 py-1.5 rounded-bl-2xl font-mono text-xs font-bold">
                {service.number}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-[#fbf6e8] rounded-2xl flex items-center justify-center border border-[#dfad3c]/20 text-[#dfad3c]">
                    {service.icon}
                  </div>
                  <span className="text-2xl">{service.emoji}</span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#c99a2e] mb-2 block font-semibold">
                  {service.tagline}
                </span>

                <h3 className="text-2xl font-extrabold text-[#071510] mb-4 leading-snug">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-[#222724] leading-snug font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#25d366] mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-[#f7f5ef] rounded-2xl p-4 border border-[rgba(16,41,32,0.08)] mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#c99a2e] block mb-1 font-semibold">
                    Expected Business Result:
                  </span>
                  <p className="text-xs text-[#141716] font-semibold leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                {service.link && (
                  <a
                    href={service.link}
                    className="inline-flex items-center text-sm font-bold text-[#071510] group-hover:text-[#c99a2e] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
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
              Frequently Asked <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Questions</em>
            </h2>
            <p className="text-[#546059]">
              Have questions about our hospitality digital marketing services? Here are straight answers.
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
