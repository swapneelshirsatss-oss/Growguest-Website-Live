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
    "url": "https://growguest.in/free-hotel-digital-marketing-audit/"
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#141716]">
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
              <span>100% FREE · NO OBLIGATION · WHATSAPP DELIVERY</span>
            </motion.div>

            <motion.h1 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title mb-6"
            >
              Free Hotel Website & <em>Direct Booking Audit</em>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-desc mb-8"
            >
              Find out exactly how much commission you lose to OTAs and get a step-by-step action plan to rank #1 on Google Maps and double your direct guest inquiries.
            </motion.p>

            {/* AEO Direct Answer Card */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-8 text-left border-l-4 border-[#c99a2e] bg-[#0c2018] text-slate-200 p-6 sm:p-7 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-[#dfad3c] font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>What Is Included In A GrowGuest Direct Booking Audit?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                A <strong className="text-white">free hotel website audit</strong> evaluates your Google Business Profile (GBP) map pack visibility, mobile page speed (sub-1.5s benchmark), local keyword rankings, and OTA commission leak percentage. Property owners receive a customized 4-point report delivered directly to their WhatsApp within 24 to 48 hours.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Request Form & Pillars Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[rgba(16,41,32,0.08)]">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071510] mb-2">
                Request Your Property Audit
              </h2>
              <p className="text-[#546059] text-sm sm:text-base">
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
                    className="btn btn-gold inline-flex"
                  >
                    <span>Open WhatsApp to Confirm Audit →</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#071510] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,41,32,0.15)] focus:ring-2 focus:ring-[#dfad3c] focus:border-[#dfad3c] outline-none transition-all text-[#071510] bg-[#fcfbf9]"
                    placeholder="e.g. Rajeev Sharma"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="propertyName" className="block text-sm font-bold text-[#071510] mb-2">
                      Property Name & City *
                    </label>
                    <input
                      type="text"
                      id="propertyName"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,41,32,0.15)] focus:ring-2 focus:ring-[#dfad3c] focus:border-[#dfad3c] outline-none transition-all text-[#071510] bg-[#fcfbf9]"
                      placeholder="e.g. Hotel Green View, Nagpur"
                    />
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-bold text-[#071510] mb-2">
                      Property Category *
                    </label>
                    <select
                      id="propertyType"
                      value={formData.propertyType}
                      onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,41,32,0.15)] focus:ring-2 focus:ring-[#dfad3c] focus:border-[#dfad3c] outline-none transition-all text-[#071510] bg-[#fcfbf9]"
                    >
                      <option value="hotel">Hotel / Resort</option>
                      <option value="homestay">Homestay / Villa</option>
                      <option value="restaurant">Restaurant / Dining</option>
                      <option value="other">Other Hospitality</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="block text-sm font-bold text-[#071510] mb-2">
                    Website or Google Maps Link <span className="text-xs font-normal text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({...formData, websiteUrl: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,41,32,0.15)] focus:ring-2 focus:ring-[#dfad3c] focus:border-[#dfad3c] outline-none transition-all text-[#071510] bg-[#fcfbf9]"
                    placeholder="https://yourhotel.com or Google Business Profile link"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-[#071510] mb-2">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-[rgba(16,41,32,0.15)] focus:ring-2 focus:ring-[#dfad3c] focus:border-[#dfad3c] outline-none transition-all text-[#071510] bg-[#fcfbf9]"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold w-full text-center justify-center py-4 text-base"
                >
                  {isSubmitting ? 'Generating Audit Request...' : 'Send My Free Direct Booking Audit'}
                </button>

                <div className="flex items-center justify-center space-x-4 text-xs text-[#546059] pt-2">
                  <span className="flex items-center">
                    <ShieldCheck className="w-4 h-4 text-[#25d366] mr-1" />
                    100% Free
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 text-[#c99a2e] mr-1" />
                    24-48 hr Turnaround
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#dfad3c] mr-1" />
                    No Spam
                  </span>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#071510] text-white rounded-3xl p-8 border border-[#dfad3c]/20 shadow-lg">
              <span className="text-xs font-mono font-semibold text-[#dfad3c] uppercase tracking-wider block mb-2">
                What You Get In The Audit Report
              </span>
              <h3 className="text-2xl font-bold text-white mb-6" style={{ color: '#ffffff' }}>
                4-Point Direct Booking Analysis
              </h3>

              <div className="space-y-6">
                {auditPillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#dfad3c] border border-white/10">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1" style={{ color: '#ffffff' }}>
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

            <div className="bg-white rounded-3xl p-6 border border-[rgba(16,41,32,0.08)] shadow-sm text-center">
              <Building className="w-8 h-8 text-[#c99a2e] mx-auto mb-3" />
              <h4 className="font-bold text-[#071510] text-base mb-1">
                Prefer an In-Person Audit in Nagpur?
              </h4>
              <p className="text-xs text-[#546059] mb-4">
                We regularly conduct face-to-face property audits across Wardha Road, Dharampeth, Civil Lines, and Sadar.
              </p>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-[#c99a2e] hover:underline"
              >
                <PhoneCall className="w-4 h-4 mr-1.5" />
                Schedule Local In-Person Visit →
              </a>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f7f5ef] border-t border-[rgba(16,41,32,0.06)]">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#071510] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#546059]">
              Clear answers regarding our free direct booking audit process.
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
    </div>
  );
}
