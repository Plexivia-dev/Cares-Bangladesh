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

// Renders responsive grid of clinical programs and specialized therapy services
const ProgramsGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/40 via-white to-sky-50/40 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-18">
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-extrabold font-sans border border-amber-200/80 shadow-2xs tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>For your child's learning and development</span>
            </div>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-primary tracking-wide leading-tight">
            Our Programs & Therapy Services
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed tracking-normal max-w-2xl mx-auto">
            Comprehensive speech, occupational, ABA behavioral therapy, and inclusive education tailored to each child's unique developmental journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9 max-w-6xl mx-auto">
          {programs.map((prog) => {
            const IconComponent = iconMap[prog.icon] || Sparkles;

            return (
              <div
                key={prog.id}
                className="group relative bg-white border border-slate-200/80 rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prog.bannerImage}
                      alt={prog.title}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 text-primary shadow-md backdrop-blur-xs font-sans tracking-wide">
                        {prog.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 pb-3 space-y-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:rotate-6 transition-transform mt-0.5">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-primary group-hover:text-secondary transition-colors tracking-wide leading-snug min-h-[3.2rem] flex items-center">
                        {prog.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-sans pl-1">
                      {prog.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-4">
                  <Link href={`/${prog.slug}`} className="w-full block">
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full h-12 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-[position:right_center] text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all duration-300 flex items-center justify-between px-6 group/btn"
                    >
                      <span className="tracking-wide">Explore Details</span>
                      <span className="w-7 h-7 rounded-full bg-amber-400 group-hover/btn:bg-amber-300 flex items-center justify-center group-hover/btn:translate-x-1.5 transition-transform duration-300 shadow-xs">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/book-a-tour">
            <Button variant="accent" size="default" className="rounded-full font-bold shadow-lg hover:shadow-2xl px-8 text-base bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-105">
              <span>Book An Assessment For Your Child</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProgramsGrid;
