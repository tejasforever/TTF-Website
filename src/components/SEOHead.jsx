import React, { useEffect } from 'react';

export default function SEOHead({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | TheTechForever (TTF) - Enterprise IT Solutions` 
      : 'TheTechForever (TTF) - Enterprise Web, Mobile & Cloud Solutions';
    
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        description || 'TheTechForever (TTF) is a premier IT services and engineering company delivering custom web apps, mobile applications, Headless WordPress architectures, and cloud solutions.'
      );
    }

    // Inject Schema.org LocalBusiness & Organization JSON-LD
    const schemaScriptId = 'ttf-json-ld';
    let scriptElement = document.getElementById(schemaScriptId);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = schemaScriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://thetechforever.com/#organization",
          "name": "TheTechForever",
          "alternateName": "TTF",
          "url": "https://thetechforever.com",
          "logo": "https://thetechforever.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-94031-23579",
            "contactType": "sales",
            "areaServed": ["IN", "US", "GB", "AE"],
            "availableLanguage": ["English", "Hindi", "Gujarati"]
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://thetechforever.com/#localbusiness",
          "name": "TheTechForever IT Services & Development",
          "image": "https://thetechforever.com/logo-rect.png",
          "telephone": "+91-94031-23579",
          "email": "info@thetechforever.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avadh Apartment, Nizampura Gam",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "postalCode": "390002",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "22.3308",
            "longitude": "73.1812"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        }
      ]
    };

    scriptElement.textContent = JSON.stringify(schemaData);
  }, [title, description, path]);

  return null;
}
