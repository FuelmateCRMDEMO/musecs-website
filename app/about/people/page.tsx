import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { UserCheck, ShieldCheck, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Engineering Leadership & People | MuseCS',
  description: 'Meet the executive and technical leadership driving software engineering excellence at Muse Consultancy Services in South Africa.',
  alternates: {
    canonical: 'https://www.musecs.com/about/people/'
  }
};

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'About Us', url: '/about' },
            { name: 'Leadership & People', url: '/about/people' }
          ]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Leadership & Technical Practice
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Engineering Leadership & Expertise
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Muse Consultancy Services is led by practicing software architects and engineering directors dedicated to technical craft, rigorous developer vetting, and enterprise client success.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Leadership Profile */}
        <div className="p-8 md:p-12 bg-[#080808] border border-gray-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-800 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">Founder & Managing Director</span>
              <h2 className="text-3xl font-light text-white">Clinton Powell</h2>
              <p className="text-sm text-gray-400 font-mono">Software Architecture, Developer Vetting & Enterprise Engineering Strategy</p>
            </div>
            <Link
              href="/about/people/clinton-powell"
              className="px-6 py-3 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 self-start md:self-auto"
            >
              View Full Profile <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" /> Specialisations
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Domain-Driven Design (DDD), Strangler Fig legacy modernisations, technical due diligence, developer evaluation frameworks, and high-concurrency microservice architectures.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <FileText size={16} className="text-accent" /> Featured Publications
              </h3>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li>• Abandoning LeetCode for Real-World Systems Evaluations</li>
                <li>• The MVP Valuation Trap: Technical Shortcuts at Series B</li>
                <li>• South Africa as an Enterprise Software Hub</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <UserCheck size={16} className="text-accent" /> Role at MuseCS
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                Directs executive client strategy, technical quality standards, and developer talent assessment across team augmentation and custom software engagements.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Structure Notice */}
        <section className="p-8 bg-black/40 border border-gray-800 space-y-4">
          <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-widest">
            Engineering Practice Squads
          </h3>
          <p className="text-sm text-gray-300 font-light leading-relaxed">
            In addition to executive leadership, MuseCS operates dedicated technical practice squads covering Cloud Architecture, Data Engineering & AI, Modern React/TypeScript, and DevSecOps. Individual squad members operate under strict non-disclosure and security compliance protocols for enterprise client assignments.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
