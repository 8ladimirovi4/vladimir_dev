/** @layer widgets / slice navigation / segment ui — server shell */

import { ContactBtn } from '@/features/contact-modal';
import { LanguageSwitcher } from '@/features/language-switcher';
import { ThemeToggle } from '@/features/theme-toggle';

import { NavLinks } from './nav-links';

export function Navigation() {
  return (
    <header data-widget="navigation">
      <NavLinks />
      <LanguageSwitcher />
      <ThemeToggle />
      <ContactBtn />
    </header>
  );
}
