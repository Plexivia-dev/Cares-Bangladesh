'use client';	

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

// Floating scroll-to-top button with smooth scroll behaviour and threshold visibility
const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-4 sm:right-6 z-40 p-3 rounded-full bg-primary hover:bg-primary-dark text-white border-2 border-white/90 shadow-xl transition-all duration-300 transform cursor-pointer flex items-center justify-center ${visible ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-4 scale-90 pointer-events-none'}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
