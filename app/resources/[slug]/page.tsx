import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User, FileText, ChevronRight, Share2, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getArticleBySlug, ARTICLES } from '@/lib/articles-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.pillar_id === article.pillar_id && a.slug !== article.slug
  ).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-accent/30 selection:text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] tech-glow rounded-full z-0 pointer-events-none opacity-40"></div>
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 border-2 border-accent flex items-center justify-center rotate-45">
              <div className="w-2.5 h-2.5 bg-accent -rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">Muse</span>
            <span className="text-xs text-gray-500 font-mono border-l border-gray-800 pl-3">Publications</span>
          </Link>

          <Link 
            href="/#insights" 
            className="flex items-center gap-2 text-xs font-semibold uppercase letter-spacing-widest text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> Back to Insights
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        
        {/* Article Breadcrumbs & Category Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono">
          <Link href="/#insights" className="text-gray-500 hover:text-accent">Insights</Link>
          <span className="text-gray-700">/</span>
          <span className="text-accent uppercase px-2.5 py-1 bg-accent/10 border border-accent/20">
            {article.category}
          </span>
          <span className="text-gray-700">/</span>
          <span className="text-gray-400 flex items-center gap-1">
            <Clock size={12} /> {article.reading_time}
          </span>
        </div>

        {/* Title & Headline */}
        <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight mb-8">
          {article.title}
        </h1>

        {/* Author & Date Card */}
        <div className="p-6 bg-white/[0.02] border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <User size={18} />
            </div>
            <div>
              <p className="font-medium text-white text-sm">{article.author}</p>
              {article.author_title && (
                <p className="text-xs text-accent font-mono">{article.author_title}</p>
              )}
            </div>
          </div>
          <div className="text-xs text-gray-500 font-mono">
            Published: {article.date}
          </div>
        </div>

        {/* YAML Frontmatter Code Block */}
        <div className="mb-12 p-6 bg-[#080808] border border-gray-800 font-mono text-xs text-gray-400 space-y-1.5 overflow-x-auto">
          <div className="text-accent font-bold mb-2 flex items-center gap-2">
            <FileText size={14} /> {'// YAML Metadata Declaration'}
          </div>
          <div><span className="text-gray-600">title:</span> &quot;{article.title}&quot;</div>
          <div><span className="text-gray-600">slug:</span> &quot;{article.slug}&quot;</div>
          <div><span className="text-gray-600">category:</span> &quot;{article.category}&quot;</div>
          <div><span className="text-gray-600">content_type:</span> &quot;{article.content_type}&quot;</div>
          <div><span className="text-gray-600">audience:</span> &quot;{article.audience}&quot;</div>
          <div><span className="text-gray-600">lifecycle_stage:</span> &quot;{article.lifecycle_stage}&quot;</div>
          <div><span className="text-gray-600">author:</span> &quot;{article.author}&quot;</div>
        </div>

        {/* Markdown Body */}
        <article className="markdown-body text-gray-300 space-y-8 text-base md:text-lg leading-relaxed font-light border-b border-gray-800 pb-16">
          <ReactMarkdown>{article.markdown}</ReactMarkdown>
        </article>

        {/* Article Tags */}
        <div className="py-8 border-b border-gray-800 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-500 font-mono mr-2">Topics:</span>
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-gray-400 bg-white/[0.02] border border-gray-800 px-3 py-1">
              #{tag}
            </span>
          ))}
        </div>

        {/* Consultation Lead Block */}
        <div className="my-16 p-8 md:p-12 bg-accent/5 border border-accent/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl pointer-events-none"></div>
          <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
            Muse Consultancy Services // Enterprise Capability
          </span>
          <h3 className="text-2xl md:text-3xl font-light text-white mt-3 mb-4">
            Transform Your Software Engineering Velocity
          </h3>
          <p className="text-gray-400 text-sm font-light max-w-xl mb-8 leading-relaxed">
            Need senior architects to refactor legacy technical debt, or dedicated development teams to accelerate product delivery? Contact our technical directors today.
          </p>
          <a 
            href="mailto:sales@musecs.com?subject=Technical%20Consultation%20Enquiry"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-all"
          >
            Schedule Technical Assessment <ChevronRight size={16} />
          </a>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-8 pt-8">
            <h3 className="text-xs font-bold text-accent uppercase letter-spacing-widest">
              Related Insights in {article.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/resources/${rel.slug}`}
                  className="p-6 bg-[#080808] border border-gray-800 hover:border-accent transition-all group block"
                >
                  <span className="text-[10px] text-gray-500 uppercase font-mono block mb-2">{rel.reading_time}</span>
                  <h4 className="text-base font-medium text-white group-hover:text-accent transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2">{rel.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-900 text-[10px] text-gray-500 uppercase tracking-widest text-center">
        &copy; {new Date().getFullYear()} Muse Consultancy Services. All rights reserved.
      </footer>
    </div>
  );
}
