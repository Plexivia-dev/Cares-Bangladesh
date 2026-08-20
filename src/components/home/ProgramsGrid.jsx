'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Mic, Activity, Brain, Palette, BookOpen, GraduationCap, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import programs from '@/data/programs.json';

const iconMap = {
  Mic: Mic,
  Activity: Activity,
  Brain: Brain,
  Palette: Palette,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
  Compass: Compass,
};

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-orange text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Specialized Services</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary leading-tight">
            Programs Designed for Your Child's Bright Future
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            From speech rehabilitation and sensory occupational therapy to behavioral interventions and early education, we provide comprehensive, personalized care for children with diverse developmental needs.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {programs.map((prog) => {
            const IconComponent = iconMap[prog.icon] || Sparkles;

            return (
              <div
                key={prog.id}
                className="group relative bg-white border border-slate-100/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Banner Image Preview */}
                  <div className="relative h-48 w-full bg-slate-50 overflow-hidden">
                    <Image
                      src={prog.bannerImage}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-primary shadow-sm backdrop-blur-xs font-sans">
                        {prog.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pb-2 space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors mt-0.5 shadow-2xs">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-sans font-bold text-base sm:text-lg text-primary group-hover:text-secondary transition-colors leading-snug">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans pl-12">
                      {prog.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-4">
                  <Link href={`/${prog.slug}`} className="w-full block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full text-xs font-bold border-slate-200 text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all flex items-center justify-between px-5 h-10 shadow-2xs"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/book-a-tour">
            <Button variant="accent" size="lg" className="font-bold shadow-lg hover:shadow-xl px-8">
              <span>Book An Assessment For Your Child</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
