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
    icon: <Search className="w-8 h-8 text-[#043f2e]" />,
    title: "Google Search Ads (Intent Capture)",
    subtitle: "Intercepting travelers actively looking to book right now",
    description: "When someone searches 'luxury resort in Nagpur with pool' or 'family homestay Mukteshwar', we place your property in spot #1. We use tight geo-targeting, negative keyword lists, and custom ad copy highlighting your best direct rates.",
    tags: ["High Intent", "Zero Wasted Spend", "Direct Phone Calls"]
  },
  {
    icon: <Target className="w-8 h-8 text-[#043f2e]" />,
    title: "Google Hotel Ads & Free Booking Links",
    subtitle: "Appearing directly on Google Travel & Google Maps pricing grids",
    description: "Display your official direct booking rates right beside MakeMyTrip, Agoda, and Booking.com with an eye-catching 'Official Site' badge. Travelers who see a better direct perk click through and book directly.",
    tags: ["Official Rate Badge", "OTA Price Match", "Google Travel"]
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-[#043f2e]" />,
    title: "Meta Ads (Instagram & Facebook Reels)",
    subtitle: "Sparking wanderlust and driving weekend staycation bookings",
    description: "Visual platforms sell hospitality. We launch cinematic video reels and carousel ads showcasing your property views, luxury rooms, dining, and pool experiences to affluent travelers within a 150-300km driving radius.",
    tags: ["Instagram Reels", "Visual Storytelling", "Weekend Getaways"]
  },
  {
    icon: <Zap className="w-8 h-8 text-[#043f2e]" />,
    title: "Direct WhatsApp Click-to-Chat Ads",
    subtitle: "Skip friction-heavy landing page forms — start chats instantly",
    description: "Indian travelers love chatting directly before paying. Our high-converting Meta click-to-WhatsApp ads connect prospective guests straight to your front desk with a pre-filled reservation inquiry message.",
    tags: ["Instant Inquiry", "90%+ Open Rate", "Indian Guest Preferred"]
  },
  {
    icon: <Sliders className="w-8 h-8 text-[#043f2e]" />,
    title: "Dynamic Retargeting & Cart Abandonment",
    subtitle: "Bring back the 96% of website visitors who left without booking",
    description: "Guests rarely book on their first visit. We retarget guests who viewed your room categories with special seasonal offers, limited-time direct discounts, and social proof testimonials to seal the booking.",
    tags: ["Audience Remarketing", "Lower CPA", "Higher Conversion"]
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#043f2e]" />,
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
    <div className="bg-[#eef2e3] min-h-screen">
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

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-emerald-500/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#c8f169]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              High-ROAS Hospitality Performance Marketing
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              Paid Ads Management: <span className="font-serif italic font-normal text-[#c8f169]">Google Ads & Social Media</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              Stop wasting money on boosted posts and untargeted clicks. We craft laser-focused Google Search, Google Hotel Ads, and Instagram Reels campaigns that deliver verified direct room bookings.
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
                Claim Free Ads Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Discuss Ads Strategy
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-[#02291e] text-slate-300 py-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-semibold">
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#c8f169] flex-shrink-0" />
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
              <DollarSign className="w-5 h-5 text-[#c8f169] flex-shrink-0" />
              <span>Save 20% OTA Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Typical Ads Fail vs GrowGuest */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fcfcfc] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#043f2e] bg-[#c8f169] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#043f2e]/20">
              THE PAIN POINT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#043f2e] mb-4">
              Why 85% of Hotel Ads Fail to Generate Bookings
            </h2>
            <p className="text-[#242423] text-base sm:text-lg leading-relaxed">
              Most generic marketing agencies treat a boutique hotel like an e-commerce shop. They waste thousands on broad keywords like "Nagpur hotels" or blindly boost Instagram posts that get likes from random accounts without generating a single reservation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
              <div className="flex items-center space-x-3 mb-4 text-red-700 font-extrabold">
                <ShieldAlert className="w-6 h-6" />
                <h3 className="text-lg">What Generic Agencies Do (Wasted Spend)</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#242423]">
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

            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
              <div className="flex items-center space-x-3 mb-4 text-[#043f2e] font-extrabold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg">The GrowGuest Hospitality Paid Ads Engine</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#242423]">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Bottom-of-funnel exact intent keywords ("pool villa near Nagpur for weekend").
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Sub-1.5 second landing pages designed purely to secure phone calls & chats.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Short-form cinematic video reels that spark genuine travel desire.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Instant Click-to-WhatsApp triggers that land pre-filled bookings at your front desk.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Paid Ad Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#043f2e] bg-[#c8f169] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#043f2e]/20">
            OUR AD STRATEGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043f2e] mb-4">
            Complete Multi-Channel Paid Ad Architecture
          </h2>
          <p className="text-[#242423] text-lg leading-relaxed">
            Every campaign is built from the ground up for hospitality ROI — intercepting active searchers and nurturing passive travelers into guests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adChannels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#fcfcfc] rounded-3xl p-8 shadow-lg border border-slate-200/80 hover:shadow-2xl hover:border-[#043f2e]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-[#eef2e3] rounded-2xl flex items-center justify-center mb-6 border border-[#043f2e]/10 shadow-sm">
                  {channel.icon}
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-2 block">
                  {channel.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-[#043f2e] mb-3">
                  {channel.title}
                </h3>

                <p className="text-[#242423] leading-relaxed mb-6 text-sm">
                  {channel.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {channel.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-[#eef2e3] text-[#043f2e] font-bold text-xs px-2.5 py-1 rounded-md border border-[#043f2e]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Ad Spend & ROAS Calculator */}
      <section className="py-20 bg-[#02291e] text-white border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#043f2e] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#c8f169] uppercase tracking-widest mb-3">
                  ESTIMATED PERFORMANCE CALCULATOR
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Calculate Your Direct Booking Ad Returns
                </h2>
                <p className="text-emerald-100/90 text-base mb-8">
                  Adjust the sliders to estimate how much direct booking revenue you can generate with a GrowGuest managed ad campaign.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Monthly Ad Spend:</span>
                      <span className="text-[#c8f169] font-bold">₹{monthlyBudget.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="15000" 
                      max="200000" 
                      step="5000"
                      value={monthlyBudget} 
                      onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                      className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#c8f169]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Average Room Tariff:</span>
                      <span className="text-[#c8f169] font-bold">₹{roomTariff.toLocaleString('en-IN')}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="15000" 
                      step="500"
                      value={roomTariff} 
                      onChange={(e) => setRoomTariff(Number(e.target.value))}
                      className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#c8f169]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#02291e] p-8 rounded-2xl border border-[#c8f169]/30 text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-semibold block mb-1">
                    Projected Direct Room Revenue
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-[#c8f169]">
                    ₹{Math.round(estimatedRevenue).toLocaleString('en-IN')}
                  </span>
                  <span className="block text-xs text-emerald-200/80 mt-1">
                    Based on conservative 8.5x average ROAS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-900">
                  <div className="bg-[#043f2e]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-300 block uppercase">Est. Room Nights</span>
                    <span className="text-xl font-bold text-white">~{estimatedBookings} nights</span>
                  </div>
                  <div className="bg-[#043f2e]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-[#c8f169] block uppercase">OTA Commission Saved</span>
                    <span className="text-xl font-bold text-emerald-400">₹{Math.round(otaFeeSaved).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <a 
                  href="#audit" 
                  className="inline-flex items-center justify-center w-full py-4 px-6 rounded-full text-[#043f2e] font-extrabold bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-lg"
                >
                  Start High-ROI Paid Ads Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#fcfcfc] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#043f2e] mb-3">
              Frequently Asked Questions About Paid Ads
            </h2>
            <p className="text-[#242423]">
              Everything you need to know about our Google & Meta ads management for hospitality.
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
