import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Enterprise Software Decision Guides | MuseCS Insights',
  description: 'Objective decision models comparing Build vs Buy vs Augment, Permanent Hiring vs Augmentation, Outsourcing vs Augmentation, and Engineering Team Scaling.',
  alternates: {
    canonical: 'https://www.musecs.com/insights/decision-guides/'
  }
};

export default function DecisionGuidesIndexPage() {
  const guides = [
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

  const indexSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.musecs.com/insights/decision-guides/#page',
    'name': 'Enterprise Software Decision Guides',
    'description': 'Objective evaluation models and frameworks for enterprise software procurement and team scaling.',
    'url': 'https://www.musecs.com/insights/decision-guides/',
    'publisher': {
      '@type': 'Organization',
      'name': 'Muse Consultancy Services',
      'url': 'https://www.musecs.com'
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <SchemaScript schema={indexSchema} />
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Insights', url: '/insights' },
            { name: 'Decision Guides', url: '/insights/decision-guides' }
          ]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Executive Procurement & Strategy Frameworks
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Enterprise Decision Guides
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Balanced, objective evaluation models designed to assist technology leaders in choosing the right software delivery, talent acquisition, and architectural sourcing models.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <div 
              key={guide.slug}
              className="p-8 bg-[#080808] border border-gray-800 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-accent">
                  <span className="uppercase tracking-widest">Decision Guide</span>
                  <span className="text-gray-500">{guide.reading_time}</span>
                </div>

                <h2 className="text-2xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                  {guide.title}
                </h2>

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {guide.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800 flex justify-end">
                <Link 
                  href={`/insights/decision-guides/${guide.slug}`}
                  className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
