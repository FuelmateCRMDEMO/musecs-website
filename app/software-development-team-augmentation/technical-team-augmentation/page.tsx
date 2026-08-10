import React from 'react';
import { Metadata } from 'next';
import { ServicePageLayout } from '@/components/service-page-layout';

export const metadata: Metadata = {
  title: 'Technical Team Augmentation Services | MuseCS',
  description: 'Technical team augmentation for specialized software architecture, cloud engineering, AI integration, and DevOps requirements in South Africa.',
  alternates: {
    canonical: 'https://www.musecs.com/software-development-team-augmentation/technical-team-augmentation/'
  }
};

export default function TechnicalTeamAugmentationPage() {
  return (
    <ServicePageLayout
      title="Technical Team Augmentation Services"
      subtitle="Inject Specialist Cloud Architects, DevOps Engineers, and AI Systems Specialists into Complex Enterprise Roadmaps."
      canonicalUrl="/software-development-team-augmentation/technical-team-augmentation/"
      category="Software Development Team Augmentation"
      breadcrumbs={[
        { name: 'Team Augmentation', url: '/software-development-team-augmentation' },
        { name: 'Technical Team Augmentation', url: '/software-development-team-augmentation/technical-team-augmentation' }
      ]}
      overview={[
        'Complex enterprise initiatives—such as cloud migrations, Kafka event streaming setups, or AI vector pipeline integrations—often require specialized niche skills that in-house development teams do not possess full-time.',
        'MuseCS Technical Team Augmentation connects your organization with senior domain specialists who join your project for specific critical phases to architect, implement, and knowledge-transfer complex technical sub-systems.',
        'Our technical specialists bring deep hands-on expertise in cloud security, microservices refactoring, high-throughput database tuning, and automated deployment pipelines.'
      ]}
      capabilities={[
        { title: 'Cloud Infrastructure Specialists', description: 'Terraform, Kubernetes, and multi-region cloud security architects.' },
        { title: 'Distributed Systems & Messaging', description: 'Apache Kafka, RabbitMQ, and gRPC event streaming experts.' },
        { title: 'AI & Data Pipeline Engineers', description: 'RAG search, LLM fine-tuning, and PySpark distributed data experts.' },
        { title: 'DevOps & Security Engineers', description: 'CI/CD pipeline hardening, OWASP compliance, and APM telemetry setups.' }
      ]}
      processSteps={[
        { step: '01', title: 'Gap Identification', description: 'Pinpointing specific technical roadblocks in your architecture or release pipeline.' },
        { step: '02', title: 'Specialist Deployment', description: 'Deploying pre-vetted domain specialists within 72 hours.' },
        { step: '03', title: 'Implementation & Refactoring', description: 'Architecting and building the required technical sub-system.' },
        { step: '04', title: 'Knowledge Transfer', description: 'Documenting system design and training your permanent team.' }
      ]}
      techStack={['Kubernetes', 'Terraform', 'Apache Kafka', 'PostgreSQL', 'AWS', 'Azure', 'Python', 'Go']}
      faqs={[
        { question: 'Can technical specialists train our internal team during the engagement?', answer: 'Yes. Knowledge transfer and internal team enablement are core pillars of our technical augmentation delivery.' }
      ]}
      relatedPages={[
        { title: 'Software Developer Augmentation', url: '/software-development-team-augmentation/software-developer-augmentation', description: 'Full-stack and backend developer placements.' },
        { title: 'Software Architecture', url: '/software-development/software-architecture', description: 'Microservices and system design consultancy.' }
      ]}
    />
  );
}
