import React from 'react';
import {
  Info,
  Sparkles,
  ShieldCheck,
  Recycle,
  CheckCircle2,
  Cpu,
  Layers,
  Search,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { ActivePage } from './Navbar';

interface AboutViewProps {
  setActivePage: (page: ActivePage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
          <span>Academic Software Engineering Project</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About EcoSort
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Empowering responsible waste segregation through state-of-the-art vision intelligence.
        </p>
      </div>

      {/* Core Project Statement Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 text-emerald-800">
          <Recycle className="w-6 h-6 text-emerald-600" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Project Overview & Mission
          </h2>
        </div>

        <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-slate-700 italic text-sm sm:text-base leading-relaxed">
          &ldquo;Rapid technological advancement and urbanization have led to a critical increase in unmanaged electronic and solid waste. EcoSort is a responsive web-based application designed to bridge the public awareness gap regarding proper waste segregation and disposal.&rdquo;
        </blockquote>

        <p className="text-sm text-slate-600 leading-relaxed">
          In both household and institutional environments, individuals are frequently unsure whether a specific composite item (such as blister packaging, lithium battery packs, or greasy cardboard) belongs in the recycling stream, compost, or hazardous depot. EcoSort solves this by providing instant AI-powered visual identification combined with an authoritative 85+ item environmental reference database.
        </p>
      </div>

      {/* 5 Core Pillars */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Key Functional Pillars
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          EcoSort uniquely integrates five complementary software capabilities:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Pillar 1 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              1. AI-Powered Image Recognition
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Leverages Google Gemini 3.8 Flash multi-modal vision to analyze physical geometry, resin codes, labels, and wiring in real time.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              2. Waste Classification
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standardizes classification into 9 environmental streams (E-Waste, Plastics, Biomedical, Organics, Paper, Glass, Metals, Hazardous, and Other).
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              3. Manual Database Search
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides robust offline/manual querying across 85+ verified everyday items by keyword, resin ID, and hazardous status.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              4. Actionable Disposal Guidance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Outputs structured, numbered safety precautions, municipal bin requirements, and data-wiping warnings before surrender.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="sm:col-span-2 p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Recycle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              5. Environmental Awareness & Contamination Prevention
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Educates users on the danger of battery truck fires, mercury vapor release from CFLs, and the economic benefits of circular resource recovery.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack & Architecture */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Engineering Specifications
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            System Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <p className="text-emerald-400 font-bold">Frontend Stack</p>
            <p className="text-slate-300">React 19, TypeScript, Tailwind CSS, Lucide Icons, Mobile Camera API</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <p className="text-emerald-400 font-bold">Server & AI Engine</p>
            <p className="text-slate-300">Express / Node.js, @google/genai SDK, Gemini 3.8 Flash Vision Model</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
            <p className="text-emerald-400 font-bold">Data & Privacy</p>
            <p className="text-slate-300">85+ Item Local Database, Ephemeral Memory Only, Zero Persistent Storage</p>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Compliant with modern academic, institutional, and environmental standards.</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActivePage('scan')}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch EcoSort AI Scanner</span>
        </button>
      </div>
    </div>
  );
};
