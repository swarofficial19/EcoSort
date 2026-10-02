import React from 'react';
import { Recycle, Heart, ShieldCheck, ExternalLink, Leaf } from 'lucide-react';
import { ActivePage } from './Navbar';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">EcoSort</span>
            </div>
            <p className="text-emerald-400 font-medium text-sm">
              "Sort Smart. Dispose Right. Protect Our Future."
            </p>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              An AI-powered environmental tech portal built to empower households, university campuses, and communities to correctly identify, categorize, and responsibly dispose of complex e-waste and solid municipal materials.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Educational Environmental Technology Project</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('scan')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>AI Waste Scanner</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-1 rounded">
                    Core
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('search')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Manual Database Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('categories')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  9 Waste Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('guide')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Disposal Standards Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About the Project
                </button>
              </li>
            </ul>
          </div>

          {/* Environmental Compliance & Privacy */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-3">
              Safety & Integrity
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Image Storage:</strong> Uploaded images are processed solely in volatile memory for classification and immediately discarded.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Local Regulatory Variance:</strong> Disposal methods may vary by municipal rules. Always confirm with local waste authorities.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} EcoSort. Developed as an academic software engineering initiative.
          </p>
          <p className="flex items-center gap-1">
            Sort Smart <span aria-hidden="true">&middot;</span> Dispose Right <span aria-hidden="true">&middot;</span> Protect Our Future
          </p>
        </div>
      </div>
    </footer>
  );
};
