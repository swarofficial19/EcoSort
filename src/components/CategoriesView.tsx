import React, { useState } from 'react';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ChevronRight,
  Search,
  Sparkles,
  Recycle,
  Cpu,
  Crosshair,
  Sprout,
  FileText,
  Wine,
  Shield,
  HelpCircle,
} from 'lucide-react';
import { WASTE_CATEGORIES } from '../data/categories';
import { WASTE_ITEMS } from '../data/waste-items';
import { WasteCategory, WasteItem } from '../types';

interface CategoriesViewProps {
  initialCategory?: WasteCategory | null;
  onSelectItem: (item: WasteItem) => void;
  onLaunchScanner: () => void;
}

export const CategoriesView: React.FC<CategoriesViewProps> = ({
  initialCategory = null,
  onSelectItem,
  onLaunchScanner,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(
    initialCategory || null
  );

  const getCategoryIcon = (id: WasteCategory) => {
    switch (id) {
      case 'E-Waste':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Recyclable Plastic':
        return <Recycle className="w-5 h-5 text-emerald-600" />;
      case 'Biomedical Waste':
        return <Crosshair className="w-5 h-5 text-rose-600" />;
      case 'Organic Waste':
        return <Sprout className="w-5 h-5 text-amber-700" />;
      case 'Paper Waste':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Glass Waste':
        return <Wine className="w-5 h-5 text-teal-600" />;
      case 'Metal Waste':
        return <Shield className="w-5 h-5 text-cyan-700" />;
      case 'Hazardous Waste':
        return <AlertTriangle className="w-5 h-5 text-orange-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-neutral-600" />;
    }
  };

  const categoriesList = Object.values(WASTE_CATEGORIES);

  // Filtered items when a category is selected
  const activeItems = selectedCategory
    ? WASTE_ITEMS.filter((item) => item.category === selectedCategory)
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          <span>Waste Classification Standards</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Standardized Waste Categories
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore all 9 standardized waste streams, segregation criteria, accepted items, and environmental handling guidelines.
        </p>
      </div>

      {/* Category selector / Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
            selectedCategory === null
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Categories ({categoriesList.length})
        </button>
        {categoriesList.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(isSelected ? null : cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* If a category is selected: Detailed Breakdown View */}
      {selectedCategory && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in duration-200">
          {(() => {
            const cat = WASTE_CATEGORIES[selectedCategory];
            return (
              <>
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.colorTheme.bg} border ${cat.colorTheme.border}`}>
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-slate-900">{cat.name}</h2>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cat.colorTheme.badgeBg} ${cat.colorTheme.text}`}>
                          {activeItems.length} Database Items
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                        {cat.fullDesc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onLaunchScanner}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all self-start md:self-auto shrink-0 shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Scan an item now</span>
                  </button>
                </div>

                {/* Accepted vs Rejected Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Accepted */}
                  <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>What Belongs in {cat.name}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {cat.acceptedItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rejected */}
                  <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>What NOT to Mix (Contaminants)</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {cat.rejectedItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Regulations & Bin Color */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-slate-900">
                      Standard Receptacle: <span className="text-emerald-700">{cat.binLabel}</span>
                    </span>
                    <span className="text-slate-500 font-medium">
                      Color Reference: {cat.binColor}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Regulatory Note:</strong> {cat.keyRegulations}
                  </p>
                </div>

                {/* Catalog of Items for this Category */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">
                      Database Items in {cat.name} ({activeItems.length})
                    </h3>
                    <span className="text-xs text-slate-400">
                      Click any item for disposal protocol
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => onSelectItem(item)}
                        className="p-4 text-left rounded-xl border border-slate-200 bg-white hover:border-emerald-500 hover:shadow-sm transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">
                              {item.name}
                            </h4>
                            {item.hazardous && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800">
                                Hazardous
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                          <span className="truncate max-w-[150px]">{item.classification}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* 9 Categories Responsive Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          {selectedCategory ? 'All Categories Overview' : 'Select a Category to Explore'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriesList.map((cat) => {
            const count = WASTE_ITEMS.filter((it) => it.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`rounded-2xl border p-6 transition-all bg-white flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-slate-200/80 hover:border-emerald-400 hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.colorTheme.bg} border ${cat.colorTheme.border}`}>
                      {getCategoryIcon(cat.id)}
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {count} items
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-900">{cat.name}</h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {cat.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Explore items & rules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
