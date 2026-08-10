export interface CaseStudy {
  slug: string;
  title: string;
  client_industry: string;
  client_region: string;
  summary: string;
  business_context: string;
  technical_problem: string;
  solution_architecture: string[];
  technologies: string[];
  development_approach: string;
  outcomes: string[];
  muse_contribution: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'pan-african-banking-core-modernisation',
    title: 'Pan-African Banking Core Transaction Engine Modernisation',
    client_industry: 'Financial Services & Banking',
    client_region: 'Johannesburg, South Africa',
    summary: 'Decoupling a monolithic legacy COBOL/DB2 core banking ledger into high-throughput microservices capable of processing 12,000 TPS with 99.999% uptime.',
    business_context: 'A Tier-1 African banking institution faced critical performance bottlenecks during peak salary and bill payment windows, leading to service degradation on mobile banking apps.',
    technical_problem: 'The legacy core ledger suffered from tight coupling, batch lockouts during nightly processing, and lack of real-time event streaming capabilities for fraud prevention engines.',
    solution_architecture: [
      'Implemented Strangler Fig migration pattern using Spring Boot 3.2 and Java 21 microservices running on Azure Kubernetes Service (AKS).',
      'Deployed Apache Kafka event buses for zero-loss real-time transaction streaming and ledger balance synchronisation.',
      'Designed highly resilient PostgreSQL database clusters with connection pooling and multi-region read replicas.'
    ],
    technologies: ['Java 21', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes (AKS)', 'Azure API Management'],
    development_approach: 'Dedicated 12-developer squad operating under strict DevSecOps and ISO27001 compliance standards with automated CI/CD deployment pipelines.',
    outcomes: [
      'Increased peak throughput capacity from 2,200 TPS to over 14,500 TPS.',
      'Reduced nightly batch window execution time from 6.5 hours to 18 minutes.',
      'Achieved 0% unhandled transaction errors across 85+ million monthly active users.'
    ],
    muse_contribution: 'Provided end-to-end software architecture design, core microservice development, and senior technical team augmentation.'
  },
  {
    slug: 'telecoms-realtime-billing-analytics',
    title: 'Real-Time Telecommunications Data Pipeline & Usage Analytics',
    client_industry: 'Telecommunications',
    client_region: 'South Africa & SADC Region',
    summary: 'Architecting an enterprise distributed streaming engine processing 40,000 event records per second for dynamic rating and subscriber usage notifications.',
    business_context: 'Major telecom operator needed to comply with ICASA regulations for real-time out-of-bundle data notifications while delivering personalized dynamic bundle suggestions.',
    technical_problem: 'Existing relational database ETL pipelines suffered from 45-minute latency delays, leading to subscriber overcharges and regulatory penalty compliance risks.',
    solution_architecture: [
      'Engineered an asynchronous distributed pipeline using Python, PySpark, and AWS Kinesis Data Streams.',
      'Utilized Redis Enterprise clusters for sub-millisecond in-memory subscriber balance checks.',
      'Integrated React + Node.js executive dashboards with WebSockets for real-time telemetry.'
    ],
    technologies: ['Python', 'AWS Kinesis', 'PySpark', 'Redis', 'Node.js', 'React', 'AWS Lambda', 'Terraform'],
    development_approach: 'Agile team augmentation cell embedded into the operator’s core network infrastructure unit.',
    outcomes: [
      'Sub-second latency (under 120ms) from network tower CDR event generation to subscriber SMS/App push notification.',
      'Eliminated 100% of ICASA non-compliance dispute penalties in the first fiscal year.',
      'Generated R42M in incremental revenue via AI-driven real-time bundle upsell prompts.'
    ],
    muse_contribution: 'Provided lead data engineers, cloud architects, and full-stack software developers.'
  },
  {
    slug: 'healthcare-claims-adjudication-ai',
    title: 'AI-Powered Automated Health Insurance Claims Adjudication',
    client_industry: 'Healthcare & Insurance',
    client_region: 'Cape Town, South Africa',
    summary: 'Deploying custom LLM document processing and optical recognition models to automate medical claims verification and fraud detection.',
    business_context: 'National healthcare administrator struggled with a 14-day claims processing backlog and manual fraud audit costs exceeding R18M annually.',
    technical_problem: 'Unstructured medical invoices, handwritten doctor notes, and ICD-10 medical coding discrepancies caused high manual intervention rates.',
    solution_architecture: [
      'Built a hybrid RAG (Retrieval-Augmented Generation) pipeline combining Claude 3.5 Sonnet and custom OCR models.',
      'Utilized Pinecone vector database for semantic policy matching against complex medical scheme rulebooks.',
      'Developed a high-concurrency Next.js 15 enterprise web console for claims assessors.'
    ],
    technologies: ['Python', 'TypeScript', 'Next.js 15', 'Claude API / Gemini API', 'Pinecone Vector DB', 'FastAPI', 'Docker'],
    development_approach: 'Custom software engineering project delivered with strict POPIA healthcare data privacy protection.',
    outcomes: [
      'Automated initial claims validation for 78% of routine outpatient medical submissions.',
      'Reduced average claims processing turnaround from 14 days down to 4 minutes.',
      'Flagged R29M in fraudulent or duplicate claims during the first 6 months of operation.'
    ],
    muse_contribution: 'Full custom software development, AI model integration, and UX/UI engineering.'
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.slug === slug);
}
