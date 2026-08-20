'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Playful Organic Shape & Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Playful Yellow/Orange Organic Blob Shape from original theme */}
              <div className="absolute -inset-4 bg-[#f5a623] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 shadow-lg" />

              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] bg-white">
                <Image
                  src="/assets/img/children-food.jpg"
                  alt="Cares Bangladesh for Child Development"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Exact WordPress Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider font-sister">
              — Where Care and Growth Unite
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
                <Button variant="accent" size="default" className="rounded-full font-bold px-7 bg-amber-500 hover:bg-amber-600 text-white shadow-md">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
