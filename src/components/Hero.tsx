import React from 'react';
import {
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Recycle,
  Cpu,
  Sprout,
  CheckCircle2,
  TrendingDown,
  Globe2,
  Search,
} from 'lucide-react';
import { ActivePage } from './Navbar';
import { SAMPLE_ITEMS } from '../data/sample-items';

interface HeroProps {
  setActivePage: (page: ActivePage) => void;
  onSelectSampleItem?: (sampleName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActivePage, onSelectSampleItem }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-teal-50/20 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14 pb-12">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-6 border border-emerald-200/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI-Powered E-Waste & Solid Waste Segregation Portal</span>
          </div>

          {/* Main Large Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-[1.12]">
            Identify Waste. <span className="text-emerald-700">Sort Smart.</span> Protect Our Future.
          </h1>

          {/* Supporting text */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Use EcoSort AI to identify everyday waste from a photo and discover the right way to segregate and dispose of it.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActivePage('scan')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md shadow-emerald-700/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Sparkles className="w-5 h-5 text-emerald-200" />
              <span>Scan Waste with AI</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setActivePage('categories')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>Explore Waste Categories</span>
            </button>
          </div>

          {/* Trust points */}
          <div className="mt-10 pt-6 border-t border-slate-200/60 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              9 Standard Waste Streams
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Hazardous Toxin Protection
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Ephemeral Zero Storage
            </span>
          </div>
        </div>

        {/* Environmental-Tech Flow Diagram: Waste Item → AI → Correct Category → Responsible Disposal */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="text-center mb-6">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Architectural Segregation Pipeline
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-1">
                How EcoSort Transforms Waste Management
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-2 relative group hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Waste Item</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Snap or upload a photograph of unknown electronic, plastic, or municipal waste.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-left space-y-2 relative group hover:border-emerald-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-bold text-emerald-950 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Gemini Vision AI</span>
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Neural network analyzes form factors, resins, ports, and toxicity signatures in seconds.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-2 relative group hover:border-emerald-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Correct Category</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Matches item to authoritative database standards across 9 defined environmental streams.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 text-left space-y-2 relative group hover:border-teal-400 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h4 className="font-bold text-teal-950 text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Safe Disposal</span>
                </h4>
                <p className="text-xs text-teal-800 leading-relaxed">
                  User receives verified actionable instructions, target bin standards, and safety precautions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Test Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              Interactive University Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Ready to test the AI scanner?
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Don't have an item nearby? Launch the scanner directly and pick any of our curated testing targets to see instant classification in action.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActivePage('scan')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Scanner Now</span>
              </button>

              <button
                onClick={() => setActivePage('search')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Search 85+ Database Items</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 -bottom-10 opacity-15 pointer-events-none">
            <Recycle className="w-96 h-96 text-emerald-400" />
          </div>
        </div>
      </section>

      {/* Section 25: Why Waste Segregation Matters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            The Circular Imperative
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Why Waste Segregation Matters
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Source segregation is the single most critical factor in enabling high-efficiency circular recycling and shielding ecosystems from toxic leachates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Environmental Protection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Diverts persistent heavy metals (lead, cadmium, mercury) and synthetic microplastics from soil and municipal freshwater reservoirs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <Recycle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Resource Recovery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conserves critical mineral reserves: recycling copper and aluminum uses up to 95% less energy than raw bauxite and ore smelting.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Public Health & Worker Safety</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protects sanitation professionals from hazardous medical needle sticks, exploding lithium cells, and toxic pesticide inhalations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Reduced Landfill Methane</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Composting diverted organic waste prevents anaerobic decomposition, mitigating potent methane emissions responsible for global warming.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
