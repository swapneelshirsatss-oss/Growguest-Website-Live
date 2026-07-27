import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Your Google Business Profile for Homestays",
    excerpt: "Learn the exact steps to rank higher on Google Maps and capture guests searching for stays in your area.",
    date: "Aug 12, 2024",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    slug: "google-business-profile-seo-homestays-resorts"
  },
  {
    id: 2,
    title: "Stop Paying 20% to OTAs: The Direct Booking Strategy",
    excerpt: "A comprehensive guide to transitioning from MakeMyTrip and Agoda dependence to a profitable direct booking model.",
    date: "Sep 05, 2024",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    slug: "hotel-direct-booking-strategy-reduce-ota-commissions"
  },
  {
    id: 3,
    title: "Why Your Hotel Website Isn't Converting (And How to Fix It)",
    excerpt: "Discover the most common design mistakes that cause potential guests to abandon your site and book elsewhere.",
    date: "Oct 22, 2024",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    slug: "hotel-website-conversion-rate-optimization"
  },
  {
    id: 4,
    title: "The Ultimate Local SEO Guide for Resorts in 2024",
    excerpt: "How to ensure your resort appears first when people search for weekend getaways and staycations.",
    date: "Nov 15, 2024",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=800&auto=format&fit=crop",
    slug: "local-seo-guide-resorts-hotels"
  },
  {
    id: 5,
    title: "Using WhatsApp Business to Close More Room Bookings",
    excerpt: "Scripts, templates, and strategies to turn casual inquiries into confirmed, paid reservations over WhatsApp.",
    date: "Dec 02, 2024",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    slug: "whatsapp-marketing-strategies-hotel-room-bookings"
  },
  {
    id: 6,
    title: "Building Trust: How Reviews Impact Your Revenue",
    excerpt: "Strategies for generating more 5-star Google reviews and showcasing them to drive direct bookings.",
    date: "Jan 18, 2025",
    author: "Growguest Team",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop",
    slug: "hotel-reputation-management-google-reviews"
  }
];

export default function Blog() {
  const breadcrumbItems = [
    { name: 'Blog', url: '/hospitality-digital-marketing-blog' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16 lg:pb-28">
      <SEO
        title="Hospitality Digital Marketing Blog | Growguest Insights"
        description="Actionable strategies, case studies, and guides to help hotels, resorts, and homestays maximize direct bookings and profitability."
        canonicalUrl="https://growguest.com/hospitality-digital-marketing-blog"
        breadcrumbs={breadcrumbItems}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Hospitality Growth <span className="text-brand-teal">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Actionable strategies, case studies, and guides to help hotels, resorts, and homestays maximize direct bookings and profitability.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-md hover:border-brand-teal/30 transition-all group"
            >
              <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-[16/9]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1.5" />
                    {post.author}
                  </span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block mb-3">
                  <h2 className="text-xl font-bold text-slate-800 group-hover:text-brand-teal transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-brand-teal hover:text-brand-teal-light transition-colors mt-auto"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
