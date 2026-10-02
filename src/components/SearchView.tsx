import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  Filter,
  ArrowRight,
  Database,
  Recycle,
  AlertTriangle,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { searchWasteDatabase } from '../lib/search';
import { WasteCategory, WasteItem } from '../types';
import { WASTE_CATEGORIES } from '../data/categories';

interface SearchViewProps {
  initialQuery?: string;
  onSelectItem: (item: WasteItem) => void;
  onLaunchScanner: () => void;
}

export const SearchView: React.FC<SearchViewProps> = ({
  initialQuery = '',
  onSelectItem,
  onLaunchScanner,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [categoryFilter, setCategoryFilter] = useState<WasteCategory | 'All'>('All');
  const [recyclableOnly, setRecyclableOnly] = useState(false);
  const [hazardousOnly, setHazardousOnly] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const results = searchWasteDatabase({
    query,
    category: categoryFilter,
    recyclableOnly,
    hazardousOnly,
  });

  const categories: Array<WasteCategory | 'All'> = [
    'All',
    'E-Waste',
    'Recyclable Plastic',
    'Biomedical Waste',
    'Organic Waste',
    'Paper Waste',
    'Glass Waste',
    'Metal Waste',
    'Hazardous Waste',
    'Other / Unknown',
  ];

  const popularKeywords = ['battery', 'phone', 'bottle', 'charger', 'mask', 'food', 'box', 'paint'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
          <Database className="w-3.5 h-3.5 text-emerald-600" />
          <span>Authoritative Waste Database</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Manual Waste Search
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Search over 85+ verified electronic, plastic, medical, and municipal waste items by name, alias, resin code, or keyword.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto space-y-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search items: e.g., battery, smartphone, pet bottle, paint..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-300 rounded-2xl text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick query chips */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 justify-center">
          <span>Popular searches:</span>
          {popularKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors capitalize"
            >
              {kw}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Category:
          </span>
          {categories.map((cat) => {
            const isSelected = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Checkbox toggles */}
        <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-slate-100 text-xs font-medium text-slate-700">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={recyclableOnly}
              onChange={(e) => setRecyclableOnly(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
            />
            <span>Recyclable items only</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={hazardousOnly}
              onChange={(e) => setHazardousOnly(e.target.checked)}
              className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-slate-300"
            />
            <span>Hazardous materials only</span>
          </label>

          {(categoryFilter !== 'All' || recyclableOnly || hazardousOnly || query) && (
            <button
              onClick={() => {
                setQuery('');
                setCategoryFilter('All');
                setRecyclableOnly(false);
                setHazardousOnly(false);
              }}
              className="text-emerald-700 hover:text-emerald-900 font-semibold underline underline-offset-2 ml-auto"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-800">
          Found <span className="text-emerald-700 font-bold">{results.length}</span> matching item{results.length === 1 ? '' : 's'}
        </p>
        <span className="text-xs text-slate-400">
          Click any card for full disposal instructions
        </span>
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No items match your criteria</h3>
          <p className="text-xs text-slate-500">
            Try adjusting your search query, clearing filters, or launch the AI Scanner to analyze a physical photo of the item.
          </p>
          <button
            onClick={onLaunchScanner}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch AI Scanner</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((item) => {
            const cat = WASTE_CATEGORIES[item.category] || WASTE_CATEGORIES['Other / Unknown'];

            return (
              <button
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="p-5 text-left rounded-2xl border border-slate-200/90 bg-white hover:border-emerald-500 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${cat.colorTheme.badgeBg} ${cat.colorTheme.text}`}>
                      {item.category}
                    </span>
                    {item.hazardous && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-rose-600" />
                        Hazardous
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.classification}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 truncate max-w-[200px]">
                    {item.disposalMethod}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
