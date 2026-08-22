interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  articleSchema?: Record<string, any>;
  faqSchema?: Record<string, any>;
}

export default function SEO({
  canonicalUrl = "https://growguest.in/",
  ogImage = "https://growguest.in/Image/GrowGuest%20Header.avif",
  breadcrumbs,
  articleSchema,
  faqSchema
}: SEOProps) {
  const formattedCanonical = canonicalUrl.endsWith('/') ? canonicalUrl : `${canonicalUrl}/`;

  // Generate Schema.org WebSite JSON-LD
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GrowGuest Digital Growth for Hospitality",
    "alternateName": [
      "GrowGuest",
      "Growguest",
      "GrowGuest — Digital Growth for Hospitality",
      "GrowGuest Nagpur",
      "GrowGuest Hospitality Marketing"
    ],
    "url": "https://growguest.in/",
    "sameAs": [
      "https://www.google.com/maps/place/?cid=13593835757779847259",
      "https://www.facebook.com/profile.php?id=61593380557986",
      "https://www.instagram.com/growguest/",
      "https://www.youtube.com/channel/UCYfFotUC6n9Zgvv_V9LOXiA",
      "https://x.com/Growguest",
      "https://www.pinterest.com/growguest",
      "https://www.linkedin.com/company/growguest-digital-growth-for-hospitality"
    ]
  };

  // Generate Schema.org BreadcrumbList JSON-LD structured data
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') 
        ? (crumb.url.endsWith('/') ? crumb.url : `${crumb.url}/`)
        : (crumb.url.endsWith('/') ? `https://growguest.in${crumb.url}` : `https://growguest.in${crumb.url}/`)
    }))
  } : null;

  // Schema.org ProfessionalService / LocalBusiness Structured Data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GrowGuest Digital Growth for Hospitality",
    "alternateName": [
      "GrowGuest — Digital Growth for Hospitality",
      "GrowGuest — Digital Marketing Agency for Hotels & Resorts",
      "GrowGuest"
    ],
    "image": ogImage,
    "@id": "https://growguest.in/#organization",
    "url": "https://growguest.in/",
    "hasMap": "https://www.google.com/maps/place/?cid=13593835757779847259",
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
      "latitude": 21.0857691,
      "longitude": 79.0977950
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
    "sameAs": [
      "https://www.google.com/maps/place/?cid=13593835757779847259",
      "https://www.facebook.com/profile.php?id=61593380557986",
      "https://www.instagram.com/growguest/",
      "https://www.youtube.com/channel/UCYfFotUC6n9Zgvv_V9LOXiA",
      "https://x.com/Growguest",
      "https://www.pinterest.com/growguest",
      "https://www.linkedin.com/company/growguest-digital-growth-for-hospitality"
    ],
    "founder": {
      "@type": "Person",
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder",
      "url": "https://growguest.in/about-hospitality-marketing-agency/",
      "sameAs": "https://www.linkedin.com/in/swapneel-shirsat/",
      "description": "Director & Founder of GrowGuest with 18+ years of digital marketing experience and 10+ years exclusively inside hospitality."
    },
    "director": {
      "@type": "Person",
      "name": "Swapneel Shirsat",
      "jobTitle": "Director & Founder",
      "url": "https://growguest.in/about-hospitality-marketing-agency/",
      "sameAs": "https://www.linkedin.com/in/swapneel-shirsat/",
      "description": "Director & Founder of GrowGuest with 18+ years of digital marketing experience and 10+ years exclusively inside hospitality."
    }
  };

  return (
    <>
      {/* Schema.org WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Schema.org Business JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      {/* Schema.org Breadcrumb JSON-LD Structured Data */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {/* Schema.org Article / BlogPosting JSON-LD */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      {/* Schema.org FAQPage JSON-LD */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
