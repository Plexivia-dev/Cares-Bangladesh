'use client';

import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import testimonials from '@/data/testimonials.json';

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-sky-50/50 relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-orange text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Parent Testimonials</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            What Parents Say About Cares
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            Real stories and heartfelt reviews from families whose children have flourished with our therapy programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <div className="font-bold text-xs text-primary">{item.name}</div>
                <div className="text-[11px] text-slate-500">{item.role} • {item.date}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
