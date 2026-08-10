import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calculator, Cpu } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TOOLS_LIST } from '@/lib/tools-data';

export const metadata: Metadata = {
  title: 'Software Development Calculators & Decision Tools | MuseCS',
  description: 'Interactive cost calculators, team augmentation pricing estimators, and build vs augment decision tools for CTOs and engineering leaders.',
  alternates: {
    canonical: 'https://www.musecs.com/tools/'
  }
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ name: 'Tools', url: '/tools' }]} />
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            Calculators & Decision Tools
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl">
            Data-backed estimation frameworks to help technology leadership model custom software budgets, compare team augmentation costs, and evaluate build vs augment decisions.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOOLS_LIST.map((tool) => (
            <div 
              key={tool.slug} 
              className="bg-[#080808] border border-gray-800 p-8 flex flex-col justify-between hover:border-accent/60 transition-all group space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Calculator size={20} />
                </div>

                <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
                  {tool.category}
                </span>

                <h2 className="text-2xl font-light text-white group-hover:text-accent transition-colors leading-tight">
                  {tool.title}
                </h2>

                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500">Interactive Tool</span>
                <Link 
                  href={`/tools/${tool.slug}`} 
                  className="text-xs font-mono font-bold text-accent group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0"
                >
                  Launch Tool <ArrowRight size={14} />
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
