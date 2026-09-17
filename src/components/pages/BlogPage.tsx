import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Globe, 
  Percent, 
  MessageSquare, 
  Star,
  FileText,
  CheckCircle2
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const blogPosts = [
  {
    id: 0,
    title: "Digital Marketing for Hospitality: What Actually Gets Hotels and Homestays More Direct Bookings",
    slug: "/blog/digital-marketing-for-hospitality-hotels-resorts-homestays/",
    category: "Direct Booking",
    readTime: "7 min read",
    date: "Aug 2026",
    excerpt: "How independent hotels and homestays shift reservations off OTAs, protect 18–25% guest margins, and turn Google searchers into prepaid direct bookings.",
    icon: <Sparkles className="w-5 h-5 text-brand-gold" />,
    featured: true
  },
  {
    id: 1,
    title: "How to Cut OTA Commissions by 50% Without Losing Booking Volume",
    slug: "/blog/hotel-direct-booking-strategy-reduce-ota-commissions/",
    category: "Direct Booking",
    readTime: "7 min read",
    date: "Aug 2026",
    excerpt: "Shift guest volume from MakeMyTrip, Agoda, and Booking.com to direct channels. Keep your room rates competitive while retaining 100% of guest revenue.",
    icon: <Percent className="w-5 h-5 text-brand-gold" />,
    featured: false
  },
  {
    id: 2,
    title: "Google Business Profile SEO for Homestays & Resorts in Nagpur",
    slug: "/blog/google-business-profile-seo-homestays-resorts/",
    category: "Local SEO",
    readTime: "5 min read",
    date: "Aug 2026",
    excerpt: "Rank in Google Maps' top 3 for Nagpur tourists and corporate travelers. Setup rules for primary categories, geotagged room photos, and verified local citations.",
    icon: <MapPin className="w-5 h-5 text-brand-gold" />,
    featured: false
  },
  {
    id: 3,
    title: "Hotel Website Conversion Fixes: Turning Lookers Into Direct Bookers",
    slug: "/blog/hotel-website-conversion-rate-optimization/",
    category: "Website UX",
    readTime: "6 min read",
    date: "Jul 2026",
    excerpt: "Sub-1.5s mobile page loads, sticky WhatsApp booking bars, and transparent room pricing that lift direct website reservations by 60%+.",
    icon: <Globe className="w-5 h-5 text-brand-gold" />,
    featured: false
  },
  {
    id: 4,
    title: "Local SEO Guide for Resorts & Boutique Stays in Hill Stations",
    slug: "/blog/local-seo-guide-resorts-hotels/",
    category: "Local SEO",
    readTime: "8 min read",
    date: "Jul 2026",
    excerpt: "Capture high-intent weekend getaway searches across Mukteshwar, Ramgarh, and Nainital. Build local authority that outranks aggregators on Google Search.",
    icon: <BookOpen className="w-5 h-5 text-brand-gold" />,
    featured: false
  },
  {
    id: 5,
    title: "WhatsApp Booking Strategies for Indian Hospitality Property Owners",
    slug: "/blog/whatsapp-marketing-strategies-hotel-room-bookings/",
    category: "WhatsApp Automation",
    readTime: "4 min read",
    date: "Jun 2026",
    excerpt: "Close guest inquiries in under 60 seconds. 1-click WhatsApp chat triggers and automated instant quotation flows that stop guests from bouncing to OTAs.",
    icon: <MessageSquare className="w-5 h-5 text-brand-gold" />,
    featured: false
  },
  {
    id: 6,
    title: "Managing Google Reviews & Reputation for Independent Nagpur Hotels",
    slug: "/blog/hotel-reputation-management-google-reviews/",
    category: "Reputation",
    readTime: "5 min read",
    date: "Jun 2026",
    excerpt: "Turn checkout conversations into 5-star Google reviews on autopilot. Handle negative ratings without panic and strengthen your local map pack ranking.",
    icon: <Star className="w-5 h-5 text-brand-gold" />,
    featured: false
  }
];

const categories = ["All", "Direct Booking", "Local SEO", "Website UX", "WhatsApp Automation", "Reputation"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const breadcrumbItems = [
    { name: 'Blog', url: '/hospitality-digital-marketing-blog/' }
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GrowGuest Blog | Hotel & Homestay Marketing Insights",
    "description": "Practical local SEO, Google Business Profile rankings, and commission-free direct booking playbooks for independent hotels, resorts, and homestays.",
    "url": "https://growguest.in/hospitality-digital-marketing-blog/",
    "publisher": {
      "@type": "Organization",
      "name": "GrowGuest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growguest.in/assets/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://growguest.in${post.slug}`,
      "datePublished": "2026-08-01"
    }))
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "GrowGuest Blog | Hotel & Homestay Marketing Insights",
    "description": "Practical local SEO, Google Business Profile rankings, and commission-free direct booking playbooks for independent hotels, resorts, and homestays.",
    "url": "https://growguest.in/hospitality-digital-marketing-blog/"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="GrowGuest Blog | Hotel & Homestay Marketing Insights"
        description="Practical local SEO, Google Business Profile rankings, and commission-free direct booking playbooks for independent hotels, resorts, and homestays."
        keywords="hotel and homestay marketing tips, local SEO, GBP, OTA commission, direct booking, hotel marketing blog India, Nagpur hotel SEO guide"
        canonicalUrl="https://growguest.in/hospitality-digital-marketing-blog/"
        breadcrumbs={breadcrumbItems}
      />

      <script type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(collectionSchema)}
      </script>

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-brand-teal text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_#C99A2E_0%,_transparent_55%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 shrink-0 text-brand-gold" />
              <span>Hospitality SEO & Direct Booking Guides</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12] [text-wrap:balance]"
            >
              Hospitality Marketing Insights & Direct Booking Strategies
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto [text-wrap:pretty]"
            >
              Field-tested playbooks to rank in Google Maps 3-Pack, speed up mobile booking funnels, and protect 18–25% guest margins from OTA commissions.
            </motion.p>

            {/* AEO Direct Answer Summary Card - High-Craft Executive Briefing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border border-white/15 bg-slate-900/90 text-slate-200 p-6 sm:p-7 rounded-2xl shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_32px_-8px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-gold" />
              <div className="pl-3 sm:pl-4">
                <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2.5">
                  <FileText className="w-4 h-4 shrink-0 text-brand-gold" />
                  <span>Direct-Booking Knowledge Base &bull; GrowGuest</span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-slate-100 [text-wrap:pretty]">
                  GrowGuest publishes field-tested digital growth playbooks for independent hoteliers, resort operators, and homestay owners across India. Every guide provides verified, step-by-step implementations for <strong>Google Business Profile Map Pack rankings</strong>, <strong>frictionless WhatsApp booking funnels</strong>, and <strong>cutting OTA commission leakages down to zero</strong>.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                selectedCategory === cat
                  ? 'bg-brand-teal text-white shadow-sm ring-1 ring-brand-teal'
                  : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Main Blog Articles Container */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Featured Banner Post */}
        {selectedCategory === "All" && (
          <div className="bg-slate-900 text-white rounded-3xl p-7 sm:p-10 lg:p-12 border border-white/10 shadow-[0_16px_40px_-8px_rgba(4,63,46,0.35)] overflow-hidden relative">
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-brand-gold text-brand-teal px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider z-20 shadow-sm">
              Featured Guide
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest inline-flex items-center gap-2 mb-3">
                  <span>{featuredPost.category}</span>
                  <span className="opacity-60">&bull;</span>
                  <span>{featuredPost.readTime}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-[1.18] tracking-tight [text-wrap:balance]">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl [text-wrap:pretty]">
                  {featuredPost.excerpt}
                </p>
                <a
                  href={featuredPost.slug}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-brand-teal font-extrabold text-sm bg-brand-gold hover:bg-brand-gold-light transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <span>Read Full Strategy Guide</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </a>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-800 aspect-[16/9] relative group">
                  <img
                    src="/Image/GrowGuest%20Header.avif"
                    alt="Digital Marketing for Hospitality Header - GrowGuest"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {selectedCategory === "All" ? "All Hospitality Marketing Guides" : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_6px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_6px_rgba(15,23,42,0.03),0_16px_32px_-6px_rgba(15,23,42,0.1)] hover:-translate-y-1 hover:border-brand-teal/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/10 text-brand-teal border border-brand-teal/15">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-teal transition-colors duration-200 leading-snug tracking-tight [text-wrap:balance]">
                    <a href={post.slug} className="hover:underline decoration-brand-teal/40 underline-offset-4">
                      {post.title}
                    </a>
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 [text-wrap:pretty]">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.date}</span>
                  <a
                    href={post.slug}
                    className="font-bold text-brand-teal group-hover:text-brand-teal-light transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </section>

      {/* Free Audit Callout Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.4)] relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight leading-tight [text-wrap:balance]">
              Stop Losing 18% to 25% on Every Guest Reservation
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-7 [text-wrap:pretty] leading-relaxed">
              Get a personalized, manual 4-point direct booking and local SEO audit for your property. Delivered to your WhatsApp within 24 to 48 hours.
            </p>
            <div>
              <a
                href="/free-hotel-digital-marketing-audit/"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-brand-teal font-extrabold text-sm sm:text-base bg-brand-gold hover:bg-brand-gold-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Claim Free Direct Booking Audit</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold inline shrink-0" />
              <span>100% Free</span>
              <span className="opacity-40">&bull;</span>
              <span>Zero Obligation</span>
              <span className="opacity-40">&bull;</span>
              <span>Manual Review by Specialists (No Bot Spam)</span>
            </p>
          </div>
        </div>
      </section>

      <AuditForm />
    </div>
  );
}
