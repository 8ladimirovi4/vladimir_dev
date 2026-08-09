/** @layer app / LocaleLayout — app/[locale]/layout.tsx */

import { inter } from '@/app/ui/fonts';
import {
  buildFaqJsonLd,
  buildPersonJsonLd,
  buildWebSiteJsonLd,
} from '@/shared/lib/json-ld';
import { buildLocaleMetadata } from '@/shared/lib/metadata';
import { getDictionary, locales, type Locale } from '@/shared/i18n';
import { JsonLd, ThemeProvider } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Navigation } from '@/widgets/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);
  return buildLocaleMetadata(locale, dictionary);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  const personJsonLd = buildPersonJsonLd(locale, dictionary);
  const websiteJsonLd = buildWebSiteJsonLd();
  const faqJsonLd = buildFaqJsonLd(locale, dictionary);

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <JsonLd id="json-ld-person" data={personJsonLd} />
        <JsonLd id="json-ld-website" data={websiteJsonLd} />
        <JsonLd id="json-ld-faq" data={faqJsonLd} />
        <ThemeProvider>
          <div id="top" className="min-h-screen bg-background text-foreground">
            <Navigation locale={locale} dictionary={dictionary} />
            {children}
            <Footer dictionary={dictionary} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
