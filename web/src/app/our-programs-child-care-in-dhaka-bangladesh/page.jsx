'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import programs from '@/data/programs.json';

// Clinical programs overview directory displaying all pediatric and developmental services
const ProgramsOverviewPage = () => {
  return (
    <>
      <PageHeader
        title="Our Specialized Programs"
        subtitle="Evidence-Based Therapy & Inclusive Education for Neurodiverse Children"
        breadcrumb={[{ name: 'Our Programs' }]}
      />

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold font-sans shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Tailored Intervention Plans</span>
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
              Empowering Development Across All Domains
            </h2>

            <p className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed">
              Every child has a unique learning style and developmental trajectory. Explore our specialized therapy and early education programs below.
            </p>
          </div>

          <div className="space-y-10">
            {programs.map((prog, idx) => (
              <div
                key={prog.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 ${idx % 2 === 1 ? 'bg-amber-50/30' : 'bg-white'}`}
              >
                <div className={`lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={prog.bannerImage}
                    alt={prog.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/img/values.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md font-sans tracking-wide border border-white/60">
                      <Sparkles className="w-3 h-3 text-amber-500 mr-1.5" />
                      {prog.badge}
                    </span>
                  </div>
                </div>

                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-flavors text-3xl sm:text-4xl text-primary">{prog.title}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {prog.shortDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-sans">Key Features:</h4>
                    {prog.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link href={`/${prog.slug}`}>
                      <Button variant="default" size="default" className="font-bold shadow-md hover:shadow-lg bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                        <span>Read Full Program Details</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/book-a-tour">
                      <Button variant="outline" size="default" className="font-bold rounded-full px-6 border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-primary">
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
};

export default ProgramsOverviewPage;
