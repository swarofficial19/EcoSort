import { WasteAnalysis, WasteCategory } from '../../types';

export interface RawAiWasteResult {
  identifiedItem: string;
  category: WasteCategory;
  classification: string;
  confidence: number; // 0 to 1
  recyclable: boolean;
  hazardous: boolean;
  description: string;
  disposalMethod: string;
  safetyInstructions: string[];
  possibleMatches?: Array<{
    itemName: string;
    confidence: number;
    category: WasteCategory;
    classification?: string;
  }>;
  detectedMaterials?: string[];
  isHazardousWarningRequired?: boolean;
}

export interface WasteAnalyzerClient {
  analyzeImage(
    imageDataBase64: string,
    mimeType?: string
  ): Promise<WasteAnalysis>;
}
