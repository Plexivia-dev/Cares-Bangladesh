'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import programs from '@/data/programs.json';
import { getBranding } from '@/lib/api';

// Header navigation bar providing branding logo and responsive route links
const Navbar = ({ onOpenBookTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdown, setProgramsDropdown] = useState(false);
  const [logoUrl, setLogoUrl] = useState('/uploads/2024/09/CARES-Bangladesh-Logo-5__1_-removebg-preview.png');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    getBranding().then((branding) => {
      if (branding?.logoUrl) {
        setLogoUrl(branding.logoUrl);
      }
    });

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
        <Link href="/" className="flex items-center space-x-3 group py-1">
          <div className="relative h-12 w-auto flex items-center">
            <img
              src={logoUrl}
              alt="Cares Bangladesh Logo"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
              className="sm:h-12 group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

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

                  <div className="absolute top-full left-0 w-[520px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="flex items-center justify-between px-2.5 py-1 mb-1 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-sans">
                        Therapy & Programs
                      </span>
                      <Link
                        href="/our-programs-child-care-in-dhaka-bangladesh"
                        className="text-[11px] font-bold text-secondary hover:text-primary transition-colors flex items-center space-x-1"
                      >
                        <span>View All</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1 pt-1">
                      {programs.map((prog) => (
                        <Link
                          key={prog.id}
                          href={`/${prog.slug}`}
                          className="flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-primary/5 text-slate-700 hover:text-primary transition-colors group/item"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/item:scale-125 group-hover/item:bg-primary transition-all shrink-0" />
                          <span className="text-xs font-semibold leading-tight line-clamp-1">
                            {prog.title}
                          </span>
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

        <div className="hidden sm:flex items-center space-x-3">
          <Link href="/book-a-tour">
            <Button variant="accent" size="default" className="shadow-md hover:shadow-lg font-bold flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book A Tour</span>
            </Button>
          </Link>
        </div>

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
};

export default Navbar;
