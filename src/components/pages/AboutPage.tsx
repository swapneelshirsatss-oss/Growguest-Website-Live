import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Building,
  Target,
  FileText
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const coreValues = [
  {
    icon: <Target className="w-8 h-8 text-brand-gold" />,
    title: "Zero Vanity Metrics — Pure Revenue Focus",
    description: "Generic agencies report on 'clicks' and 'impressions'. GrowGuest focuses strictly on metrics that impact your bank account: direct call volume, WhatsApp room inquiries, and lower OTA commission fees."
  },
  {
    icon: <Award className="w-8 h-8 text-brand-gold" />,
    title: "18+ Years Marketing & 10+ Years Hospitality Expertise",
    description: "Founder-led strategy backed by 18 years of digital marketing experience and over a decade dedicated exclusively inside hospitality. We understand hotel seasonality, room pricing, and guest psychology."
  },
  {
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    title: "Local Nagpur In-Person Relationships",
    description: "Based right here in Nagpur (Besa-Pipla Rd), we conduct local face-to-face property audits across Wardha Road, Dharampeth, Civil Lines, and Sadar. We communicate in person and over WhatsApp."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-gold" />,
    title: "100% Guest Data & Asset Ownership",
    description: "Every website, Google Business Profile, and guest contact CRM database we build belongs 100% to your property. You are never locked in or forced to rent your own guest traffic."
  }
];

const timelineSteps = [
  {
    year: "2008 – 2014",
    title: "Foundational Marketing Strategy (18 Years Experience)",
    desc: "18 years of freelance marketing & SEO foundation, mastering search engine algorithm shifts, speed optimization, and high-conversion landing page architecture."
  },
  {
    year: "2014 – 2020",
    title: "Deep Hospitality Specialization (10+ Years Industry)",
    desc: "10+ years dedicated exclusively to hospitality digital growth — diagnosing why independent hotels, resorts, and homestays lose up to 25% of room tariffs to OTAs."
  },
  {
    year: "2020 – Present",
    title: "Founding GrowGuest (Direct Booking Pipeline)",
    desc: "Launched GrowGuest to provide a done-for-you direct booking pipeline for property owners in Nagpur and Uttarakhand hill-station markets."
  }
];

const faqs = [
  {
    question: "Why does GrowGuest focus exclusively on hospitality digital marketing?",
    answer: "Hospitality has unique challenges that generic agencies don't understand — such as 15-25% OTA commission fees (MakeMyTrip, Agoda, Booking.com), high dependency on Google Map Pack location searches, and immediate WhatsApp inquiry expectations. By specializing 100% in hospitality, we deliver faster, proven direct booking results."
  },
  {
    question: "Who leads the strategy and execution at GrowGuest?",
    answer: "GrowGuest is founder-led. Your property audit, Google Business Profile optimization, and direct booking website fixes are personally overseen by a consultant with 18 years of digital marketing experience and 10+ years inside hospitality."
  },
  {
    question: "Where is GrowGuest located and what areas do you serve?",
    answer: "Our primary office is located at 60, Swami Samarth Nagari, Besa-Pipla Rd, Nagpur. We specialize in local in-person property audits for hotel, resort, homestay, and restaurant owners in Nagpur (Wardha Road, Dharampeth, Civil Lines, Sadar) and secondary hill-station markets like Uttarakhand (Mukteshwar, Ramgarh, Nainital)."
  },
  {
    question: "How do I get started with GrowGuest?",
    answer: "You can request a Free Direct Booking Audit on our website or message us directly on WhatsApp. We will analyze your Google Business Profile and website conversion bottlenecks, and provide a clear 4-point action plan."
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'About GrowGuest', url: '/about-hospitality-marketing-agency/' }
  ];

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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GrowGuest Digital Growth for Hospitality",
    "alternateName": [
      "GrowGuest — Digital Growth for Hospitality",
      "GrowGuest"
    ],
    "url": "https://growguest.in/",
    "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
    "logo": "https://growguest.in/assets/logo.png",
    "description": "18 years of marketing experience, 10+ in hospitality. Meet the founder-led team helping hotels and homestays book direct.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "60, Swami samarth Nagari, Besa-Pipla Rd",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440034",
      "countryName": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918956907343",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.google.com/maps/place/?cid=13593835757779847259",
      "https://www.facebook.com/profile.php?id=61593380557986",
      "https://www.instagram.com/growguest/",
      "https://www.youtube.com/channel/UCYfFotUC6n9Zgvv_V9LOXiA",
      "https://x.com/Growguest",
      "https://www.pinterest.com/growguest",
      "https://www.linkedin.com/company/growguest-digital-growth-for-hospitality"
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About GrowGuest | Hospitality Marketing Agency Nagpur",
    "description": "18 years of marketing experience, 10+ in hospitality. Meet the founder-led team helping hotels and homestays book direct.",
    "url": "https://growguest.in/about-hospitality-marketing-agency/"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="About GrowGuest | Hospitality Marketing Agency Nagpur"
        description="18 years of marketing experience, 10+ in hospitality. Meet the founder-led team helping hotels and homestays book direct."
        keywords="hospitality digital marketing agency Nagpur, 18 years marketing experience, hotel SEO consultant, Nagpur hotel marketing expert, direct booking consultant India"
        canonicalUrl="https://growguest.in/about-hospitality-marketing-agency/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-brand-teal text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#C99A2E_0%,_transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Founder-Led • 18+ Years Marketing Experience
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              About GrowGuest: <span className="text-brand-gold">Hospitality Marketing Agency Nagpur</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Boutique digital growth consultancy specializing exclusively in hospitality. We solve the OTA commission bleed for independent hotel, homestay, and resort owners with an end-to-end direct booking pipeline.
            </motion.p>

            {/* AEO Direct Answer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-brand-gold bg-slate-900/90 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Executive Summary: Who Is GrowGuest?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                <strong>GrowGuest</strong> is a founder-led hospitality digital marketing agency in Nagpur backed by <strong>18 years of digital marketing experience and 10+ years dedicated exclusively inside hospitality</strong>. The agency builds customized direct booking systems — combining Google Business Profile map pack optimization, sub-1.5s website fixes, local SEO, and WhatsApp automation — to help independent property owners eliminate 15-25% OTA commission fees.
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
                Connect on WhatsApp
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
              Founder Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Why We Only Work Inside Hospitality
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Most digital marketing agencies in India are generalists. They sell social media posts to a dentist on Monday, a gym on Tuesday, and a hotel on Wednesday. They don’t understand that paying a 20% commission on a ₹4,000 room night drains a hotel owner's entire operating margin.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              With <strong>18 years of freelance marketing experience</strong> and <strong>over a decade spent exclusively inside hospitality</strong>, GrowGuest was founded to solve one specific problem: breaking independent hotel dependence on OTAs like MakeMyTrip, Agoda, and Booking.com.
            </p>
            <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-brand-teal text-slate-800 text-sm sm:text-base font-medium">
              “Our mission is simple: when a traveler searches for a place to stay in Nagpur or nearby hill stations, your property should be their first choice — and they should book directly with your front desk.”
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-brand-gold mb-4">
              18-Year Track Record & Specialization
            </h3>

            <div className="space-y-6">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center font-bold text-brand-gold text-xs">
                    {step.year.split(' ')[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Value Pillars */}
      <section className="py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-teal mb-4">
              How GrowGuest Operates Differently
            </h2>
            <p className="text-slate-600 text-lg">
              We operate as a boutique consultancy, focusing on high-touch relationships and measurable direct revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nagpur Office & Local Presence */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold border border-brand-gold/20">
                <Building className="w-3.5 h-3.5 mr-1.5" />
                Nagpur Headquarters
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Local Presence in Nagpur & Hill-Station Networks
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe in face-to-face relationships and WhatsApp-native communication. Our primary office is located on <strong>Besa-Pipla Road in Nagpur</strong>, serving hotel and restaurant owners across <strong>Wardha Road, Dharampeth, Civil Lines, and Sadar</strong>.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We also maintain deep hill-station relationships in <strong>Uttarakhand (Mukteshwar, Ramgarh, Nainital)</strong> — proving our direct booking playbook works both in bustling commercial cities and high-demand leisure destinations.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/918956907343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-teal font-bold text-sm sm:text-base hover:underline"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Schedule an In-Person Property Audit in Nagpur →
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4 text-center">
              <MapPin className="w-10 h-10 text-brand-gold mx-auto" />
              <h4 className="font-bold text-xl">Visit GrowGuest Office</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/?cid=13593835757779847259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand-gold hover:text-white transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  View on Google Maps (CID Listing) →
                </a>
              </div>
              <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
                Local in-person audits available Monday – Saturday
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions About GrowGuest
            </h2>
            <p className="text-slate-600">
              Clear answers about our founder-led team and agency model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-shadow"
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
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-200 pt-4 bg-white">
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
