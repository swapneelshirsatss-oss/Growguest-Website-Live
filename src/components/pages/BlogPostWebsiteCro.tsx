import { motion } from 'motion/react';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Smartphone,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import SEO from '../SEO';
import Breadcrumbs from '../Breadcrumbs';
import AuditForm from '../AuditForm';

export default function BlogPostWebsiteCro() {
  const canonicalUrl = "https://growguest.in/blog/hotel-website-conversion-rate-optimization/";

  const breadcrumbItems = [
    { name: 'Blog', url: '/hospitality-digital-marketing-blog/' },
    { name: 'Website Conversion Optimization', url: canonicalUrl }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Hotel Website Conversion Fixes: Turning Lookers Into Direct Bookers",
    "description": "Discover simple user experience tweaks, sub-1.5s mobile speed fixes, and strategic booking CTA placements that boost your website conversion rate by 60%+.",
    "url": canonicalUrl,
    "image": "https://growguest.in/Image/GrowGuest%20Header.avif",
    "datePublished": "2026-07-28T08:00:00+05:30",
    "dateModified": "2026-07-28T08:00:00+05:30",
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
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do 95% of visitors leave hotel websites without booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 3 most common reasons are: slow mobile loading speeds (>3.5 seconds), hidden room tariffs without transparent pricing, and forcing users to create an account or navigate clumsy third-party booking engines instead of offering direct WhatsApp booking."
        }
      }
    ]
  };

  return (
    <div className="bg-[#fcfcfc] text-[#242423] min-h-screen">
      <SEO
        title="Hotel Website Conversion Rate Optimization (CRO) | Growguest"
        description="Discover simple user experience tweaks, sub-1.5s mobile speed fixes, and strategic booking CTA placements that boost your website conversion rate by 60%+."
        keywords="hotel website booking conversion, hotel CRO, hotel mobile website speed, direct booking conversion rate, website conversion fixes"
        canonicalUrl={canonicalUrl}
        articleSchema={articleSchema}
        faqSchema={faqSchema}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <header className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Website UX & Speed
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Hotel Website Conversion Fixes: Turning Lookers Into Direct Bookers
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-emerald-100/80">
            <span className="flex items-center"><User className="w-4 h-4 mr-1.5 text-[#c8f169]" /> By Swapneel Shirsat (Hospitality Specialist)</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5 text-[#c8f169]" /> Jul 2026</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-[#c8f169]" /> 6 min read</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <article className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
          
          <p className="text-xl text-slate-800 font-medium">
            Getting traffic to your hotel website is only half the battle. If 1,000 people visit your website every month but only 5 book directly (a 0.5% conversion rate), you are leaving tens of thousands of rupees on the table.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            1. The 1.5-Second Mobile Speed Rule
          </h2>
          <p>
            More than 82% of hospitality website traffic in India happens on smartphones over 4G/5G connections. Every 1-second delay in page load time drops conversions by 7%. Converting images to modern WebP/AVIF formats, deferring non-critical scripts, and hosting on fast edge networks brings your load time under 1.5 seconds.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            2. Sticky Mobile Booking Bar
          </h2>
          <p>
            When users scroll on mobile to view room photos or amenities, the booking button must never disappear. A sticky bottom bar with "Check Availability" and "WhatsApp Direct" ensures an effortless 1-tap booking experience at any point of the guest's browsing journey.
          </p>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#043f2e]">
            3. Transparent Room Features & Visual Proof
          </h2>
          <p>
            Guests hate guessing. Every room card must clearly display square footage, bed type (King/Twin), bathroom type, Wi-Fi speed, complimentary breakfast details, and honest photos.
          </p>

          {/* Author Bio Footer Box */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-5 not-prose">
            <div className="w-16 h-16 rounded-full bg-[#043f2e] text-[#c8f169] font-extrabold text-2xl flex items-center justify-center flex-shrink-0 shadow-md">
              SS
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Written by Swapneel Shirsat — Director & Founder
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                Swapneel Shirsat is the founder and director of GrowGuest. Backed by 18+ years of digital marketing experience and 10+ years dedicated exclusively inside hospitality, Swapneel helps hotel and resort owners cut OTA commissions and build profitable direct booking pipelines. Learn more on our <a href="/about-hospitality-marketing-agency/" className="font-bold text-[#043f2e] hover:underline">About Page</a>.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 not-prose">
            <div className="bg-gradient-to-br from-[#02291e] to-[#043f2e] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-extrabold mb-3">Is your website losing booking inquiries?</h3>
              <p className="text-emerald-100/90 mb-6">
                Get a comprehensive mobile UX and speed audit for your property website.
              </p>
              <a
                href="/free-hotel-digital-marketing-audit/"
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-[#c8f169] text-[#043f2e] font-extrabold hover:bg-[#d8f68e] transition-all shadow-md"
              >
                Claim Free Website Audit <ArrowRight className="w-4 h-4 ml-2" />
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
