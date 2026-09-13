import fallbackTeam from '@/data/team.json';
import fallbackPosts from '@/data/posts.json';
import fallbackSeo from '@/data/seoMetadata.json';
import siteConfig from '@/data/siteConfig.json';

// Resolves base API URL based on runtime environment
export const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || (window.location.hostname === 'localhost' ? 'http://localhost:5092' : 'https://server.caresbd.com');
  }
  return process.env.INTERNAL_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5092';
};

// Fetches public branding assets with fallback values
export const getBranding = async () => {
  const fallback = {
    logoUrl: '/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png',
    faviconUrl: '/uploads/2024/08/site_icon-removebg-preview.png',
  };

  try {
    const res = await fetch(`${getApiBaseUrl()}/api/v1/settings/public/branding`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallback;
    const json = await res.json();
    return {
      logoUrl: json.data?.logoUrl || fallback.logoUrl,
      faviconUrl: json.data?.faviconUrl || fallback.faviconUrl,
    };
  } catch (err) {
    return fallback;
  }
};

// Fetches site-wide or slug-specific SEO configuration
export const getSeoConfig = async (slug = '') => {
  const fallbackKey = slug || 'home';
  const localSeo = fallbackSeo[fallbackKey] || fallbackSeo['home'] || {};

  const fallback = {
    metaTitle: localSeo.title || 'Cares Bangladesh | Occupational & Speech Therapy Center in Dhaka',
    metaDescription: localSeo.description || 'Best Occupational, Speech & Language Therapy, ABA & Early Childhood Learning center in Dhaka Bangladesh.',
    keywords: ['Occupational Therapy', 'Speech Therapy', 'ABA Therapy', 'Autism Care Center', 'Dhaka'],
    ogImage: localSeo.openGraphImage || '/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png',
    siteName: 'Cares Bangladesh',
    twitterHandle: '@caresbangladesh',
    canonicalBaseUrl: siteConfig.siteUrl,
    canonical: localSeo.canonical || `${siteConfig.siteUrl}${slug ? `/${slug}` : ''}`,
    isRobotsNoindex: Boolean(localSeo.isRobotsNoindex),
  };

  try {
    const endpoint = slug ? `${getApiBaseUrl()}/api/v1/settings/public/seo/${slug}` : `${getApiBaseUrl()}/api/v1/settings/public/seo`;
    const res = await fetch(endpoint, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    const json = await res.json();
    if (json.status !== 'success' || !json.data) return fallback;
    return {
      ...fallback,
      ...json.data,
      metaTitle: json.data.metaTitle || json.data.title || fallback.metaTitle,
      metaDescription: json.data.metaDescription || json.data.description || fallback.metaDescription,
      canonical: json.data.canonical || fallback.canonical,
      ogImage: json.data.ogImage || fallback.ogImage,
    };
  } catch (err) {
    return fallback;
  }
};

// Fetches clinical team members with local fallback
export const getTeam = async () => {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/v1/team/public`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallbackTeam;
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      return json.data;
    }
    return fallbackTeam;
  } catch (err) {
    return fallbackTeam;
  }
};

// Fetches published blog articles with search and pagination
export const getBlogs = async (params = {}) => {
  const { page = 1, limit = 9, search = '', category = '' } = params;
  const query = new URLSearchParams();
  if (page) query.set('page', String(page));
  if (limit) query.set('limit', String(limit));
  if (search) query.set('search', search);
  if (category && category !== 'All') query.set('category', category);

  try {
    const res = await fetch(`${getApiBaseUrl()}/api/v1/blogs/public?${query.toString()}`, {
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      return {
        blogs: json.data,
        pagination: json.pagination || {
          total: json.data.length,
          page,
          limit,
          totalPages: Math.ceil(json.data.length / limit) || 1,
        },
      };
    }
    throw new Error('Empty API response');
  } catch (err) {
    const filtered = fallbackPosts.filter((p) => {
      const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || (p.excerpt && p.excerpt.toLowerCase().includes(search.toLowerCase()));
      const matchCat = !category || category === 'All' || (p.categories && p.categories.some((c) => (typeof c === 'string' ? c === category : c.name === category || c.slug === category)));
      return matchSearch && matchCat;
    });

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const slice = filtered.slice((page - 1) * limit, page * limit);

    return {
      blogs: slice,
      pagination: { total, page, limit, totalPages },
    };
  }
};

// Fetches a single blog article by slug
export const getBlogBySlug = async (slug) => {
  if (!slug) return null;

  try {
    const res = await fetch(`${getApiBaseUrl()}/api/v1/blogs/public/${encodeURIComponent(slug)}`, {
      next: { revalidate: 30 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.status === 'success' && json.data) {
        return json.data;
      }
    }
  } catch (err) {}

  const raw = String(slug).trim().toLowerCase();
  const found = fallbackPosts.find((p) => p.slug && p.slug.toLowerCase() === raw);
  return found || null;
};

// Fetches list of all distinct blog categories
export const getBlogCategories = async () => {
  try {
    const res = await fetch(`${getApiBaseUrl()}/api/v1/blogs/public/categories`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
        return ['All', ...json.data];
      }
    }
  } catch (err) {}

  const catSet = new Set(['All']);
  fallbackPosts.forEach((p) => {
    if (Array.isArray(p.categories)) {
      p.categories.forEach((c) => {
        const name = typeof c === 'string' ? c : c.name || c.slug;
        if (name) catSet.add(name);
      });
    }
  });

  return Array.from(catSet);
};
