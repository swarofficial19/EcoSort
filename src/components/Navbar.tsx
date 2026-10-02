import React, { useState } from 'react';
import { Menu, X, Recycle, Sparkles, Search, Layers, BookOpen, Info, ShieldAlert } from 'lucide-react';

export type ActivePage = 'home' | 'scan' | 'search' | 'categories' | 'guide' | 'about';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: ActivePage; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Recycle className="w-4 h-4" /> },
    { id: 'scan', label: 'AI Scanner', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'search', label: 'Search', icon: <Search className="w-4 h-4" /> },
    { id: 'categories', label: 'Categories', icon: <Layers className="w-4 h-4" /> },
    { id: 'guide', label: 'Disposal Guide', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 flex items-center justify-center shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center text-white">
                <Recycle className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-emerald-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                  EcoSort
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-normal">
                Waste Segregation Portal
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <span className={isActive ? 'text-emerald-600' : 'text-slate-400'}>
                    {link.icon}
                  </span>
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNav('scan')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Sparkles className="w-4 h-4 text-emerald-100" />
              <span>Scan Waste</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNav('scan')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-md shadow-sm"
            >
              Scan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-emerald-600' : 'text-slate-400'}>
                  {link.icon}
                </span>
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNav('scan')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              Launch AI Scanner
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
