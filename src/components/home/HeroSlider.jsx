'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Calendar, ArrowRight, Heart, ShieldCheck, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSlider() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Decorative Wave & Cloud Assets */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-orange text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Leading Child Care & Therapy Center in Dhaka</span>
            </div>

            <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-primary leading-[1.15] tracking-wide">
              Empowering Children to <span className="text-secondary underline decoration-accent decoration-wavy decoration-2">Thrive</span> with Love & Care
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to <strong>Cares Bangladesh</strong>. We offer world-class Speech & Language Therapy, Occupational Therapy, ABA Therapy, and specialized early learning tailored to your child's unique developmental journey.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link href="/book-a-tour">
                <Button variant="accent" size="lg" className="font-bold shadow-lg hover:shadow-xl flex items-center space-x-2 h-13 px-8 text-base">
                  <Calendar className="w-5 h-5" />
                  <span>Book A Free Consultation</span>
                </Button>
              </Link>

              <Link href="/our-programs-child-care-in-dhaka-bangladesh">
                <Button variant="outline" size="lg" className="h-13 px-8 text-base flex items-center space-x-2 font-semibold bg-white/80">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-flavors text-2xl sm:text-3xl text-primary">100%</div>
                <div className="text-xs text-slate-500 font-medium">Individualized Care</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-flavors text-2xl sm:text-3xl text-secondary">Expert</div>
                <div className="text-xs text-slate-500 font-medium">Certified Therapists</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-flavors text-2xl sm:text-3xl text-accent-orange">Uttara</div>
                <div className="text-xs text-slate-500 font-medium">Dhaka Center</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3]">
                <Image
                  src="/assets/img/values.jpg"
                  alt="Cares Bangladesh Child Therapy"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-bounce duration-1000 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent-orange">
                  <Heart className="w-6 h-6 fill-accent-orange" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Accept. Understand. Love</div>
                  <div className="text-[11px] text-slate-500">Every child is extraordinary</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Proven Results</div>
                  <div className="text-[11px] text-slate-500">Holistic Therapy & Growth</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
