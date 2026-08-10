import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, Send } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Permanent Hiring vs Team Augmentation: Total Cost & Risk Analysis | MuseCS',
  description: 'An objective financial and operational analysis comparing direct corporate developer recruitment against structured software team augmentation in South Africa.',
  alternates: {
    canonical: 'https://www.musecs.com/insights/decision-guides/hire-vs-augment-software-developers/'
  }
};

export default function HireVsAugmentPage() {
  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://www.musecs.com/insights/decision-guides/hire-vs-augment-software-developers/#article',
    'headline': 'Permanent Hiring vs Team Augmentation: Total Cost & Risk Analysis',
    'description': 'Objective financial and risk model comparing direct corporate developer hiring against software team augmentation.',
    'url': 'https://www.musecs.com/insights/decision-guides/hire-vs-augment-software-developers/',
    'author': {
      '@type': 'Person',
      'name': 'Clinton Powell',
      'jobTitle': 'Founder & Managing Director',
      'url': 'https://www.musecs.com/about/people/clinton-powell/'
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
            { name: 'Hire vs Augment Developers', url: '/insights/decision-guides/hire-vs-augment-software-developers' }
          ]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Decision Framework // Talent Acquisition & Cost
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            Permanent Hiring vs Team Augmentation: Total Cost & Risk Analysis
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            When expanding enterprise engineering squads, HR departments often view permanent salaries in isolation—failing to calculate hidden recruiting fees, onboarding lag, statutory overhead, and severance liabilities.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Summary */}
          <div className="p-8 bg-[#080808] border border-gray-800 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Compass size={16} /> Total Cost of Ownership (TCO) Comparison
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              While a Senior Developer permanent base salary of R1.2m per annum appears lower on paper than a contractor rate, factoring in a 15-20% placement fee (R180k-R240k), 60+ days vacancy lag, 3 months onboarding runway, workstation hardware, medical aid/pension, and notice period liabilities reveals that <strong>Team Augmentation is financially superior for engagements under 24 months</strong>.
            </p>
          </div>

          {/* Cost Breakdown Table */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              1. Financial Component Breakdown (Senior Full-Stack Engineer)
            </h2>

            <div className="overflow-x-auto border border-gray-800">
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-[#080808] font-mono text-xs text-accent uppercase tracking-wider border-b border-gray-800">
                  <tr>
                    <th className="p-4">Cost Element</th>
                    <th className="p-4">Direct Permanent Hire</th>
                    <th className="p-4">MuseCS Team Augmentation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/80 font-light">
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Recruitment Agency Fee</td>
                    <td className="p-4 text-red-400">15% - 20% Base Salary (Upfront)</td>
                    <td className="p-4 text-green-400 font-bold">R0 (Zero Placement Fee)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Time-to-Productivity</td>
                    <td className="p-4 text-red-400">60-90 Days (Notice Period + Onboarding)</td>
                    <td className="p-4 text-green-400 font-bold">3 - 5 Business Days</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Equipment & Licenses</td>
                    <td className="p-4 text-yellow-400">Laptop + SaaS (R45k+ Upfront)</td>
                    <td className="p-4 text-green-400 font-bold">Included by MuseCS</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Statutory Benefits & Taxes</td>
                    <td className="p-4 text-yellow-400">PAYE, UIF, COIDA, Pension, Healthcare</td>
                    <td className="p-4 text-green-400 font-bold">Managed by MuseCS</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-white text-xs">Flexibility & Scaling</td>
                    <td className="p-4 text-red-400">High Severance / Labour Law Risk</td>
                    <td className="p-4 text-green-400 font-bold">Flexible Scale Up / Down</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Strategic Guidance */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              2. Core Takeaways for Engineering Managers
            </h2>
            <ul className="space-y-4 text-gray-300 font-light text-base">
              <li className="p-4 bg-[#080808] border border-gray-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Use Permanent Hiring for Core Leadership:</strong> CTOs, Architects, and Engineering Managers managing long-term company IP should be permanent hires.</span>
              </li>
              <li className="p-4 bg-[#080808] border border-gray-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Use Team Augmentation for High-Velocity Execution:</strong> For roadmap acceleration, platform migrations, or new web/mobile portal launches, team augmentation eliminates hiring bottlenecks.</span>
              </li>
            </ul>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Augmentation Cost Calculator
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Calculate exact monthly rate comparisons between permanent hires and augmented developers for your exact stack.
            </p>

            <Link 
              href="/tools/team-augmentation-calculator"
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              Launch Rate Calculator <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
