import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEO({
  title = "Growguest — Digital Growth for Hospitality | Nagpur",
  description = "Growguest is a boutique digital marketing consultancy helping hotels, resorts, and homestays in Nagpur and Uttarakhand eliminate OTA commissions and maximize direct bookings.",
  canonicalUrl = "https://growguest.com/",
  ogImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  breadcrumbs
}: SEOProps) {
  const fullTitle = title.includes("Growguest") ? title : `${title} | Growguest Digital Growth for Hospitality`;

  // Generate Schema.org BreadcrumbList JSON-LD structured data
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `https://growguest.com${crumb.url}`
    }))
  } : null;

  // Schema.org ProfessionalService / LocalBusiness Structured Data
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Growguest — Digital Growth for Hospitality",
    "image": ogImage,
    "@id": "https://growguest.com/#organization",
    "url": "https://growguest.com/",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "description": "Boutique digital marketing consultancy specializing in hospitality (hotels, homestays, resorts, restaurants). Solves OTA commission loss by optimizing Google Business Profiles, technical SEO, and direct booking websites.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1458,
      "longitude": 79.0882
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
      "Hospitality Digital Marketing",
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
      <meta name="keywords" content="direct booking vs OTA commission, Google Business Profile for hotels, local SEO for homestays Nagpur, hotel website booking conversion, restaurant local SEO Nagpur, reduce OTA dependence, GBP audit for hospitality, small hotel digital marketing India, Nagpur hospitality marketing consultant" />
      
      {/* Canonical Tag */}
      <link rel="canonical" href={canonicalUrl} />

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
