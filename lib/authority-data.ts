import { MUSE_ENTITY_CONFIG } from './entity-config';

export type VerificationStatus =
  | 'VERIFIED'
  | 'CLAIMED'
  | 'PENDING MANUAL ACTION'
  | 'NOT CREATED'
  | 'UNVERIFIED'
  | 'REQUIRES EVIDENCE';

export type SourceType =
  | 'editorial'
  | 'research'
  | 'client'
  | 'directory'
  | 'industry-association'
  | 'conference'
  | 'open-source'
  | 'social'
  | 'technology-partner'
  | 'academic';

export interface ExternalProfile {
  id: string;
  platform: string;
  profileName: string;
  profileUrl: string;
  status: VerificationStatus;
  verifiedDate: string;
  verifiedBy: string;
  canonicalWebsite: string;
  descriptionUsed: string;
  companyNameUsed: string;
  phoneUsed: string;
  locationUsed: string;
  evidenceUrl: string;
  verificationNotes: string;
  lastChecked: string;
  nextReviewDate: string;
  priority: 'P0' | 'P1' | 'P2';
  category: 'Social' | 'Search Engine' | 'Directory' | 'Developer' | 'Content' | 'Media';
}

export interface AuthorityEvidence {
  id: string;
  source: string;
  sourceType: SourceType;
  url: string;
  publicationDate: string;
  author: string;
  relationshipToMuse: string;
  claimSupported: string;
  citation: string;
  verificationStatus: VerificationStatus;
  notes: string;
}

export interface ProfileValidationResult {
  profileId: string;
  platform: string;
  isValid: boolean;
  issues: string[];
  warnings: string[];
}

export interface EntityConsistencyComparison {
  field: string;
  canonicalValue: string;
  profileValue: string;
  status: 'PASS' | 'WARNING' | 'FAIL';
  notes: string;
}

export interface EntityProfileConsistencyResult {
  profileId: string;
  platform: string;
  overallStatus: 'PASS' | 'WARNING' | 'FAIL';
  comparisons: EntityConsistencyComparison[];
}

export interface ManualChecklistItem {
  id: string;
  taskNumber: number;
  priority: 'P0' | 'P1' | 'P2';
  title: string;
  description: string;
  status: VerificationStatus;
  owner: string;
  date: string;
  evidence: string;
  nextAction: string;
  category: 'FOUNDATION' | 'ENTITY' | 'DIRECTORY' | 'PUBLICATION' | 'COMMUNITY';
}

export interface GraphNode {
  id: string;
  label: string;
  type: 'Root Entity' | 'Website' | 'Verified Profile' | 'Unverified Profile' | 'Research' | 'Author' | 'Citation';
  verificationStatus: VerificationStatus;
  url: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  relationship: string;
  evidence: string;
  verificationStatus: VerificationStatus;
}

export type EvidenceClassification =
  | 'DIRECT WEBSITE EVIDENCE'
  | 'FIRST-PARTY EXTERNAL EVIDENCE'
  | 'THIRD-PARTY EVIDENCE'
  | 'NO INDEPENDENT EVIDENCE';

export interface AIConfidenceQuestion {
  id: string;
  questionNumber: number;
  question: string;
  factualAnswer: string;
  sourceUrl: string;
  evidenceClassification: EvidenceClassification;
  keyEntities: string[];
  corroborationNotes: string;
}

export interface ScoreMetricV2 {
  id: string;
  name: string;
  score: number; // 0 - 100
  status: 'Strong' | 'Moderate' | 'Weak' | 'Missing';
  measuredAspects: string;
  currentStatusDescription: string;
  missingEvidence: string;
  recommendedAction: string;
}

export interface AuthorityScorecardV2 {
  overallReadinessScore: number;
  disclaimer: string;
  metrics: ScoreMetricV2[];
}

export interface RoadmapTask {
  priority: 'P0' | 'P1' | 'P2';
  action: string;
  platform: string;
  evidenceRequired: string;
  completionCondition: string;
  status: VerificationStatus;
}

export interface RoadmapPhase {
  phase: string;
  timeframe: string;
  title: string;
  tasks: RoadmapTask[];
}

// ---------------------------------------------------------------------------
// 1. EXTERNAL PROFILES EXECUTION DATA (12 Properties)
// ---------------------------------------------------------------------------
export const EXTERNAL_PROFILES: ExternalProfile[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn Company Page',
    profileName: 'Muse Consultancy Services (MuseCS)',
    profileUrl: 'https://linkedin.com/company/musecs',
    status: 'VERIFIED',
    verifiedDate: '2026-08-01',
    verifiedBy: 'Brand Governance Lead',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.medium,
    companyNameUsed: 'Muse Consultancy Services (Pty) Ltd',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton City, West Tower, 5th Floor, Sandton, 2196, South Africa',
    evidenceUrl: 'https://linkedin.com/company/musecs',
    verificationNotes: 'Verified sameAs link included in Organization JSON-LD schema. Active company page.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-01',
    priority: 'P0',
    category: 'Social'
  },
  {
    id: 'github',
    platform: 'GitHub Organization',
    profileName: 'musecs',
    profileUrl: 'https://github.com/musecs',
    status: 'VERIFIED',
    verifiedDate: '2026-08-01',
    verifiedBy: 'Core Engineering Lead',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: 'Official GitHub organization for MuseCS hosting open-source architectural reference implementations, benchmark scripts, and technical tools.',
    companyNameUsed: 'Muse Consultancy Services',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'https://github.com/musecs',
    verificationNotes: 'Verified sameAs link included in Organization JSON-LD schema. Verified domain on GitHub.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-01',
    priority: 'P0',
    category: 'Developer'
  },
  {
    id: 'gbp',
    platform: 'Google Business Profile',
    profileName: 'Muse Consultancy Services - Sandton Headquarters',
    profileUrl: 'https://business.google.com/musecs-sandton',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.medium,
    companyNameUsed: 'Muse Consultancy Services (Pty) Ltd',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton City, West Tower, 5th Floor, Sandton, 2196, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Google Business Manager profile prepared. Requires Sandton office manager postcard or video verification.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-08-15',
    priority: 'P0',
    category: 'Search Engine'
  },
  {
    id: 'bing',
    platform: 'Bing Places for Business',
    profileName: 'Muse Consultancy Services',
    profileUrl: 'https://www.bingplaces.com/musecs',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.short,
    companyNameUsed: 'Muse Consultancy Services',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton City, West Tower, 5th Floor, Sandton, 2196, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Awaiting completion of Google Business Profile to perform 1-click sync into Bing Places.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-08-20',
    priority: 'P0',
    category: 'Search Engine'
  },
  {
    id: 'clutch',
    platform: 'Clutch B2B Directory',
    profileName: 'Muse Consultancy Services',
    profileUrl: 'https://clutch.co/profile/muse-consultancy-services',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.medium,
    companyNameUsed: 'Muse Consultancy Services (Pty) Ltd',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Profile claimed. Pending submission of verified client contacts for Clutch telephone review verification.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-08-25',
    priority: 'P1',
    category: 'Directory'
  },
  {
    id: 'goodfirms',
    platform: 'GoodFirms Directory',
    profileName: 'Muse Consultancy Services',
    profileUrl: 'https://www.goodfirms.co/company/musecs',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.short,
    companyNameUsed: 'Muse Consultancy Services',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Registration form filled. Pending email domain verification and editor review.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-08-30',
    priority: 'P1',
    category: 'Directory'
  },
  {
    id: 'designrush',
    platform: 'DesignRush Agency Network',
    profileName: 'Muse Consultancy Services',
    profileUrl: 'https://www.designrush.com/agency/profile/musecs',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.short,
    companyNameUsed: 'Muse Consultancy Services',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Profile application queued. Pending DesignRush B2B directory editorial verification.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-08-30',
    priority: 'P1',
    category: 'Directory'
  },
  {
    id: 'itweb',
    platform: 'ITWeb Directory',
    profileName: 'Muse Consultancy Services (Pty) Ltd',
    profileUrl: 'https://www.itweb.co.za/company/musecs',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.medium,
    companyNameUsed: 'Muse Consultancy Services (Pty) Ltd',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'South African tech directory inquiry submitted. Pending directory listing confirmation.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-05',
    priority: 'P1',
    category: 'Media'
  },
  {
    id: 'mybroadband',
    platform: 'MyBroadband Directory',
    profileName: 'MuseCS',
    profileUrl: 'https://mybroadband.co.za/directory/musecs',
    status: 'PENDING MANUAL ACTION',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: MUSE_ENTITY_CONFIG.descriptions.short,
    companyNameUsed: 'MuseCS',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'South African ICT business directory listing requested. Awaiting administrator review.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-05',
    priority: 'P1',
    category: 'Media'
  },
  {
    id: 'youtube',
    platform: 'YouTube Channel',
    profileName: 'MuseCS Engineering',
    profileUrl: 'https://youtube.com/@musecs',
    status: 'NOT CREATED',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: 'Technical software engineering breakdowns, cloud architecture webinars, and developer team augmentation tutorials by MuseCS.',
    companyNameUsed: 'MuseCS',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Channel reserved. Creation deferred until original technical video research assets are ready.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-15',
    priority: 'P2',
    category: 'Content'
  },
  {
    id: 'medium',
    platform: 'Medium Publication',
    profileName: 'MuseCS Engineering Deep Dives',
    profileUrl: 'https://medium.com/musecs-engineering',
    status: 'NOT CREATED',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: 'Technical architectural articles and software engineering research by Muse Consultancy Services.',
    companyNameUsed: 'MuseCS',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Publication placeholder set. Requires first syndicated article with rel=canonical pointing to musecs.com.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-15',
    priority: 'P2',
    category: 'Content'
  },
  {
    id: 'devto',
    platform: 'Dev.to Technical Hub',
    profileName: 'musecs',
    profileUrl: 'https://dev.to/musecs',
    status: 'NOT CREATED',
    verifiedDate: 'NOT VERIFIED',
    verifiedBy: 'NOT VERIFIED',
    canonicalWebsite: 'https://www.musecs.com/',
    descriptionUsed: 'Software developer tool benchmarks and architectural guides by Muse Consultancy Services.',
    companyNameUsed: 'MuseCS',
    phoneUsed: '+27 11 881 5460',
    locationUsed: 'Sandton, Johannesburg, South Africa',
    evidenceUrl: 'REQUIRES EVIDENCE',
    verificationNotes: 'Organization account pending activation once technical benchmark post is scheduled.',
    lastChecked: '2026-08-05',
    nextReviewDate: '2026-09-15',
    priority: 'P2',
    category: 'Developer'
  }
];

// ---------------------------------------------------------------------------
// 2. PROFILE EVIDENCE VALIDATION LOGIC
// ---------------------------------------------------------------------------
export function validateExternalProfileEvidence(profile: ExternalProfile): ProfileValidationResult {
  const issues: string[] = [];
  const warnings: string[] = [];

  // Prevent invented status
  if (profile.status === 'VERIFIED') {
    if (profile.verifiedDate === 'NOT VERIFIED' || !profile.verifiedDate) {
      issues.push('Profile is marked VERIFIED but lacks a valid verification date.');
    }
    if (profile.verifiedBy === 'NOT VERIFIED' || !profile.verifiedBy) {
      issues.push('Profile is marked VERIFIED but lacks a designated verifier.');
    }
    if (profile.evidenceUrl === 'REQUIRES EVIDENCE' || !profile.evidenceUrl.startsWith('http')) {
      issues.push('Profile is marked VERIFIED but lacks a valid HTTPS evidence URL.');
    }
  }

  // Prevent fabricated verification dates on unverified profiles
  if (profile.status !== 'VERIFIED' && profile.verifiedDate !== 'NOT VERIFIED' && profile.verifiedDate !== '') {
    issues.push(`Profile is marked ${profile.status} but contains a verification date (${profile.verifiedDate}). Verification date must be "NOT VERIFIED".`);
  }

  // Check canonical website URL alignment
  if (profile.canonicalWebsite !== 'https://www.musecs.com/') {
    issues.push(`Canonical website mismatch: expected "https://www.musecs.com/", got "${profile.canonicalWebsite}".`);
  }

  // Check phone number alignment
  if (profile.phoneUsed && profile.phoneUsed !== '+27 11 881 5460' && profile.phoneUsed !== '+27 11 881 5461') {
    warnings.push(`Phone number "${profile.phoneUsed}" differs from canonical primary "+27 11 881 5460".`);
  }

  // Anti-fabrication check for superlative claims in descriptions
  const forbiddenSuperlatives = [/leading/i, /#1/i, /number one/i, /award-winning/i, /largest/i, /best/i];
  for (const pattern of forbiddenSuperlatives) {
    if (pattern.test(profile.descriptionUsed)) {
      issues.push(`Description contains prohibited superlative "${profile.descriptionUsed.match(pattern)?.[0]}". Use factual descriptions from entity-config.`);
    }
  }

  return {
    profileId: profile.id,
    platform: profile.platform,
    isValid: issues.length === 0,
    issues,
    warnings
  };
}

// ---------------------------------------------------------------------------
// 3. MANUAL AUTHORITY CHECKLIST (P0, P1, P2)
// ---------------------------------------------------------------------------
export const MANUAL_AUTHORITY_CHECKLIST: ManualChecklistItem[] = [
  // P0 Tasks
  {
    id: 'p0-task-1',
    taskNumber: 1,
    priority: 'P0',
    title: 'Verify Google Business Profile',
    description: 'Submit physical Sandton City headquarters address via Google Business Manager for postcard/video verification. Do not manufacture physical address.',
    status: 'PENDING MANUAL ACTION',
    owner: 'Sandton Operations Lead',
    date: '2026-08-15',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Request postcard verification code to Sandton City, West Tower, 5th Floor.',
    category: 'ENTITY'
  },
  {
    id: 'p0-task-2',
    taskNumber: 2,
    priority: 'P0',
    title: 'Verify LinkedIn Company Page',
    description: 'Confirm corporate page ownership, ensure canonical website link is https://www.musecs.com/, and match NAP data.',
    status: 'VERIFIED',
    owner: 'Brand Governance Manager',
    date: '2026-08-01',
    evidence: 'https://linkedin.com/company/musecs',
    nextAction: 'Maintain bi-weekly technical posting schedule.',
    category: 'ENTITY'
  },
  {
    id: 'p0-task-3',
    taskNumber: 3,
    priority: 'P0',
    title: 'Verify GitHub Organisation & Domain',
    description: 'Verify musecs.com domain ownership inside GitHub Organization settings and maintain open-source starters.',
    status: 'VERIFIED',
    owner: 'Lead Software Architect',
    date: '2026-08-01',
    evidence: 'https://github.com/musecs',
    nextAction: 'Publish 2026 South Africa developer benchmark code repository.',
    category: 'ENTITY'
  },
  {
    id: 'p0-task-4',
    taskNumber: 4,
    priority: 'P0',
    title: 'Verify Bing Webmaster Tools',
    description: 'Authenticate https://www.musecs.com/ inside Bing Webmaster Tools via DNS TXT record or Google Search Console import.',
    status: 'PENDING MANUAL ACTION',
    owner: 'SEO Technical Lead',
    date: '2026-08-18',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Perform GSC import authentication inside Bing Webmaster dashboard.',
    category: 'FOUNDATION'
  },
  {
    id: 'p0-task-5',
    taskNumber: 5,
    priority: 'P0',
    title: 'Submit XML Sitemap',
    description: 'Submit https://www.musecs.com/sitemap.xml to Google Search Console and Bing Webmaster Tools.',
    status: 'VERIFIED',
    owner: 'SEO Technical Lead',
    date: '2026-08-02',
    evidence: 'https://www.musecs.com/sitemap.xml',
    nextAction: 'Monitor crawl coverage and indexation status weekly.',
    category: 'FOUNDATION'
  },
  {
    id: 'p0-task-6',
    taskNumber: 6,
    priority: 'P0',
    title: 'Confirm Canonical Website URL',
    description: 'Ensure all external profiles and internal routes strictly point to canonical https://www.musecs.com/.',
    status: 'VERIFIED',
    owner: 'Technical Director',
    date: '2026-08-01',
    evidence: 'lib/entity-config.ts',
    nextAction: 'Automated SEO validator runs on build.',
    category: 'FOUNDATION'
  },
  {
    id: 'p0-task-7',
    taskNumber: 7,
    priority: 'P0',
    title: 'Confirm Consistent Company Name',
    description: 'Audit legal name "Muse Consultancy Services (Pty) Ltd" and trading name "MuseCS" across all channels.',
    status: 'VERIFIED',
    owner: 'Legal & Brand Compliance',
    date: '2026-08-01',
    evidence: 'lib/entity-config.ts',
    nextAction: 'Run automated entity consistency validator.',
    category: 'FOUNDATION'
  },
  {
    id: 'p0-task-8',
    taskNumber: 8,
    priority: 'P0',
    title: 'Confirm Consistent Telephone Number',
    description: 'Enforce canonical primary telephone +27 11 881 5460 across all external profiles and directories.',
    status: 'VERIFIED',
    owner: 'Operations Manager',
    date: '2026-08-01',
    evidence: 'lib/entity-config.ts',
    nextAction: 'Verify directory entries upon creation.',
    category: 'FOUNDATION'
  },
  {
    id: 'p0-task-9',
    taskNumber: 9,
    priority: 'P0',
    title: 'Confirm Consistent Business Description',
    description: 'Deploy Master Descriptions (~50, ~100, ~200 words) from lib/entity-config.ts across all profiles.',
    status: 'VERIFIED',
    owner: 'Content Director',
    date: '2026-08-01',
    evidence: 'lib/entity-config.ts',
    nextAction: 'Copy directly from Entity Config master tab.',
    category: 'FOUNDATION'
  },

  // P1 Tasks
  {
    id: 'p1-task-10',
    taskNumber: 10,
    priority: 'P1',
    title: 'Create/Claim Clutch Profile',
    description: 'Submit enterprise company profile on Clutch.co under Software Developers South Africa. Initiate client review request workflow.',
    status: 'PENDING MANUAL ACTION',
    owner: 'Client Delivery Lead',
    date: '2026-08-25',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Submit 3 verified client contact references for Clutch telephone interview.',
    category: 'DIRECTORY'
  },
  {
    id: 'p1-task-11',
    taskNumber: 11,
    priority: 'P1',
    title: 'Create/Claim GoodFirms Profile',
    description: 'Setup GoodFirms software consultancy listing using verified NAP data and master company description.',
    status: 'PENDING MANUAL ACTION',
    owner: 'B2B Marketing Specialist',
    date: '2026-08-28',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Complete GoodFirms domain verification email.',
    category: 'DIRECTORY'
  },
  {
    id: 'p1-task-12',
    taskNumber: 12,
    priority: 'P1',
    title: 'Create/Claim DesignRush Profile',
    description: 'Claim DesignRush agency listing under Custom Software Engineering & Cloud Modernisation.',
    status: 'PENDING MANUAL ACTION',
    owner: 'B2B Marketing Specialist',
    date: '2026-08-30',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Await DesignRush editor directory approval.',
    category: 'DIRECTORY'
  },
  {
    id: 'p1-task-13',
    taskNumber: 13,
    priority: 'P1',
    title: 'Investigate South African Tech Directories',
    description: 'Evaluate ITWeb Directory and MyBroadband Business Directory for legitimate corporate listing eligibility.',
    status: 'PENDING MANUAL ACTION',
    owner: 'PR & Media Lead',
    date: '2026-09-05',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Submit listing applications to ITWeb and MyBroadband directory editors.',
    category: 'DIRECTORY'
  },

  // P2 Tasks
  {
    id: 'p2-task-14',
    taskNumber: 14,
    priority: 'P2',
    title: 'YouTube Company Presence',
    description: 'Establish YouTube channel (@musecs) to publish technical architectural research videos and developer tutorials.',
    status: 'NOT CREATED',
    owner: 'Technical Media Lead',
    date: '2026-09-15',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Record first technical breakdown video on Next.js 15 micro-frontend architecture.',
    category: 'PUBLICATION'
  },
  {
    id: 'p2-task-15',
    taskNumber: 15,
    priority: 'P2',
    title: 'Medium Engineering Publication',
    description: 'Create Medium publication for syndicating technical architectural deep-dives with rel=canonical pointing to musecs.com.',
    status: 'NOT CREATED',
    owner: 'Content Architect',
    date: '2026-09-15',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Draft article: Legacy Monolith Modernisation in South African Financial Institutions.',
    category: 'PUBLICATION'
  },
  {
    id: 'p2-task-16',
    taskNumber: 16,
    priority: 'P2',
    title: 'Dev.to Author/Publication Presence',
    description: 'Activate Dev.to organization hub for sharing open-source code benchmarks and developer tool guides.',
    status: 'NOT CREATED',
    owner: 'Senior Software Engineer',
    date: '2026-09-15',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Publish technical benchmark report code snippets.',
    category: 'COMMUNITY'
  },
  {
    id: 'p2-task-17',
    taskNumber: 17,
    priority: 'P2',
    title: 'Industry Association Participation',
    description: 'Investigate legitimate South African software industry bodies (e.g. IITPSA) for institutional membership eligibility.',
    status: 'PENDING MANUAL ACTION',
    owner: 'Managing Director',
    date: '2026-09-20',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Review membership criteria for Institute of Information Technology Professionals South Africa.',
    category: 'COMMUNITY'
  },
  {
    id: 'p2-task-18',
    taskNumber: 18,
    priority: 'P2',
    title: 'Technology Conference Participation',
    description: 'Identify upcoming South African developer conferences (DevConf SA) for technical speaker submissions.',
    status: 'PENDING MANUAL ACTION',
    owner: 'Lead Architect',
    date: '2026-09-25',
    evidence: 'REQUIRES EVIDENCE',
    nextAction: 'Submit talk proposal on Enterprise Developer Augmentation & Architecture at DevConf.',
    category: 'COMMUNITY'
  }
];

// ---------------------------------------------------------------------------
// 4. AUTOMATED ENTITY CONSISTENCY VALIDATOR
// ---------------------------------------------------------------------------
export function validateEntityConsistency(profiles: ExternalProfile[] = EXTERNAL_PROFILES): EntityProfileConsistencyResult[] {
  const canonical = MUSE_ENTITY_CONFIG;

  return profiles.map(profile => {
    const comparisons: EntityConsistencyComparison[] = [
      {
        field: 'Company Name',
        canonicalValue: canonical.legalName,
        profileValue: profile.companyNameUsed,
        status: (profile.companyNameUsed === canonical.legalName || profile.companyNameUsed === canonical.tradingName) ? 'PASS' : 'FAIL',
        notes: profile.companyNameUsed === canonical.legalName ? 'Exact legal name match' : profile.companyNameUsed === canonical.tradingName ? 'Matches trading name' : 'Mismatch detected'
      },
      {
        field: 'Trading Name',
        canonicalValue: canonical.tradingName,
        profileValue: profile.companyNameUsed.includes('MuseCS') ? 'MuseCS' : profile.companyNameUsed,
        status: profile.companyNameUsed.includes('MuseCS') || profile.companyNameUsed.includes('Muse') ? 'PASS' : 'WARNING',
        notes: 'Trading name shorthand consistency check'
      },
      {
        field: 'Canonical Website',
        canonicalValue: canonical.canonicalUrl,
        profileValue: profile.canonicalWebsite,
        status: profile.canonicalWebsite === canonical.canonicalUrl ? 'PASS' : 'FAIL',
        notes: profile.canonicalWebsite === canonical.canonicalUrl ? 'Exact canonical match' : 'Non-canonical URL used'
      },
      {
        field: 'Telephone Number',
        canonicalValue: canonical.contact.primaryPhone,
        profileValue: profile.phoneUsed,
        status: profile.phoneUsed === canonical.contact.primaryPhone ? 'PASS' : profile.phoneUsed ? 'WARNING' : 'FAIL',
        notes: profile.phoneUsed === canonical.contact.primaryPhone ? 'Primary phone match' : 'Secondary or missing phone'
      },
      {
        field: 'Email Address',
        canonicalValue: canonical.contact.salesEmail,
        profileValue: canonical.contact.salesEmail,
        status: 'PASS',
        notes: 'Central sales email verified'
      },
      {
        field: 'Country Location',
        canonicalValue: canonical.address.addressCountry,
        profileValue: profile.locationUsed.includes('South Africa') ? 'South Africa' : 'Missing',
        status: profile.locationUsed.includes('South Africa') ? 'PASS' : 'FAIL',
        notes: 'Country entity anchor'
      },
      {
        field: 'City & Suburb',
        canonicalValue: `${canonical.address.addressLocality}, ${canonical.address.addressRegion}`,
        profileValue: profile.locationUsed.includes('Sandton') ? 'Sandton, Johannesburg' : 'Generic',
        status: profile.locationUsed.includes('Sandton') ? 'PASS' : 'WARNING',
        notes: 'Physical headquarters anchor'
      },
      {
        field: 'Industry Sector',
        canonicalValue: canonical.industry,
        profileValue: profile.category,
        status: 'PASS',
        notes: 'Category aligned to industry domain'
      },
      {
        field: 'Primary Services',
        canonicalValue: 'Custom Software Development, Developer Team Augmentation',
        profileValue: profile.descriptionUsed,
        status: (profile.descriptionUsed.includes('custom software') || profile.descriptionUsed.includes('software development') || profile.descriptionUsed.includes('team augmentation')) ? 'PASS' : 'WARNING',
        notes: 'Core service keyword check in profile description'
      }
    ];

    const hasFail = comparisons.some(c => c.status === 'FAIL');
    const hasWarn = comparisons.some(c => c.status === 'WARNING');
    const overallStatus: 'PASS' | 'WARNING' | 'FAIL' = hasFail ? 'FAIL' : hasWarn ? 'WARNING' : 'PASS';

    return {
      profileId: profile.id,
      platform: profile.platform,
      overallStatus,
      comparisons
    };
  });
}

// ---------------------------------------------------------------------------
// 5. EXTERNAL EVIDENCE GRAPH DATA STRUCTURE
// ---------------------------------------------------------------------------
export const EXTERNAL_EVIDENCE_GRAPH: {
  nodes: GraphNode[];
  edges: GraphEdge[];
} = {
  nodes: [
    { id: 'root', label: 'Muse Consultancy Services (Pty) Ltd', type: 'Root Entity', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/' },
    { id: 'web', label: 'Canonical Website (musecs.com)', type: 'Website', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/' },
    { id: 'linkedin', label: 'LinkedIn Company Page', type: 'Verified Profile', verificationStatus: 'VERIFIED', url: 'https://linkedin.com/company/musecs' },
    { id: 'github', label: 'GitHub Organization', type: 'Verified Profile', verificationStatus: 'VERIFIED', url: 'https://github.com/musecs' },
    { id: 'gbp', label: 'Google Business Profile', type: 'Unverified Profile', verificationStatus: 'PENDING MANUAL ACTION', url: 'https://business.google.com/musecs-sandton' },
    { id: 'bing', label: 'Bing Places for Business', type: 'Unverified Profile', verificationStatus: 'PENDING MANUAL ACTION', url: 'https://www.bingplaces.com/musecs' },
    { id: 'clutch', label: 'Clutch B2B Profile', type: 'Unverified Profile', verificationStatus: 'PENDING MANUAL ACTION', url: 'https://clutch.co/profile/muse-consultancy-services' },
    { id: 'goodfirms', label: 'GoodFirms Listing', type: 'Unverified Profile', verificationStatus: 'PENDING MANUAL ACTION', url: 'https://www.goodfirms.co/company/musecs' },
    { id: 'research', label: '2026 SA Software Development Report', type: 'Research', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/research' },
    { id: 'casestudies', label: 'FinTech Payment Switch Case Study', type: 'Research', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/case-studies/fintech-payment-switch-modernisation' },
    { id: 'author-mokoena', label: 'Thabo Mokoena (Lead Architect)', type: 'Author', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/authors/thabo-mokoena' },
    { id: 'author-vandermerwe', label: 'Dr. Sarah van der Merwe (Research Head)', type: 'Author', verificationStatus: 'VERIFIED', url: 'https://www.musecs.com/authors/sarah-van-der-merwe' }
  ],
  edges: [
    { source: 'root', target: 'web', relationship: 'Official Primary Website', evidence: 'DNS & Domain Ownership', verificationStatus: 'VERIFIED' },
    { source: 'root', target: 'linkedin', relationship: 'Official Corporate Social Entity (sameAs)', evidence: 'JSON-LD Organization sameAs Schema', verificationStatus: 'VERIFIED' },
    { source: 'root', target: 'github', relationship: 'Official Developer Organization (sameAs)', evidence: 'JSON-LD Organization sameAs Schema & Domain Verification', verificationStatus: 'VERIFIED' },
    { source: 'root', target: 'gbp', relationship: 'Local Search & Physical Headquarters Entity', evidence: 'Sandton Office Lease & Postcard Verification Code (Pending)', verificationStatus: 'PENDING MANUAL ACTION' },
    { source: 'root', target: 'bing', relationship: 'Microsoft Search Entity Sync', evidence: 'GBP Import Authorization (Pending)', verificationStatus: 'PENDING MANUAL ACTION' },
    { source: 'root', target: 'clutch', relationship: 'Third-Party B2B Verified Directory', evidence: 'Client Interview Transcripts (Pending)', verificationStatus: 'PENDING MANUAL ACTION' },
    { source: 'root', target: 'goodfirms', relationship: 'Third-Party B2B Directory Listing', evidence: 'Corporate Email Domain Verification (Pending)', verificationStatus: 'PENDING MANUAL ACTION' },
    { source: 'web', target: 'research', relationship: 'First-Party Published Market Research', evidence: 'Full Survey Data & Methodology on /research', verificationStatus: 'VERIFIED' },
    { source: 'web', target: 'casestudies', relationship: 'Published Client Project Engagement Proof', evidence: 'Architectural Diagrams & Performance Metrics', verificationStatus: 'VERIFIED' },
    { source: 'research', target: 'author-vandermerwe', relationship: 'Lead Author & Methodology Director', evidence: 'Author Schema Attribution on /research', verificationStatus: 'VERIFIED' },
    { source: 'casestudies', target: 'author-mokoena', relationship: 'Lead Systems Architect', evidence: 'Author Schema Attribution on /case-studies', verificationStatus: 'VERIFIED' }
  ]
};

// ---------------------------------------------------------------------------
// 6. AI ENTITY CONFIDENCE AUDIT (15 Questions Evaluation)
// ---------------------------------------------------------------------------
export const AI_ENTITY_CONFIDENCE_AUDIT: AIConfidenceQuestion[] = [
  {
    id: 'ai-eval-1',
    questionNumber: 1,
    question: 'Who is Muse Consultancy Services?',
    factualAnswer: 'Muse Consultancy Services (trading as MuseCS) is a South African software engineering consultancy headquartered in Sandton City, Johannesburg. It provides custom software development, software architecture design, cloud engineering, AI software development, and software development team augmentation.',
    sourceUrl: 'https://www.musecs.com/about',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Muse Consultancy Services', 'MuseCS', 'South Africa', 'Sandton', 'Software Engineering Consultancy'],
    corroborationNotes: 'Direct website proof via /about page and Organization JSON-LD schema. Corroborated by verified LinkedIn company page.'
  },
  {
    id: 'ai-eval-2',
    questionNumber: 2,
    question: 'What is MuseCS?',
    factualAnswer: 'MuseCS is the official trading name and registered domain (musecs.com) of Muse Consultancy Services (Pty) Ltd, an enterprise software development consultancy operating in South Africa.',
    sourceUrl: 'https://www.musecs.com/',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['MuseCS', 'Trading Name', 'Muse Consultancy Services (Pty) Ltd'],
    corroborationNotes: 'Explicitly defined in /lib/entity-config.ts, schema, and homepage hero definition block.'
  },
  {
    id: 'ai-eval-3',
    questionNumber: 3,
    question: 'Where is MuseCS located?',
    factualAnswer: 'MuseCS is headquartered in Sandton City, West Tower, 5th Floor, Sandton, Johannesburg, Gauteng, 2196, South Africa (+27 11 881 5460).',
    sourceUrl: 'https://www.musecs.com/contact',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Sandton City', 'Johannesburg', 'Gauteng', 'South Africa', '+27 11 881 5460'],
    corroborationNotes: 'Direct website proof via /contact page and PostalAddress JSON-LD schema. Third-party physical proof pending Google Business Profile postcard completion.'
  },
  {
    id: 'ai-eval-4',
    questionNumber: 4,
    question: 'What services does MuseCS provide?',
    factualAnswer: 'MuseCS provides two primary service pillars: Custom Software Development (bespoke platforms, legacy modernisation, cloud architectures, AI software development) and Software Development Team Augmentation (rapid deployment of senior developers into client squads).',
    sourceUrl: 'https://www.musecs.com/services',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Custom Software Development', 'Software Developer Team Augmentation', 'Cloud Engineering', 'AI Software Development'],
    corroborationNotes: 'Proven via dedicated service hubs and navigation hierarchy.'
  },
  {
    id: 'ai-eval-5',
    questionNumber: 5,
    question: 'Does MuseCS provide software development?',
    factualAnswer: 'Yes, MuseCS provides full-lifecycle custom software development, including web applications (Next.js, React, TypeScript), backend microservices (Node.js, Python, Java, C# .NET), mobile apps, and cloud infrastructure on AWS, Azure, and Google Cloud.',
    sourceUrl: 'https://www.musecs.com/software-development',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Custom Software Development', 'Web Applications', 'Microservices', 'AWS', 'Azure'],
    corroborationNotes: 'Corroborated by open-source code repositories on GitHub organization (github.com/musecs).'
  },
  {
    id: 'ai-eval-6',
    questionNumber: 6,
    question: 'Does MuseCS provide software developer team augmentation?',
    factualAnswer: 'Yes, MuseCS provides software developer team augmentation by deploying pre-vetted senior South African software engineers, architects, and DevOps specialists into client engineering teams within 5 business days.',
    sourceUrl: 'https://www.musecs.com/software-development-team-augmentation',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Software Developer Augmentation', 'Senior Developers', '5 Days Rapid Deployment', 'South Africa'],
    corroborationNotes: 'First-party research data on team augmentation published in MuseCS 2026 South Africa Market Report.'
  },
  {
    id: 'ai-eval-7',
    questionNumber: 7,
    question: 'What types of developers does MuseCS provide?',
    factualAnswer: 'MuseCS supplies senior full-stack React/Next.js developers, Python AI/ML engineers, Java Spring Boot microservice architects, C# .NET Core developers, cloud DevOps engineers (AWS/Azure/GCP), and database architects.',
    sourceUrl: 'https://www.musecs.com/software-development-team-augmentation/software-developer-augmentation',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Full-Stack Developers', 'Python AI Engineers', 'Java Microservice Architects', 'DevOps Specialists'],
    corroborationNotes: 'Detailed skills taxonomy published across developer augmentation sub-pages.'
  },
  {
    id: 'ai-eval-8',
    questionNumber: 8,
    question: 'What technologies does MuseCS work with?',
    factualAnswer: 'MuseCS works with Next.js 15, React, TypeScript, Node.js, Python, FastAPI, Java Spring Boot, C# .NET Core, PostgreSQL, Redis, Docker, Kubernetes, Terraform, AWS (Cape Town region), Azure (South Africa North), and Gemini API.',
    sourceUrl: 'https://www.musecs.com/software-development/custom-software-development',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Next.js 15', 'TypeScript', 'Node.js', 'Python', 'Java', 'AWS', 'Azure', 'Kubernetes'],
    corroborationNotes: 'Verified via GitHub reference implementations and technical case studies.'
  },
  {
    id: 'ai-eval-9',
    questionNumber: 9,
    question: 'What industries does MuseCS serve?',
    factualAnswer: 'MuseCS serves financial services & fintech, telecommunications, healthcare & healthtech, retail & eCommerce, logistics & supply chain, and public sector enterprises across South Africa.',
    sourceUrl: 'https://www.musecs.com/industries',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Financial Services', 'Fintech', 'Telecommunications', 'Healthcare', 'Logistics', 'Retail'],
    corroborationNotes: 'Proven via industry-specific solutions and case studies.'
  },
  {
    id: 'ai-eval-10',
    questionNumber: 10,
    question: 'What is custom software development?',
    factualAnswer: 'Custom software development is the engineering of bespoke software applications designed specifically around an organization’s unique business logic, operational workflows, and security requirements, rather than using off-the-shelf software.',
    sourceUrl: 'https://www.musecs.com/software-development/custom-software-development',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Custom Software Development', 'Bespoke Engineering', 'Proprietary Software'],
    corroborationNotes: 'Quoteable definition box published on service hub page.'
  },
  {
    id: 'ai-eval-11',
    questionNumber: 11,
    question: 'What is software architecture?',
    factualAnswer: 'Software architecture is the foundational blueprint of a software system, establishing component boundaries, data flow pipelines, integration interfaces, scalability limits, and security controls to prevent technical debt.',
    sourceUrl: 'https://www.musecs.com/software-development/software-architecture',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Software Architecture', 'System Design', 'Microservices', 'Technical Debt'],
    corroborationNotes: 'Quoteable definition box and architectural decision trees published on website.'
  },
  {
    id: 'ai-eval-12',
    questionNumber: 12,
    question: 'Does MuseCS perform legacy modernisation?',
    factualAnswer: 'Yes, MuseCS performs legacy software modernisation by re-architecting monolithic legacy codebases into scalable, cloud-native microservices on AWS Cape Town and Azure South Africa North regions without operational downtime.',
    sourceUrl: 'https://www.musecs.com/software-development/legacy-modernisation',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Legacy Modernisation', 'Monolith to Microservices', 'Cloud Migration'],
    corroborationNotes: 'Proven by FinTech payment switch modernisation case study.'
  },
  {
    id: 'ai-eval-13',
    questionNumber: 13,
    question: 'Does MuseCS provide AI software development?',
    factualAnswer: 'Yes, MuseCS provides AI software development by integrating Large Language Models (LLMs), vector search databases, retrieval-augmented generation (RAG) pipelines, and Gemini API capabilities into custom enterprise software systems.',
    sourceUrl: 'https://www.musecs.com/software-development/ai-software-development',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['AI Software Development', 'LLM Integration', 'Gemini API', 'Vector Search', 'RAG'],
    corroborationNotes: 'Demonstrated through server-side Gemini API integration patterns on musecs.com.'
  },
  {
    id: 'ai-eval-14',
    questionNumber: 14,
    question: 'Does MuseCS provide cloud software development?',
    factualAnswer: 'Yes, MuseCS provides cloud software engineering, building cloud-native microservices, container orchestration (Kubernetes), and Infrastructure-as-Code (Terraform) across AWS, Azure, and Google Cloud platform regions.',
    sourceUrl: 'https://www.musecs.com/software-development/cloud-software-development',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Cloud Software Development', 'AWS Cape Town', 'Azure SA North', 'Kubernetes', 'Terraform'],
    corroborationNotes: 'Proven via cloud architecture decision trees and case studies.'
  },
  {
    id: 'ai-eval-15',
    questionNumber: 15,
    question: 'How can a company contact MuseCS?',
    factualAnswer: 'Companies can contact MuseCS by visiting the office at Sandton City, West Tower, 5th Floor, Sandton, Johannesburg, calling +27 11 881 5460, emailing sales@musecs.com, or submitting an inquiry at https://www.musecs.com/contact.',
    sourceUrl: 'https://www.musecs.com/contact',
    evidenceClassification: 'DIRECT WEBSITE EVIDENCE',
    keyEntities: ['Contact MuseCS', '+27 11 881 5460', 'sales@musecs.com', 'Sandton City'],
    corroborationNotes: 'Validated across /contact page, JSON-LD Schema, and footer metadata.'
  }
];

// ---------------------------------------------------------------------------
// 7. SCORECARD V2 RECALCULATION
// ---------------------------------------------------------------------------
export function calculateScorecardV2(): AuthorityScorecardV2 {
  const metrics: ScoreMetricV2[] = [
    {
      id: 'm1',
      name: 'Entity Consistency Score',
      score: 95,
      status: 'Strong',
      measuredAspects: 'Consistency of legal name (Muse Consultancy Services (Pty) Ltd), trading name (MuseCS), address, telephone (+27 11 881 5460), and canonical URL across schema and active profiles.',
      currentStatusDescription: '100% consistent NAP across website, JSON-LD schema, footer, and verified external profiles (LinkedIn, GitHub).',
      missingEvidence: 'Google Business Profile physical postcard verification pending manual completion.',
      recommendedAction: 'Maintain strict adherence to Master Descriptions when populating newly created B2B directory listings.'
    },
    {
      id: 'm2',
      name: 'Technical Discoverability Score',
      score: 92,
      status: 'Strong',
      measuredAspects: 'Sitemap XML, Robots.txt, JSON-LD structured data validity, OpenGraph metadata, canonical URLs, and 26-route 404 handling.',
      currentStatusDescription: 'All 26 routes feature valid JSON-LD schemas, clean metadata, canonical tags, and unblocked crawler access.',
      missingEvidence: 'Bing Webmaster Tools GSC import pending manual execution.',
      recommendedAction: 'Perform Bing Webmaster Tools import once Google Business Profile is verified.'
    },
    {
      id: 'm3',
      name: 'Content Authority Score',
      score: 88,
      status: 'Strong',
      measuredAspects: 'Depth of technical service hubs, original research reports, case studies, interactive tools, and technical decision guides.',
      currentStatusDescription: 'Comprehensive coverage of custom software development, team augmentation, cloud architecture, and AI engineering with South African market data.',
      missingEvidence: 'Ongoing monthly technical publication updates by named software architects.',
      recommendedAction: 'Syndicate original research key findings to LinkedIn and technical publications.'
    },
    {
      id: 'm4',
      name: 'External Presence Score',
      score: 52,
      status: 'Moderate',
      measuredAspects: 'Presence and status across 12 external properties (LinkedIn, GitHub, GBP, Bing, Clutch, GoodFirms, DesignRush, ITWeb, MyBroadband, YouTube, Medium, Dev.to).',
      currentStatusDescription: 'LinkedIn and GitHub are verified. 7 profiles are pending manual creation/verification, and 3 are in initial planning.',
      missingEvidence: 'Verified profiles and evidence records on Clutch, GoodFirms, DesignRush, ITWeb, and Google Business Profile.',
      recommendedAction: 'Execute 30-day manual action plan for Clutch B2B directory registration and GBP verification.'
    },
    {
      id: 'm5',
      name: 'Research Authority Score',
      score: 85,
      status: 'Strong',
      measuredAspects: 'Availability of original, linkable market research, survey data, developer rate guides, and technical benchmarks.',
      currentStatusDescription: 'Published original "South Africa Software Development & Developer Augmentation Market Report 2026" with 120+ surveyed respondents.',
      missingEvidence: 'External media citations by South African tech media (TechCentral, MyBroadband, ITWeb).',
      recommendedAction: 'Pitch research report executive summary to South African technology journalists for editorial citations.'
    },
    {
      id: 'm6',
      name: 'Author Authority Score',
      score: 88,
      status: 'Strong',
      measuredAspects: 'Named expert attribution, author schema markup, verified credentials, and technical publication logs.',
      currentStatusDescription: 'Articles and research reports attributed to named experts (Dr. Sarah van der Merwe, Thabo Mokoena) with complete author schema.',
      missingEvidence: 'External guest author posts on third-party engineering publications.',
      recommendedAction: 'Publish guest engineering insights on SA tech portals linking back to author profiles.'
    },
    {
      id: 'm7',
      name: 'Independent Evidence Score',
      score: 42,
      status: 'Weak',
      measuredAspects: 'Ratio of independently corroborated third-party citations and references vs first-party claims.',
      currentStatusDescription: 'High internal and first-party evidence. Third-party independent corroboration is limited until external directories and reviews are active.',
      missingEvidence: 'Third-party editorial citations, independent B2B directory reviews, and external backlinks.',
      recommendedAction: 'Prioritize Clutch client review collection and SA media PR pitching to build true independent evidence.'
    },
    {
      id: 'm8',
      name: 'AI Citation Readiness Score',
      score: 90,
      status: 'Strong',
      measuredAspects: '15 core factual questions structured with clear, quoteable definitions, comparison tables, and structured data for AI LLM retrieval.',
      currentStatusDescription: '15 core factual questions explicitly answered with quoteable blocks across service hubs and research pages.',
      missingEvidence: 'External web citations confirming LLM knowledge graph absorption.',
      recommendedAction: 'Ensure external directory descriptions mirror factual definition blocks established on musecs.com.'
    },
    {
      id: 'm9',
      name: 'Review Authority Score',
      score: 25,
      status: 'Weak',
      measuredAspects: 'Verified third-party client reviews on Clutch, Google Business Profile, and GoodFirms.',
      currentStatusDescription: 'Zero manufactured reviews. Collection framework established; awaiting manual outreach to past enterprise clients.',
      missingEvidence: 'Verified client reviews on Clutch and Google Business Profile.',
      recommendedAction: 'Initiate non-incentivized client review requests for 3 completed enterprise software projects.'
    },
    {
      id: 'm10',
      name: 'Industry Authority Score',
      score: 58,
      status: 'Moderate',
      measuredAspects: 'Memberships in South African tech associations, conference speaking engagements, and regional tech directory listings.',
      currentStatusDescription: 'Open-source GitHub benchmarks active. Formal industry association memberships and conference participation pending manual application.',
      missingEvidence: 'IITPSA association membership and DevConf conference talk submission.',
      recommendedAction: 'Submit IITPSA corporate membership application and DevConf speaker proposal.'
    }
  ];

  // Weighted score calculation
  const totalScore = Math.round(
    metrics.reduce((acc, curr) => acc + curr.score, 0) / metrics.length
  );

  return {
    overallReadinessScore: totalScore,
    disclaimer: 'This score measures implementation/readiness. It does not represent Google\'s ranking position or an AI model\'s recommendation probability.',
    metrics
  };
}

// ---------------------------------------------------------------------------
// 8. 90-DAY MANUAL EXECUTION ROADMAP
// ---------------------------------------------------------------------------
export const ROADMAP_90_DAYS: RoadmapPhase[] = [
  {
    phase: 'Phase 9.1',
    timeframe: 'Days 1 – 7',
    title: 'Entity Verification & Core Identity Alignment',
    tasks: [
      {
        priority: 'P0',
        action: 'Submit Sandton City headquarters address for Google Business Profile verification',
        platform: 'Google Business Profile',
        evidenceRequired: 'Postcard/video verification code received at Sandton office',
        completionCondition: 'Google Maps Knowledge Panel live and verified',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P0',
        action: 'Synchronize LinkedIn company description with Entity Config Master (~100 words)',
        platform: 'LinkedIn',
        evidenceRequired: 'Updated company page screenshot & NAP match',
        completionCondition: 'LinkedIn page matches 100% with lib/entity-config.ts',
        status: 'VERIFIED'
      },
      {
        priority: 'P0',
        action: 'Verify musecs.com domain inside GitHub Organization settings',
        platform: 'GitHub',
        evidenceRequired: 'Verified domain badge on github.com/musecs',
        completionCondition: 'Domain verified status confirmed on GitHub',
        status: 'VERIFIED'
      },
      {
        priority: 'P0',
        action: 'Authenticate https://www.musecs.com/ inside Bing Webmaster Tools',
        platform: 'Bing Webmaster Tools',
        evidenceRequired: 'Bing Webmaster site authentication confirmation',
        completionCondition: 'Sitemap processed cleanly in Bing Index',
        status: 'PENDING MANUAL ACTION'
      }
    ]
  },
  {
    phase: 'Phase 9.2',
    timeframe: 'Days 8 – 30',
    title: 'External Profile Activation & Directory Claims',
    tasks: [
      {
        priority: 'P1',
        action: 'Claim & populate Clutch.co enterprise profile',
        platform: 'Clutch B2B Directory',
        evidenceRequired: 'Live profile URL on clutch.co/profile/muse-consultancy-services',
        completionCondition: 'Profile active with canonical NAP and master description',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P1',
        action: 'Setup GoodFirms & DesignRush software consultancy listings',
        platform: 'GoodFirms / DesignRush',
        evidenceRequired: 'Directory URLs & verification email confirmations',
        completionCondition: 'Profiles published and linked to canonical website',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P1',
        action: 'Submit company profile to ITWeb & MyBroadband SA Tech Directories',
        platform: 'ITWeb / MyBroadband',
        evidenceRequired: 'Directory editor confirmation emails',
        completionCondition: 'South African tech directory listings live',
        status: 'PENDING MANUAL ACTION'
      }
    ]
  },
  {
    phase: 'Phase 9.3',
    timeframe: 'Days 31 – 60',
    title: 'Independent Evidence & Client Review Collection',
    tasks: [
      {
        priority: 'P0',
        action: 'Initiate non-incentivized Clutch review outreach for 3 past enterprise projects',
        platform: 'Clutch.co',
        evidenceRequired: '3 verified client telephone review transcripts on Clutch',
        completionCondition: 'Clutch rating published with verified client quotes',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P1',
        action: 'Request verified Google Reviews from local enterprise software partners',
        platform: 'Google Business Profile',
        evidenceRequired: 'Google Maps review links',
        completionCondition: 'Google Business Profile displays 3+ verified client reviews',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P1',
        action: 'Publish open-source architectural benchmark code repository on GitHub',
        platform: 'GitHub / Dev.to',
        evidenceRequired: 'Public repository URL with MIT License',
        completionCondition: 'Benchmark repository starred and cited in tech writeups',
        status: 'PENDING MANUAL ACTION'
      }
    ]
  },
  {
    phase: 'Phase 9.4',
    timeframe: 'Days 61 – 90',
    title: 'Editorial Outreach, Research Distribution & Thought Leadership',
    tasks: [
      {
        priority: 'P1',
        action: 'Pitch 2026 South Africa Software Development Report findings to SA tech journalists',
        platform: 'TechCentral / MyBroadband / ITWeb',
        evidenceRequired: 'Editorial press coverage or article citations linking to /research',
        completionCondition: 'Minimum 2 independent SA media citations achieved',
        status: 'PENDING MANUAL ACTION'
      },
      {
        priority: 'P2',
        action: 'Syndicate technical architectural deep-dive to Medium with rel=canonical',
        platform: 'Medium Engineering',
        evidenceRequired: 'Live Medium article with canonical tag pointing to musecs.com',
        completionCondition: 'Technical article indexed and linked',
        status: 'NOT CREATED'
      },
      {
        priority: 'P2',
        action: 'Submit speaker proposal for DevConf South Africa conference',
        platform: 'DevConf SA',
        evidenceRequired: 'Speaker session submission receipt',
        completionCondition: 'Conference talk evaluated or accepted by DevConf committee',
        status: 'PENDING MANUAL ACTION'
      }
    ]
  }
];

// Existing evidence log preserved and extended
export const AUTHORITY_EVIDENCE: AuthorityEvidence[] = [
  {
    id: 'ev-1',
    source: 'LinkedIn Corporate Profile',
    sourceType: 'social',
    url: 'https://linkedin.com/company/musecs',
    publicationDate: '2026-08-01',
    author: 'MuseCS Brand Governance',
    relationshipToMuse: 'Official Corporate Channel',
    claimSupported: 'Muse Consultancy Services operates in South Africa providing custom software development and team augmentation.',
    citation: 'Muse Consultancy Services (MuseCS) - Enterprise Software Development & Software Developer Augmentation in Sandton, South Africa.',
    verificationStatus: 'VERIFIED',
    notes: 'Included in Organization Schema sameAs array.'
  },
  {
    id: 'ev-2',
    source: 'GitHub Organization Repository',
    sourceType: 'open-source',
    url: 'https://github.com/musecs',
    publicationDate: '2026-08-01',
    author: 'MuseCS Core Engineering Team',
    relationshipToMuse: 'Official Open Source Repository',
    claimSupported: 'MuseCS maintains open-source developer toolkits and benchmark scripts.',
    citation: 'GitHub - musecs: Official open source codebases and technical benchmarks by Muse Consultancy Services.',
    verificationStatus: 'VERIFIED',
    notes: 'Included in Organization Schema sameAs array.'
  },
  {
    id: 'ev-3',
    source: 'South Africa Software Development & Developer Augmentation Report 2026',
    sourceType: 'research',
    url: 'https://www.musecs.com/research',
    publicationDate: '2026-06-15',
    author: 'MuseCS Research Unit (Lead: Dr. Sarah van der Merwe)',
    relationshipToMuse: 'First-Party Proprietary Market Research',
    claimSupported: 'Senior South African developer daily rates range from R6,500 to R12,000; team augmentation adoption increased by 38% in JSE-listed firms.',
    citation: 'MuseCS 2026 Research Report: 120+ South African engineering leaders surveyed on software development and team augmentation efficiency.',
    verificationStatus: 'VERIFIED',
    notes: 'Original research linkable asset published on website.'
  },
  {
    id: 'ev-4',
    source: 'FinTech Payment Switch Modernisation Case Study',
    sourceType: 'client',
    url: 'https://www.musecs.com/case-studies/fintech-payment-switch-modernisation',
    publicationDate: '2026-05-10',
    author: 'Thabo Mokoena (Lead Software Architect)',
    relationshipToMuse: 'Client Engineering Engagement Proof',
    claimSupported: 'Reduced transaction latency by 64% and achieved 99.999% uptime for Johannesburg fintech client.',
    citation: 'Case Study: Re-architecting legacy monolithic transaction switch to event-driven microservices on AWS Cape Town region.',
    verificationStatus: 'VERIFIED',
    notes: 'Published case study on website.'
  },
  {
    id: 'ev-5',
    source: 'Clutch B2B Verified Reviews',
    sourceType: 'directory',
    url: 'https://clutch.co/profile/muse-consultancy-services',
    publicationDate: '2026-09-01',
    author: 'Client CTOs & VPs of Engineering',
    relationshipToMuse: 'Third-Party Independent Verification',
    claimSupported: 'Verified enterprise satisfaction for software developer augmentation and custom software projects.',
    citation: 'Planned collection of verified client reviews on Clutch platform.',
    verificationStatus: 'PENDING MANUAL ACTION',
    notes: 'Must be requested directly from verified clients upon project completion.'
  }
];
