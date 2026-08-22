import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Globe, 
  Percent, 
  Search, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  FileText,
  Building
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

const auditPillars = [
  {
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    title: "1. Google Business Profile & Map Pack Ranking Check",
    description: "We audit your Google Maps listing categories, geotagged photo optimization, review score metrics, and duplicate spam listings suppressing your property rank."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-gold" />,
    title: "2. Mobile Speed & Website Conversion Test",
    description: "We analyze your website loading speed on mobile devices, inspect booking call-to-action placement, and identify UX bugs causing guests to bounce back to OTAs."
  },
  {
    icon: <Percent className="w-8 h-8 text-brand-gold" />,
    title: "3. OTA Commission Bleed Analysis",
    description: "We calculate your current estimated 15-25% commission payout to MakeMyTrip, Agoda, and Booking.com, and show how much revenue you can recover directly."
  },
  {
    icon: <Search className="w-8 h-8 text-brand-gold" />,
    title: "4. Local Keyword Ranking Report",
    description: "We check where your hotel, homestay, or resort ranks for high-intent search terms like 'best resort near Nagpur' or 'homestay in Civil Lines'."
  }
];

const faqs = [
  {
    question: "Is the direct booking audit really 100% free?",
    answer: "Yes! There are zero costs and zero obligations. We provide a clear, actionable 4-page breakdown of your digital presence and OTA commission savings potential."
  },
  {
    question: "How long does it take to receive my audit report?",
    answer: "Once you submit your property details below, our team completes a manual audit of your Google Business Profile and website within 24 to 48 hours and sends the report directly to your WhatsApp."
  },
  {
    question: "Do you offer in-person audit walkthroughs in Nagpur?",
    answer: "Yes! If your property is located in Nagpur (Wardha Road, Dharampeth, Civil Lines, Sadar, Besa), founder-led in-person audits are available upon request."
  },
  {
    question: "What information do I need to provide for the audit?",
    answer: "Just your name, property name, property city, and WhatsApp number. You do not need to give us login credentials or sensitive password access."
  }
];

export default function AuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    propertyName: '',
    propertyType: 'hotel',
    websiteUrl: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [whatsappUrl, setWhatsappUrl] = useState('');

  const breadcrumbItems = [
    { name: 'Free Audit', url: '/free-hotel-digital-marketing-audit/' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Namaste GrowGuest! I am requesting a Free Direct Booking Audit.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Property:* ${encodeURIComponent(formData.propertyName)}%0A*Category:* ${encodeURIComponent(formData.propertyType)}%0A*Website:* ${encodeURIComponent(formData.websiteUrl || 'Not provided')}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}`;
    const url = `https://wa.me/918956907343?text=${message}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (err) {
        // Fallback handled by button
      }
    }, 600);
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

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Free Hotel Website & Direct Booking Audit | GrowGuest",
    "description": "Get a free audit of your hotel or homestay website, GBP and booking funnel. No cost, no obligation — just a clear action plan.",
    "url": "https://growguest.in/free-hotel-digital-marketing-audit"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Free Hotel Website & Direct Booking Audit | GrowGuest"
        description="Get a free audit of your hotel or homestay website, GBP and booking funnel. No cost, no obligation — just a clear action plan."
        keywords="free hotel website audit, free direct booking audit, hotel SEO audit free India, homestay website audit Nagpur, Google Business Profile audit for hotels"
        canonicalUrl="https://growguest.in/free-hotel-digital-marketing-audit/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(contactSchema)}
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
              <Sparkles className="w-4 h-4 mr-2" />
              100% Free • No Obligation • WhatsApp Delivery
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Free Hotel Website & <span className="text-brand-gold">Direct Booking Audit</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Find out exactly how much commission you lose to OTAs and get a step-by-step action plan to rank #1 on Google Maps and double your direct guest inquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-brand-gold bg-slate-900/90 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>What Is Included In A GrowGuest Direct Booking Audit?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                A <strong>free hotel website audit</strong> evaluates your Google Business Profile (GBP) map pack visibility, mobile page speed (sub-1.5s benchmark), local keyword rankings, and OTA commission leak percentage. Property owners receive a customized 4-point report delivered directly to their WhatsApp within 24 to 48 hours.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-teal mb-2">
                Request Your Property Audit
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Fill in your details below and our hospitality marketing team will analyze your property’s digital presence.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 text-emerald-900 rounded-2xl p-8 text-center border border-emerald-200 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-extrabold">Audit Request Received!</h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  We are now analyzing your property's Google Business Profile and website conversion bottlenecks. You will receive your complete audit report on WhatsApp shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl || "https://wa.me/918956907343"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-extrabold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-md"
                  >
                    Open WhatsApp to Confirm Audit →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                    placeholder="e.g. Rajeev Sharma"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyName" className="block text-sm font-bold text-slate-800 mb-2">
                      Property Name & City *
                    </label>
                    <input
                      type="text"
                      id="propertyName"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                      placeholder="e.g. Hotel Green View, Nagpur"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-bold text-slate-800 mb-2">
                      Property Category *
                    </label>
                    <select
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900 bg-white"
                    >
                      <option value="hotel">Hotel / Resort</option>
                      <option value="homestay">Homestay / Villa</option>
                      <option value="restaurant">Restaurant / Dining</option>
                      <option value="other">Other Hospitality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-bold text-slate-800 mb-2">
                    Website or Google Maps Link <span className="text-xs font-normal text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                    placeholder="https://yourhotel.com or Google Business Profile link"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-slate-800 mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-brand-teal font-extrabold text-lg transition-all ${
                    isSubmitting 
                      ? 'bg-brand-gold/70 cursor-not-allowed' 
                      : 'bg-brand-gold hover:bg-brand-gold-light shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? 'Generating Audit Request...' : 'Send My Free Direct Booking Audit'}
                </button>

                <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 pt-2">
                  <span className="flex items-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
                    100% Free
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 text-brand-gold mr-1" />
                    24-48 hr Turnaround
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-1" />
                    No Spam
                  </span>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-white/10 shadow-lg">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">
                What You Get In The Audit Report
              </span>
              <h3 className="text-2xl font-bold mb-6">
                4-Point Direct Booking Analysis
              </h3>

              <div className="space-y-6">
                {auditPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
              <Building className="w-8 h-8 text-brand-teal mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 text-base mb-1">
                Prefer an In-Person Audit in Nagpur?
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                We regularly conduct face-to-face property audits across Wardha Road, Dharampeth, Civil Lines, and Sadar.
              </p>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-brand-teal hover:underline"
              >
                <PhoneCall className="w-4 h-4 mr-1.5" />
                Schedule Local In-Person Visit →
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Clear answers regarding our free direct booking audit process.
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
    </div>
  );
}
