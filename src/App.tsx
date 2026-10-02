/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, ActivePage } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Scanner } from './components/Scanner';
import { CategoriesView } from './components/CategoriesView';
import { DisposalGuideView } from './components/DisposalGuideView';
import { SearchView } from './components/SearchView';
import { AboutView } from './components/AboutView';
import { WasteItemDetailModal } from './components/WasteItemDetailModal';
import { WasteCategory, WasteItem } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<WasteCategory | null>(null);
  const [selectedModalItem, setSelectedModalItem] = useState<WasteItem | null>(null);

  // Sync state with URL path on mount
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      const queryParam = params.get('query') || params.get('q');

      if (queryParam) {
        setSearchQuery(queryParam);
      }

      if (path.startsWith('/scan')) {
        setActivePage('scan');
      } else if (path.startsWith('/search')) {
        setActivePage('search');
      } else if (path.startsWith('/categories')) {
        setActivePage('categories');
      } else if (path.startsWith('/disposal-guide') || path.startsWith('/guide')) {
        setActivePage('guide');
      } else if (path.startsWith('/about')) {
        setActivePage('about');
      } else {
        setActivePage('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Update browser URL on page change without full reload
  const navigateTo = (page: ActivePage, query?: string) => {
    setActivePage(page);
    let newPath = '/';
    if (page === 'scan') newPath = '/scan';
    else if (page === 'search') newPath = query ? `/search?query=${encodeURIComponent(query)}` : '/search';
    else if (page === 'categories') newPath = '/categories';
    else if (page === 'guide') newPath = '/disposal-guide';
    else if (page === 'about') newPath = '/about';

    if (query !== undefined) {
      setSearchQuery(query);
    }

    try {
      window.history.pushState({}, '', newPath);
    } catch {
      // Ignore in sandbox iframe environments
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchItemFromAi = (itemQuery: string) => {
    setSearchQuery(itemQuery);
    navigateTo('search', itemQuery);
  };

  const handleExploreCategory = (categoryName: string) => {
    setSelectedCategory(categoryName as WasteCategory);
    navigateTo('categories');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Universal Responsive Navbar */}
      <Navbar activePage={activePage} setActivePage={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <Hero
            setActivePage={navigateTo}
            onSelectSampleItem={(name) => {
              setSearchQuery(name);
              navigateTo('search', name);
            }}
          />
        )}

        {activePage === 'scan' && (
          <Scanner
            onSearchItem={handleSearchItemFromAi}
            onExploreCategory={handleExploreCategory}
          />
        )}

        {activePage === 'categories' && (
          <CategoriesView
            initialCategory={selectedCategory}
            onSelectItem={(item) => setSelectedModalItem(item)}
            onLaunchScanner={() => navigateTo('scan')}
          />
        )}

        {activePage === 'search' && (
          <SearchView
            initialQuery={searchQuery}
            onSelectItem={(item) => setSelectedModalItem(item)}
            onLaunchScanner={() => navigateTo('scan')}
          />
        )}

        {activePage === 'guide' && (
          <DisposalGuideView onLaunchScanner={() => navigateTo('scan')} />
        )}

        {activePage === 'about' && (
          <AboutView setActivePage={navigateTo} />
        )}
      </main>

      {/* Item Detail Modal */}
      <WasteItemDetailModal
        item={selectedModalItem}
        onClose={() => setSelectedModalItem(null)}
        onScanItem={() => navigateTo('scan')}
        onSearchItem={(query) => {
          setSelectedModalItem(null);
          handleSearchItemFromAi(query);
        }}
      />

      {/* Universal Footer */}
      <Footer setActivePage={navigateTo} />
    </div>
  );
}
