'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Zap, 
  TrendingUp, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  X, 
  Send, 
  Briefcase, 
  ShieldCheck, 
  Terminal,
  Globe,
  Layers,
  Sparkles,
  ArrowRight,
  UserCheck
} from 'lucide-react';

interface Role {
  id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  stack: string[];
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

const OPEN_ROLES: Role[] = [
  {
    id: 'senior-fullstack',
    title: 'Senior Full-Stack Engineer',
    location: 'South Africa (Remote / Hybrid)',
    type: 'Full-Time',
    experience: '5+ Years Experience',
    stack: ['Next.js 15', 'React 19', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    summary: 'Architect and build high-performance, enterprise-grade web applications for enterprise clients using cutting-edge full-stack TypeScript tools.',
    responsibilities: [
      'Design, build, and maintain scalable full-stack web applications using Next.js, React, and Supabase.',
      'Architect robust database schemas, RLS security policies, and serverless edge API routes.',
      'Collaborate directly with client CTOs and engineering directors in agile, low-friction delivery cells.',
      'Champion clean code standards, automated testing pipelines, and optimal Web Vitals performance.'
    ],
    requirements: [
      '5+ years of production experience with TypeScript, React, and modern Node/Next.js frameworks.',
      'Strong hands-on mastery of relational databases (PostgreSQL, Supabase) and ORMs (Drizzle, Prisma).',
      'Proven ability to operate autonomously, ship production code quickly, and communicate technical trade-offs clearly.',
      'Experience with CI/CD deployment pipelines (Vercel, GitHub Actions, Docker).'
    ],
    niceToHave: [
      'Experience with AI/LLM SDK integrations (@google/genai, OpenAI API).',
      'Prior consulting or client-facing team augmentation experience.'
    ]
  },
  {
    id: 'software-architect-tech-lead',
    title: 'Software Architecture & Tech Lead',
    location: 'Johannesburg / Cape Town (Hybrid)',
    type: 'Full-Time',
    experience: '8+ Years Experience',
    stack: ['Enterprise Architecture', 'Cloud Native (AWS/Azure)', 'Microservices', 'System Design', 'Kubernetes'],
    summary: 'Lead high-impact engineering squads, guide client digital transformation strategies, and refactor mission-critical legacy architectures into modern cloud platforms.',
    responsibilities: [
      'Lead technical discovery, domain modeling, and system design for enterprise modernization initiatives.',
      'Guide cross-functional engineering cells, conducting code reviews and mentoring senior developers.',
      'Implement strangler fig patterns and microservice decouplings for legacy monoliths with zero downtime.',
      'Define non-functional requirements including security, telemetry, observability, and sub-100ms latency benchmarks.'
    ],
    requirements: [
      '8+ years of software development experience with at least 3 years in a Tech Lead or Principal Architect capacity.',
      'Deep architectural knowledge of distributed systems, domain-driven design (DDD), and cloud-native infrastructure.',
      'Demonstrated expertise in system performance profiling, security audits, and fault-tolerant event streams.',
      'Strong executive communication skills to articulate technical roadmaps to non-technical stakeholders.'
    ],
    niceToHave: [
      'Cloud certification (AWS Solutions Architect, Azure Solutions Architect, or GCP Professional).',
      'Experience leading multi-disciplinary engineering pods across South Africa and international regions.'
    ]
  },
  {
    id: 'ai-integration-engineer',
    title: 'AI Integration & Workflow Engineer',
    location: 'South Africa (Remote)',
    type: 'Full-Time',
    experience: '4+ Years Experience',
    stack: ['Python', 'TypeScript', 'Gemini API', 'LangChain/LlamaIndex', 'Vector DBs (Pinecone/pgvector)', 'FastAPI'],
    summary: 'Build next-generation generative AI workflows, agentic automation systems, and custom RAG pipelines integrated into enterprise software platforms.',
    responsibilities: [
      'Design and deploy production-ready AI pipelines leveraging state-of-the-art LLMs (Gemini, Claude, GPT-4).',
      'Implement semantic search, vector embeddings, document chunking, and Retrieval-Augmented Generation (RAG) platforms.',
      'Develop robust evaluation frameworks, guardrails, and prompt engineering chains for enterprise clients.',
      'Integrate AI services into existing web backends with fallback mechanisms and strict latency constraints.'
    ],
    requirements: [
      '4+ years in backend/AI software engineering with hands-on experience deploying LLM applications to production.',
      'Proficiency with Python and TypeScript AI ecosystems (LangChain, LlamaIndex, Vercel AI SDK).',
      'Experience working with vector databases (Pinecone, Qdrant, or pgvector).',
      'Solid understanding of fine-tuning, embeddings, function calling, and agentic loop architectures.'
    ],
    niceToHave: [
      'Experience building multimodal AI applications (speech, vision, real-time audio streams).',
      'Published research or open-source contributions in machine learning or NLP tools.'
    ]
  }
];

export function CareersSection() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [submittedRole, setSubmittedRole] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    portfolioUrl: '',
    coverNote: ''
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      setSubmittedRole(selectedRole.title);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedinUrl: '',
        portfolioUrl: '',
        coverNote: ''
      });
      setTimeout(() => {
        setSelectedRole(null);
        setSubmittedRole(null);
      }, 3500);
    }
  };

  return (
    <section id="careers" className="py-32 px-6 relative bg-slate-950 border-t border-gray-800 overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =================================================== */}
        {/* SECTION 1: HERO & EVP MANIFESTO                     */}
        {/* =================================================== */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
              Careers // Employee Value Proposition
            </span>
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white tracking-tight mb-6"
          >
            Build Without <span className="font-bold text-accent">Boundaries.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-light max-w-3xl text-lg md:text-xl leading-relaxed mb-12"
          >
            At Muse Consultancy Services, we reject the notion that software engineers are just &quot;resources&quot; to be slotted into a ticket queue. We build nimble, high-impact engineering cells that solve complex architectural challenges for ambitious enterprise clients.
          </motion.p>

          {/* 4 Core EVP Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-black/60 border border-gray-800 hover:border-accent/60 transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                Modern Stack Mastery
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Say goodbye to maintaining dusty, unmaintainable legacy monoliths. At Muse, you work with modern, high-performance stacks—including Next.js, React, Supabase, and full-scale AI development ecosystems.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-black/60 border border-gray-800 hover:border-accent/60 transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                Autonomy Over Bureaucracy
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                We respect senior talent. You won&apos;t find endless committee meetings or red tape here. We give you clear outcomes, the right tools, and the freedom to architect elegant solutions.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-black/60 border border-gray-800 hover:border-accent/60 transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                Continuous Growth
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Working across diverse, challenging client environments accelerates your technical career in 2 years what traditional corporate roles achieve in 5.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-black/60 border border-gray-800 hover:border-accent/60 transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-accent transition-colors">
                Outcomes Over Face Time
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                We care about what you build and the value you deliver, not how many hours you sit at a desk. We offer flexible, hybrid, and remote-first operational models designed for high performers.
              </p>
            </motion.div>

          </div>
        </div>


        {/* =================================================== */}
        {/* SECTION 2: HOW WE HIRE                             */}
        {/* =================================================== */}
        <div className="mb-24 p-8 md:p-14 bg-gradient-to-r from-black via-[#080808] to-slate-950 border border-gray-800 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Terminal size={18} className="text-accent" />
              <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
                Our Hiring Philosophy // Pragmatic Evaluation
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">
              How We Hire: <span className="text-accent font-normal">No LeetCode Puzzles.</span>
            </h3>

            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg mb-8">
              We skip rigid algorithmic whiteboard tests in favor of collaborative architectural discussions and real-world problem-solving. We evaluate engineers on actual software craft: domain design, code readability, API architecture, and asynchronous fault tolerance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800/80">
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent font-bold">STAGE 01</span>
                <h4 className="text-white font-medium text-sm">Architectural Conversation</h4>
                <p className="text-xs text-gray-400 font-light">30-min talk on past engineering decisions, trade-offs, and system boundaries.</p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent font-bold">STAGE 02</span>
                <h4 className="text-white font-medium text-sm">Real-World Code Review</h4>
                <p className="text-xs text-gray-400 font-light">Collaborative PR review on actual production logic—identifying bugs and refactoring.</p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent font-bold">STAGE 03</span>
                <h4 className="text-white font-medium text-sm">System Design & Culture</h4>
                <p className="text-xs text-gray-400 font-light">Practical whiteboard canvas design for scaling microservices or cloud components.</p>
              </div>
            </div>
          </div>
        </div>


        {/* =================================================== */}
        {/* SECTION 3: OPEN ROLES                              */}
        {/* =================================================== */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={16} className="text-accent" />
                <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
                  Active Opportunities // Join Our Engineering Squads
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-white">
                Open <span className="font-bold text-accent">Positions.</span>
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-400 bg-black/40 border border-gray-800 px-4 py-2 self-start md:self-auto">
              3 Active Technical Headcounts
            </span>
          </div>

          <div className="space-y-6">
            {OPEN_ROLES.map((role) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-[#080808] border border-gray-800 hover:border-accent/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-8 group"
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-accent uppercase letter-spacing-widest px-3 py-1 bg-accent/10 border border-accent/20">
                      {role.type}
                    </span>
                    <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                      <Globe size={12} className="text-gray-500" /> {role.location}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      • {role.experience}
                    </span>
                  </div>

                  <h4 className="text-2xl font-medium text-white group-hover:text-accent transition-colors">
                    {role.title}
                  </h4>

                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {role.stack.map((tech) => (
                      <span key={tech} className="text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-gray-800 px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <button
                    onClick={() => setSelectedRole(role)}
                    className="w-full md:w-auto px-6 py-3.5 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.2)]"
                  >
                    View Details & Apply <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* =================================================== */}
      {/* ROLE DETAILS & APPLICATION MODAL                     */}
      {/* =================================================== */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-gray-800 shadow-2xl flex flex-col overflow-hidden relative"
            >
              {/* Modal Top Nav Bar */}
              <div className="px-6 py-4 border-b border-gray-800 bg-[#050505] flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest px-2.5 py-1 bg-accent/10 border border-accent/20">
                    {selectedRole.type}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {selectedRole.location}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedRole(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 overflow-y-auto space-y-8 custom-scrollbar">
                
                {submittedRole ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-accent/20 text-accent border border-accent rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-light text-white">Application Received!</h3>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      Thank you for applying for the <strong className="text-white">{submittedRole}</strong> role at Muse Consultancy Services. Our engineering leadership team will review your application and reach out within 48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div>
                      <h3 className="text-3xl font-light text-white mb-2">{selectedRole.title}</h3>
                      <p className="text-sm text-gray-400 font-light">{selectedRole.summary}</p>
                    </div>

                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-800">
                      {selectedRole.stack.map((item) => (
                        <span key={item} className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-3 py-1">
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest flex items-center gap-2">
                        <Layers size={14} /> Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {selectedRole.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-gray-300 font-light flex items-start gap-2.5">
                            <span className="text-accent mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Requirements */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest flex items-center gap-2">
                        <ShieldCheck size={14} /> Requirements & Experience
                      </h4>
                      <ul className="space-y-2">
                        {selectedRole.requirements.map((req, i) => (
                          <li key={i} className="text-sm text-gray-300 font-light flex items-start gap-2.5">
                            <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Application Form */}
                    <div className="pt-8 border-t border-gray-800">
                      <h4 className="text-xl font-light text-white mb-6">
                        Apply for <span className="text-accent">{selectedRole.title}</span>
                      </h4>

                      <form onSubmit={handleApplySubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Full Name *</label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g. Sarah Jenkins"
                              className="w-full bg-black/60 border border-gray-800 focus:border-accent px-4 py-3 text-sm text-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Email Address *</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="e.g. sarah@example.com"
                              className="w-full bg-black/60 border border-gray-800 focus:border-accent px-4 py-3 text-sm text-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+27 82 123 4567"
                              className="w-full bg-black/60 border border-gray-800 focus:border-accent px-4 py-3 text-sm text-white focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-mono text-gray-400 mb-1">LinkedIn / GitHub URL *</label>
                            <input
                              type="url"
                              required
                              value={formData.linkedinUrl}
                              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                              placeholder="https://linkedin.com/in/username"
                              className="w-full bg-black/60 border border-gray-800 focus:border-accent px-4 py-3 text-sm text-white focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-400 mb-1">Brief Introduction & Key Achievements</label>
                          <textarea
                            rows={3}
                            value={formData.coverNote}
                            onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                            placeholder="Tell us briefly about the architecture challenges you've solved recently..."
                            className="w-full bg-black/60 border border-gray-800 focus:border-accent px-4 py-3 text-sm text-white focus:outline-none"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.3)]"
                        >
                          Submit Application <Send size={14} />
                        </button>
                      </form>
                    </div>
                  </>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
