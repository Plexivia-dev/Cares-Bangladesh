'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSlider() {
  return (
    <section className="relative bg-gradient-to-b from-sky-100/60 via-amber-50/40 to-white pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Floating Cloud Card on Hero */}
          <div className="lg:col-span-6 relative z-10 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold font-sister shadow-xs">
              <span>Dedicated & Compassionate</span>
            </div>

            <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
              Will Your Child <span className="text-secondary">Be Safe?</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
              At <strong>Cares Bangladesh</strong>, we provide a warm, loving, and evidence-based environment where children with developmental, speech, and motor challenges achieve confidence and joy.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/book-a-tour">
                <Button variant="accent" size="lg" className="rounded-full font-bold shadow-lg hover:shadow-xl px-8 h-13 text-base bg-amber-500 hover:bg-amber-600 text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Schedule a Tour</span>
                </Button>
              </Link>

              <Link href="/our-programs-child-care-in-dhaka-bangladesh">
                <Button variant="outline" size="lg" className="rounded-full h-13 px-8 text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white bg-white/90">
                  <span>Our Programs</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Authentic Child Playing Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Playful Orange/Yellow Blob Background */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-300 to-orange-400 rounded-[3rem] rotate-3 opacity-80 blur-xs -z-10" />
              
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white">
                <Image
                  src="/assets/img/values.jpg"
                  alt="Cares Bangladesh Child Learning"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl shadow-xl border-2 border-amber-200 flex items-center space-x-3 hidden sm:flex">
                <div className="w-11 h-11 rounded-full bg-amber-500 text-white flex items-center justify-center font-flavors text-xl font-bold">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% Individualized Care</div>
                  <div className="text-[11px] text-slate-500 font-sister">Accept. Understand. Love</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Authentic Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-12 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
