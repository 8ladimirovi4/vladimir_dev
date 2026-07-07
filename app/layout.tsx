import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from '@/shared/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Vladimir Leonov',
    default: 'Vladimir Leonov',
  },
  description:
    'Senior Fullstack Developer with 7+ years in IT: building scalable React/Next.js and TypeScript interfaces, architecting complex UI systems, mentoring teams, and delivering product-focused solutions.',
  metadataBase: new URL('https://www.linkedin.com/in/le-vladimir/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
