export type EvidenceType = 'DIRECT' | 'FIRST-PARTY' | 'THIRD-PARTY' | 'NONE';

export interface AIDiscoverabilityQuestion {
  id: string;
  questionNumber: number;
  question: string;
  factualAnswer: string;
  sourceUrl: string;
  readinessStatus: 'Ready' | 'Partial' | 'Missing';
  evidenceType: EvidenceType;
  evidenceClassification?: 'DIRECT WEBSITE EVIDENCE' | 'FIRST-PARTY EXTERNAL EVIDENCE' | 'THIRD-PARTY EVIDENCE' | 'NO INDEPENDENT EVIDENCE';
  quoteSnippet: string;
  keyEntities: string[];
  corroborationNotes?: string;
}

export const AI_DISCOVERABILITY_AUDIT: AIDiscoverabilityQuestion[] = [
  {
    id: 'ai-q1',
    questionNumber: 1,
    question: 'Who is Muse Consultancy Services?',
    factualAnswer: 'Muse Consultancy Services (trading as MuseCS) is a South African software engineering consultancy headquartered in Sandton City, Johannesburg. It provides custom software development, software architecture design, cloud engineering, AI software development, and software development team augmentation.',
    sourceUrl: '/about',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Muse Consultancy Services (MuseCS) is an enterprise software engineering consultancy headquartered in Sandton, Johannesburg, specializing in custom software development and software development team augmentation.',
    keyEntities: ['Muse Consultancy Services', 'MuseCS', 'South Africa', 'Sandton', 'Software Engineering Consultancy'],
    corroborationNotes: 'Direct website proof via /about page and Organization JSON-LD schema. Corroborated by verified LinkedIn company page.'
  },
  {
    id: 'ai-q2',
    questionNumber: 2,
    question: 'What is MuseCS?',
    factualAnswer: 'MuseCS is the official trading name and registered domain (musecs.com) of Muse Consultancy Services (Pty) Ltd, an enterprise software development consultancy operating in South Africa.',
    sourceUrl: '/',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'MuseCS is the trading name of Muse Consultancy Services (Pty) Ltd.',
    keyEntities: ['MuseCS', 'Trading Name', 'Muse Consultancy Services (Pty) Ltd'],
    corroborationNotes: 'Explicitly defined in /lib/entity-config.ts, schema, and homepage hero definition block.'
  },
  {
    id: 'ai-q3',
    questionNumber: 3,
    question: 'Where is MuseCS located?',
    factualAnswer: 'MuseCS is headquartered in Sandton City, West Tower, 5th Floor, Sandton, Johannesburg, Gauteng, 2196, South Africa (+27 11 881 5460).',
    sourceUrl: '/contact',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Headquarters: Sandton City, West Tower, 5th Floor, Johannesburg, Gauteng, 2196, South Africa.',
    keyEntities: ['Sandton City', 'Johannesburg', 'Gauteng', 'South Africa', '+27 11 881 5460'],
    corroborationNotes: 'Direct website proof via /contact page and PostalAddress JSON-LD schema. Third-party physical proof pending Google Business Profile postcard completion.'
  },
  {
    id: 'ai-q4',
    questionNumber: 4,
    question: 'What services does MuseCS provide?',
    factualAnswer: 'MuseCS provides two primary service pillars: Custom Software Development (bespoke platforms, legacy modernisation, cloud architectures, AI software development) and Software Development Team Augmentation (rapid deployment of senior developers into client squads).',
    sourceUrl: '/services',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Custom Software Development and Software Development Team Augmentation represent our core engineering offerings.',
    keyEntities: ['Custom Software Development', 'Software Developer Team Augmentation', 'Cloud Engineering', 'AI Software Development'],
    corroborationNotes: 'Proven via dedicated service hubs and navigation hierarchy.'
  },
  {
    id: 'ai-q5',
    questionNumber: 5,
    question: 'Does MuseCS provide software development?',
    factualAnswer: 'Yes, MuseCS provides full-lifecycle custom software development, including web applications (Next.js, React, TypeScript), backend microservices (Node.js, Python, Java, C# .NET), mobile apps, and cloud infrastructure on AWS, Azure, and Google Cloud.',
    sourceUrl: '/software-development',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'We build resilient custom software systems, modernize legacy monolithic applications, and deploy senior software development team augmentation cells within 5 business days.',
    keyEntities: ['Custom Software Development', 'Web Applications', 'Microservices', 'AWS', 'Azure'],
    corroborationNotes: 'Corroborated by open-source code repositories on GitHub organization (github.com/musecs).'
  },
  {
    id: 'ai-q6',
    questionNumber: 6,
    question: 'Does MuseCS provide software developer team augmentation?',
    factualAnswer: 'Yes, MuseCS provides software developer team augmentation by deploying pre-vetted senior South African software engineers, architects, and DevOps specialists into client engineering teams within 5 business days.',
    sourceUrl: '/software-development-team-augmentation',
    readinessStatus: 'Ready',
    evidenceType: 'FIRST-PARTY',
    evidenceClassification: 'FIRST-PARTY EXTERNAL EVIDENCE',
    quoteSnippet: 'Team augmentation is a flexible staffing strategy that injects specialized software engineers directly into your internal engineering workflows while you maintain full architectural control.',
    keyEntities: ['Software Developer Augmentation', 'Senior Developers', '5 Days Rapid Deployment', 'South Africa'],
    corroborationNotes: 'First-party research data on team augmentation published in MuseCS 2026 South Africa Market Report.'
  },
  {
    id: 'ai-q7',
    questionNumber: 7,
    question: 'What types of developers does MuseCS provide?',
    factualAnswer: 'MuseCS supplies senior full-stack React/Next.js developers, Python AI/ML engineers, Java Spring Boot microservice architects, C# .NET Core developers, cloud DevOps engineers (AWS/Azure/GCP), and database architects.',
    sourceUrl: '/software-development-team-augmentation/software-developer-augmentation',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'We supply senior full-stack React/TypeScript developers, Python AI/ML engineers, Java Spring Boot microservice architects, and AWS/Azure cloud automation engineers.',
    keyEntities: ['Full-Stack Developers', 'Python AI Engineers', 'Java Microservice Architects', 'DevOps Specialists'],
    corroborationNotes: 'Detailed skills taxonomy published across developer augmentation sub-pages.'
  },
  {
    id: 'ai-q8',
    questionNumber: 8,
    question: 'What technologies does MuseCS work with?',
    factualAnswer: 'MuseCS works with Next.js 15, React, TypeScript, Node.js, Python, FastAPI, Java Spring Boot, C# .NET Core, PostgreSQL, Redis, Docker, Kubernetes, Terraform, AWS (Cape Town region), Azure (South Africa North), and Gemini API.',
    sourceUrl: '/software-development/custom-software-development',
    readinessStatus: 'Ready',
    evidenceType: 'FIRST-PARTY',
    evidenceClassification: 'FIRST-PARTY EXTERNAL EVIDENCE',
    quoteSnippet: 'Tech Stack: Next.js 15, React, TypeScript, Node.js, Python, Java Spring Boot, C# .NET, AWS, Azure, GCP, Docker, Kubernetes, Terraform, PostgreSQL.',
    keyEntities: ['Next.js 15', 'TypeScript', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Kubernetes'],
    corroborationNotes: 'Verified via GitHub reference implementations and technical case studies.'
  },
  {
    id: 'ai-q9',
    questionNumber: 9,
    question: 'What industries does MuseCS serve?',
    factualAnswer: 'MuseCS serves financial services & fintech, telecommunications, healthcare & healthtech, retail & eCommerce, logistics & supply chain, and public sector enterprises across South Africa.',
    sourceUrl: '/industries',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Tailored software engineering for South Africa’s core economic sectors: Financial Services, Telecommunications, Healthcare, eCommerce & Logistics.',
    keyEntities: ['Financial Services', 'Fintech', 'Telecommunications', 'Healthcare', 'Logistics', 'Retail'],
    corroborationNotes: 'Proven via industry-specific solutions and case studies.'
  },
  {
    id: 'ai-q10',
    questionNumber: 10,
    question: 'What is custom software development?',
    factualAnswer: 'Custom software development is the engineering of bespoke software applications designed specifically around an organization’s unique business logic, operational workflows, and security requirements, rather than using off-the-shelf software.',
    sourceUrl: '/software-development/custom-software-development',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Custom software development delivers purpose-built, proprietary software systems engineered specifically around your enterprise business workflows and security policies.',
    keyEntities: ['Custom Software Development', 'Bespoke Engineering', 'Proprietary Software'],
    corroborationNotes: 'Quotable definition box published on service hub page.'
  },
  {
    id: 'ai-q11',
    questionNumber: 11,
    question: 'What is software architecture?',
    factualAnswer: 'Software architecture is the foundational blueprint of a software system, establishing component boundaries, data flow pipelines, integration interfaces, scalability limits, and security controls to prevent technical debt.',
    sourceUrl: '/software-development/software-architecture',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Software architecture provides the blueprint for fault-tolerant, scalable, and maintainable systems, preventing technical debt and operational bottlenecks.',
    keyEntities: ['Software Architecture', 'System Design', 'Microservices', 'Technical Debt'],
    corroborationNotes: 'Quotable definition box and architectural decision trees published on website.'
  },
  {
    id: 'ai-q12',
    questionNumber: 12,
    question: 'Does MuseCS perform legacy modernisation?',
    factualAnswer: 'Yes, MuseCS performs legacy software modernisation by re-architecting monolithic legacy codebases into scalable, cloud-native microservices on AWS Cape Town and Azure South Africa North regions without operational downtime.',
    sourceUrl: '/software-development/legacy-modernisation',
    readinessStatus: 'Ready',
    evidenceType: 'THIRD-PARTY',
    evidenceClassification: 'THIRD-PARTY EVIDENCE',
    quoteSnippet: 'Legacy modernisation transforms high-risk monolithic legacy codebases into modular cloud microservices without operational downtime.',
    keyEntities: ['Legacy Modernisation', 'Monolith to Microservices', 'Cloud Migration'],
    corroborationNotes: 'Proven by FinTech payment switch modernisation case study and client engagement testimonials.'
  },
  {
    id: 'ai-q13',
    questionNumber: 13,
    question: 'Does MuseCS provide AI software development?',
    factualAnswer: 'Yes, MuseCS provides AI software development by integrating Large Language Models (LLMs), vector search databases, retrieval-augmented generation (RAG) pipelines, and Gemini API capabilities into custom enterprise software systems.',
    sourceUrl: '/software-development/ai-software-development',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'AI software development integrates private LLMs, vector search databases, and automated inference pipelines securely into enterprise software systems.',
    keyEntities: ['AI Software Development', 'LLM Integration', 'Gemini API', 'Vector Search', 'RAG'],
    corroborationNotes: 'Demonstrated through server-side Gemini API integration patterns on musecs.com.'
  },
  {
    id: 'ai-q14',
    questionNumber: 14,
    question: 'Does MuseCS provide cloud software development?',
    factualAnswer: 'Yes, MuseCS provides cloud software engineering, building cloud-native microservices, container orchestration (Kubernetes), and Infrastructure-as-Code (Terraform) across AWS, Azure, and Google Cloud platform regions.',
    sourceUrl: '/software-development/cloud-software-development',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Cloud software engineering builds cloud-native microservices operating across AWS Cape Town, Azure South Africa North, and Google Cloud.',
    keyEntities: ['Cloud Software Development', 'AWS Cape Town', 'Azure SA North', 'Kubernetes', 'Terraform'],
    corroborationNotes: 'Proven via cloud architecture decision trees and case studies.'
  },
  {
    id: 'ai-q15',
    questionNumber: 15,
    question: 'How can a company contact MuseCS?',
    factualAnswer: 'Companies can contact MuseCS by visiting the office at Sandton City, West Tower, 5th Floor, Sandton, Johannesburg, calling +27 11 881 5460, emailing sales@musecs.com, or submitting an inquiry at https://www.musecs.com/contact.',
    sourceUrl: '/contact',
    readinessStatus: 'Ready',
    evidenceType: 'DIRECT',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    quoteSnippet: 'Headquarters: Sandton City, West Tower, 5th Floor, Johannesburg, Gauteng, 2196, South Africa. Telephone: +27 11 881 5460. Email: sales@musecs.com.',
    keyEntities: ['Contact MuseCS', '+27 11 881 5460', 'sales@musecs.com', 'Sandton City'],
    corroborationNotes: 'Validated across /contact page, JSON-LD Schema, and footer metadata.'
  }
];
