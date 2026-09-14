'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Youtube, Instagram } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';
import programs from '@/data/programs.json';
import { getBranding } from '@/lib/api';

// Global footer component rendering organization contacts and brand navigation
const Footer = () => {
  const [logoUrl, setLogoUrl] = useState('/assets/img/logo.png');

  useEffect(() => {
    getBranding().then((branding) => {
      if (branding?.logoUrl) {
        setLogoUrl(branding.logoUrl);
      }
    });
  }, []);

  return (
    <footer className="relative bg-[#fceee9] text-slate-800 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-10 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-white/90 p-2 rounded-2xl shadow-sm inline-block">
                <img
                  src={logoUrl}
                  alt="Cares Bangladesh Logo"
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
              We provide a caring and encouraging ambiance with some of the best occupational and speech therapists in Dhaka. Our main goal is to empower each child.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-xs hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-xs hover:bg-primary hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-xs hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-flavors text-2xl text-primary mb-4 tracking-wide">Overview</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
              <li><Link href="/" className="hover:text-primary transition-colors">• Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">• About Us</Link></li>
              <li><Link href="/our-programs-child-care-in-dhaka-bangladesh" className="hover:text-primary transition-colors">• Our Programs</Link></li>
              <li><Link href="/speech-language-therapy-therapist" className="hover:text-primary transition-colors">• Meet The Team</Link></li>
              <li><Link href="/faqs" className="hover:text-primary transition-colors">• FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-flavors text-2xl text-primary mb-4 tracking-wide">Our Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans">
              {programs.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href={`/${p.slug}`} className="hover:text-primary transition-colors line-clamp-1">
                    • {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-flavors text-2xl text-primary mb-4 tracking-wide">Contacts</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-sans">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-primary hover:underline">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-6 text-center text-xs text-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Cares Bangladesh. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
