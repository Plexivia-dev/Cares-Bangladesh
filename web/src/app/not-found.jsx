import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Compass, ArrowRight, Phone, Sparkles, BookOpen, Heart, Users, MapPin } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export default function NotFound() {
  const quickLinks = [
    { title: 'Our Programs', desc: 'Speech, OT, ABA & Early Learning', href: '/our-programs-child-care-in-dhaka-bangladesh', icon: Compass, color: 'bg-amber-100 text-amber-700' },
    { title: 'Meet The Team', desc: '19+ qualified clinical therapists', href: '/speech-language-therapy-therapist', icon: Users, color: 'bg-teal-100 text-teal-700' },
    { title: 'Location & Center', desc: 'Visit our center in Basabo, Dhaka', href: '/speech-and-language-therapy-bangla-near-me', icon: MapPin, color: 'bg-sky-100 text-sky-700' },
    { title: 'Book Consultation', desc: 'Schedule an evaluation for your child', href: '/book-a-tour', icon: Heart, color: 'bg-rose-100 text-rose-700' },
  ];

  return (
    <>
      <PageHeader
        title="404 - Page Not Found"
        subtitle="Oops! It looks like this page took a little detour."
        breadcrumb={[{ name: '404' }]}
      />

      <section className="py-20 bg-gradient-to-b from-amber-50/30 via-white to-sky-50/20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          
          {/* Animated 404 Hero Display */}
          <div className="relative inline-block mb-8">
            <div className="text-8xl sm:text-9xl font-flavors text-primary tracking-wider drop-shadow-sm select-none">
              4<span className="text-amber-500">0</span>4
            </div>
            <div className="absolute -top-3 -right-6 px-3.5 py-1 rounded-full bg-amber-400 text-white font-sister text-xs font-bold shadow-md rotate-12">
              Playing Hide & Seek!
            </div>
          </div>

          {/* Friendly Message */}
          <div className="max-w-xl mx-auto space-y-3 mb-12">
            <h2 className="font-flavors text-3xl sm:text-4xl text-primary">
              We Couldn't Find That Page
            </h2>
            <p className="text-slate-600 text-base font-sans leading-relaxed">
              The link you clicked might be outdated or the page has been moved. Don't worry, let's get you back on track!
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full font-bold text-base bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Home className="w-5 h-5 mr-2" />
                <span>Return to Homepage</span>
              </Button>
            </Link>

            <Link href="/book-a-tour" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full font-bold text-base bg-white text-primary hover:text-white hover:bg-primary border-2 border-primary/20 hover:border-primary shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Book A Tour & Assessment</span>
              </Button>
            </Link>
          </div>

          {/* Quick Helpful Navigation Grid */}
          <div className="text-left bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200/80 shadow-xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest font-sister">
                Helpful Destinations
              </span>
              <h3 className="font-flavors text-2xl sm:text-3xl text-primary mt-1">
                Explore Cares Bangladesh
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-5 rounded-2xl border border-slate-100 hover:border-amber-300 hover:shadow-md transition-all flex items-start space-x-4 group bg-slate-50/50 hover:bg-white"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <div className="font-sans font-bold text-base text-primary group-hover:text-secondary transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-slate-500 font-sans mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
