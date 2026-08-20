'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import programs from '@/data/programs.json';

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-[#fbf5e8]/60 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider font-sister">
            For your kids' learning and development
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Our Programs
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            We provide a specialized curriculum combining therapeutic techniques to create age-appropriate, personalized growth pathways.
          </p>
        </div>

        {/* Featured Program Cards (Matching original childit theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Card 1: Early Intervention & Kids */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-amber-100 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src="/assets/img/values.jpg"
                alt="Child Therapy & Early Learning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex items-end justify-between">
                <span className="px-4 py-1.5 rounded-full bg-amber-500 text-white font-bold text-sm font-sans shadow-md">
                  1.5 - 12+ Years
                </span>
                <span className="text-white text-xs font-semibold">Pediatric Therapy</span>
              </div>
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-flavors text-2xl text-primary">Pediatric Therapy & Early Learning</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Specialized Speech Therapy, Occupational Sensory Integration, ABA Behavior plans, and inclusive preschool for toddlers and young children.
                </p>
              </div>
              <Link href="/our-programs-child-care-in-dhaka-bangladesh" className="block pt-2">
                <Button variant="outline" size="sm" className="w-full rounded-full font-bold text-xs border-amber-400 text-amber-700 hover:bg-amber-500 hover:text-white">
                  <span>Explore Child Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Adolescent & Development */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-teal-100 flex flex-col">
            <div className="relative h-64 w-full overflow-hidden bg-slate-100">
              <Image
                src="/assets/img/children-food.jpg"
                alt="Specialized Adolescent & Lifelong Development"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex items-end justify-between">
                <span className="px-4 py-1.5 rounded-full bg-teal-600 text-white font-bold text-sm font-sans shadow-md">
                  18+ Years
                </span>
                <span className="text-white text-xs font-semibold">Lifelong Skills</span>
              </div>
            </div>
            <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-flavors text-2xl text-primary">Specialized & Lifelong Development</h3>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Functional independence, communication enhancement, art expression, and personalized educational consultancy.
                </p>
              </div>
              <Link href="/our-programs-child-care-in-dhaka-bangladesh" className="block pt-2">
                <Button variant="outline" size="sm" className="w-full rounded-full font-bold text-xs border-teal-500 text-teal-700 hover:bg-teal-600 hover:text-white">
                  <span>Explore Adult Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links Grid for all 8 services */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              href={`/${prog.slug}`}
              className="bg-white p-3.5 rounded-2xl border border-amber-100 text-center hover:bg-primary hover:text-white transition-all group shadow-2xs"
            >
              <div className="text-xs font-bold text-slate-700 group-hover:text-white font-sans line-clamp-1">
                {prog.title}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
