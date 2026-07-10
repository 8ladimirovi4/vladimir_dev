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
    'Senior Frontend Engineer with 7+ years in programming: React, TypeScript, Redux, FSD architecture, real-time UI, CI/CD, team leadership. Building scalable product interfaces for fintech and high-growth startups.',
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
