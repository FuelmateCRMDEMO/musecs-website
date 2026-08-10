import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, Send } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Software Outsourcing vs Team Augmentation: Delivery & Control Comparison | MuseCS',
  description: 'Evaluating fixed-scope project outsourcing versus embedded developer team augmentation for enterprise engineering managers in South Africa.',
  alternates: {
    canonical: 'https://www.musecs.com/insights/decision-guides/outsourcing-vs-team-augmentation/'
  }
};

export default function OutsourcingVsAugmentationPage() {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://www.musecs.com/insights/decision-guides/outsourcing-vs-team-augmentation/#article',
    'headline': 'Software Outsourcing vs Team Augmentation: Delivery & Control Comparison',
    'description': 'Comparative analysis between project-based fixed-scope outsourcing and developer team augmentation.',
    'url': 'https://www.musecs.com/insights/decision-guides/outsourcing-vs-team-augmentation/',
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
            { name: 'Outsourcing vs Augmentation', url: '/insights/decision-guides/outsourcing-vs-team-augmentation' }
          ]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Decision Framework // Delivery & Governance
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Software Outsourcing vs Team Augmentation: Delivery & Control Comparison
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            When external software capability is required, technology leaders must decide whether to outsource an entire project to an external agency or augment their existing engineering squads with dedicated developers.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Summary */}
          <div className="p-8 bg-[#080808] border border-gray-800 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Compass size={16} /> Delivery Model Comparison
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              <strong>Fixed-Scope Outsourcing</strong> creates a vendor-client divide where every scope evolution triggers costly change requests. In contrast, <strong>Team Augmentation</strong> embeds developers into your internal Scrum/Agile ceremonies, providing full architectural control and code review transparency.
            </p>
          </div>

          {/* Comparison Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              1. Operational Dimension Breakdown
            </h2>

            <div className="overflow-x-auto border border-gray-800">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-[#080808] font-mono text-xs text-accent uppercase tracking-wider border-b border-gray-800">
                  <tr>
                    <th className="p-4">Dimension</th>
                    <th className="p-4">Project Outsourcing</th>
                    <th className="p-4">MuseCS Team Augmentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/80 font-light">
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Backlog Control</td>
                    <td className="p-4 text-red-400">Locked to Fixed Scope SRS</td>
                    <td className="p-4 text-green-400 font-bold">100% Client Backlog Management</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Code Quality Visibility</td>
                    <td className="p-4 text-red-400">Black Box (Revealed at Milestone)</td>
                    <td className="p-4 text-green-400 font-bold">Direct PR Review on Client GitHub/GitLab</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Culture & Integration</td>
                    <td className="p-4 text-yellow-400">Isolated Vendor Team</td>
                    <td className="p-4 text-green-400 font-bold">Embedded in Daily Standups & Slack</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Scope Changes</td>
                    <td className="p-4 text-red-400">Formal Change Orders ($$$)</td>
                    <td className="p-4 text-green-400 font-bold">Fluid Sprint Reprioritization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Request Team Augmentation Proposal
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Speak with a MuseCS engineering director to construct an augmented squad matched to your tech stack.
            </p>

            <Link 
              href="/contact"
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              Get Custom Proposal <Send size={14} />
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
