import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { RESEARCH_REPORTS } from '@/lib/research-data';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Software Engineering Research & Market Intelligence | MuseCS',
  description: 'Authoritative market reports, salary benchmarks, team augmentation indices, and architectural frameworks published by Muse Consultancy Services.',
  alternates: {
    canonical: 'https://www.musecs.com/research/'
  }
};

export default function ResearchPage() {
  const researchHubSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.musecs.com/research/#page',
    'name': 'Software Engineering Research & Market Intelligence',
    'description': 'Original market intelligence, developer rate benchmarks, and team augmentation indices for South African software engineering leaders.',
    'url': 'https://www.musecs.com/research/',
    'publisher': {
      '@type': 'Organization',
      'name': 'Muse Consultancy Services',
      'url': 'https://www.musecs.com'
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <SchemaScript schema={researchHubSchema} />
      <HeaderNav />

      {/* Hero Header */}
      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ name: 'Research & Intelligence', url: '/research' }]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Original Market Intelligence & Engineering Frameworks
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Software Engineering Research & Benchmarks
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Independent market intelligence, developer salary and contracting rate benchmarks, team augmentation adoption indices, and decision frameworks for enterprise technology executives in South Africa.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Research Methodology & Ethics Statement */}
        <div className="p-8 bg-[#080808] border border-gray-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <ShieldCheck size={22} className="text-accent" />
            <h2 className="text-xl font-light text-white">Research Methodology & Transparency Statement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300 font-light">
            <div className="space-y-2">
              <h3 className="font-mono text-xs text-accent font-bold uppercase tracking-widest">Empirical Data Sources</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Data compiled from verified enterprise IT procurement audits, contractor rate cards, and direct squad deployments in Sandton, Cape Town, and Durban.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs text-accent font-bold uppercase tracking-widest">No Fabricated Metrics</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                MuseCS strictly distinguishes between empirical market benchmarks, structural framework models, and ongoing data collection frameworks.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-xs text-accent font-bold uppercase tracking-widest">Continuous Updates</h3>
              <p className="text-xs leading-relaxed text-gray-400">
                Market benchmarks and rate indices are reviewed and updated annually to reflect macroeconomic shifts in South African software engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Research Directory Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h2 className="text-2xl font-light text-white flex items-center gap-2">
              <BookOpen size={20} className="text-accent" /> Research Reports & Market Indices
            </h2>
            <span className="text-xs font-mono text-gray-500">Showing {RESEARCH_REPORTS.length} Published Intelligence Assets</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_REPORTS.map((rep) => (
              <div 
                key={rep.slug} 
                className="bg-[#080808] border border-gray-800 p-8 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-accent uppercase tracking-widest font-bold">{rep.category}</span>
                    <span className="px-2 py-0.5 bg-gray-900 border border-gray-800 text-gray-400">
                      Status: {rep.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                    {rep.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {rep.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Primary Finding / Insight:</span>
                    <p className="text-xs text-gray-300 font-mono bg-accent/5 p-3 border border-accent/20">
                      {rep.key_findings[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                  <span className="text-xs font-mono text-gray-500">
                    By {rep.author} • {rep.publish_date}
                  </span>
                  <Link 
                    href={`/research/${rep.slug}`} 
                    className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0"
                  >
                    Explore Report <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
