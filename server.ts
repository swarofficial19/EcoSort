import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { findBestDatabaseMatch } from './src/lib/search';
import { WASTE_ITEMS } from './src/data/waste-items';
import { WasteCategory } from './src/types';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Support up to 15MB payload for base64 encoded images
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Supported image MIME types for Gemini
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/svg+xml',
];
const MAX_BASE64_LENGTH = 14 * 1024 * 1024; // Approx 10MB raw file

// Helper to initialize GoogleGenAI
function getGenAIClient(): GoogleGenAI | null {
  const apiKey =
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.GOOGLE_GENAI_API_KEY ||
    process.env.API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim() === '') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function normalizeCategory(rawCategory: string): WasteCategory {
  const lower = (rawCategory || '').toLowerCase();
  if (
    lower.includes('e-waste') ||
    lower.includes('electronic') ||
    lower.includes('battery') ||
    lower.includes('phone') ||
    lower.includes('laptop') ||
    lower.includes('computer')
  ) {
    return 'E-Waste';
  }
  if (
    lower.includes('plastic') ||
    lower.includes('pet') ||
    lower.includes('hdpe') ||
    lower.includes('poly')
  ) {
    return 'Recyclable Plastic';
  }
  if (
    lower.includes('bio') ||
    lower.includes('medic') ||
    lower.includes('clinical') ||
    lower.includes('syringe') ||
    lower.includes('sharps') ||
    lower.includes('ppe') ||
    lower.includes('mask')
  ) {
    return 'Biomedical Waste';
  }
  if (
    lower.includes('organ') ||
    lower.includes('food') ||
    lower.includes('compost') ||
    lower.includes('fruit') ||
    lower.includes('apple') ||
    lower.includes('vegetable')
  ) {
    return 'Organic Waste';
  }
  if (
    lower.includes('paper') ||
    lower.includes('cardboard') ||
    lower.includes('carton') ||
    lower.includes('box')
  ) {
    return 'Paper Waste';
  }
  if (
    lower.includes('glass') ||
    (lower.includes('jar') && !lower.includes('plastic')) ||
    (lower.includes('bottle') && !lower.includes('plastic'))
  ) {
    return 'Glass Waste';
  }
  if (
    lower.includes('metal') ||
    lower.includes('aluminum') ||
    lower.includes('steel') ||
    lower.includes('tin') ||
    lower.includes('copper') ||
    lower.includes('soda can')
  ) {
    return 'Metal Waste';
  }
  if (
    lower.includes('hazard') ||
    lower.includes('chemical') ||
    lower.includes('toxic') ||
    lower.includes('poison') ||
    lower.includes('paint') ||
    lower.includes('acid')
  ) {
    return 'Hazardous Waste';
  }
  return 'Other / Unknown';
}

// POST /api/analyze-waste
app.post('/api/analyze-waste', async (req, res) => {
  try {
    const { image, mimeType = 'image/jpeg' } = req.body;

    if (!image || typeof image !== 'string') {
      return res.status(400).json({
        error: 'Please upload an image to analyze.',
      });
    }

    // Check payload size
    if (image.length > MAX_BASE64_LENGTH) {
      return res.status(400).json({
        error: 'Please upload an image smaller than 10 MB.',
      });
    }

    // Clean base64 string
    let cleanBase64 = image;
    let actualMime = mimeType;

    if (image.startsWith('data:')) {
      const commaIdx = image.indexOf(',');
      if (commaIdx !== -1) {
        const header = image.slice(0, commaIdx);
        const mimeMatch = header.match(/data:([^;]+)/);
        if (mimeMatch) {
          actualMime = mimeMatch[1];
        }
        cleanBase64 = image.slice(commaIdx + 1).replace(/\s+/g, '');
      }
    }

    // Normalize MIME type
    if (actualMime === 'image/svg+xml') {
      actualMime = 'image/png';
    }

    if (!ALLOWED_MIME_TYPES.includes(actualMime.toLowerCase())) {
      return res.status(400).json({
        error: 'Please upload a JPG, PNG, JPEG, or WEBP image.',
      });
    }

    const ai = getGenAIClient();

    if (!ai) {
      return res.status(503).json({
        error:
          'EcoSort AI service is temporarily unavailable. Please configure GEMINI_API_KEY or use manual database search.',
      });
    }

    const prompt = `You are EcoSort AI, an expert environmental vision classifier specialized in solid waste and e-waste segregation.
Examine this image carefully and determine:
1. What the object ACTUALLY is (e.g., if you see a water bottle, say "PET Water Bottle"; if you see an apple core, say "Apple Core & Seeds"; if you see a battery, say "Lithium-Ion Battery" or "Alkaline Battery"; if you see cardboard, say "Corrugated Shipping Box"; if you see a mask, say "Disposable Surgical Mask"; if you see a soda can, say "Aluminum Beverage Can"; if you see a glass jar, say "Glass Food Preserve Jar"; if you see a phone, say "Mobile Phone").
2. Choose its accurate waste category from exactly these choices:
   - "E-Waste"
   - "Recyclable Plastic"
   - "Biomedical Waste"
   - "Organic Waste"
   - "Paper Waste"
   - "Glass Waste"
   - "Metal Waste"
   - "Hazardous Waste"
   - "Other / Unknown"
3. Specific classification (e.g. "Resin Code #1 (PET)", "Consumer Electronics", "Clinical PPE", "Compostable Food Waste", "Corrugated Cardboard").
4. Estimated confidence score from 0.0 to 1.0. If the image is blurry, ambiguous, or unrecognizable, set confidence below 0.5.
5. Whether it is recyclable (true/false).
6. Whether it is hazardous (true/false, e.g. batteries, needles, chemicals, and gas cylinders are hazardous).
7. Brief description of the object.
8. Responsible and safe disposal method.
9. 3-4 specific safety instructions (e.g. data wiping, battery isolation, rinsing, sharp puncture protection).
10. Up to 3 alternative possible matches if there is any ambiguity.`;

    // Multi-model resilience: try flash-lite first, then flash-latest, then 3.8-flash
    const candidateModels = [
      'gemini-3.1-flash-lite',
      'gemini-flash-latest',
      'gemini-3.8-flash',
    ];

    let lastError: any = null;
    let parsedResult: any = null;
    let successfulModel = '';

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: {
            parts: [
              {
                inlineData: {
                  mimeType: actualMime,
                  data: cleanBase64,
                },
              },
              { text: prompt },
            ],
          },
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                identifiedItem: { type: Type.STRING },
                category: {
                  type: Type.STRING,
                  enum: [
                    'E-Waste',
                    'Recyclable Plastic',
                    'Biomedical Waste',
                    'Organic Waste',
                    'Paper Waste',
                    'Glass Waste',
                    'Metal Waste',
                    'Hazardous Waste',
                    'Other / Unknown',
                  ],
                },
                classification: { type: Type.STRING },
                confidence: { type: Type.NUMBER },
                recyclable: { type: Type.BOOLEAN },
                hazardous: { type: Type.BOOLEAN },
                description: { type: Type.STRING },
                disposalMethod: { type: Type.STRING },
                safetyInstructions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                detectedMaterials: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
                possibleMatches: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      itemName: { type: Type.STRING },
                      confidence: { type: Type.NUMBER },
                      category: {
                        type: Type.STRING,
                        enum: [
                          'E-Waste',
                          'Recyclable Plastic',
                          'Biomedical Waste',
                          'Organic Waste',
                          'Paper Waste',
                          'Glass Waste',
                          'Metal Waste',
                          'Hazardous Waste',
                          'Other / Unknown',
                        ],
                      },
                      classification: { type: Type.STRING },
                    },
                    required: ['itemName', 'confidence', 'category'],
                  },
                },
              },
              required: [
                'identifiedItem',
                'category',
                'classification',
                'confidence',
                'recyclable',
                'hazardous',
                'description',
                'disposalMethod',
                'safetyInstructions',
              ],
            },
          },
        });

        const text = response.text;
        if (text) {
          parsedResult = JSON.parse(text);
          successfulModel = modelName;
          break; // Succeeded!
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed or unavailable:`, err?.message || err);
        lastError = err;
        // Continue to next model in candidateModels
      }
    }

    if (parsedResult) {
      // Normalize category in case model produced slight variant
      const category = normalizeCategory(parsedResult.category);

      return res.json({
        ...parsedResult,
        category,
        isFallback: false,
        modelUsed: successfulModel,
      });
    }

    // If ALL models failed (e.g. 503 on all or network failure)
    console.error('All Gemini candidate models failed:', lastError?.message || lastError);
    return res.status(503).json({
      error:
        'EcoSort AI is temporarily unavailable due to high model demand. Please try again in a few moments or search manually in the database.',
      details: lastError?.message,
    });
  } catch (error: any) {
    console.error('General error in analyze-waste endpoint:', error);
    return res.status(500).json({
      error: 'Unable to connect to the analysis service. Please try again.',
      details: error?.message,
    });
  }
});

// Search API endpoint (also available client-side)
app.get('/api/search', (req, res) => {
  const query = (req.query.q as string) || '';
  const match = findBestDatabaseMatch(query);
  res.json({ match });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EcoSort server listening on http://localhost:${PORT}`);
  });
}

startServer();
