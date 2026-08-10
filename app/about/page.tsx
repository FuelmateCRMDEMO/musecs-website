import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Building2, CheckCircle2, ShieldCheck, Users, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'About MuseCS | South African Software Engineering Consultancy',
  description: 'Muse Consultancy Services (MuseCS) is South Africa\'s premier software engineering consultancy. Learn about our leadership, engineering methodology, and values.',
  alternates: {
    canonical: 'https://www.musecs.com/about/'
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Engineering Leadership & Excellence
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            About Muse Consultancy Services
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Supplying elite software engineering capability, system architecture, and dedicated development teams to ambitious enterprise organisations in South Africa and globally.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        
        {/* Company Mission & Core Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
              Built by Engineers for Engineering Leaders
            </h2>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              Muse Consultancy Services (MuseCS) was founded to address a persistent gap in the South African enterprise market: the need for genuine software engineering craft delivered with speed, transparency, and zero administrative bloat.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-base">
              Unlike traditional recruitment agencies or body shops that place unvetted CVs, MuseCS is an engineering consultancy led by practicing software architects. Every line of code, system blueprint, and developer deployment is governed by strict technical standards.
            </p>
          </div>

          <div className="p-8 bg-[#080808] border border-gray-800 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <ShieldCheck size={18} /> Our Core Delivery Commitments
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300 font-light">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Senior Capability First:</strong> Over 85% of our engineers hold senior, lead, or principal credentials.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300 font-light">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Test-Driven Discipline:</strong> TDD and automated CI/CD integrated into every squad workflow.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300 font-light">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span><strong>POPIA & ISO Compliance:</strong> Strict enterprise data privacy, security, and governance standards.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership & Engineering Governance */}
        <section className="p-10 bg-[#080808] border border-gray-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">Leadership & People</span>
              <h2 className="text-3xl font-light text-white">Practicing Architects & Executive Leadership</h2>
              <p className="text-sm text-gray-300 font-light max-w-2xl leading-relaxed">
                Our leadership combines decades of enterprise software delivery experience, Domain-Driven Design expertise, and strict engineering governance.
              </p>
            </div>
            <Link
              href="/about/people"
              className="px-6 py-3 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shrink-0"
            >
              Explore Leadership Profiles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/50 border border-gray-800 space-y-3">
              <span className="text-xs font-mono text-accent">Founder & Managing Director</span>
              <h3 className="text-xl font-medium text-white">Clinton Powell</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Directs software architecture standards, technical due diligence, and developer talent evaluation across all enterprise client engagements.
              </p>
              <Link
                href="/about/people/clinton-powell"
                className="text-xs font-mono font-bold text-accent hover:underline flex items-center gap-1 pt-2"
              >
                View Clinton Powell Profile <ArrowRight size={12} />
              </Link>
            </div>

            <div className="p-6 bg-black/50 border border-gray-800 space-y-3">
              <span className="text-xs font-mono text-accent">Practice Leadership</span>
              <h3 className="text-xl font-medium text-white">Engineering Practice Directors</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                Specialized technical practice leads in Cloud Native Architecture, Data Engineering & AI, DevSecOps, and Modern Frontend Engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Headquarter & Physical Presence */}
        <section className="p-10 bg-[#080808] border border-gray-800 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">Enterprise Presence</span>
            <h2 className="text-3xl font-light text-white">Headquartered in Sandton, Johannesburg</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="text-accent font-bold uppercase tracking-widest flex items-center gap-2">
                <MapPin size={16} /> Johannesburg HQ
              </div>
              <p>Sandton City, West Tower, 5th Floor</p>
              <p>Sandton, Johannesburg, 2196</p>
              <p>South Africa</p>
            </div>

            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="text-accent font-bold uppercase tracking-widest flex items-center gap-2">
                <Phone size={16} /> Contact Telephony
              </div>
              <p>Main Switchboard: +27 11 881 5460</p>
              <p>Direct Advisory: +27 71 925 5128</p>
            </div>

            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="text-accent font-bold uppercase tracking-widest flex items-center gap-2">
                <Mail size={16} /> Digital Channels
              </div>
              <p>Sales: sales@musecs.com</p>
              <p>Engineering: tech@musecs.com</p>
              <p>Careers: careers@musecs.com</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
