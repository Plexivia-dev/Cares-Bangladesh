'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const highlights = [
    'Comprehensive speech, language & communication rehabilitation',
    'Sensory Integration & pediatric occupational motor skill training',
    'Applied Behavior Analysis (ABA) & positive reinforcement plans',
    'Inclusive preschool & specialized early childhood education',
    'Collaborative parent counseling & home training guidance'
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 aspect-[4/3]">
              <Image
                src="/assets/img/children-food.jpg"
                alt="About Cares Bangladesh"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            
            {/* Experience overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-white p-5 sm:p-6 rounded-2xl shadow-2xl max-w-xs border-2 border-accent">
              <div className="font-flavors text-3xl sm:text-4xl text-accent mb-1">Cares Bangladesh</div>
              <p className="text-xs text-slate-200 leading-relaxed">
                A warm, safe haven dedicated to nurturing every child's physical, emotional and communicative potential.
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Cares Bangladesh</span>
            </div>

            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
              A Caring & Inclusive Environment Where Every Child Can Grow
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              At <strong>Cares Bangladesh</strong>, we believe every child has unique talents and unlimited potential. Our mission is to provide evidence-based multidisciplinary therapy, compassionate care, and personalized learning programs so that children can overcome developmental hurdles and lead confident, independent lives.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center space-x-4">
              <Link href="/about">
                <Button variant="default" size="lg" className="font-semibold shadow-md">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/speech-language-therapy-therapist">
                <Button variant="ghost" size="lg" className="font-semibold text-secondary hover:text-primary">
                  <span>Meet Our Therapists</span>
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
