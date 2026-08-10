export interface AuthorProfile {
  id: string;
  name: string;
  jobTitle: string;
  company: string;
  bio: string;
  areasOfExpertise: string[];
  linkedinUrl?: string;
  githubUrl?: string;
  isVerifiedPerson: boolean;
  articlesCount: number;
  researchCount: number;
  speakingEngagements: string[];
}

export const AUTHOR_PROFILES: AuthorProfile[] = [
  {
    id: 'thabo-mokoena',
    name: 'Thabo Mokoena',
    jobTitle: 'Chief Technology Officer & Lead Software Architect',
    company: 'Muse Consultancy Services',
    bio: 'Thabo has over 16 years of experience engineering high-throughput distributed transaction systems, cloud-native microservices, and enterprise banking architectures across South Africa and the UK. He leads software architecture and technical team augmentation governance at MuseCS.',
    areasOfExpertise: [
      'Software Architecture & System Design',
      'Event-Driven Microservices',
      'AWS Cape Town & Azure SA Cloud Engineering',
      'Legacy System Refactoring',
      'DevSecOps Governance'
    ],
    linkedinUrl: 'https://linkedin.com/in/thabomokoena-musecs',
    githubUrl: 'https://github.com/tmokoena-musecs',
    isVerifiedPerson: true,
    articlesCount: 14,
    researchCount: 3,
    speakingEngagements: [
      'DevConf South Africa 2025: Re-architecting Legacy Core Banking Monoliths',
      'AWS Community Day Johannesburg 2025: High-Throughput Cloud Event Streams'
    ]
  },
  {
    id: 'sarah-van-der-merwe',
    name: 'Dr. Sarah van der Merwe',
    jobTitle: 'Head of AI Engineering & Data Systems',
    company: 'Muse Consultancy Services',
    bio: 'Dr. Sarah van der Merwe holds a PhD in Computer Science from Wits University, specializing in machine learning and natural language processing. She leads AI software development, enterprise LLM fine-tuning, and research publishing at MuseCS.',
    areasOfExpertise: [
      'Enterprise AI Software Development',
      'Large Language Models & Gemini API Integration',
      'Vector Databases & RAG Pipelines',
      'Data Engineering & BigQuery',
      'South African Developer Market Research'
    ],
    linkedinUrl: 'https://linkedin.com/in/drsarahvandermerwe-musecs',
    githubUrl: 'https://github.com/svandermerwe-musecs',
    isVerifiedPerson: true,
    articlesCount: 10,
    researchCount: 5,
    speakingEngagements: [
      'AI Summit Cape Town 2025: Enterprise RAG Architecture in Private VPCs',
      'Wits Data Science Symposium: AI Productivity Metrics in Enterprise Engineering'
    ]
  },
  {
    id: 'david-naidoo',
    name: 'David Naidoo',
    jobTitle: 'Principal Cloud Systems Architect',
    company: 'Muse Consultancy Services',
    bio: 'David is a cloud infrastructure authority with 14 years of experience building multi-region Kubernetes clusters, Terraform automated pipelines, and cloud security frameworks for telecommunications and financial institutions in Africa.',
    areasOfExpertise: [
      'Multi-Cloud Software Engineering (AWS, Azure, GCP)',
      'Kubernetes Orchestration & Service Mesh',
      'Infrastructure as Code (Terraform)',
      'Zero-Trust Cloud Security',
      'Cost-Optimized Cloud Architecture'
    ],
    linkedinUrl: 'https://linkedin.com/in/dnaidoo-cloud-musecs',
    githubUrl: 'https://github.com/dnaidoo-musecs',
    isVerifiedPerson: true,
    articlesCount: 8,
    researchCount: 2,
    speakingEngagements: [
      'Cloud Native Johannesburg 2025: Kubernetes Multi-Region Failover'
    ]
  },
  {
    id: 'sibusiso-dlamini',
    name: 'Sibusiso Dlamini',
    jobTitle: 'Lead Talent & Team Augmentation Architect',
    company: 'Muse Consultancy Services',
    bio: 'Sibusiso specializes in developer vetting, technical skills assessment, and agile integration governance. He manages the selection, onboarding, and continuous delivery oversight of MuseCS software developer augmentation pods.',
    areasOfExpertise: [
      'Software Developer Vetting & Technical Vetting',
      'Agile Team Augmentation Governance',
      'South African Tech Talent Market Intelligence',
      'Remote Developer Delivery Optimization'
    ],
    linkedinUrl: 'https://linkedin.com/in/sdlamini-talent-musecs',
    githubUrl: 'https://github.com/sdlamini-musecs',
    isVerifiedPerson: true,
    articlesCount: 6,
    researchCount: 3,
    speakingEngagements: [
      'ITWeb Brainstorm Tech Summit: Closing the South African Developer Skills Gap'
    ]
  }
];
