'use client';

import React from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Sparkles, Shield, HeartHandshake, Award, Smile, CheckCircle2 } from 'lucide-react';

export default function PhilosophyValuesTabs() {
  const values = [
    {
      title: 'Joyful Learning',
      desc: 'We believe in learning through love and care, making therapy enjoyable and engaging so that every child feels connected and inspired.',
      icon: Smile,
      color: 'text-amber-500 bg-amber-50',
    },
    {
      title: 'Safety & Comfort',
      desc: 'We prioritize physical and emotional safety, creating a supportive, calm environment where children can thrive without fear.',
      icon: Shield,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Responsiveness & Empathy',
      desc: 'Actively listening to the unique needs and feedback of each child and family, customizing therapy to their personal pace.',
      icon: HeartHandshake,
      color: 'text-sky-600 bg-sky-50',
    },
    {
      title: 'Clinical Excellence',
      desc: 'Quality over quantity. We utilize evidence-based clinical practices and individualized intervention plans aiming for impactful, lasting progress.',
      icon: Award,
      color: 'text-purple-600 bg-purple-50',
    },
  ];

  const philosophies = [
    {
      title: 'Empowerment & Independence',
      desc: 'We focus on building functional daily skills that foster self-confidence and enable children to navigate life independently.',
    },
    {
      title: 'Lifelong Growth & Adaptability',
      desc: 'Our therapeutic approaches ensure lasting developmental gains that support children well into their school years and beyond.',
    },
    {
      title: 'Play-Based Creative Exploration',
      desc: 'We integrate play, art, sensory activities, and interactive workshops to make skill acquisition natural and deeply rewarding.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Centre Information & Journey</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Our Philosophy & Guiding Values
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Our mission is to create an environment where children and families feel embraced, understood, and empowered to reach their fullest potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="philosophy" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white border border-slate-200 shadow-sm p-1.5">
                <TabsTrigger value="philosophy" className="text-sm font-bold px-8">
                  Our Philosophy
                </TabsTrigger>
                <TabsTrigger value="values" className="text-sm font-bold px-8">
                  Our Core Values
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Philosophy Tab */}
            <TabsContent value="philosophy" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="md:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/assets/img/values.jpg"
                    alt="Our Philosophy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-flavors text-3xl text-primary">
                    Nurturing Potential Through Comprehensive Therapy
                  </h3>
                  <div className="space-y-3">
                    {philosophies.map((p, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">{p.title}</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Values Tab */}
            <TabsContent value="values">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${v.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-flavors text-2xl text-primary">{v.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>

      </div>
    </section>
  );
}
