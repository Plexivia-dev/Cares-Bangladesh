'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getTeam } from '@/lib/api';

// About Us overview page detailing organization history, mission, and leadership team
const AboutPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeam().then((data) => {
      setTeam(data);
    });
  }, []);

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

      <section className="py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="font-flavors text-4xl text-primary">Our Dedicated Leadership & Team</h2>
            <p className="text-sm text-slate-600 font-sans">
              Passionate, qualified clinical professionals working together to bring out the best in every child.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
            {team.slice(0, 8).map((member) => (
              <div
                key={member.id || member._id || member.name}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all text-center flex flex-col justify-between h-full group hover:-translate-y-1"
              >
                <div className="space-y-3.5">
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-amber-300 shadow-md bg-slate-100 shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-base text-primary group-hover:text-secondary transition-colors min-h-[2.6rem] flex items-center justify-center leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-amber-700 font-sister min-h-[2.2rem] flex items-center justify-center leading-tight">
                      {member.role}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3 min-h-[3rem] flex items-center justify-center">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speech-language-therapy-therapist">
              <Button variant="default" size="lg" className="rounded-full font-bold px-8 shadow-md">
                <span>View All 19 Clinical Specialists</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
