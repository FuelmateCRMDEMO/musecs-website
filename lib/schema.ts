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
  name: 'Muse Consultancy Services',
  url: 'https://www.musecs.com',
  logo: 'https://www.musecs.com/logo.png',
  description: 'Elite South African software engineering consultancy specializing in custom software development, dedicated development teams, and software development team augmentation.',
  telephone: '+27 11 881 5460',
  email: 'sales@musecs.com',
  address: {
    streetAddress: 'Sandton City, West Tower, 5th Floor',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '2196',
    addressCountry: 'ZA',
  },
  sameAs: [
    'https://linkedin.com/company/musecs',
    'https://github.com/musecs'
  ]
};

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.musecs.com/#organization',
    'name': MUSE_ORGANIZATION.name,
    'url': MUSE_ORGANIZATION.url,
    'logo': MUSE_ORGANIZATION.logo,
    'image': MUSE_ORGANIZATION.logo,
    'description': MUSE_ORGANIZATION.description,
    'telephone': MUSE_ORGANIZATION.telephone,
    'email': MUSE_ORGANIZATION.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': MUSE_ORGANIZATION.address.streetAddress,
      'addressLocality': MUSE_ORGANIZATION.address.addressLocality,
      'addressRegion': MUSE_ORGANIZATION.address.addressRegion,
      'postalCode': MUSE_ORGANIZATION.address.postalCode,
      'addressCountry': MUSE_ORGANIZATION.address.addressCountry,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '-26.1076',
      'longitude': '28.0567'
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
    'knowsAbout': [
      'Software Development',
      'Software Development Team Augmentation',
      'Dedicated Development Teams',
      'Custom Software Architecture',
      'Cloud Native Systems',
      'AI Software Development',
      'Legacy System Modernization',
      'Enterprise Software Engineering'
    ],
    'sameAs': MUSE_ORGANIZATION.sameAs
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
