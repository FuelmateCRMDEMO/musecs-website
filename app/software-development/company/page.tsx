import React from 'react';
import { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Software Development Company Overview | MuseCS South Africa',
  description: 'Muse Consultancy Services is a premier South African software development company providing elite software engineering capability and dedicated dev teams.',
  alternates: {
    canonical: 'https://www.musecs.com/software-development/company/'
  }
};

export default function SoftwareCompanyOverviewPage() {
  return (
    <ServicePageLayout
      title="Software Development Company & Delivery Methodology"
      subtitle="Discover How Muse Consultancy Services Combines Technical Craft, Agile Discipline, and Senior Talent to Ship Exceptional Software."
      canonicalUrl="/software-development/company/"
      breadcrumbs={[
        { name: 'Software Development', url: '/software-development' },
        { name: 'Company & Methodology', url: '/software-development/company' }
      ]}
      overview={[
        'Muse Consultancy Services (MuseCS) is a South African software engineering consultancy built on a simple conviction: software engineering excellence is achieved through senior technical talent, clear architectural principles, and zero administrative bloat.',
        'We operate as an extension of our clients\' engineering teams, taking full ownership of complex software modules and delivering working software in rapid, iterative two-week sprints.',
        'With deep domain experience in South Africa\'s financial, telecommunications, healthcare, and retail sectors, MuseCS combines global software engineering standards with local market understanding.'
      ]}
      capabilities={[
        { title: 'Senior Engineering Focus', description: 'Over 85% of our engineering staff hold senior, lead, or principal software architect credentials.' },
        { title: 'Agile & TDD Standards', description: 'Test-driven development, automated code review, and continuous integration embedded in every squad.' },
        { title: 'Transparent Governance', description: 'Direct access to developer commits, Jira board progress, and bi-weekly working demo releases.' },
        { title: 'Flexible Delivery Models', description: 'Turnkey project delivery or embedded software development team augmentation.' }
      ]}
      processSteps={[
        { step: '01', title: 'Alignment', description: 'Setting engineering standards, team pod structures, and communication channels.' },
        { step: '02', title: 'Sprint 0 Setup', description: 'Configuring repos, CI/CD pipelines, staging environments, and backlog stories.' },
        { step: '03', title: 'Sprint Delivery', description: 'Bi-weekly production-grade code commits with automated test verification.' },
        { step: '04', title: 'Review & Refine', description: 'Continuous retrospective feedback and velocity optimization.' }
      ]}
      techStack={['TypeScript', 'Java', 'Python', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'Kubernetes']}
      faqs={[
        { question: 'What sets MuseCS apart from traditional IT recruiters or outsourcing agencies?', answer: 'Unlike recruitment agencies or body shops, MuseCS is an engineering consultancy led by practicing software architects who enforce rigorous code quality, automated testing, and technical governance across every developer we deploy.' }
      ]}
      relatedPages={[
        { title: 'Team Augmentation Hub', url: '/software-development-team-augmentation', description: 'Scale your developer headcount with senior South African engineers.' },
        { title: 'Custom Software Development', url: '/software-development/custom-software-development', description: 'Bespoke web and cloud platforms.' }
      ]}
    />
  );
}
