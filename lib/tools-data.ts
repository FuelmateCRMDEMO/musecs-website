export interface ToolMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  purpose: string;
}

export const TOOLS_LIST: ToolMeta[] = [
  {
    slug: 'software-development-cost-calculator',
    title: 'Enterprise Software Development Cost Calculator',
    description: 'Calculate realistic budget estimates, timelines, and team size requirements for custom software development projects based on South African market benchmarks.',
    category: 'Budgeting & Estimation',
    purpose: 'Helps CTOs and IT Directors estimate total cost of ownership (TCO) for custom software applications.'
  },
  {
    slug: 'team-augmentation-cost-calculator',
    title: 'Software Development Team Augmentation Cost Calculator',
    description: 'Compare the financial costs, onboarding timelines, and operational risks of Permanent Hiring vs Direct Contracting vs Team Augmentation.',
    category: 'Talent & Capacity Planning',
    purpose: 'Provides transparent cost breakdowns for expanding software development engineering capacity.'
  },
  {
    slug: 'build-vs-augment',
    title: 'In-House Build vs Team Augmentation Decision Matrix',
    description: 'An interactive architectural assessment tool evaluating project scope, deadline pressure, and stack complexity to recommend the optimal delivery model.',
    category: 'Strategic Decision Frameworks',
    purpose: 'Helps engineering leaders determine whether to hire in-house, contract, or deploy dedicated augmented squads.'
  }
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS_LIST.find(t => t.slug === slug);
}
