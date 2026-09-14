'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowRight, Search, BookOpen, Filter } from 'lucide-react';
import { getBlogs, getBlogCategories } from '@/lib/api';

// News and articles archive page with API-driven pagination, categories, and keyword search
const NewsEventsPage = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlogCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getBlogs({ page, limit: 9, search, category: selectedCategory })
      .then((res) => {
        setBlogs(res.blogs);
        setTotalPages(res.pagination?.totalPages || 1);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [page, search, selectedCategory]);

  return (
    <>
      <PageHeader
        title="News, Events & Articles"
        subtitle="Therapy insights, guides, and developmental advice from Cares Bangladesh"
        breadcrumb={[{ name: 'News & Events' }]}
      />

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto mb-10 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <Input
                type="text"
                placeholder="Search therapy articles & guides..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="pl-12 h-12 rounded-full border-slate-200 shadow-sm bg-white font-sans text-sm focus-visible:ring-primary"
              />
            </div>

            {categories.length > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPage(1);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-white rounded-3xl p-7 border border-slate-200/80 animate-pulse h-64 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-200 rounded-md w-1/3"></div>
                    <div className="h-6 bg-slate-200 rounded-md w-4/5"></div>
                    <div className="h-4 bg-slate-200 rounded-md w-full"></div>
                  </div>
                  <div className="h-4 bg-slate-200 rounded-md w-1/4"></div>
                </div>
              ))}
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((post) => (
                  <div
                    key={post.id || post._id || post.slug}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 h-full"
                  >
                    <div>
                      {post.coverImage && (
                        <Link href={`/${post.slug}`} className="block relative w-full h-48 overflow-hidden bg-slate-100">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      )}

                      <div className="p-6 sm:p-7 space-y-3.5">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <div className="flex items-center space-x-1.5 text-amber-700 font-semibold font-sister">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            <span>
                              {post.publishedAt
                                ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                                : post.date || 'Recent'}
                            </span>
                          </div>

                          {post.categories && post.categories[0] && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100/70 text-amber-800 border border-amber-200/60">
                              {typeof post.categories[0] === 'string' ? post.categories[0] : post.categories[0].name || post.categories[0].slug}
                            </span>
                          )}
                        </div>

                        <Link href={`/${post.slug}`} className="block">
                          <h3 className="font-sans font-bold text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                      <div className="pt-4">
                        <Link
                          href={`/${post.slug}`}
                          className="inline-flex items-center text-xs font-bold text-secondary hover:text-primary transition-colors group/link"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-3 mt-14">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="rounded-full px-5"
                  >
                    Previous
                  </Button>
                  <span className="text-xs text-slate-600 font-semibold">
                    Page {page} of {totalPages}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="rounded-full px-5"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-flavors text-2xl text-slate-700">No Articles Found</h3>
              <p className="text-xs text-slate-500">Try searching for a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NewsEventsPage;
