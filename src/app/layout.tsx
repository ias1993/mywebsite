import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import { SITE_URL, profile, seo } from '@/data/profile';
import './globals.css';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700', '800'], variable: '--font-display', display: 'swap' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono', display: 'swap' });

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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F5F3' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1211' },
  ],
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
