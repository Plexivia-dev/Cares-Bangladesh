'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Heart, UserCheck, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdvantageSection() {
  const advantages = [
    {
      title: 'Multidisciplinary Team',
      desc: 'Speech therapists, occupational therapists, ABA specialists, and special educators collaborating under one roof.',
      icon: UserCheck,
    },
    {
      title: 'Child-Centric Facilities',
      desc: 'Purpose-built sensory rooms, therapy gyms, and distraction-free learning spaces in Uttara, Dhaka.',
      icon: ShieldCheck,
    },
    {
      title: 'Family & Parent Partnership',
      desc: 'Regular progress tracking, home exercise plans, and empowering counseling for parents.',
      icon: Heart,
    },
    {
      title: 'Proven Developmental Outcomes',
      desc: 'Tailored interventions that generate measurable breakthroughs in communication, behavior, and motor skills.',
      icon: Star,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#00374e] to-[#002434] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-accent" />
            <span>Why Choose Cares Bangladesh</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-white">
            Dedicated Care. Measurable Growth.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
            We are committed to the highest standards of pediatric therapy and inclusive education, giving every child the foundation to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl hover:bg-white/15 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent text-primary-dark flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-flavors text-2xl text-accent">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/book-a-tour">
            <Button variant="accent" size="lg" className="font-bold shadow-xl hover:scale-105 transition-transform px-8">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Consultation Today
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
