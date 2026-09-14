'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';

// Route transition preloader overlay with spinning badge and animated status feedback
const PagePreloader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setLoading(false);
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 400);
      return () => clearTimeout(hideTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md transition-opacity duration-400 ease-in-out ${
        loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative flex flex-col items-center space-y-6 select-none">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full bg-amber-400/20 animate-ping" />
          <div
            className="absolute w-24 h-24 rounded-full border-4 border-dashed border-amber-400 animate-spin"
            style={{ animationDuration: '2.5s' }}
          />
          <div className="absolute w-20 h-20 rounded-full border-2 border-secondary/40 animate-pulse" />

          <div className="relative w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center p-2 border-2 border-amber-200">
            <Image
              src="/assets/img/logo.png"
              alt="Cares Bangladesh Loading"
              width={56}
              height={56}
              className="object-contain animate-bounce"
              style={{ animationDuration: '1.2s' }}
              unoptimized
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="font-flavors text-2xl sm:text-3xl text-primary tracking-wide flex items-center justify-center space-x-1">
            <span>Loading Cares Bangladesh</span>
            <span className="inline-flex space-x-1 ml-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-amber-800 font-bold uppercase tracking-widest">
            Accept. Understand. Love
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePreloader;
