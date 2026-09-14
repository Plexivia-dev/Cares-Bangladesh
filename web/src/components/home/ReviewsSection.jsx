'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials.json';

// Client testimonials showcase sharing feedback and stories from parents
const ReviewsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#fbf5e8]">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/assets/img/about-ai-04.jpg"
          alt="Testimonials playful backdrop"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-amber-50/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="font-flavors text-4xl sm:text-5xl text-primary drop-shadow-xs">
            Testimonials
          </h2>
          <p className="text-slate-700 text-sm sm:text-base font-sans font-semibold">
            What parents say about their journey with Cares Bangladesh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white/95 backdrop-blur-xs p-7 rounded-[2rem] border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-300" />
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
    </section>
  );
};

export default ReviewsSection;
