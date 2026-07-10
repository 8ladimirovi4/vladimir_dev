/** @layer app / Page — app/[locale]/page.tsx */

import { getDictionary, type Locale } from '@/shared/i18n';
import { Hero } from '@/widgets/hero';
import { Philosophy } from '@/widgets/philosophy';
import { Projects } from '@/widgets/projects';
import { TechnicalExpertise } from '@/widgets/technical-expertise';
import { Work } from '@/widgets/work';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <main className="relative">
      <Hero content={dictionary.hero} locale={locale} />
      <TechnicalExpertise content={dictionary.expertise} />
      <Projects />
      <Work />
      <Philosophy />
    </main>
  );
}
