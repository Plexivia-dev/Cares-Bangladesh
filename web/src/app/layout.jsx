import React, { Suspense } from 'react';
import { Flavors, Love_Ya_Like_A_Sister, Montserrat } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PagePreloader from '@/components/shared/PagePreloader';
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

import { getBranding, getSeoConfig } from '@/lib/api';

// Generates dynamic metadata for the storefront root layout
export const generateMetadata = async () => {
  const [branding, seo] = await Promise.all([getBranding(), getSeoConfig('home')]);

  const favicon = branding.faviconUrl || '/uploads/2024/08/site_icon-removebg-preview.png';
  const logo = branding.logoUrl || '/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png';

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: seo.metaTitle || 'Cares Bangladesh | Occupational & Speech Therapy Center in Dhaka',
      template: '%s | Cares Bangladesh',
    },
    description: seo.metaDescription || 'Best Occupational, Speech & Language Therapy, ABA & Early Childhood Learning center in Dhaka Bangladesh.',
    alternates: {
      canonical: seo.canonical || siteConfig.siteUrl,
    },
    openGraph: {
      title: seo.ogTitle || seo.metaTitle || 'Cares Bangladesh',
      description: seo.ogDescription || seo.metaDescription || 'Accept. Understand. Love',
      url: siteConfig.siteUrl,
      siteName: seo.siteName || 'Cares Bangladesh',
      images: [
        {
          url: seo.ogImage || logo,
          width: 800,
          height: 600,
          alt: seo.siteName || 'Cares Bangladesh',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.metaTitle || 'Cares Bangladesh',
      description: seo.twitterDescription || seo.metaDescription || 'Accept. Understand. Love',
      images: [seo.twitterImage || seo.ogImage || logo],
    },
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon,
    },
  };
};

// Root layout component providing theme fonts and global structure
const RootLayout = async ({ children }) => {
  const branding = await getBranding();
  const favicon = branding.faviconUrl || '/uploads/2024/08/site_icon-removebg-preview.png';

  return (
    <html lang="en" className={`${flavors.variable} ${loveYaSister.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href={favicon} sizes="any" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-slate-800 selection:bg-accent selection:text-primary">
        <Suspense fallback={null}>
          <PagePreloader />
        </Suspense>
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
