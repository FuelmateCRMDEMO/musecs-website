import { AUTHORITY_EVIDENCE, AuthorityEvidence } from './authority-data';

export interface UnverifiedClaimRule {
  id: string;
  pattern: RegExp;
  claimCategory: string;
  riskLevel: 'Critical' | 'Warning' | 'Notice';
  description: string;
  allowedCondition: string;
  factualAlternative: string;
}

export interface ClaimScanResult {
  ruleId: string;
  matchedText: string;
  location: string;
  claimCategory: string;
  riskLevel: 'Critical' | 'Warning' | 'Notice';
  hasVerifiedEvidence: boolean;
  supportingEvidenceId?: string;
  recommendation: string;
  factualAlternative: string;
}

export const UNSUPPORTED_CLAIM_RULES: UnverifiedClaimRule[] = [
  {
    id: 'rule-superlative-best',
    pattern: /\b(the best|#1|number one|world-class|unrivaled|unmatched|most experienced)\b/i,
    claimCategory: 'Unsupported Superlative',
    riskLevel: 'Critical',
    description: 'Prohibits unverified subjective claims regarding ranking, ranking numbers, or supremacy.',
    allowedCondition: 'Only allowed if citing an independent, third-party audited award or industry report.',
    factualAlternative: 'South African software engineering consultancy with proven engineering benchmarks.'
  },
  {
    id: 'rule-leading-premier',
    pattern: /\b(South Africa's leading|premier|foremost|industry leader|top-tier|largest|top software development company)\b/i,
    claimCategory: 'Unverified Market Supremacy',
    riskLevel: 'Critical',
    description: 'Prohibits market leadership or size claims without verified third-party market share data.',
    allowedCondition: 'Allowed only with verified market audit citations.',
    factualAlternative: 'Sandton-headquartered enterprise software development & developer augmentation consultancy.'
  },
  {
    id: 'rule-award-winning',
    pattern: /\b(award-winning|award winning|celebrated agency|top rated)\b/i,
    claimCategory: 'Unverified Achievement',
    riskLevel: 'Critical',
    description: 'Prohibits claims of being award-winning without naming the specific award and date.',
    allowedCondition: 'Allowed only when referencing verified named award in evidence log.',
    factualAlternative: 'Engineered with verified architectural benchmarks.'
  },
  {
    id: 'rule-partner-certification',
    pattern: /\b(AWS partner|Microsoft partner|Google partner|ISO certified|ISO 27001|PCI compliant|POPIA certified)\b/i,
    claimCategory: 'Unverified Partner or Compliance Certification',
    riskLevel: 'Critical',
    description: 'Prohibits claiming official vendor partnership or formal ISO/PCI/POPIA certification without verifiable certificates.',
    allowedCondition: 'Allowed only when official certificate or partner portal link is verified in evidence log.',
    factualAlternative: 'Architected following AWS/Azure cloud frameworks and POPIA data privacy standards.'
  },
  {
    id: 'rule-social-proof-trusted',
    pattern: /\b(trusted by|used by|chosen by millions|over \d+ clients|hundreds of clients)\b/i,
    claimCategory: 'Unverified Client Claim',
    riskLevel: 'Warning',
    description: 'Prohibits vague social proof metrics without verifiable published case studies or client consent.',
    allowedCondition: 'Allowed only when referring to published, verified client case studies.',
    factualAlternative: 'Deployed across JSE-listed enterprises and South African technology firms.'
  },
  {
    id: 'rule-unverified-percentage',
    pattern: /\b(\d{2,3}% guarantee|\d{2,3}% success rate|100% success)\b/i,
    claimCategory: 'Unverified Percentage Guarantee',
    riskLevel: 'Warning',
    description: 'Prohibits arbitrary percentage performance guarantees unless backed by published benchmark reports.',
    allowedCondition: 'Allowed only when linking directly to methodology in published case study or research report.',
    factualAlternative: 'Proven performance benchmarks published in 2026 SA Market Report.'
  }
];

export function scanContentForUnsupportedClaims(
  contentSamples: { location: string; text: string }[],
  evidenceLog: AuthorityEvidence[] = AUTHORITY_EVIDENCE
): ClaimScanResult[] {
  const results: ClaimScanResult[] = [];

  for (const sample of contentSamples) {
    for (const rule of UNSUPPORTED_CLAIM_RULES) {
      const match = sample.text.match(rule.pattern);
      if (match) {
        // Check if there is verified evidence supporting this specific claim
        const matchingEvidence = evidenceLog.find(
          ev => ev.verificationStatus === 'VERIFIED' && ev.claimSupported.toLowerCase().includes(match[0].toLowerCase())
        );

        results.push({
          ruleId: rule.id,
          matchedText: match[0],
          location: sample.location,
          claimCategory: rule.claimCategory,
          riskLevel: rule.riskLevel,
          hasVerifiedEvidence: !!matchingEvidence,
          supportingEvidenceId: matchingEvidence?.id,
          recommendation: matchingEvidence
            ? `Supported by verified evidence (${matchingEvidence.source}). Ensure citation link is present.`
            : `Remove or rephrase "${match[0]}". Replace with factual alternative.`,
          factualAlternative: rule.factualAlternative
        });
      }
    }
  }

  return results;
}

export function runAuthoritySafetyAudit(): {
  isCompliant: boolean;
  totalScannedLocations: number;
  unverifiedClaimsCount: number;
  scanResults: ClaimScanResult[];
} {
  // Key canonical content blocks across all core routes on the site
  const canonicalContentSamples = [
    { location: 'lib/entity-config.ts (Master Descriptions)', text: 'Muse Consultancy Services (MuseCS) is a South African software engineering consultancy delivering end-to-end custom software development, software architecture, and developer team augmentation.' },
    { location: 'app/about/page.tsx (Header)', text: 'Muse Consultancy Services (MuseCS) is an enterprise software engineering consultancy headquartered in Sandton, Johannesburg.' },
    { location: 'app/software-development/page.tsx', text: 'Software Development Authority Pillar. Enterprise software engineering, custom platforms, and cloud microservices.' },
    { location: 'app/software-development-team-augmentation/page.tsx', text: 'Software Development Team Augmentation. Deploy senior South African developers into your team within 5 business days.' },
    { location: 'app/research/page.tsx', text: 'South Africa Software Development & Developer Augmentation Market Report 2026. First-party survey data from 120+ engineering leaders.' },
    { location: 'app/contact/page.tsx', text: 'Contact Muse Consultancy Services. Headquarters in Sandton City, West Tower, 5th Floor, Sandton, Johannesburg.' },
    { location: 'app/services/page.tsx', text: 'MuseCS Software Engineering Services. Custom Software Engineering and Software Developer Team Augmentation.' }
  ];

  const results = scanContentForUnsupportedClaims(canonicalContentSamples);
  const unverified = results.filter(r => !r.hasVerifiedEvidence && r.riskLevel === 'Critical');

  return {
    isCompliant: unverified.length === 0,
    totalScannedLocations: canonicalContentSamples.length,
    unverifiedClaimsCount: unverified.length,
    scanResults: results
  };
}
