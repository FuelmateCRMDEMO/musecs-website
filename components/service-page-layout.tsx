import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Layers, 
  HelpCircle, 
  FileText, 
  Building2, 
  ChevronRight,
  Terminal,
  Cpu,
  Clock,
  Send
} from 'lucide-react';
import { HeaderNav } from './header-nav';
import { Footer } from './footer';
import { Breadcrumbs, BreadcrumbItem } from './breadcrumbs';
import { SchemaScript } from './schema-script';
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  muse: string;
}

export interface SubSection {
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface ContentSection {
  id?: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: string;
  subSections?: SubSection[];
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  canonicalUrl: string;
  overview: string[];
  capabilities: CapabilityItem[];
  processSteps: { step: string; title: string; description: string }[];
  techStack: string[];
  comparisonTable?: ComparisonRow[];
  faqs: FAQItem[];
  relatedPages: { title: string; url: string; description: string }[];
  category?: string;
  contentSections?: ContentSection[];
  ctaButtonText?: string;
  ctaHeading?: string;
  ctaType?: string;
  ctaUrl?: string;
  children?: React.ReactNode;
}

export function ServicePageLayout({
  title,
  subtitle,
  breadcrumbs,
  canonicalUrl,
  overview,
  capabilities,
  processSteps,
  techStack,
  comparisonTable,
  faqs,
  relatedPages,
  category = 'Software Development',
  contentSections,
  ctaButtonText = 'Schedule Technical Review',
  ctaHeading = 'Ready to elevate your engineering velocity?',
  ctaType = 'software-development',
  ctaUrl,
  children
}: ServicePageProps) {
  const targetCtaUrl = ctaUrl || `/contact?type=${ctaType}`;
  const serviceSchema = generateServiceSchema(title, overview[0] || subtitle, canonicalUrl, category);
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-accent/30 selection:text-white relative overflow-hidden">
      <SchemaScript schema={[serviceSchema, faqSchema]} />
      <HeaderNav />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-20 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-widest">
              <Code2 size={14} /> Enterprise Engineering Capability
            </div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-xl text-gray-300 font-light leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href={targetCtaUrl} 
                className="px-8 py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.3)] font-mono"
              >
                {ctaButtonText} <ArrowRight size={16} />
              </Link>
              <Link 
                href="#faqs" 
                className="px-8 py-4 bg-black/60 hover:bg-white/10 text-white border border-gray-800 font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 font-mono"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        
        {/* Comprehensive Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-gray-300 text-base md:text-lg font-light leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight border-b border-gray-800 pb-4">
              Overview & Strategic Engineering Value
            </h2>
            {overview.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="lg:col-span-4 p-8 bg-[#080808] border border-gray-800 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Terminal size={14} /> Technology Matrix
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono bg-white/[0.04] border border-gray-800 px-3 py-1.5 text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-800 space-y-3 text-xs font-mono text-gray-400">
              <div><strong className="text-white">Delivery Model:</strong> Agile Squad / Team Augmentation</div>
              <div><strong className="text-white">Geographic Market:</strong> South Africa & Enterprise Global</div>
              <div><strong className="text-white">Security Standards:</strong> POPIA, ISO27001, SOC2 compliant</div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Grid */}
        <section className="space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Capabilities // Technical Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Architectural & Operational Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div 
                key={i} 
                className="p-8 bg-[#080808] border border-gray-800 hover:border-accent/60 transition-all group"
              >
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Authority Content Sections */}
        {contentSections && contentSections.length > 0 && (
          <div className="space-y-16">
            {contentSections.map((sec, idx) => (
              <section key={idx} id={sec.id} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight border-b border-gray-800 pb-3">
                  {sec.title}
                </h2>

                <div className="space-y-4 text-gray-300 text-base font-light leading-relaxed">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <div className="p-6 bg-[#080808] border border-gray-800 my-4">
                    <ul className="space-y-3">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-gray-300 font-light">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sec.callout && (
                  <div className="p-6 bg-accent/5 border-l-2 border-accent text-sm text-gray-300 font-light italic">
                    {sec.callout}
                  </div>
                )}

                {sec.subSections && sec.subSections.length > 0 && (
                  <div className="space-y-8 pt-4 pl-0 md:pl-4">
                    {sec.subSections.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-4 border-l border-gray-800/80 pl-6">
                        <h3 className="text-xl font-medium text-white tracking-tight">
                          {sub.title}
                        </h3>
                        {sub.paragraphs.map((sp, spIdx) => (
                          <p key={spIdx} className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                            {sp}
                          </p>
                        ))}
                        {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                          <ul className="space-y-2 pt-2">
                            {sub.bulletPoints.map((sbp, sbIdx) => (
                              <li key={sbIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300 font-light">
                                <span className="text-accent font-bold font-mono">▸</span>
                                <span>{sbp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}

        {children}

        {/* Engineering Process Steps */}
        <section className="p-10 bg-gradient-to-r from-black via-[#080808] to-[#050505] border border-gray-800 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Execution Methodology // Delivery Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Our Software Engineering Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="space-y-3 border-l border-gray-800 pl-6 relative">
                <span className="text-xs font-mono font-bold text-accent">{step.step}</span>
                <h3 className="text-lg font-medium text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section if Provided */}
        {comparisonTable && comparisonTable.length > 0 && (
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                Comparative Analysis // Value Differentiation
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                Why Ambitious Organisations Partner With MuseCS
              </h2>
            </div>

            <div className="overflow-x-auto border border-gray-800">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#080808] border-b border-gray-800 font-mono text-xs text-accent">
                    <th className="p-4 uppercase tracking-widest">Architectural Dimension</th>
                    <th className="p-4 uppercase tracking-widest text-gray-400">Traditional Agency / Contractor</th>
                    <th className="p-4 uppercase tracking-widest text-accent font-bold">MuseCS Engineering Cell</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60 font-light">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.01]">
                      <td className="p-4 font-medium text-white">{row.feature}</td>
                      <td className="p-4 text-gray-400">{row.traditional}</td>
                      <td className="p-4 text-accent font-medium bg-accent/5">{row.muse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        <section id="faqs" className="space-y-8 pt-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Knowledge & Clarity // FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#080808] border border-gray-800 space-y-3">
                <h3 className="text-lg font-medium text-white flex items-start gap-3">
                  <HelpCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contextual Internal Linking Grid */}
        <section className="p-10 bg-[#080808] border border-gray-800 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
              Related Capabilities & Topics
            </span>
            <h3 className="text-2xl font-light text-white">Explore Supporting Engineering Architecture</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPages.map((rel, i) => (
              <Link 
                key={i} 
                href={rel.url}
                className="p-6 bg-black/60 border border-gray-800 hover:border-accent transition-all group block space-y-2"
              >
                <h4 className="text-base font-medium text-white group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{rel.title}</span>
                  <ChevronRight size={16} className="text-gray-500 group-hover:text-accent" />
                </h4>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Lead Capture CTA Section */}
        <section className="p-12 bg-accent text-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{ctaHeading}</h3>
            <p className="text-black/80 text-base font-medium">
              Connect directly with senior software architects in Sandton to review your system requirements or evaluate developer team availability.
            </p>
          </div>
          <Link 
            href={targetCtaUrl} 
            className="px-8 py-4 bg-black text-white hover:bg-slate-900 font-bold uppercase tracking-widest text-xs transition-all shrink-0 flex items-center gap-2 shadow-2xl font-mono"
          >
            {ctaButtonText} <Send size={16} />
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
