'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Brain, Globe, Activity, MessageSquare } from 'lucide-react';
import { getTeam } from '@/lib/api';

const categories = [
  { name: 'All', icon: Users, short: 'All' },
  { name: 'ABA/ Behavior Therapist', icon: Brain, short: 'ABA / Behavior' },
  { name: 'International Supervisors', icon: Globe, short: 'Intl. Supervisors' },
  { name: 'Occupational Therapist', icon: Activity, short: 'Occupational' },
  { name: 'Speech and Language Therapist', icon: MessageSquare, short: 'Speech & Language' },
];

// Clinical team directory page showcasing specialists with interactive segmented tabs and verified profiles
const TeamPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getTeam().then((data) => {
      setTeam(data);
    });
  }, []);

  const filteredTeam = activeCategory === 'All'
    ? team
    : team.filter((m) => m.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Meet Our Clinical Team"
        subtitle="Dedicated Therapists & Educators Committed to Your Child's Success"
        breadcrumb={[{ name: 'Meet The Team' }]}
      />

      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary tracking-wide">
              Skilled Professional Therapists & Educators
            </h2>

            <p className="text-slate-700 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
              Our team is committed to empowering children with diverse needs by offering personalized evaluations and comprehensive services, helping them reach their full potential and lead independent lives.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.name;
                const count = cat.name === 'All'
                  ? team.length
                  : team.filter((m) => m.category === cat.name).length;

                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`inline-flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                      isActive
                        ? 'bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]'
                        : 'bg-white text-slate-700 hover:text-primary hover:bg-slate-50 border border-slate-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-primary'}`} />
                    <span>{cat.name}</span>
                    <span
                      className={`text-[11px] px-2 py-0.5 rounded-full font-bold ml-1 ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="text-center mt-4 text-xs font-semibold text-slate-500 font-sans">
              Showing {filteredTeam.length} clinical specialists
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredTeam.map((member) => (
              <div
                key={member.id || member.name}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-start text-center group hover:-translate-y-1.5 h-full relative"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-400 shadow-md bg-slate-100 group-hover:scale-105 transition-transform shrink-0 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/img/user.svg';
                    }}
                  />
                </div>

                <h3 className="font-sans font-bold text-base sm:text-lg text-slate-900 group-hover:text-primary transition-colors tracking-tight min-h-[2.8rem] flex items-center justify-center leading-snug mb-1">
                  {member.name}
                </h3>

                <div className="text-xs font-semibold text-secondary min-h-[2.4rem] flex items-center justify-center leading-tight mb-3 px-2 font-sans">
                  {member.role}
                </div>

                <p className="text-xs text-slate-700 font-sans leading-relaxed flex-grow">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#00364d] via-[#004460] to-[#002e42] text-white text-center space-y-5 shadow-2xl relative overflow-hidden">
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
                  className="rounded-full font-bold shadow-lg hover:shadow-2xl px-9 py-6 text-base bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-105 cursor-pointer"
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
};

export default TeamPage;
