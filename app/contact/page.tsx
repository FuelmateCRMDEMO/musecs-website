import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, ShieldCheck, Clock, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact MuseCS | Discuss Software Development & Team Augmentation Requirements',
  description: 'Connect directly with MuseCS software architects in Sandton, Johannesburg. Submit software development project requirements, request developer team augmentation, or schedule a technical architecture review.',
  alternates: {
    canonical: 'https://www.musecs.com/contact/'
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      {/* Header Banner */}
      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            <ShieldCheck size={14} /> Direct Technical Engagement // Sandton Headquarters
          </div>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Initiate a Commercial & Technical Engagement
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Speak directly with practicing software architects to review custom software requirements, evaluate developer team augmentation capacity, or request a formal project proposal.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        
        {/* Engagement Transparency Section: The 5 Commercial Answers */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-[#080808] border border-gray-800 text-xs font-mono">
          <div className="space-y-2">
            <span className="text-accent font-bold uppercase tracking-widest block">01 // Receiver</span>
            <p className="text-white font-sans text-sm font-light">
              Your inquiry is routed directly to a Senior Software Architect in Sandton—not a sales agent.
            </p>
          </div>
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-gray-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-accent font-bold uppercase tracking-widest block">02 // Response SLA</span>
            <p className="text-white font-sans text-sm font-light">
              Guaranteed initial technical assessment response within 4 business hours.
            </p>
          </div>
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-gray-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-accent font-bold uppercase tracking-widest block">03 // Engagement Process</span>
            <p className="text-white font-sans text-sm font-light">
              1. Spec review → 2. Mutual NDA → 3. 30-min Technical Call → 4. Formal Proposal / Candidate Match.
            </p>
          </div>
          <div className="space-y-2 border-t md:border-t-0 md:border-l border-gray-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-accent font-bold uppercase tracking-widest block">04 // Confidentiality</span>
            <p className="text-white font-sans text-sm font-light">
              100% POPIA compliant. All technical architectures and codebases treated as strictly confidential.
            </p>
          </div>
        </section>

        {/* Main Grid: Qualification Form + Office Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interactive Qualification Form */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                Commercial Qualification Form
              </span>
              <h2 className="text-3xl font-light text-white tracking-tight">
                Submit Your Technical Requirements
              </h2>
            </div>

            <ContactForm />
          </div>

          {/* Office & Direct Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="p-8 bg-[#080808] border border-gray-800 space-y-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                <MapPin size={16} /> Sandton Headquarters
              </h3>
              
              <div className="space-y-2 text-sm text-gray-300 font-light">
                <p className="font-semibold text-white">Muse Consultancy Services (Pty) Ltd</p>
                <p>Sandton City, West Tower, 5th Floor</p>
                <p>Sandton, Johannesburg, 2196</p>
                <p>Gauteng, South Africa</p>
              </div>

              <div className="pt-4 border-t border-gray-800 space-y-3 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-accent shrink-0" />
                  <span>+27 11 881 5460 / +27 71 925 5128</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-accent shrink-0" />
                  <span>sales@musecs.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#080808] border border-gray-800 space-y-4">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
                Types of Enquiries We Handle
              </span>
              <ul className="space-y-2 text-xs font-mono text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Bespoke Enterprise Software Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Senior Developer Team Augmentation (&lt;5 Days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Legacy Core Ledger Modernisation & Microservices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Dedicated Engineering Squad Deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">▸</span>
                  <span>Software Architecture & POPIA Security Audits</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-black border border-gray-800 space-y-3 text-xs font-mono">
              <span className="text-accent font-bold uppercase tracking-widest block">Need Immediate Capacity?</span>
              <p className="text-gray-300 font-sans text-sm font-light">
                Call our Sandton technical engagement desk directly at <strong className="text-white">+27 11 881 5460</strong> to discuss immediate developer availability.
              </p>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
