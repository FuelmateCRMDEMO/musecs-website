import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SchemaScript } from '@/components/schema-script';

export const metadata: Metadata = {
  title: 'Sudhir Mishra - Founder & Managing Director | MuseCS',
  description: 'Sudhir Mishra is the Founder & Managing Director of Muse Consultancy Services, specializing in enterprise software architecture, legacy modernization, and senior engineering talent evaluation.',
  alternates: {
    canonical: 'https://www.musecs.com/about/people/sudhir-mishra/'
  }
};

export default function SudhirMishraProfilePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.musecs.com/about/people/sudhir-mishra/#person',
    'name': 'Sudhir Mishra',
    'jobTitle': 'Founder & Managing Director',
    'worksFor': {
      '@type': 'Organization',
      'name': 'Muse Consultancy Services',
      'url': 'https://www.musecs.com'
    },
    'description': 'Founder & Managing Director at Muse Consultancy Services, specializing in software architecture, legacy system modernization, and software developer vetting.',
    'knowsAbout': [
      'Software Architecture',
      'Domain-Driven Design',
      'Legacy System Modernization',
      'Software Development Team Augmentation',
      'Technical Due Diligence'
    ],
    'url': 'https://www.musecs.com/about/people/sudhir-mishra/'
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <SchemaScript schema={personSchema} />
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[
            { name: 'About Us', url: '/about' },
            { name: 'Leadership', url: '/about/people' },
            { name: 'Sudhir Mishra', url: '/about/people/sudhir-mishra' }
          ]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Executive Profile
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Sudhir Mishra
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Founder & Managing Director, Muse Consultancy Services
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        
        {/* Background & Executive Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-light text-white">
              Professional Background & Leadership
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              Sudhir Mishra founded Muse Consultancy Services (MuseCS) with a singular focus: delivering senior software engineering capability and modern software architecture to enterprise organisations across South Africa and globally.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              With extensive experience across custom software development, cloud infrastructure, and technical team augmentation, Sudhir oversees MuseCS&apos;s engineering delivery standards, talent evaluation methodologies, and strategic client engagements.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              He has been a vocal advocate for pragmatic, real-world developer assessment over theoretical coding puzzles, championing code review exercises and live systems design pairing as the benchmark for senior software talent.
            </p>
          </div>

          <div className="p-8 bg-[#080808] border border-gray-800 space-y-6 h-fit">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <Building2 size={16} /> Key Focus Areas
            </h3>
            <ul className="space-y-3 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Enterprise Systems Architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Strangler Fig Legacy Modernisation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Pragmatic Developer Vetting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span>Team Augmentation Delivery</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Written Insights & Publications */}
        <section className="space-y-6 border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-light text-white flex items-center gap-2">
            <FileText size={20} className="text-accent" /> Publications & Thought Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#080808] border border-gray-800 space-y-3">
              <span className="text-xs font-mono text-accent">Thought Leadership // Article</span>
              <h3 className="text-xl font-medium text-white">
                Why We Abandoned Standard Coding Tests for Real-World Systems Architecture Exercises
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                An executive essay on why Muse replaced abstract LeetCode puzzle interviews with live PR code reviews and architectural pairing on production scenarios.
              </p>
              <Link
                href="/insights/abandoning-leetcode-for-real-world-engineering-evaluations"
                className="text-xs font-mono font-bold text-accent hover:underline flex items-center gap-1 pt-2"
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </div>

            <div className="p-6 bg-[#080808] border border-gray-800 space-y-3">
              <span className="text-xs font-mono text-accent">Thought Leadership // Article</span>
              <h3 className="text-xl font-medium text-white">
                The MVP Valuation Trap: How Technical Shortcuts Destroy Enterprise Value at Series B
              </h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Analyzing how unaddressed technical debt, lack of test automation, and sloppy database design erode company valuation during institutional investment rounds.
              </p>
              <Link
                href="/insights/the-valuation-trap-of-sloppy-mvp-code"
                className="text-xs font-mono font-bold text-accent hover:underline flex items-center gap-1 pt-2"
              >
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
