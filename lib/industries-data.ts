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
    title: 'Financial Services & Insurance',
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
  },
  {
    slug: 'telecommunications',
    title: 'Telecommunications & Networks',
    subtitle: 'Low-Latency Billing, CDR Streaming & OSS/BSS Infrastructure',
    description: 'Powering high-capacity network operators and MVNOs across Africa with scalable backend data processing, real-time subscriber charging, and automated customer self-service portals.',
    challenges: [
      'Processing tens of thousands of CDR (Call Detail Record) events per second.',
      'Real-time regulatory compliance for out-of-bundle notification prompts.',
      'High churn rates due to clunky self-care mobile applications.'
    ],
    solutions: [
      'Distributed streaming pipelines using PySpark and AWS Kinesis Data Streams.',
      'Sub-millisecond subscriber account lookup with Redis Enterprise clusters.',
      'Modern cross-platform mobile apps built with React Native and Next.js.'
    ],
    case_study_slugs: ['telecoms-realtime-billing-analytics'],
    tech_stack: ['Python', 'AWS Kinesis', 'Redis', 'Node.js', 'React Native', 'Kubernetes']
  },
  {
    slug: 'ecommerce',
    title: 'eCommerce & Retail Logistics',
    subtitle: 'Enterprise Headless Commerce, Inventory Sync & Payment Integrations',
    description: 'Engineered for high-volume South African retail ecosystems. We build custom headless storefronts, multi-warehouse inventory management systems, and automated logistics dispatches.',
    challenges: [
      'Flash sale traffic spikes crashing monolithic eCommerce platforms.',
      'Real-time synchronization across brick-and-mortar ERPs and online stock feeds.',
      'Complex local payment gateway integrations (PayFast, Ozow, Peach Payments).'
    ],
    solutions: [
      'Headless commerce architecture powered by Next.js and serverless cloud functions.',
      'Distributed inventory caching engines eliminating overselling risks.',
      'Automated courier API integrations with real-time package tracking feeds.'
    ],
    case_study_slugs: ['telecoms-realtime-billing-analytics'],
    tech_stack: ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    subtitle: 'Fleet Telemetry, Route Optimization & Automated Dispatch Platforms',
    description: 'Transforming freight, warehousing, and last-mile logistics operations across Southern Africa through custom tracking algorithms, IoT telemetry ingestion, and automated driver dispatch systems.',
    challenges: [
      'Inconsistent cellular connectivity during cross-border freight transits.',
      'Inefficient manual route planning resulting in high fuel expenditure.',
      'Lack of real-time visibility into warehouse inventory throughput.'
    ],
    solutions: [
      'Offline-first mobile driver apps with automatic queue synchronization when reconnected.',
      'Algorithmic route optimization engines minimizing fuel cost and transit times.',
      'Real-time IoT telemetry pipelines tracking vehicle diagnostics and cargo temperatures.'
    ],
    case_study_slugs: ['telecoms-realtime-billing-analytics'],
    tech_stack: ['TypeScript', 'Node.js', 'React Native', 'AWS IoT', 'PostgreSQL', 'Docker']
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find(ind => ind.slug === slug);
}
