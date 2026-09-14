'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials.json';

// Client testimonials showcase sharing feedback and stories from parents
const ReviewsSection = () => {
  return (
    <section className="py-24 bg-[#fbf5e8] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-white fill-current">
          <path d="M0,0 C300,90 600,-40 900,60 L1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Testimonials
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-sans font-medium">
            What parents say about their journey with Cares Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-3xl border border-amber-200/70 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs font-sans">
                  {item.name[0]}
                </div>
                <div>
                  <div className="font-bold text-xs text-primary font-sans">{item.name}</div>
                  <div className="text-[11px] text-slate-500 font-sans">{item.role} • {item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ReviewsSection;
