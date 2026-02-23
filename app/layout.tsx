import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Vladimir Leonov',
    default: 'Vladimir Leonov',
  },
  description:
    'Senior Frontend Developer with 13+ years in IT: building scalable React/Next.js and TypeScript interfaces, architecting complex UI systems, mentoring teams, and delivering product-focused solutions.',
  metadataBase: new URL('https://www.linkedin.com/in/le-vladimir/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
