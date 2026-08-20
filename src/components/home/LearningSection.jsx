'use client';

import React from 'react';
import Image from 'next/image';
import { Palette, Music, Sparkles, BookOpen, Smile, Activity } from 'lucide-react';

export default function LearningSection() {
  const activities = [
    {
      title: 'Sensory & Motor Play',
      desc: 'Enhancing tactile awareness, balance, and spatial coordination through structured movement games.',
      icon: Activity,
      color: 'bg-orange-50 text-orange-600 border-orange-100',
    },
    {
      title: 'Art & Expressive Craft',
      desc: 'Exploring colors, textures, and shapes to foster emotional self-expression and fine motor dexterity.',
      icon: Palette,
      color: 'bg-pink-50 text-pink-600 border-pink-100',
    },
    {
      title: 'Music & Rhythmic Speech',
      desc: 'Utilizing rhythm and vocal play to stimulate speech patterns, language rhythm, and auditory processing.',
      icon: Music,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      title: 'Social & Communication Play',
      desc: 'Interactive peer activities that teach turn-taking, shared attention, and empathetic communication.',
      icon: Smile,
      color: 'bg-teal-50 text-teal-600 border-teal-100',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-accent/15 text-accent-orange text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Holistic Child Development</span>
            </div>

            <h2 className="font-flavors text-4xl sm:text-5xl text-primary leading-tight">
              Learning Through Creative Play & Engagement
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Play is the primary way children learn about themselves and the world around them. Our multidisciplinary therapeutic activities combine scientific developmental benchmarks with playful joy.
            </p>

            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary">Individualized Learning Pace</h4>
                <p className="text-xs text-slate-600">Every session is customized around the child's strengths.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activities.map((act, idx) => {
              const Icon = act.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border shadow-xs hover:shadow-md transition-all ${act.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-flavors text-2xl text-slate-800 mb-1">{act.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{act.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
