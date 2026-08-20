'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Heart, Award, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';
import team from '@/data/team.json';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Cares Bangladesh"
        subtitle="Accept. Understand. Love — Empowering Every Child's Unique Journey"
        breadcrumb={[{ name: 'About Us' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 aspect-[4/3]">
                <Image
                  src="/assets/img/values.jpg"
                  alt="About Cares Bangladesh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-xs border-2 border-accent hidden sm:block">
                <div className="font-flavors text-3xl text-accent mb-1">Our Mission</div>
                <p className="text-xs text-slate-200">
                  Providing individualized therapeutic support to help children achieve communication, mobility, and lifelong independence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story & Philosophy</span>
              </div>

              <h2 className="font-flavors text-3xl sm:text-4xl text-primary leading-tight">
                A Holistic Center Dedicated to Pediatric Therapy & Special Education
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                <strong>Cares Bangladesh</strong> was founded with a deep commitment to supporting neurodiverse children and individuals experiencing developmental, speech, or behavioral delays. Located in Uttara, Dhaka, our state-of-the-art center brings together speech-language pathologists, occupational therapists, behavioral analysts, and special educators.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                We believe that early intervention changes lives. Through play-based learning, multi-sensory stimulation, and evidence-based clinical protocols, we create an environment where every child feels loved, respected, and capable of tremendous growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <div className="font-flavors text-2xl text-primary">Compassionate</div>
                  <div className="text-xs text-slate-600">Child-first therapeutic setting</div>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
                  <div className="font-flavors text-2xl text-accent-orange">Collaborative</div>
                  <div className="text-xs text-slate-600">Continuous family engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="font-flavors text-4xl text-primary">Our Dedicated Leadership & Team</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Passionate professionals working together to bring out the best in every child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-center space-y-4">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-accent/30 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-flavors text-2xl text-primary">{member.name}</h3>
                  <div className="text-xs font-bold text-secondary mb-2">{member.designation}</div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speech-language-therapy-therapist">
              <Button variant="default" size="default" className="font-semibold shadow-md">
                <span>View Full Clinical Team</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
