import siteConfig from '@/data/siteConfig.json';

// Generates dynamic robots.txt directives for search engine web crawlers
const robots = () => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
};

export default robots;
