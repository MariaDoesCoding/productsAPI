const express = require("express");
const app = express();

const products = [
  {
    id: '19e68f93-7fd6-4e00-b4b2-975160965306',
    name: 'Power Grip Primer',
    description: 'The best clear power grip primer on the market.',
    priceCents: 999,
    imageURL: '../images/products/power-grip-primer.png',
    rating: {
      stars: 4.5,
      count: 119
    },
    keywords: [
      'primer',
      'grippy',
      'sticky'
    ],
    type: 'face'
  },
  {
    id: 'a19283f4-e1a1-4818-9dda-56bf0da2e9ee',
    name: 'Foundation',
    description: 'Light to medium coverage, not sticky.',
    priceCents: 1299,
    imageURL: '../images/products/foundation.png',
    rating: {
      stars: 40,
      count: 569
    },
    keywords: [
      'foundation',
      'neutral',
      'coverage'
    ],
    hasColors: true,
    colors: [
      '#ffd6c5',
      '#ffe2c9',
      '#ffcba3',
      '#e8b894',
      '#d8905f',
      '#c28155',
      '#88513a',
      '#7b4934',
    ],
    type: 'face'
  },
  {
    id: 'f6710e43-454f-41a3-89d4-2c4a6a1e7248',
    name: 'Matte Liquid Lipstick',
    description: 'Long-lasting matte finish in a bold red shade.',
    priceCents: 1499,
    imageURL: '../images/products/matte-liquid-lipstick.png',
    rating: {
      stars: 50,
      count: 1569
    },
    keywords: [
      'lipstick',
      'liquid',
      'matte',
      'red'
    ],
    hasColors: true,
    colors: [
      '#ec8297',
      '#e75e79',
      '#e02c50',
      '#b21730',
      '#94142e',
      '#630e1f',
      '#570d1d'
    ],
    type: 'lips'
  },
  {
    id: 'bbb3d8bc-fabf-4b60-ae74-4fad3e88d652',
    name: 'Sol De Janiero - Cheirosa 76 Perfume Mist',
    description: 'Cheirosa 76 Perfume Mist, previously "After Hours Perfume Mist," ignites the dazzling 1976 discotheque era of Brazil. Intoxicating and velvety, this hypnotic fragrance opens with a spark of black currant, while midnight jasmine and lush freesia dance with amber woods. The rhythm of Rio after hours.',
    priceCents: 3800,
    imageURL: '../images/products/76-perfume-mist.png',
    rating: {
      stars: 40,
      count: 817
    },
    keywords: [
      'fragrance',
      'body mist',
      'sol de janiero',
      '76',
      'cheirosa',
      'perfume'
    ],
    type: 'fragrance'
  },
  {
    id: 'c54bb4c7-18de-4208-9f3f-d3ad51b9d1b8',
    name: 'Volumizing Mascara',
    description: 'Adds volume and length to your lashes.',
    priceCents: 1199,
    imageURL: '../images/products/volumizing-mascara.png',
    rating: {
      stars: 40,
      count: 931
    },
    keywords: [
      'mascara',
      'black',
      'volumizing'
    ],
    type: 'eyes'
  },
  {
    id: '2fd3827b-b2d0-4c2b-9240-9913de2aef79',
    name: 'Brow Pomade',
    description: 'Defines and shapes brows with a natural look.',
    priceCents: 1099,
    imageURL: '../images/products/brow-pomade.jpeg',
    rating: {
      stars: 40,
      count: 212
    },
    keywords: [
      'brow pomade',
      'brown',
      'brows'
    ],
    hasColors: true,
    colors: [
      '#edd6b7',
      '#dcbd92',
      '#795548',
      '#553b32',
      '#49332b',
      '#241a16',
      '#0c0807'
    ],
    type: 'brows'
  },
  {
    id: '6fa3f0dc-4814-4e87-99fc-1b1e6fa01d1b',
    name: 'Eyeshadow Palette - Nude Shades',
    description: 'A versatile palette with 12 nude shades.',
    priceCents: 1999,
    imageURL: '../images/products/eyeshadow-palette.png',
    rating: {
      stars: 50,
      count: 161
    },
    keywords: [
      'eyeshadow',
      'nude',
      'palette'
    ],
    type: 'eyes'
  },
  {
    id: 'bf9de5a5-7f53-4a8c-9e1b-3c5e2b6b1d8a',
    name: 'Highlighter - Champagne Glow',
    description: 'Gives your skin a radiant glow.',
    priceCents: 1499,
    imageURL: '../images/products/highlighter.png',
    rating: {
      stars: 50,
      count: 318
    },
    keywords: [
      'highlighter',
      'bright',
      'glow'
    ],
    type: 'face'
  },
  {
    id: 'e7f80e1e-2de4-4f7e-9bfc-2e11a7b9f979',
    name: 'Setting Spray',
    description: 'Keeps your makeup in place all day.',
    priceCents: 1299,
    imageURL: '../images/products/setting-spray.png',
    rating: {
      stars: 3.5,
      count: 87
    },
    keywords: [
      'setting spray',
      'setting',
      'spray',
      'setter'
    ],
    type: 'face'
  },
  {
    id: '1d62e5b3-60a4-4d8b-9b8c-5171e77b7e27',
    name: 'Blush',
    description: 'Adds a natural flush to your cheeks.',
    priceCents: 1199,
    imageURL: '../images/products/blush.png',
    rating: {
      stars: 4.5,
      count: 629
    },
    keywords: [
      'blush',
      'peachy',
      'natural'
    ],
    hasColors: true,
    colors: [
      '#ffe7c9',
      '#d5919d',
      '#bf5668',
      '#b74559',
      '#82313f',
      '#5e232e',
      '#41181f'
    ],
    type: 'face'
  },
  {
    id: '0b9d5e4d-2af4-4d4d-9e4a-1c9d11e9a2d1',
    name: 'Concealer',
    description: 'Covers blemishes and dark circles.',
    priceCents: 999,
    imageURL: '../images/products/concealer.png',
    rating: {
      stars: 4.5,
      count: 912
    },
    keywords: [
      'light',
      'concealer',
      'coverage'
    ],
    hasColors: true,
    colors: [
      '#ffd6c5',
      '#ffe2c9',
      '#ffcba3',
      '#e8b894',
      '#d8905f',
      '#c28155',
      '#88513a',
      '#7b4934',
    ],
    type: 'face'
  },
  {
    id: '9baaaf93-fe7f-4c01-a450-9f3bd09a72e4',
    name: 'Brow Harmony Precision Eyebrow Pencil',
    description: 'A waterproof, sweat- and oil-resistant pencil with a fine-angled tip to create precise, hair-like strokes for the most natural-looking brows.',
    priceCents: 1900,
    imageURL: '../images/products/brows-pencil-gel.png',
    rating: {
      stars: 50,
      count: 750
    },
    keywords: [
      'rare beauty',
      'brows',
      'brows pencil',
      'pencil',
      'gel',
      'lifting',
      'precision'
    ],
    hasColors: true,
    colors: [
      '#e8b894',
      '#d8905f',
      '#c28155',
      '#88513a',
      '#4d2d20',
      '#1f1512',
    ],
    type: 'brows'
  },
  {
    id: 'd532d719-d655-4b10-8f49-e18898357585',
    name: 'Caudalie Grape Water Moisturizing Face Mist',
    description: 'An antioxidant-rich, vegan face mist that uses 100 percent grape water to deliver intense hydration, reduce redness and soothe sensitive skin.',
    priceCents: 1999,
    imageURL: '../images/products/grape-water-mist.png',
    rating: {
      stars: 40,
      count: 210
    },
    keywords: [
      'face mist',
      'moistrurizing',
      'grape',
      'caudalie'
    ],
    type: 'skincare'
  },
  {
    id: '9a8f0e57-1fae-4d68-9d6b-2b1e2e8f0e5c',
    name: 'Loose Powder - Translucent',
    description: 'Sets makeup with a matte finish.',
    priceCents: 1099,
    imageURL: '../images/products/loose-powder.png',
    rating: {
      stars: 50,
      count: 96
    },
    keywords: [
      'loose',
      'powder',
      'translucent',
      'matte'
    ],
    type: 'face'
  },
  {
    id: '308e614a-ae0d-433b-a322-2a66e9bdffb9',
    name: 'Miss Dior Eau de Parfum',
    description: 'In a warm and floral perfume, fresh notes of lily-of-the-valley, spicy peony, and powdery iris immediately awaken the senses in a dazzling bouquet.',
    priceCents: 13500,
    imageURL: '../images/products/miss-dior-perfume.png',
    rating: {
      stars: 45,
      count: 2512
    },
    keywords: [
      'fragrance',
      'floral',
      'dior',
      'eau de perfum',
      'miss dior',
      'warm'
    ],
    type: 'fragrance'
  },
  {
    id: 'ad1f8e57-32fa-4d48-9d3e-3b2e5e9f3f0d',
    name: 'Bronzer - Sun Kissed',
    description: 'Adds warmth and dimension to your face.',
    priceCents: 1399,
    imageURL: '../images/products/bronzer.png',
    rating: {
      stars: 3.5,
      count: 74
    },
    keywords: [
      'bronzer',
      'sun kissed'
    ],
    type: 'face'
  },
  {
    id: 'b1f7d9f0-5e6e-4c7d-9e1f-4e3f5e9f6b0d',
    name: 'Lip Gloss - Pink Tint',
    description: 'Adds shine and a hint of color to your lips.',
    priceCents: 999,
    imageURL: '../images/products/lip-gloss.png',
    rating: {
      stars: 50,
      count: 123
    },
    keywords: [
      'lip gloss',
      'liquid',
      'pink',
      'tint'
    ],
    hasColors: true,
    colors: [
      '#d5919d',
      '#bf5668',
      '#b74559',
      '#82313f',
      '#5e232e',
      '#41181f'
    ],
    type: 'lips'
  },
  {
    id: '5a8f3e4b-1c7e-4e4a-9c1f-1b3e7e9e3c0d',
    name: 'Gel Eyeliner - Black',
    description: 'Creates precise lines with a smooth finish.',
    priceCents: 1099,
    imageURL: '../images/products/gel-eyeliner.png',
    rating: {
      stars: 4.5,
      count: 191
    },
    keywords: [
      'eyeliner',
      'black',
      'gel'
    ],
    type: 'eyes'
  },
  {
    id: '6e7f2d0e-4c1e-4c8b-9f2b-2d1e7e9e4d0a',
    name: 'BB Cream - Medium',
    description: 'Moisturizes and evens out skin tone.',
    priceCents: 1299,
    imageURL: '../images/products/bb-cream.png',
    rating: {
      stars: 50,
      count: 103
    },
    keywords: [
      'cream',
      'moisturizer',
      'medium',
      'skincare',
      'bb'
    ],
    type: 'skincare'
  },
  {
    id: '4117c70e-2b59-4f86-be88-285f4405c347',
    name: 'Dream Lip Oil for Moisturizing Sheer Coverage',
    description: 'A plush lip oil that glides on like a dream to deliver high-shine tint and intense hydration.',
    priceCents: 2600,
    imageURL: '../images/products/lip-oil-hydrate.png',
    rating: {
      stars: 40,
      count: 1602
    },
    keywords: [
      'summer fridays',
      'lip oil',
      'liquid',
      'lips',
      'sheer'
    ],
    hasColors: true,
    colors: [
      '#db8888',
      '#b34d4d',
      '#b74559',
      '#803636'
    ],
    type: 'lips'
  },
  {
    id: '8e5f1a3b-7c8d-4c7e-9a1b-1e1f7e9f2b3d',
    name: 'Cream Blush',
    description: 'Blends seamlessly for a natural look.',
    priceCents: 1199,
    imageURL: '../images/products/cream-blush.png',
    rating: {
      stars: 40,
      count: 908
    },
    keywords: [
      'cream',
      'blush',
      'rosy'
    ],
    hasColors: true,
    colors: [
      '#d5919d',
      '#bf5668',
      '#b74559',
      '#82313f',
      '#5e232e',
      '#41181f'
    ],
    type: 'face'
  },
  {
    id: '06032788-2d52-4f53-8c29-d6dceca84a1b',
    name: 'Glow Recipe Watermelon Glow PHA + BHA Pore-Tight Toner',
    description: 'A bestselling watermelon toner infused with PHA and BHA that hydrates, gently exfoliates the skin, and helps to minimize the appearance of pores.',
    priceCents: 3500,
    imageURL: '../images/products/watermelon-toner.png',
    rating: {
      stars: 40,
      count: 6912
    },
    keywords: [
      'glow recipe',
      'pha',
      'watermelon',
      'toner',
      'pores'
    ],
    type: 'skincare'
  },
  {
    id: 'f51f6678-fc42-4221-b87b-07b582bc8175',
    name: 'VANILLA CANDY ROCK SUGAR | 42 Eau de Parfum',
    description: "Inspired by Mona's love for candy and mouthwatering notes, Vanilla Candy celebrates one of the most desired notes in fragrance with its delicious blend of sweet ingredients.",
    priceCents: 10000,
    imageURL: '../images/products/vanilla-rock-candy-perfume.png',
    rating: {
      stars: 40,
      count: 1245
    },
    keywords: [
      'fragrance',
      'candy',
      'vanilla',
      'rock',
      'perfume',
      '42',
      'eau de parfum'
    ],
    type: 'fragrance'
  },
  {
    id: '2c8f0d6e-7f4e-4b8a-9d3c-1f2e8f1e2d7a',
    name: 'Contour Kit',
    description: 'Defines and sculpts your features.',
    priceCents: 1899,
    imageURL: '../images/products/contour-kit.jpeg',
    rating: {
      stars: 3.5,
      count: 64
    },
    keywords: [
      'contour',
      'kit'
    ],
    type: 'face'
  },
  {
    id: '4a6f1d7e-6c4e-4c9a-9e1f-2d3e7e9f1e8c',
    name: 'Lip Balm - Coconut',
    description: 'Moisturizes and soothes dry lips.',
    priceCents: 699,
    imageURL: '../images/products/lip-balm.jpeg',
    rating: {
      stars: 4.5,
      count: 190
    },
    keywords: [
      'lipbalm',
      'coconut',
      'lips'
    ],
    type: 'lips'
  },
  {
    id: '8fd9e725-b963-48b7-9e96-f2928787f9b5',
    name: 'Good Girl Blush Eau de Parfum',
    description: 'fresh, floral explosion of femininity, this radiant reinvention of the iconic Good Girl scent reveals the multifaceted nature of modern womanhood with a double dose of sensual vanilla and exotic ylang-ylang.',
    priceCents: 9400,
    imageURL: '../images/products/good-girl-perfume.png',
    rating: {
      stars: 40,
      count: 649
    },
    keywords: [
      'fragrance',
      'feminine',
      'vanilla',
      'perfume',
      'eau de parfum'
    ],
    type: 'fragrance'
  },
  {
    id: '9f2e0c1b-8f7e-4b9a-9f2c-1e2f8e1f3c0d',
    name: 'Makeup Remover Wipes',
    description: 'Gently removes makeup and impurities.',
    priceCents: 799,
    imageURL: '../images/products/makeup-remover-wipes.png',
    rating: {
      stars: 40,
      count: 102
    },
    keywords: [
      'remover',
      'wipes',
      'makeup remover'
    ],
    type: 'face'
  },
  {
    id: '7d8f3c4e-2a1e-4d9b-9e1d-1b3e6e9e4d0f',
    name: 'Nail Polish',
    description: 'High-shine and long-lasting formula.',
    priceCents: 599,
    imageURL: '../images/products/nail-polish.png',
    rating: {
      stars: 4.5,
      count: 97
    },
    keywords: [
      'nail polish',
      'cherry',
      'red',
      'shiny'
    ],
    hasColors: true,
    colors: [
      '#F6C1C1',
      '#8A2B6D',
      '#9B9B9B',
      '#4F6D7A',
      '#F8D3A3',
      '#D4A5A5',
      '#E0B0FF'
    ],
    type: 'nails'
  },
  {
    id: '213b03f9-5d4e-4b17-9344-c5113b76fd60',
    name: 'COCO MADEMOISELLE Eau de Parfum',
    description: 'Irresistibly sexy, irrepressibly spirited. A sparkling ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character.',
    priceCents: 13800,
    imageURL: '../images/products/coco-perfume.png',
    rating: {
      stars: 45,
      count: 947
    },
    keywords: [
      'fragrance',
      'coco',
      'chanel',
      'perfume',
      'mademoiselle',
      'eau de parfum'
    ],
    type: 'fragrance'
  },
  {
    id: '48a436de-5a1e-487a-9071-f482d36bb58d',
    name: 'Brow Harmony Flexible Lifting and Laminating Eyebrow Gel',
    description: 'A universal clear, waterproof brow gel that shapes, lifts, and sets hairs in place with a flexible hold all day without feeling sticky or crunchy.',
    priceCents: 1700,
    imageURL: '../images/products/brows-lifting-gel.png',
    rating: {
      stars: 45,
      count: 687
    },
    keywords: [
      'rare beauty',
      'brows',
      'brow gel',
      'gel',
      'lifting',
      'clear'
    ],
    type: 'brows'
  },
  {
    id: '3e9f1b2c-4d8e-4a9d-9f1b-2d1e8f0e3c9d',
    name: 'Tinted Moisturizer',
    description: 'Hydrates and evens skin tone.',
    priceCents: 1299,
    imageURL: '../images/products/tinted-moisturizer.jpeg',
    rating: {
      stars: 50,
      count: 236
    },
    keywords: [
      'tinted',
      'light',
      'moisturizer'
    ],
    hasColors: true,
    colors: [
      '#ffd6c5',
      '#ffe2c9',
      '#ffcba3',
      '#e8b894',
      '#d8905f',
      '#c28155',
      '#88513a',
      '7b4934',
    ],
    type: 'skincare'
  },
  {
    id: '8d1f0b6e-5c7e-4d9c-9e2d-1c3e7e9e3d1a',
    name: 'Liquid Eyeliner - Black',
    description: 'Precision tip for easy application.',
    priceCents: 1099,
    imageURL: '../images/products/liquid-eyeliner.png',
    rating: {
      stars: 4.5,
      count: 100
    },
    keywords: [
      'eyeliner',
      'liquid',
      'black'
    ],
    type: 'eyes'
  },
  {
    id: '5b9f3a2c-1d7e-4e8b-9f2c-1e2d8f1e4c8d',
    name: 'Lip Liner - Nude',
    description: 'Defines lips and prevents feathering.',
    priceCents: 899,
    imageURL: '../images/products/lip-liner.png',
    rating: {
      stars: 40,
      count: 129
    },
    keywords: [
      'lip liner',
      'nude',
      'lips'
    ],
    type: 'lips'
  },
  {
    id: '6c8e1f0d-4b7e-4d9a-9e1d-2d1e7e9f3e7b',
    name: 'Pressed Powder',
    description: 'Sets makeup with a natural finish.',
    priceCents: 1099,
    imageURL: '../images/products/pressed-powder.png',
    rating: {
      stars: 50,
      count: 99
    },
    keywords: [
      'powder',
      'pressed',
      'fair'
    ],
    type: 'face'
  },
  {
    id: '2d8f0e5e-7b4e-4b9a-9d1c-1f3e8e1e2c7a',
    name: 'Lipstick - Mauve',
    description: 'Creamy formula with a satin finish.',
    priceCents: 999,
    imageURL: '../images/products/lipstick.png',
    rating: {
      stars: 4.5,
      count: 109
    },
    keywords: [
      'lipstick',
      'muave',
      'purple'
    ],
    type: 'lips'
  },
  {
    id: '4b6e1d8f-6a4e-4c9a-9e1d-2d3e7e9f2d8c',
    name: 'Glow Oil',
    description: 'Nourishes skin with a radiant finish.',
    priceCents: 1499,
    imageURL: '../images/products/glow-oil.png',
    rating: {
      stars: 40,
      count: 73
    },
    keywords: [
      'glow oil',
      'skincare'
    ],
    type: 'skincare'
  },
  {
    id: '1e7f0b9a-8f4e-4d9c-9e1d-1c2e8e1f3c8d',
    name: 'CC Cream - Medium',
    description: 'Color corrects and hydrates skin.',
    priceCents: 1399,
    imageURL: '../images/products/cc-cream.png',
    rating: {
      stars: 50,
      count: 845
    },
    keywords: [
      'cream',
      'cc',
      'medium',
      'skincare'
    ],
    type: 'face'
  }
];

app.get('/products', (req, res) => {
  res.json(products);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});