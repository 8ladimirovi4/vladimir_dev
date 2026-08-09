'use client';

/** @layer features / slice language-switcher / segment ui — client */

import { Languages } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { type Locale, locales } from '@/shared/i18n';

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const otherLocale = locales.find((item) => item !== locale) ?? locale;
  const href = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-mono uppercase">{locale}</span>
    </Link>
  );
}
