'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Sparkles, Award, Heart, Calendar } from 'lucide-react';
import team from '@/data/team.json';

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Clinical Team"
        subtitle="Dedicated Therapists & Educators Committed to Your Child's Success"
        breadcrumb={[{ name: 'Meet The Team' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Expert & Compassionate</span>
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
              Qualified Professionals Who Truly Care
            </h2>

            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              Our multidisciplinary clinical staff possesses extensive experience in pediatric rehabilitation, evidence-based speech and occupational therapies, and inclusive childhood learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50/70 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="relative w-36 h-36 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-md mb-4 group-hover:scale-105 transition-transform">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-flavors text-2xl text-primary mb-1">{member.name}</h3>
                  <div className="text-xs font-bold text-accent-orange mb-3">{member.designation}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6">
                  <Link href="/book-a-tour" className="w-full block">
                    <Button variant="outline" size="sm" className="w-full text-xs font-bold">
                      Book Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary to-secondary text-white text-center space-y-4">
            <h3 className="font-flavors text-3xl sm:text-4xl text-accent">Ready to Help Your Child Flourish?</h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
              Schedule an initial evaluation with our senior clinical specialists to determine the right personalized pathway for your child.
            </p>
            <Link href="/book-a-tour" className="inline-block">
              <Button variant="accent" size="lg" className="font-bold shadow-lg">
                <Calendar className="w-4 h-4 mr-2" />
                Book An Evaluation Today
              </Button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
