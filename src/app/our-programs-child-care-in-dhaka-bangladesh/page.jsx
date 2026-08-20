'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import programs from '@/data/programs.json';

export default function ProgramsOverviewPage() {
  return (
    <>
      <PageHeader
        title="Our Specialized Programs"
        subtitle="Evidence-Based Therapy & Inclusive Education for Neurodiverse Children"
        breadcrumb={[{ name: 'Our Programs' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Intervention Plans</span>
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
              Empowering Development Across All Domains
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              Every child has a unique learning style and developmental trajectory. Explore our specialized therapy and early education programs below.
            </p>
          </div>

          <div className="space-y-12">
            {programs.map((prog, idx) => (
              <div
                key={prog.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 1 ? 'bg-sky-50/50' : 'bg-white'}`}
              >
                <div className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={prog.bannerImage}
                    alt={prog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent" className="bg-accent text-primary-dark font-bold">
                      {prog.badge}
                    </Badge>
                  </div>
                </div>

                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-flavors text-3xl text-primary">{prog.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {prog.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Key Features:</h4>
                    {prog.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center space-x-4">
                    <Link href={`/${prog.slug}`}>
                      <Button variant="default" size="default" className="font-semibold shadow-md">
                        <span>Read Full Program Details</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/book-a-tour">
                      <Button variant="outline" size="default" className="font-semibold">
                        <span>Book Assessment</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
