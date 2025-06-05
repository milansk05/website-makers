// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // DIT MOET ER IN STAAN!
import { Navigatiebalk } from '../components/navigatie/Navigatiebalk';
import { Voettekst } from '../components/navigatie/Voettekst';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Makers - Professionele Websites voor Ondernemers',
  description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren. Van ontwerp tot online marketing - wij zorgen voor jouw digitale succes.',
  keywords: 'website laten maken, webdesign, website ontwikkeling, SEO, hosting, onderhoud',
  authors: [{ name: 'Website Makers' }],
  creator: 'Website Makers',
  publisher: 'Website Makers',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://websitemakers.nl',
    title: 'Website Makers - Professionele Websites voor Ondernemers',
    description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren.',
    siteName: 'Website Makers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Makers - Professionele Websites voor Ondernemers',
    description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Navigatiebalk />
        <main className="min-h-screen">
          {children}
        </main>
        <Voettekst />
      </body>
    </html>
  );
}