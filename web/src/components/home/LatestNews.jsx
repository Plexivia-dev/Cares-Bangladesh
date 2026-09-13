'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { getBlogs } from '@/lib/api';

// Homepage news section highlighting latest articles and guides
const LatestNews = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    getBlogs({ limit: 3 }).then((res) => {
      if (res?.blogs) {
        setRecentPosts(res.blogs.slice(0, 3));
      }
    });
  }, []);

  return (
    <section className="py-20 bg-slate-50/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-bold text-secondary uppercase tracking-wider font-sister">
            What&apos;s new
          </div>
          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recentPosts.map((post) => (
            <div
              key={post.id || post._id || post.slug}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                      : post.date || 'Recent'}
                  </span>
                </div>

                <Link href={`/${post.slug}`}>
                  <h3 className="font-sans font-bold text-base text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <Link
                  href={`/${post.slug}`}
                  className="inline-flex items-center text-xs font-bold text-secondary hover:text-primary transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
