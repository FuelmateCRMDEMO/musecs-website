export interface Industry {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
  case_study_slugs: string[];
  tech_stack: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'finance-insurance',
    title: 'Banking, Insurance & Fintech',
    subtitle: 'High-Throughput Banking, Payment Gateways & InsurTech Platforms',
    description: 'We engineer mission-critical financial systems for South African banks, asset managers, and insurance providers. From real-time ISO 20022 payment rails to AI fraud detection, our solutions comply with SARB, FSCA, and PCI-DSS standards.',
    challenges: [
      'Legacy core banking monoliths unable to handle high mobile app concurrency.',
      'Complex regulatory reporting (SARB, SAM, POPIA) and multi-currency ledger reconciliation.',
      'Integration of open banking APIs while preventing sophisticated cyber threats.'
    ],
    solutions: [
      'Microservice ledger decoupling with zero-downtime Strangler Fig architecture.',
      'Real-time transaction streaming and automated audit logging with event-driven buses.',
      'AI-assisted loan underwriting and automated claims adjudication pipelines.'
    ],
    case_study_slugs: ['pan-african-banking-core-modernisation', 'healthcare-claims-adjudication-ai'],
    tech_stack: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Azure', 'TypeScript', 'Docker']
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Medical Systems',
    subtitle: 'HIPAA & POPIA Compliant Medical Portals & Claims Engines',
    description: 'Custom health tech software engineering that connects medical aids, healthcare providers, and patients seamlessly. We build secure medical record systems, telehealth platforms, and automated billing interfaces.',
    challenges: [
      'Strict health data privacy compliance (POPIA, HPCSA guidelines).',
      'Fragmented data schemas across pathology labs, hospitals, and pharmacies.',
      'Manual processing of complex ICD-10 medical billing claims.'
    ],
    solutions: [
      'Secure HL7/FHIR compliant interoperability microservices.',
      'Automated medical claims adjudication engines using optical recognition and AI.',
      'High-security patient portals with multi-factor authentication and encrypted storage.'
    ],
    case_study_slugs: ['healthcare-claims-adjudication-ai'],
    tech_stack: ['Next.js 15', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Gemini API', 'Tailwind CSS']
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(ind => ind.slug === slug);
}
