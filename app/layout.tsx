import '@/app/ui/global.css';
import { getSiteUrl, siteConfig, shouldIndexSite } from '@/shared/config/site';
import { Metadata } from 'next';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${siteConfig.name}`,
    default: siteConfig.name,
  },
  description:
    'Senior Frontend & AI Engineer with 7+ years in programming: React, TypeScript, NestJS, RAG (Qdrant + Gemini), FSD architecture, real-time UI, team leadership.',
  robots: shouldIndexSite(siteUrl)
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
