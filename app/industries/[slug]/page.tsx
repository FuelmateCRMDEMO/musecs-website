import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Building2, Send } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { INDUSTRIES, getIndustryBySlug } from '@/lib/industries-data';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    slug: ind.slug
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) return { title: 'Industry Not Found | MuseCS' };

  return {
    title: `${ind.title} Software Solutions | MuseCS`,
    description: ind.description,
    alternates: {
      canonical: `https://www.musecs.com/industries/${ind.slug}/`
    }
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = getIndustryBySlug(slug);
  if (!ind) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Industries', url: '/industries' },
            { name: ind.title, url: `/industries/${ind.slug}` }
          ]} />

          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Domain Solution
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            {ind.title}
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            {ind.subtitle}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Domain Overview
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              {ind.description}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Core Technical Challenges We Solve
            </h2>
            <div className="space-y-4">
              {ind.challenges.map((chal, idx) => (
                <div key={idx} className="p-4 bg-[#080808] border border-gray-800 flex items-start gap-3">
                  <span className="text-xs font-mono text-accent font-bold mt-0.5">0{idx + 1}</span>
                  <p className="text-sm text-gray-300 font-light">{chal}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Architectural & Software Solutions Delivered
            </h2>
            <ul className="space-y-4">
              {ind.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 font-light text-base">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Industry Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {ind.tech_stack.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white/[0.04] border border-gray-800 px-3 py-1.5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>

            <Link 
              href="/contact" 
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              Discuss Industry Requirements <Send size={14} />
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
