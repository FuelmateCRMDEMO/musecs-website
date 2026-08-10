export interface AddressConfig {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
  formatted: string;
  latitude: string;
  longitude: string;
}

export interface ContactConfig {
  salesEmail: string;
  infoEmail: string;
  primaryPhone: string;
  secondaryPhone: string;
}

export interface EntityDescriptions {
  short: string;
  medium: string;
  long: string;
}

export interface EntityConfig {
  legalName: string;
  tradingName: string;
  canonicalUrl: string;
  industry: string;
  logoUrl: string;
  contact: ContactConfig;
  address: AddressConfig;
  primaryServices: string[];
  sameAsVerified: string[];
  descriptions: EntityDescriptions;
}

export const MUSE_ENTITY_CONFIG: EntityConfig = {
  legalName: 'Muse Consultancy Services (Pty) Ltd',
  tradingName: 'MuseCS',
  canonicalUrl: 'https://www.musecs.com',
  industry: 'Software Development & Engineering Consultancy',
  logoUrl: 'https://www.musecs.com/logo.png',
  contact: {
    salesEmail: 'sales@musecs.com',
    infoEmail: 'info@musecs.com',
    primaryPhone: '+27 11 881 5460',
    secondaryPhone: '+27 71 925 5128',
  },
  address: {
    streetAddress: 'Sandton City, West Tower, 5th Floor',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    postalCode: '2196',
    addressCountry: 'ZA',
    formatted: 'Sandton City, West Tower, 5th Floor, Johannesburg, Gauteng, 2196, South Africa',
    latitude: '-26.1076',
    longitude: '28.0567'
  },
  primaryServices: [
    'Custom Software Development',
    'Software Development Team Augmentation',
    'Dedicated Software Development Teams',
    'Software Engineering',
    'Software Architecture',
    'Cloud Software Development',
    'AI Software Development',
    'Legacy Software Modernisation'
  ],
  sameAsVerified: [
    'https://linkedin.com/company/musecs',
    'https://github.com/musecs'
  ],
  descriptions: {
    short: 'Muse Consultancy Services (MuseCS) is a South African software engineering consultancy specializing in custom software development and software development team augmentation. We engineer scalable cloud applications, modern enterprise architectures, and deploy senior dedicated engineering cells to accelerate digital transformation across Africa and international markets.',
    medium: 'Muse Consultancy Services (MuseCS) is an enterprise software engineering consultancy headquartered in Sandton, Johannesburg. We specialize in custom software development, software architecture, legacy modernisation, and software development team augmentation. MuseCS provides high-performing, senior software developers, AI/ML engineers, and cloud architects who integrate directly into client teams to solve complex technical challenges. Our agile engineering methodologies, strict quality governance, and deep technical domain expertise empower organizations across South Africa and global markets to scale software infrastructure efficiently without compromising on architectural integrity or security.',
    long: 'Muse Consultancy Services (MuseCS) is a South African software engineering consultancy delivering end-to-end custom software development, software architecture design, cloud software engineering, AI/ML integration, and software development team augmentation. Headquartered in Sandton City, Johannesburg, MuseCS serves mid-market and enterprise organizations across telecommunications, financial services, healthcare, logistics, and public sector industries.\n\nOur service model bridges critical software engineering skills gaps by deploying senior full-stack developers, backend architects, and cloud specialists within 5 business days. Whether engineering autonomous custom platforms from the ground up or augmenting existing engineering teams, MuseCS adheres to strict DevSecOps, automated testing, and cloud-native practices across AWS, Azure, and Google Cloud environments.\n\nThrough original South African software market research, rigorous technical standards, and transparent engagement models, Muse Consultancy Services provides the strategic, architectural, and operational execution required to drive digital authority and sustainable enterprise growth.'
  }
};
