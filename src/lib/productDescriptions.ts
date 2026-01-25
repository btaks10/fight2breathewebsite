// Natural, conversational product descriptions for accessibility
// Written to help someone shopping without sight understand exactly what they're buying
// Format: Describe as if helping a friend shop - color, material, design, placement

export const productImageDescriptions: Record<string, string> = {
  // Descriptions by product title (for text-to-speech natural reading)
  '65 Roses Classic Crew Unisex':
    "a black crewneck sweatshirt with the words '65 Roses' printed in bold white block letters across the chest",

  '65 Roses Hoodie':
    "a cozy black pullover hoodie with '65 Roses' in white block letters on the front and a kangaroo pocket",

  'Fight2Breathe 1990 Tee':
    "a black short-sleeve t-shirt with 'Fight 2 Breathe' and '1990' printed in white on the front, marking the year Caleigh was born",

  'Health is Hot Hat':
    "a burgundy corduroy hat with the phrase 'Health is Hot' embroidered in white script on the front",

  'Chronic Badass Tee':
    "a soft black t-shirt with 'Chronic Badass' written in bold white letters across the chest",

  'Breathe Easy Tank':
    "a lightweight athletic tank top with 'Breathe Easy' printed on the front, great for workouts or layering",

  'CF Warrior Tee':
    "a comfortable t-shirt featuring 'CF Warrior' text, representing strength in the cystic fibrosis community",

  'Fight2Breathe Rose Tee':
    'a black t-shirt featuring the Fight2Breathe logo with a rose design, symbolizing hope and resilience',

  'Transplant Survivor Hoodie':
    'a cozy hoodie celebrating transplant survivors, with meaningful text design on the front',

  'Breathday Celebration Tee':
    "a commemorative t-shirt celebrating 'Breathdays' - the anniversary of receiving a lung transplant",

  // Descriptions by product handle (for alt text fallback)
  '65-roses-classic-crew':
    "a black crewneck sweatshirt with the words '65 Roses' printed in bold white block letters across the chest",

  '65-roses-hoodie':
    "a cozy black pullover hoodie with '65 Roses' in white block letters on the front and a kangaroo pocket",

  'fight2breathe-1990-tee':
    "a black short-sleeve t-shirt with 'Fight 2 Breathe' and '1990' printed in white on the front, marking the year Caleigh was born",

  'health-is-hot-hat':
    "a burgundy corduroy hat with the phrase 'Health is Hot' embroidered in white script on the front",

  'chronic-badass-tee':
    "a soft black t-shirt with 'Chronic Badass' written in bold white letters across the chest",

  'breathe-easy-tank':
    "a lightweight athletic tank top with 'Breathe Easy' printed on the front, great for workouts or layering",

  'cf-warrior-tee':
    "a comfortable t-shirt featuring 'CF Warrior' text, representing strength in the cystic fibrosis community",

  'fight2breathe-logo-tee':
    'a black t-shirt featuring the Fight2Breathe logo with a rose design, symbolizing hope and resilience',

  'fight2breathe-rose-tee':
    'a black t-shirt featuring the Fight2Breathe logo with a rose design, symbolizing hope and resilience',

  'transplant-survivor-hoodie':
    'a cozy hoodie celebrating transplant survivors, with meaningful text design on the front',

  'breathday-celebration-tee':
    "a commemorative t-shirt celebrating 'Breathdays' - the anniversary of receiving a lung transplant",

  '65-roses-rose-design':
    "apparel featuring the 65 Roses design with a stylized rose graphic, referencing how children often pronounce 'cystic fibrosis'",
};

// Helper function to get description by product handle or title
export function getProductDescription(productHandleOrTitle: string): string {
  // Try exact match first (works for both title and handle)
  if (productImageDescriptions[productHandleOrTitle]) {
    return productImageDescriptions[productHandleOrTitle];
  }

  // Try normalized handle (lowercase, hyphenated)
  const normalizedHandle = productHandleOrTitle
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  if (productImageDescriptions[normalizedHandle]) {
    return productImageDescriptions[normalizedHandle];
  }

  // Try partial match on keys
  const partialMatch = Object.keys(productImageDescriptions).find(
    (key) => normalizedHandle.includes(key) || key.includes(normalizedHandle)
  );

  if (partialMatch) {
    return productImageDescriptions[partialMatch];
  }

  // Default fallback - still conversational
  return `a Fight2Breathe product called ${productHandleOrTitle}`;
}
