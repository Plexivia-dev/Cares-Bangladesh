'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Heart, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import programs from '@/data/programs.json';

export default function Navbar({ onOpenBookTour }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Our Programs', 
      href: '/our-programs-child-care-in-dhaka-bangladesh',
      hasDropdown: true 
    },
    { name: 'Meet The Team', href: '/speech-language-therapy-therapist' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Location', href: '/speech-and-language-therapy-bangla-near-me' },
    { name: 'News & Events', href: '/news-events' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' : 'bg-white py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse" />
          </div>
          <div>
            <span className="font-flavors text-2xl md:text-3xl text-primary font-bold tracking-wide block leading-none">
              Cares Bangladesh
            </span>
            <span className="font-sister text-xs text-secondary-dark tracking-wider block mt-0.5 font-medium">
              Accept. Understand. Love
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setProgramsDropdown(true)}
                  onMouseLeave={() => setProgramsDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`px-3.5 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 transition-all ${isActive ? 'text-secondary bg-secondary/10' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="text-xs font-bold text-slate-400 uppercase px-3 py-1.5 font-sans">
                      Specialized Therapy & Programs
                    </div>
                    <div className="space-y-1">
                      {programs.map((prog) => (
                        <Link
                          key={prog.id}
                          href={`/${prog.slug}`}
                          className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-primary/5 transition-colors group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 group-hover/item:scale-150 transition-transform" />
                          <div>
                            <div className="text-xs font-bold text-slate-800 group-hover/item:text-primary transition-colors">
                              {prog.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {prog.shortDescription}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${isActive ? 'text-secondary bg-secondary/10 font-bold' : 'text-slate-700 hover:text-primary hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <Link href="/book-a-tour">
            <Button variant="accent" size="default" className="shadow-md hover:shadow-lg font-bold flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book A Tour</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-2">
          <Link href="/book-a-tour" className="sm:hidden">
            <Button variant="accent" size="sm" className="text-xs px-3">
              Book Tour
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-primary hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl animate-accordion-down">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${pathname === link.href ? 'bg-primary/10 text-primary' : 'text-slate-700 hover:bg-slate-50'}`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1">
                    {programs.map((prog) => (
                      <Link
                        key={prog.id}
                        href={`/${prog.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs font-medium text-slate-600 hover:text-primary"
                      >
                        • {prog.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/book-a-tour" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button variant="accent" size="lg" className="w-full font-bold shadow-md">
                  Book A Tour & Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
