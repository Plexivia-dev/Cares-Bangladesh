'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import team from '@/data/team.json';

const categories = [
  'All',
  'ABA/ Behavior Therapist',
  'International Supervisors',
  'Occupational Therapist',
  'Speech and Language Therapist',
];

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTeam = activeCategory === 'All'
    ? team
    : team.filter((m) => m.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Meet Our Clinical Team"
        subtitle="Dedicated Therapists & Educators Committed to Your Child's Success"
        breadcrumb={[{ name: 'Meet The Team' }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* Section Description */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary tracking-wide">
              Skilled Professional Therapists & Educators
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
              Our team is committed to empowering children with diverse needs by offering personalized evaluations and comprehensive services, helping them reach their full potential and lead independent lives.
            </p>
          </div>

          {/* Authentic Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-14 border-b border-slate-100 pb-6">
            {categories.map((cat, idx) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-sans transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Clinical Staff Grid (Clean Cards, No Extra Buttons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredTeam.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50/60 rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-start text-center group hover:-translate-y-1.5 h-full"
              >
                {/* Avatar Photo Frame */}
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-300 shadow-md bg-white group-hover:scale-105 transition-transform shrink-0 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-sans font-bold text-base sm:text-lg text-primary group-hover:text-secondary transition-colors tracking-wide min-h-[2.8rem] flex items-center justify-center leading-snug mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <div className="text-xs font-bold text-amber-700 font-sister min-h-[2.4rem] flex items-center justify-center leading-tight mb-3 px-2">
                  {member.role}
                </div>

                {/* Qualification / Bio */}
                <p className="text-xs text-slate-600 font-sans leading-relaxed flex-grow">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Global Evaluation CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#00364d] via-[#004460] to-[#002e42] text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
            <h3 className="font-flavors text-3xl sm:text-4xl text-amber-300">
              Ready to Help Your Child Flourish?
            </h3>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-sans leading-relaxed">
              Schedule an initial consultation and clinical evaluation with our experienced specialists to determine the optimal care plan for your child.
            </p>
            <div className="pt-2">
              <Link href="/book-a-tour" className="inline-block">
                <Button
                  variant="accent"
                  size="lg"
                  className="rounded-full font-bold shadow-lg hover:shadow-2xl px-9 py-6 text-base bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-105 cursor-pointer"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Book An Evaluation Today</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
