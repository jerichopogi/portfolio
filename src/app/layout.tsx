import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { headers } from 'next/headers';
import type { ReactNode } from 'react';

import '@/styles/global.css';
import { site } from '@/content/site';
import { Footer } from '@/components/chrome/Footer';
import { Header } from '@/components/chrome/Header';
import { Grain } from '@/components/ui/Grain';
import { THEME_STORAGE_KEY } from '@/lib/theme';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.role}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.lead,
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.fullName} — ${site.role}`,
    description: site.lead,
    siteName: site.fullName,
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#17181f' },
  ],
};

/** Applies the stored theme before first paint so the page never flashes. */
const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

const RootLayout = async ({ children }: { readonly children: ReactNode }) => {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Motion renders its hidden initial state on the server; without JS
            those sections would never reveal. */}
        <noscript>
          <style>{'.reveal-target{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="font-meta sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-[var(--radius-sm)] focus:bg-ink focus:px-4 focus:py-2 focus:text-ink-inverse"
        >
          Skip to content
        </a>
        <Grain />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
