import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ARTICLES } from '@/lib/articles-data';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Software Engineering Insights & Executive Decision Guides | MuseCS',
  description: 'In-depth architectural guides, software development decision models, and technical leadership insights from Muse Consultancy Services.',
  alternates: {
    canonical: 'https://www.musecs.com/insights/'
  }
};

export default function InsightsPage() {
  const decisionGuides = [
    {
      title: 'Build vs Buy vs Augment: Enterprise Software Decision Framework',
      slug: 'build-vs-buy-vs-augment',
      summary: 'A structured evaluation framework comparing custom software development, off-the-shelf SaaS acquisition, and team augmentation across 6 key commercial vectors.',
      reading_time: '10 min read'
    },
    {
      title: 'Permanent Hiring vs Team Augmentation: Total Cost & Risk Analysis',
      slug: 'hire-vs-augment-software-developers',
      summary: 'An objective financial and operational breakdown comparing direct corporate recruiting costs against structured software team augmentation in South Africa.',
      reading_time: '9 min read'
    },
    {
      title: 'Software Outsourcing vs Team Augmentation: Delivery & Control Comparison',
      slug: 'outsourcing-vs-team-augmentation',
      summary: 'Evaluating project-based fixed-scope outsourcing versus embedded developer team augmentation for enterprise engineering managers.',
      reading_time: '8 min read'
    },
    {
      title: 'How to Scale an Enterprise Software Engineering Team in South Africa',
      slug: 'how-to-scale-a-software-development-team',
      summary: 'A practical playbook for VPs of Engineering and CTOs navigating senior developer shortages, onboarding bottlenecks, and quality assurance at scale.',
      reading_time: '12 min read'
    }
  ];

  const insightsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.musecs.com/insights/#page',
    'name': 'Software Engineering Insights & Executive Decision Guides',
    'description': 'Architectural guides, software development decision frameworks, and technical leadership insights by MuseCS.',
    'url': 'https://www.musecs.com/insights/',
    'publisher': {
      '@type': 'Organization',
      'name': 'Muse Consultancy Services',
      'url': 'https://www.musecs.com'
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <SchemaScript schema={insightsSchema} />
      <HeaderNav />

      {/* Hero Header */}
      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ name: 'Insights & Decision Guides', url: '/insights' }]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Technical Leadership & Architectural Insights
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Engineering Insights & Decision Guides
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            In-depth architectural guides, software procurement frameworks, and decision guides designed for CTOs, VPs of Engineering, and IT Directors navigating complex technology choices.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Executive Decision Guides Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h2 className="text-2xl font-light text-white flex items-center gap-2">
              <Compass size={20} className="text-accent" /> Executive Decision Guides
            </h2>
            <span className="text-xs font-mono text-gray-500">4 Core Decision Frameworks</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisionGuides.map((guide) => (
              <div 
                key={guide.slug}
                className="p-8 bg-[#080808] border border-gray-800 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-accent">
                    <span className="uppercase tracking-widest">Executive Decision Guide</span>
                    <span className="text-gray-500">{guide.reading_time}</span>
                  </div>

                  <h3 className="text-2xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-800 flex justify-end">
                  <Link 
                    href={`/insights/decision-guides/${guide.slug}`}
                    className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Read Decision Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Technical Articles */}
        <section className="space-y-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h2 className="text-2xl font-light text-white flex items-center gap-2">
              <FileText size={20} className="text-accent" /> Architectural Insights & Essays
            </h2>
            <span className="text-xs font-mono text-gray-500">Showing {ARTICLES.length} Articles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((art) => (
              <div 
                key={art.slug}
                className="p-8 bg-[#080808] border border-gray-800 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-accent uppercase tracking-widest">{art.category}</span>
                    <span className="text-gray-500">{art.reading_time}</span>
                  </div>

                  <h3 className="text-xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                    {art.title}
                  </h3>

                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-800 text-xs font-mono text-gray-500">
                  <span>By {art.author}</span>
                  <Link 
                    href={`/resources/${art.slug}`}
                    className="font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Read Article <ArrowRight size={14} />
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
