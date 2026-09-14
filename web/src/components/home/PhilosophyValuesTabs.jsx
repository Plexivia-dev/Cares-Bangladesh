'use client';

import React from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Tabbed information centre detailing organizational philosophy and core values
const PhilosophyValuesTabs = () => {
  const philosophies = [
    {
      num: '01.',
      title: 'Empowerment and independence',
      desc: 'We focus on building skills that foster confidence and ability to make life easier so that they don’t have to depend on others to lead their life.',
    },
    {
      num: '02.',
      title: 'Life long learning',
      desc: 'We ensure that our services can help them in future not just for a certain time period. The philosophy promotes continuous growth and adaptability.',
    },
    {
      num: '03.',
      title: 'Creative exploration',
      desc: 'We provide play-based learning to engage children, conduct workshops, facilitate group therapy sessions, creative art therapies and various kinds of activities.',
    },
  ];

  const values = [
    {
      num: '01.',
      title: 'Joyful learning',
      desc: 'We believe in learning through love and care, making therapy enjoyable and engaging so that everyone feels connected and inspired.',
    },
    {
      num: '02.',
      title: 'Safety',
      desc: 'We give values to physical and mental safety, creating a supportive environment where they can thrive without fear.',
    },
    {
      num: '03.',
      title: 'Responsiveness',
      desc: 'Listening actively to their needs and feedback. We customize our services according to individual developmental paces.',
    },
    {
      num: '04.',
      title: 'Excellence',
      desc: 'We believe in quality services that aim for impactful and meaningful outcomes. Quality over quantity is our mission.',
    },
  ];

  return (
    <section className="py-20 bg-[#f4f9fc] border-y border-sky-100/60 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-secondary border border-sky-200/80 text-xs font-extrabold uppercase tracking-wider font-sans shadow-2xs">
            <span>Learn More About Our Journey</span>
          </div>

          <h2 className="font-flavors text-4xl sm:text-5xl text-primary">
            Information Centre
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="philosophy" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-slate-100 rounded-full p-1.5 border border-slate-200">
                <TabsTrigger value="philosophy" className="rounded-full text-xs sm:text-sm font-bold px-8 py-2.5">
                  Our Philosophy
                </TabsTrigger>
                <TabsTrigger value="values" className="rounded-full text-xs sm:text-sm font-bold px-8 py-2.5">
                  Our Values
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="philosophy">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {philosophies.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-7 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all space-y-3"
                  >
                    <div className="font-flavors text-2xl text-secondary font-bold">
                      {p.num}
                    </div>
                    <h3 className="font-sans font-bold text-base text-primary">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="values">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all space-y-3"
                  >
                    <div className="font-flavors text-2xl text-amber-500 font-bold">
                      {v.num}
                    </div>
                    <h3 className="font-sans font-bold text-base text-primary">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyValuesTabs;
