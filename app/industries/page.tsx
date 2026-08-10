import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { INDUSTRIES } from '@/lib/industries-data';

export const metadata: Metadata = {
  title: 'Industry Software Solutions | MuseCS South Africa',
  description: 'Specialized software engineering solutions across Banking, Insurance, Fintech, Healthcare and Telecommunications in South Africa.',
  alternates: {
    canonical: 'https://www.musecs.com/industries/'
  }
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ name: 'Industries', url: '/industries' }]} />
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            Industry Expertise & Domain Solutions
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl">
            We don’t just write generic code. Our software engineering teams bring deep domain knowledge in Banking, Insurance, Fintech, Healthcare and Telecommunications.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div 
              key={ind.slug} 
              className="bg-[#080808] border border-gray-800 p-8 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
                  Industry Focus
                </span>
                <h2 className="text-3xl font-light text-white group-hover:text-accent transition-colors">
                  {ind.title}
                </h2>
                <p className="text-sm text-gray-300 font-mono font-medium">
                  {ind.subtitle}
                </p>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-800">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Key Challenge Solved:</span>
                <p className="text-xs text-gray-300 font-mono bg-accent/5 p-3 border border-accent/20">
                  {ind.challenges[0]}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex flex-wrap gap-1.5">
                  {ind.tech_stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono bg-white/[0.04] px-2 py-0.5 text-gray-400 border border-gray-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/industries/${ind.slug}`} 
                  className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0"
                >
                  Explore Industry Solutions <ArrowRight size={14} />
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
