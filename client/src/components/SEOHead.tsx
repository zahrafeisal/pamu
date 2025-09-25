import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Pamu Services | Logistics, Freight Forwarding & Customs Clearance in East Africa",
  description = "Pamu Services Limited provides reliable logistics, freight forwarding, transport, and customs clearance solutions across East Africa. Trusted supply chain partner for fast and cost-effective delivery.",
  keywords = "Pamu Services, logistics Kenya, freight forwarding East Africa, customs clearance Nairobi, transport solutions Kenya, cargo, shipping, warehousing, supply chain",
  image = "/logo.jpg", // Replace with your actual logo path
  url = "https://pamuservices.com", // Replace with your actual domain
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FreightForwardingService",
    "name": "Pamu Services Limited",
    "description": "Logistics, freight forwarding, transport, and customs clearance services across East Africa",
    "url": url,
    "logo": `${url}/logo.jpg`,
    "image": `${url}${image}`,
    "areaServed": [
      {
        "@type": "Place",
        "name": "East Africa"
      },
      {
        "@type": "Place", 
        "name": "Kenya"
      },
      {
        "@type": "Place",
        "name": "Uganda"
      },
      {
        "@type": "Place",
        "name": "Tanzania"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Kenya",
      "addressLocality": "Nairobi",
      "addressRegion": "Nairobi County"
    },
    "serviceType": [
      "Freight Forwarding",
      "Customs Clearance", 
      "Logistics Solutions",
      "Transport Services",
      "Warehousing",
      "Supply Chain Management"
    ],
    "sameAs": [
      "https://www.facebook.com/pamuservices", // Replace with actual social links
      "https://www.linkedin.com/company/pamuservices",
      "https://twitter.com/pamuservices"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pamu Services Ltd" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Character Set */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Pamu Services" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;