'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  User, 
  Tag, 
  X, 
  Share2, 
  Bookmark, 
  ChevronRight,
  CheckCircle2,
  FileText,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ARTICLES, Article } from '@/lib/articles-data';

export function InsightsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = activeTab === 'all' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.pillar_id === activeTab);

  const pillars = [
    { id: 'all', label: 'All Insights' },
    { id: 'tech-debt', label: 'Technical Debt & Legacy' },
    { id: 'talent', label: 'Talent & Hiring' },
    { id: 'scope-creep', label: 'Shifting Priorities' },
    { id: 'perspectives', label: 'Muse Perspectives' },
  ];

  return (
    <section id="insights" className="py-32 px-6 relative border-t border-gray-800 glass-card">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent"></div>
              <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
                Knowledge Hub // Technical Engineering Publication
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
              Engineering <span className="font-bold text-accent">Insights.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-2xl mt-4 text-base md:text-lg">
              Pragmatic frameworks, architectural analyses, and executive perspectives on modern software development, legacy modernization, and engineering leadership.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/[0.02] border border-gray-800 p-2 rounded-none">
            <FileText size={16} className="text-accent ml-2" />
            <span className="text-xs text-gray-400 font-mono">12 Production Guides Published</span>
          </div>
        </div>

        {/* Pillar Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-gray-800 pb-6">
          <Filter size={14} className="text-gray-500 mr-2" />
          {pillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase letter-spacing-widest transition-all ${
                  isActive
                    ? 'bg-accent text-black border border-accent shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                    : 'bg-black/40 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
                }`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => {
            const isPerspectives = article.pillar_id === 'perspectives';
            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group flex flex-col justify-between p-8 bg-[#080808] border transition-all duration-300 relative overflow-hidden ${
                  isPerspectives 
                    ? 'border-accent/40 hover:border-accent/80 shadow-[0_0_20px_rgba(0,210,255,0.05)]' 
                    : 'border-gray-800 hover:border-gray-600'
                }`}
              >
                {/* Subtle Hover Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Category & Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className={`text-[10px] font-bold uppercase letter-spacing-widest px-2.5 py-1 border ${
                      isPerspectives 
                        ? 'bg-accent/10 border-accent/30 text-accent' 
                        : 'bg-white/[0.03] border-gray-800 text-gray-400'
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                      <Clock size={12} /> {article.reading_time}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-medium text-white group-hover:text-accent transition-colors leading-snug mb-4">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Footer Metadata & Actions */}
                <div>
                  <div className="pt-6 border-t border-gray-800/80 mb-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1.5 font-medium text-gray-300">
                        <User size={12} className="text-accent" /> {article.author}
                      </span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">{article.date}</span>
                    </div>
                    {article.author_title && (
                      <span className="text-[11px] text-accent/80 font-mono">{article.author_title}</span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="flex-1 py-3 px-4 bg-white/[0.03] hover:bg-accent hover:text-black border border-gray-800 hover:border-accent text-xs font-bold uppercase letter-spacing-widest text-white transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      Quick Read <BookOpen size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="p-3 bg-black border border-gray-800 hover:border-gray-600 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                      title="Open full page"
                    >
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Modal Article Reader */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedArticle(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-gray-800 shadow-2xl flex flex-col overflow-hidden relative"
              >
                {/* Modal Top Nav Bar */}
                <div className="px-6 py-4 border-b border-gray-800 bg-[#050505] flex items-center justify-between sticky top-0 z-20">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest px-2.5 py-1 bg-accent/10 border border-accent/20">
                      {selectedArticle.category}
                    </span>
                    <span className="text-xs text-gray-400 font-mono hidden sm:inline-block">
                      {selectedArticle.reading_time}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/resources/${selectedArticle.slug}`}
                      className="text-xs font-semibold uppercase letter-spacing-widest text-accent hover:underline flex items-center gap-1"
                    >
                      Full Page View <ArrowRight size={12} />
                    </Link>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Modal Article Body */}
                <div className="p-6 md:p-12 overflow-y-auto space-y-8 custom-scrollbar">
                  {/* Metadata Header Header */}
                  <div className="border-b border-gray-800 pb-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 font-mono">
                      <span>Audience: {selectedArticle.audience}</span>
                      <span>•</span>
                      <span>Stage: {selectedArticle.lifecycle_stage}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-light text-white leading-tight">
                      {selectedArticle.title}
                    </h1>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-900 text-xs">
                      <div>
                        <p className="font-semibold text-white">{selectedArticle.author}</p>
                        {selectedArticle.author_title && (
                          <p className="text-accent text-[11px]">{selectedArticle.author_title}</p>
                        )}
                      </div>
                      <span className="text-gray-500 font-mono">{selectedArticle.date}</span>
                    </div>
                  </div>

                  {/* YAML Metadata Display */}
                  <div className="p-4 bg-black/60 border border-gray-800 text-xs font-mono text-gray-400 space-y-1">
                    <div className="text-accent font-bold mb-2">{'// YAML Frontmatter Metadata'}</div>
                    <div><span className="text-gray-500">title:</span> &quot;{selectedArticle.title}&quot;</div>
                    <div><span className="text-gray-500">category:</span> &quot;{selectedArticle.category}&quot;</div>
                    <div><span className="text-gray-500">content_type:</span> &quot;{selectedArticle.content_type}&quot;</div>
                    <div><span className="text-gray-500">audience:</span> &quot;{selectedArticle.audience}&quot;</div>
                    <div><span className="text-gray-500">lifecycle_stage:</span> &quot;{selectedArticle.lifecycle_stage}&quot;</div>
                    <div><span className="text-gray-500">author:</span> &quot;{selectedArticle.author}&quot;</div>
                  </div>

                  {/* Render Markdown Content */}
                  <div className="markdown-body text-gray-300 space-y-6 text-sm md:text-base leading-relaxed">
                    <ReactMarkdown>{selectedArticle.markdown}</ReactMarkdown>
                  </div>

                  {/* Article Tags */}
                  <div className="pt-8 border-t border-gray-800 flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag) => (
                      <span key={tag} className="text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-gray-800 px-3 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom CTA Inside Reader */}
                  <div className="p-8 bg-accent/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white">Need Senior Engineering Horsepower?</h4>
                      <p className="text-xs text-gray-400 font-light mt-1">
                        Muse Consultancy Services provides dedicated development teams and team augmentation.
                      </p>
                    </div>
                    <a
                      href="mailto:sales@musecs.com?subject=Technical%20Consultation%20Request"
                      className="px-6 py-3 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      Book Technical Assessment <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
