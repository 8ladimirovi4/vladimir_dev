/** @layer shared / slice config — CV file paths */

import type { Locale } from '@/shared/i18n';

export const CV_FILES = {
  en: {
    path: '/cv/Vladimir_Leonov_Frontend_EN.pdf',
    filename: 'Vladimir_Leonov_Frontend_EN.pdf',
  },
  ru: {
    path: '/cv/Vladimir_Leonov_Frontend_RU.pdf',
    filename: 'Vladimir_Leonov_Frontend_RU.pdf',
  },
} as const;

export function getCvDownload(locale: Locale) {
  const alternateLocale = locale === 'en' ? 'ru' : 'en';

  return {
    primary: CV_FILES[locale],
    alternate: CV_FILES[alternateLocale],
  };
}
