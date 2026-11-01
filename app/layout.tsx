import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import InitialLoader from '@/components/layout/InitialLoader/InitialLoader';
import PageTransition from '@/components/layout/PageTransition/PageTransition';
import PageReadinessObserver from '@/components/layout/PageTransition/PageReadinessObserver';
import { PageTransitionProvider } from '@/lib/context/PageTransitionContext';
import { siteConfig } from '@/data/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Premium Interior Design Studio Bhopal`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — Premium Interior Design Studio Bhopal`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Premium Interior Design Studio`,
    description: siteConfig.description,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning>
        <PageTransitionProvider>
          <InitialLoader />
          <PageTransition />
          <PageReadinessObserver />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
