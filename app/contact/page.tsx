import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact MuseCS | Book Technical Advisory & Software Developers',
  description: 'Connect directly with MuseCS software architects in Sandton, Johannesburg. Request a technical proposal, software cost estimate, or developer team augmentation.',
  alternates: {
    canonical: 'https://www.musecs.com/contact/'
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <HeaderNav />

      <section className="pt-16 pb-16 px-6 border-b border-gray-800 bg-gradient-to-b from-[#080808] to-[#050505]">
        <div className="max-w-7xl mx-auto space-y-6">
          <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} />
          
          <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs uppercase font-bold tracking-widest">
            Direct Technical Engagement
          </span>

          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Schedule a Technical Strategy Session
          </h1>

          <p className="text-xl text-gray-300 font-light max-w-4xl leading-relaxed">
            Speak directly with practicing software architects to review system architecture requirements, evaluate team augmentation capacity, or request a formal project proposal.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#080808] border border-gray-800 p-8 space-y-6">
          <h2 className="text-2xl font-light text-white border-b border-gray-800 pb-3">
            Request Technical Consultation
          </h2>

          <form className="space-y-6 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-300 uppercase tracking-widest block">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Johan van der Merwe" 
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-accent outline-none font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 uppercase tracking-widest block">Corporate Email *</label>
                <input 
                  type="email" 
                  required 
                  placeholder="johan@company.co.za" 
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-accent outline-none font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-300 uppercase tracking-widest block">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+27 82 000 0000" 
                  className="w-full bg-black border border-gray-800 p-3 text-white focus:border-accent outline-none font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 uppercase tracking-widest block">Primary Requirement *</label>
                <select className="w-full bg-black border border-gray-800 p-3 text-white focus:border-accent outline-none">
                  <option>Software Development Team Augmentation</option>
                  <option>Custom Software Engineering Project</option>
                  <option>Software Architecture & System Audit</option>
                  <option>Legacy System Modernisation</option>
                  <option>Dedicated Development Squad</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 uppercase tracking-widest block">Project Overview / Stack / Timeline *</label>
              <textarea 
                rows={5} 
                required 
                placeholder="Briefly describe your software project, target tech stack, or required developer headcount..." 
                className="w-full bg-black border border-gray-800 p-3 text-white focus:border-accent outline-none font-sans"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.2)]"
            >
              Submit Technical Request <Send size={16} />
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-[#080808] border border-gray-800 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
              <MapPin size={16} /> Office Location
            </h3>
            
            <div className="space-y-2 text-sm text-gray-300 font-light">
              <p className="font-semibold text-white">Muse Consultancy Services (Pty) Ltd</p>
              <p>Sandton City, West Tower, 5th Floor</p>
              <p>Sandton, Johannesburg, 2196</p>
              <p>South Africa</p>
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

          <div className="p-8 bg-black border border-gray-800 space-y-4">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">Response Guarantee</span>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              All technical inquiries submitted to MuseCS are reviewed directly by a Senior Software Architect. You will receive an initial technical response within 4 business hours.
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
