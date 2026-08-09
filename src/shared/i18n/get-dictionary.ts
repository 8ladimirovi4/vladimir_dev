/** @layer shared / slice i18n — серверный загрузчик словаря */

import type { Locale } from './config';
import en from './dictionaries/en';
import ru from './dictionaries/ru';

const dictionaries = { en, ru } as const;

export type Dictionary = (typeof dictionaries)[Locale];

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.en;
}
