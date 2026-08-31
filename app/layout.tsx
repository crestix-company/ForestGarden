import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_JP({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600'] });
const jpSerif = Noto_Serif_JP({ variable: '--font-jp-serif', subsets: ['latin'], weight: ['400', '500'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '500', '600'] });

export function generateMetadata(): Metadata {
  const siteOrigin = process.env.SITE_ORIGIN ?? 'http://localhost:3000';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const metadataBase = new URL(`${basePath}/`, siteOrigin);
  const ogImage = new URL('og.png', metadataBase);
  const favicon = new URL('favicon.png', metadataBase);
  const title = 'Forest Garden | 箕面のカフェ・レストラン';
  const description = '旬の野菜をたっぷり使った、目にも身体にもやさしいランチを箕面で。';

  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: metadataBase },
    icons: { icon: favicon, apple: favicon },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Forest Garden' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${jpSerif.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
