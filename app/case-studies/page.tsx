import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CASE_STUDIES } from '@/lib/case-studies-data';

export const metadata: Metadata = {
  title: 'Enterprise Software Case Studies | MuseCS South Africa',
  description: 'Explore real-world software engineering case studies from MuseCS across core banking modernisation, telecoms data pipelines, and AI claims adjudication.',
  alternates: {
    canonical: 'https://www.musecs.com/case-studies/'
  }
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ name: 'Case Studies', url: '/case-studies' }]} />
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight mb-4">
            Enterprise Engineering Case Studies
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl">
            In-depth technical breakdowns of how MuseCS solves complex software architecture bottlenecks, modernizes legacy platforms, and delivers high-throughput systems for South Africa’s leading enterprises.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.slug} 
              className="bg-[#080808] border border-gray-800 p-8 flex flex-col justify-between hover:border-accent/60 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-accent">
                  <span className="uppercase tracking-widest">{study.client_industry}</span>
                  <span className="text-gray-500">{study.client_region}</span>
                </div>

                <h2 className="text-2xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                  {study.title}
                </h2>

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {study.summary}
                </p>

                <div className="pt-4 space-y-2">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block">Key Outcome:</span>
                  <p className="text-xs text-gray-300 font-mono bg-accent/5 p-3 border border-accent/20">
                    {study.outcomes[0]}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-800/80 mt-8 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono bg-white/[0.04] px-2 py-0.5 text-gray-400 border border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/case-studies/${study.slug}`} 
                  className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0"
                >
                  Read Study <ArrowRight size={14} />
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
