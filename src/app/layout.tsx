import type { Metadata, Viewport } from 'next';
import { DM_Sans, IBM_Plex_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import type { ReactNode } from 'react';

import '@/styles/global.css';
import { site } from '@/content/site';
import { Footer } from '@/components/chrome/Footer';
import { Header } from '@/components/chrome/Header';
import { THEME_STORAGE_KEY } from '@/lib/theme';

const firaCode = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-fira-code',
  display: 'swap',
  preload: true,
});

const openSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName}, ${site.role}`,
    template: `%s · ${site.fullName}`,
  },
  description: site.intro,
  openGraph: {
    type: 'website',
    url: site.url,
    title: `${site.fullName}, ${site.role}`,
    description: site.intro,
    siteName: site.fullName,
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#191a17' },
  ],
};

/** Applies the stored theme before first paint so the page never flashes. */
const themeScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

const RootLayout = async ({ children }: { readonly children: ReactNode }) => {
  const nonce = (await headers()).get('x-nonce') ?? undefined;

  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Reveals are hidden until observed; without JS they must still show. */}
        <noscript>
          <style>{'.reveal-target{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="small sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[var(--accent-ink)]"
        >
          Skip to content
        </a>
        <div className="relative">
          <Header />
          <main id="main">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
