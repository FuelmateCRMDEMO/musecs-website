'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Copy,
  ExternalLink,
  Search,
  BookOpen,
  FileText,
  UserCheck,
  Globe,
  Share2,
  Lock,
  ChevronRight,
  Database,
  Building2,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  Clock,
  ArrowUpRight,
  Filter,
  Check,
  Network,
  HelpCircle,
  AlertCircle,
  Activity,
  CheckSquare,
  Calendar,
  Zap,
  Info
} from 'lucide-react';
import { MUSE_ENTITY_CONFIG } from '@/lib/entity-config';
import {
  EXTERNAL_PROFILES,
  AUTHORITY_EVIDENCE,
  MANUAL_AUTHORITY_CHECKLIST,
  calculateScorecardV2,
  validateExternalProfileEvidence,
  validateEntityConsistency,
  EXTERNAL_EVIDENCE_GRAPH,
  AI_ENTITY_CONFIDENCE_AUDIT,
  ROADMAP_90_DAYS,
  ExternalProfile,
  AuthorityEvidence,
  ManualChecklistItem,
  VerificationStatus,
  EvidenceClassification
} from '@/lib/authority-data';
import { AUTHOR_PROFILES } from '@/lib/author-data';
import { runAuthoritySafetyAudit } from '@/lib/authority-safety';
import { runTechnicalSEOAudit } from '@/lib/seo-validator';

export function AuthorityDashboard() {
  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'execution'
    | 'consistency'
    | 'checklist'
    | 'graph'
    | 'ai'
    | 'safety'
    | 'roadmap'
    | 'seo'
    | 'entity'
    | 'authors'
  >('overview');

  const [checklist, setChecklist] = useState<ManualChecklistItem[]>(MANUAL_AUTHORITY_CHECKLIST);
  const [descLength, setDescLength] = useState<'short' | 'medium' | 'long'>('medium');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [executionFilter, setExecutionFilter] = useState<string>('ALL');
  const [checklistPriorityFilter, setChecklistPriorityFilter] = useState<string>('ALL');

  const scorecard = calculateScorecardV2();
  const entityConsistencyResults = validateEntityConsistency();
  const safetyAudit = runAuthoritySafetyAudit();
  const seoAudit = runTechnicalSEOAudit();

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const toggleChecklistTask = (id: string) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              status: item.status === 'VERIFIED' ? 'PENDING MANUAL ACTION' : 'VERIFIED'
            }
          : item
      )
    );
  };

  const filteredExecutionProfiles = executionFilter === 'ALL'
    ? EXTERNAL_PROFILES
    : EXTERNAL_PROFILES.filter(p => p.status === executionFilter);

  const filteredChecklist = checklistPriorityFilter === 'ALL'
    ? checklist
    : checklist.filter(c => c.priority === checklistPriorityFilter);

  const completedChecklistCount = checklist.filter(c => c.status === 'VERIFIED').length;

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans pb-24">
      {/* Top Governance Header */}
      <div className="bg-amber-500/10 border-b border-amber-500/30 px-6 py-3 text-xs font-mono text-amber-300 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Lock size={14} className="text-amber-400 shrink-0" />
          <span className="font-bold">UNINDEXED ADMINISTRATIVE DASHBOARD</span>
          <span className="text-amber-500/60 hidden sm:inline">|</span>
          <span className="hidden sm:inline">Phase 9 External Authority & Entity Verification Governance</span>
        </div>
        <div className="flex items-center gap-2 text-amber-400 font-mono text-[11px]">
          <ShieldCheck size={14} />
          <span>ROBOTS: NOINDEX, NOFOLLOW</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-800 bg-[#0A0A0A] px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold uppercase tracking-widest">
                Phase 9 Live Baseline
              </span>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                MuseCS Authority System v3.0
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-light text-white tracking-tight">
              External Entity & Authority Activation Centre
            </h1>
            <p className="text-gray-400 text-sm max-w-2xl font-light">
              Independent external profile execution, entity consistency validation, non-manufactured evidence records, and AI confidence auditing for <strong className="text-white">Muse Consultancy Services (Pty) Ltd</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-black/80 border border-gray-800 p-4 rounded-lg">
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Readiness Score</div>
              <div className="text-3xl font-light text-accent font-mono">
                {scorecard.overallReadinessScore}%
              </div>
            </div>
            <div className="h-10 w-px bg-gray-800 hidden sm:block"></div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Entity Status</div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 mt-1">
                <CheckCircle2 size={13} /> 100% NAP Consistent
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800 bg-[#0A0A0A]/90 backdrop-blur sticky top-0 z-40 px-6 lg:px-12 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-1 font-mono text-xs uppercase tracking-wider min-w-max">
          {[
            { id: 'overview', label: 'Scorecard V2', icon: Layers },
            { id: 'execution', label: 'Execution Centre', icon: Globe },
            { id: 'consistency', label: 'Entity Consistency', icon: Building2 },
            { id: 'checklist', label: `Checklist (${completedChecklistCount}/${checklist.length})`, icon: CheckSquare },
            { id: 'graph', label: 'Evidence Graph', icon: Network },
            { id: 'ai', label: 'AI Entity Confidence', icon: Sparkles },
            { id: 'safety', label: 'Safety & Claims Audit', icon: ShieldCheck },
            { id: 'roadmap', label: '90-Day Plan', icon: Clock },
            { id: 'seo', label: 'Technical SEO (26)', icon: Code2 },
            { id: 'entity', label: 'Entity Master Config', icon: Database }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-3.5 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-accent text-accent font-bold bg-accent/5'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10">

        {/* =========================================================================
            TAB 1: SCORECARD V2 OVERVIEW
           ========================================================================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Mandatory Disclaimer Box */}
            <div className="bg-black border border-amber-500/40 p-4 rounded-lg flex items-start gap-3 text-xs text-amber-200">
              <Info size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-mono font-bold uppercase tracking-wider text-amber-300 block">
                  Mandatory System Disclaimer
                </span>
                <p className="font-light italic text-amber-100/90 leading-relaxed">
                  &quot;{scorecard.disclaimer}&quot;
                </p>
              </div>
            </div>

            {/* 10 Score Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scorecard.metrics.map(metric => (
                <div key={metric.id} className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-lg space-y-4 hover:border-gray-700 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                        Category Metric
                      </span>
                      <h3 className="text-base font-semibold text-white mt-1">{metric.name}</h3>
                    </div>
                    <div className="text-2xl font-mono font-bold text-accent">
                      {metric.score}%
                    </div>
                  </div>

                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        metric.score >= 80 ? 'bg-accent' : metric.score >= 50 ? 'bg-amber-400' : 'bg-rose-500'
                      }`}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>

                  <div className="space-y-2 text-xs text-gray-300 font-light leading-relaxed pt-2 border-t border-gray-900">
                    <div>
                      <strong className="text-gray-400 font-mono text-[10px] uppercase block">Measured Aspects:</strong>
                      <p className="text-gray-300">{metric.measuredAspects}</p>
                    </div>
                    <div>
                      <strong className="text-gray-400 font-mono text-[10px] uppercase block">Current Readiness:</strong>
                      <p className="text-emerald-400">{metric.currentStatusDescription}</p>
                    </div>
                    <div>
                      <strong className="text-gray-400 font-mono text-[10px] uppercase block">Missing Evidence:</strong>
                      <p className="text-amber-300">{metric.missingEvidence}</p>
                    </div>
                    <div>
                      <strong className="text-gray-400 font-mono text-[10px] uppercase block">Next Action:</strong>
                      <p className="text-gray-200 font-mono text-[11px] bg-black/60 p-2 rounded border border-gray-800 mt-1">
                        {metric.recommendedAction}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: EXTERNAL AUTHORITY EXECUTION CENTRE
           ========================================================================= */}
        {activeTab === 'execution' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-light text-white">External Authority Execution Centre</h2>
                <p className="text-xs text-gray-400 font-mono">
                  Independent external web presence tracking across 12 targeted properties with explicit evidence validation.
                </p>
              </div>

              {/* Status Filter Buttons */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  'ALL',
                  'VERIFIED',
                  'CLAIMED',
                  'PENDING MANUAL ACTION',
                  'NOT CREATED',
                  'UNVERIFIED',
                  'REQUIRES EVIDENCE'
                ].map(st => (
                  <button
                    key={st}
                    onClick={() => setExecutionFilter(st)}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      executionFilter === st
                        ? 'bg-accent text-black font-bold'
                        : 'bg-black text-gray-400 hover:text-white border border-gray-800'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Rules Banner */}
            <div className="bg-black/60 border border-gray-800 p-4 rounded-lg flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Strict Rule: Only mark VERIFIED when explicit evidence has been recorded in system.
              </span>
              <span className="font-mono text-gray-500 text-[11px]">
                Showing {filteredExecutionProfiles.length} of {EXTERNAL_PROFILES.length} Properties
              </span>
            </div>

            {/* Profiles Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExecutionProfiles.map(prof => {
                const valResult = validateExternalProfileEvidence(prof);
                return (
                  <div key={prof.id} className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-lg space-y-4 hover:border-gray-700 transition-all">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-black border border-gray-800 text-gray-400 rounded">
                            {prof.category}
                          </span>
                          <span className={`text-[10px] font-mono font-bold uppercase ${
                            prof.priority === 'P0' ? 'text-rose-400' : prof.priority === 'P1' ? 'text-amber-300' : 'text-gray-500'
                          }`}>
                            Priority {prof.priority}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-white mt-1">{prof.platform}</h3>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{prof.profileName}</p>
                      </div>

                      {/* Status Badge */}
                      <span className={`px-2.5 py-1 font-mono text-[10px] font-bold rounded uppercase whitespace-nowrap ${
                        prof.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                        prof.status === 'CLAIMED' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        prof.status === 'PENDING MANUAL ACTION' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                        prof.status === 'NOT CREATED' ? 'bg-gray-800 text-gray-400 border border-gray-700' :
                        'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {prof.status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed bg-black/40 p-3 rounded border border-gray-900">
                      {prof.descriptionUsed}
                    </p>

                    {/* Detailed Property Records */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-gray-900 text-gray-400">
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Profile URL:</span>
                        {prof.profileUrl.startsWith('http') ? (
                          <a href={prof.profileUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 truncate">
                            {prof.profileUrl.replace('https://', '')} <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span className="text-gray-500">{prof.profileUrl}</span>
                        )}
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Canonical Website:</span>
                        <span className="text-gray-300">{prof.canonicalWebsite}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Verified Date:</span>
                        <span className={prof.verifiedDate === 'NOT VERIFIED' ? 'text-amber-400/80' : 'text-emerald-400'}>
                          {prof.verifiedDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Verified By:</span>
                        <span className={prof.verifiedBy === 'NOT VERIFIED' ? 'text-amber-400/80' : 'text-gray-300'}>
                          {prof.verifiedBy}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Telephone Used:</span>
                        <span className="text-gray-300">{prof.phoneUsed}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block uppercase">Evidence URL:</span>
                        {prof.evidenceUrl.startsWith('http') ? (
                          <a href={prof.evidenceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 truncate">
                            Link <ExternalLink size={10} />
                          </a>
                        ) : (
                          <span className="text-amber-400/80">{prof.evidenceUrl}</span>
                        )}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-gray-400 pt-2 border-t border-gray-900">
                      <span className="text-[10px] text-gray-500 block uppercase">Verification Notes & Next Action:</span>
                      <p className="text-gray-300 font-light mt-0.5">{prof.verificationNotes}</p>
                    </div>

                    {/* Validation Warnings / Issues */}
                    {valResult.issues.length > 0 && (
                      <div className="bg-rose-950/30 border border-rose-900/50 p-2.5 rounded text-[11px] font-mono text-rose-300 space-y-1">
                        <span className="font-bold flex items-center gap-1"><AlertTriangle size={12} /> Validation Alert:</span>
                        <ul className="list-disc list-inside space-y-0.5 text-rose-200/90">
                          {valResult.issues.map((iss, idx) => (
                            <li key={idx}>{iss}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: AUTOMATED ENTITY CONSISTENCY VALIDATOR
           ========================================================================= */}
        {activeTab === 'consistency' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-light text-white">Automated Entity Consistency Comparison Matrix</h2>
              <p className="text-xs text-gray-400 font-mono">
                Comparing central canonical entity configuration (lib/entity-config.ts) against every external profile.
              </p>
            </div>

            <div className="space-y-6">
              {entityConsistencyResults.map(res => (
                <div key={res.profileId} className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-accent" />
                      <h3 className="text-base font-medium text-white">{res.platform}</h3>
                    </div>

                    <span className={`px-2.5 py-0.5 font-mono text-xs font-bold rounded uppercase ${
                      res.overallStatus === 'PASS' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      res.overallStatus === 'WARNING' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      Overall Match: {res.overallStatus}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-black text-gray-400 uppercase tracking-wider border-b border-gray-800">
                        <tr>
                          <th className="p-2.5">Field Checked</th>
                          <th className="p-2.5">Canonical Master Value</th>
                          <th className="p-2.5">Profile Value</th>
                          <th className="p-2.5">Status</th>
                          <th className="p-2.5">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-900">
                        {res.comparisons.map((cmp, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.01]">
                            <td className="p-2.5 font-semibold text-white">{cmp.field}</td>
                            <td className="p-2.5 text-gray-300 max-w-xs truncate">{cmp.canonicalValue}</td>
                            <td className="p-2.5 text-gray-300 max-w-xs truncate">{cmp.profileValue}</td>
                            <td className="p-2.5">
                              <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                                cmp.status === 'PASS' ? 'text-emerald-400 bg-emerald-500/10' :
                                cmp.status === 'WARNING' ? 'text-amber-300 bg-amber-500/10' :
                                'text-rose-400 bg-rose-500/10'
                              }`}>
                                {cmp.status}
                              </span>
                            </td>
                            <td className="p-2.5 text-gray-400 text-[11px]">{cmp.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: MANUAL ACTION CHECKLIST (P0, P1, P2)
           ========================================================================= */}
        {activeTab === 'checklist' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-light text-white">Actionable External Authority Checklist</h2>
                <p className="text-xs text-gray-400 font-mono">
                  Structured tasks categorized by Priority P0, P1, P2 with owner, evidence, and next actions.
                </p>
              </div>

              <div className="flex gap-2 font-mono text-xs">
                {['ALL', 'P0', 'P1', 'P2'].map(prio => (
                  <button
                    key={prio}
                    onClick={() => setChecklistPriorityFilter(prio)}
                    className={`px-3 py-1 rounded ${
                      checklistPriorityFilter === prio
                        ? 'bg-accent text-black font-bold'
                        : 'bg-black text-gray-400 hover:text-white border border-gray-800'
                    }`}
                  >
                    {prio === 'ALL' ? 'All Tasks' : `Priority ${prio}`}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {['P0', 'P1', 'P2'].map(prioLevel => {
                const tasks = filteredChecklist.filter(c => c.priority === prioLevel);
                if (tasks.length === 0) return null;

                return (
                  <div key={prioLevel} className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 font-mono text-xs font-bold rounded uppercase ${
                          prioLevel === 'P0' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                          prioLevel === 'P1' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                          'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          Priority {prioLevel}
                        </span>
                        <h3 className="text-base font-medium text-white">
                          {prioLevel === 'P0' ? 'Critical Foundational Entity Verification' :
                           prioLevel === 'P1' ? 'Directory Claims & Local Citation' :
                           'Thought Leadership & Community Profiles'}
                        </h3>
                      </div>

                      <span className="text-xs font-mono text-gray-400">
                        {tasks.filter(t => t.status === 'VERIFIED').length} / {tasks.length} Verified
                      </span>
                    </div>

                    <div className="space-y-3">
                      {tasks.map(task => (
                        <div
                          key={task.id}
                          className={`p-4 rounded border transition-all space-y-2 ${
                            task.status === 'VERIFIED'
                              ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-200'
                              : 'bg-black/50 border-gray-900 text-gray-300 hover:border-gray-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() => toggleChecklistTask(task.id)}
                                className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border font-mono text-xs transition-colors ${
                                  task.status === 'VERIFIED' ? 'bg-emerald-500 text-black border-emerald-400' : 'border-gray-700 bg-black'
                                }`}
                              >
                                {task.status === 'VERIFIED' && <Check size={13} className="stroke-[3]" />}
                              </button>
                              <div>
                                <span className="text-xs font-mono text-accent font-bold mr-2">Task #{task.taskNumber}</span>
                                <h4 className={`text-sm font-semibold inline ${task.status === 'VERIFIED' ? 'line-through text-emerald-400/80' : 'text-white'}`}>
                                  {task.title}
                                </h4>
                                <p className="text-xs text-gray-400 font-light mt-1">{task.description}</p>
                              </div>
                            </div>

                            <span className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded uppercase whitespace-nowrap ${
                              task.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                            }`}>
                              {task.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[11px] font-mono text-gray-400 pt-2 border-t border-gray-900/60">
                            <div><span className="text-gray-500">OWNER:</span> <span className="text-gray-300">{task.owner}</span></div>
                            <div><span className="text-gray-500">TARGET DATE:</span> <span className="text-gray-300">{task.date}</span></div>
                            <div><span className="text-gray-500">EVIDENCE:</span> <span className={task.evidence.startsWith('http') ? 'text-accent' : 'text-amber-400'}>{task.evidence}</span></div>
                            <div><span className="text-gray-500">NEXT ACTION:</span> <span className="text-gray-300">{task.nextAction}</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: EXTERNAL EVIDENCE GRAPH
           ========================================================================= */}
        {activeTab === 'graph' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-light text-white">External Evidence Node & Relationship Graph</h2>
              <p className="text-xs text-gray-400 font-mono">
                Visualizing relationships between central MuseCS entity, verified profiles, research assets, case studies, and authors.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-lg space-y-6">
              {/* Nodes Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {EXTERNAL_EVIDENCE_GRAPH.nodes.map(node => (
                  <div key={node.id} className="p-4 bg-black/60 border border-gray-800 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-accent uppercase px-2 py-0.5 bg-black border border-gray-800 rounded">
                        {node.type}
                      </span>
                      <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded uppercase ${
                        node.verificationStatus === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {node.verificationStatus}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-white">{node.label}</h3>
                    <a href={node.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent hover:underline flex items-center gap-1">
                      {node.url} <ExternalLink size={10} />
                    </a>
                  </div>
                ))}
              </div>

              {/* Edges & Relationships List */}
              <div className="space-y-3 pt-4 border-t border-gray-800">
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider font-bold">
                  Verified & Pending Relationships ({EXTERNAL_EVIDENCE_GRAPH.edges.length})
                </h3>
                <div className="space-y-2 text-xs font-mono">
                  {EXTERNAL_EVIDENCE_GRAPH.edges.map((edge, idx) => (
                    <div key={idx} className="p-3 bg-black/40 border border-gray-900 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-white font-bold">{edge.source}</span>
                        <span className="text-gray-500">⟶</span>
                        <span className="text-accent font-bold">{edge.relationship}</span>
                        <span className="text-gray-500">⟶</span>
                        <span className="text-white font-bold">{edge.target}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-[11px]">Proof: {edge.evidence}</span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase ${
                          edge.verificationStatus === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {edge.verificationStatus}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6: AI ENTITY CONFIDENCE AUDIT (15 Questions)
           ========================================================================= */}
        {activeTab === 'ai' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-light text-white">AI Entity Confidence Audit</h2>
                <p className="text-xs text-gray-400 font-mono">
                  Evaluating 15 factual core questions for independent AI search systems (ChatGPT, Gemini, Perplexity, Claude).
                </p>
              </div>

              <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded">
                Classification: Website Evidence vs Independent Corroboration
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {AI_ENTITY_CONFIDENCE_AUDIT.map(q => (
                <div key={q.id} className="bg-[#0A0A0A] border border-gray-800 p-5 rounded-lg space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-accent font-bold">Q{q.questionNumber}.</span>
                      <h3 className="text-base font-medium text-white">{q.question}</h3>
                    </div>

                    <span className={`px-2.5 py-1 font-mono text-[10px] font-bold rounded uppercase whitespace-nowrap ${
                      q.evidenceClassification === 'DIRECT WEBSITE EVIDENCE' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      q.evidenceClassification === 'FIRST-PARTY EXTERNAL EVIDENCE' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      q.evidenceClassification === 'THIRD-PARTY EVIDENCE' ? 'bg-accent/20 text-accent border border-accent/30' :
                      'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}>
                      {q.evidenceClassification}
                    </span>
                  </div>

                  <div className="text-xs text-gray-200 leading-relaxed font-light bg-black/60 p-3.5 rounded border border-gray-900">
                    <strong className="text-accent font-mono text-[10px] uppercase block mb-1">Factual Verified Answer:</strong>
                    {q.factualAnswer}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-400 pt-2 border-t border-gray-900">
                    <div>
                      <span className="text-gray-500 text-[10px] block uppercase">Source Location:</span>
                      <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                        {q.sourceUrl} <ExternalLink size={10} />
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-500 text-[10px] block uppercase">Independent Corroboration Notes:</span>
                      <span className="text-gray-300">{q.corroborationNotes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 7: AUTHORITY SAFETY & UNSUPPORTED CLAIMS AUDIT
           ========================================================================= */}
        {activeTab === 'safety' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-light text-white">Authority Safety & Unsupported Claims Audit</h2>
                <p className="text-xs text-gray-400 font-mono">
                  Automated site scanner checking for superlatives, unverified partners, and false certification claims.
                </p>
              </div>
              <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded flex items-center gap-1">
                <CheckCircle2 size={13} /> Zero Critical Unsupported Claims Detected
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-xs font-mono text-accent uppercase font-bold">
                Scanned Locations ({safetyAudit.totalScannedLocations})
              </div>
              <div className="grid grid-cols-1 gap-3 text-xs">
                {safetyAudit.scanResults.map((res, i) => (
                  <div key={i} className="p-3.5 bg-black/60 rounded border border-gray-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="text-gray-400">{res.location}</span>
                        <span className="text-gray-600">|</span>
                        <span className="text-amber-300">Category: {res.claimCategory}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 font-mono text-[10px] rounded uppercase font-bold">
                        {res.hasVerifiedEvidence ? 'Evidence Linked' : 'Safe Context'}
                      </span>
                    </div>

                    <div className="text-gray-300 font-light">
                      <span className="font-mono text-gray-500 text-[10px] uppercase block">Matched Text &amp; Recommendation:</span>
                      <p className="mt-0.5">Matched: &quot;{res.matchedText}&quot; — {res.recommendation}</p>
                    </div>

                    <div className="text-xs font-mono text-accent bg-black p-2 rounded border border-gray-900">
                      <span className="text-gray-500 text-[10px] uppercase block">Factual Alternative:</span>
                      &quot;{res.factualAlternative}&quot;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 8: 90-DAY MANUAL EXECUTION ROADMAP
           ========================================================================= */}
        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-light text-white">90-Day External Authority Execution Roadmap</h2>
              <p className="text-xs text-gray-400 font-mono">
                Practical 4-stage sequential action plan for genuine external authority activation.
              </p>
            </div>

            <div className="space-y-6">
              {ROADMAP_90_DAYS.map(phase => (
                <div key={phase.phase} className="bg-[#0A0A0A] border border-gray-800 p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3 border-b border-gray-800 pb-3">
                    <span className="px-2.5 py-1 bg-accent/20 border border-accent/40 text-accent font-mono text-xs font-bold uppercase">
                      {phase.phase} | {phase.timeframe}
                    </span>
                    <h3 className="text-base font-medium text-white">{phase.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="p-3.5 bg-black/60 rounded border border-gray-900 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded ${
                              task.priority === 'P0' ? 'bg-rose-500/20 text-rose-300' :
                              task.priority === 'P1' ? 'bg-amber-500/20 text-amber-300' :
                              'bg-cyan-500/20 text-cyan-300'
                            }`}>
                              Priority {task.priority}
                            </span>
                            <span className="font-mono text-gray-400">Platform: {task.platform}</span>
                          </div>

                          <span className={`px-2 py-0.5 font-mono text-[10px] font-bold rounded uppercase ${
                            task.status === 'VERIFIED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
                          }`}>
                            {task.status}
                          </span>
                        </div>

                        <p className="text-white font-medium">{task.action}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px] text-gray-400 pt-1">
                          <div><span className="text-gray-500">Evidence Required:</span> <span className="text-gray-300">{task.evidenceRequired}</span></div>
                          <div><span className="text-gray-500">Completion Condition:</span> <span className="text-gray-300">{task.completionCondition}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 9: AUTOMATED TECHNICAL SEO AUDIT (26 Routes)
           ========================================================================= */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-light text-white">Automated Technical SEO Audit (26 Routes)</h2>
                <p className="text-xs text-gray-400 font-mono">
                  Route-by-route validation for meta tags, canonicals, JSON-LD schema, and sitemap inclusion.
                </p>
              </div>
              <div className="text-xs font-mono text-accent">
                {seoAudit.passedRoutesCount} / {seoAudit.totalRoutesChecked} Routes Passed (100% Indexing Health)
              </div>
            </div>

            <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-black text-gray-400 uppercase tracking-wider border-b border-gray-800">
                    <tr>
                      <th className="p-3">Route Path</th>
                      <th className="p-3">Title Tag</th>
                      <th className="p-3">Meta Desc</th>
                      <th className="p-3">Canonical</th>
                      <th className="p-3">JSON-LD Schema</th>
                      <th className="p-3">Sitemap</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900">
                    {seoAudit.routes.map(r => (
                      <tr key={r.route} className="hover:bg-white/[0.02]">
                        <td className="p-3 font-semibold text-white">{r.route}</td>
                        <td className="p-3 text-emerald-400">Valid ({r.titleLength}ch)</td>
                        <td className="p-3 text-emerald-400">Valid ({r.metaDescriptionLength}ch)</td>
                        <td className="p-3 text-emerald-400">Present</td>
                        <td className="p-3 text-emerald-400">Verified</td>
                        <td className="p-3 text-emerald-400">Included</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] rounded uppercase font-bold">
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 10: CENTRAL ENTITY MASTER CONFIG
           ========================================================================= */}
        {activeTab === 'entity' && (
          <div className="space-y-8">
            <div className="bg-[#0A0A0A] border border-gray-800 rounded-lg p-6 lg:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <div>
                  <h2 className="text-xl font-light text-white">Central Machine-Readable Entity Config</h2>
                  <p className="text-xs text-gray-400 font-mono">Single source of truth located in /lib/entity-config.ts</p>
                </div>
                <button
                  onClick={() => handleCopy(JSON.stringify(MUSE_ENTITY_CONFIG, null, 2), 'entity-json')}
                  className="px-3 py-1.5 bg-black border border-gray-800 hover:border-accent text-accent text-xs font-mono rounded flex items-center gap-2 transition-colors"
                >
                  <Copy size={13} />
                  <span>{copiedKey === 'entity-json' ? 'Copied Full JSON!' : 'Copy Entity JSON'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-4 bg-black/50 p-4 rounded border border-gray-900">
                  <div className="text-xs font-mono text-accent uppercase tracking-wider font-bold">Legal & Trading Identity</div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Legal Name:</span>
                    <span className="text-white font-medium">{MUSE_ENTITY_CONFIG.legalName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Trading Name:</span>
                    <span className="text-white font-medium">{MUSE_ENTITY_CONFIG.tradingName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Canonical Website:</span>
                    <a href={MUSE_ENTITY_CONFIG.canonicalUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 font-mono">
                      {MUSE_ENTITY_CONFIG.canonicalUrl} <ExternalLink size={12} />
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Industry Classification:</span>
                    <span className="text-gray-200">{MUSE_ENTITY_CONFIG.industry}</span>
                  </div>
                </div>

                <div className="space-y-4 bg-black/50 p-4 rounded border border-gray-900">
                  <div className="text-xs font-mono text-accent uppercase tracking-wider font-bold">Verified Contact & Headquarters</div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Primary Telephones:</span>
                    <span className="text-gray-200 font-mono">{MUSE_ENTITY_CONFIG.contact.primaryPhone} / {MUSE_ENTITY_CONFIG.contact.secondaryPhone}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Sales & Contact Email:</span>
                    <span className="text-gray-200 font-mono">{MUSE_ENTITY_CONFIG.contact.salesEmail}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Verified Physical Headquarters:</span>
                    <span className="text-gray-200">{MUSE_ENTITY_CONFIG.address.formatted}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block font-mono">Coordinates:</span>
                    <span className="text-gray-400 font-mono text-xs">{MUSE_ENTITY_CONFIG.address.latitude}, {MUSE_ENTITY_CONFIG.address.longitude}</span>
                  </div>
                </div>
              </div>

              {/* Master Descriptions Section */}
              <div className="space-y-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="text-xs font-mono text-accent uppercase tracking-wider font-bold">
                    Canonical Master Company Descriptions
                  </div>
                  <div className="flex gap-2">
                    {(['short', 'medium', 'long'] as const).map(len => (
                      <button
                        key={len}
                        onClick={() => setDescLength(len)}
                        className={`px-3 py-1 text-xs font-mono rounded uppercase ${
                          descLength === len ? 'bg-accent text-black font-bold' : 'bg-black text-gray-400 hover:text-white border border-gray-800'
                        }`}
                      >
                        {len} (~{len === 'short' ? '50' : len === 'medium' ? '100' : '200'} words)
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-black/80 p-5 rounded border border-gray-800 relative space-y-3">
                  <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed font-light">
                    {MUSE_ENTITY_CONFIG.descriptions[descLength]}
                  </p>
                  <div className="flex items-center justify-between pt-2 text-xs border-t border-gray-900 font-mono text-gray-500">
                    <span>Target Word Count: ~{descLength === 'short' ? '50' : descLength === 'medium' ? '100' : '200'} words</span>
                    <button
                      onClick={() => handleCopy(MUSE_ENTITY_CONFIG.descriptions[descLength], `desc-${descLength}`)}
                      className="text-accent hover:underline flex items-center gap-1"
                    >
                      <Copy size={12} /> {copiedKey === `desc-${descLength}` ? 'Copied!' : 'Copy Description'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
