import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col justify-between">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-6 py-24 text-center space-y-8 my-auto">
        <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-xs font-bold uppercase tracking-widest">
          Error 404 // Resource Not Located
        </div>

        <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-lg font-light max-w-xl mx-auto leading-relaxed">
          The requested route does not exist or has been relocated within our enterprise architecture portal.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="px-6 py-3.5 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 font-mono"
          >
            <Home size={16} /> Return to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-black border border-gray-800 hover:border-accent text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2 font-mono"
          >
            Contact Architects
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
