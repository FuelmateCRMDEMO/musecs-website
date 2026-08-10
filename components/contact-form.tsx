'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, Clock, Users, Code2, Building2, Terminal, ArrowRight } from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type');

  const [requirementType, setRequirementType] = useState<string>('Software Development');
  
  useEffect(() => {
    if (initialType) {
      const lower = initialType.toLowerCase();
      if (lower.includes('aug') || lower.includes('team') || lower.includes('developer')) {
        setRequirementType('Software Development Team Augmentation');
      } else if (lower.includes('arch') || lower.includes('audit') || lower.includes('consulting')) {
        setRequirementType('Software Architecture & System Audit');
      } else {
        setRequirementType('Software Development');
      }
    }
  }, [initialType]);

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  // Software Dev Specific
  const [projectDescription, setProjectDescription] = useState('');
  const [legacySystems, setLegacySystems] = useState('');
  const [targetTechStack, setTargetTechStack] = useState('');
  const [complianceRequirements, setComplianceRequirements] = useState<string[]>(['POPIA']);

  // Team Augmentation Specific
  const [rolesRequired, setRolesRequired] = useState<string[]>([]);
  const [developerHeadcount, setDeveloperHeadcount] = useState('2-5 Developers');
  const [desiredStartDate, setDesiredStartDate] = useState('Under 5 Days (Immediate)');
  const [expectedDuration, setExpectedDuration] = useState('6-12 Months');

  // Architecture Specific
  const [auditFocus, setAuditFocus] = useState('Codebase Health & Technical Debt Review');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceCode: string;
    message: string;
    assignedLead: string;
  } | null>(null);

  const availableRoles = [
    'Senior Full-Stack Engineer',
    'Lead Java / Spring Boot Architect',
    'React / Next.js Specialist',
    'Python / AI & RAG Engineer',
    'DevOps / Kubernetes Architect',
    'QA Automation Engineer',
    'Mobile Engineer (React Native/Flutter)',
    'Data Engineer / Kafka Specialist'
  ];

  const toggleRole = (role: string) => {
    if (rolesRequired.includes(role)) {
      setRolesRequired(rolesRequired.filter((r) => r !== role));
    } else {
      setRolesRequired([...rolesRequired, role]);
    }
  };

  const toggleCompliance = (comp: string) => {
    if (complianceRequirements.includes(comp)) {
      setComplianceRequirements(complianceRequirements.filter((c) => c !== comp));
    } else {
      setComplianceRequirements([...complianceRequirements, comp]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid corporate email address.');
      return;
    }

    if (requirementType === 'Software Development' && !projectDescription.trim()) {
      setErrorMsg('Please provide a brief overview of your software project requirements.');
      return;
    }

    if (requirementType === 'Software Development Team Augmentation' && rolesRequired.length === 0) {
      setErrorMsg('Please select at least one role required for your team augmentation squad.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          requirementType,
          projectDescription,
          legacySystems,
          targetTechStack,
          complianceRequirements,
          rolesRequired,
          developerHeadcount,
          desiredStartDate,
          expectedDuration,
          auditFocus
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      setSuccessData({
        referenceCode: data.referenceCode,
        message: data.message,
        assignedLead: data.assignedLead
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred submitting your enquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="bg-[#080808] border border-accent/40 p-8 md:p-12 space-y-8 animate-fadeIn">
        <div className="flex items-center gap-4 text-accent border-b border-gray-800 pb-6">
          <CheckCircle2 size={36} className="shrink-0" />
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent/80">
              Enquiry Successfully Dispatched
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-white">
              Technical Request Confirmed
            </h2>
          </div>
        </div>

        <div className="p-6 bg-black border border-gray-800 font-mono text-xs space-y-3">
          <div className="flex justify-between items-center text-gray-400">
            <span>Reference Tracking ID:</span>
            <strong className="text-accent text-sm font-bold">{successData.referenceCode}</strong>
          </div>
          <div className="flex justify-between items-center text-gray-400 border-t border-gray-800/80 pt-2">
            <span>Routed To:</span>
            <span className="text-white">{successData.assignedLead}</span>
          </div>
          <div className="flex justify-between items-center text-gray-400 border-t border-gray-800/80 pt-2">
            <span>Response SLA:</span>
            <span className="text-accent">Within 4 Business Hours</span>
          </div>
          <div className="flex justify-between items-center text-gray-400 border-t border-gray-800/80 pt-2">
            <span>Primary Category:</span>
            <span className="text-white">{requirementType}</span>
          </div>
        </div>

        <p className="text-gray-300 text-sm font-light leading-relaxed">
          {successData.message}
        </p>

        <div className="p-6 bg-accent/5 border-l-2 border-accent text-xs font-mono space-y-2">
          <span className="text-accent font-bold uppercase tracking-widest block">What Happens Next?</span>
          <ol className="list-decimal list-inside space-y-1.5 text-gray-300 font-sans text-sm font-light">
            <li>A Senior Software Architect in Sandton reviews your technical specifications.</li>
            <li>We issue a mutual Non-Disclosure Agreement (NDA) if confidential architecture is involved.</li>
            <li>We schedule a 30-minute technical discovery call to review timeline, stack, or team profile alignment.</li>
          </ol>
        </div>

        <button
          onClick={() => {
            setSuccessData(null);
            setFullName('');
            setEmail('');
            setProjectDescription('');
          }}
          className="px-6 py-3 bg-black border border-gray-800 hover:border-accent text-gray-300 hover:text-white font-mono text-xs uppercase tracking-widest transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#080808] border border-gray-800 p-8 md:p-10 space-y-8">
      
      {/* Category Tabs */}
      <div className="space-y-3">
        <label className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
          Step 01 // Select Primary Requirement Category *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              id: 'Software Development',
              title: 'Software Development',
              subtitle: 'Bespoke build, modernise, or integrate systems',
              icon: <Code2 size={18} />
            },
            {
              id: 'Software Development Team Augmentation',
              title: 'Team Augmentation',
              subtitle: 'Inject senior developers or dedicated squads',
              icon: <Users size={18} />
            },
            {
              id: 'Software Architecture & System Audit',
              title: 'Architecture & Audit',
              subtitle: 'Code health, cloud, or security review',
              icon: <Terminal size={18} />
            }
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setRequirementType(cat.id)}
              className={`p-4 border text-left transition-all space-y-1.5 ${
                requirementType === cat.id
                  ? 'bg-accent/10 border-accent text-white shadow-[0_0_15px_rgba(0,210,255,0.15)]'
                  : 'bg-black/60 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider font-mono flex items-center gap-2 text-white">
                  {cat.icon} {cat.title}
                </span>
                {requirementType === cat.id && <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>}
              </div>
              <p className="text-[11px] font-light text-gray-400 leading-snug">
                {cat.subtitle}
              </p>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 font-sans text-sm">

        {/* Conditional Field Sets */}
        {requirementType === 'Software Development' && (
          <div className="p-6 bg-black border border-gray-800 space-y-6">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
              Step 02 // Software Project Requirements
            </span>

            <div className="space-y-2">
              <label htmlFor="projectDescription" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Project Overview & Business Objectives *
              </label>
              <textarea
                id="projectDescription"
                rows={4}
                required
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Describe what system you need built, key features, target audience, or current operational bottlenecks..."
                className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light leading-relaxed"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="legacySystems" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                  Existing Infrastructure / Legacy Ledger
                </label>
                <input
                  id="legacySystems"
                  type="text"
                  value={legacySystems}
                  onChange={(e) => setLegacySystems(e.target.value)}
                  placeholder="e.g., COBOL, SQL Server, Monolithic .NET, On-premise"
                  className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="targetTechStack" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                  Preferred Tech Stack
                </label>
                <input
                  id="targetTechStack"
                  type="text"
                  value={targetTechStack}
                  onChange={(e) => setTargetTechStack(e.target.value)}
                  placeholder="e.g., Java 21, TypeScript, Next.js, AWS, Kubernetes"
                  className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Regulatory & Security Compliance Constraints
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                {['POPIA Compliance', 'PCI-DSS Payment Standards', 'ISO27001 Security', 'SARB Banking Governance', 'SOC2 Audit'].map((comp) => (
                  <button
                    key={comp}
                    type="button"
                    onClick={() => toggleCompliance(comp)}
                    className={`px-3 py-1.5 border text-xs font-mono transition-all ${
                      complianceRequirements.includes(comp)
                        ? 'bg-accent/20 border-accent text-accent'
                        : 'bg-[#050505] border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {complianceRequirements.includes(comp) ? '✓ ' : '+ '}{comp}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {requirementType === 'Software Development Team Augmentation' && (
          <div className="p-6 bg-black border border-gray-800 space-y-6">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
              Step 02 // Engineering Capability & Role Selection
            </span>

            <div className="space-y-3">
              <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Required Developer Roles (Select All Applicable) *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {availableRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => toggleRole(role)}
                    className={`p-3 border text-left font-mono text-xs transition-all flex items-center justify-between ${
                      rolesRequired.includes(role)
                        ? 'bg-accent/15 border-accent text-white'
                        : 'bg-[#050505] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
                    }`}
                  >
                    <span>{role}</span>
                    <span className="text-accent font-bold">{rolesRequired.includes(role) ? '✓' : '+'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                  Developer Headcount
                </label>
                <select
                  value={developerHeadcount}
                  onChange={(e) => setDeveloperHeadcount(e.target.value)}
                  className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm"
                >
                  <option>1 Senior Engineer</option>
                  <option>2-5 Developers</option>
                  <option>6-10 Developers</option>
                  <option>10+ Dedicated Engineering Squad</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                  Desired Start Date
                </label>
                <select
                  value={desiredStartDate}
                  onChange={(e) => setDesiredStartDate(e.target.value)}
                  className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm"
                >
                  <option>Under 5 Days (Immediate)</option>
                  <option>Within 2 Weeks</option>
                  <option>Within 1 Month</option>
                  <option>Planning Q3/Q4</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                  Expected Duration
                </label>
                <select
                  value={expectedDuration}
                  onChange={(e) => setExpectedDuration(e.target.value)}
                  className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm"
                >
                  <option>3-6 Months</option>
                  <option>6-12 Months</option>
                  <option>12+ Months (Ongoing)</option>
                  <option>Project-based Sprint</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="targetTechStackAug" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Specific Technical Skill Requirements / Frameworks
              </label>
              <input
                id="targetTechStackAug"
                type="text"
                value={targetTechStack}
                onChange={(e) => setTargetTechStack(e.target.value)}
                placeholder="e.g. Java 21, Spring Boot, React 19, Kafka, Docker, POPIA knowledge"
                className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
              />
            </div>
          </div>
        )}

        {requirementType === 'Software Architecture & System Audit' && (
          <div className="p-6 bg-black border border-gray-800 space-y-6">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
              Step 02 // Architecture & Advisory Scope
            </span>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Primary Audit / Advisory Focus
              </label>
              <select
                value={auditFocus}
                onChange={(e) => setAuditFocus(e.target.value)}
                className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm"
              >
                <option>Codebase Health & Technical Debt Review</option>
                <option>Cloud Infrastructure & Cost Optimisation Audit</option>
                <option>POPIA & Cybersecurity Compliance Audit</option>
                <option>AI / Machine Learning Feasibility Assessment</option>
                <option>Legacy Monolith Modernisation Blueprint</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="projectDescriptionAudit" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                System Context & Operational Scale
              </label>
              <textarea
                id="projectDescriptionAudit"
                rows={3}
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Details regarding system user count, transaction volume, current hosting provider, or primary architectural concerns..."
                className="w-full bg-[#050505] border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light leading-relaxed"
              ></textarea>
            </div>
          </div>
        )}

        {/* Step 03: Corporate Contact Details */}
        <div className="space-y-6 pt-2">
          <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest block">
            Step 03 // Primary Corporate Contact Details
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Johan van der Merwe"
                className="w-full bg-black border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Corporate Email Address *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johan@company.co.za"
                className="w-full bg-black border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Telephone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 82 000 0000"
                className="w-full bg-black border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-xs font-mono uppercase text-gray-300 tracking-wider block">
                Company / Organisation Name
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. First National Bank / Enterprise Ltd"
                className="w-full bg-black border border-gray-800 p-3.5 text-white focus:border-accent outline-none text-sm font-light"
              />
            </div>
          </div>
        </div>

        {errorMsg && (
          <div className="p-4 bg-red-950/40 border border-red-800 text-red-300 text-xs font-mono flex items-center gap-3">
            <AlertCircle size={18} className="shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="space-y-4 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-accent hover:bg-cyan-300 disabled:bg-gray-800 disabled:text-gray-500 text-black font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 font-mono">
                <span className="w-3 h-3 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
                Processing Specification...
              </span>
            ) : (
              <span className="flex items-center gap-2 font-mono">
                Submit Technical Enquiry <Send size={16} />
              </span>
            )}
          </button>

          <div className="flex items-center justify-center gap-6 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-accent" /> 100% POPIA Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-accent" /> 4-Hour Architect Response SLA
            </span>
          </div>
        </div>

      </form>
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={
      <div className="p-12 bg-[#080808] border border-gray-800 font-mono text-xs text-center text-gray-400 space-y-3">
        <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p>Loading Technical Qualification Matrix...</p>
      </div>
    }>
      <ContactFormContent />
    </Suspense>
  );
}
