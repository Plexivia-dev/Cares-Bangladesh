'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import posts from '@/data/posts.json';

export default function LatestNews() {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Articles & Guides</span>
            </div>
            <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
              Latest News & Therapy Insights
            </h2>
          </div>

          <Link href="/news-events" className="mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="font-semibold">
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
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
                  <h3 className="font-sans font-bold text-lg text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
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

      </div>
    </section>
  );
}
