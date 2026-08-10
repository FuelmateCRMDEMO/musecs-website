import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, Send } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'How to Scale an Enterprise Software Engineering Team in South Africa | MuseCS',
  description: 'A practical playbook for VPs of Engineering and CTOs navigating senior developer shortages, onboarding bottlenecks, and quality assurance at scale.',
  alternates: {
    canonical: 'https://www.musecs.com/insights/decision-guides/how-to-scale-a-software-development-team/'
  }
};

export default function HowToScaleSoftwareTeamPage() {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://www.musecs.com/insights/decision-guides/how-to-scale-a-software-development-team/#article',
    'headline': 'How to Scale an Enterprise Software Engineering Team in South Africa',
    'description': 'Practical engineering management playbook for scaling software teams without sacrificing code quality or velocity.',
    'url': 'https://www.musecs.com/insights/decision-guides/how-to-scale-a-software-development-team/',
    'author': {
      '@type': 'Person',
      'name': 'Sudhir Mishra',
      'jobTitle': 'Founder & Managing Director',
      'url': 'https://www.musecs.com/about/people/sudhir-mishra/'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Muse Consultancy Services',
      'url': 'https://www.musecs.com'
    },
    'inLanguage': 'en-ZA'
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <SchemaScript schema={guideSchema} />
      <HeaderNav />

      {/* Hero Header */}
      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Insights', url: '/insights' },
            { name: 'Decision Guides', url: '/insights/decision-guides' },
            { name: 'Scaling Software Teams', url: '/insights/decision-guides/how-to-scale-a-software-development-team' }
          ]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Engineering Leadership Playbook // Team Scaling
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            How to Scale an Enterprise Software Engineering Team in South Africa
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Scaling a software engineering department from 10 to 50+ developers in Sandton or Cape Town is rarely a pure hiring challenge—it is an architectural, cultural, and process governance challenge.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Summary */}
          <div className="p-8 bg-[#080808] border border-gray-800 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Compass size={16} /> Scaling Core Principles
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              Adding headcount without automated CI/CD pipelines and modular domain boundaries (DDD) leads to <strong>Brooks&apos; Law degradation</strong>: adding developers to a chaotic codebase slows down overall release velocity.
            </p>
          </div>

          {/* 4 Pillars of Scaling */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              1. The 4 Pillars of High-Velocity Engineering Scaling
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-[#080808] border border-gray-800 space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> Pillar 1: Automated Developer Environment Onboarding
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Utilize Dockerized dev containers and standardized setup scripts so new engineers commit production-ready code in 48 hours rather than 2 weeks.
                </p>
              </div>

              <div className="p-6 bg-[#080808] border border-gray-800 space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> Pillar 2: Microservice & Domain Isolation
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Break monolithic merge bottlenecks by assigning autonomous squads to decoupled domain boundaries with clear API contracts.
                </p>
              </div>

              <div className="p-6 bg-[#080808] border border-gray-800 space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> Pillar 3: Automated Quality & PR Guardrails
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Enforce strict SonarQube code coverage gates, automated TypeScript linting, and mandatory two-peer PR approvals before staging deployment.
                </p>
              </div>

              <div className="p-6 bg-[#080808] border border-gray-800 space-y-2">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" /> Pillar 4: Hybrid Team Augmentation
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Combine core internal tech leads with augmented senior squads from MuseCS to absorb roadmap spikes without creating long-term payroll bloat.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Engineering Scaling Audit
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Request a technical delivery health check for your engineering organization from MuseCS directors.
            </p>

            <Link 
              href="/contact"
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              Request Engineering Audit <Send size={14} />
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
