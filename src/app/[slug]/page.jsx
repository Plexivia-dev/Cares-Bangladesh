import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import ContactWidget from '@/components/shared/ContactWidget';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, ArrowLeft, Share2, Sparkles, BookOpen } from 'lucide-react';
import posts from '@/data/posts.json';
import seoMetadata from '@/data/seoMetadata.json';
import siteConfig from '@/data/siteConfig.json';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  const seo = seoMetadata[slug] || (post ? post.seo : null);

  if (!post && !seo) {
    return {
      title: 'Article Not Found | Cares Bangladesh',
    };
  }

  const title = seo?.title || post?.title || 'Article | Cares Bangladesh';
  const description = seo?.description || post?.excerpt || 'Child development and therapy insights from Cares Bangladesh.';
  const canonical = seo?.canonical || `${siteConfig.siteUrl}/${slug}`;
  const ogImage = seo?.openGraphImage || '/assets/img/logo.svg';

  return {
    title: `${title} | Cares Bangladesh`,
    description: description,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: seo?.openGraphTitle || title,
      description: seo?.openGraphDescription || description,
      url: canonical,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      type: 'article',
      publishedTime: post?.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: [seo?.twitterImage || ogImage],
    },
  };
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 4);

  // Schema.org Article JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Cares Bangladesh',
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cares Bangladesh',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/assets/img/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/${post.slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title={post.title}
        breadcrumb={[
          { name: 'News & Articles', href: '/news-events' },
          { name: 'Article' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Article Content */}
            <article className="lg:col-span-8 space-y-8">
              {/* Meta Info */}
              <div className="flex items-center space-x-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <User className="w-4 h-4 text-accent" />
                  <span>Cares Bangladesh Clinical Team</span>
                </div>
              </div>

              {/* Body */}
              <div
                className="prose prose-slate max-w-none prose-headings:font-flavors prose-headings:text-primary prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-secondary prose-a:font-semibold hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Navigation Back */}
              <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                <Link href="/news-events">
                  <Button variant="outline" size="sm" className="font-semibold">
                    <ArrowLeft className="w-4 h-4 mr-1.5" />
                    <span>Back to Articles</span>
                  </Button>
                </Link>

                <Link href="/book-a-tour">
                  <Button variant="accent" size="sm" className="font-bold">
                    <span>Book A Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 sticky top-24">
              <ContactWidget />

              {/* Recent Articles */}
              <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-flavors text-2xl text-primary border-b pb-2">Recent Guides</h4>
                <div className="space-y-3">
                  {recentPosts.map((rPost) => (
                    <Link
                      key={rPost.id}
                      href={`/${rPost.slug}`}
                      className="block p-2.5 rounded-2xl hover:bg-white transition-all group"
                    >
                      <div className="text-xs text-slate-500 mb-1">{rPost.date}</div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-secondary transition-colors line-clamp-2 font-sans">
                        {rPost.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}
