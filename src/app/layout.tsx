import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SITE_URL, profile, seo } from '@/data/profile';
import './globals.css';

// Fonts are self-hosted (latin subset, from @fontsource) so builds never depend on reaching Google Fonts.
const display = localFont({
  src: [
    { path: './fonts/bricolage-grotesque-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/bricolage-grotesque-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/bricolage-grotesque-latin-800-normal.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
});
const body = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/ibm-plex-sans-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-body',
  display: 'swap',
});
const mono = localFont({
  src: [
    { path: './fonts/jetbrains-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/jetbrains-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/jetbrains-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: seo.title, template: `%s | ${profile.name}` },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  category: 'technology',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    locale: 'en_US',
    firstName: 'Imran Ahmed',
    lastName: 'Siddiqui',
    username: profile.shortName,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAFAFA',
};

/** Applies a saved light/dark choice before first paint, so there is no theme flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('imran-theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
