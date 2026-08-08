import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const DEFAULT_KEYWORDS = "hospitality digital marketing agency, digital marketing for resorts, digital marketing for homestays, direct booking vs OTA commission, Google Business Profile for hotels, local SEO for homestays Nagpur, hotel website booking conversion, restaurant local SEO Nagpur, reduce OTA dependence, GBP audit for hospitality, small hotel digital marketing India, Nagpur hospitality marketing consultant";

export default function SEO({
  title = "GrowGuest — Digital Marketing Agency for Hotels & Resorts",
  description = "Nagpur-based digital marketing for hotels, resorts & homestays. Cut OTA commissions and grow direct bookings with GrowGuest.",
  keywords,
  canonicalUrl = "https://growguest.in/",
  ogImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  breadcrumbs
}: SEOProps) {
  const fullTitle = title.includes("GrowGuest") || title.includes("Growguest") ? title : `${title} | GrowGuest — Digital Marketing Agency for Hotels & Resorts`;
  const metaKeywords = keywords || DEFAULT_KEYWORDS;

  // Generate Schema.org WebSite JSON-LD
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GrowGuest — Digital Growth for Hospitality",
    "alternateName": [
      "GrowGuest",
      "Growguest",
      "GrowGuest Nagpur",
      "GrowGuest Hospitality Marketing"
    ],
    "url": "https://growguest.in/"
  };

  // Generate Schema.org BreadcrumbList JSON-LD structured data
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `https://growguest.in${crumb.url}`
    }))
  } : null;

  // Schema.org ProfessionalService / LocalBusiness Structured Data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GrowGuest — Digital Marketing Agency for Hotels & Resorts",
    "image": ogImage,
    "@id": "https://growguest.in/#organization",
    "url": "https://growguest.in/",
    "telephone": "+918956907343",
    "priceRange": "$$",
    "description": "Nagpur-based digital marketing for hotels, resorts & homestays. Cut OTA commissions and grow direct bookings with GrowGuest.",
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
      "latitude": 21.0859296,
      "longitude": 79.0985166
    },
    "areaServed": [
      "Nagpur",
      "Wardha Road",
      "Dharampeth",
      "Civil Lines",
      "Sadar",
      "Mukteshwar",
      "Ramgarh",
      "Nainital"
    ],
    "knowsAbout": [
      "Hospitality Digital Marketing Agency",
      "Digital Marketing for Resorts",
      "Digital Marketing for Homestays",
      "Hotel Direct Booking Strategy",
      "Google Business Profile Optimization for Hotels",
      "Local SEO for Homestays Nagpur",
      "Hotel Website Booking Conversion",
      "Restaurant Local SEO",
      "Reduce OTA Dependence"
    ],
    "founder": {
      "@type": "Person",
      "name": "Growguest Founder",
      "jobTitle": "Hospitality Digital Marketing Consultant",
      "description": "18 years of freelance marketing experience, 10+ years exclusively inside hospitality."
    }
  };

  return (
    <Helmet>
      {/* Basic HTML Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="indexnow-key" content="e4a19b5d2c8f3e7a1b0c9d8e7f6a5b4c" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org WebSite JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Schema.org Business JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* Schema.org Breadcrumb JSON-LD Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
