import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Building,
  FileText
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';

const contactChannels = [
  {
    icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
    title: "Instant WhatsApp Chat",
    description: "Fastest response time (<15 minutes). Connect directly with our founder on WhatsApp.",
    actionText: "Chat on WhatsApp →",
    actionUrl: "https://wa.me/918956907343?text=Hi%20GrowGuest%2C%20I%20would%20like%20to%20book%20a%20free%20direct%20booking%20audit%20for%20my%20property.",
    isPrimary: true
  },
  {
    icon: <Phone className="w-8 h-8 text-brand-gold" />,
    title: "Phone Consultation",
    description: "Speak directly with our hospitality marketing consultant about your property goals.",
    actionText: "Call +91 89569 07343 →",
    actionUrl: "tel:+918956907343",
    isPrimary: false
  },
  {
    icon: <Building className="w-8 h-8 text-brand-teal" />,
    title: "Nagpur Office Visit",
    description: "Visit our office or schedule an in-person property audit in Wardha Rd, Dharampeth, Civil Lines, or Sadar.",
    actionText: "Get Office Directions →",
    actionUrl: "https://maps.google.com/?q=GrowGuest+Besa+Pipla+Rd+Nagpur",
    isPrimary: false
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    title: "Email Desk",
    description: "Send us your detailed RFP, property overview, or marketing questions via email.",
    actionText: "Send Email →",
    actionUrl: "mailto:hello@growguest.com",
    isPrimary: false
  }
];

const faqs = [
  {
    question: "How fast do you respond to contact requests?",
    answer: "WhatsApp is our primary communication channel. We typically respond to WhatsApp messages within 15 to 30 minutes during business hours. Email and form inquiries are answered within 4 hours."
  },
  {
    question: "Do you offer in-person meetings for hotel owners in Nagpur?",
    answer: "Yes! As a Nagpur-based agency, we regularly conduct face-to-face property walkthroughs and audits across Wardha Road, Dharampeth, Civil Lines, Sadar, Besa, and surrounding areas."
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "Our founder will review your property's Google Business Profile and digital presence, and send you a personalized 4-point audit breakdown on WhatsApp with actionable fixes."
  },
  {
    question: "Is there any obligation when requesting a consultation?",
    answer: "None at all. All initial property consultations and direct booking audits are 100% free with zero pressure or sales pitch."
  }
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    propertyName: '',
    propertyType: 'hotel',
    websiteUrl: '',
    whatsapp: '',
    preferredContact: 'whatsapp',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const breadcrumbItems = [
    { name: 'Contact Us', url: '/contact-hospitality-digital-marketing-agency/' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "GrowGuest Digital Growth for Hospitality",
    "alternateName": [
      "GrowGuest — Digital Growth for Hospitality",
      "GrowGuest"
    ],
    "image": "https://growguest.in/assets/logo.png",
    "@id": "https://growguest.in/#localbusiness",
    "url": "https://growguest.in/",
    "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
    "telephone": "+918956907343",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "60, Swami samarth Nagari, Besa-Pipla Rd",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440034",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.0857691,
      "longitude": 79.0977950
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
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

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact GrowGuest | Book Your Free Direct Booking Audit",
    "description": "Talk to GrowGuest about growing direct bookings for your hotel or homestay. WhatsApp-native, Nagpur-based, founder-led.",
    "url": "https://growguest.in/contact-hospitality-digital-marketing-agency/"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Contact GrowGuest | Book Your Free Direct Booking Audit"
        description="Talk to GrowGuest about growing direct bookings for your hotel or homestay. WhatsApp-native, Nagpur-based, founder-led."
        keywords="contact hospitality digital marketing agency, book a free audit, hotel marketing consultation Nagpur, Nagpur hotel SEO consultant, direct booking consultation"
        canonicalUrl="https://growguest.in/contact-hospitality-digital-marketing-agency/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(contactPageSchema)}
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
              WhatsApp-Native • Founder-Led • Nagpur Office
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Contact GrowGuest: <span className="text-brand-gold">Book Your Free Audit</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Talk to our founder-led hospitality digital marketing agency in Nagpur. We'll analyze your OTA commission bleed and build a direct booking action plan for your property.
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
                <span>How To Contact GrowGuest For A Hotel Marketing Audit?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                You can contact <strong>GrowGuest</strong> via WhatsApp (+91 89569 07343), phone call, or email (hello@growguest.com). For property owners in Nagpur (Wardha Road, Dharampeth, Civil Lines, Sadar), local in-person property walkthroughs and audits can be scheduled at our headquarters on Besa-Pipla Road or at your hotel premises.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Contact Channels Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-3xl p-6 border ${
                channel.isPrimary ? 'border-emerald-300 ring-2 ring-emerald-500/20 shadow-lg' : 'border-slate-200 shadow-sm'
              } flex flex-col justify-between hover:shadow-xl transition-shadow`}
            >
              <div>
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{channel.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <a
                href={channel.actionUrl}
                target={channel.actionUrl.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  channel.isPrimary
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 hover:bg-brand-teal hover:text-white text-slate-800'
                }`}
              >
                {channel.actionText}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Form & Map Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-teal mb-2">
                Book Your Direct Booking Strategy Audit
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Drop your details below and our founder will send you a personalized digital audit report.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-emerald-50 text-emerald-900 rounded-2xl p-8 text-center border border-emerald-200 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-extrabold">Inquiry Sent Successfully!</h3>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out. We are reviewing your property details and will connect with you on WhatsApp shortly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918956907343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-emerald-700 hover:underline"
                  >
                    Need an immediate response? Message us on WhatsApp →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-800 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                    placeholder="e.g. Vikram Deshmukh"
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
                      placeholder="e.g. Royal Crown Hotel, Nagpur"
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-bold text-slate-800 mb-2">
                      WhatsApp Number *
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

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-bold text-slate-800 mb-2">
                      Preferred Communication Format *
                    </label>
                    <select
                      id="preferredContact"
                      value={formData.preferredContact}
                      onChange={(e) => setFormData({...formData, preferredContact: e.target.value})}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900 bg-white"
                    >
                      <option value="whatsapp">WhatsApp Audit Report</option>
                      <option value="call">Phone Call Consultation</option>
                      <option value="inperson">In-Person Audit (Nagpur Only)</option>
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
                  <label htmlFor="message" className="block text-sm font-bold text-slate-800 mb-2">
                    Your Current Direct Booking Challenges <span className="text-xs font-normal text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-slate-900"
                    placeholder="e.g. Currently paying 22% to MakeMyTrip, want to get more direct calls from Google Maps."
                  ></textarea>
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
                  {isSubmitting ? 'Sending Request...' : 'Book My Free Direct Booking Audit'}
                </button>

                <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 pt-2">
                  <span className="flex items-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
                    100% Free
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 text-brand-gold mr-1" />
                    Fast Response
                  </span>
                  <span className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-1" />
                    No Obligation
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Map & Office Address Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-white/10 shadow-lg space-y-6">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                Office Information
              </span>
              <h3 className="text-2xl font-bold">
                GrowGuest Headquarters
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>60, Swami Samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra 440034</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <a href="tel:+918956907343" className="hover:text-brand-gold transition-colors font-medium">
                    +91 89569 07343
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <a href="mailto:hello@growguest.com" className="hover:text-brand-gold transition-colors font-medium">
                    hello@growguest.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div>
                  <span className="text-xs text-brand-gold font-semibold block mb-2 uppercase tracking-wider">
                    Official Social Channels
                  </span>
                  <div className="flex items-center space-x-3 text-xs text-slate-300 flex-wrap gap-y-2">
                    <a href="https://www.facebook.com/profile.php?id=61593380557986" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">Facebook</a>
                    <span>•</span>
                    <a href="https://www.instagram.com/growguest/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">Instagram</a>
                    <span>•</span>
                    <a href="https://www.youtube.com/channel/UCYfFotUC6n9Zgvv_V9LOXiA" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">YouTube</a>
                    <span>•</span>
                    <a href="https://x.com/Growguest" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">X (Twitter)</a>
                    <span>•</span>
                    <a href="https://www.pinterest.com/growguest" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">Pinterest</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/company/growguest-digital-growth-for-hospitality" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors font-medium">LinkedIn</a>
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-1">
                    Nagpur Local Service Areas:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Wardha Road • Dharampeth • Civil Lines • Sadar • Besa-Pipla • Hingna Rd • Kamptee Rd
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm overflow-hidden space-y-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.6679343328093!2d79.09779500288303!3d21.085769143508152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf26c05347f1%3A0xbca701993578885b!2sGrowGuest%20Digital%20Growth%20for%20Hospitality!5e0!3m2!1sen!2sin!4v1787394673014!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="GrowGuest Digital Growth for Hospitality - Besa-Pipla Rd, Nagpur"
                className="w-full h-[260px] rounded-2xl"
              ></iframe>
              <div className="text-center pt-1">
                <a
                  href="https://www.google.com/maps/place/?cid=13593835757779847259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-brand-teal hover:text-brand-gold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  View GrowGuest on Google Maps (Directions & Reviews) →
                </a>
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
              Frequently Asked Contact Questions
            </h2>
            <p className="text-slate-600">
              Clear answers about consulting with GrowGuest.
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
