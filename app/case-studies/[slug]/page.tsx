import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Code2, Server, ShieldCheck } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CASE_STUDIES, getCaseStudyBySlug } from '@/lib/case-studies-data';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: 'Case Study Not Found | MuseCS' };

  return {
    title: `${study.title} | MuseCS Case Study`,
    description: study.summary,
    alternates: {
      canonical: `https://www.musecs.com/case-studies/${study.slug}/`
    }
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Case Studies', url: '/case-studies' },
            { name: study.title, url: `/case-studies/${study.slug}` }
          ]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase tracking-widest font-bold">
            {study.client_industry} - {study.client_region}
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            {study.summary}
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Business Context & Challenge
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              {study.business_context}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Technical Problem Analysis
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              {study.technical_problem}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
              Solution Architecture & Execution
            </h2>
            <ul className="space-y-4">
              {study.solution_architecture.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 font-light text-base">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 p-8 bg-[#080808] border border-gray-800">
            <h2 className="text-xl font-mono text-accent uppercase tracking-widest">
              Measurable Business Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.outcomes.map((outcome, idx) => (
                <div key={idx} className="p-4 bg-black/60 border border-gray-800 space-y-2">
                  <span className="text-xs font-mono text-accent font-bold">OUTCOME 0{idx + 1}</span>
                  <p className="text-sm text-gray-200 font-light">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Project Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white/[0.04] border border-gray-800 px-3 py-1.5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-800 space-y-3 text-xs font-mono text-gray-400">
              <div><strong className="text-white">Muse Role:</strong> {study.muse_contribution}</div>
              <div><strong className="text-white">Delivery Model:</strong> {study.development_approach}</div>
            </div>

            <Link 
              href="/contact" 
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors"
            >
              Request Similar Solution
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
