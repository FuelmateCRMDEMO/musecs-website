import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, CheckCircle2, ShieldAlert, Send, Clock, User, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';
import { RESEARCH_REPORTS, getResearchReportBySlug } from '@/lib/research-data';

interface ResearchDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESEARCH_REPORTS.map((rep) => ({
    slug: rep.slug
  }));
}

export async function generateMetadata({ params }: ResearchDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const rep = getResearchReportBySlug(slug);
  if (!rep) return { title: 'Report Not Found | MuseCS' };

  return {
    title: `${rep.title} | MuseCS Research`,
    description: rep.summary,
    alternates: {
      canonical: `https://www.musecs.com/research/${rep.slug}/`
    }
  };
}

export default async function ResearchDetailPage({ params }: ResearchDetailPageProps) {
  const { slug } = await params;
  const rep = getResearchReportBySlug(slug);
  if (!rep) notFound();

  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Report',
    '@id': `https://www.musecs.com/research/${rep.slug}/#report`,
    'headline': rep.title,
    'description': rep.summary,
    'url': `https://www.musecs.com/research/${rep.slug}/`,
    'datePublished': '2026-01-15',
    'dateModified': '2026-02-01',
    'author': {
      '@type': 'Organization',
      'name': rep.author,
      'url': 'https://www.musecs.com'
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
      <SchemaScript schema={reportSchema} />
      <HeaderNav />

      {/* Hero Header */}
      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'Research', url: '/research' },
            { name: rep.title, url: `/research/${rep.slug}` }
          ]} />

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-bold uppercase tracking-widest">
              {rep.category}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 flex items-center gap-1">
              <Calendar size={12} /> Published {rep.publish_date}
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 flex items-center gap-1">
              <User size={12} /> {rep.author}
            </span>
            <span className="text-gray-500">•</span>
            <span className="px-2 py-0.5 bg-gray-900 border border-gray-800 text-accent">
              Status: {rep.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
            {rep.title}
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            {rep.summary}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 space-y-12">
          
          {/* Executive Key Findings Box */}
          <div className="space-y-6 p-8 bg-[#080808] border border-gray-800">
            <h2 className="text-xl font-mono text-accent uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={18} /> Executive Key Findings
            </h2>
            <ul className="space-y-4">
              {rep.key_findings.map((finding, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 font-light text-base">
                  <span className="text-accent font-mono font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Methodology */}
          <div className="space-y-4 p-8 bg-black/40 border border-gray-800">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest flex items-center gap-2">
              <BookOpen size={16} /> Methodology & Data Parameters
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              {rep.methodology}
            </p>
            {rep.limitations && (
              <div className="pt-3 border-t border-gray-800 text-xs text-gray-400 font-light flex items-start gap-2">
                <ShieldAlert size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                <span><strong>Scope & Limitations:</strong> {rep.limitations}</span>
              </div>
            )}
          </div>

          {/* Full Content Markdown */}
          <div className="prose prose-invert max-w-none text-gray-300 font-light space-y-6 leading-relaxed border-t border-gray-800 pt-8">
            <ReactMarkdown>{rep.full_content}</ReactMarkdown>
          </div>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="p-6 bg-[#080808] border border-gray-800 space-y-6 sticky top-28">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Report Intelligence & Advisory
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              This research report is authored by MuseCS senior software architects and technology analysts to benchmark software development capabilities and rates in South Africa.
            </p>

            <div className="space-y-3 pt-4 border-t border-gray-800 text-xs font-mono text-gray-400">
              <div className="flex justify-between">
                <span>Publisher:</span>
                <span className="text-white">MuseCS</span>
              </div>
              <div className="flex justify-between">
                <span>Primary Lead:</span>
                <span className="text-white">{rep.author}</span>
              </div>
              <div className="flex justify-between">
                <span>Region Focus:</span>
                <span className="text-white">South Africa / Africa</span>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              Request Custom Data Audit <Send size={14} />
            </Link>
          </div>
        </aside>

      </main>

      <Footer />
    </div>
  );
}
