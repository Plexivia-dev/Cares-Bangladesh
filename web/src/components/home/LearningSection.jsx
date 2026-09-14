'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Multidisciplinary therapy hub highlighting early learning domains and individualized care
const LearningSection = () => {
  const subjects = [
    { 
      name: 'Art Therapy', 
      icon: '/assets/img/childit_icons/art.svg', 
      cardBg: 'bg-gradient-to-b from-rose-50/90 via-pink-50/60 to-white border-rose-200/90 shadow-rose-100/60 text-rose-900',
      iconBg: 'bg-rose-100 text-rose-600 border border-rose-200'
    },
    { 
      name: 'Music Therapy', 
      icon: '/assets/img/childit_icons/music.svg', 
      cardBg: 'bg-gradient-to-b from-purple-50/90 via-indigo-50/60 to-white border-purple-200/90 shadow-purple-100/60 text-purple-900',
      iconBg: 'bg-purple-100 text-purple-600 border border-purple-200'
    },
    { 
      name: 'Math & Logic', 
      icon: '/assets/img/childit_icons/math.svg', 
      cardBg: 'bg-gradient-to-b from-sky-50/90 via-blue-50/60 to-white border-sky-200/90 shadow-sky-100/60 text-sky-900',
      iconBg: 'bg-sky-100 text-sky-600 border border-sky-200'
    },
    { 
      name: 'Literacy & Speech', 
      icon: '/assets/img/childit_icons/literacy.svg', 
      cardBg: 'bg-gradient-to-b from-amber-50/90 via-yellow-50/60 to-white border-amber-200/90 shadow-amber-100/60 text-amber-950',
      iconBg: 'bg-amber-100 text-amber-700 border border-amber-200'
    },
    { 
      name: 'Outdoor Play', 
      icon: '/assets/img/childit_icons/outdoor.svg', 
      cardBg: 'bg-gradient-to-b from-emerald-50/90 via-teal-50/60 to-white border-emerald-200/90 shadow-emerald-100/60 text-emerald-900',
      iconBg: 'bg-emerald-100 text-emerald-600 border border-emerald-200'
    },
    { 
      name: 'Sport & Motor', 
      icon: '/assets/img/childit_icons/sport.svg', 
      cardBg: 'bg-gradient-to-b from-orange-50/90 via-amber-50/60 to-white border-orange-200/90 shadow-orange-100/60 text-orange-950',
      iconBg: 'bg-orange-100 text-orange-600 border border-orange-200'
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/40">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/assets/img/count-bg.jpg"
          alt="Learning background"
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-slate-50/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-secondary border border-sky-200/80 text-xs font-extrabold uppercase tracking-wider font-sans shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span>Dynamic Learning Experiences</span>
              </div>
            </div>

            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary leading-[1.2]">
              Foundations of Learning. <span className="text-secondary">Dedicated to Excellence</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Child development is our main concern. Our multidisciplinary programs are developed by an experienced clinical team to enhance speech, fine and gross motor skills, sensory integration, and emotional resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1 text-slate-700 font-sans text-sm font-semibold">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <span>Individualized Care Plans</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                <span>Certified Child Specialists</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Sensory-Enriched Therapy</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0" />
                <span>Continuous Family Guidance</span>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/book-a-tour">
                <button className="h-12 px-8 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6">
              {subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-[2.25rem] border-2 ${sub.cardBg} text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[180px] sm:min-h-[200px] flex flex-col items-center justify-center group`}
                >
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 mx-auto rounded-2xl ${sub.iconBg} p-3.5 sm:p-4 flex items-center justify-center mb-3.5 shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src={sub.icon}
                      alt={sub.name}
                      width={40}
                      height={40}
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-slate-800 group-hover:text-primary transition-colors leading-snug">
                    {sub.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
