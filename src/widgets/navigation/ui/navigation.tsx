'use client';

/** @layer widgets / slice navigation / segment ui — client shell + mobile menu */

import { ContactBtn } from '@/features/contact-modal';
import { LanguageSwitcher } from '@/features/language-switcher';
import { ThemeToggle } from '@/features/theme-toggle';
import type { Dictionary, Locale } from '@/shared/i18n';
import { cn } from '@/shared/lib/cn';
import { useEffect, useId, useRef, useState } from 'react';

import { NavLinks } from './nav-links';

type NavigationProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Navigation({ locale, dictionary }: NavigationProps) {
  const { nav, logo, contactModal, footer } = dictionary;
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();
  const touchYRef = useRef<number | null>(null);

  const mobileItems = [
    { href: '#work', label: nav.work },
    { href: '#stack', label: nav.stack },
    { href: '#projects', label: nav.projects },
    { href: '#engineering', label: nav.engineering },
    { href: '#contact', label: nav.contact },
  ] as const;

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const onResize = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  /** Scroll page while pointer/finger is on the dimmed area outside the menu panel */
  const scrollPageFromBackdrop = (deltaY: number) => {
    window.scrollBy(0, deltaY);
  };

  return (
    <header
      data-widget="navigation"
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="relative z-[55] mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 sm:px-6 lg:px-12 lg:py-4">
        {/* Left: hamburger (mobile) / logo (desktop) */}
        <div className="flex items-center justify-self-start">
          <button
            type="button"
            className="relative z-[60] flex size-10 cursor-pointer items-center justify-center rounded-lg bg-secondary/50 transition-colors hover:bg-secondary lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="relative block size-5" aria-hidden>
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                  menuOpen ? 'top-[9px] rotate-45' : 'top-[5px] rotate-0'
                )}
              />
              <span
                className={cn(
                  'absolute top-[9px] left-0 block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                  menuOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-0.5 w-5 rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                  menuOpen ? 'top-[9px] -rotate-45' : 'top-[13px] rotate-0'
                )}
              />
            </span>
          </button>

          <a
            href="#top"
            className="hidden font-mono text-lg tracking-tight transition-colors hover:text-foreground lg:inline"
          >
            {logo}
          </a>
        </div>

        {/* Center: logo on mobile / desktop nav */}
        <div className="flex items-center justify-center justify-self-center">
          <a
            href="#top"
            className="max-w-[46vw] truncate font-mono text-sm tracking-tight transition-colors hover:text-foreground sm:max-w-none sm:text-base lg:hidden"
          >
            {logo}
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            <NavLinks labels={nav} />
            <ContactBtn
              label={nav.contact}
              content={contactModal}
              social={footer.social}
            />
          </div>
        </div>

        {/* Right: lang + theme */}
        <div className="flex items-center justify-end gap-2 justify-self-end sm:gap-3">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </div>

      {/* Full-width mobile panel (below header bar) */}
      <div
        id={panelId}
        role="navigation"
        aria-label="Mobile"
        aria-hidden={!menuOpen}
        className={cn(
          'absolute top-full right-0 left-0 z-50 origin-top border-b border-border/50 bg-background/95 shadow-lg backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden',
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {mobileItems.map((item, index) => (
            <li
              key={item.href}
              className={cn(
                'transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
                menuOpen
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-1 opacity-0'
              )}
              style={{
                transitionDelay: menuOpen ? `${80 + index * 40}ms` : '0ms',
              }}
            >
              <a
                href={item.href}
                className="block cursor-pointer rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary/60 active:bg-secondary"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop: tap closes; wheel/touch outside menu scrolls the page */}
      <div
        aria-hidden
        className={cn(
          'fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 ease-out motion-reduce:transition-none lg:hidden',
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={closeMenu}
        onWheel={(event) => {
          scrollPageFromBackdrop(event.deltaY);
        }}
        onTouchStart={(event) => {
          touchYRef.current = event.touches[0]?.clientY ?? null;
        }}
        onTouchMove={(event) => {
          const currentY = event.touches[0]?.clientY;
          if (touchYRef.current == null || currentY == null) return;
          scrollPageFromBackdrop(touchYRef.current - currentY);
          touchYRef.current = currentY;
        }}
        onTouchEnd={() => {
          touchYRef.current = null;
        }}
      />
    </header>
  );
}
