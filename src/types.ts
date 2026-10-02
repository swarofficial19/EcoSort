export type WasteCategory =
  | 'E-Waste'
  | 'Recyclable Plastic'
  | 'Biomedical Waste'
  | 'Organic Waste'
  | 'Paper Waste'
  | 'Glass Waste'
  | 'Metal Waste'
  | 'Hazardous Waste'
  | 'Other / Unknown';

export interface WasteItem {
  id: string;
  name: string;
  aliases: string[];
  category: WasteCategory;
  classification: string;
  description: string;
  disposalMethod: string;
  safetyInstructions: string[];
  recyclable: boolean;
  hazardous: boolean;
  keywords: string[];
  binColorCode?: string;
  handlingTip?: string;
  environmentalFact?: string;
}

export interface PossibleMatch {
  itemName: string;
  confidence: number;
  category: WasteCategory;
  classification?: string;
}

export type ConfidenceLevel = 'High' | 'Moderate' | 'Low';

export interface WasteAnalysis {
  identifiedItem: string;
  category: WasteCategory;
  classification: string;
  confidence: number;
  confidenceLevel: ConfidenceLevel;
  recyclable: boolean;
  hazardous: boolean;
  description: string;
  disposalMethod: string;
  safetyInstructions: string[];
  possibleMatches?: PossibleMatch[];
  matchedDatabaseItem?: WasteItem | null;
  detectedMaterials?: string[];
  isFallback?: boolean;
  modelUsed?: string;
}

export interface CategoryInfo {
  id: WasteCategory;
  name: string;
  shortDesc: string;
  fullDesc: string;
  colorTheme: {
    primary: string;
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
  };
  iconName: string;
  binColor: string;
  binLabel: string;
  acceptedItems: string[];
  rejectedItems: string[];
  keyRegulations: string;
  environmentalBenefit: string;
}
