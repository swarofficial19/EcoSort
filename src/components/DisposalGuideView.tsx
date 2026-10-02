import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ShieldCheck,
  Recycle,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { WASTE_CATEGORIES } from '../data/categories';
import { WasteCategory } from '../types';

interface DisposalGuideViewProps {
  onLaunchScanner: () => void;
}

export const DisposalGuideView: React.FC<DisposalGuideViewProps> = ({ onLaunchScanner }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('special-items');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const categories = Object.values(WASTE_CATEGORIES);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Universal Best Practices</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Waste Disposal Guide
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Master the rules of proper waste segregation. Learn which materials belong in each bin, how to prevent contamination, and safe procedures for dangerous items.
        </p>
      </div>

      {/* Municipal Regulatory Variance Notice */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3.5 text-xs sm:text-sm">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-amber-900">
            Important Municipal Notice
          </p>
          <p className="text-amber-800 leading-relaxed">
            Disposal requirements may vary by local regulations. Follow guidance from your local municipal authority or authorized waste-management facility. Different cities employ varying material recovery facility (MRF) sorting capabilities.
          </p>
        </div>
      </div>

      {/* Tricky / Special Items Protocol Section */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('special-items')}
          className="w-full p-6 text-left flex items-center justify-between bg-gradient-to-r from-slate-50 via-white to-emerald-50/30 border-b border-slate-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Special Handling for High-Risk & Tricky Materials
              </h2>
              <p className="text-xs text-slate-500">
                Critical procedures for items that can cause fires, chemical burns, or machine jamming.
              </p>
            </div>
          </div>
          {expandedSection === 'special-items' ? (
            <ChevronUp className="w-5 h-5 text-slate-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-400" />
          )}
        </button>

        {expandedSection === 'special-items' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Lithium-ion batteries */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Lithium-Ion & Rechargeable Batteries
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>The Hazard:</strong> Punctured or crushed lithium cells cause aggressive thermal runaway and chemical fires inside municipal collection trucks and sorting facilities.
                </p>
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>Protocol:</strong> Place clear scotch tape over electrical contact terminals. Deposit strictly into certified retail or hazardous drop boxes (e.g., Call2Recycle).
                </p>
              </div>

              {/* Medical Sharps */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Medical Sharps & Used Needles
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>The Hazard:</strong> Accidental needle sticks transmit bloodborne viral infections (HIV, Hepatitis B/C) to sanitation and MRF workers.
                </p>
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>Protocol:</strong> Never recap needles by hand. Immediately place into an FDA-approved puncture-proof sharps container or rigid heavy-plastic jug taped shut and labeled "SHARPS".
                </p>
              </div>

              {/* Fluorescent Light Tubes */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Fluorescent Light Tubes & CFLs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>The Hazard:</strong> Broken tubes release invisible neurotoxic elemental mercury vapor that is rapidly absorbed into the lungs.
                </p>
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>Protocol:</strong> Do NOT vacuum if broken. Air out room for 15 minutes, sweep shards with stiff cardboard, wipe with wet paper towel, and seal in a glass jar.
                </p>
              </div>

              {/* Soft Plastics / Tanglers */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Plastic Grocery Bags & Cords ("Tanglers")
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>The Hazard:</strong> Thin films, cables, and garden hoses wrap tightly around spinning optical sorting shafts, shutting down recycling plants for hours.
                </p>
                <p className="text-xs text-emerald-800 font-medium">
                  <strong>Protocol:</strong> Never place soft film in curbside recycling bins. Return bags to grocery store drop-off kiosks and bundle e-waste cables separately.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Category-by-Category Segregation Reference */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-900">
          Standard Waste Streams Reference
        </h2>

        <div className="space-y-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${cat.colorTheme.badgeBg} ${cat.colorTheme.text}`}>
                    {cat.name}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Target Bin: <strong className="text-slate-800">{cat.binLabel}</strong>
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Bin Tint: {cat.binColor}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {/* Accepted */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Accepted Items:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.acceptedItems.slice(0, 5).join(', ')}.
                  </p>
                </div>

                {/* Rejected */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Never Mix (Contaminants):</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.rejectedItems.join(', ')}.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <p className="italic">
                  &ldquo;{cat.environmentalBenefit}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center p-8 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-xl mx-auto space-y-3">
        <h3 className="font-bold text-slate-900 text-lg">
          Unsure about a specific item in front of you?
        </h3>
        <p className="text-xs text-slate-600">
          Take a photo or upload an image, and let EcoSort AI analyze and classify it for you in seconds.
        </p>
        <button
          onClick={onLaunchScanner}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch AI Waste Scanner</span>
        </button>
      </div>
    </div>
  );
};
