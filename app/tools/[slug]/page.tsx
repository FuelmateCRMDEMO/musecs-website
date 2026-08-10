import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { TOOLS_LIST, getToolBySlug } from '@/lib/tools-data';
import { InteractiveCostCalculator } from '@/components/interactive-cost-calculator';

interface ToolDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOOLS_LIST.map((tool) => ({
    slug: tool.slug
  }));
}

export async function generateMetadata({ params }: ToolDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: 'Tool Not Found | MuseCS' };

  return {
    title: `${tool.title} | MuseCS Tools`,
    description: tool.description,
    alternates: {
      canonical: `https://www.musecs.com/tools/${tool.slug}/`
    }
  };
}

export default async function ToolDetailPage({ params }: ToolDetailPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Tools', url: '/tools' },
            { name: tool.title, url: `/tools/${tool.slug}` }
          ]} />

          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            {tool.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            {tool.title}
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            {tool.description}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <InteractiveCostCalculator type={tool.slug} />

        <div className="p-8 bg-[#080808] border border-gray-800 space-y-4">
          <h2 className="text-xl font-light text-white">How This Estimation Framework Works</h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            This tool models software developer contracting costs based on verified market data from MuseCS placements across Johannesburg, Cape Town, and Durban. The estimates reflect fully loaded daily and monthly retainers for senior software engineers, software architects, and cloud specialists.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
