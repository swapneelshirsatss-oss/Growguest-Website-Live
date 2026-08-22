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
    answer: "GrowGuest is founded and led by Swapneel Shirsat. Your property audit, Google Business Profile optimization, and direct booking website fixes are personally engineered and overseen by Swapneel, backed by 18 years of digital marketing experience and 10+ years inside hospitality."
  },
  {
    question: "Where is GrowGuest located and what areas do you serve?",
    answer: "Our primary office is located at 60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur. Swapneel Shirsat conducts local in-person property audits for hotel, resort, homestay, and restaurant owners in Nagpur (Wardha Road, Dharampeth, Civil Lines, Sadar) and secondary hill-station markets like Uttarakhand (Mukteshwar, Ramgarh, Nainital)."
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
    "description": "Founder-led hospitality digital marketing consultancy founded by Swapneel Shirsat. 18+ years marketing experience, 10+ years in hospitality helping hotels and homestays book direct.",
    "founder": {
      "@type": "Person",
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder",
      "url": "https://growguest.in/about-hospitality-marketing-agency/",
      "sameAs": "https://www.linkedin.com/in/swapneel-shirsat/"
    },
    "director": {
      "@type": "Person",
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder",
      "url": "https://growguest.in/about-hospitality-marketing-agency/",
      "sameAs": "https://www.linkedin.com/in/swapneel-shirsat/"
    },
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://growguest.in/about-hospitality-marketing-agency/#swapneel-shirsat",
    "name": "Swapneel Shirsat",
    "alternateName": ["Swapneel", "Swapneel Shirsat GrowGuest"],
    "jobTitle": "Director & Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "GrowGuest Digital Growth for Hospitality",
      "url": "https://growguest.in/"
    },
    "description": "Director and Founder of GrowGuest with 18+ years of digital marketing experience and 10+ years specializing exclusively in hospitality. Helping hotels, resorts, and homestays cut OTA commissions and build direct booking engines.",
    "image": "https://growguest.in/Image/GrowGuest%20Header.avif",
    "url": "https://growguest.in/about-hospitality-marketing-agency/",
    "sameAs": [
      "https://www.linkedin.com/in/swapneel-shirsat/",
      "https://www.google.com/maps/place/?cid=13593835757779847259",
      "https://x.com/Growguest"
    ],
    "knowsAbout": [
      "Hospitality Digital Marketing",
      "Hotel Direct Booking Strategy",
      "Google Business Profile Optimization for Hotels",
      "Local SEO for Homestays & Resorts",
      "OTA Commission Reduction (MakeMyTrip, Agoda, Booking.com)",
      "Hotel Website Conversion Rate Optimization (CRO)",
      "WhatsApp Reservation Automation"
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About GrowGuest | Director & Founder Swapneel Shirsat | Hospitality Marketing Agency Nagpur",
    "description": "Meet Swapneel Shirsat, Director & Founder of GrowGuest. 18 years marketing experience, 10+ years in hospitality helping hotels and homestays book direct.",
    "url": "https://growguest.in/about-hospitality-marketing-agency/",
    "mainEntity": {
      "@type": "Person",
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="About GrowGuest | Founder Swapneel Shirsat | Hospitality Marketing Agency Nagpur"
        description="Meet Swapneel Shirsat, Founder of GrowGuest. 18 years marketing experience, 10+ in hospitality helping hotels and homestays cut OTA commissions and book direct."
        keywords="Swapneel Shirsat, Swapneel Shirsat GrowGuest, hospitality digital marketing agency Nagpur, 18 years marketing experience, hotel SEO consultant, Nagpur hotel marketing expert, direct booking consultant India"
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
        {JSON.stringify(personSchema)}
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
              Founder-Led by Swapneel Shirsat • 18+ Years Experience
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              About GrowGuest: <span className="text-brand-gold">Founder-Led Hospitality Marketing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Founded by <strong>Swapneel Shirsat</strong>, GrowGuest is a boutique digital growth consultancy specializing exclusively in hospitality. We solve the OTA commission bleed for independent hotel, homestay, and resort owners with an end-to-end direct booking pipeline.
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
                <span>Executive Summary: Who Is Swapneel Shirsat & GrowGuest?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                <strong>Swapneel Shirsat</strong> is the founder and principal consultant of <strong>GrowGuest Digital Growth for Hospitality</strong> in Nagpur. Backed by <strong>18 years of digital marketing experience and 10+ years dedicated exclusively inside hospitality</strong>, Swapneel engineers customized direct booking engines — combining Google Business Profile map pack optimization, sub-1.5s website fixes, local SEO, and WhatsApp automation — to help independent property owners recover up to 68% of third-party OTA commissions.
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
                Chat with Swapneel on WhatsApp
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Founder Profile Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Founder Avatar & Quick Badges */}
            <div className="lg:col-span-4 text-center space-y-5">
              <div className="relative inline-block">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-brand-teal via-[#033023] to-slate-900 flex items-center justify-center text-brand-gold font-extrabold text-5xl sm:text-6xl shadow-2xl border-4 border-brand-gold/30 mx-auto transform hover:scale-105 transition-transform">
                  SS
                </div>
                <div className="absolute -bottom-3 -right-3 bg-brand-gold text-brand-teal font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white flex items-center">
                  <ShieldCheck className="w-4 h-4 mr-1 text-brand-teal" />
                  Verified Specialist
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Swapneel Shirsat
                </h3>
                <p className="text-sm font-bold text-brand-teal mt-1">
                  Founder & Principal Hospitality Consultant
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  GrowGuest Digital Growth for Hospitality
                </p>
              </div>

              <div className="flex justify-center gap-2 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                  18+ Yrs Marketing
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-gold/20 text-brand-teal border border-brand-gold/30">
                  10+ Yrs Hospitality
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  Nagpur, India
                </span>
              </div>

              <div className="pt-2 flex justify-center space-x-3">
                <a
                  href="https://wa.me/918956907343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 mr-1.5" />
                  WhatsApp Direct
                </a>
                <a
                  href="mailto:hello@growguest.com"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-colors"
                >
                  Email Swapneel
                </a>
              </div>
            </div>

            {/* Right: Biographical Profile & Core Ethos */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                Meet the Founder
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                "Direct Booking Growth Is Not Magic — It's Proper Digital Engineering."
              </h2>
              
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                I'm <strong>Swapneel Shirsat</strong>, founder of GrowGuest. Over the past 18 years in digital marketing — with more than a decade spent purely inside the hospitality ecosystem — I've watched countless independent hotel and homestay owners hand over 15% to 25% of their hard-earned room revenue to OTAs like MakeMyTrip, Agoda, and Booking.com.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                Most agencies try to sell you social media posts and vanity likes. But hotel owners don't need likes — they need <strong>confirmed room bookings without commission bleed</strong>.
              </p>

              {/* 3 Pillars of Swapneel's Consulting Practice */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-sm mb-2">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Direct Founder Care</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No junior account managers. Swapneel personally audits, designs, and oversees your property's direct booking strategy.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-sm mb-2">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Hospitality Economics</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fluency in room tariff yields, off-peak occupancy dips, ADR, RevPAR, and traveler booking intent psychology.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-sm mb-2">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">In-Person Relationships</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Face-to-face local audits across Nagpur (Wardha Rd, Dharampeth, Civil Lines, Sadar) and Uttarakhand hill stations.
                  </p>
                </div>
              </div>

              {/* Founder's Personal Letter / Quote Box */}
              <div className="bg-gradient-to-br from-slate-900 to-[#02291e] text-white p-6 sm:p-7 rounded-2xl border border-white/10 shadow-lg relative">
                <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed mb-3">
                  “When a traveler searches for a resort, hotel, or homestay in your area, your property should be their first choice — and they should book directly with your front desk over WhatsApp, not through a middleman app that cuts your margin.”
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                  <span className="font-bold text-brand-gold">— Swapneel Shirsat, Founder</span>
                  <span className="text-slate-400">Nagpur, Maharashtra</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 18-Year Track Record & Journey Section */}
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
              With <strong>18 years of freelance marketing experience</strong> and <strong>over a decade spent exclusively inside hospitality</strong>, GrowGuest was founded by Swapneel Shirsat to solve one specific problem: breaking independent hotel dependence on OTAs like MakeMyTrip, Agoda, and Booking.com.
            </p>
            <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-brand-teal text-slate-800 text-sm sm:text-base font-medium">
              “Our mission is simple: when a traveler searches for a place to stay in Nagpur or nearby hill stations, your property should be their first choice — and they should book directly with your front desk.”
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
            <h3 className="text-2xl font-bold text-brand-gold mb-4">
              Swapneel's 18-Year Marketing & Hospitality Journey
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
