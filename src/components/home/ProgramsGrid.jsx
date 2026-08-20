'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Mic, Activity, Brain, Palette, BookOpen, GraduationCap, Compass } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import programs from '@/data/programs.json';

const iconMap = {
  Mic: Mic,
  Activity: Activity,
  Brain: Brain,
  Palette: Palette,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  Sparkles: Sparkles,
  Compass: Compass,
};

export default function ProgramsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50/60 to-white relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-orange text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Specialized Services</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary leading-tight">
            Programs Designed for Your Child's Bright Future
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
            From speech rehabilitation and sensory occupational therapy to behavioral interventions and early education, we provide comprehensive, personalized care for children with diverse developmental needs.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((prog, idx) => {
            const IconComponent = iconMap[prog.icon] || Sparkles;

            return (
              <Card
                key={prog.id}
                className="group relative overflow-hidden bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Banner Image Preview */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prog.bannerImage}
                      alt={prog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="accent" className="bg-accent text-primary-dark font-bold shadow-xs">
                        {prog.badge}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-5 pb-2">
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <CardTitle className="font-flavors text-2xl text-primary group-hover:text-secondary transition-colors line-clamp-1">
                        {prog.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-sans">
                      {prog.shortDescription}
                    </CardDescription>
                  </CardHeader>
                </div>

                <CardFooter className="p-5 pt-3">
                  <Link href={`/${prog.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-xl text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-between"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/book-a-tour">
            <Button variant="accent" size="lg" className="font-bold shadow-lg hover:shadow-xl px-8">
              <span>Book An Assessment For Your Child</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
