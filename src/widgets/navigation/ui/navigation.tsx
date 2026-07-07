/** @layer widgets / slice navigation / segment ui — server shell */

import { ContactBtn } from '@/features/contact-modal';
import { LanguageSwitcher } from '@/features/language-switcher';
import { ThemeToggle } from '@/features/theme-toggle';
import type { Dictionary, Locale } from '@/shared/i18n';

import { NavLinks } from './nav-links';

type NavigationProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navigation({ locale, dictionary }: NavigationProps) {
  return (
    <header
      data-widget="navigation"
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <div className="font-mono text-lg tracking-tight">
          {dictionary.logo}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks labels={dictionary.nav} />
          <ContactBtn label={dictionary.nav.contact} />
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
