import { WasteItem } from '../types';

export const WASTE_ITEMS: WasteItem[] = [
  // ================= E-WASTE (15 items) =================
  {
    id: 'ew-mobile-phone',
    name: 'Mobile Phone',
    aliases: ['Smartphone', 'Cell phone', 'iPhone', 'Android phone'],
    category: 'E-Waste',
    classification: 'Consumer Electronics',
    description: 'An electronic handheld communication device containing lithium batteries, precious metals (gold, palladium), circuit boards, and glass screens.',
    disposalMethod: 'Take the phone to an authorized e-waste collection center, mobile carrier trade-in kiosk, or municipal electronics recycling depot.',
    safetyInstructions: [
      'Back up all personal files and perform a complete factory wipe.',
      'Remove SIM card and microSD cards.',
      'Never throw smartphones into ordinary household trash cans.',
      'If the internal battery is visibly swollen or punctured, seal in a fireproof sand container and handle with extreme care.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['phone', 'mobile', 'smartphone', 'cellphone', 'iphone', 'android', 'handset'],
    binColorCode: 'Indigo / Designated E-waste drop box',
    handlingTip: 'Most major retailers and carriers accept old phones for recycling free of charge.',
    environmentalFact: 'Recycling one million mobile phones can recover 35,000 lbs of copper, 772 lbs of silver, and 75 lbs of gold.'
  },
  {
    id: 'ew-laptop',
    name: 'Laptop Computer',
    aliases: ['Notebook', 'MacBook', 'Chromebook', 'PC Laptop'],
    category: 'E-Waste',
    classification: 'Computing Hardware',
    description: 'Portable computing unit featuring microprocessors, aluminum or magnesium casing, LCD/OLED display, and a high-capacity lithium battery pack.',
    disposalMethod: 'Bring to a certified e-waste recycler, electronics retailer drop-off point, or municipal electronics roundup event.',
    safetyInstructions: [
      'Securely format or physically degauss the internal SSD/HDD to protect privacy.',
      'Remove external power cables and bundle them separately.',
      'Do not crush or puncture the device to prevent lithium battery thermal runaway.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['laptop', 'notebook', 'macbook', 'chromebook', 'computer', 'pc'],
    binColorCode: 'Indigo / Electronics depot'
  },
  {
    id: 'ew-lithium-battery',
    name: 'Lithium-Ion Battery',
    aliases: ['Li-ion battery', 'Rechargeable battery', '18650 cell', 'Drone battery'],
    category: 'E-Waste',
    classification: 'Rechargeable Energy Storage',
    description: 'High energy-density rechargeable electrochemical cell found in laptops, power banks, e-bikes, and cordless tools.',
    disposalMethod: 'Deposit in a dedicated battery recycling drop box (e.g. Call2Recycle, retail electronics stores, or hazardous waste depots).',
    safetyInstructions: [
      'Tape battery contact terminals with clear electrical tape to prevent short-circuit sparks.',
      'Store in a cool, dry place before dropping off.',
      'NEVER dispose of in regular curbside trash or standard recycling bins due to severe truck and landfill fire hazard.',
      'If swollen or leaking, isolate in a non-conductive bucket of dry sand.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['battery', 'lithium', 'li-ion', 'rechargeable', '18650', 'cell', 'powerbank'],
    binColorCode: 'Yellow/Red Dedicated Battery Caddy'
  },
  {
    id: 'ew-alkaline-battery',
    name: 'Alkaline Battery',
    aliases: ['AA Battery', 'AAA Battery', '9V Battery', 'D-cell battery'],
    category: 'E-Waste',
    classification: 'Single-Use Electrochemical Cell',
    description: 'Non-rechargeable zinc-manganese dioxide battery used in remotes, clocks, toys, and flashlights.',
    disposalMethod: 'Drop off at community battery recycling bins or retail hardware collection bins.',
    safetyInstructions: [
      'Tape 9-volt battery terminals with clear scotch or electrical tape to prevent ignition.',
      'Do not incinerate or expose to open flames.',
      'Separate corroded batteries with chalky white residue using rubber gloves.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['battery', 'alkaline', 'aa', 'aaa', '9v', 'c-cell', 'd-cell'],
    binColorCode: 'Battery Collection Container'
  },
  {
    id: 'ew-charger-cable',
    name: 'Phone Charger & USB Cable',
    aliases: ['Charging brick', 'Power adapter', 'USB-C cord', 'Lightning cable'],
    category: 'E-Waste',
    classification: 'Small Electronics Accessory',
    description: 'Thermoplastic insulated copper wiring and transformer brick used to deliver electric power to consumer devices.',
    disposalMethod: 'Place in designated e-waste bins at electronics stores or community recycling centers.',
    safetyInstructions: [
      'Untangle and coil cords neatly before donation or recycling.',
      'Do not throw in curbside recycling as long cords tangle and jam sorting conveyor rollers (tanglers).'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['charger', 'cable', 'cord', 'adapter', 'usb', 'usb-c', 'lightning', 'wire'],
    binColorCode: 'Small e-waste receptacle'
  },
  {
    id: 'ew-keyboard',
    name: 'Computer Keyboard',
    aliases: ['Mechanical keyboard', 'Membrane keyboard', 'PC keyboard', 'Wireless keyboard'],
    category: 'E-Waste',
    classification: 'Peripheral Device',
    description: 'Input device containing ABS keycaps, flexible circuit membranes, metal backplates, and microcontrollers.',
    disposalMethod: 'Deliver to an authorized e-waste collection bin or refurbishing nonprofit.',
    safetyInstructions: [
      'Remove replaceable AA/AAA batteries before recycling.',
      'If functional, consider donating to schools or charitable refurbishers.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['keyboard', 'keycaps', 'typing', 'peripheral', 'computer accessories']
  },
  {
    id: 'ew-computer-mouse',
    name: 'Computer Mouse',
    aliases: ['Optical mouse', 'Wireless mouse', 'Trackball', 'Gaming mouse'],
    category: 'E-Waste',
    classification: 'Peripheral Device',
    description: 'Handheld pointing device with optical sensor LEDs, microswitches, plastic shell, and USB transceiver.',
    disposalMethod: 'E-waste collection station or manufacturer take-back scheme.',
    safetyInstructions: [
      'Remove alkaline or rechargeable batteries from wireless models.',
      'Do not place in curbside blue recycling bins.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['mouse', 'optical mouse', 'pointing device', 'peripheral']
  },
  {
    id: 'ew-earbuds',
    name: 'Wireless Earbuds & Headphones',
    aliases: ['AirPods', 'Bluetooth headphones', 'Earphones', 'Headset'],
    category: 'E-Waste',
    classification: 'Personal Audio Equipment',
    description: 'Compact audio equipment featuring miniature lithium-polymer cells, dynamic drivers, and Bluetooth chips.',
    disposalMethod: 'Drop off at consumer tech retailers or specialized e-waste dropboxes.',
    safetyInstructions: [
      'Wipe off ear tips before recycling.',
      'Contains lithium pouch cells; never throw in household trash.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['earbuds', 'airpods', 'headphones', 'earphones', 'headset', 'audio']
  },
  {
    id: 'ew-printer',
    name: 'Inkjet / Laser Printer',
    aliases: ['Desktop printer', 'All-in-one scanner', 'Office printer'],
    category: 'E-Waste',
    classification: 'Large Peripheral',
    description: 'Printing hardware incorporating servo motors, toner/ink carriages, heating rollers, and circuit assemblies.',
    disposalMethod: 'Take to a municipal bulky e-waste center or major electronics store takeback program.',
    safetyInstructions: [
      'Remove ink or toner cartridges separately for cartridge recycling.',
      'Remove all paper jams and personal printed sheets from the paper feed.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['printer', 'scanner', 'inkjet', 'laserjet', 'copier']
  },
  {
    id: 'ew-pcb',
    name: 'Computer Motherboard / Circuit Board',
    aliases: ['PCB', 'Logic board', 'RAM module', 'Graphics card'],
    category: 'E-Waste',
    classification: 'Component Level E-Waste',
    description: 'Fiberglass substrate printed circuit board populated with integrated circuits, capacitors, resistors, and gold-plated pins.',
    disposalMethod: 'Licensed e-scrap smelting and precious metal recovery processors.',
    safetyInstructions: [
      'Store in an antistatic bag to prevent chip breakage.',
      'Contains solder and brominated flame retardants; never burn or heat over open flame.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['motherboard', 'circuit board', 'pcb', 'ram', 'gpu', 'graphics card', 'hardware']
  },
  {
    id: 'ew-electric-kettle',
    name: 'Electric Kettle',
    aliases: ['Tea kettle', 'Water heater appliance', 'Corded kettle'],
    category: 'E-Waste',
    classification: 'Small Domestic Appliance (SDA)',
    description: 'Countertop kitchen appliance with heating coil element, thermostat, and plastic/stainless body.',
    disposalMethod: 'Municipal small electrical appliance recycling skip.',
    safetyInstructions: [
      'Empty all residual water and allow to cool completely.',
      'Wrap power cord around base.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['kettle', 'tea kettle', 'electric kettle', 'kitchen appliance']
  },
  {
    id: 'ew-microwave',
    name: 'Microwave Oven',
    aliases: ['Countertop microwave', 'Microwave appliance'],
    category: 'E-Waste',
    classification: 'White Goods / SDA',
    description: 'Household cooking appliance containing magnetron tube, heavy transformer, cooling fan, and metal chassis.',
    disposalMethod: 'Bulky appliance drop-off day or municipal e-waste recycling depot.',
    safetyInstructions: [
      'WARNING: High-voltage internal capacitor can hold lethal electric charge even after being unplugged for weeks. NEVER attempt to open or dismantle the internal case.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['microwave', 'microwave oven', 'oven', 'appliance']
  },
  {
    id: 'ew-usb-drive',
    name: 'USB Flash Drive',
    aliases: ['Thumb drive', 'Memory stick', 'Flash drive', 'Pen drive'],
    category: 'E-Waste',
    classification: 'Storage Media',
    description: 'Solid-state NAND flash memory packaged in a compact plastic/metal housing with USB connector.',
    disposalMethod: 'Small electronics collection bin or secure document shredding / tech disposal service.',
    safetyInstructions: [
      'Cryptographically erase or physically destroy data chip before discarding if it contains sensitive info.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['usb', 'flash drive', 'thumb drive', 'pen drive', 'memory stick']
  },
  {
    id: 'ew-crt-monitor',
    name: 'CRT Monitor / Old Television',
    aliases: ['Cathode ray tube', 'Old box TV', 'Tube monitor'],
    category: 'E-Waste',
    classification: 'Hazardous E-Waste',
    description: 'Heavy vacuum tube display containing up to 4–8 pounds of toxic leaded glass, phosphorus coating, and high voltage flyback transformers.',
    disposalMethod: 'Mandatory certified hazardous e-waste recycling facility.',
    safetyInstructions: [
      'Do not crack or smash the glass funnel; danger of vacuum implosion and toxic lead dust dispersal.',
      'Handle with two people due to heavy front-weighted glass.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['crt', 'box tv', 'old monitor', 'cathode ray tube', 'television']
  },
  {
    id: 'ew-tablet',
    name: 'Tablet / iPad',
    aliases: ['iPad', 'Android tablet', 'Graphics drawing tablet', 'E-reader'],
    category: 'E-Waste',
    classification: 'Consumer Electronics',
    description: 'Glass-fronted mobile computing tablet with integrated lithium battery and capacitive touchscreen.',
    disposalMethod: 'Authorized electronic drop-off or manufacturer trade-in.',
    safetyInstructions: [
      'Wipe personal account data and remove lock codes.',
      'Keep dry and do not bend.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['tablet', 'ipad', 'kindle', 'ereader', 'slate']
  },

  // ================= RECYCLABLE PLASTIC (14 items) =================
  {
    id: 'rp-pet-bottle',
    name: 'PET Water Bottle',
    aliases: ['Plastic bottle', 'Soda bottle', 'Drink bottle', 'Polyethylene terephthalate bottle'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #1 (PET / PETE)',
    description: 'Transparent beverage container molded from polyethylene terephthalate resin, widely reprocessed into clean polyester fiber and rPET bottles.',
    disposalMethod: 'Curbside recycling bin or regional container deposit return scheme kiosk (bottle depot).',
    safetyInstructions: [
      'Empty all liquid contents completely.',
      'Lightly rinse if sweet soda or juice was contained.',
      'Crush flat to save volumetric space in recycling trucks.',
      'Screw plastic cap back onto bottle so it does not get lost in sorting screens.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['pet', 'bottle', 'water bottle', 'soda bottle', 'plastic bottle', 'drink bottle'],
    binColorCode: 'Yellow / Blue Recycling Bin',
    handlingTip: 'Bottle caps are accepted when screwed tightly onto the flattened bottle in most modern MRFs.'
  },
  {
    id: 'rp-milk-jug',
    name: 'HDPE Milk Jug',
    aliases: ['Milk container', 'High density polyethylene jug', 'Gallon jug'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #2 (HDPE)',
    description: 'Sturdy, translucent or opaque plastic jug with molded carry handle, made from high-density polyethylene.',
    disposalMethod: 'Clean domestic curbside recycling bin.',
    safetyInstructions: [
      'Rinse thoroughly with water to avoid sour milk odor and mold.',
      'Flatten and recap.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['milk jug', 'hdpe', 'plastic jug', 'milk bottle']
  },
  {
    id: 'rp-shampoo-bottle',
    name: 'Shampoo / Conditioner Bottle',
    aliases: ['Body wash bottle', 'Lotion bottle', 'Cosmetic plastic bottle'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #2 (HDPE) or #5 (PP)',
    description: 'Rigid bathroom product container for liquid soaps, shampoos, and lotions.',
    disposalMethod: 'Household plastic recycling container.',
    safetyInstructions: [
      'Rinse out soapy residues with warm water.',
      'Discard pump dispensers in regular trash unless they are 100% monomaterial plastic (spring pumps contain metal).'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['shampoo', 'conditioner', 'body wash', 'lotion bottle', 'bathroom plastic']
  },
  {
    id: 'rp-detergent-bottle',
    name: 'Laundry Detergent Jug',
    aliases: ['Bleach jug (plastic)', 'Fabric softener container'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #2 (HDPE)',
    description: 'Thick, colorful molded plastic bottle engineered for liquid household laundry detergents.',
    disposalMethod: 'Curbside recycling container.',
    safetyInstructions: [
      'Rinse until clear of soapy residue.',
      'Replace cap firmly.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['detergent', 'laundry jug', 'fabric softener', 'cleaning plastic']
  },
  {
    id: 'rp-food-container',
    name: 'Polypropylene Food Container',
    aliases: ['Takeout tub', 'Yogurt tub', 'Margarine tub', 'Meal prep container'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #5 (PP)',
    description: 'Durable, microwave-safe plastic tub commonly used for dairy spreads, yogurt, and deli takeaways.',
    disposalMethod: 'Curbside plastics recycling.',
    safetyInstructions: [
      'Scrape all food scraps into compost or organic waste.',
      'Quick rinse with water to ensure grease is minimized.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['yogurt tub', 'takeout container', 'tupperware', 'polypropylene', 'plastic tub']
  },
  {
    id: 'rp-plastic-bottle-cap',
    name: 'Plastic Bottle Cap',
    aliases: ['Screw cap', 'Soda cap', 'Polypropylene cap'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #5 (PP) or #2 (HDPE)',
    description: 'Small injection-molded plastic cap used to seal beverage bottles.',
    disposalMethod: 'Fasten firmly onto empty, crushed plastic bottles before placing in recycling.',
    safetyInstructions: [
      'Do not throw loose into recycling bins; loose small caps fall through conveyor sorting grates.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['bottle cap', 'plastic cap', 'lid', 'screw top']
  },
  {
    id: 'rp-plastic-plant-pot',
    name: 'Plastic Plant Pot',
    aliases: ['Nursery pot', 'Gardening pot', 'Seedling tray'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #5 (PP)',
    description: 'Thin black or colored plastic container used for transporting nursery shrubs and flowers.',
    disposalMethod: 'Return to garden nursery return depot or verify local council accepts rigid black plastics.',
    safetyInstructions: [
      'Shake loose all garden soil and dirt before disposal.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['plant pot', 'nursery pot', 'gardening plastic', 'flower pot']
  },
  {
    id: 'rp-plastic-grocery-bag',
    name: 'Plastic Grocery Bag',
    aliases: ['Shopping bag', 'Poly bag', 'Single-use plastic bag'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #4 (LDPE Film)',
    description: 'Flexible thin-film shopping carrier bag made from low-density polyethylene.',
    disposalMethod: 'Return to supermarket soft-plastic collection bin. DO NOT place in curbside recycling bins!',
    safetyInstructions: [
      'Keep dry and shake out receipts or crumbs.',
      'Never put in household recycling carts; causes severe machine gear tangling at sorting plants.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['plastic bag', 'grocery bag', 'shopping bag', 'carrier bag', 'ldpe']
  },
  {
    id: 'rp-bubble-wrap',
    name: 'Bubble Wrap Packaging',
    aliases: ['Cushioning wrap', 'Plastic air bubbles'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #4 (LDPE)',
    description: 'Air-filled transparent cushioning film used for packing fragile mail parcels.',
    disposalMethod: 'Store drop-off soft plastic recycling bin.',
    safetyInstructions: [
      'Pop air bubbles to minimize volume.',
      'Separate from paper shipping envelopes.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['bubble wrap', 'packing bubbles', 'cushioning film', 'soft plastic']
  },
  {
    id: 'rp-clamshell',
    name: 'Clear Plastic Berry Clamshell',
    aliases: ['Produce container', 'Berry box', 'Strawberry container'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #1 (Thermoformed PET)',
    description: 'Hinged clear plastic vented box used for supermarket strawberries, blueberries, and baked goods.',
    disposalMethod: 'Curbside recycling (check local guidelines for thermoformed plastic acceptance).',
    safetyInstructions: [
      'Remove absorbent paper/pad from bottom.',
      'Rinse away fruit juice residues.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['clamshell', 'berry box', 'fruit container', 'plastic box']
  },
  {
    id: 'rp-plastic-cutlery',
    name: 'Disposable Plastic Cutlery',
    aliases: ['Plastic fork', 'Plastic spoon', 'Plastic knife'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #6 (PS) or #5 (PP)',
    description: 'Single-use eating utensils supplied with takeaway meals.',
    disposalMethod: 'Usually non-recyclable in standard curbside bins due to shape and resin type; place in general waste if not reusable.',
    safetyInstructions: [
      'Wipe off food sauces.',
      'Consider switching to reusable stainless or bamboo utensils.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['plastic fork', 'plastic spoon', 'plastic knife', 'cutlery']
  },
  {
    id: 'rp-squeeze-bottle',
    name: 'Condiment Squeeze Bottle',
    aliases: ['Ketchup bottle', 'Mustard bottle', 'Mayonnaise squeeze bottle'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #1 (PET) or #2 (HDPE)',
    description: 'Flexible food squeeze container with silicone dispensing valve.',
    disposalMethod: 'Curbside recycling container.',
    safetyInstructions: [
      'Fill half with water, shake and rinse away all leftover sauces.',
      'Greasy contaminated containers cannot be recycled cleanly.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['ketchup bottle', 'sauce bottle', 'squeeze bottle', 'condiment']
  },
  {
    id: 'rp-plastic-cup',
    name: 'Rigid Clear Plastic Party Cup',
    aliases: ['Solo cup', 'Plastic tumbler', 'Disposable party cup'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #6 (PS) or #5 (PP)',
    description: 'Rigid colored or clear drink cup used at outdoor parties and events.',
    disposalMethod: 'Check municipal guidelines; #5 is widely recycled, while #6 polystyrene goes to general waste.',
    safetyInstructions: [
      'Empty ice and drinks.',
      'Do not crush into flat slivers.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['solo cup', 'plastic cup', 'party cup', 'drink cup']
  },
  {
    id: 'rp-pill-bottle',
    name: 'Empty Plastic Prescription Pill Bottle',
    aliases: ['Medicine bottle', 'Vial', 'Amber pill bottle'],
    category: 'Recyclable Plastic',
    classification: 'Resin Code #5 (PP)',
    description: 'Amber or opaque polypropylene medicine container with child-resistant cap.',
    disposalMethod: 'Curbside recycling bin or pharmacy donation programs.',
    safetyInstructions: [
      'Peel off or black out with permanent marker all personal patient information on label.',
      'Ensure completely empty of pharmaceutical pills.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['pill bottle', 'prescription bottle', 'medicine container', 'vial']
  },

  // ================= BIOMEDICAL WASTE (11 items) =================
  {
    id: 'bm-syringe',
    name: 'Used Syringe & Hypodermic Needle',
    aliases: ['Needle', 'Syringe with needle', 'Injection needle', 'Sharps'],
    category: 'Biomedical Waste',
    classification: 'Sharps / Biohazardous Infectious Waste',
    description: 'Puncture-capable medical delivery device potentially contaminated with human blood and bodily fluids.',
    disposalMethod: 'Immediately place into an FDA-cleared rigid, puncture-resistant sharps disposal container and deliver to a designated hospital/pharmacy drop-off kiosk.',
    safetyInstructions: [
      'NEVER attempt to recap, bend, or snap needles by hand.',
      'Keep out of reach of children and household pets.',
      'NEVER place sharps in ordinary plastic trash bags or household recycling bins.',
      'If an official sharps bin is unavailable, use a heavy-duty rigid plastic container (like a detergent jug) sealed tightly with duct tape and clearly labeled "BIOHAZARD SHARPS".'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['syringe', 'needle', 'sharps', 'injection', 'hypodermic', 'medical'],
    binColorCode: 'Red / Yellow Rigid Sharps Container',
    environmentalFact: 'Proper sharps disposal protects waste management workers from life-threatening needle-stick injuries and bloodborne viral infections (HIV, Hepatitis B/C).'
  },
  {
    id: 'bm-surgical-mask',
    name: 'Disposable Surgical Mask / N95',
    aliases: ['Face mask', 'Medical mask', 'N95 respirator', 'KN95 mask'],
    category: 'Biomedical Waste',
    classification: 'Potentially Infectious Medical PPE',
    description: 'Multi-layer spunbond and meltblown polypropylene personal protective equipment worn over mouth and nose.',
    disposalMethod: 'Tie in a small plastic disposal bag and discard in designated clinical waste or household general waste.',
    safetyInstructions: [
      'Snip elastic ear loops with scissors to prevent wildlife entanglement.',
      'Never place in household recycling bins; fibers are non-woven and pose biohazard risks.',
      'Wash or sanitize hands after handling used masks.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['mask', 'surgical mask', 'n95', 'kn95', 'ppe', 'face covering']
  },
  {
    id: 'bm-nitrile-gloves',
    name: 'Used Nitrile / Latex Gloves',
    aliases: ['Medical gloves', 'Examination gloves', 'Disposable gloves'],
    category: 'Biomedical Waste',
    classification: 'Medical PPE',
    description: 'Single-use synthetic nitrile or natural latex gloves used for infection barrier protection during medical care or cleaning.',
    disposalMethod: 'General clinical waste bin or secure household trash bag.',
    safetyInstructions: [
      'Peel gloves off inside-out without touching the contaminated exterior surface.',
      'Do not flush down toilets or put in recycling bins.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['gloves', 'nitrile gloves', 'latex gloves', 'medical gloves']
  },
  {
    id: 'bm-bandage',
    name: 'Blood-Soaked Bandage & Gauze',
    aliases: ['Dressing', 'Medical gauze', 'Used band-aid', 'Wound compress'],
    category: 'Biomedical Waste',
    classification: 'Soiled Biohazard Waste',
    description: 'Cotton gauze, adhesive bandages, and wound dressings saturated with blood, serum, or bodily fluids.',
    disposalMethod: 'Yellow clinical biohazard bag or double-bagged sealed general trash.',
    safetyInstructions: [
      'Use tongs or wear fresh gloves when handling soaked dressings.',
      'Seal securely in leakproof plastic before discarding to prevent contamination.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['bandage', 'gauze', 'band-aid', 'dressing', 'wound', 'blood']
  },
  {
    id: 'bm-expired-medicine',
    name: 'Expired Prescription Pills & Medicines',
    aliases: ['Tablets', 'Antibiotics', 'Expired drugs', 'Capsules'],
    category: 'Biomedical Waste',
    classification: 'Pharmaceutical Waste',
    description: 'Unused, leftover, or expired medical drugs, antibiotics, painkillers, and capsules.',
    disposalMethod: 'Take to a community pharmacy drug take-back box or National Prescription Drug Take Back Day kiosk.',
    safetyInstructions: [
      'NEVER flush medicines down toilets or sink drains, as wastewater treatment plants cannot filter them out, harming aquatic life.',
      'Do not throw loose pills into trash where animals or children could ingest them.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['medicine', 'pills', 'drugs', 'pharmaceutical', 'tablets', 'capsules', 'antibiotics']
  },
  {
    id: 'bm-covid-test',
    name: 'Rapid Antigen Test Kit (COVID / Flu)',
    aliases: ['RAT test', 'Lateral flow cassette', 'Swab test kit'],
    category: 'Biomedical Waste',
    classification: 'In Vitro Diagnostic Waste',
    description: 'Plastic test cassette, buffer liquid vial, and nasal swab used for infectious illness self-testing.',
    disposalMethod: 'Place all used components inside the provided sealable specimen bag, seal tightly, and place in regular domestic waste.',
    safetyInstructions: [
      'Snap swab stick if too long to fit in bag without puncturing.',
      'Disinfect hands thoroughly after bagging the test kit.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['covid test', 'antigen test', 'swab', 'lateral flow', 'rat kit']
  },
  {
    id: 'bm-lancet',
    name: 'Diabetic Blood Glucose Lancet',
    aliases: ['Finger pricker', 'Blood lancet', 'Glucose testing needle'],
    category: 'Biomedical Waste',
    classification: 'Sharps Waste',
    description: 'Spring-loaded or manual fine-gauge needle used by diabetics to draw capillary blood for glucose testing.',
    disposalMethod: 'Drop into a rigid puncture-proof sharps disposal container.',
    safetyInstructions: [
      'Never toss loose in the waste basket.',
      'Store in a childproof container.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['lancet', 'finger prick', 'glucose needle', 'sharps', 'diabetic']
  },
  {
    id: 'bm-iv-tubing',
    name: 'IV Drip Bag & Infusion Tubing',
    aliases: ['Intravenous set', 'Saline drip bag', 'Medical infusion line'],
    category: 'Biomedical Waste',
    classification: 'Clinical Plastic Waste',
    description: 'Flexible medical-grade PVC tubing and bag set used for intravenous fluid and medication administration.',
    disposalMethod: 'Authorized healthcare clinical biohazard disposal container.',
    safetyInstructions: [
      'Drain residual fluids according to medical protocol.',
      'Must be autoclaved or high-temperature incinerated by certified healthcare waste contractors.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['iv tubing', 'saline bag', 'drip', 'infusion', 'medical tubing']
  },
  {
    id: 'bm-insulin-pen',
    name: 'Disposable Insulin Pen',
    aliases: ['Pen injector', 'Auto-injector', 'EpiPen'],
    category: 'Biomedical Waste',
    classification: 'Combined Medical Device & Sharps',
    description: 'Handheld pre-filled injector pen incorporating a glass cartridge, metering plunger, and attachable needle.',
    disposalMethod: 'Remove needle tip into a sharps container; pen body may be returned via manufacturer take-back or medical waste.',
    safetyInstructions: [
      'Always detach and safely containerize the sharp needle tip first.',
      'Check if local pharmacy offers pen recycling programs.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['insulin pen', 'epipen', 'auto injector', 'injection pen']
  },
  {
    id: 'bm-blister-pack',
    name: 'Empty Medicine Blister Pack',
    aliases: ['Pill foil pack', 'Push-through pack'],
    category: 'Biomedical Waste',
    classification: 'Composite Packaging',
    description: 'Thermoformed plastic blister cavities backed with heat-sealed aluminum foil.',
    disposalMethod: 'Check pharmacy specialized blister pack recycling programs (e.g. TerraCycle) or general waste bin.',
    safetyInstructions: [
      'Ensure all pills have been extracted.',
      'Do not place in curbside recycling because the bonded plastic and aluminum cannot be separated by standard MRFs.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['blister pack', 'pill pack', 'medicine foil', 'packaging']
  },
  {
    id: 'bm-cotton-swab',
    name: 'Medical Cotton Swab / Gauze Ball',
    aliases: ['Q-tip with fluid', 'Antiseptic swab', 'Alcohol prep pad'],
    category: 'Biomedical Waste',
    classification: 'Clinical Consumables',
    description: 'Cotton applicator or pad soaked with antiseptic, betadine, or patient fluids.',
    disposalMethod: 'Sealed domestic trash bag or clinical waste receptacle.',
    safetyInstructions: [
      'Never flush cotton swabs down the toilet as they clog wastewater pumps.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['cotton swab', 'swab', 'q-tip', 'alcohol pad', 'antiseptic']
  },

  // ================= ORGANIC WASTE (11 items) =================
  {
    id: 'org-banana-peel',
    name: 'Banana Peel',
    aliases: ['Banana skin', 'Fruit peel'],
    category: 'Organic Waste',
    classification: 'Compostable Food Waste',
    description: 'Biodegradable fibrous fruit peel rich in potassium, nitrogen, and magnesium nutrients.',
    disposalMethod: 'Green organic waste bin, home compost tumbler, or worm vermicompost farm.',
    safetyInstructions: [
      'Remove non-biodegradable PLU fruit stickers from the peel before composting.',
      'Do not seal inside non-compostable plastic bags.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['banana', 'banana peel', 'fruit peel', 'fruit', 'compost', 'food waste'],
    binColorCode: 'Green Compost Bin',
    environmentalFact: 'Composting food scraps diverts methane gas from landfills and produces natural soil-enriching humus.'
  },
  {
    id: 'org-apple-core',
    name: 'Apple Core & Seeds',
    aliases: ['Apple remnant', 'Fruit core'],
    category: 'Organic Waste',
    classification: 'Compostable Fruit Residue',
    description: 'Central seed cavity and fibrous core of an apple.',
    disposalMethod: 'Organics green cart, compost bin, or backyard food waste trench.',
    safetyInstructions: [
      'Peel off price stickers before tossing into compost.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['apple', 'apple core', 'fruit core', 'food scrap']
  },
  {
    id: 'org-coffee-grounds',
    name: 'Spent Coffee Grounds & Filter',
    aliases: ['Used coffee', 'Espresso puck', 'Paper coffee filter'],
    category: 'Organic Waste',
    classification: 'High-Nitrogen Organic Matter',
    description: 'Extracted ground coffee beans and unbleached cellulose paper drip filters.',
    disposalMethod: 'Compost bin or sprinkle directly onto garden soil as natural nitrogen fertilizer.',
    safetyInstructions: [
      'Ensure coffee filter is 100% natural paper (no synthetic mesh or plastic single-serve pods).'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['coffee', 'coffee grounds', 'filter', 'espresso', 'caffeine']
  },
  {
    id: 'org-eggshells',
    name: 'Crushed Eggshells',
    aliases: ['Egg shells', 'Calcium shells'],
    category: 'Organic Waste',
    classification: 'Mineral Soil Amendment',
    description: 'Calcium carbonate outer shell of poultry eggs.',
    disposalMethod: 'Home compost bin, vermiculture, or green bin.',
    safetyInstructions: [
      'Crush by hand to accelerate soil breakdown and deter garden slugs.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['eggshell', 'egg shell', 'calcium', 'egg']
  },
  {
    id: 'org-vegetable-scraps',
    name: 'Vegetable Scraps & Peelings',
    aliases: ['Carrot peel', 'Potato skins', 'Broccoli stems', 'Salad greens'],
    category: 'Organic Waste',
    classification: 'Green Compost Material',
    description: 'Uncooked trimmings, peelings, and ends of root vegetables and leafy greens.',
    disposalMethod: 'Compost pile or municipal green waste collection bin.',
    safetyInstructions: [
      'Remove twist-ties and rubber bands from vegetable bundles before discarding.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['vegetables', 'carrot peel', 'potato skin', 'salad', 'greens', 'scraps']
  },
  {
    id: 'org-leaves-grass',
    name: 'Fallen Leaves & Lawn Clippings',
    aliases: ['Yard waste', 'Garden trimmings', 'Grass cuttings', 'Twigs'],
    category: 'Organic Waste',
    classification: 'Yard & Green Waste',
    description: 'Deciduous autumn tree foliage and freshly mown grass clippings.',
    disposalMethod: 'Curbside green yard waste cart or municipal organic collection center.',
    safetyInstructions: [
      'Do not include branches thicker than 4 inches.',
      'Ensure free of stones, garden hose fragments, or synthetic mulch plastic.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['leaves', 'grass', 'lawn', 'yard waste', 'garden trimmings', 'foliage']
  },
  {
    id: 'org-bread-crusts',
    name: 'Stale Bread & Bakery Scraps',
    aliases: ['Old bread', 'Pastry crust', 'Moldy toast'],
    category: 'Organic Waste',
    classification: 'Grain-Based Food Waste',
    description: 'Leftover bakery loaves, baguettes, and crusts.',
    disposalMethod: 'Municipal organic bin or enclosed compost bin.',
    safetyInstructions: [
      'Keep covered in compost piles to prevent attracting neighborhood rodents or pests.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['bread', 'stale bread', 'crust', 'bakery', 'toast']
  },
  {
    id: 'org-tea-bags',
    name: 'Tea Bag (Staple-Free)',
    aliases: ['Used tea bag', 'Tea leaves'],
    category: 'Organic Waste',
    classification: 'Herbal Infusion Waste',
    description: 'Paper pouch containing dried tea leaves and herbs.',
    disposalMethod: 'Compost bin (if bag is 100% natural fiber/unbleached paper).',
    safetyInstructions: [
      'Cut off string and metal staple.',
      'Check if pyramid bag contains nylon or polyester plastic mesh; synthetic bags belong in trash.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['tea bag', 'tea', 'tea leaves', 'herbal']
  },
  {
    id: 'org-citrus-peels',
    name: 'Orange & Lemon Citrus Peels',
    aliases: ['Orange rind', 'Lemon peel', 'Lime skin'],
    category: 'Organic Waste',
    classification: 'Acidic Organic Waste',
    description: 'Aromatic rinds of citrus fruits containing citric oils and thick pith.',
    disposalMethod: 'Municipal green waste bin or balanced compost pile.',
    safetyInstructions: [
      'Limit quantity in small worm bins, as acidic limonene oil can irritate compost worms.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['orange peel', 'lemon rind', 'citrus', 'lime']
  },
  {
    id: 'org-chicken-bones',
    name: 'Cooked Chicken / Meat Bones',
    aliases: ['Bones', 'Meat scraps', 'Fish bones'],
    category: 'Organic Waste',
    classification: 'Animal Byproduct Food Waste',
    description: 'Leftover cooked bones from poultry, pork, beef, or fish.',
    disposalMethod: 'Municipal industrial composting green bin that accepts meat. Avoid in home open compost piles.',
    safetyInstructions: [
      'Do not put in basic backyard compost piles where they can attract raccoons, dogs, or rats.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['bones', 'chicken bone', 'meat scraps', 'food waste']
  },
  {
    id: 'org-avocado-pit',
    name: 'Avocado Pit & Skin',
    aliases: ['Avocado stone', 'Avocado seed'],
    category: 'Organic Waste',
    classification: 'Dense Seed Organic',
    description: 'Hard spherical seed and thick pebbled skin of an avocado.',
    disposalMethod: 'Green bin or compost pile.',
    safetyInstructions: [
      'Chop or crush the pit with a garden spade to speed up decomposition.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['avocado', 'avocado pit', 'avocado seed', 'fruit scrap']
  },

  // ================= PAPER WASTE (11 items) =================
  {
    id: 'pa-cardboard-box',
    name: 'Corrugated Shipping Box',
    aliases: ['Cardboard box', 'Amazon box', 'Delivery carton', 'Shipping carton'],
    category: 'Paper Waste',
    classification: 'Corrugated Cardboard (OCC)',
    description: 'Multi-layer fluted cellulose box engineered for shipping goods and packages.',
    disposalMethod: 'Curbside paper/cardboard recycling cart or municipal bulk drop-off depot.',
    safetyInstructions: [
      'Flatten and break down boxes completely to maximize bin room.',
      'Remove styrofoam, plastic bubble pouches, and large plastic packing tape.',
      'Keep dry; wet cardboard fibers degrade quickly and attract mold.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['cardboard', 'box', 'shipping box', 'amazon box', 'carton', 'corrugated'],
    binColorCode: 'Blue Paper Recycling Bin',
    environmentalFact: 'Recycling 1 ton of corrugated cardboard saves 17 mature trees and 7,000 gallons of clean water.'
  },
  {
    id: 'pa-newspaper',
    name: 'Newspaper & Newsprint',
    aliases: ['Daily paper', 'Newsprint', 'Sunday paper'],
    category: 'Paper Waste',
    classification: 'Mechanical Pulp Newsprint',
    description: 'Thin printed paper printed with vegetable or soy inks.',
    disposalMethod: 'Paper recycling container.',
    safetyInstructions: [
      'Keep dry and clean.',
      'Remove plastic protective sleeve before recycling.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['newspaper', 'newsprint', 'gazette', 'daily paper']
  },
  {
    id: 'pa-office-paper',
    name: 'Office Copy Paper & Documents',
    aliases: ['Printer paper', 'A4 paper', 'White paper', 'Typed notes'],
    category: 'Paper Waste',
    classification: 'High-Grade Bleached Kraft Paper',
    description: 'White bond paper used for computer printing, copying, and written documentation.',
    disposalMethod: 'Paper recycling bin or secure shredding console for confidential files.',
    safetyInstructions: [
      'Remove metal binder clips; small metal staples are accepted by paper pulping screens.',
      'Shredded paper should be contained in a paper bag where permitted.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['office paper', 'printer paper', 'a4', 'documents', 'sheets', 'notes']
  },
  {
    id: 'pa-cereal-box',
    name: 'Cereal Box / Paperboard Carton',
    aliases: ['Food box', 'Cracker carton', 'Cardboard sleeve'],
    category: 'Paper Waste',
    classification: 'Non-Corrugated Paperboard',
    description: 'Single-ply greyback or solid bleached sulfate carton used for dry cereal, pasta, and cookies.',
    disposalMethod: 'Curbside paper recycling bin.',
    safetyInstructions: [
      'Remove plastic interior cereal liner bag before recycling.',
      'Flatten carton flat.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['cereal box', 'paperboard', 'cracker box', 'food carton']
  },
  {
    id: 'pa-paper-bag',
    name: 'Kraft Paper Grocery Bag',
    aliases: ['Brown paper bag', 'Shopping paper bag'],
    category: 'Paper Waste',
    classification: 'Unbleached Kraft Paper',
    description: 'Strong, reusable brown paper sack with twisted paper handles.',
    disposalMethod: 'Paper recycling bin or use to collect compost scraps.',
    safetyInstructions: [
      'Ensure bag is free from sticky food spills or grease.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['paper bag', 'kraft bag', 'brown bag', 'shopping bag']
  },
  {
    id: 'pa-egg-carton-paper',
    name: 'Molded Pulp Egg Carton',
    aliases: ['Paper egg box', 'Pulp tray'],
    category: 'Paper Waste',
    classification: 'Molded Cellulose Pulp',
    description: 'Recycled fiber molded tray designed to protect raw culinary eggs.',
    disposalMethod: 'Paper recycling bin or compost bin.',
    safetyInstructions: [
      'Inspect for broken raw egg slime; if severely soiled, compost instead of curbside paper recycling.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['egg carton', 'pulp carton', 'egg tray']
  },
  {
    id: 'pa-magazine',
    name: 'Glossy Magazine / Catalog',
    aliases: ['Catalog', 'Brochure', 'Glossy paper'],
    category: 'Paper Waste',
    classification: 'Coated Glossy Paper',
    description: 'Full-color publication coated with fine clay for high-resolution graphics.',
    disposalMethod: 'Standard paper recycling cart.',
    safetyInstructions: [
      'Remove external plastic wrapper and sticky scent sample strips.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['magazine', 'catalog', 'brochure', 'glossy paper']
  },
  {
    id: 'pa-paperback-book',
    name: 'Paperback Book / Novel',
    aliases: ['Softcover book', 'Reading book', 'Pocket book'],
    category: 'Paper Waste',
    classification: 'Bound Book Stock',
    description: 'Glued softcover literature book printed on wood pulp paper.',
    disposalMethod: 'Donate if in readable condition; otherwise place in paper recycling.',
    safetyInstructions: [
      'If hardback, tear off and discard the rigid fabric/plastic cover first.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['book', 'paperback', 'novel', 'reading book']
  },
  {
    id: 'pa-envelope',
    name: 'Postal Mailing Envelope',
    aliases: ['Letter envelope', 'Window envelope', 'Bill envelope'],
    category: 'Paper Waste',
    classification: 'Envelope Stock',
    description: 'Folded paper mailer, with or without small transparent cellophane address window.',
    disposalMethod: 'Curbside paper recycling.',
    safetyInstructions: [
      'Small plastic windows are filtered out during hydropulping.',
      'Padded bubble mailers with interior plastic lining cannot go into paper recycling.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['envelope', 'mail', 'letter', 'postal']
  },
  {
    id: 'pa-shredded-paper',
    name: 'Shredded Document Paper',
    aliases: ['Confidential paper strips', 'Paper ribbons'],
    category: 'Paper Waste',
    classification: 'Short-Fiber Cellulose',
    description: 'Cross-cut or strip-cut paper documents shredded for privacy protection.',
    disposalMethod: 'Place inside a closed paper grocery bag before recycling (or add to home compost pile).',
    safetyInstructions: [
      'Never toss loose into recycling carts; loose shredded paper blows away and jams sorting equipment.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['shredded paper', 'paper shreds', 'confidential paper']
  },
  {
    id: 'pa-greasy-pizza-box',
    name: 'Greasy Pizza Box Bottom',
    aliases: ['Used pizza box', 'Oil stained cardboard'],
    category: 'Paper Waste',
    classification: 'Contaminated Food Packaging',
    description: 'Corrugated carton soaked with animal fats, melted cheese oils, and tomato sauce.',
    disposalMethod: 'Tear off clean top lid for paper recycling; place greasy oil-soaked bottom into compost or general waste.',
    safetyInstructions: [
      'Food oil prevents paper fibers from binding during pulping.',
      'Remove plastic pizza box support tripod (savers).'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['pizza box', 'greasy box', 'food stained cardboard']
  },

  // ================= GLASS WASTE (9 items) =================
  {
    id: 'gl-beverage-bottle',
    name: 'Glass Beverage Bottle',
    aliases: ['Beer bottle', 'Wine bottle', 'Glass soda bottle', 'Glass drink bottle'],
    category: 'Glass Waste',
    classification: 'Container Glass (Soda-Lime)',
    description: 'Molded soda-lime container glass engineered for carbonated beverages, wine, and cider.',
    disposalMethod: 'Bottle bank depot, deposit-refund return kiosk, or curbside glass recycling bin.',
    safetyInstructions: [
      'Rinse out leftover beverage residues.',
      'Remove metal screw cap or crown cap (put cap in metal recycling).',
      'Do not break bottle intentionally; intact glass is safer for collection crews.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['glass bottle', 'wine bottle', 'beer bottle', 'soda bottle', 'glass'],
    binColorCode: 'Teal / Glass Only Bin',
    environmentalFact: 'Glass is 100% infinitely recyclable without any loss in purity, quality, or structural strength.'
  },
  {
    id: 'gl-pickle-jar',
    name: 'Glass Food Preserve Jar',
    aliases: ['Jam jar', 'Pickle jar', 'Mason jar', 'Tomato sauce jar'],
    category: 'Glass Waste',
    classification: 'Container Glass',
    description: 'Wide-mouth clear glass container used for canning, sauces, and pickles.',
    disposalMethod: 'Glass recycling container.',
    safetyInstructions: [
      'Rinse food sauce residues with warm water.',
      'Metal lids can be recycled separately in the metal stream.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['jar', 'glass jar', 'pickle jar', 'jam jar', 'mason jar']
  },
  {
    id: 'gl-olive-oil-bottle',
    name: 'Glass Olive Oil Bottle',
    aliases: ['Cooking oil bottle', 'Dark green glass bottle'],
    category: 'Glass Waste',
    classification: 'Container Glass',
    description: 'Dark green or amber UV-resistant glass bottle used to preserve edible oils.',
    disposalMethod: 'Glass recycling bin.',
    safetyInstructions: [
      'Drain excess cooking oil into a compost or grease container; do not pour oil down the drain.',
      'Quick rinse with soapy water.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['oil bottle', 'olive oil', 'green glass', 'condiment glass']
  },
  {
    id: 'gl-broken-tumbler',
    name: 'Broken Drinking Glass / Tumbler',
    aliases: ['Broken drinking glass', 'Shattered cup', 'Crystal glass'],
    category: 'Glass Waste',
    classification: 'Non-Container Glassware',
    description: 'Tempered or leaded drinking glassware having a different melting temperature than packaging bottles.',
    disposalMethod: 'Wrap safely in newspaper and place in general household waste. DO NOT place in glass bottle recycling bins.',
    safetyInstructions: [
      'Wrap thoroughly in thick newspaper or cardboard box and label "SHARP GLASS".',
      'Tableware glass has a higher melting point and ruins entire batches of recycled container glass.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['broken glass', 'drinking glass', 'tumbler', 'shattered glass']
  },
  {
    id: 'gl-perfume-bottle',
    name: 'Glass Perfume / Cologne Bottle',
    aliases: ['Fragrance bottle', 'Cosmetic glass bottle'],
    category: 'Glass Waste',
    classification: 'Container Glass',
    description: 'Heavy flint glass decorative fragrance container.',
    disposalMethod: 'Glass recycling bin (with pump removed) or luxury packaging return scheme.',
    safetyInstructions: [
      'Use pliers to twist off metal spray atomizer mechanism.',
      'Ensure liquid is completely dissipated.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['perfume bottle', 'cologne bottle', 'fragrance glass', 'cosmetic jar']
  },
  {
    id: 'gl-candle-jar',
    name: 'Glass Candle Jar',
    aliases: ['Candle holder glass', 'Scented candle container'],
    category: 'Glass Waste',
    classification: 'Container Glass',
    description: 'Heavy heat-resistant glass tumbler used to hold scented candle wax.',
    disposalMethod: 'General waste or clean thoroughly for container glass recycling.',
    safetyInstructions: [
      'Fill with boiling water to melt and float away remaining wax before recycling.',
      'Remove metal wick tab.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['candle jar', 'candle glass', 'scented candle', 'glass container']
  },
  {
    id: 'gl-window-pane',
    name: 'Window Pane / Flat Sheet Glass',
    aliases: ['Plate glass', 'Window glass', 'Architectural glass'],
    category: 'Glass Waste',
    classification: 'Sheet / Float Glass',
    description: 'Flat float glass engineered for residential or commercial windows.',
    disposalMethod: 'Specialized construction & demolition recycling drop-off or general waste transfer station.',
    safetyInstructions: [
      'Tape an "X" with heavy masking tape across both sides to prevent jagged shards from releasing.',
      'Wear cut-resistant leather gloves and eye protection.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['window pane', 'sheet glass', 'plate glass', 'flat glass']
  },
  {
    id: 'gl-baby-food-jar',
    name: 'Small Baby Food Glass Jar',
    aliases: ['Baby food jar', 'Purée jar'],
    category: 'Glass Waste',
    classification: 'Container Glass',
    description: 'Small clear soda-lime jar used for infant purees.',
    disposalMethod: 'Glass recycling bin.',
    safetyInstructions: [
      'Rinse clean of organic puree.',
      'Metal safety lid goes to metal recycling.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['baby food jar', 'small jar', 'puree glass']
  },
  {
    id: 'gl-pyrex-dish',
    name: 'Broken Pyrex / Borosilicate Bakeware',
    aliases: ['Baking dish', 'Oven dish', 'Heat-proof glass'],
    category: 'Glass Waste',
    classification: 'Borosilicate Glass',
    description: 'Thermal-shock resistant engineered kitchen glassware.',
    disposalMethod: 'Wrap safely in newspaper and dispose in general household waste. NEVER in curbside glass recycling.',
    safetyInstructions: [
      'Borosilicate glass does not melt at standard bottle recycling furnace temperatures, causing catastrophic structural defects in new bottles.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['pyrex', 'bakeware', 'borosilicate', 'casserole dish', 'oven glass']
  },

  // ================= METAL WASTE (11 items) =================
  {
    id: 'me-aluminum-can',
    name: 'Aluminum Beverage Can',
    aliases: ['Soda can', 'Beer can', 'Pop can', 'Aluminum tin'],
    category: 'Metal Waste',
    classification: 'Non-Ferrous Aluminum Alloy',
    description: 'Lightweight cylindrical container stamped from aluminum alloy 3104 and 5182.',
    disposalMethod: 'Curbside metal recycling cart or reverse vending machine container deposit return kiosk.',
    safetyInstructions: [
      'Drain all liquid soda or beer.',
      'Leave stay-on pull tab attached.',
      'No need to crush for deposit return machines; crush flat for curbside recycling.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['aluminum can', 'soda can', 'beer can', 'pop can', 'can', 'beverage can'],
    binColorCode: 'Silver / Grey Metal Bin',
    environmentalFact: 'Recycling an aluminum can saves 95% of the energy needed to refine virgin aluminum from raw bauxite ore.'
  },
  {
    id: 'me-food-tin-can',
    name: 'Steel / Tin Food Can',
    aliases: ['Soup can', 'Bean can', 'Tuna can', 'Tin can'],
    category: 'Metal Waste',
    classification: 'Tinplated Ferrous Steel',
    description: 'Electrolytic tin-plated steel can used for preserving shelf-stable foods.',
    disposalMethod: 'Metal recycling container.',
    safetyInstructions: [
      'Rinse food sauce residues with dishwater.',
      'Tuck removed metal lid inside can and crimp rim slightly so sharp edges are guarded.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['tin can', 'steel can', 'soup can', 'canned food', 'tuna can']
  },
  {
    id: 'me-aluminum-foil',
    name: 'Clean Aluminum Foil',
    aliases: ['Tin foil', 'Baking foil', 'Aluminum pie pan'],
    category: 'Metal Waste',
    classification: 'Aluminum Sheet',
    description: 'Thin rolled aluminum leaf used in cooking and baking.',
    disposalMethod: 'Curbside metal recycling bin.',
    safetyInstructions: [
      'Wipe or rinse clean of food greases.',
      'Roll multiple scraps into a single ball at least 2 inches in diameter so sorting blowers don\'t misidentify it as light dust.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['aluminum foil', 'tin foil', 'baking foil', 'pie pan']
  },
  {
    id: 'me-aerosol-can',
    name: 'Empty Aerosol Spray Can',
    aliases: ['Deodorant spray can', 'Hairspray can', 'Whipped cream can'],
    category: 'Metal Waste',
    classification: 'Pressurized Metal Container',
    description: 'Steel or aluminum can that contained propellant and product.',
    disposalMethod: 'Curbside recycling bin (ONLY IF 100% EMPTY). If pressurized or full, deliver to household hazardous waste.',
    safetyInstructions: [
      'Ensure the can is completely empty by depressing nozzle until no hissing occurs.',
      'Remove plastic cap.',
      'NEVER puncture, crush, or incinerate an aerosol can yourself.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['aerosol', 'spray can', 'deodorant can', 'hairspray']
  },
  {
    id: 'me-metal-bottle-cap',
    name: 'Metal Bottle Cap / Crown Cap',
    aliases: ['Beer bottle cap', 'Snapple lid', 'Metal jar lid'],
    category: 'Metal Waste',
    classification: 'Ferrous Metal',
    description: 'Crimped steel crown cap or twist-off screw jar lid.',
    disposalMethod: 'Collect inside a steel food can, crimp closed, and put in metal recycling.',
    safetyInstructions: [
      'Loose caps can fall through conveyor screens; collecting in a steel can keeps them in the recovery stream.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['bottle cap', 'crown cap', 'metal lid', 'jar lid']
  },
  {
    id: 'me-copper-wire',
    name: 'Scrap Copper Wire',
    aliases: ['Electric wire', 'Stripped copper', 'Plumbing wire'],
    category: 'Metal Waste',
    classification: 'High-Value Scrap Metal',
    description: 'Conductive electrical wiring core made from refined copper.',
    disposalMethod: 'Scrap metal recycling dealer or municipal scrap yard.',
    safetyInstructions: [
      'Disconnect all power sources and verify de-energized with a voltage meter.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['copper wire', 'scrap metal', 'copper', 'wire']
  },
  {
    id: 'me-stainless-utensils',
    name: 'Stainless Steel Cutlery',
    aliases: ['Metal spoon', 'Metal fork', 'Butter knife'],
    category: 'Metal Waste',
    classification: 'Alloy Steel',
    description: 'Rust-resistant chrome-nickel stainless steel flatware.',
    disposalMethod: 'Donate to charity or thrift store; or surrender at scrap metal yard.',
    safetyInstructions: [
      'Wrap sharp knife blades with cardboard before transporting.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['metal spoon', 'metal fork', 'stainless steel', 'cutlery', 'flatware']
  },
  {
    id: 'me-cast-iron-pan',
    name: 'Cast Iron Skillet / Frying Pan',
    aliases: ['Iron skillet', 'Cast iron pot'],
    category: 'Metal Waste',
    classification: 'Ferrous Scrap Iron',
    description: 'Heavy duty molded iron cookware.',
    disposalMethod: 'Scrap metal drop-off depot or salvage restoration.',
    safetyInstructions: [
      'Heavy item; lift carefully with both hands.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['cast iron', 'skillet', 'frying pan', 'cookware', 'iron pan']
  },
  {
    id: 'me-metal-hanger',
    name: 'Wire Clothes Hanger',
    aliases: ['Dry cleaner hanger', 'Wire coat hanger'],
    category: 'Metal Waste',
    classification: 'Drawn Steel Wire',
    description: 'Thin galvanized or painted steel wire hanger from dry cleaning.',
    disposalMethod: 'Return to local dry cleaner for reuse, or deliver to scrap metal bin. DO NOT put in curbside bins.',
    safetyInstructions: [
      'Tangles conveyor belts in automated recycling facilities.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['wire hanger', 'coat hanger', 'clothes hanger']
  },
  {
    id: 'me-brass-fitting',
    name: 'Brass Plumbing Pipe Fitting',
    aliases: ['Brass valve', 'Pipe connector', 'Brass faucet part'],
    category: 'Metal Waste',
    classification: 'Non-Ferrous Copper-Zinc Alloy',
    description: 'Machined brass hardware used in residential water and gas piping.',
    disposalMethod: 'Scrap metal recycling dealer.',
    safetyInstructions: [
      'Ensure line is unpressurized and purged of gas before removal.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['brass fitting', 'plumbing brass', 'pipe valve', 'faucet']
  },
  {
    id: 'me-paint-can-empty',
    name: 'Dried Empty Metal Paint Can',
    aliases: ['Steel paint bucket', 'Empty tin paint can'],
    category: 'Metal Waste',
    classification: 'Steel Can',
    description: 'Cylindrical steel can that held household architectural paint.',
    disposalMethod: 'Metal recycling bin (ONLY IF 100% DRY, HARDENED, AND SCRAPED).',
    safetyInstructions: [
      'Leave lid off in well-ventilated area until paint is bone dry.',
      'If wet liquid remains, treat as Hazardous Waste.'
    ],
    recyclable: true,
    hazardous: false,
    keywords: ['paint can', 'empty paint tin', 'paint bucket']
  },

  // ================= HAZARDOUS WASTE (11 items) =================
  {
    id: 'hz-oil-paint',
    name: 'Oil-Based Paint & Solvents',
    aliases: ['Solvent paint', 'Enamel paint', 'Lacquer', 'Mineral spirits'],
    category: 'Hazardous Waste',
    classification: 'Flammable Toxic Chemical',
    description: 'Alkyd and solvent-based architectural coating containing volatile organic compounds (VOCs) and petrochemical solvents.',
    disposalMethod: 'Drop off at a certified Municipal Household Hazardous Waste (HHW) collection facility.',
    safetyInstructions: [
      'NEVER pour down household drains, storm sewers, or onto garden soil.',
      'Keep tightly sealed in original container with readable warning label.',
      'Transport in vehicle trunk secured upright inside a cardboard box.',
      'Keep far away from heat sources and open flames.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['paint', 'oil paint', 'solvent', 'lacquer', 'enamel', 'chemical'],
    binColorCode: 'Red / Orange Hazardous Depot',
    environmentalFact: 'A single gallon of improperly disposed solvent paint can contaminate thousands of gallons of municipal drinking water aquifers.'
  },
  {
    id: 'hz-motor-oil',
    name: 'Used Motor Engine Oil',
    aliases: ['Engine oil', 'Car oil', 'Lubricant oil', 'Used oil'],
    category: 'Hazardous Waste',
    classification: 'Petroleum Hydrocarbon Waste',
    description: 'Viscous lubricant drained from automotive internal combustion engines, contaminated with heavy metals and combustion sludge.',
    disposalMethod: 'Bring in clean, sealed jug to an automotive service center, auto parts store (e.g. AutoZone), or HHW depot for re-refining.',
    safetyInstructions: [
      'Store only in clean plastic containers with tight screw lids.',
      'Never mix with brake fluid, coolant, water, or solvents (mixed oil cannot be re-refined).',
      'Wear protective gloves to prevent skin exposure to polycyclic aromatic hydrocarbons.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['motor oil', 'engine oil', 'used oil', 'car oil', 'lubricant']
  },
  {
    id: 'hz-car-battery',
    name: 'Lead-Acid Car Battery',
    aliases: ['Auto battery', '12V car battery', 'Vehicle battery'],
    category: 'Hazardous Waste',
    classification: 'Corrosive Heavy Metal Storage',
    description: 'Heavy automotive battery containing lead plates suspended in concentrated sulfuric acid electrolyte.',
    disposalMethod: 'Return to auto parts retailer (receive core deposit refund) or scrap battery depot.',
    safetyInstructions: [
      'Carries corrosive sulfuric acid; keep upright to prevent chemical burns from leaking acid.',
      'Wear safety goggles and heavy rubber gloves when moving.',
      'Do not tip or drop.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['car battery', 'lead acid', '12v battery', 'auto battery']
  },
  {
    id: 'hz-fluorescent-tube',
    name: 'Fluorescent Light Tube / CFL',
    aliases: ['CFL bulb', 'Tube light', 'Fluorescent lamp', 'Mercury bulb'],
    category: 'Hazardous Waste',
    classification: 'Mercury-Containing Lamp',
    description: 'Gas-discharge lamp containing vaporized elemental mercury and interior phosphor coating.',
    disposalMethod: 'Hardware store drop box (e.g. Home Depot, Lowe\'s) or HHW depot.',
    safetyInstructions: [
      'Do not break or crush; broken tubes release neurotoxic mercury vapor.',
      'If broken indoors: evacuate room, ventilate for 15 minutes, scoop up shards with stiff paper, wipe with wet paper towel, and seal in glass jar. DO NOT VACUUM.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['fluorescent tube', 'cfl', 'bulb', 'light bulb', 'mercury bulb']
  },
  {
    id: 'hz-pesticide',
    name: 'Pesticide / Weedkiller Spray',
    aliases: ['Insecticide', 'Herbicide', 'Roundup', 'Bug spray', 'Garden chemical'],
    category: 'Hazardous Waste',
    classification: 'Toxic Agricultural Chemical',
    description: 'Synthetic chemical formulation intended to kill insects, fungus, or unwanted vegetation.',
    disposalMethod: 'Municipal Household Hazardous Waste collection depot.',
    safetyInstructions: [
      'Do not rinse bottle into sinks or drains.',
      'Keep out of reach of children and domestic pets.',
      'Wear respirator mask and gloves when handling.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['pesticide', 'herbicide', 'weedkiller', 'insecticide', 'chemical']
  },
  {
    id: 'hz-bleach-cleaner',
    name: 'Concentrated Chlorine Bleach',
    aliases: ['Sodium hypochlorite', 'Bleach bottle with liquid', 'Industrial disinfectant'],
    category: 'Hazardous Waste',
    classification: 'Corrosive Oxidizer',
    description: 'Strong alkaline disinfectant and stain remover solution of sodium hypochlorite.',
    disposalMethod: 'Use up fully according to product instructions, or bring excess liquid to HHW depot.',
    safetyInstructions: [
      'DANGER: NEVER mix bleach with ammonia, vinegar, or toilet bowl cleaners; mixing creates deadly chloramine gas.',
      'Wear rubber gloves and work in well-ventilated space.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['bleach', 'chlorine', 'disinfectant', 'cleaner']
  },
  {
    id: 'hz-drain-cleaner',
    name: 'Chemical Drain Opener',
    aliases: ['Draino', 'Lye', 'Caustic soda cleaner', 'Sulfuric drain cleaner'],
    category: 'Hazardous Waste',
    classification: 'Strong Corrosive Base / Acid',
    description: 'Concentrated sodium hydroxide (lye) or sulfuric acid designed to dissolve hair and grease clogs.',
    disposalMethod: 'Household Hazardous Waste facility.',
    safetyInstructions: [
      'Extreme chemical burn risk to skin and eyes.',
      'Keep cap locked tightly.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['drain cleaner', 'draino', 'caustic soda', 'lye', 'drain opener']
  },
  {
    id: 'hz-gas-canister',
    name: 'Butane / Propane Gas Canister',
    aliases: ['Camping gas cartridge', 'Propane cylinder', 'Butane fuel canister'],
    category: 'Hazardous Waste',
    classification: 'Compressed Flammable Gas',
    description: 'Pressurized steel canister containing liquefied petroleum gas for portable camp stoves.',
    disposalMethod: 'Camping store exchange program or municipal hazardous cylinder drop-off point.',
    safetyInstructions: [
      'Never puncture, pierce, or throw into open campfire flames (severe explosion hazard).',
      'Store away from direct sun and ambient heat.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['butane canister', 'propane tank', 'camping gas', 'gas cylinder']
  },
  {
    id: 'hz-nail-polish-remover',
    name: 'Acetone Nail Polish & Remover',
    aliases: ['Acetone', 'Nail lacquer bottle', 'Solvent remover'],
    category: 'Hazardous Waste',
    classification: 'Flammable Solvent',
    description: 'Organic ketone solvent bottle with high volatility and flammability.',
    disposalMethod: 'HHW depot or allow small drops on cotton pads to evaporate outdoors away from sparks.',
    safetyInstructions: [
      'Highly flammable vapors ignite readily near pilot lights or open flames.',
      'Tightly seal cap when finished.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['acetone', 'nail polish', 'nail polish remover', 'flammable solvent']
  },
  {
    id: 'hz-mercury-thermometer',
    name: 'Mercury Glass Fever Thermometer',
    aliases: ['Old thermometer', 'Mercury in glass'],
    category: 'Hazardous Waste',
    classification: 'Elemental Heavy Metal Device',
    description: 'Vintage glass clinical thermometer containing liquid elemental mercury silver bulb.',
    disposalMethod: 'Take directly to a municipal hazardous waste collection center.',
    safetyInstructions: [
      'Store in an airtight plastic container to prevent breakage.',
      'If broken, DO NOT use vacuum cleaner; use eye dropper to collect silvery beads into sealed vial.'
    ],
    recyclable: false,
    hazardous: true,
    keywords: ['mercury thermometer', 'mercury', 'thermometer', 'vintage thermometer']
  },
  {
    id: 'hz-antifreeze',
    name: 'Engine Coolant / Antifreeze',
    aliases: ['Ethylene glycol', 'Radiator fluid', 'Car coolant'],
    category: 'Hazardous Waste',
    classification: 'Poisonous Chemical Solution',
    description: 'Bright green or orange heat-exchange fluid containing toxic ethylene glycol.',
    disposalMethod: 'Automotive service station or municipal HHW depot.',
    safetyInstructions: [
      'Extremely sweet taste is fatally attractive to dogs, cats, and toddlers; clean any floor drips immediately.',
      'Seal in dedicated labeled container.'
    ],
    recyclable: true,
    hazardous: true,
    keywords: ['antifreeze', 'coolant', 'radiator fluid', 'ethylene glycol']
  },

  // ================= OTHER / UNKNOWN (8 items) =================
  {
    id: 'ot-ceramic-mug',
    name: 'Broken Ceramic Mug / Plate',
    aliases: ['Coffee mug', 'Porcelain dish', 'Stoneware bowl', 'Broken ceramics'],
    category: 'Other / Unknown',
    classification: 'Inert Silicate Ware',
    description: 'Kiln-fired earthenware, stoneware, or porcelain kitchen dish.',
    disposalMethod: 'Wrap safely in newspaper and place in general municipal residual waste bin.',
    safetyInstructions: [
      'Wrap sharp broken shards in thick paper or tape to protect sanitation collectors.',
      'DO NOT put in glass recycling; ceramics do not melt at glass furnace temperatures and ruin whole batches.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['ceramic mug', 'coffee mug', 'porcelain', 'dish', 'plate', 'pottery'],
    binColorCode: 'Dark Grey General Residual Bin'
  },
  {
    id: 'ot-rubber-shoe-sole',
    name: 'Worn Out Shoe / Sneaker',
    aliases: ['Running shoe', 'Rubber sole', 'Old sneakers', 'Footwear'],
    category: 'Other / Unknown',
    classification: 'Composite Footwear',
    description: 'Glued combination of vulcanized rubber, EVA foam, synthetic leather, and mesh.',
    disposalMethod: 'Footwear brand takeback box (e.g. Nike Reuse-A-Shoe for playground rubber) or general trash.',
    safetyInstructions: [
      'If still wearable, clean and donate to shoe charity.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['shoe', 'sneaker', 'rubber sole', 'footwear', 'running shoe']
  },
  {
    id: 'ot-cigarette-butt',
    name: 'Extinguished Cigarette Butt',
    aliases: ['Cigarette filter', 'Smoked cigarette'],
    category: 'Other / Unknown',
    classification: 'Non-Biodegradable Cellulose Acetate Filter',
    description: 'Synthetic plastic cellulose acetate filter containing trapped nicotine, arsenic, and tar chemicals.',
    disposalMethod: 'Ensure 100% extinguished and discard in municipal street litter bin or general trash.',
    safetyInstructions: [
      'Verify completely cold before tossing into garbage to prevent dumpster fires.',
      'Never flick onto ground or into storm drains; toxic to aquatic ecology.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['cigarette', 'cigarette butt', 'filter', 'tobacco']
  },
  {
    id: 'ot-composite-chip-bag',
    name: 'Multi-Layer Potato Chip Bag',
    aliases: ['Crisp packet', 'Mylar snack wrapper', 'Foil lined bag'],
    category: 'Other / Unknown',
    classification: 'Multi-Material Metallized Plastic',
    description: 'Thin polypropylene film laminated with microscopic vacuum-deposited aluminum vapor barrier.',
    disposalMethod: 'General household residual waste bin (or specialized TerraCycle drop-off).',
    safetyInstructions: [
      'Standard recycling facilities cannot separate the bonded foil from plastic.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['chip bag', 'crisp packet', 'snack wrapper', 'mylar', 'foil bag']
  },
  {
    id: 'ot-vacuum-bag',
    name: 'Full Vacuum Cleaner Dust Bag',
    aliases: ['Hoover bag', 'Vacuum dust bag'],
    category: 'Other / Unknown',
    classification: 'Mixed Household Particulate Waste',
    description: 'Fabric or paper bag packed with carpet dust, skin flakes, pet hair, and fibers.',
    disposalMethod: 'Seal in plastic grocery bag and place in general domestic waste bin.',
    safetyInstructions: [
      'Seal opening sticker tightly to prevent dust inhalation if suffering from dust allergies or asthma.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['vacuum bag', 'dust bag', 'hoover bag']
  },
  {
    id: 'ot-styrofoam-cup',
    name: 'Expanded Polystyrene (Styrofoam) Cup',
    aliases: ['Foam cup', 'EPS takeaway cup'],
    category: 'Other / Unknown',
    classification: 'Resin Code #6 (EPS Foam)',
    description: '98% air expanded polystyrene foam cup used for hot coffee or noodles.',
    disposalMethod: 'General waste bin (unless specialized EPS drop-off facility exists locally).',
    safetyInstructions: [
      'Do not put in curbside blue/yellow bins; easily crumbles into airborne micro-beads that contaminate clean recyclables.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['styrofoam', 'foam cup', 'eps', 'polystyrene']
  },
  {
    id: 'ot-tooth-brush',
    name: 'Used Manual Plastic Toothbrush',
    aliases: ['Toothbrush', 'Nylon bristle brush'],
    category: 'Other / Unknown',
    classification: 'Composite Personal Hygiene Tool',
    description: 'Molded plastic handle with bonded rubber grip and nylon bristles.',
    disposalMethod: 'General trash bin or specialized oral care recycling return box.',
    safetyInstructions: [
      'Consider switching to compostable bamboo toothbrushes.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['toothbrush', 'dental', 'oral care']
  },
  {
    id: 'ot-thermal-receipt',
    name: 'Thermal Paper Cash Register Receipt',
    aliases: ['Sales receipt', 'ATM slip', 'Thermal paper'],
    category: 'Other / Unknown',
    classification: 'Chemical Coated Paper',
    description: 'Heat-sensitive paper coated with chemical developer compounds (BPA or BPS).',
    disposalMethod: 'Place in general waste bin. DO NOT put in paper recycling or home compost.',
    safetyInstructions: [
      'Endocrine disrupting bisphenols (BPA/BPS) contaminate recycled paper pulp and soil if composted.'
    ],
    recyclable: false,
    hazardous: false,
    keywords: ['receipt', 'thermal paper', 'atm slip', 'sales slip']
  }
];
