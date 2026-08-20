import siteConfig from '@/data/siteConfig.json';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
