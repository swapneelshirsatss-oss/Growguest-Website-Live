import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function SEO({
  title = "Growguest | Hospitality Digital Marketing Agency Nagpur",
  description = "Growguest helps hotels, resorts, and homestays maximize direct bookings, improve Google Maps ranking, and eliminate heavy OTA commissions.",
  canonicalUrl = "https://growguest.com/",
  ogImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  breadcrumbs
}: SEOProps) {
  const fullTitle = title.includes("Growguest") ? title : `${title} | Growguest Hospitality Marketing`;

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

  return (
    <Helmet>
      {/* Basic HTML Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Canonical Tag - Prevents Duplicate Content Issues */}
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

      {/* Schema.org Breadcrumb JSON-LD Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
