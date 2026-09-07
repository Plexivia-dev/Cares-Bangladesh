import posts from '@/data/posts.json';
import programs from '@/data/programs.json';
import siteConfig from '@/data/siteConfig.json';

export default async function sitemap() {
  const baseUrl = siteConfig.siteUrl;

  // Static core routes
  const coreRoutes = [
    '',
    '/about',
    '/our-programs-child-care-in-dhaka-bangladesh',
    '/speech-language-therapy-therapist',
    '/speech-and-language-therapy-bangla-near-me',
    '/faqs',
    '/book-a-tour',
    '/news-events',
    '/privacy-policy',
    '/sitemap',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Program routes
  const programRoutes = programs.map((prog) => ({
    url: `${baseUrl}/${prog.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog post routes
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...coreRoutes, ...programRoutes, ...postRoutes];
}
