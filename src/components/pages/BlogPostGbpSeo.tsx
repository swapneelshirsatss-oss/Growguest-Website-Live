import { motion } from 'motion/react';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
  Camera,
  Star,
  Search,
  ShieldCheck
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

export default function BlogPostGbpSeo() {
  const canonicalUrl = "https://growguest.in/blog/google-business-profile-seo-homestays-resorts";

  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: 'Google Business Profile SEO', url: canonicalUrl }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Google Business Profile SEO for Homestays & Resorts in Nagpur",
    "description": "Learn how to optimize your Google Business Profile categories, geotagged room photos, and local citations to rank in the top 3 Google Map Pack in Nagpur.",
    "url": canonicalUrl,
    "image": "https://growguest.in/Image/GrowGuest%20Header.avif",
    "datePublished": "2026-08-18T08:00:00+05:30",
    "dateModified": "2026-08-18T08:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": "GrowGuest Founder",
      "jobTitle": "Hospitality Digital Marketing Consultant",
      "url": "https://growguest.in/about-hospitality-marketing-agency"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GrowGuest",
      "url": "https://growguest.in/"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is Google Business Profile the #1 direct booking driver for Nagpur hotels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over 78% of local and business travelers search Google Maps for 'hotels near Nagpur railway station', 'resort in Wardha road', or 'luxury homestay in Nagpur'. Ranking in the Top 3 3-Pack generates immediate phone calls and WhatsApp booking inquiries with zero commission."
        }
      }
    ]
  };

  return (
    <div className="bg-[#fcfcfc] text-[#242423] min-h-screen">
      <SEO
        title="Google Business Profile SEO for Homestays & Resorts in Nagpur | Growguest"
        description="Learn how to optimize your Google Business Profile (GBP) categories, geotagged room photos, and local citations to rank in the top 3 Google Map Pack in Nagpur."
        keywords="Google Business Profile for hotels, GBP audit for hospitality, local SEO for homestays Nagpur, hotel Google maps SEO, Nagpur hospitality marketing consultant"
        canonicalUrl={canonicalUrl}
        articleSchema={articleSchema}
        faqSchema={faqSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <header className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            Local SEO & Map Pack
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Google Business Profile SEO for Homestays & Resorts in Nagpur
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-100/80">
            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#c8f169]" /> GrowGuest Founder</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-[#c8f169]" /> Aug 2026</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-[#c8f169]" /> 5 min read</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
          
          <p className="text-xl text-slate-800 font-medium">
            When a corporate executive lands at Dr. Babasaheb Ambedkar International Airport or a tourist looks for a weekend resort around Nagpur, they don't scroll through 50 pages of search results. They open Google Maps and tap on one of the top 3 listings.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            1. Choosing the Exact Primary & Secondary Categories
          </h2>
          <p>
            Google gives highest weight to your primary category. If you run a luxury homestay but have set your category to "Hotel", you will lose out on specific searches like "homestay near Dharampeth" or "villa with private lawn Nagpur".
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Primary:</strong> Hotel, Resort, Homestay, Bed & Breakfast, or Extended Stay Hotel.</li>
            <li><strong>Secondary:</strong> Banquet Hall, Wedding Venue, Restaurant, Swimming Pool, or Conference Center.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            2. High-Resolution Geotagged Photos
          </h2>
          <p>
            Properties with 100+ high-definition photos receive 42% more requests for directions on Google Maps and 35% more clicks through to their websites. Upload real photos of clean bathrooms, crisp bed linens, secure parking, swimming pool at twilight, and breakfast spreads.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            3. Activating Direct WhatsApp Booking Link on GBP
          </h2>
          <p>
            Add a dedicated "Reserve a Table" or "Direct Booking" action button on your GBP profile linking straight to your WhatsApp business concierge with a pre-filled booking inquiry text.
          </p>

          <div className="pt-8 border-t border-slate-200 not-prose">
            <div className="bg-gradient-to-br from-[#02291e] to-[#043f2e] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Where does your property rank in Google Maps today?</h3>
              <p className="text-emerald-100/90 mb-6">
                We perform a geo-grid rank scan for Nagpur and show you where guests find you vs your competitors.
              </p>
              <a
                href="/free-hotel-digital-marketing-audit"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#c8f169] text-[#043f2e] font-extrabold hover:bg-[#d8f68e] transition-all shadow-md"
              >
                Claim Free GBP Audit <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

        </article>

        <div className="mt-16">
          <AuditForm />
        </div>
      </main>
    </div>
  );
}
