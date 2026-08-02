import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { defaultLocale, locales } from '@/shared/i18n';

/** @layer app — i18n middleware (redirect / → /en) */

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*|opengraph-image).*)'],
};
