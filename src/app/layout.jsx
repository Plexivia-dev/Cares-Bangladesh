import { Flavors, Love_Ya_Like_A_Sister, Montserrat } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import siteConfig from '@/data/siteConfig.json';
import seoMetadata from '@/data/seoMetadata.json';

const flavors = Flavors({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-flavors',
  display: 'swap',
});

const loveYaSister = Love_Ya_Like_A_Sister({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sister',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const homeSeo = seoMetadata['home'] || seoMetadata['best-occupational-and-speech-therapists-in-dhaka'] || {};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Cares Bangladesh | Occupational & Speech Therapy Center in Dhaka',
    template: '%s | Cares Bangladesh',
  },
  description: homeSeo.description || 'Best Occupational, Speech & Language Therapy, ABA & Early Childhood Learning center in Dhaka Bangladesh.',
  alternates: {
    canonical: homeSeo.canonical || siteConfig.siteUrl,
  },
  openGraph: {
    title: homeSeo.openGraphTitle || 'Cares Bangladesh',
    description: homeSeo.openGraphDescription || 'Accept. Understand. Love',
    url: siteConfig.siteUrl,
    siteName: 'Cares Bangladesh',
    images: [
      {
        url: homeSeo.openGraphImage || '/assets/img/logo.svg',
        width: 800,
        height: 600,
        alt: 'Cares Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeSeo.twitterTitle || 'Cares Bangladesh',
    description: homeSeo.twitterDescription || 'Accept. Understand. Love',
    images: [homeSeo.twitterImage || '/assets/img/logo.svg'],
  },
  icons: {
    icon: '/assets/img/favicon/favicon.png',
    shortcut: '/assets/img/favicon/favicon.ico',
    apple: '/assets/img/favicon/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${flavors.variable} ${loveYaSister.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/assets/img/favicon/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-slate-800 selection:bg-accent selection:text-primary">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
