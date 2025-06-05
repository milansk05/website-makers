// src/app/layout.tsx - Verbeterde versie met metadata en optimalisaties
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Navigatiebalk } from '../components/navigatie/Navigatiebalk';
import { Voettekst } from '../components/navigatie/Voettekst';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import ErrorBoundaryFallback from '../components/ui/ErrorBoundaryFallback';

// Font configuratie met optimale instellingen
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

// Viewport configuratie
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563eb' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

// Uitgebreide metadata configuratie
export const metadata: Metadata = {
  metadataBase: new URL('https://websitemakers.nl'),
  title: {
    default: 'Website Makers - Professionele Websites voor Ondernemers',
    template: '%s | Website Makers',
  },
  description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren. Van ontwerp tot online marketing - wij zorgen voor jouw digitale succes in Nederland.',
  keywords: [
    'website laten maken',
    'webdesign Nederland',
    'website ontwikkeling',
    'professionele websites',
    'responsive webdesign',
    'SEO optimalisatie',
    'hosting Nederland',
    'website onderhoud',
    'e-commerce webshop',
    'online marketing',
    'webdevelopment Amsterdam',
    'website maker',
    'moderne websites',
    'gebruiksvriendelijke websites',
    'mobiele websites'
  ],
  authors: [
    { name: 'Website Makers', url: 'https://websitemakers.nl' },
    { name: 'Jan de Vries', url: 'https://websitemakers.nl/team/jan' },
  ],
  creator: 'Website Makers - Webdevelopment Studio',
  publisher: 'Website Makers B.V.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Webdevelopment',
  classification: 'Business Services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://websitemakers.nl',
    siteName: 'Website Makers',
    title: 'Website Makers - Professionele Websites voor Ondernemers',
    description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren. Meer dan 150 tevreden klanten in Nederland.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Makers - Professionele Webdevelopment',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Website Makers Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@websitemakers_nl',
    creator: '@websitemakers_nl',
    title: 'Website Makers - Professionele Websites voor Ondernemers',
    description: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren.',
    images: ['/twitter-image.jpg'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' },
    ],
  },
  alternates: {
    canonical: 'https://websitemakers.nl',
    languages: {
      'nl-NL': 'https://websitemakers.nl',
      'en-US': 'https://websitemakers.nl/en',
    },
  },
  verification: {
    google: 'jouw-google-verification-code',
    yandex: 'jouw-yandex-verification-code',
    yahoo: 'jouw-yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'jouw-facebook-verification-code',
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Website Makers',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#2563eb',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#2563eb',
  },
};

// JSON-LD gestructureerde data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Website Makers',
  description: 'Professionele webdevelopment studio gespecialiseerd in moderne, responsieve websites voor ondernemers in Nederland.',
  url: 'https://websitemakers.nl',
  logo: 'https://websitemakers.nl/logo.png',
  foundingDate: '2019',
  founders: [
    {
      '@type': 'Person',
      name: 'Jan de Vries',
      jobTitle: 'Oprichter & Lead Developer'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Prinsengracht 123',
    addressLocality: 'Amsterdam',
    postalCode: '1015 LM',
    addressCountry: 'NL'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+31-6-12345678',
      contactType: 'customer service',
      email: 'info@websitemakers.nl',
      availableLanguage: ['Dutch', 'English'],
      areaServed: 'NL'
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/websitemakers-nl',
    'https://www.facebook.com/websitemakers.nl',
    'https://twitter.com/websitemakers_nl',
    'https://www.instagram.com/websitemakers.nl'
  ],
  serviceType: [
    'Website Development',
    'Web Design',
    'SEO Optimization',
    'Website Maintenance',
    'E-commerce Development',
    'Web Hosting'
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '87',
    bestRating: '5',
    worstRating: '1'
  }
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://websitemakers.nl/#organization',
  name: 'Website Makers',
  image: 'https://websitemakers.nl/logo.png',
  telephone: '+31-6-12345678',
  email: 'info@websitemakers.nl',
  url: 'https://websitemakers.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Prinsengracht 123',
    addressLocality: 'Amsterdam',
    postalCode: '1015 LM',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '52.3676',
    longitude: '4.9041'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  priceRange: '€€€'
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect naar externe services voor betere prestaties */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* DNS prefetch voor externe resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />

        {/* Gestructureerde data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Preload kritieke resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Resource hints voor betere gebruikerservaring */}
        <link rel="prefetch" href="/diensten" />
        <link rel="prefetch" href="/portfolio" />
        <link rel="prefetch" href="/contact" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com;"
        />

        {/* PWA manifest */}
        <meta name="application-name" content="Website Makers" />
        <meta name="apple-mobile-web-app-title" content="Website Makers" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#2563eb" />

        {/* Geo tags voor lokale SEO */}
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Amsterdam" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />

        {/* Dublin Core metadata */}
        <meta name="DC.title" content="Website Makers - Professionele Websites" />
        <meta name="DC.creator" content="Website Makers" />
        <meta name="DC.subject" content="Webdevelopment, Website Design, SEO" />
        <meta name="DC.description" content="Professionele websites voor ondernemers" />
        <meta name="DC.publisher" content="Website Makers B.V." />
        <meta name="DC.contributor" content="Jan de Vries, Lisa Bakker, Mark Jansen" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.language" content="nl" />
        <meta name="DC.coverage" content="Nederland" />
        <meta name="DC.rights" content="Copyright 2024 Website Makers B.V." />
      </head>

      <body
        className={`${inter.className} bg-white text-secundair-900 leading-relaxed antialiased selection:bg-primair-100 selection:text-primair-900`}
        suppressHydrationWarning
      >
        {/* Skip-to-content link voor toegankelijkheid */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primair-600 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primair-300"
        >
          Spring naar hoofdinhoud
        </a>

        {/* Loading indicator (optioneel) */}
        <div
          id="loading-indicator"
          className="fixed top-0 left-0 w-full h-1 bg-primair-600 transform -translate-x-full transition-transform duration-300 z-50"
          style={{ display: 'none' }}
        />

        {/* Hoofdlayout structuur */}
        <div className="flex flex-col min-h-screen">
          {/* Navigatie */}
          <Navigatiebalk />

          {/* Hoofdinhoud met toegankelijke landmark */}
          <main id="main-content" className="flex-1 pt-16" role="main">
            {children}
          </main>

          {/* Voettekst */}
          <Voettekst />
        </div>

        {/* Performance monitoring (alleen in productie) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <SpeedInsights />
            <Analytics />
          </>
        )}

        {/* Service Worker registratie voor PWA functionaliteit */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js').then(function(registration) {
                      console.log('SW registered: ', registration);
                    }).catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                  });
                }
              `,
            }}
          />
        )}

        {/* Global error boundary fallback */}
        <div id="error-boundary-fallback" style={{ display: 'none' }}>
          {/* Client component for error fallback */}
          <ErrorBoundaryFallback />
        </div>
      </body>
    </html>
  );
}