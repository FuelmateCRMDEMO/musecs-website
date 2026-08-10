import { MUSE_ENTITY_CONFIG } from './entity-config';

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs: string[];
}

export const MUSE_ORGANIZATION: OrganizationSchema = {
  name: MUSE_ENTITY_CONFIG.tradingName,
  url: MUSE_ENTITY_CONFIG.canonicalUrl,
  logo: MUSE_ENTITY_CONFIG.logoUrl,
  description: MUSE_ENTITY_CONFIG.descriptions.short,
  telephone: MUSE_ENTITY_CONFIG.contact.primaryPhone,
  email: MUSE_ENTITY_CONFIG.contact.salesEmail,
  address: {
    streetAddress: MUSE_ENTITY_CONFIG.address.streetAddress,
    addressLocality: MUSE_ENTITY_CONFIG.address.addressLocality,
    addressRegion: MUSE_ENTITY_CONFIG.address.addressRegion,
    postalCode: MUSE_ENTITY_CONFIG.address.postalCode,
    addressCountry: MUSE_ENTITY_CONFIG.address.addressCountry,
  },
  sameAs: MUSE_ENTITY_CONFIG.sameAsVerified
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${MUSE_ENTITY_CONFIG.canonicalUrl}/#organization`,
    'name': MUSE_ENTITY_CONFIG.legalName,
    'alternateName': MUSE_ENTITY_CONFIG.tradingName,
    'url': MUSE_ENTITY_CONFIG.canonicalUrl,
    'logo': MUSE_ENTITY_CONFIG.logoUrl,
    'image': MUSE_ENTITY_CONFIG.logoUrl,
    'description': MUSE_ENTITY_CONFIG.descriptions.medium,
    'telephone': MUSE_ENTITY_CONFIG.contact.primaryPhone,
    'email': MUSE_ENTITY_CONFIG.contact.salesEmail,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': MUSE_ENTITY_CONFIG.address.streetAddress,
      'addressLocality': MUSE_ENTITY_CONFIG.address.addressLocality,
      'addressRegion': MUSE_ENTITY_CONFIG.address.addressRegion,
      'postalCode': MUSE_ENTITY_CONFIG.address.postalCode,
      'addressCountry': MUSE_ENTITY_CONFIG.address.addressCountry,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': MUSE_ENTITY_CONFIG.address.latitude,
      'longitude': MUSE_ENTITY_CONFIG.address.longitude
    },
    'areaServed': [
      {
        '@type': 'Country',
        'name': 'South Africa'
      },
      {
        '@type': 'Place',
        'name': 'Global Enterprise'
      }
    ],
    'priceRange': '$$$$',
    'knowsAbout': MUSE_ENTITY_CONFIG.primaryServices,
    'sameAs': MUSE_ENTITY_CONFIG.sameAsVerified
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.musecs.com/#website',
    'url': 'https://www.musecs.com',
    'name': 'Muse Consultancy Services',
    'description': 'Enterprise Software Development & Team Augmentation Engineering Consultancy in South Africa',
    'publisher': {
      '@id': 'https://www.musecs.com/#organization'
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.musecs.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `https://www.musecs.com${item.url}`
    }))
  };
}

export function generateServiceSchema(
  title: string,
  description: string,
  url: string,
  category: string = 'Software Development'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': title,
    'description': description,
    'provider': {
      '@id': 'https://www.musecs.com/#organization'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'South Africa'
    },
    'serviceType': category,
    'url': url.startsWith('http') ? url : `https://www.musecs.com${url}`
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishDate: string,
  authorName: string,
  authorTitle: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': title,
    'description': description,
    'url': url.startsWith('http') ? url : `https://www.musecs.com${url}`,
    'datePublished': publishDate,
    'dateModified': publishDate,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'jobTitle': authorTitle,
      'worksFor': {
        '@id': 'https://www.musecs.com/#organization'
      }
    },
    'publisher': {
      '@id': 'https://www.musecs.com/#organization'
    },
    'inLanguage': 'en-ZA'
  };
}
