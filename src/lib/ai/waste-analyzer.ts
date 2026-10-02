import { ConfidenceLevel, WasteAnalysis, WasteCategory } from '../../types';
import { findBestDatabaseMatch } from '../search';
import { RawAiWasteResult, WasteAnalyzerClient } from './provider';

export function calculateConfidenceLevel(score: number): ConfidenceLevel {
  if (score >= 0.82) return 'High';
  if (score >= 0.55) return 'Moderate';
  return 'Low';
}

export class RemoteWasteAnalyzer implements WasteAnalyzerClient {
  async analyzeImage(
    imageDataBase64: string,
    mimeType: string = 'image/jpeg'
  ): Promise<WasteAnalysis> {
    const response = await fetch('/api/analyze-waste', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageDataBase64,
        mimeType: mimeType,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Analysis failed with status ${response.status}`
      );
    }

    const raw: RawAiWasteResult & { isFallback?: boolean; modelUsed?: string } =
      await response.json();

    return processRawAnalysis(raw);
  }
}

/**
 * Enriches the raw AI response by cross-referencing the authoritative waste database.
 * If a database item matches, canonical disposal instructions and safety steps are merged.
 */
export function processRawAnalysis(
  raw: RawAiWasteResult & { isFallback?: boolean; modelUsed?: string }
): WasteAnalysis {
  const confidenceScore = Math.max(0, Math.min(1, raw.confidence ?? 0.85));
  const confidenceLevel = calculateConfidenceLevel(confidenceScore);

  // Search database for authoritative match
  const matchedDbItem = findBestDatabaseMatch(raw.identifiedItem, raw.category);

  // Determine final attributes
  const finalCategory: WasteCategory = matchedDbItem
    ? matchedDbItem.category
    : raw.category || 'Other / Unknown';

  const finalClassification = matchedDbItem
    ? matchedDbItem.classification
    : raw.classification || 'General Item';

  const finalDescription = matchedDbItem
    ? matchedDbItem.description
    : raw.description;

  const finalDisposalMethod = matchedDbItem
    ? matchedDbItem.disposalMethod
    : raw.disposalMethod;

  const finalSafetyInstructions =
    matchedDbItem && matchedDbItem.safetyInstructions.length > 0
      ? matchedDbItem.safetyInstructions
      : raw.safetyInstructions?.length > 0
      ? raw.safetyInstructions
      : [
          'Verify with your municipal recycling center for regional disposal guidelines.',
          'Keep dry and free from contaminants before sorting.',
        ];

  const finalRecyclable = matchedDbItem
    ? matchedDbItem.recyclable
    : Boolean(raw.recyclable);

  const finalHazardous = matchedDbItem
    ? matchedDbItem.hazardous
    : Boolean(raw.hazardous);

  // Build possible matches list
  let possibleMatches = raw.possibleMatches || [];
  if (possibleMatches.length === 0) {
    possibleMatches = [
      {
        itemName: raw.identifiedItem,
        confidence: Math.round(confidenceScore * 100) / 100,
        category: finalCategory,
        classification: finalClassification,
      },
    ];
  }

  return {
    identifiedItem: matchedDbItem ? matchedDbItem.name : raw.identifiedItem,
    category: finalCategory,
    classification: finalClassification,
    confidence: confidenceScore,
    confidenceLevel,
    recyclable: finalRecyclable,
    hazardous: finalHazardous,
    description: finalDescription,
    disposalMethod: finalDisposalMethod,
    safetyInstructions: finalSafetyInstructions,
    possibleMatches,
    matchedDatabaseItem: matchedDbItem || null,
    detectedMaterials: raw.detectedMaterials || [],
    isFallback: raw.isFallback,
    modelUsed: raw.modelUsed || 'gemini-3.8-flash',
  };
}

export const wasteAnalyzer = new RemoteWasteAnalyzer();
