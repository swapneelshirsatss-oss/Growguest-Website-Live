import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Instagram, 
  Video, 
  Calendar, 
  MessageCircle, 
  Users, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Heart, 
  Camera, 
  ChevronDown, 
  ChevronUp, 
  Share2,
  AlertCircle
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const socialServices = [
  {
    icon: <Video className="w-8 h-8 text-[#043f2e]" />,
    title: "Cinematic Short-Form Video & Reels",
    subtitle: "High-craft visuals that spark immediate travel desire",
    description: "Travelers book feelings, not room specifications. We produce aesthetic, scroll-stopping Instagram Reels showcasing early morning mist on the balcony, poolside sunsets, luxury bathtub ambiance, and sizzling dining experiences.",
    tags: ["Instagram Reels", "YouTube Shorts", "Drone & 4K Walkthroughs"]
  },
  {
    icon: <Calendar className="w-8 h-8 text-[#043f2e]" />,
    title: "Monthly Strategic Content Calendars",
    subtitle: "Consistent multi-channel posting across Instagram & Facebook",
    description: "No more last-minute scrambling for content. We plan 12-16 bespoke monthly posts and reels around 5 core hospitality pillars: Room Tours, Culinary Masterpieces, Local Experiences, Guest Stories, and Limited Weekend Offers.",
    tags: ["12-16 Posts/Month", "Storytelling Pillars", "Scheduled Automation"]
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-[#043f2e]" />,
    title: "Active DM & Comment-to-WhatsApp Booking Conversion",
    subtitle: "Turn casual 'Price please?' comments into confirmed room revenue",
    description: "Unanswered Instagram DMs are lost room nights. We set up fast-response conversational workflows and scripts that immediately guide interested commenters into a 1-click WhatsApp conversation with your reservation desk.",
    tags: ["Instant DM Reply", "Comment Automation", "Direct WhatsApp Handoff"]
  },
  {
    icon: <Users className="w-8 h-8 text-[#043f2e]" />,
    title: "Travel Influencer & Creator Collaborations",
    subtitle: "Vetted hospitality influencers who deliver high-converting assets",
    description: "We protect you from free-stay freeloaders. We vet travel creators based on authentic local engagement, negotiate deliverable contracts (Reels, high-res photos, story links), and manage on-property production.",
    tags: ["Creator Vetting", "Zero Fake Followers", "Reusable Media Rights"]
  },
  {
    icon: <Camera className="w-8 h-8 text-[#043f2e]" />,
    title: "User-Generated Content (UGC) & Social Proof",
    subtitle: "Encourage guests to tag your property and repost their delight",
    description: "Happy guests are your best sales team. We design on-property 'Instagrammable photo corners', launch guest photo contests, and curate genuine traveler stories that build unbeatable social credibility.",
    tags: ["Photo Spots", "Guest Story Reposting", "Authentic Trust"]
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#043f2e]" />,
    title: "Omnichannel Brand Consistency & Bio Optimization",
    subtitle: "Optimize your profile bio, highlights, and direct booking links",
    description: "We transform your Instagram, Facebook, and Google Business profiles into direct booking hubs. From custom highlight covers (Rooms, Menu, Pool, Reviews) to 1-click direct reservation links with tracking parameters.",
    tags: ["Bio Link Conversion", "Custom Highlights", "Brand Aesthetic"]
  }
];

const faqs = [
  {
    question: "Why is generic social media posting a waste of time for hotels and homestays?",
    answer: "Most digital marketing agencies post generic festival greeting graphics or stock photos with meaningless quotes that get zero engagement from travelers. Hospitality social media requires visual storytelling — high-definition video walkthroughs of suites, honest guest reactions, food presentation, and local attractions that evoke genuine travel emotion."
  },
  {
    question: "How do you turn Instagram followers and views into actual hotel bookings?",
    answer: "Views alone don't pay electricity bills. We integrate every reel and post with a direct call to action, automated comment triggers ('Comment STAY for weekend rates'), and instant direct DM responses that route warm inquiries directly into WhatsApp. This turns passive video viewers into paying guests."
  },
  {
    question: "Do you supply professional photography and videography for our property?",
    answer: "Yes! For properties in Nagpur, Maharashtra, and Uttarakhand hill stations (Mukteshwar, Nainital, Ramgarh), our team conducts on-site cinematic shoot visits to capture high-definition 4K video, drone footage, culinary showcases, and room ambiance to build a 3-month media repository."
  },
  {
    question: "How often will you post on our property social media channels?",
    answer: "We typically publish 3 to 4 high-craft short-form video reels and photo carousels per week (12-16 posts per month), complemented by daily Instagram Stories covering day-to-day property ambiance, guest reviews, and last-minute room availability."
  },
  {
    question: "How do you manage influencer collaborations to avoid wasted comp rooms?",
    answer: "We establish strict vetting criteria before approving any influencer stay: audience location match (travelers who live within driving distance of your property), genuine engagement rate above 4%, and a signed deliverables agreement specifying exact reels, raw photo files, and usage rights for paid ads."
  }
];

export default function SocialMediaManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [monthlyFollowers, setMonthlyFollowers] = useState<number>(5000);

  const breadcrumbItems = [
    { name: 'Services', url: '/hotel-digital-marketing-services/' },
    { name: 'Social Media Management', url: '/hospitality-social-media-management/' }
  ];

  // Estimated monthly booking inquiries based on typical 1.5% engagement-to-inquiry rate
  const estimatedInquiries = Math.round(monthlyFollowers * 0.015);
  const estimatedDirectBookings = Math.round(estimatedInquiries * 0.25);
  const estimatedRevenue = estimatedDirectBookings * 4500;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospitality Social Media Management & Instagram Storytelling",
    "serviceType": "Hotel Social Media Marketing & Content Creation",
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
    "description": "Hospitality social media management tailored for hotels, resorts, homestays, and dining venues. Instagram Reels, short-form video production, influencer vetting, and direct WhatsApp DM booking funnels.",
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
        title="Hospitality Social Media Management | Instagram Reels & Storytelling | GrowGuest"
        description="Bespoke social media management for hotels, resorts, and homestays. Cinematic Instagram Reels, monthly content calendars, creator vetting, and direct WhatsApp DM booking funnels."
        keywords="hotel social media management, hospitality social media agency, instagram marketing for resorts, hotel instagram reels, social media for homestays, luxury hotel social media marketing Nagpur"
        canonicalUrl="https://growguest.in/hospitality-social-media-management/"
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
              Visual Storytelling & Direct Social Revenue
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight"
            >
              Hospitality Social Media: <span className="font-serif italic font-normal text-[#c8f169]">Turn Followers into Direct Bookings</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              No more lifeless greeting cards or generic posters. We create cinematic Instagram Reels, room walkthroughs, and automated DM funnels that turn travel inspiration into confirmed reservations.
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
                Claim Free Social Media Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918956907343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur border border-white/20"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Discuss Content Strategy
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
              <Instagram className="w-5 h-5 text-[#c8f169] flex-shrink-0" />
              <span>Instagram & Facebook Growth</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Video className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>12-16 Custom Reels / Mo</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>Authentic Guest Engagement</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-5 h-5 text-[#c8f169] flex-shrink-0" />
              <span>Direct WhatsApp DM Funnels</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Hotel Social Media Fails */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fcfcfc] rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#043f2e] bg-[#c8f169] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#043f2e]/20">
              THE ENGAGEMENT GAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#043f2e] mb-4">
              Why Stock Posters & Festival Wishes Don't Sell Rooms
            </h2>
            <p className="text-[#242423] text-base sm:text-lg leading-relaxed">
              When a traveler browses Instagram for their next weekend escape, they don't care about a "Happy World Environment Day" graphic. They want to see the steam rising from the hot coffee, the panoramic mountain sunrise, the fresh bed linen, and the sparkling private pool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200">
              <div className="flex items-center space-x-3 mb-4 text-red-700 font-extrabold">
                <AlertCircle className="w-6 h-6" />
                <h3 className="text-lg">What Amateur Agencies Post</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#242423]">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  Generic Canva templates and greeting cards that get 3 likes.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  Random static phone pictures with poor lighting and cluttered angles.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  Ignored comments and DMs asking "What is the tariff per night?"
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  Wasted comp nights given to fake influencers with purchased follower lists.
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200">
              <div className="flex items-center space-x-3 mb-4 text-[#043f2e] font-extrabold">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg">The GrowGuest Social Storytelling Engine</h3>
              </div>
              <ul className="space-y-3 text-sm text-[#242423]">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Cinematic short-form 4K reels edited with trending hospitality audio.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Multi-angle suite walkthroughs and culinary highlights that build wanderlust.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Instant DM automation converting pricing inquiries directly into WhatsApp leads.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2 font-bold">✓</span>
                  Strict influencer vetting ensuring real local travelers and reusable ad media.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Social Media Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#043f2e] bg-[#c8f169] px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[#043f2e]/20">
            CONTENT PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043f2e] mb-4">
            End-to-End Social Media Management
          </h2>
          <p className="text-[#242423] text-lg leading-relaxed">
            From creative ideation and video editing to community management and influencer curation, we handle your entire visual brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialServices.map((service, index) => (
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
                  {service.icon}
                </div>

                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-2 block">
                  {service.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-[#043f2e] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#242423] leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {service.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-[#eef2e3] text-[#043f2e] font-bold text-xs px-2.5 py-1 rounded-md border border-[#043f2e]/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Booking Funnel Simulator */}
      <section className="py-20 bg-[#02291e] text-white border-y border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#043f2e] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-xs font-bold text-[#c8f169] uppercase tracking-widest mb-3">
                  SOCIAL REVENUE SIMULATOR
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                  Calculate Your Monthly Social Booking Potential
                </h2>
                <p className="text-emerald-100/90 text-base mb-8">
                  See how an engaged local following and automated DM-to-WhatsApp routing translates directly into confirmed room nights.
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Target Engaged Instagram Audience:</span>
                      <span className="text-[#c8f169] font-bold">{monthlyFollowers.toLocaleString('en-IN')} followers</span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="50000" 
                      step="1000"
                      value={monthlyFollowers} 
                      onChange={(e) => setMonthlyFollowers(Number(e.target.value))}
                      className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#c8f169]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#02291e] p-8 rounded-2xl border border-[#c8f169]/30 text-center space-y-6 shadow-xl">
                <div>
                  <span className="text-xs text-slate-300 uppercase tracking-widest font-semibold block mb-1">
                    Estimated Direct Social Revenue / Mo
                  </span>
                  <span className="text-4xl md:text-5xl font-black text-[#c8f169]">
                    ₹{Math.round(estimatedRevenue).toLocaleString('en-IN')}
                  </span>
                  <span className="block text-xs text-emerald-200/80 mt-1">
                    Based on 1.5% engagement and 25% WhatsApp close rate
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-900">
                  <div className="bg-[#043f2e]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-300 block uppercase">Est. DM Inquiries</span>
                    <span className="text-xl font-bold text-white">~{estimatedInquiries} leads</span>
                  </div>
                  <div className="bg-[#043f2e]/60 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-[#c8f169] block uppercase">Est. Room Bookings</span>
                    <span className="text-xl font-bold text-emerald-400">~{estimatedDirectBookings} rooms</span>
                  </div>
                </div>

                <a 
                  href="#audit" 
                  className="inline-flex items-center justify-center w-full py-4 px-6 rounded-full text-[#043f2e] font-extrabold bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-lg"
                >
                  Boost Your Property Socials Today
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
              Frequently Asked Questions About Social Media Management
            </h2>
            <p className="text-[#242423]">
              How we help boutique hotels and resorts transform their social presence into revenue.
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
