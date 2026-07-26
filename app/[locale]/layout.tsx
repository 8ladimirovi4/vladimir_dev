/** @layer app / LocaleLayout — app/[locale]/layout.tsx */

import { getDictionary, locales, type Locale } from '@/shared/i18n';
import { Footer } from '@/widgets/footer';
import { Navigation } from '@/widgets/navigation';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params, //[slug: ru/en]
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navigation locale={locale} dictionary={dictionary} />
      {children}
      <Footer dictionary={dictionary} />
    </div>
  );
}
