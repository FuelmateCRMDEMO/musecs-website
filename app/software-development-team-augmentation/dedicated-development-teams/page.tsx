import React from 'react';
import { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Dedicated Development Teams South Africa | MuseCS',
  description: 'Deploy dedicated software development teams in South Africa. Fully autonomous, senior engineering squads tailored to your enterprise product roadmap.',
  alternates: {
    canonical: 'https://www.musecs.com/software-development-team-augmentation/dedicated-development-teams/'
  }
};

export default function DedicatedDevelopmentTeamsPage() {
  return (
    <ServicePageLayout
      title="Dedicated Software Development Teams"
      subtitle="Autonomous, Cross-Functional Engineering Squads Equipped with Tech Leads, Full-Stack Developers, and QA Engineers."
      canonicalUrl="/software-development-team-augmentation/dedicated-development-teams/"
      category="Software Development Team Augmentation"
      breadcrumbs={[
        { name: 'Team Augmentation', url: '/software-development-team-augmentation' },
        { name: 'Dedicated Development Teams', url: '/software-development-team-augmentation/dedicated-development-teams' }
      ]}
      overview={[
        'Building a new enterprise software platform or executing a major system refactoring requires a complete, cohesive team—not just piecemeal contractor hiring. MuseCS Dedicated Development Teams supply autonomous engineering pods tailored to your exact product requirements.',
        'Each dedicated squad includes a Tech Lead / Principal Architect, Senior Backend Developers, Frontend Engineers, and QA Leads. The squad operates with complete alignment to your strategic roadmap, taking full ownership of technical deliverables.',
        'This model combines the predictability and cultural integration of an in-house engineering team with the rapid scaling and operational speed of an elite consultancy.'
      ]}
      capabilities={[
        { title: 'Cross-Functional Squad Structure', description: 'Tech Lead, Senior Engineers, UI/UX Designer, and QA Automation Lead.' },
        { title: 'Turnkey Product Delivery', description: 'Full ownership of sub-system development, from technical discovery to production release.' },
        { title: 'Agile Delivery Management', description: 'Sprint planning, backlog refinement, velocity tracking, and bi-weekly demo releases.' },
        { title: 'Scalable Squad Size', description: 'Easily expand from a 4-person pod to a 20-person engineering department.' }
      ]}
      processSteps={[
        { step: '01', title: 'Pod Blueprinting', description: 'Defining team composition, technical roles, and delivery governance.' },
        { step: '02', title: 'Squad Assembly', description: 'Selecting complementary senior engineers with domain expertise.' },
        { step: '03', title: 'Sprint Zero Alignment', description: 'Setting up architecture contracts, CI/CD pipelines, and agile ceremonies.' },
        { step: '04', title: 'Autonomous Execution', description: 'Continuous bi-weekly sprint delivery with transparent reporting.' }
      ]}
      techStack={['Java', 'TypeScript', 'Next.js', 'React', 'Python', 'AWS', 'Kubernetes', 'PostgreSQL']}
      faqs={[
        { question: 'Who manages the day-to-day work of the dedicated team?', answer: 'You can choose to manage the team directly via your Product Owner / CTO, or leverage a MuseCS Tech Lead to manage sprint velocity and technical delivery on your behalf.' }
      ]}
      relatedPages={[
        { title: 'Technical Team Augmentation', url: '/software-development-team-augmentation/technical-team-augmentation', description: 'Augment specialized engineering skills.' },
        { title: 'Software Developer Augmentation', url: '/software-development-team-augmentation/software-developer-augmentation', description: 'Individual developer placements.' }
      ]}
    />
  );
}
