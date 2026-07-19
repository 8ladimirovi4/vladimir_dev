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
    'Senior Frontend & AI Engineer with 7+ years in programming: React, TypeScript, NestJS, RAG (Qdrant + Gemini), FSD architecture, real-time UI, team leadership. Building scalable product interfaces and production AI systems for fintech and high-growth startups.',
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
