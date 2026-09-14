'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Renders the about section showcasing center mission and child development care
const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fdfaf5] via-[#fffdfa] to-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 sm:-inset-6 bg-[#f5a623] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 shadow-xl opacity-90" />

              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] sm:aspect-[14/11] lg:aspect-[1/1] xl:aspect-[5/4] bg-white min-h-[320px] sm:min-h-[400px] lg:min-h-[440px]">
                <Image
                  src="/assets/img/children-food.jpg"
                  alt="Cares Bangladesh for Child Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-900 text-xs font-extrabold uppercase tracking-widest font-sans shadow-2xs">
              <span>Where Care & Growth Unite</span>
            </div>

            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              <span>Cares Bangladesh</span> for Child Development
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              We provide a caring and encouraging ambiance with some of the best occupational and speech therapists in Dhaka. Our main goal is to empower each child to reach their fullest potential through individualized care and joyful learning.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              From speech articulation and sensory integration to positive behavior reinforcement and inclusive preschool preparation, we work closely with parents to make every milestone a celebrated success.
            </p>

            <div className="pt-2">
              <Link href="/about">
                <button className="h-12 px-7 rounded-full font-bold text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
