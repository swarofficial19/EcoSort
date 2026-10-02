import React from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Recycle,
  Sparkles,
  Info,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { WasteItem } from '../types';
import { WASTE_CATEGORIES } from '../data/categories';

interface WasteItemDetailModalProps {
  item: WasteItem | null;
  onClose: () => void;
  onScanItem?: () => void;
  onSearchItem?: (query: string) => void;
}

export const WasteItemDetailModal: React.FC<WasteItemDetailModalProps> = ({
  item,
  onClose,
  onScanItem,
  onSearchItem,
}) => {
  if (!item) return null;

  const cat = WASTE_CATEGORIES[item.category] || WASTE_CATEGORIES['Other / Unknown'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50/70 via-white to-emerald-50/30">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${cat.colorTheme.badgeBg} ${cat.colorTheme.text}`}>
                  {item.category}
                </span>
                {item.recyclable ? (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Recyclable
                  </span>
                ) : (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    Non-Recyclable
                  </span>
                )}
                {item.hazardous && (
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    Hazardous
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {item.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Classification: <span className="text-slate-800 font-semibold">{item.classification}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Hazardous Warning Banner */}
          {item.hazardous && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 flex items-start gap-3 text-xs leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-rose-900 font-bold mb-0.5">
                  Hazardous Material Warning:
                </strong>
                This item poses toxicity, flammability, or infection risks. Follow municipal hazardous waste depot schedules or pharmacy take-back rules.
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-1.5">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Disposal Method */}
          <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Recommended Disposal Action</span>
            </div>
            <p className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
              {item.disposalMethod}
            </p>
            <div className="pt-1 text-xs text-emerald-800">
              Target Receptacle: <strong className="underline decoration-emerald-400">{cat.binLabel}</strong>
            </div>
          </div>

          {/* Safety Instructions */}
          {item.safetyInstructions && item.safetyInstructions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Safety & Preparation Steps
              </h4>
              <ol className="space-y-2">
                {item.safetyInstructions.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Aliases & Keywords */}
          {item.aliases && item.aliases.length > 0 && (
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Also known as:</span>
              {item.aliases.map((alias, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {alias}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {onSearchItem && (
            <button
              onClick={() => {
                onSearchItem(item.name);
                onClose();
              }}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5"
            >
              <span>Search related items in database</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="flex items-center gap-2 ml-auto">
            {onScanItem && (
              <button
                onClick={() => {
                  onScanItem();
                  onClose();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs"
              >
                Scan an item
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
