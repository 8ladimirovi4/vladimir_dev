'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * next-themes injects an inline <script> to prevent theme FOUC.
 * React 19 warns about <script> inside Client Components (false positive for SSR).
 * Filter only that known message — pacocoursey/next-themes#385 / shadcn dark-mode guide.
 */
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes(
        'Encountered a script tag while rendering React component'
      )
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
