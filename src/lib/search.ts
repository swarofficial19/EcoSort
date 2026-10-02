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
  return (name || '')
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
}

/**
 * Finds the best match in the waste database for a name produced by AI.
 * Prioritizes category alignment, exact match, alias match, and token-overlap scoring.
 */
export function findBestDatabaseMatch(
  aiDetectedName: string,
  categoryHint?: WasteCategory
): WasteItem | null {
  const normalized = normalizeWasteName(aiDetectedName);
  if (!normalized || normalized.length < 3) return null;

  // Filter items if categoryHint is specific and valid
  const targetPool =
    categoryHint && categoryHint !== 'Other / Unknown'
      ? WASTE_ITEMS.filter((item) => item.category === categoryHint)
      : WASTE_ITEMS;

  // 1. Direct exact name match in target pool first, then all items
  const exact =
    targetPool.find((item) => normalizeWasteName(item.name) === normalized) ||
    WASTE_ITEMS.find((item) => normalizeWasteName(item.name) === normalized);
  if (exact) return exact;

  // 2. Direct alias match
  const aliasMatch =
    targetPool.find((item) =>
      item.aliases.some((alias) => normalizeWasteName(alias) === normalized)
    ) ||
    WASTE_ITEMS.find((item) =>
      item.aliases.some((alias) => normalizeWasteName(alias) === normalized)
    );
  if (aliasMatch) return aliasMatch;

  // 3. Word-boundary or high-confidence substring match (only if normalized name is meaningful)
  if (normalized.length >= 4) {
    const wordBoundaryMatch =
      targetPool.find((item) => {
        const itemNameNorm = normalizeWasteName(item.name);
        return (
          itemNameNorm.includes(normalized) ||
          normalized.includes(itemNameNorm) ||
          item.aliases.some(
            (a) =>
              normalizeWasteName(a).includes(normalized) ||
              normalized.includes(normalizeWasteName(a))
          )
        );
      }) ||
      WASTE_ITEMS.find((item) => {
        const itemNameNorm = normalizeWasteName(item.name);
        return (
          itemNameNorm.includes(normalized) ||
          normalized.includes(itemNameNorm)
        );
      });

    if (wordBoundaryMatch) return wordBoundaryMatch;
  }

  // 4. Token overlap scoring with category weighting
  const tokens = normalized.split(/\s+/).filter((t) => t.length > 2);
  if (tokens.length === 0) return null;

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
      score += 4; // High weight on correct category
    }

    // Require high threshold so arbitrary words don't trigger false positives
    if (score > bestScore && score >= 5) {
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
