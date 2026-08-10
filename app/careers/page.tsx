import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CareersSection } from '@/components/careers-section';

export const metadata = {
  title: 'Careers | Muse Consultancy Services',
  description: 'Build Without Boundaries. Join our elite software engineering squads solving complex architectural challenges for ambitious enterprise clients.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-accent/30 selection:text-white relative overflow-hidden">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 border-2 border-accent flex items-center justify-center rotate-45">
              <div className="w-2.5 h-2.5 bg-accent -rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase text-white">Muse</span>
            <span className="text-xs text-gray-500 font-mono border-l border-gray-800 pl-3">Careers</span>
          </Link>

          <Link 
            href="/" 
            className="flex items-center gap-2 text-xs font-semibold uppercase letter-spacing-widest text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> Return to Home
          </Link>
        </div>
      </header>

      <main>
        <CareersSection />
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-900 text-[10px] text-gray-500 uppercase tracking-widest text-center bg-black">
        &copy; {new Date().getFullYear()} Muse Consultancy Services. All rights reserved.
      </footer>
    </div>
  );
}
