'use client';

import { motion } from 'motion/react';
import { 
  Code2, 
  Cloud, 
  Cpu, 
  Database, 
  Layers, 
  TerminalSquare, 
  ChevronRight,
  Mail,
  Phone,
  Linkedin,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

import { CaseStudiesSection } from '@/components/case-studies';
import { MagneticServiceCard } from '@/components/magnetic-service-card';
import { InsightsSection } from '@/components/insights-section';
import { CareersSection } from '@/components/careers-section';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';
import { SchemaScript } from '@/components/schema-script';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema';

export default function Home() {
  const orgSchema = generateOrganizationSchema();
  const siteSchema = generateWebSiteSchema();

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-accent/30 selection:text-white overflow-hidden relative">
      <SchemaScript schema={[orgSchema, siteSchema]} />

      {/* Dynamic Tech Glow Elements */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] tech-glow rounded-full z-0 pointer-events-none"></div>
      <div className="absolute -bottom-60 -left-20 w-[800px] h-[800px] tech-glow rounded-full opacity-50 z-0 pointer-events-none"></div>
      
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]"></div>
      </div>

      {/* Modern Unified Navigation Header */}
      <HeaderNav />

      <main className="relative z-10 pt-8">
        
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 overflow-hidden pt-12 pb-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 space-y-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-[1px] bg-accent"></div>
                <span className="text-accent text-xs font-mono font-bold uppercase tracking-widest">
                  South African Software Engineering Consultancy
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-5xl md:text-[76px] leading-[0.95] font-light tracking-tight text-white"
              >
                Enterprise <br className="hidden md:block"/>
                <span className="font-bold text-accent text-glow">Software Development</span> & Team Augmentation.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light"
              >
                Muse Consultancy Services (MuseCS) supplies senior software engineering capability, cloud microservice architecture, and dedicated development teams to ambitious organisations across South Africa and globally.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center justify-start gap-4 pt-4"
              >
                <Link 
                  href="/software-development" 
                  className="px-8 py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
                >
                  Software Development Hub <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/software-development-team-augmentation" 
                  className="px-8 py-4 bg-black/80 hover:bg-white/10 text-white border border-gray-800 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                >
                  Team Augmentation Hub <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            
            {/* Primary Pillars Highlight Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-4 space-y-4"
            >
              <Link 
                href="/software-development"
                className="p-6 bg-[#080808] border border-gray-800 hover:border-accent transition-all block group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">Pillar 01</span>
                  <Code2 size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  Software Development
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Bespoke custom software engineering, legacy system modernisation, microservice architecture, and AI integration.
                </p>
                <span className="text-xs font-mono font-bold text-accent flex items-center gap-1 pt-1">
                  Explore Pillar <ChevronRight size={14} />
                </span>
              </Link>

              <Link 
                href="/software-development-team-augmentation"
                className="p-6 bg-[#080808] border border-gray-800 hover:border-accent transition-all block group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">Pillar 02</span>
                  <Users size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  Team Augmentation
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Inject senior South African developers, architects, and dedicated squads into your agile workflow in under 5 days.
                </p>
                <span className="text-xs font-mono font-bold text-accent flex items-center gap-1 pt-1">
                  Explore Pillar <ChevronRight size={14} />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Executive Authority & Methodology Section */}
        <section id="about" className="py-24 px-6 relative border-t border-gray-800 bg-[#080808]/60">
          <div className="max-w-5xl mx-auto space-y-8">
             <div className="flex items-center justify-center gap-4">
                <div className="w-8 h-[1px] bg-accent"></div>
                <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-accent">Our Engineering Methodology</h2>
                <div className="w-8 h-[1px] bg-accent"></div>
             </div>
             <p className="text-2xl md:text-4xl text-gray-300 leading-relaxed font-light text-center">
               We combine <span className="text-white font-medium">Domain-Driven Design (DDD)</span>, test-driven development (TDD), and cloud-native microservices to reshape and enhance your software development life cycle. Our senior South African architects fuel every stage of execution.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 font-mono text-xs text-gray-400">
               <div className="p-4 bg-black border border-gray-800 space-y-1">
                 <span className="text-accent font-bold">10+ YEARS</span>
                 <p className="text-gray-300 font-sans text-xs">Enterprise Software Delivery Experience</p>
               </div>
               <div className="p-4 bg-black border border-gray-800 space-y-1">
                 <span className="text-accent font-bold">UNDER 5 DAYS</span>
                 <p className="text-gray-300 font-sans text-xs">Developer Team Augboarding Time</p>
               </div>
               <div className="p-4 bg-black border border-gray-800 space-y-1">
                 <span className="text-accent font-bold">100% POPIA</span>
                 <p className="text-gray-300 font-sans text-xs">Compliant South African Data Security</p>
               </div>
             </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative z-10 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Code2 size={24} />,
                title: "Custom Software Engineering",
                desc: "Tailor-made web, mobile, and cloud applications built with TypeScript, React, Java Spring Boot, and Python.",
                num: "01",
                link: "/software-development/custom-software-development"
              },
              {
                icon: <Users size={24} />,
                title: "Team Augmentation",
                desc: "Scale your engineering capacity with elite senior developers and dedicated squads integrated into your ceremonies.",
                num: "02",
                link: "/software-development-team-augmentation"
              },
              {
                icon: <Layers size={24} />,
                title: "System Modernisation",
                desc: "Decompose legacy mainframes and COBOL ledgers into resilient microservices with zero operational downtime.",
                num: "03",
                link: "/software-development/legacy-modernisation"
              },
              {
                icon: <Cpu size={24} />,
                title: "AI & ML Systems",
                desc: "Production RAG search engines, custom LLM fine-tuning, vector databases, and automated document workflows.",
                num: "04",
                link: "/software-development/ai-software-development"
              },
              {
                icon: <Cloud size={24} />,
                title: "Cloud Infrastructure",
                desc: "Seamless cloud development and Kubernetes orchestration across AWS, Azure, and Google Cloud environments.",
                num: "05",
                link: "/software-development/cloud-software-development"
              },
              {
                icon: <TerminalSquare size={24} />,
                title: "Software Architecture Advisory",
                desc: "High-level code health reviews, system security audits, and CTO-level architectural roadmapping.",
                num: "06",
                link: "/software-development/software-architecture"
              }
            ].map((service, i) => (
              <MagneticServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        {/* Core Technologies */}
        <section id="tech" className="py-24 px-6 relative overflow-hidden border-t border-gray-800">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col items-start mb-12">
              <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-2">Core Technology Stack</span>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Enterprise Standard Frameworks</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-800 border border-gray-800">
              {[
                "Java 21", "Spring Boot", "TypeScript", "Next.js 15", "React 19",
                "Python", "PostgreSQL", "Apache Kafka", "Docker", "Kubernetes",
                "AWS", "Azure", "Redis", "Terraform", "Gemini API"
              ].map((tech, i) => (
                <div 
                  key={tech}
                  className="flex items-center justify-center p-6 bg-[#050505] hover:bg-accent/5 transition-colors"
                >
                  <span className="font-mono text-gray-300 font-semibold text-xs uppercase tracking-wider text-center">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <CaseStudiesSection />

        {/* Insights Section */}
        <InsightsSection />

        {/* Careers Section */}
        <CareersSection />

        {/* CTA Contact Section */}
        <section id="contact" className="relative z-10 grid grid-cols-1 md:grid-cols-2 border-t border-gray-800">
          <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-gray-800 flex flex-col justify-between bg-[#080808]">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-8">Action // Connect</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Ready to scale your<br/>engineering velocity?</h2>
              <p className="text-gray-300 font-light max-w-md mb-8">Connect directly with senior software architects in Sandton, Johannesburg.</p>
              
              <div className="flex flex-col space-y-4 font-mono text-xs">
                <a href="mailto:sales@musecs.com" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                  <Mail size={16} className="text-accent" />
                  <span>sales@musecs.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={16} className="text-accent" />
                  <span>+27 11 881 5460 / +27 71 925 5128</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12 md:p-20 flex flex-col justify-end bg-accent text-black transition-all hover:bg-cyan-300 cursor-pointer group relative overflow-hidden">
            <Link href="/contact" className="absolute inset-0 z-10 flex flex-col justify-end p-12 md:p-20">
              <div className="flex items-end justify-between">
                <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Schedule Technical<br/>Strategy Session</h3>
                <div className="w-16 h-16 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-accent transition-all">
                  <ChevronRight size={32} />
                </div>
              </div>
            </Link>
          </div>
        </section>

      </main>

      {/* Global Unified Footer */}
      <Footer />
    </div>
  );
}
