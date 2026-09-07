'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdvantageSection() {
  const advantages = [
    {
      num: '01.',
      title: 'Highly trained professionals',
      desc: 'Our team consists of specialized therapists from CRP, BUP, and DU who bring exceptional knowledge and provide high quality care.',
      bg: 'bg-sky-50/80 border-sky-100 text-sky-900',
    },
    {
      num: '02.',
      title: 'Latest therapeutic techniques',
      desc: 'We provide innovative and effective approaches utilizing the latest advancements in pediatric therapy.',
      bg: 'bg-amber-50/80 border-amber-100 text-amber-900',
    },
    {
      num: '03.',
      title: 'Maintaining global standards',
      desc: 'We ensure our assessment tools, protocols, and therapy programs adhere to international clinical standards.',
      bg: 'bg-emerald-50/80 border-emerald-100 text-emerald-900',
    },
    {
      num: '04.',
      title: 'Long term benefit',
      desc: 'We prioritize services that yield long-term developmental gains for continuous growth and life achievement.',
      bg: 'bg-purple-50/80 border-purple-100 text-purple-900',
    },
    {
      num: '05.',
      title: 'Wide Range of Therapy Services',
      desc: 'We offer speech therapy, occupational therapy, ABA behavior plans, art therapy, preschool, and special education under one roof.',
      bg: 'bg-pink-50/80 border-pink-100 text-pink-900',
    },
    {
      num: '06.',
      title: 'Individualized Care Programs',
      desc: 'Our care plans are customized for each child’s specific strengths and needs, ensuring impactful support.',
      bg: 'bg-teal-50/80 border-teal-100 text-teal-900',
    },
  ];

  return (
    <>
      {/* Why Choose Us Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider font-sister">
              Find Out What Makes Us Unique
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
              Why Choose US
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantages.map((adv, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-[2rem] border shadow-xs hover:shadow-lg transition-all ${adv.bg}`}
              >
                <div className="font-sister text-2xl text-amber-600 font-bold mb-2">
                  {adv.num}
                </div>
                <h3 className="font-sans font-bold text-base text-slate-800 mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Wide Banner: We Foster a Supportive Environment for Every Child */}
      <section className="relative py-24 bg-gradient-to-r from-[#00364d] via-[#004460] to-[#002b3d] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-accent leading-tight">
                We Foster a Supportive Environment for Every Child
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                Through open-ended, play-based experiences, individuals thrive, developing a deep connection to their community and a love for learning. We create a safe space where every child feels valued.
              </p>
              <div className="pt-2">
                <Link href="/book-a-tour">
                  <Button variant="accent" size="lg" className="rounded-full font-bold px-8 bg-amber-500 hover:bg-amber-600 text-white shadow-lg">
                    <span>Schedule a Visit Today</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
                <Image
                  src="/assets/img/values.jpg"
                  alt="Supportive Environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
