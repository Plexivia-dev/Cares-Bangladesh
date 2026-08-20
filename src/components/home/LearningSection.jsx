'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LearningSection() {
  const subjects = [
    { name: 'Art Therapy', icon: '/assets/img/childit_icons/art.svg', color: 'bg-pink-100 text-pink-600' },
    { name: 'Music Therapy', icon: '/assets/img/childit_icons/music.svg', color: 'bg-purple-100 text-purple-600' },
    { name: 'Math & Logic', icon: '/assets/img/childit_icons/math.svg', color: 'bg-sky-100 text-sky-600' },
    { name: 'Literacy & Speech', icon: '/assets/img/childit_icons/literacy.svg', color: 'bg-amber-100 text-amber-600' },
    { name: 'Outdoor Play', icon: '/assets/img/childit_icons/outdoor.svg', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Sport & Motor', icon: '/assets/img/childit_icons/sport.svg', color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold text-secondary uppercase tracking-wider font-sister">
              — Dynamic Learning Experiences
            </div>

            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              Foundations of Learning. <span className="text-secondary">Dedicated to Excellence</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Child development is our main concern. Our multidisciplinary programs are developed by an experienced clinical team to enhance speech, fine and gross motor skills, sensory integration, and emotional resilience.
            </p>

            <div className="pt-2">
              <Link href="/book-a-tour">
                <Button variant="accent" size="default" className="rounded-full font-bold px-7 bg-amber-500 hover:bg-amber-600 text-white shadow-md">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Circular Icon Hub matching original theme */}
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
}
