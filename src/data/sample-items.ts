export interface SampleItem {
  id: string;
  name: string;
  category: string;
  description: string;
  dataUrl: string;
  expectedItem: string;
}

// Generate realistic SVG image data URLs for quick demo testing
function createSvgDataUrl(title: string, subtitle: string, iconSymbol: string, bgGradient: [string, string], accentColor: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradient[0]}"/>
        <stop offset="100%" stop-color="${bgGradient[1]}"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-opacity="0.18"/>
      </filter>
    </defs>
    <rect width="600" height="600" fill="url(#grad)"/>
    <!-- Studio ground shadow -->
    <ellipse cx="300" cy="460" rx="180" ry="24" fill="#000000" opacity="0.12"/>
    <!-- Central Card Frame -->
    <rect x="120" y="90" width="360" height="380" rx="24" fill="#ffffff" filter="url(#shadow)"/>
    <!-- Inner Illustration Artwork -->
    <g transform="translate(180, 130)">
      ${iconSymbol}
    </g>
    <!-- Descriptive Label -->
    <text x="300" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#0f172a" text-anchor="middle">${title}</text>
    <text x="300" y="415" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#64748b" text-anchor="middle">${subtitle}</text>
    <rect x="250" y="435" width="100" height="6" rx="3" fill="${accentColor}"/>
    <text x="300" y="550" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#475569" text-anchor="middle">EcoSort AI Inspection Target Sample</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Visual icons in SVG
const phoneSvg = `
  <rect x="50" y="10" width="140" height="210" rx="20" fill="#1e293b"/>
  <rect x="58" y="24" width="124" height="175" rx="8" fill="#38bdf8"/>
  <circle cx="120" cy="18" r="3" fill="#64748b"/>
  <line x1="80" y1="60" x2="160" y2="120" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
  <line x1="160" y1="120" x2="110" y2="170" stroke="#ffffff" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
`;

const bottleSvg = `
  <rect x="100" y="10" width="40" height="25" rx="4" fill="#0284c7"/>
  <path d="M105,35 L95,65 L85,210 Q85,225 100,225 L140,225 Q155,225 155,210 L145,65 L135,35 Z" fill="#7dd3fc" opacity="0.85"/>
  <rect x="85" y="110" width="70" height="50" fill="#38bdf8" opacity="0.9"/>
  <text x="120" y="140" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">PET #1</text>
`;

const batterySvg = `
  <rect x="105" y="15" width="30" height="15" rx="3" fill="#94a3b8"/>
  <rect x="85" y="30" width="70" height="185" rx="12" fill="#0f172a"/>
  <rect x="85" y="130" width="70" height="85" rx="0" fill="#eab308"/>
  <text x="120" y="100" font-family="sans-serif" font-size="20" font-weight="800" fill="#ffffff" text-anchor="middle">+</text>
  <text x="120" y="165" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Li-ion</text>
  <text x="120" y="185" font-family="sans-serif" font-size="10" font-weight="600" fill="#0f172a" text-anchor="middle">RECHARGEABLE</text>
`;

const boxSvg = `
  <path d="M120,40 L190,80 L120,120 L50,80 Z" fill="#d97706"/>
  <path d="M50,80 L120,120 L120,205 L50,165 Z" fill="#b45309"/>
  <path d="M120,120 L190,80 L190,165 L120,205 Z" fill="#92400e"/>
  <line x1="85" y1="100" x2="155" y2="60" stroke="#fef3c7" stroke-width="6" stroke-linecap="round"/>
`;

const maskSvg = `
  <rect x="40" y="60" width="160" height="110" rx="12" fill="#67e8f9"/>
  <line x1="40" y1="85" x2="200" y2="85" stroke="#0891b2" stroke-width="2"/>
  <line x1="40" y1="115" x2="200" y2="115" stroke="#0891b2" stroke-width="2"/>
  <line x1="40" y1="145" x2="200" y2="145" stroke="#0891b2" stroke-width="2"/>
  <path d="M40,75 C10,75 10,155 40,155" fill="none" stroke="#e2e8f0" stroke-width="4"/>
  <path d="M200,75 C230,75 230,155 200,155" fill="none" stroke="#e2e8f0" stroke-width="4"/>
`;

const appleSvg = `
  <path d="M120,45 Q125,20 135,10 Q145,15 130,35" fill="none" stroke="#854d0e" stroke-width="5" stroke-linecap="round"/>
  <path d="M110,65 Q70,75 75,130 Q80,185 105,215 Q120,225 120,215 Q120,225 135,215 Q160,185 165,130 Q170,75 130,65 Z" fill="#ef4444"/>
  <ellipse cx="120" cy="140" rx="18" ry="40" fill="#fef08a"/>
  <circle cx="116" cy="130" r="3" fill="#451a03"/>
  <circle cx="124" cy="150" r="3" fill="#451a03"/>
`;

const canSvg = `
  <ellipse cx="120" cy="35" rx="40" ry="15" fill="#94a3b8"/>
  <rect x="80" y="35" width="80" height="170" fill="#0284c7"/>
  <ellipse cx="120" cy="205" rx="40" ry="15" fill="#0369a1"/>
  <ellipse cx="120" cy="35" rx="30" ry="10" fill="#cbd5e1"/>
  <circle cx="120" cy="35" r="4" fill="#475569"/>
  <rect x="90" y="80" width="60" height="70" fill="#ffffff" opacity="0.2"/>
  <text x="120" y="125" font-family="sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">SODA</text>
`;

const glassJarSvg = `
  <rect x="95" y="20" width="50" height="20" rx="3" fill="#d97706"/>
  <rect x="80" y="40" width="80" height="165" rx="16" fill="#a7f3d0" opacity="0.6"/>
  <line x1="88" y1="55" x2="88" y2="190" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
  <rect x="90" y="90" width="60" height="60" rx="4" fill="#ffffff" opacity="0.85"/>
  <text x="120" y="125" font-family="sans-serif" font-size="12" font-weight="700" fill="#047857" text-anchor="middle">JAR #GL</text>
`;

export const SAMPLE_ITEMS: SampleItem[] = [
  {
    id: 'sample-phone',
    name: 'Broken Smartphone',
    category: 'E-Waste',
    description: 'Cracked touchscreen mobile device with lithium battery and circuit components.',
    dataUrl: createSvgDataUrl('Mobile Phone', 'Consumer Electronics / Circuitry', phoneSvg, ['#f8fafc', '#e2e8f0'], '#6366f1'),
    expectedItem: 'Mobile Phone',
  },
  {
    id: 'sample-bottle',
    name: 'Plastic Water Bottle',
    category: 'Recyclable Plastic',
    description: 'Empty clear polyethylene terephthalate (PET #1) drinking bottle.',
    dataUrl: createSvgDataUrl('PET Plastic Bottle', 'Resin Code #1 (PET / PETE)', bottleSvg, ['#f0fdf4', '#dcfce7'], '#10b981'),
    expectedItem: 'PET Water Bottle',
  },
  {
    id: 'sample-battery',
    name: 'Lithium-Ion Battery',
    category: 'E-Waste',
    description: 'Rechargeable high-density lithium battery cell with flammable electrolyte.',
    dataUrl: createSvgDataUrl('Lithium-Ion Battery', 'Specialized Handling Required', batterySvg, ['#fff7ed', '#ffedd5'], '#f59e0b'),
    expectedItem: 'Lithium-Ion Battery',
  },
  {
    id: 'sample-box',
    name: 'Corrugated Shipping Box',
    category: 'Paper Waste',
    description: 'Dry cardboard delivery carton ready for flattening and pulping.',
    dataUrl: createSvgDataUrl('Cardboard Shipping Box', 'High-Yield Cellulose OCC', boxSvg, ['#eff6ff', '#dbeafe'], '#3b82f6'),
    expectedItem: 'Corrugated Shipping Box',
  },
  {
    id: 'sample-mask',
    name: 'Used Surgical Mask',
    category: 'Biomedical Waste',
    description: 'Single-use multi-layer polypropylene face mask with elastic loops.',
    dataUrl: createSvgDataUrl('Surgical Face Mask', 'Potentially Infectious Medical PPE', maskSvg, ['#fff1f2', '#ffe4e6'], '#f43f5e'),
    expectedItem: 'Disposable Surgical Mask / N95',
  },
  {
    id: 'sample-apple',
    name: 'Apple Core Food Scrap',
    category: 'Organic Waste',
    description: 'Biodegradable fruit core and seeds suitable for aerobic composting.',
    dataUrl: createSvgDataUrl('Apple Core Scrap', 'Compostable Organic Matter', appleSvg, ['#fefce8', '#fef9c3'], '#84cc16'),
    expectedItem: 'Apple Core & Seeds',
  },
  {
    id: 'sample-can',
    name: 'Aluminum Soda Can',
    category: 'Metal Waste',
    description: 'Empty clean beverage can made of 100% infinitely recyclable aluminum.',
    dataUrl: createSvgDataUrl('Aluminum Beverage Can', 'Non-Ferrous Recyclable Alloy', canSvg, ['#ecfeff', '#cffafe'], '#06b6d4'),
    expectedItem: 'Aluminum Beverage Can',
  },
  {
    id: 'sample-jar',
    name: 'Glass Food Preserve Jar',
    category: 'Glass Waste',
    description: 'Clean wide-mouth soda-lime glass container for pantry goods.',
    dataUrl: createSvgDataUrl('Glass Preserve Jar', 'Infinite Recyclability Soda-Lime', glassJarSvg, ['#f0fdfa', '#ccfbf1'], '#14b8a6'),
    expectedItem: 'Glass Food Preserve Jar',
  },
];
