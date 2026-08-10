import { MetadataRoute } from 'next';
import { CASE_STUDIES } from '@/lib/case-studies-data';
import { INDUSTRIES } from '@/lib/industries-data';
import { RESEARCH_REPORTS } from '@/lib/research-data';
import { TOOLS_LIST } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.musecs.com';

  const staticRoutes = [
    '',
    '/software-development',
    '/software-development/custom-software-development',
    '/software-development/software-architecture',
    '/software-development/enterprise-software-development',
    '/software-development/ai-software-development',
    '/software-development/cloud-software-development',
    '/software-development/legacy-modernisation',
    '/software-development/consulting',
    '/software-development/company',
    '/software-development/software-engineering',
    '/software-development-team-augmentation',
    '/software-development-team-augmentation/software-developer-augmentation',
    '/software-development-team-augmentation/dedicated-development-teams',
    '/software-development-team-augmentation/technical-team-augmentation',
    '/software-development-team-augmentation/remote-development-teams',
    '/software-development-team-augmentation/team-augmentation-vs-outsourcing',
    '/software-development-team-augmentation/team-augmentation-vs-permanent-hiring',
    '/software-development-team-augmentation/team-augmentation-cost',
    '/case-studies',
    '/industries',
    '/insights',
    '/insights/decision-guides',
    '/insights/decision-guides/build-vs-buy-vs-augment',
    '/insights/decision-guides/hire-vs-augment-software-developers',
    '/insights/decision-guides/outsourcing-vs-team-augmentation',
    '/insights/decision-guides/how-to-scale-a-software-development-team',
    '/research',
    '/tools',
    '/about',
    '/about/people',
    '/about/people/sudhir-mishra',
    '/careers',
    '/contact',
  ];

  const caseStudyRoutes = CASE_STUDIES.map((cs) => `/case-studies/${cs.slug}`);
  const industryRoutes = INDUSTRIES.map((ind) => `/industries/${ind.slug}`);
  const researchRoutes = RESEARCH_REPORTS.map((rep) => `/research/${rep.slug}`);
  const toolRoutes = TOOLS_LIST.map((tool) => `/tools/${tool.slug}`);

  const allPaths = [
    ...staticRoutes,
    ...caseStudyRoutes,
    ...industryRoutes,
    ...researchRoutes,
    ...toolRoutes,
  ];

  return allPaths.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1.0 : path.includes('/software-development') ? 0.9 : 0.8,
  }));
}
