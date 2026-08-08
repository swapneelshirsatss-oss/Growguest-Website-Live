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
  FileText
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

const blogPosts = [
  {
    id: 1,
    title: "How to Cut OTA Commissions by 50% Without Losing Booking Volume",
    slug: "/blog/hotel-direct-booking-strategy-reduce-ota-commissions",
    category: "Direct Booking",
    readTime: "7 min read",
    date: "Aug 2026",
    excerpt: "A practical, step-by-step roadmap for independent hotel and homestay owners to shift guest bookings from MakeMyTrip, Agoda, and Booking.com to commission-free direct channels.",
    icon: <Percent className="w-6 h-6 text-brand-gold" />,
    featured: true
  },
  {
    id: 2,
    title: "Google Business Profile SEO for Homestays & Resorts in Nagpur",
    slug: "/blog/google-business-profile-seo-homestays-resorts",
    category: "Local SEO",
    readTime: "5 min read",
    date: "Aug 2026",
    excerpt: "Learn how to optimize your Google Business Profile (GBP) categories, geotagged room photos, and local citations to rank in the top 3 Google Map Pack in Nagpur.",
    icon: <MapPin className="w-6 h-6 text-brand-gold" />,
    featured: false
  },
  {
    id: 3,
    title: "Hotel Website Conversion Fixes: Turning Lookers Into Direct Bookers",
    slug: "/blog/hotel-website-conversion-rate-optimization",
    category: "Website UX",
    readTime: "6 min read",
    date: "Jul 2026",
    excerpt: "Discover simple user experience tweaks, sub-1.5s mobile speed fixes, and strategic booking CTA placements that boost your website conversion rate by 60%+.",
    icon: <Globe className="w-6 h-6 text-brand-gold" />,
    featured: false
  },
  {
    id: 4,
    title: "Local SEO Guide for Resorts & Boutique Stays in Hill Stations",
    slug: "/blog/local-seo-guide-resorts-hotels",
    category: "Local SEO",
    readTime: "8 min read",
    date: "Jul 2026",
    excerpt: "How mountain homestays in Mukteshwar, Ramgarh, and Nainital capture high-intent weekend getaway travelers searching on Google.",
    icon: <BookOpen className="w-6 h-6 text-brand-gold" />,
    featured: false
  },
  {
    id: 5,
    title: "WhatsApp Booking Strategies for Indian Hospitality Property Owners",
    slug: "/blog/whatsapp-marketing-strategies-hotel-room-bookings",
    category: "WhatsApp Automation",
    readTime: "4 min read",
    date: "Jun 2026",
    excerpt: "How 1-click WhatsApp booking buttons and automated greeting flows help front-desk teams close guest inquiries before they look at OTAs.",
    icon: <MessageSquare className="w-6 h-6 text-brand-gold" />,
    featured: false
  },
  {
    id: 6,
    title: "Managing Google Reviews & Reputation for Independent Nagpur Hotels",
    slug: "/blog/hotel-reputation-management-google-reviews",
    category: "Reputation",
    readTime: "5 min read",
    date: "Jun 2026",
    excerpt: "Ethical strategies to acquire 5-star Google reviews, handle guest feedback gracefully, and boost your local map pack trust score.",
    icon: <Star className="w-6 h-6 text-brand-gold" />,
    featured: false
  }
];

const categories = ["All", "Direct Booking", "Local SEO", "Website UX", "WhatsApp Automation", "Reputation"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' }
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "GrowGuest Blog | Hotel & Homestay Marketing Insights",
    "description": "Practical local SEO, Google Business Profile and direct-booking tips for independent hotels, resorts and homestays.",
    "url": "https://growguest.in/blog",
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
    "description": "Practical local SEO, Google Business Profile and direct-booking tips for independent hotels, resorts and homestays.",
    "url": "https://growguest.in/blog"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="GrowGuest Blog | Hotel & Homestay Marketing Insights"
        description="Practical local SEO, Google Business Profile and direct-booking tips for independent hotels, resorts and homestays."
        keywords="hotel and homestay marketing tips, local SEO, GBP, OTA commission, direct booking, hotel marketing blog India, Nagpur hotel SEO guide"
        canonicalUrl="https://growguest.in/blog"
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
              Hospitality SEO & Direct Booking Guides
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Hotel & Homestay <span className="text-brand-gold">Marketing Insights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto"
            >
              Practical, actionable guides on Google Business Profile SEO, website conversion fixes, and cutting 15-25% OTA commissions.
            </motion.p>

            {/* AEO Direct Answer Summary Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-10 text-left border-l-4 border-brand-gold bg-slate-900/90 text-slate-200 p-6 rounded-r-2xl shadow-xl border-y border-r border-white/10"
            >
              <div className="flex items-center space-x-2 text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>What Is The GrowGuest Hospitality Blog?</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-100">
                The <strong>GrowGuest Blog</strong> is a dedicated digital marketing resource for independent hotel, resort, homestay, and restaurant owners in India. It provides practical guides on <strong>local SEO, Google Map Pack rankings, OTA commission reduction strategies, and WhatsApp booking automation</strong>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-teal text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
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
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-white/10 shadow-xl overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-brand-gold text-brand-teal px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              Featured Guide
            </div>
            
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block mb-2">
                {featuredPost.category} • {featuredPost.readTime}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {featuredPost.excerpt}
              </p>
              <a
                href={featuredPost.slug}
                className="inline-flex items-center px-6 py-3.5 rounded-full text-brand-teal font-extrabold text-sm bg-brand-gold hover:bg-brand-gold-light transition-all shadow-md"
              >
                Read Full Strategy Guide
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {selectedCategory === "All" ? "All Hospitality Marketing Guides" : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs text-slate-500 font-semibold">
              Showing {filteredPosts.length} article(s)
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center font-medium">
                      <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 mb-3 hover:text-brand-teal transition-colors leading-snug">
                    <a href={post.slug}>{post.title}</a>
                  </h4>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">{post.date}</span>
                  <a
                    href={post.slug}
                    className="font-bold text-brand-teal hover:text-brand-gold transition-colors flex items-center"
                  >
                    Read Guide <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </section>

      {/* Free Audit Callout Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Want A Custom Audit For Your Hotel or Homestay?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Stop guessing your SEO rankings. Get a free, manual 4-point direct booking audit delivered to your WhatsApp within 24 to 48 hours.
          </p>
          <a
            href="/free-hotel-digital-marketing-audit"
            className="inline-flex items-center px-8 py-4 rounded-full text-brand-teal font-extrabold text-base bg-brand-gold hover:bg-brand-gold-light transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Claim Free Direct Booking Audit →
          </a>
        </div>
      </section>

      <AuditForm />
    </div>
  );
}
