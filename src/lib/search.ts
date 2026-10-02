import { WASTE_ITEMS } from '../data/waste-items';
import { WasteCategory, WasteItem } from '../types';

export interface SearchFilters {
  query?: string;
  category?: WasteCategory | 'All';
  recyclableOnly?: boolean;
  hazardousOnly?: boolean;
}

export function searchWasteDatabase(filters: SearchFilters): WasteItem[] {
  const { query = '', category = 'All', recyclableOnly = false, hazardousOnly = false } = filters;
  const normalizedQuery = query.toLowerCase().trim();
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);

  return WASTE_ITEMS.filter((item) => {
    // Category filter
    if (category !== 'All' && item.category !== category) {
      return false;
    }

    // Recyclable filter
    if (recyclableOnly && !item.recyclable) {
      return false;
    }

    // Hazardous filter
    if (hazardousOnly && !item.hazardous) {
      return false;
    }

    // If no query string, return all matching category/status filters
    if (queryTokens.length === 0) {
      return true;
    }

    // Check searchable fields
    const searchableString = [
      item.name,
      ...item.aliases,
      item.classification,
      item.category,
      item.description,
      ...item.keywords,
    ]
      .join(' ')
      .toLowerCase();

    // All query tokens should match
    return queryTokens.every((token) => searchableString.includes(token));
  });
}

/**
 * Normalizes text for matching AI output with database items
 */
export function normalizeWasteName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
}

/**
 * Finds the best match in the waste database for a name produced by AI.
 * Uses exact match, alias match, and token-overlap scoring.
 */
export function findBestDatabaseMatch(aiDetectedName: string, categoryHint?: WasteCategory): WasteItem | null {
  const normalized = normalizeWasteName(aiDetectedName);
  if (!normalized) return null;

  // 1. Direct name match
  const exact = WASTE_ITEMS.find(
    (item) => normalizeWasteName(item.name) === normalized
  );
  if (exact) return exact;

  // 2. Direct alias match
  const aliasMatch = WASTE_ITEMS.find((item) =>
    item.aliases.some((alias) => normalizeWasteName(alias) === normalized)
  );
  if (aliasMatch) return aliasMatch;

  // 3. Substring inclusion
  const substringMatch = WASTE_ITEMS.find(
    (item) =>
      normalized.includes(normalizeWasteName(item.name)) ||
      normalizeWasteName(item.name).includes(normalized) ||
      item.aliases.some((a) => normalized.includes(normalizeWasteName(a)))
  );
  if (substringMatch) return substringMatch;

  // 4. Token overlap scoring with optional category weighting
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 2);
  let bestScore = 0;
  let bestCandidate: WasteItem | null = null;

  for (const item of WASTE_ITEMS) {
    let score = 0;
    const itemTokens = [
      ...item.name.toLowerCase().split(/\s+/),
      ...item.keywords.map((k) => k.toLowerCase()),
      ...item.aliases.flatMap((a) => a.toLowerCase().split(/\s+/)),
    ];

    for (const t of tokens) {
      if (itemTokens.includes(t)) {
        score += 3;
      } else if (itemTokens.some((it) => it.includes(t) || t.includes(it))) {
        score += 1;
      }
    }

    if (categoryHint && item.category === categoryHint) {
      score += 2;
    }

    if (score > bestScore && score >= 3) {
      bestScore = score;
      bestCandidate = item;
    }
  }

  return bestCandidate;
}

export function getWasteItemById(id: string): WasteItem | undefined {
  return WASTE_ITEMS.find((item) => item.id === id);
}

export function getItemsByCategory(category: WasteCategory): WasteItem[] {
  return WASTE_ITEMS.filter((item) => item.category === category);
}
