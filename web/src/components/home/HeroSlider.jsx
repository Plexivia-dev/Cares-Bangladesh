'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getApiBaseUrl } from '@/lib/api';

// Hero presentation slider introducing personalized therapy services and immediate consultation CTA
const HeroSlider = () => {
  const [slider, setSlider] = React.useState(null);

  React.useEffect(() => {
    fetch(`${getApiBaseUrl()}/api/v1/home-slider/public`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' && data.data?.length > 0) {
          setSlider(data.data[0]);
        }
      })
      .catch(() => {});
  }, []);

  const titleText = slider?.title || "Will Your Child";
  const subtitleText = slider?.subtitle || "At Cares Bangladesh, we provide a warm, loving, and evidence-based environment where children with developmental, speech, and motor challenges achieve confidence and joy.";
  const imgUrl = slider?.imageUrl || "/assets/img/values.jpg";
  const btnTxt = slider?.buttonText || "Schedule a Tour";
  const btnLnk = slider?.buttonLink || "/book-a-tour";

  return (
    <section className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 md:pt-16 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img
          src="/assets/img/General-Bg-01.jpg"
          alt="Playful background landscape"
          className="w-full h-full object-cover object-bottom opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/75 via-amber-50/60 to-white/90" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 relative z-10 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-extrabold font-sans uppercase tracking-wider border border-amber-200/80 shadow-2xs">
              <span>Dedicated & Compassionate</span>
            </div>

            <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
              {titleText.split(' ').map((word, i, arr) => 
                i === arr.length - 1 || i === arr.length - 2 ? <span key={i} className="text-secondary">{word} </span> : <span key={i}>{word} </span>
              )}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
              {subtitleText}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link href={btnLnk} className="group">
                <Button variant="accent" size="default" className="w-full sm:w-auto font-bold px-8 shadow-md hover:shadow-lg transition-all duration-300">
                  <span>{btnTxt}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/speech-language-therapy-therapist">
                <Button variant="outline" size="default" className="w-full sm:w-auto font-bold px-8 border-2 border-primary text-primary hover:bg-primary/5 transition-all">
                  Our Specialists
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src={imgUrl}
                  alt={titleText}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-primary font-bold">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 font-sans">Pediatric Excellence</div>
                  <div className="text-[11px] text-slate-500 font-sans font-medium">Accept. Understand. Love</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10 opacity-70">
        <img
          src="/assets/img/slider-1.png"
          alt="Playful hills landscape"
          className="w-full h-auto object-cover min-h-[45px] max-h-[110px]"
        />
      </div>
    </section>
  );
};

export default HeroSlider;
