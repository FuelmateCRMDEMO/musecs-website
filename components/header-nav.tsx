'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Users, 
  Layers, 
  Cpu, 
  Database, 
  BookOpen, 
  BarChart3, 
  Calculator, 
  Building2, 
  PhoneCall, 
  Briefcase
} from 'lucide-react';

export function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [swDropdown, setSwDropdown] = useState(false);
  const [taDropdown, setTaDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border-2 border-accent flex items-center justify-center rotate-45 group-hover:bg-accent/10 transition-colors">
            <div className="w-3 h-3 bg-accent -rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter uppercase text-white group-hover:text-accent transition-colors">
              MUSE
            </span>
            <span className="text-[9px] font-mono tracking-widest uppercase text-gray-400 -mt-1">
              Consultancy Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest text-gray-300">
          
          {/* Software Development Dropdown */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setSwDropdown(true)}
            onMouseLeave={() => setSwDropdown(false)}
          >
            <Link 
              href="/software-development" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors py-2"
            >
              Software Dev <ChevronDown size={14} className={`transition-transform duration-200 ${swDropdown ? 'rotate-180 text-accent' : ''}`} />
            </Link>

            {swDropdown && (
              <div className="absolute top-full left-0 w-80 bg-[#0A0A0A] border border-gray-800 shadow-2xl p-4 grid grid-cols-1 gap-1 z-50 text-xs font-normal normal-case">
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 px-3 pt-1 font-mono">
                  Software Authority Pillar
                </div>
                <Link 
                  href="/software-development" 
                  className="p-2.5 rounded hover:bg-accent/10 hover:text-accent flex items-center gap-2.5 text-gray-200 font-semibold"
                >
                  <Code2 size={16} className="text-accent" /> Software Development Hub
                </Link>
                <Link href="/software-development/custom-software-development" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Custom Software Development
                </Link>
                <Link href="/software-development/software-architecture" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Software Architecture & Design
                </Link>
                <Link href="/software-development/enterprise-software-development" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Enterprise Software Systems
                </Link>
                <Link href="/software-development/ai-software-development" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  AI & ML Engineering
                </Link>
                <Link href="/software-development/cloud-software-development" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Cloud Software Engineering
                </Link>
                <Link href="/software-development/legacy-modernisation" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Legacy System Modernisation
                </Link>
                <Link href="/software-development/consulting" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Software Engineering Consulting
                </Link>
                <Link href="/software-development/company" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Our Engineering Methodology
                </Link>
              </div>
            )}
          </div>

          {/* Team Augmentation Dropdown */}
          <div 
            className="relative py-6"
            onMouseEnter={() => setTaDropdown(true)}
            onMouseLeave={() => setTaDropdown(false)}
          >
            <Link 
              href="/software-development-team-augmentation" 
              className="flex items-center gap-1.5 hover:text-accent transition-colors py-2"
            >
              Team Augmentation <ChevronDown size={14} className={`transition-transform duration-200 ${taDropdown ? 'rotate-180 text-accent' : ''}`} />
            </Link>

            {taDropdown && (
              <div className="absolute top-full left-0 w-80 bg-[#0A0A0A] border border-gray-800 shadow-2xl p-4 grid grid-cols-1 gap-1 z-50 text-xs font-normal normal-case">
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 px-3 pt-1 font-mono">
                  Talent Capability Pillar
                </div>
                <Link 
                  href="/software-development-team-augmentation" 
                  className="p-2.5 rounded hover:bg-accent/10 hover:text-accent flex items-center gap-2.5 text-gray-200 font-semibold"
                >
                  <Users size={16} className="text-accent" /> Team Augmentation Hub
                </Link>
                <Link href="/software-development-team-augmentation/software-developer-augmentation" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Software Developer Augmentation
                </Link>
                <Link href="/software-development-team-augmentation/dedicated-development-teams" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Dedicated Development Teams
                </Link>
                <Link href="/software-development-team-augmentation/technical-team-augmentation" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Technical Team Augmentation
                </Link>
                <Link href="/software-development-team-augmentation/remote-development-teams" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Remote Engineering Cells
                </Link>
                <Link href="/software-development-team-augmentation/team-augmentation-vs-outsourcing" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Augmentation vs Outsourcing
                </Link>
                <Link href="/software-development-team-augmentation/team-augmentation-vs-permanent-hiring" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Augmentation vs Hiring
                </Link>
                <Link href="/software-development-team-augmentation/team-augmentation-cost" className="p-2 rounded hover:bg-white/5 text-gray-300 hover:text-white pl-8">
                  Team Augmentation Cost Guide
                </Link>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="hover:text-accent transition-colors">
            Case Studies
          </Link>
          <Link href="/industries" className="hover:text-accent transition-colors">
            Industries
          </Link>
          <Link href="/insights" className="hover:text-accent transition-colors">
            Insights
          </Link>
          <Link href="/research" className="hover:text-accent transition-colors">
            Research
          </Link>
          <Link href="/tools" className="hover:text-accent transition-colors">
            Tools
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/careers" className="hover:text-accent transition-colors">
            Careers
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-5 py-2.5 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-[11px] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.2)]"
          >
            Contact Experts
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-gray-800 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="space-y-3 font-mono text-xs">
            <div className="text-accent font-bold uppercase tracking-widest">Navigation</div>
            <Link onClick={() => setMobileOpen(false)} href="/" className="block py-1.5 text-gray-200">
              Home
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/software-development" className="block py-1.5 text-accent font-semibold">
              Software Development Hub
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/software-development-team-augmentation" className="block py-1.5 text-accent font-semibold">
              Team Augmentation Hub
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/case-studies" className="block py-1.5 text-gray-200">
              Case Studies
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/industries" className="block py-1.5 text-gray-200">
              Industries
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/insights" className="block py-1.5 text-gray-200">
              Insights & Knowledge Centre
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/research" className="block py-1.5 text-gray-200">
              Research & Reports
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/tools" className="block py-1.5 text-gray-200">
              Calculators & Tools
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/about" className="block py-1.5 text-gray-200">
              About MuseCS
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/careers" className="block py-1.5 text-gray-200">
              Careers
            </Link>
            <Link onClick={() => setMobileOpen(false)} href="/contact" className="block py-1.5 text-gray-200">
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <Link 
              onClick={() => setMobileOpen(false)}
              href="/contact" 
              className="w-full py-3 bg-accent text-black font-bold uppercase tracking-widest text-center text-xs block"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
