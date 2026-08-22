import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  MapPin, 
  Search, 
  Target, 
  Edit3, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const services6List = [
  {
    id: 'website-design-development',
    number: '01',
    emoji: '🚀',
    icon: <Globe className="w-8 h-8 text-[#043f2e]" />,
    title: 'Website Design & Development',
    tagline: 'High-Converting & Mobile-Responsive Web Solutions',
    bullets: [
      'Fast, mobile-responsive business websites & landing pages',
      'High-converting design built for lead generation',
      'Speed optimization, maintenance & security'
    ],
    outcome: 'Turn window shoppers into direct inquiries & phone calls.'
  },
  {
    id: 'local-seo-gbp',
    number: '02',
    emoji: '📍',
    icon: <MapPin className="w-8 h-8 text-[#043f2e]" />,
    title: 'Local SEO & Google Business Profile (GBP)',
    tagline: 'Dominating Local Maps & Nearby Search Visibility',
    bullets: [
      'Complete Google Maps profile setup & optimization',
      'Local ranking improvements to attract nearby customers',
      'Review management & regular promotional updates'
    ],
    outcome: 'Rank #1 on Google Maps for local queries.'
  },
  {
    id: 'seo-search-engine-optimization',
    number: '03',
    emoji: '🔍',
    icon: <Search className="w-8 h-8 text-[#043f2e]" />,
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Sustainable High-Ranking Google Search Visibility',
    bullets: [
      'Website audits & keyword optimization',
      'High-ranking blog content strategy',
      'Technical fixes to boost Google search visibility'
    ],
    outcome: 'Long-term organic traffic that compounds without paying per click.'
  },
  {
    id: 'paid-ads-lead-gen',
    number: '04',
    emoji: '🎯',
    icon: <Target className="w-8 h-8 text-[#043f2e]" />,
    title: 'Paid Ads & Lead Generation',
    tagline: 'Precision Audience Targeting & High-ROI Campaigns',
    bullets: [
      'Targeted Google Search & Display Ads',
      'Meta Ads (Facebook & Instagram campaigns)',
      'Precise audience targeting, conversion tracking & ROI reports'
    ],
    outcome: 'Immediate high-intent leads delivered directly to your inbox.'
  },
  {
    id: 'content-social-media',
    number: '05',
    emoji: '✍️',
    icon: <Edit3 className="w-8 h-8 text-[#043f2e]" />,
    title: 'Content & Social Media Marketing',
    tagline: 'Brand Storytelling, Copywriting & Visual Creatives',
    bullets: [
      'Professional website copywriting & SEO articles',
      'Social media post design & monthly content calendars',
      'Promotional creatives & brand design assets'
    ],
    outcome: 'Consistent brand authority and trust across all channels.'
  },
  {
    id: 'analytics-lead-automation',
    number: '06',
    emoji: '📊',
    icon: <BarChart3 className="w-8 h-8 text-[#043f2e]" />,
    title: 'Analytics & Lead Automation',
    tagline: 'Data-Driven Insights & Automated Conversion Pipelines',
    bullets: [
      'Google Analytics 4 (GA4) & reporting dashboards',
      'Automated lead alerts via WhatsApp/Email/CRM'
    ],
    outcome: 'Zero missed leads with instant automated responses.'
  }
];

const faqs = [
  {
    question: "Why should my business choose GrowGuest for digital marketing in Nagpur?",
    answer: "We specialize in high-converting web development, local SEO, and performance marketing crafted to generate direct leads and revenue. We focus on measurable business outcomes rather than vanity metrics."
  },
  {
    question: "How fast can we expect results from Local SEO & Google Business Profile optimization?",
    answer: "GBP optimization and local map pack cleanup usually show improved Google Maps visibility and phone calls within 14 to 30 days. Organic SEO traffic builds over 60 to 90 days."
  },
  {
    question: "Do you handle paid ads management on Google & Meta?",
    answer: "Yes, we run targeted Google Search & Display Ads as well as Instagram & Facebook campaigns with custom audience targeting and conversion tracking to maximize your ROI."
  },
  {
    question: "Can you automate lead alerts directly to WhatsApp?",
    answer: "Absolutely! We set up automated lead notifications so whenever a potential customer submits a form or clicks to inquire, your team receives an instant alert via WhatsApp or Email."
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
    "serviceType": "Digital Marketing Services",
    "name": "Digital Marketing Services Nagpur | GrowGuest",
    "provider": {
      "@type": "ProfessionalService",
      "name": "GrowGuest — Digital Marketing Agency",
      "url": "https://growguest.in/"
    },
    "areaServed": "Nagpur",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Offerings",
      "itemListElement": services6List.map((s, idx) => ({
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
    <div className="bg-[#eef2e3] min-h-screen">
      <SEO
        title="Digital Marketing Services Nagpur | GrowGuest"
        description="Website design, Local SEO, GBP optimization, SEO, Paid Ads, Content & Analytics automation built to grow your business in Nagpur & beyond."
        keywords="website design Nagpur, local SEO Nagpur, GBP optimization, Google ads agency Nagpur, meta ads marketing, content marketing Nagpur, lead automation"
        canonicalUrl="https://growguest.in/hotel-digital-marketing-services/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-emerald-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#c8f169]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comprehensive Digital Growth Stack
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              Digital Marketing Services <span className="font-serif italic font-normal text-[#c8f169]">in Nagpur</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-9"
            >
              From fast, mobile-responsive web development to Local SEO, high-ROI Google & Meta ads, content marketing, and automated WhatsApp leads — we deliver complete digital growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="#audit"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-[0_0_30px_rgba(200,241,105,0.35)] hover:shadow-[0_0_45px_rgba(200,241,105,0.55)] transform hover:-translate-y-1"
              >
                Claim Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                WhatsApp Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Core Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#043f2e] bg-[#c8f169] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#043f2e]/20">
            OUR CORE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043f2e] mb-4">
            End-to-End Digital Services
          </h2>
          <p className="text-[#242423] text-lg leading-relaxed">
            Engineered to boost your digital visibility, capture high-intent leads, and automate customer conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services6List.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#fcfcfc] rounded-3xl p-8 shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-[#043f2e]/40 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#043f2e] text-[#c8f169] px-4 py-1.5 rounded-bl-2xl font-extrabold text-xs">
                {service.number}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-14 h-14 bg-[#eef2e3] rounded-2xl flex items-center justify-center border border-[#043f2e]/10">
                    {service.icon}
                  </div>
                  <span className="text-2xl">{service.emoji}</span>
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-2 block">
                  {service.tagline}
                </span>

                <h3 className="text-2xl font-extrabold text-[#043f2e] mb-4 leading-snug">
                  {service.title}
                </h3>

                <ul className="space-y-3 mb-6">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-[#242423] leading-snug font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#eef2e3] rounded-2xl p-4 border border-[#043f2e]/10 mt-2">
                <span className="text-[11px] font-bold text-[#043f2e] uppercase tracking-wider block mb-1">
                  Expected Business Result:
                </span>
                <p className="text-xs text-[#043f2e] font-semibold leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#fcfcfc] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#043f2e] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#242423]">
              Have questions about our digital marketing services? Here are straight answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-[#043f2e] text-lg pr-4">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#043f2e] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[#242423] leading-relaxed border-t border-slate-100 pt-4 text-sm">
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
