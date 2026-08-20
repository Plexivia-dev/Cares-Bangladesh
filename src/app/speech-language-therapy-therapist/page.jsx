'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, ArrowRight, Heart } from 'lucide-react';
import team from '@/data/team.json';

export default function TeamPage() {
  const leadership = team.filter((m) => m.isLeadership);
  const clinicalStaff = team.filter((m) => !m.isLeadership);

  return (
    <>
      <PageHeader
        title="Meet Our Clinical Team"
        subtitle="Dedicated Therapists & Educators Committed to Your Child's Success"
        breadcrumb={[{ name: 'Meet The Team' }]}
      />

      <section className="py-20 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold font-sister shadow-xs tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Qualified Clinical Specialists</span>
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary tracking-wide">
              Skilled Professional Therapists & Educators
            </h2>

            <p className="text-slate-600 text-base font-sans leading-relaxed max-w-2xl mx-auto">
              Our multidisciplinary clinical staff holds degrees and certifications from CRP, BUP, DU, and international institutions, providing personalized, evidence-based care.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest font-sister">
                Leadership & Founders
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between group"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-amber-300 shadow-md shrink-0 bg-slate-100 group-hover:scale-105 transition-transform">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2 text-center sm:text-left flex-grow">
                      <h3 className="font-sans font-bold text-xl text-primary leading-snug">
                        {member.name}
                      </h3>
                      <div className="text-xs font-bold text-amber-700 font-sister leading-snug">
                        {member.role}
                      </div>
                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link href="/book-a-tour" className="w-full block">
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full h-11 rounded-full font-bold text-xs bg-gradient-to-r from-primary to-secondary text-white hover:opacity-95 shadow-md"
                      >
                        <Calendar className="w-3.5 h-3.5 mr-2" />
                        <span>Book An Assessment</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Staff Grid (Equal Card Sizes) */}
          <div>
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest font-sister">
                Clinical Therapists & Specialists
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {clinicalStaff.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center group hover:-translate-y-1.5 h-full"
                >
                  <div className="space-y-4">
                    {/* Uniform Avatar Photo Frame */}
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-300 shadow-md bg-slate-100 group-hover:scale-105 transition-transform shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>

                    {/* Uniform Name */}
                    <div className="space-y-1.5">
                      <h3 className="font-sans font-bold text-base sm:text-lg text-primary group-hover:text-secondary transition-colors tracking-wide min-h-[3rem] flex items-center justify-center leading-snug">
                        {member.name}
                      </h3>

                      {/* Uniform Role */}
                      <div className="text-xs font-bold text-amber-700 font-sister min-h-[2.5rem] flex items-center justify-center leading-snug px-2">
                        {member.role}
                      </div>
                    </div>

                    {/* Uniform Bio / Qualification */}
                    <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 min-h-[3.2rem] flex items-center justify-center px-1">
                      {member.bio}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-5 border-t border-slate-100 mt-5">
                    <Link href="/book-a-tour" className="w-full block">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full h-10 rounded-full text-xs font-bold border-amber-400 text-amber-800 hover:bg-amber-500 hover:text-white transition-all"
                      >
                        <span>Book Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-[#00364d] via-[#004460] to-[#002e42] text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
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
                  className="rounded-full font-bold shadow-lg hover:shadow-2xl px-9 py-6 text-base bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-105"
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
