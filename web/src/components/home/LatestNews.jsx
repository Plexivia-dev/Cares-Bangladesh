'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import posts from '@/data/posts.json';

export default function LatestNews() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50/60 relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="text-xs font-bold text-secondary uppercase tracking-wider font-sister">
            What's new
          </div>
          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{post.date}</span>
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
}
