'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';
import programs from '@/data/programs.json';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#00364d] to-[#002231] text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center text-primary-dark shadow-md">
                <Heart className="w-6 h-6 fill-primary-dark" />
              </div>
              <div>
                <span className="font-flavors text-2xl text-white font-bold tracking-wide block leading-none">
                  Cares Bangladesh
                </span>
                <span className="font-sister text-xs text-accent tracking-wider block mt-0.5">
                  Accept. Understand. Love
                </span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Cares Bangladesh is dedicated to providing holistic, individualized speech therapy, occupational therapy, behavior intervention, and inclusive early childhood learning in Dhaka.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-flavors text-xl text-accent mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/speech-language-therapy-therapist" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>Meet The Team</span>
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>Frequently Asked Questions</span>
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>News & Articles</span>
                </Link>
              </li>
              <li>
                <Link href="/book-a-tour" className="hover:text-accent transition-colors flex items-center space-x-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                  <span>Book A Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="font-flavors text-xl text-accent mb-4 tracking-wide">Therapy & Programs</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {programs.slice(0, 6).map((prog) => (
                <li key={prog.id}>
                  <Link href={`/${prog.slug}`} className="hover:text-accent transition-colors flex items-center space-x-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-accent/70" />
                    <span>{prog.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-flavors text-xl text-accent mb-4 tracking-wide">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span>{siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Cares Bangladesh. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>
            <Link href="/book-a-tour" className="hover:text-accent transition-colors">Book Tour</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
