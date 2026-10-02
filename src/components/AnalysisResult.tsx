import React, { useState } from 'react';
import {
  Sparkles,
  Search,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  Database,
  ExternalLink,
  Info,
  Check,
} from 'lucide-react';
import { WasteAnalysis, PossibleMatch, WasteCategory } from '../types';
import { WASTE_CATEGORIES } from '../data/categories';
import { findBestDatabaseMatch } from '../lib/search';

interface AnalysisResultProps {
  analysis: WasteAnalysis;
  imagePreview: string | null;
  onScanAnother: () => void;
  onSearchItem: (query: string) => void;
  onExploreCategory: (category: string) => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({
  analysis: initialAnalysis,
  imagePreview,
  onScanAnother,
  onSearchItem,
  onExploreCategory,
}) => {
  const [currentAnalysis, setCurrentAnalysis] = useState<WasteAnalysis>(initialAnalysis);
  const [selectedMatchIndex, setSelectedMatchIndex] = useState<number>(0);

  const categoryData = WASTE_CATEGORIES[currentAnalysis.category] || WASTE_CATEGORIES['Other / Unknown'];

  // Handle switching to alternative possible match
  const handleSelectAlternative = (match: PossibleMatch, idx: number) => {
    setSelectedMatchIndex(idx);
    const dbMatch = findBestDatabaseMatch(match.itemName, match.category);

    setCurrentAnalysis({
      ...currentAnalysis,
      identifiedItem: dbMatch ? dbMatch.name : match.itemName,
      category: dbMatch ? dbMatch.category : match.category,
      classification: dbMatch ? dbMatch.classification : (match.classification || currentAnalysis.classification),
      confidence: match.confidence,
      confidenceLevel: match.confidence >= 0.8 ? 'High' : match.confidence >= 0.5 ? 'Moderate' : 'Low',
      recyclable: dbMatch ? dbMatch.recyclable : currentAnalysis.recyclable,
      hazardous: dbMatch ? dbMatch.hazardous : currentAnalysis.hazardous,
      description: dbMatch ? dbMatch.description : currentAnalysis.description,
      disposalMethod: dbMatch ? dbMatch.disposalMethod : currentAnalysis.disposalMethod,
      safetyInstructions: dbMatch && dbMatch.safetyInstructions.length > 0
        ? dbMatch.safetyInstructions
        : currentAnalysis.safetyInstructions,
      matchedDatabaseItem: dbMatch || null,
    });
  };

  const isLowConfidence = currentAnalysis.confidenceLevel === 'Low';
  const isHazardous = currentAnalysis.hazardous || currentAnalysis.category === 'Hazardous Waste' || currentAnalysis.category === 'Biomedical Waste';

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Top Banner Notice: Anti-Absolutist AI Disclaimer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>AI identification suggests:</strong> Predictions are advisory assessments. Verify with local municipal guidelines.
          </span>
        </div>
        {currentAnalysis.matchedDatabaseItem ? (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100/70 text-emerald-800 font-semibold self-start sm:self-auto shrink-0">
            <Database className="w-3.5 h-3.5 text-emerald-700" />
            <span>Verified Database Match</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100/70 text-amber-800 font-semibold self-start sm:self-auto shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Direct AI Inference</span>
          </div>
        )}
      </div>

      {/* Low Confidence Alert if applicable */}
      {isLowConfidence && (
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-sm">
          <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-950">
              Low Confidence Identification
            </p>
            <p className="mt-0.5 text-xs text-amber-800">
              EcoSort could not confidently identify this item. Try uploading a clearer, closer image or search manually in our waste database.
            </p>
          </div>
        </div>
      )}

      {/* Hazardous Waste Warning if applicable */}
      {isHazardous && (
        <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-rose-600 text-white shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-base text-rose-950 flex items-center gap-2">
                <span>Special Handling Recommended</span>
              </h4>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                AI identification may not always be accurate for hazardous materials. Follow applicable local regulations and consult an authorized waste-management facility. Never place into domestic compactor trucks or storm water drains.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Result Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50/50 via-white to-emerald-50/20">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  AI Identification
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${categoryData.colorTheme.badgeBg} ${categoryData.colorTheme.text}`}>
                  {currentAnalysis.category}
                </span>
                {currentAnalysis.recyclable ? (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Recyclable
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Non-Recyclable
                  </span>
                )}
              </div>

              {/* Identified Item Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {currentAnalysis.identifiedItem}
                </h2>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Classification: <span className="text-slate-800 font-semibold">{currentAnalysis.classification}</span>
                </p>
              </div>
            </div>

            {/* Confidence Score Pill */}
            <div className="flex items-center gap-3 self-start p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="text-right">
                <p className="text-[11px] text-slate-400 font-medium">AI Confidence</p>
                <p className={`text-base font-bold ${
                  currentAnalysis.confidenceLevel === 'High'
                    ? 'text-emerald-700'
                    : currentAnalysis.confidenceLevel === 'Moderate'
                    ? 'text-amber-700'
                    : 'text-rose-700'
                }`}>
                  {currentAnalysis.confidenceLevel}
                  <span className="text-xs font-normal text-slate-400 ml-1">
                    ({Math.round(currentAnalysis.confidence * 100)}%)
                  </span>
                </p>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                currentAnalysis.confidenceLevel === 'High'
                  ? 'bg-emerald-600'
                  : currentAnalysis.confidenceLevel === 'Moderate'
                  ? 'bg-amber-500'
                  : 'bg-rose-500'
              }`}>
                {currentAnalysis.confidenceLevel === 'High' ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : (
                  <span className="text-xs font-bold">!</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Card Body Grid */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Image & Materials */}
          <div className="space-y-5">
            {imagePreview && (
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video sm:aspect-square flex items-center justify-center p-2">
                <img
                  src={imagePreview}
                  alt={currentAnalysis.identifiedItem}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Item Description
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {currentAnalysis.description}
              </p>
            </div>

            {/* Materials Detected */}
            {currentAnalysis.detectedMaterials && currentAnalysis.detectedMaterials.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Detected Composition
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentAnalysis.detectedMaterials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Center & Right Column: Disposal & Safety Guidance */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recommended Action / Disposal Method */}
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm uppercase tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Recommended Disposal Action</span>
              </div>
              <p className="text-slate-900 font-semibold text-base leading-snug">
                {currentAnalysis.disposalMethod}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <span>Target Bin:</span>
                <span className="font-bold underline decoration-emerald-400 underline-offset-2">
                  {categoryData.binLabel}
                </span>
              </div>
            </div>

            {/* Safety Instructions (Numbered List) */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Safety Instructions</span>
                <span className="text-xs font-normal text-slate-500">
                  (Follow strictly prior to disposal)
                </span>
              </h4>

              <ol className="space-y-2.5">
                {currentAnalysis.safetyInstructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-800"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Multiple Possible Matches (if AI provided alternative probabilities) */}
            {currentAnalysis.possibleMatches && currentAnalysis.possibleMatches.length > 1 && (
              <div className="pt-4 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    Alternative Possible Matches
                  </h4>
                  <span className="text-[11px] text-slate-400">
                    Click to switch guidance
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {currentAnalysis.possibleMatches.map((match, idx) => {
                    const isSelected = selectedMatchIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAlternative(match, idx)}
                        className={`p-2.5 text-left rounded-lg text-xs transition-all border ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600 font-semibold text-emerald-950'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold truncate">{match.itemName}</span>
                          <span className="text-[10px] text-slate-500 ml-1">
                            {Math.round(match.confidence * 100)}%
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-0.5">
                          {match.category}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onScanAnother}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Scan Another Item</span>
            </button>

            <button
              onClick={() => onSearchItem(currentAnalysis.identifiedItem)}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Search className="w-4 h-4 text-emerald-600" />
              <span>Search This Item</span>
            </button>
          </div>

          <button
            onClick={() => onExploreCategory(currentAnalysis.category)}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 transition-colors"
          >
            <span>Explore {currentAnalysis.category} standards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
