'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Server, 
  ShieldCheck, 
  BarChart3, 
  Sparkles, 
  Building2, 
  Activity, 
  Zap, 
  Clock, 
  TrendingUp, 
  X,
  ChevronRight,
  Filter,
  SlidersHorizontal
} from 'lucide-react';

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  subtitle: string;
  accentColor: string;
  challenge: string;
  solution: string[];
  impactMetrics: {
    label: string;
    value: string;
    subtext: string;
    trend?: string;
  }[];
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  beforeAfter: {
    metricName: string;
    before: string;
    after: string;
  }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'banking-modernization',
    client: 'Tier-1 International Bank',
    industry: 'FinTech & Banking',
    title: 'Core Banking Monolith Modernization & Microservices Transition',
    subtitle: 'Transforming a 20-year legacy mainframe into an event-driven microservices architecture handling 15M daily transactions.',
    accentColor: '#00D2FF',
    challenge: 'The bank’s legacy Java EE monolith processed over $4B in daily volume but suffered from 45-minute transaction batch processing delays, 72-hour release cycles, and fragile database locks during peak trading hours.',
    solution: [
      'Decomposed the monolith into 35+ domain-driven Spring Boot microservices deployed on active-active Kubernetes clusters.',
      'Implemented Apache Kafka event-streaming pipelines for real-time transaction ledger updates with zero data loss guarantees.',
      'Established an automated DevSecOps CI/CD workflow with canary deployments and instant rollback capabilities.'
    ],
    impactMetrics: [
      { label: 'Batch Processing Time', value: '85%', subtext: 'Reduced from 45 min to 6.5 min', trend: 'down' },
      { label: 'System Availability SLA', value: '99.999%', subtext: 'Zero un-planned downtime in 18 months', trend: 'up' },
      { label: 'Deployment Velocity', value: '3.5x', subtext: 'Daily automated releases vs bi-weekly', trend: 'up' },
      { label: 'Annual Cost Savings', value: '$12.4M', subtext: 'Reduced cloud footprint & legacy licensing', trend: 'up' }
    ],
    architectureHighlights: [
      { title: 'Event-Driven Core', description: 'Kafka-backed asynchronous message bus decoupled billing, fraud detection, and reporting engines.' },
      { title: 'Multi-Region Resilience', description: 'Active-active multi-region Kubernetes clusters with automated failover under 3 seconds.' },
      { title: 'Zero-Trust Security', description: 'mTLS encryption between microservices with automated secret rotation and HSM integration.' }
    ],
    techStack: ['Java 21', 'Spring Boot', 'Kubernetes', 'Kafka', 'PostgreSQL', 'AWS'],
    quote: {
      text: "Muse Consultancy Services didn't just refactor our code; they fundamentally transformed our engineering culture. Our time-to-market for new banking features dropped from months to days.",
      author: 'Erich Vance',
      role: 'Chief Technology Officer, Global Enterprise Banking'
    },
    beforeAfter: [
      { metricName: 'Transaction Batch Sync', before: '45.0 Mins', after: '6.5 Mins' },
      { metricName: 'Release Deployment Time', before: '72 Hours', after: '12 Mins' },
      { metricName: 'Peak System Latency', before: '1,420 ms', after: '48 ms' }
    ]
  },
  {
    id: 'telecom-telemetry',
    client: 'Global Telecom Infrastructure',
    industry: 'Telecom & IoT',
    title: 'High-Throughput IoT Telemetry Platform & Real-Time Analytics Engine',
    subtitle: 'Ingesting streaming sensor data from 2.5M connected towers with ultra-low latency anomaly detection.',
    accentColor: '#38BDF8',
    challenge: 'Ingesting streaming sensor telemetry from over 2.5 million connected cell towers created huge traffic spikes that caused persistent data loss, delayed fault diagnostics, and costly unneeded physical maintenance dispatches.',
    solution: [
      'Built a distributed, Linux-kernel optimized streaming ingestion platform handling over 10 million events per second.',
      'Implemented real-time windowed aggregation with Apache Flink for sub-second anomaly detection.',
      'Constructed a predictive AI maintenance engine to dispatch field engineers before tower hardware degradation occurred.'
    ],
    impactMetrics: [
      { label: 'Ingestion Capacity', value: '10M+', subtext: 'Events per second peak throughput', trend: 'up' },
      { label: 'Analytics Latency', value: '< 12ms', subtext: 'Real-time telemetry to dashboard alert', trend: 'down' },
      { label: 'False Alarm Reduction', value: '94%', subtext: 'Eliminated unnecessary truck rolls', trend: 'down' },
      { label: 'Preventative Savings', value: '$8.2M', subtext: 'Saved in hardware maintenance & repairs', trend: 'up' }
    ],
    architectureHighlights: [
      { title: 'Kernel-Tuned Containers', description: 'Custom Linux container tuning with eBPF networking for maximum packet processing efficiency.' },
      { title: 'Stream Processing Matrix', description: 'Stateful stream analytics calculating sliding-window metrics across millions of nodes concurrently.' },
      { title: 'Automated Failover', description: 'Self-healing cluster architecture capable of absorbing entire datacenter node dropouts.' }
    ],
    techStack: ['Apache Kafka', 'Kubernetes', 'Linux', 'Docker', 'Apache Flink', 'Go'],
    quote: {
      text: "The telemetry platform engineered by Muse gave us unprecedented real-time visibility into our global network. The reduction in false alarms alone paid for the project inside four months.",
      author: 'Sophia Sterling',
      role: 'VP of Network Operations, Global Telecom'
    },
    beforeAfter: [
      { metricName: 'Telemetry Ingestion Latency', before: '14.2 Secs', after: '0.012 Secs' },
      { metricName: 'False Fault Dispatches/Mo', before: '3,800', after: '228' },
      { metricName: 'Peak Throughput Handling', before: '1.2M Ev/s', after: '10.5M Ev/s' }
    ]
  },
  {
    id: 'healthcare-ehr',
    client: 'National Healthcare Alliance',
    industry: 'Healthcare Systems',
    title: 'HIPAA-Compliant Cloud Migration & Distributed Patient Data Grid',
    subtitle: 'Unifying 40+ legacy regional healthcare databases into a zero-trust, secure FHIR-compliant API layer.',
    accentColor: '#00D2FF',
    challenge: 'Patient medical records were fragmented across 40+ regional healthcare databases, causing regulatory compliance risks, 12-second record lookup times for emergency physicians, and insecure manual data exports.',
    solution: [
      'Designed a unified FHIR (Fast Healthcare Interoperability Resources) REST/GraphQL API gateway backed by encrypted cloud clusters.',
      'Engineered granular, role-based access control (RBAC) with immutable cryptographic audit logging for HIPAA compliance.',
      'Implemented real-time bidirectional record synchronization with automated deduplication and patient matching.'
    ],
    impactMetrics: [
      { label: 'Compliance Audit Score', value: '100%', subtext: 'Flawless HIPAA & SOC2 Type II certification', trend: 'up' },
      { label: 'Record Retrieval Time', value: '< 150ms', subtext: 'Instant access during emergency triage', trend: 'down' },
      { label: 'Unified Systems', value: '40+', subtext: 'Legacy databases consolidated into single grid', trend: 'up' },
      { label: 'Admin Overhead', value: '68%', subtext: 'Reduction in manual record request processing', trend: 'down' }
    ],
    architectureHighlights: [
      { title: 'Zero-Trust FHIR Gateway', description: 'High-speed encrypted gateway converting legacy HL7 messages to modern JSON FHIR standards.' },
      { title: 'Cryptographic Audit Trail', description: 'Tamper-proof blockchain-inspired audit log storing every access request immutably.' },
      { title: 'Patient Data Federation', description: 'Distributed data layer enabling instant cross-hospital queries without centralizing sensitive PII.' }
    ],
    techStack: ['TypeScript', 'Node.js', 'Docker', 'Azure', 'PostgreSQL', 'React'],
    quote: {
      text: "In emergency care, seconds save lives. Muse reduced record lookup times from 12 seconds to milliseconds while meeting our strictest security and HIPAA compliance requirements.",
      author: 'Dr. Marcus Thorne',
      role: 'Chief Medical Information Officer'
    },
    beforeAfter: [
      { metricName: 'Emergency Record Retrieval', before: '12.4 Secs', after: '0.14 Secs' },
      { metricName: 'Compliance Audit Prep', before: '6 Weeks', after: 'Automated' },
      { metricName: 'Data Sync Failures', before: '14.5%', after: '0.01%' }
    ]
  },
  {
    id: 'retail-supply-chain',
    client: 'Omnichannel Retail Leader',
    industry: 'Supply Chain & Retail',
    title: 'Autonomous Supply Chain Optimization & Real-Time Inventory Matrix',
    subtitle: 'Building a real-time reactive inventory ledger with predictive demand forecasting across 1,200 fulfillment centers.',
    accentColor: '#38BDF8',
    challenge: 'Inaccurate inventory visibility across 1,200 retail hubs caused frequent stockouts during seasonal peak events, leading to over $30M in lost annual sales and high expedited shipping costs.',
    solution: [
      'Built a reactive real-time inventory ledger processing 25,000 order changes per second across retail POS and ecommerce.',
      'Integrated machine learning models for predictive stock rebalancing and automated purchase order generation.',
      'Created an interactive supply chain control tower dashboard for logistics operators.'
    ],
    impactMetrics: [
      { label: 'Inventory Accuracy', value: '99.2%', subtext: 'Across 1,200 global distribution centers', trend: 'up' },
      { label: 'Revenue Recovered', value: '$28.5M', subtext: 'From stockout prevention in year one', trend: 'up' },
      { label: 'Order Fulfillment Speed', value: '42%', subtext: 'Accelerated same-day fulfillment rates', trend: 'up' },
      { label: 'Return On Investment', value: '410%', subtext: 'Achieved full ROI within 7 months', trend: 'up' }
    ],
    architectureHighlights: [
      { title: 'Reactive Ledger Matrix', description: 'Sub-millisecond inventory reservation system preventing double-allocation during flash sales.' },
      { title: 'Predictive Routing Engine', description: 'Smart routing algorithm choosing optimal fulfillment hubs based on distance and stock velocity.' },
      { title: 'Real-Time Telemetry Control', description: 'Executive operational dashboard streaming live store and warehouse metrics.' }
    ],
    techStack: ['Java', 'Spring Cloud', 'React', 'Node.js', 'Kubernetes', 'GCP'],
    quote: {
      text: "Muse Consultancy delivered a supply chain ledger that handled our Black Friday traffic without a single glitch. Their deep technical expertise in high-concurrency systems is second to none.",
      author: 'Elena Rostova',
      role: 'SVP of Global Supply Chain Technology'
    },
    beforeAfter: [
      { metricName: 'Inventory Drift Variance', before: '18.4%', after: '0.8%' },
      { metricName: 'Order Allocation Latency', before: '3,200 ms', after: '35 ms' },
      { metricName: 'Stockout Lost Sales', before: '$31.2M/yr', after: '$2.7M/yr' }
    ]
  }
];

export function CaseStudiesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [activeStudyId, setActiveStudyId] = useState<string>(CASE_STUDIES[0].id);
  const [modalStudy, setModalStudy] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'solution' | 'impact'>('overview');
  const [simulatedLoad, setSimulatedLoad] = useState<number>(85);

  const industries = ['All', 'FinTech & Banking', 'Telecom & IoT', 'Healthcare Systems', 'Supply Chain & Retail'];

  const filteredStudies = selectedIndustry === 'All' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(s => s.industry === selectedIndustry);

  const activeStudy = CASE_STUDIES.find(s => s.id === activeStudyId) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-32 px-6 relative z-10 glass-card border-t border-gray-800">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] tech-glow rounded-full pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="text-accent text-xs font-bold uppercase letter-spacing-widest">Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">
              Enterprise <span className="font-bold text-accent text-glow">Case Studies.</span>
            </h2>
            <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
              Explore how Muse Consultancy Services partners with industry leaders to solve complex software engineering challenges, modernize legacy platforms, and deliver measurable business outcomes.
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500 font-bold uppercase letter-spacing-widest mr-2 flex items-center gap-1">
              <Filter size={12} className="text-accent" /> Industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 text-xs font-bold uppercase letter-spacing-widest transition-all border ${
                  selectedIndustry === ind
                    ? 'bg-accent text-black border-accent'
                    : 'bg-white/[0.02] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Interactive Case Study Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-800 border border-gray-800 overflow-hidden mb-16">
          
          {/* Left Column: Study Selector List */}
          <div className="lg:col-span-4 bg-[#050505] flex flex-col justify-between">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest flex items-center gap-2">
                <SlidersHorizontal size={12} /> Select Case Study ({filteredStudies.length})
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Interactive Index</span>
            </div>

            <div className="divide-y divide-gray-800/80">
              {filteredStudies.map((study, idx) => {
                const isActive = study.id === activeStudyId;
                return (
                  <button
                    key={study.id}
                    onClick={() => {
                      setActiveStudyId(study.id);
                      setActiveTab('overview');
                    }}
                    className={`w-full text-left p-6 transition-all relative flex flex-col justify-between group ${
                      isActive 
                        ? 'bg-white/[0.04] border-l-2 border-l-accent' 
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-accent uppercase letter-spacing-widest">
                          0{idx + 1}{' // '}{study.industry}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#00D2FF]"></span>
                        )}
                      </div>
                      <h3 className={`text-base font-bold transition-colors mb-2 ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {study.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-light line-clamp-2">
                        {study.client}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-800/50">
                      <span className="text-[10px] text-gray-400 font-mono">
                        {study.impactMetrics[0].label}: <strong className="text-accent">{study.impactMetrics[0].value}</strong>
                      </span>
                      <ChevronRight size={14} className={`transition-transform ${isActive ? 'translate-x-1 text-accent' : 'text-gray-600'}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-6 bg-white/[0.01] border-t border-gray-800 text-xs text-gray-500 font-light flex items-center gap-2">
              <Zap size={14} className="text-accent shrink-0" />
              <span>All metrics verified through post-implementation client audits.</span>
            </div>
          </div>

          {/* Right Column: Case Study Main Interactive Preview Panel */}
          <div className="lg:col-span-8 bg-[#0a0f1a]/80 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Sub-nav Tabs */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-accent uppercase letter-spacing-widest px-3 py-1 bg-accent/10 border border-accent/20">
                    {activeStudy.industry}
                  </span>
                  <span className="text-xs text-gray-400 font-light">{'// '}{activeStudy.client}</span>
                </div>

                <div className="flex items-center gap-1 bg-black/50 p-1 border border-gray-800 text-xs font-semibold uppercase letter-spacing-widest">
                  {(['overview', 'challenge', 'solution', 'impact'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 transition-all capitalize ${
                        activeTab === tab
                          ? 'bg-accent text-black font-bold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content Display with Framer Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeStudy.id}-${activeTab}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* OVERVIEW TAB */}
                  {activeTab === 'overview' && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-light text-white mb-4 leading-tight">
                          {activeStudy.title}
                        </h3>
                        <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                          {activeStudy.subtitle}
                        </p>
                      </div>

                      {/* Key Metric Highlights Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                        {activeStudy.impactMetrics.map((metric, i) => (
                          <div key={i} className="p-4 bg-black/40 border border-gray-800/80 rounded-none relative">
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-1">
                              {metric.label}
                            </span>
                            <div className="text-2xl md:text-3xl font-bold text-accent text-glow font-heading mb-1">
                              {metric.value}
                            </div>
                            <span className="text-[11px] text-gray-400 font-light block leading-tight">
                              {metric.subtext}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Client Testimonial Card */}
                      <div className="p-6 bg-white/[0.02] border-l-2 border-l-accent border-y border-r border-gray-800 relative">
                        <p className="text-sm md:text-base italic text-gray-300 font-light mb-4">
                          &ldquo;{activeStudy.quote.text}&rdquo;
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <span className="font-bold text-white block">{activeStudy.quote.author}</span>
                            <span className="text-gray-500">{activeStudy.quote.role}</span>
                          </div>
                          <CheckCircle2 size={16} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CHALLENGE TAB */}
                  {activeTab === 'challenge' && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase letter-spacing-widest">
                        <Activity size={16} /> Client Bottleneck & Environment
                      </div>
                      <p className="text-lg text-gray-300 font-light leading-relaxed bg-black/40 p-6 border border-gray-800">
                        {activeStudy.challenge}
                      </p>

                      {/* Before vs After Benchmarks */}
                      <div className="space-y-3 pt-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase letter-spacing-widest mb-2">
                          Performance Delta Baseline vs Muse Optimization
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {activeStudy.beforeAfter.map((item, idx) => (
                            <div key={idx} className="p-4 bg-white/[0.02] border border-gray-800 text-xs">
                              <span className="text-gray-500 font-bold uppercase block mb-3">{item.metricName}</span>
                              <div className="flex items-center justify-between pt-2 border-t border-gray-800/60">
                                <div>
                                  <span className="text-[10px] text-red-400/80 block">BEFORE</span>
                                  <span className="text-sm font-mono text-gray-400 line-through">{item.before}</span>
                                </div>
                                <ChevronRight size={14} className="text-accent" />
                                <div className="text-right">
                                  <span className="text-[10px] text-accent block">AFTER</span>
                                  <span className="text-sm font-mono font-bold text-white">{item.after}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SOLUTION TAB */}
                  {activeTab === 'solution' && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase letter-spacing-widest">
                        <Layers size={16} /> Engineering Interventions
                      </div>
                      
                      <div className="space-y-3">
                        {activeStudy.solution.map((step, idx) => (
                          <div key={idx} className="p-4 bg-black/40 border border-gray-800 flex items-start gap-4">
                            <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 border border-accent/20 shrink-0">
                              0{idx + 1}
                            </span>
                            <p className="text-sm text-gray-300 font-light leading-relaxed">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Architectural Highlights */}
                      <div className="pt-4 space-y-3">
                        <h4 className="text-xs font-bold text-gray-400 uppercase letter-spacing-widest">
                          Architectural Pillars
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {activeStudy.architectureHighlights.map((arch, i) => (
                            <div key={i} className="p-4 bg-white/[0.02] border border-gray-800">
                              <span className="text-xs font-bold text-white block mb-1">{arch.title}</span>
                              <p className="text-xs text-gray-500 font-light">{arch.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* IMPACT TAB */}
                  {activeTab === 'impact' && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-accent text-xs font-bold uppercase letter-spacing-widest">
                        <TrendingUp size={16} /> Business Outcomes & ROI
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeStudy.impactMetrics.map((m, idx) => (
                          <div key={idx} className="p-6 bg-black/50 border border-gray-800 flex items-start justify-between">
                            <div>
                              <span className="text-xs text-gray-500 font-bold uppercase tracking-widest block mb-1">
                                {m.label}
                              </span>
                              <div className="text-4xl font-bold text-accent font-heading text-glow mb-2">
                                {m.value}
                              </div>
                              <p className="text-xs text-gray-400 font-light">
                                {m.subtext}
                              </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                              <BarChart3 size={16} />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Optimization Simulator */}
                      <div className="p-6 bg-white/[0.02] border border-gray-800 mt-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-gray-400 uppercase letter-spacing-widest flex items-center gap-2">
                            <Clock size={14} className="text-accent" /> Live Interactive SLA Load Simulator
                          </span>
                          <span className="text-xs text-accent font-mono">
                            System Efficiency: {simulatedLoad}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="30"
                          max="99"
                          value={simulatedLoad}
                          onChange={(e) => setSimulatedLoad(Number(e.target.value))}
                          className="w-full accent-[#00D2FF] bg-gray-800 h-1 cursor-pointer mb-4"
                        />
                        <div className="flex justify-between text-[11px] text-gray-500 font-mono">
                          <span>Legacy Monolith Bottleneck (30%)</span>
                          <span>Muse Container Optimized ({simulatedLoad}%)</span>
                          <span>Zero-Downtime Target (99%)</span>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Tech Stack & Full Deep Dive Action */}
            <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mr-2">
                  Deployed Stack:
                </span>
                {activeStudy.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 bg-white/[0.04] text-gray-300 border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setModalStudy(activeStudy)}
                className="w-full md:w-auto px-6 py-3 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-all flex items-center justify-center gap-2 shrink-0"
              >
                Full Architecture Deep-Dive <ArrowUpRight size={14} />
              </button>
            </div>

          </div>
        </div>

        {/* Modal / Slide-over Modal for Detailed Architecture Inspection */}
        <AnimatePresence>
          {modalStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0a0f1a] border border-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative shadow-2xl space-y-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalStudy(null)}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors bg-white/5 border border-gray-800"
                >
                  <X size={18} />
                </button>

                {/* Modal Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-accent uppercase letter-spacing-widest px-3 py-1 bg-accent/10 border border-accent/20">
                      {modalStudy.industry}
                    </span>
                    <span className="text-xs text-gray-400 font-light">{modalStudy.client}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {modalStudy.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light">
                    {modalStudy.subtitle}
                  </p>
                </div>

                {/* Deep Dive Content Blocks */}
                <div className="space-y-6 pt-4 border-t border-gray-800">
                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest mb-2">
                      The Operational Challenge
                    </h4>
                    <p className="text-sm text-gray-300 font-light leading-relaxed bg-black/50 p-4 border border-gray-800">
                      {modalStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest mb-3">
                      Muse Execution Blueprint
                    </h4>
                    <ul className="space-y-2">
                      {modalStudy.solution.map((sol, i) => (
                        <li key={i} className="text-xs text-gray-300 font-light flex items-start gap-3 bg-white/[0.02] p-3 border border-gray-800/60">
                          <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest mb-3">
                      Core Metrics & Verification
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {modalStudy.impactMetrics.map((metric, i) => (
                        <div key={i} className="p-4 bg-black/60 border border-gray-800">
                          <span className="text-[10px] text-gray-500 uppercase block mb-1">{metric.label}</span>
                          <span className="text-xl font-bold text-accent font-heading">{metric.value}</span>
                          <span className="text-[11px] text-gray-400 block font-light mt-1">{metric.subtext}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-accent uppercase letter-spacing-widest mb-2">
                      Deployed Infrastructure Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {modalStudy.techStack.map((tech) => (
                        <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-accent/10 text-accent border border-accent/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-mono">Ref: MSC-CS-{modalStudy.id.toUpperCase()}</span>
                  <button
                    onClick={() => setModalStudy(null)}
                    className="px-6 py-2.5 bg-accent hover:bg-cyan-300 text-black font-bold uppercase letter-spacing-widest text-xs transition-colors"
                  >
                    Close Technical View
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
