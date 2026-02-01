import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header, Footer } from '@/components/layout';
import { AccessibilityWidget } from '@/components/AccessibilityWidget';
import { ColorBlindFilters } from '@/components/ColorBlindFilters';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fight2Breathe | Fighting for Every Breath',
  description:
    'Fight2Breathe is a nonprofit advocating for those living with Cystic Fibrosis and organ transplants. Join Caleigh on her mission to raise awareness and support the CF community.',
  keywords: [
    'Cystic Fibrosis',
    'CF awareness',
    'organ transplant',
    'lung transplant',
    'CF advocacy',
    'Fight2Breathe',
  ],
  openGraph: {
    title: 'Fight2Breathe | Fighting for Every Breath',
    description:
      'Join Caleigh on her mission to advocate for those living with Cystic Fibrosis and organ transplants.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Fight2Breathe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fight2Breathe | Fighting for Every Breath',
    description:
      'Join Caleigh on her mission to advocate for those living with Cystic Fibrosis and organ transplants.',
  },
  icons: {
    icon: '/images/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ColorBlindFilters />
        <Header />
        <AccessibilityWidget />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
