'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Multidisciplinary therapy hub highlighting early learning domains and individualized care
const LearningSection = () => {
  const subjects = [
    { name: 'Art Therapy', icon: '/assets/img/childit_icons/art.svg', color: 'bg-pink-100 text-pink-600' },
    { name: 'Music Therapy', icon: '/assets/img/childit_icons/music.svg', color: 'bg-purple-100 text-purple-600' },
    { name: 'Math & Logic', icon: '/assets/img/childit_icons/math.svg', color: 'bg-sky-100 text-sky-600' },
    { name: 'Literacy & Speech', icon: '/assets/img/childit_icons/literacy.svg', color: 'bg-amber-100 text-amber-600' },
    { name: 'Outdoor Play', icon: '/assets/img/childit_icons/outdoor.svg', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Sport & Motor', icon: '/assets/img/childit_icons/sport.svg', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff7ed] via-[#fffbf5] to-[#f0f9ff] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-slate-700 font-sans text-sm font-semibold">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 p-5 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl ${sub.color} p-3 flex items-center justify-center mb-3 shadow-2xs group-hover:scale-110 transition-transform`}>
                    <Image
                      src={sub.icon}
                      alt={sub.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="font-sans font-bold text-xs text-slate-800 group-hover:text-primary">
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
