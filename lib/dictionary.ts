import type { Locale } from './i18n';
import enDict from './dictionaries/en.json';

export type Dictionary = typeof enDict;

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
  fr: () => import('./dictionaries/fr.json').then((module) => module.default as Dictionary),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
