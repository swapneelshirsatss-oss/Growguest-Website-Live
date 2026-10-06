import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Search, 
  TrendingUp, 
  Percent, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  Zap, 
  DollarSign, 
  MousePointerClick, 
  ChevronDown, 
  ChevronUp, 
  BarChart3,
  Sliders,
  ShieldAlert
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const adChannels = [
  {
    icon: <Search className="w-8 h-8 text-[#dfad3c]" />,
    title: "Google Search Ads (Intent Capture)",
    subtitle: "Intercepting travelers actively looking to book right now",
    description: "When someone searches 'luxury resort in Nagpur with pool' or 'family homestay Mukteshwar', we place your property in spot #1. We use tight geo-targeting, negative keyword lists, and custom ad copy highlighting your best direct rates.",
    tags: ["High Intent", "Zero Wasted Spend", "Direct Phone Calls"]
  },
  {
    icon: <Target className="w-8 h-8 text-[#dfad3c]" />,
    title: "Google Hotel Ads & Free Booking Links",
    subtitle: "Appearing directly on Google Travel & Google Maps pricing grids",
    description: "Display your official direct booking rates right beside MakeMyTrip, Agoda, and Booking.com with an eye-catching 'Official Site' badge. Travelers who see a better direct perk click through and book directly.",
    tags: ["Official Rate Badge", "OTA Price Match", "Google Travel"]
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-[#dfad3c]" />,
    title: "Meta Ads (Instagram & Facebook Reels)",
    subtitle: "Sparking wanderlust and driving weekend staycation bookings",
    description: "Visual platforms sell hospitality. We launch cinematic video reels and carousel ads showcasing your property views, luxury rooms, dining, and pool experiences to affluent travelers within a 150-300km driving radius.",
    tags: ["Instagram Reels", "Visual Storytelling", "Weekend Getaways"]
  },
  {
    icon: <Zap className="w-8 h-8 text-[#dfad3c]" />,
    title: "Direct WhatsApp Click-to-Chat Ads",
    subtitle: "Skip friction-heavy landing page forms — start chats instantly",
    description: "Indian travelers love chatting directly before paying. Our high-converting Meta click-to-WhatsApp ads connect prospective guests straight to your front desk with a pre-filled reservation inquiry message.",
    tags: ["Instant Inquiry", "90%+ Open Rate", "Indian Guest Preferred"]
  },
  {
    icon: <Sliders className="w-8 h-8 text-[#dfad3c]" />,
    title: "Dynamic Retargeting & Cart Abandonment",
    subtitle: "Bring back the 96% of website visitors who left without booking",
    description: "Guests rarely book on their first visit. We retarget guests who viewed your room categories with special seasonal offers, limited-time direct discounts, and social proof testimonials to seal the booking.",
    tags: ["Audience Remarketing", "Lower CPA", "Higher Conversion"]
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#dfad3c]" />,
    title: "Live Conversion Tracking & ROAS Dashboards",
    subtitle: "Complete clarity on every rupee spent and every room booked",
    description: "We configure GA4, Google Ads conversion tracking, and Meta Pixel to track calls, WhatsApp inquiries, and confirmed direct bookings. You receive weekly transparent reports showing exact Return on Ad Spend (ROAS).",
    tags: ["GA4 Tracking", "Call Attribution", "Transparent ROAS"]
  }
];

const faqs = [
  {
    question: "Why should a hotel or homestay run Paid Ads instead of relying solely on OTAs?",
    answer: "OTAs take 18% to 25% of every single booking you receive, and they mask guest contact details so you never own the relationship. With targeted Google and Meta ads, your cost per booking is typically between 6% to 10% of room tariff, leaving you with substantially higher net margins and direct guest data for repeat bookings."
  },
  {
    question: "What is the typical Return on Ad Spend (ROAS) for hospitality campaigns with GrowGuest?",
    answer: "Our hospitality clients typically achieve 7x to 14x Return on Ad Spend (ROAS). For every ₹10,000 invested in targeted ad campaigns, we routinely generate ₹70,000 to ₹1,40,000 in direct room revenue by combining precision search intent with instant WhatsApp lead triggers."
  },
  {
    question: "How do Click-to-WhatsApp ads work for Indian hotel guests?",
    answer: "Instead of directing users to a lengthy contact form, the ad features a 'Book on WhatsApp' CTA. When tapped on Instagram or Facebook, it immediately opens WhatsApp with a pre-filled message like 'Hi, I saw your weekend stay offer. Can I check room availability for this Saturday?' This reduces inquiry friction by over 80%."
  },
  {
    question: "What daily ad budget is recommended to start seeing direct bookings?",
    answer: "For independent hotels and boutique homestays, we recommend starting with a targeted testing budget of ₹500 to ₹1,500 per day. Once we identify the best-performing keywords and ad creatives, we scale the budget efficiently to maximize room occupancy during peak and off-peak periods."
  },
  {
    question: "Do you create the ad creatives, video copy, and graphic assets?",
    answer: "Yes, 100%. GrowGuest writes the conversion copywriting, designs ad visuals, formats mobile-first video reels, sets up audience tracking pixels, and actively manages bids and negative keywords daily."
  }
];

export default function PaidAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(30000);
  const [roomTariff, setRoomTariff] = useState<number>(4500);

  const breadcrumbItems = [
    { name: 'Services', url: '/hotel-digital-marketing-services/' },
    { name: 'Paid Ads (Google & Meta)', url: '/hotel-paid-ads-google-meta/' }
  ];

  // Calculated estimates based on typical 8.5x ROAS in hospitality
  const estimatedRevenue = monthlyBudget * 8.5;
  const estimatedBookings = Math.round(estimatedRevenue / (roomTariff * 1.5));
  const otaFeeSaved = estimatedRevenue * 0.20;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paid Ads Management for Hotels — Google Ads & Meta Ads",
    "serviceType": "Hospitality PPC & Performance Marketing",
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
    "description": "High-ROI Google Search Ads, Google Hotel Ads, and Meta (Instagram/Facebook) advertising engineered exclusively for hotels, resorts, and homestays to drive direct guest bookings.",
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
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen text-[#141716]">
      <SEO
        title="Hotel Paid Ads Management | Google Ads & Meta Ads | GrowGuest"
        description="High-ROI Google Ads, Instagram Reels ads, and Click-to-WhatsApp campaigns built specifically for hotels, resorts, and homestays. Stop wasting ad spend and capture direct bookings."
        keywords="hotel google ads, paid ads for hotels, hospitality meta ads, instagram ads for resorts, click to whatsapp hotel ads, google hotel ads management, hotel PPC agency Nagpur"
        canonicalUrl="https://growguest.in/hotel-paid-ads-google-meta/"
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
              <span>HIGH-ROAS PERFORMANCE MARKETING</span>
            </motion.div>

            <motion.h1 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title mb-6"
            >
              Paid Ads Management: <br className="hidden sm:inline" /><em>Google Ads & Social Media</em>
            </motion.h1>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-desc mb-8"
            >
              Stop wasting money on boosted posts and untargeted clicks. We craft laser-focused Google Search, Google Hotel Ads, and Instagram Reels campaigns that deliver verified direct room bookings.
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
                <span>Claim Free Ads Audit</span>
                <span className="btn-arrow">↗</span>
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#25d366]" />
                <span>Discuss Ads Strategy</span>
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
              <TrendingUp className="w-5 h-5 text-[#dfad3c] flex-shrink-0" />
              <span>8.5x Average Client ROAS</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>&lt;24h Campaign Setup</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Percent className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>Zero Wasted Ad Spend</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <DollarSign className="w-5 h-5 text-[#25d366] flex-shrink-0" />
              <span>Save 20% OTA Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Typical Ads Fail vs GrowGuest */}
      <section className="py-16">
        <div className="container">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[rgba(16,41,32,0.08)] shadow-sm">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                THE PAIN POINT
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] mb-4">
                Why 85% of Hotel Ads Fail to <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Generate Bookings</em>
              </h2>
              <p className="text-[#546059] text-base sm:text-lg leading-relaxed">
                Most generic marketing agencies treat a boutique hotel like an e-commerce shop. They waste thousands on broad keywords like "Nagpur hotels" or blindly boost Instagram posts that get likes from random accounts without generating a single reservation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center space-x-3 mb-4 text-red-700 font-extrabold">
                  <ShieldAlert className="w-6 h-6" />
                  <h3 className="text-lg">What Generic Agencies Do (Wasted Spend)</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#222724]">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Broad keywords that trigger on job searches or student queries.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Pushing traffic to slow, broken websites with confusing reservation forms.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    Boosting generic greeting cards on Instagram that only collect empty likes.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    No WhatsApp direct routing, leaving inquiries unanswered for hours.
                  </li>
                </ul>
              </div>

              <div className="bg-[#fbf6e8]/60 p-6 rounded-2xl border border-[#dfad3c]/30">
                <div className="flex items-center space-x-3 mb-4 text-[#071510] font-extrabold">
                  <CheckCircle2 className="w-6 h-6 text-[#25d366]" />
                  <h3 className="text-lg">The GrowGuest Hospitality Paid Ads Engine</h3>
                </div>
                <ul className="space-y-3 text-sm text-[#222724]">
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Bottom-of-funnel exact intent keywords ("pool villa near Nagpur for weekend").
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Sub-1.5 second landing pages designed purely to secure phone calls & chats.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Short-form cinematic video reels that spark genuine travel desire.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#25d366] mr-2 font-bold">✓</span>
                    Instant Click-to-WhatsApp triggers that land pre-filled bookings at your front desk.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Paid Ad Pillars */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/10 border border-[#dfad3c]/25 text-[#c99a2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              OUR AD STRATEGY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071510] mb-4">
              Complete Multi-Channel <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Paid Ad Architecture</em>
            </h2>
            <p className="text-[#546059] text-lg leading-relaxed">
              Every campaign is built from the ground up for hospitality ROI — intercepting active searchers and nurturing passive travelers into guests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adChannels.map((channel, index) => (
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
                    {channel.icon}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#c99a2e] mb-2 block font-semibold">
                    {channel.subtitle}
                  </span>

                  <h3 className="text-xl font-extrabold text-[#071510] mb-3">
                    {channel.title}
                  </h3>

                  <p className="text-[#546059] leading-relaxed mb-6 text-sm">
                    {channel.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(16,41,32,0.08)]">
                  {channel.tags.map((tag, tIdx) => (
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

      {/* Interactive Ad Spend & ROAS Calculator */}
      <section className="py-20 bg-[#071510] text-white">
        <div className="container">
          <div className="bg-[#0c2018] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-mono font-semibold text-[#dfad3c] uppercase tracking-widest mb-3">
                  ESTIMATED PERFORMANCE CALCULATOR
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight" style={{ color: '#ffffff' }}>
                  Calculate Your Direct Booking <span className="font-serif italic font-normal text-[#dfad3c]">Ad Returns</span>
                </h2>
                <p className="text-slate-300 text-base mb-8">
                  Adjust the sliders to estimate how much direct booking revenue you can generate with a GrowGuest managed ad campaign.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-200">Monthly Ad Spend:</span>
                      <span className="text-[#dfad3c] font-bold">₹{monthlyBudget.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="15000" 
                      max="200000" 
                      step="5000"
                      value={monthlyBudget} 
                      onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-slate-200">Average Room Tariff:</span>
                      <span className="text-[#dfad3c] font-bold">₹{roomTariff.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="15000" 
                      step="500"
                      value={roomTariff} 
                      onChange={(e) => setRoomTariff(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#dfad3c]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#071510] p-8 rounded-2xl border border-[#dfad3c]/30 text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-semibold block mb-1">
                    Projected Direct Room Revenue
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-emerald-400">
                    ₹{Math.round(estimatedRevenue).toLocaleString('en-IN')}
                  </span>
                  <span className="block text-xs text-emerald-200/80 mt-1">
                    Based on conservative 8.5x average ROAS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="bg-[#0c2018] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block uppercase">Est. Room Nights</span>
                    <span className="text-xl font-bold text-white" style={{ color: '#ffffff' }}>~{estimatedBookings} nights</span>
                  </div>
                  <div className="bg-[#0c2018] p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-[#dfad3c] block uppercase">OTA Commission Saved</span>
                    <span className="text-xl font-bold text-emerald-400">₹{Math.round(otaFeeSaved).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <a 
                  href="#audit" 
                  className="btn btn-gold w-full justify-center"
                >
                  <span>Start High-ROI Paid Ads Today</span>
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
              QUESTIONS & ANSWERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] mb-3">
              Frequently Asked Questions About <em className="font-serif italic font-normal text-[#c99a2e] not-italic">Paid Ads</em>
            </h2>
            <p className="text-[#546059]">
              Everything you need to know about our Google & Meta ads management for hospitality.
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
