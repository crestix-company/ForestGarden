import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_JP({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600'] });
const jpSerif = Noto_Serif_JP({ variable: '--font-jp-serif', subsets: ['latin'], weight: ['400', '500'] });
const serif = Cormorant_Garamond({ variable: '--font-serif', subsets: ['latin'], weight: ['400', '500', '600'] });

export function generateMetadata(): Metadata {
  const metadataBase = new URL(process.env.SITE_ORIGIN ?? 'http://localhost:3000');
  const title = 'Forest Garden | 箕面のカフェ・レストラン';
  const description = '旬の野菜をたっぷり使った、目にも身体にもやさしいランチを箕面で。';

  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: '/' },
    icons: { icon: '/favicon.png', apple: '/favicon.png' },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      title,
      description,
      images: [{ url: new URL('/og.png', metadataBase), width: 1200, height: 630, alt: 'Forest Garden' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [new URL('/og.png', metadataBase)],
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
