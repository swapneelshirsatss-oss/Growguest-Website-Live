import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  Sparkles
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const caseStudiesList = [
  {
    id: 'homestay-civil-lines',
    badge: "Nagpur City • Homestay",
    title: "Boutique Homestay in Civil Lines, Nagpur",
    challenge: "High reliance on MakeMyTrip (paying 22% commission) while Google Maps listing remained completely unoptimized and invisible to local searchers.",
    solution: "Restructured Google Business Profile categories, removed duplicate map listings, added geotagged property photos, and targeted 'homestay in Civil Lines Nagpur' keywords.",
    metrics: [
      { label: "Google Map Views", before: "450 / month", after: "3,200 / month", highlight: "+610%" },
      { label: "Direct Call Volume", before: "8 calls / month", after: "35 calls / month", highlight: "3.5x Growth" },
      { label: "OTA Commission Saved", before: "₹38,000 / mo paid", after: "₹12,000 / mo paid", highlight: "68% Reduction" }
    ],
    testimonial: "GrowGuest showed me how much traffic I was losing because my Google listing was broken. Within 60 days, my direct phone calls tripled."
  },
  {
    id: 'resort-wardha-road',
    badge: "Nagpur • Luxury Resort",
    title: "Eco Resort on Wardha Road, Nagpur",
    challenge: "90% of weekend staycation bookings came from Agoda and Booking.com. The resort's old website loaded in 6.2 seconds and had no mobile booking button.",
    solution: "Built a sub-1.5 second direct booking website, added 1-click WhatsApp reservation triggers, and implemented local SEO for 'weekend resort near Nagpur'.",
    metrics: [
      { label: "Direct Booking Ratio", before: "10% Direct / 90% OTA", after: "45% Direct / 55% OTA", highlight: "4.5x Shift" },
      { label: "Website Conversion Speed", before: "6.2s load time", after: "1.2s load time", highlight: "80% Faster" },
      { label: "Q1 OTA Fees Saved", before: "₹1,80,000 paid", after: "₹55,000 paid", highlight: "₹1.25L Kept" }
    ],
    testimonial: "GrowGuest is the only agency that actually talked about reducing my OTA commissions. The new website saved us over ₹1.2 Lakhs in our first quarter."
  },
  {
    id: 'homestay-mukteshwar',
    badge: "Uttarakhand • Hill-Station Stay",
    title: "Boutique Mountain Homestay in Mukteshwar",
    challenge: "Located in a competitive hill station with zero organic Google search visibility, forcing the owner to pay high OTA promotion fees for visibility.",
    solution: "Executed hill-station local SEO targeting 'boutique homestay Mukteshwar', added Schema markup, and launched automated WhatsApp inquiry greetings.",
    metrics: [
      { label: "Organic Google Traffic", before: "210 visits / mo", after: "720 visits / mo", highlight: "+242%" },
      { label: "Direct WhatsApp Leads", before: "5 inquiries / wk", after: "28 inquiries / wk", highlight: "5.6x Increase" },
      { label: "Direct Occupancy Rate", before: "18% direct", after: "58% direct", highlight: "+40% Direct" }
    ],
    testimonial: "Our weekend occupancy is now booked 3 weeks in advance directly through WhatsApp without paying middleman fees."
  },
  {
    id: 'restaurant-dharampeth',
    badge: "Nagpur • Fine Dining & Events",
    title: "Premium Family Dining Venue in Dharampeth",
    challenge: "Paying high Zomato & Swiggy commissions on table reservations and private hall inquiries, missing out on direct customer data.",
    solution: "Added direct WhatsApp reservation links on Google Maps profile, created custom event landing pages, and optimized local citation consistency.",
    metrics: [
      { label: "Direct Table Bookings", before: "15% Direct", after: "60% Direct", highlight: "4x Shift" },
      { label: "Commission Money Saved", before: "₹25,000 / mo paid", after: "₹6,000 / mo paid", highlight: "76% Saved" },
      { label: "Repeat Guest CRM Leads", before: "0 captured", after: "450+ contacts", highlight: "Owned List" }
    ],
    testimonial: "Guests love clicking 'Reserve via WhatsApp' right on Google Maps. We eliminated thousands in monthly aggregator fees."
  }
];

const faqs = [
  {
    question: "How do you measure and verify direct booking growth?",
    answer: "We track direct phone calls, WhatsApp inquiry triggers, website booking clicks, and monthly OTA commission invoices. We compare your baseline OTA fee percentage before working with GrowGuest against your reduced fee percentage after implementation."
  },
  {
    question: "How long does it take to see case study level results?",
    answer: "Google Business Profile optimization and Google Maps rank fixes deliver noticeable increases in calls within 14 to 30 days. Full website conversion fixes and local SEO compounding typically yield peak direct booking results within 60 to 90 days."
  },
  {
    question: "Can these results be replicated for small 5-room homestays in Nagpur?",
    answer: "Yes! Small homestays often experience the highest percentage ROI because eliminating even 15-20 OTA bookings per month immediately saves thousands of Rupees in commission fees."
  },
  {
    question: "Do you provide case study references from Nagpur property owners?",
    answer: "Absolutely. During your free direct booking strategy audit, we can share specific local benchmark data and connect you with property owners in Nagpur and hill-station markets."
  }
];

export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'Case Studies', url: '/hospitality-marketing-case-studies/' }
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

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Hotel Marketing Case Studies | GrowGuest Results",
    "description": "Real before/after booking and OTA-dependence data from hotels and homestays GrowGuest has worked with. See the results.",
    "publisher": {
      "@type": "ProfessionalService",
      "name": "GrowGuest — Digital Marketing Agency for Hotels & Resorts",
      "url": "https://growguest.in/"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Hotel Marketing Case Studies | GrowGuest Results"
        description="Real before/after booking and OTA-dependence data from hotels and homestays GrowGuest has worked with. See the results."
        keywords="hotel digital marketing case studies, OTA to direct booking results, hotel booking growth case study, Nagpur hotel SEO results, direct booking conversion data"
        canonicalUrl="https://growguest.in/hospitality-marketing-case-studies/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

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
              <Award className="w-4 h-4 mr-2" />
              Verified Hospitality Performance Data • Nagpur & Beyond
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Hotel Marketing Case Studies: <span className="text-brand-gold">Real Direct Booking Results</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              We measure success by one metric: how much OTA commission money stays in your bank account. Explore verified before-and-after data from independent hotels, resorts, and homestays.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-brand-gold bg-slate-900/90 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary: Hotel Growth Case Studies</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                Independent properties partnering with GrowGuest achieve an average <strong>3.5x increase in direct Google Map Pack calls</strong> and reduce OTA commission payouts by <strong>35% to 68% within 90 days</strong> through speed-optimized websites, local SEO, and 1-click WhatsApp booking flows.
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
                Get Free Property Audit
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
        </div>
      </section>

      <section className="bg-slate-900 text-slate-300 py-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 block mb-1">
                ₹15,00,000+
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                OTA Commissions Saved
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-brand-gold block mb-1">
                +180%
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                Avg Direct Booking Growth
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 block mb-1">
                +450%
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                Google Map Pack Visibility
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-purple-400 block mb-1">
                8.4x
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                Average Client Marketing ROI
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">
            Verified Property Performance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Real Before & After Case Studies
          </h2>
          <p className="text-slate-600 text-lg">
            Detailed breakdown of how GrowGuest solved local search invisibility and high OTA commission bleed for hospitality owners.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudiesList.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    {study.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Verified Case Study #{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
                    <h4 className="text-sm font-bold text-red-900 uppercase tracking-wider mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                      The Challenge / Problem
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                      The GrowGuest Strategy
                    </h4>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center">
                      <span className="text-xs font-bold text-slate-500 uppercase block mb-2">
                        {metric.label}
                      </span>
                      <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mb-1">
                        <span className="line-through">{metric.before}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                      </div>
                      <div className="text-lg font-black text-brand-teal">
                        {metric.after}
                      </div>
                      <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        {metric.highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-brand-teal/5 p-6 rounded-2xl border border-brand-teal/20 italic text-slate-700 text-sm sm:text-base flex items-start">
                  <span className="text-3xl text-brand-gold font-serif mr-3 leading-none">“</span>
                  <p className="pt-1">{study.testimonial}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Case Study & Results FAQ
            </h2>
            <p className="text-slate-600">
              Common questions about our verified before-and-after results and property audits.
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
