type Copy = { es: string; en: string };

export const productTitles: Record<string, Copy> = {
  'taqueritos-lava': {
    es: 'Taqueritos Lava | Totopos enrollados extra picantes',
    en: 'Taqueritos Lava | Extra-spicy rolled corn chips',
  },
  'taqueritos-buffalo-ranch': {
    es: 'Taqueritos Buffalo Ranch | Totopos enrollados sabor búfalo ranch',
    en: 'Taqueritos Buffalo Ranch | Buffalo ranch rolled corn chips',
  },
  'taqueritos-dragon-de-fuego': {
    es: 'Taqueritos Dragón de Fuego | Totopos enrollados sabor chile limón',
    en: 'Taqueritos Dragon Fire | Chile-lime rolled corn chips',
  },
  'taqueritos-dragon-de-hielo': {
    es: 'Taqueritos Dragón Hielo | Totopos enrollados sabor chile y limón',
    en: 'Taqueritos Dragon Ice | Chile, spice and lime rolled corn chips',
  },
  'taqueritos-chile-toreado': {
    es: 'Taqueritos Chile Toreado | Totopos enrollados sabor chile toreado',
    en: 'Taqueritos Chile Toreado | Chile toreado rolled corn chips',
  },
  'taqueritos-queso-fusion': {
    es: 'Taqueritos Queso Fusión | Totopos enrollados sabor queso',
    en: 'Taqueritos Queso Fusión | Cheese rolled corn chips',
  },
  'taqueritos-chili-pack': {
    es: 'Taqueritos Chili Pack | Totopos de maíz enrollados',
    en: 'Taqueritos Chili Pack | Rolled corn tortilla chips',
  },
};

export const productDescriptions: Record<string, Copy> = {
  'taqueritos-lava': {
    es: 'Taqueritos Lava: totopos de maíz enrollados con extra picante. Conoce presentaciones, información nutricional y recetas.',
    en: 'Taqueritos Lava: extra-spicy rolled corn tortilla chips. See sizes, nutrition and recipes.',
  },
  'taqueritos-buffalo-ranch': {
    es: 'Taqueritos Buffalo Ranch: totopos de maíz enrollados con sabor a búfalo ranch. Presentaciones, nutrición y recetas.',
    en: 'Taqueritos Buffalo Ranch: rolled corn tortilla chips with buffalo ranch flavor. Sizes, nutrition and recipes.',
  },
  'taqueritos-dragon-de-fuego': {
    es: 'Taqueritos Dragón de Fuego: totopos de maíz enrollados con sabor a chile limón. Conoce presentaciones y recetas.',
    en: 'Taqueritos Dragon Fire: rolled corn tortilla chips with chile-lime flavor. See sizes and recipes.',
  },
  'taqueritos-dragon-de-hielo': {
    es: 'Taqueritos Dragón Hielo: totopos de maíz enrollados con sabor a chile, especias y limón. Presentaciones y recetas.',
    en: 'Taqueritos Dragon Ice: rolled corn tortilla chips with chile, spices and lime. Sizes and recipes.',
  },
  'taqueritos-chile-toreado': {
    es: 'Taqueritos Chile Toreado: totopos de maíz enrollados con sabor a chile toreado. Presentaciones de 14 g a 600 g y recetas.',
    en: 'Taqueritos Chile Toreado: rolled corn tortilla chips with chile toreado flavor. Sizes from 14 g to 600 g and recipes.',
  },
  'taqueritos-queso-fusion': {
    es: 'Taqueritos Queso Fusión: totopos de maíz enrollados con sabor a queso. Conoce presentaciones, nutrición y recetas.',
    en: 'Taqueritos Queso Fusión: rolled corn tortilla chips with cheese flavor. See sizes, nutrition and recipes.',
  },
  'taqueritos-chili-pack': {
    es: 'Taqueritos Chili Pack: totopos de maíz enrollados. Conoce presentaciones, nutrición y recetas.',
    en: 'Taqueritos Chili Pack: rolled corn tortilla chips. See sizes, nutrition and recipes.',
  },
};

export function productCopy(id: string | undefined, lang: string): { title: string; description: string } | undefined {
  if (!id || !productDescriptions[id]) return undefined;
  const locale = lang === 'en' ? 'en' : 'es';
  return {
    title: productTitles[id][locale],
    description: productDescriptions[id][locale],
  };
}
