import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#030303] text-gray-400 text-xs border-t border-gray-800 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 border-2 border-accent flex items-center justify-center rotate-45">
              <div className="w-2.5 h-2.5 bg-accent -rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">Muse</span>
          </Link>
          <p className="text-gray-400 font-light leading-relaxed max-w-sm text-sm">
            Muse Consultancy Services is a premier South African software engineering consultancy. We build custom software solutions and supply dedicated development teams to ambitious enterprise organizations across Africa and globally.
          </p>
          <div className="space-y-2 font-mono text-[11px] text-gray-400 pt-2">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" />
              <span>Sandton City, West Tower, 5th Floor, Johannesburg, South Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <span>+27 11 881 5460 / +27 71 925 5128</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <span>sales@musecs.com</span>
            </div>
          </div>
        </div>

        {/* Software Development Links */}
        <div className="space-y-3 font-mono text-[11px]">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2 text-accent">
            Software Development
          </h4>
          <ul className="space-y-2">
            <li><Link href="/software-development" className="hover:text-white transition-colors">Development Hub</Link></li>
            <li><Link href="/software-development/custom-software-development" className="hover:text-white transition-colors">Custom Software</Link></li>
            <li><Link href="/software-development/software-architecture" className="hover:text-white transition-colors">Software Architecture</Link></li>
            <li><Link href="/software-development/enterprise-software-development" className="hover:text-white transition-colors">Enterprise Systems</Link></li>
            <li><Link href="/software-development/ai-software-development" className="hover:text-white transition-colors">AI & ML Engineering</Link></li>
            <li><Link href="/software-development/cloud-software-development" className="hover:text-white transition-colors">Cloud Systems</Link></li>
            <li><Link href="/software-development/legacy-modernisation" className="hover:text-white transition-colors">Legacy Modernisation</Link></li>
            <li><Link href="/software-development/consulting" className="hover:text-white transition-colors">Engineering Consulting</Link></li>
          </ul>
        </div>

        {/* Team Augmentation Links */}
        <div className="space-y-3 font-mono text-[11px]">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2 text-accent">
            Team Augmentation
          </h4>
          <ul className="space-y-2">
            <li><Link href="/software-development-team-augmentation" className="hover:text-white transition-colors">Augmentation Hub</Link></li>
            <li><Link href="/software-development-team-augmentation/software-developer-augmentation" className="hover:text-white transition-colors">Developer Augmentation</Link></li>
            <li><Link href="/software-development-team-augmentation/dedicated-development-teams" className="hover:text-white transition-colors">Dedicated Teams</Link></li>
            <li><Link href="/software-development-team-augmentation/technical-team-augmentation" className="hover:text-white transition-colors">Technical Augmentation</Link></li>
            <li><Link href="/software-development-team-augmentation/remote-development-teams" className="hover:text-white transition-colors">Remote Engineering</Link></li>
            <li><Link href="/software-development-team-augmentation/team-augmentation-vs-outsourcing" className="hover:text-white transition-colors">Augmentation vs Outsourcing</Link></li>
            <li><Link href="/software-development-team-augmentation/team-augmentation-cost" className="hover:text-white transition-colors">Augmentation Cost Guide</Link></li>
          </ul>
        </div>

        {/* Knowledge & Company Links */}
        <div className="space-y-3 font-mono text-[11px]">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2 text-accent">
            Knowledge & Trust
          </h4>
          <ul className="space-y-2">
            <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="/industries" className="hover:text-white transition-colors">Industry Solutions</Link></li>
            <li><Link href="/insights" className="hover:text-white transition-colors">Engineering Insights</Link></li>
            <li><Link href="/research" className="hover:text-white transition-colors">Research Reports</Link></li>
            <li><Link href="/tools" className="hover:text-white transition-colors">Calculators & Tools</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About MuseCS</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase font-mono tracking-widest">
        <span>&copy; {new Date().getFullYear()} Muse Consultancy Services (Pty) Ltd. All Rights Reserved.</span>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <span className="text-accent">Johannesburg // Cape Town // Global</span>
        </div>
      </div>
    </footer>
  );
}
