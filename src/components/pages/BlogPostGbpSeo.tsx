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
  const canonicalUrl = "https://growguest.in/blog/google-business-profile-seo-homestays-resorts/";

  const breadcrumbItems = [
    { name: 'Blog', url: '/hospitality-digital-marketing-blog/' },
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
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder — Hospitality Digital Marketing Consultant",
      "url": "https://growguest.in/about-hospitality-marketing-agency/",
      "sameAs": "https://www.linkedin.com/in/swapneel-shirsat/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GrowGuest Digital Growth for Hospitality",
      "url": "https://growguest.in/",
      "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growguest.in/assets/logo.png"
      }
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["#hero-heading", "#direct-answer-summary"]
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
    <div className="bg-[#fcfbf9] text-[#141716] min-h-screen">
      <SEO
        title="Google Business Profile SEO for Homestays & Resorts in Nagpur | Growguest"
        description="Learn how to optimize your Google Business Profile (GBP) categories, geotagged room photos, and local citations to rank in the top 3 Google Map Pack in Nagpur."
        keywords="Google Business Profile for hotels, GBP audit for hospitality, local SEO for homestays Nagpur, hotel Google maps SEO, Nagpur hospitality marketing consultant"
        canonicalUrl={canonicalUrl}
        articleSchema={articleSchema}
        faqSchema={faqSchema}
      />

      <header className="pt-8 pb-10 lg:pt-10 lg:pb-12 relative">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Breadcrumbs items={breadcrumbItems} maxWidth="4xl" className="px-0 pt-0 pb-6" />
          <div className="hero-pill-badge mb-6">
            <span className="pulse-dot" />
            <span>Local SEO & Map Pack</span>
          </div>

          <h1 id="hero-heading" className="hero-title mb-6">
            Google Business Profile SEO for <em className="font-serif italic font-normal text-[#c99a2e]">Homestays & Resorts in Nagpur</em>
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#546059] pb-6 border-b border-[rgba(16,41,32,0.08)]">
            <span className="flex items-center text-[#071510] font-semibold"><User className="w-4 h-4 mr-1.5 text-[#c99a2e]" /> By Swapneel Shirsat (Hospitality Specialist)</span>
            <span className="text-[#546059]/40">•</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-[#c99a2e]" /> Aug 2026</span>
            <span className="text-[#546059]/40">•</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-[#c99a2e]" /> 5 min read</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 pb-16">
        <article className="prose prose-lg max-w-none text-[#546059] leading-relaxed space-y-8">
          
          <div className="bg-[#f7f5ef] border-l-4 border-[#c99a2e] p-6 sm:p-7 rounded-r-2xl border-y border-r border-[rgba(16,41,32,0.08)] shadow-xs not-prose mb-8">
            <div className="text-xs uppercase tracking-wider font-bold text-[#c99a2e] mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-[#c99a2e]" /> Quick Answer: How to Rank #1 on Google Maps in Nagpur
            </div>
            <p id="direct-answer-summary" className="text-[#222724] text-sm sm:text-base leading-relaxed font-medium m-0">
              To rank a hotel, homestay, or resort in Nagpur's Google Map 3-Pack, property owners must select the exact primary category (e.g., Bed & Breakfast vs Hotel), upload geotagged 4K room photos, achieve high review velocity with localized keyword responses, and maintain 100% NAP citation consistency across local directories.
            </p>
          </div>

          <p className="text-xl text-[#071510] font-medium leading-relaxed">
            When a corporate executive lands at Dr. Babasaheb Ambedkar International Airport or a tourist looks for a weekend resort around Nagpur, they don't scroll through 50 pages of search results. They open Google Maps and tap on one of the top 3 listings.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071510]">
            1. Choosing the Exact Primary & Secondary Categories
          </h2>
          <p>
            Google gives highest weight to your primary category. If you run a luxury homestay but have set your category to "Hotel", you will lose out on specific searches like "homestay near Dharampeth" or "villa with private lawn Nagpur".
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-[#071510]">Primary:</strong> Hotel, Resort, Homestay, Bed & Breakfast, or Extended Stay Hotel.</li>
            <li><strong className="text-[#071510]">Secondary:</strong> Banquet Hall, Wedding Venue, Restaurant, Swimming Pool, or Conference Center.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071510]">
            2. High-Resolution Geotagged Photos
          </h2>
          <p>
            Properties with 100+ high-definition photos receive 42% more requests for directions on Google Maps and 35% more clicks through to their websites. Upload real photos of clean bathrooms, crisp bed linens, secure parking, swimming pool at twilight, and breakfast spreads.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071510]">
            3. Activating Direct WhatsApp Booking Link on GBP
          </h2>
          <p>
            Add a dedicated "Reserve a Table" or "Direct Booking" action button on your GBP profile linking straight to your WhatsApp business concierge with a pre-filled booking inquiry text.
          </p>

          {/* Author Bio Footer Box */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[rgba(16,41,32,0.08)] shadow-sm flex flex-col sm:flex-row items-center gap-5 not-prose">
            <div className="w-16 h-16 rounded-2xl bg-[#071510] text-[#dfad3c] border-2 border-[#dfad3c]/30 font-extrabold text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              SS
            </div>
            <div>
              <h4 className="font-bold text-[#071510] text-base">
                Written by Swapneel Shirsat — Director & Founder
              </h4>
              <p className="text-[#546059] text-xs sm:text-sm leading-relaxed mt-1">
                Swapneel Shirsat is the founder and director of GrowGuest. Backed by 18+ years of digital marketing experience and 10+ years dedicated exclusively inside hospitality, Swapneel helps hotel and resort owners cut OTA commissions and build profitable direct booking pipelines. Learn more on our <a href="/about-hospitality-marketing-agency/" className="font-bold text-[#c99a2e] hover:underline">About Page</a>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[rgba(16,41,32,0.08)] not-prose">
            <div className="bg-[#071510] text-white p-8 sm:p-10 rounded-3xl border border-[#dfad3c]/20 shadow-xl">
              <h3 className="text-2xl font-extrabold mb-3">Where does your property rank in Google Maps today?</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                We perform a geo-grid rank scan for Nagpur and show you where guests find you vs your competitors.
              </p>
              <a
                href="/free-hotel-digital-marketing-audit/"
                className="btn btn-gold inline-flex"
              >
                <span>Claim Free GBP Audit</span>
                <ArrowRight className="w-4 h-4 ml-2" />
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
