'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowRight, Search, Sparkles, BookOpen } from 'lucide-react';
import posts from '@/data/posts.json';

export default function NewsEventsPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const postsPerPage = 9;

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <>
      <PageHeader
        title="News, Events & Articles"
        subtitle="Therapy insights, guides, and developmental advice from Cares Bangladesh"
        breadcrumb={[{ name: 'News & Events' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder="Search therapy articles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="pl-12 h-12 rounded-full border-slate-200 shadow-sm"
            />
          </div>

          {currentPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-slate-50/70 rounded-3xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>{post.date}</span>
                      </div>

                      <Link href={`/${post.slug}`}>
                        <h3 className="font-flavors text-2xl text-primary group-hover:text-secondary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60 mt-4">
                      <Link
                        href={`/${post.slug}`}
                        className="inline-flex items-center text-xs font-bold text-secondary hover:text-primary transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-3 mt-14">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
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
              <p className="text-xs text-slate-500">Try searching for a different keyword.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
