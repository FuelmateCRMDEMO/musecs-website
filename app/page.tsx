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
  CheckCircle2,
  Clock,
  Sparkles,
  FileCheck
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

      {/* Navigation Header */}
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
                  Premier South African Software Engineering Consultancy
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
                Muse Consultancy Services (MuseCS) delivers bespoke custom software engineering, legacy system modernisation, and senior software developer team augmentation to ambitious organisations across South Africa and globally.
              </motion.p>
              
              {/* Primary Action CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 pt-2"
              >
                <div className="flex flex-wrap items-center justify-start gap-4">
                  <Link 
                    href="/contact?type=software-development" 
                    className="px-8 py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
                  >
                    Discuss Software Development Requirement <ArrowRight size={16} />
                  </Link>
                  <Link 
                    href="/contact?type=team-augmentation" 
                    className="px-8 py-4 bg-black/80 hover:bg-white/10 text-white border border-gray-800 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                  >
                    Discuss Team Augmentation <Users size={16} />
                  </Link>
                </div>

                <div className="flex items-center gap-6 font-mono text-[11px] text-gray-400">
                  <Link href="/software-development" className="hover:text-accent transition-colors flex items-center gap-1">
                    Explore Software Development Hub <ChevronRight size={12} />
                  </Link>
                  <span className="text-gray-700">|</span>
                  <Link href="/software-development-team-augmentation" className="hover:text-accent transition-colors flex items-center gap-1">
                    Explore Team Augmentation Hub <ChevronRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Commercial Pillar Highlight Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="p-6 bg-[#080808] border border-gray-800 hover:border-accent transition-all block group space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">Commercial Path A</span>
                  <Code2 size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  Software Development
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Turnkey custom engineering, cloud microservices, legacy refactoring, and AI systems built under strict TDD and DDD standards.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-800/80">
                  <Link href="/software-development" className="text-[11px] font-mono text-gray-400 hover:text-white">
                    View Capabilities
                  </Link>
                  <Link href="/contact?type=software-development" className="text-[11px] font-mono font-bold text-accent flex items-center gap-1">
                    Submit Spec <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="p-6 bg-[#080808] border border-gray-800 hover:border-accent transition-all block group space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">Commercial Path B</span>
                  <Users size={20} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                  Team Augmentation
                </h3>
                <p className="text-xs text-gray-400 font-light leading-relaxed">
                  Inject senior South African developers, tech leads, and dedicated engineering squads into your agile workflow in under 5 days.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-800/80">
                  <Link href="/software-development-team-augmentation" className="text-[11px] font-mono text-gray-400 hover:text-white">
                    View Developer Roles
                  </Link>
                  <Link href="/contact?type=team-augmentation" className="text-[11px] font-mono font-bold text-accent flex items-center gap-1">
                    Request Developers <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Commercial Proof & Methodology Highlights */}
        <section id="about" className="py-20 px-6 relative border-t border-gray-800 bg-[#080808]/60">
          <div className="max-w-6xl mx-auto space-y-12">
             <div className="flex items-center justify-center gap-4">
                <div className="w-8 h-[1px] bg-accent"></div>
                <h2 className="text-xs font-bold font-mono uppercase tracking-widest text-accent">Our Commercial Engagement Promise</h2>
                <div className="w-8 h-[1px] bg-accent"></div>
             </div>
             <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-light text-center max-w-4xl mx-auto">
               We combine <span className="text-white font-medium">Domain-Driven Design (DDD)</span>, test-driven development (TDD), and cloud-native microservices to guarantee sub-100ms API throughput and zero technical debt for South African enterprises.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-xs text-gray-400">
               <div className="p-5 bg-black border border-gray-800 space-y-1.5">
                 <span className="text-accent font-bold text-sm block">10+ YEARS</span>
                 <p className="text-gray-300 font-sans text-xs">Enterprise Software Delivery Experience</p>
               </div>
               <div className="p-5 bg-black border border-gray-800 space-y-1.5">
                 <span className="text-accent font-bold text-sm block">&lt; 5 DAYS</span>
                 <p className="text-gray-300 font-sans text-xs">Developer Team Augmentation Onboarding SLA</p>
               </div>
               <div className="p-5 bg-black border border-gray-800 space-y-1.5">
                 <span className="text-accent font-bold text-sm block">100% POPIA</span>
                 <p className="text-gray-300 font-sans text-xs">Compliant South African Data Security</p>
               </div>
               <div className="p-5 bg-black border border-gray-800 space-y-1.5">
                 <span className="text-accent font-bold text-sm block">4-HOUR SLA</span>
                 <p className="text-gray-300 font-sans text-xs">Senior Architect Initial Response Time</p>
               </div>
             </div>
          </div>
        </section>

        {/* Differentiated Engagement Journeys (How it Works) */}
        <section className="py-24 px-6 border-t border-gray-800 bg-black">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent">
                Transparent Engagement Models
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
                How Commercial Engagements Work at MuseCS
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed">
                Whether you need a complete software platform engineered or senior developers embedded into your agile sprints, our delivery processes are structured, predictable, and transparent.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Pathway A Process */}
              <div className="p-8 bg-[#080808] border border-gray-800 space-y-8">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest">Journey Path A</span>
                    <h3 className="text-2xl font-bold text-white">Software Development Process</h3>
                  </div>
                  <Code2 size={28} className="text-accent" />
                </div>

                <div className="space-y-6 font-mono text-xs">
                  {[
                    { step: '01', title: 'Domain Discovery & Spec Review', desc: 'Review of technical requirements, domain boundaries, and POPIA/security constraints.' },
                    { step: '02', title: 'Architectural Blueprinting', desc: 'Designing microservice interfaces, schema models, API gateways, and CI/CD pipelines.' },
                    { step: '03', title: 'Iterative TDD Sprints', desc: 'Bi-weekly working software releases written under strict TDD with >85% test coverage.' },
                    { step: '04', title: 'Production Handover & SLA', desc: 'Zero-downtime deployment, automated telemetry monitoring setup, and codebase ownership.' }
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 items-start">
                      <span className="text-accent font-bold text-sm bg-accent/10 border border-accent/20 px-2.5 py-1 shrink-0">{s.step}</span>
                      <div className="space-y-1 font-sans">
                        <h4 className="text-white font-semibold text-sm">{s.title}</h4>
                        <p className="text-gray-400 text-xs font-light">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <Link 
                    href="/contact?type=software-development" 
                    className="w-full py-3.5 bg-accent hover:bg-cyan-300 text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all font-mono"
                  >
                    Discuss Software Requirement <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Pathway B Process */}
              <div className="p-8 bg-[#080808] border border-gray-800 space-y-8">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest">Journey Path B</span>
                    <h3 className="text-2xl font-bold text-white">Team Augmentation Process</h3>
                  </div>
                  <Users size={28} className="text-accent" />
                </div>

                <div className="space-y-6 font-mono text-xs">
                  {[
                    { step: '01', title: 'Technical Role & Stack Definition', desc: 'Specify exact developer seniorities, frameworks, duration, and squad headcount.' },
                    { step: '02', title: 'Vetted Candidate Matching (<48h)', desc: 'Selection of top 1% South African developers evaluated on live coding and architecture.' },
                    { step: '03', title: 'Client Technical Interview', desc: 'Interview and code review with your engineering managers to ensure culture & technical fit.' },
                    { step: '04', title: 'Seamless Onboarding (<5 Days)', desc: 'Rapid security clearance, IDE setup, and integration into your daily standups and Jira.' }
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 items-start">
                      <span className="text-accent font-bold text-sm bg-accent/10 border border-accent/20 px-2.5 py-1 shrink-0">{s.step}</span>
                      <div className="space-y-1 font-sans">
                        <h4 className="text-white font-semibold text-sm">{s.title}</h4>
                        <p className="text-gray-400 text-xs font-light">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <Link 
                    href="/contact?type=team-augmentation" 
                    className="w-full py-3.5 bg-black border border-gray-800 hover:border-accent text-white hover:text-accent font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all font-mono"
                  >
                    Discuss Developer Requirements <Users size={14} />
                  </Link>
                </div>
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
              ].map((tech) => (
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
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest mb-8">Direct Technical Contact // Sandton</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-6">Ready to scale your<br/>engineering velocity?</h2>
              <p className="text-gray-300 font-light max-w-md mb-8">Connect directly with practicing software architects in Sandton, Johannesburg to evaluate your software requirement or developer team needs.</p>
              
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
