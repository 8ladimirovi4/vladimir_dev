/** @layer app / LocaleLayout — app/[locale]/layout.tsx */

import { ContactModal } from '@/features/contact-modal';
import { locales } from '@/shared/i18n';
import { ThemeProvider } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Navigation } from '@/widgets/navigation';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navigation />
      {children}
      <Footer />
      <ContactModal />
    </ThemeProvider>
  );
}
