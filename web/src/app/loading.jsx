'use client';

import React from 'react';

// Full screen loading indicator with animated brand logo and playful status pulses
const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md transition-all duration-300">
      <div className="relative flex flex-col items-center space-y-6">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full bg-amber-400/20 animate-ping" />
          <div className="absolute w-24 h-24 rounded-full border-4 border-dashed border-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute w-20 h-20 rounded-full border-2 border-secondary/40 animate-pulse" />

          <div className="relative w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center p-2 border-2 border-amber-200">
            <img
              src="/assets/img/logo.png"
              alt="Cares Bangladesh Loading"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/assets/img/logo.svg';
              }}
              className="w-12 h-12 object-contain animate-bounce"
              style={{ animationDuration: '1.2s' }}
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <div className="font-flavors text-2xl sm:text-3xl text-primary tracking-wide flex items-center justify-center space-x-1">
            <span>Loading Cares Bangladesh</span>
            <span className="inline-flex space-x-1 ml-1">
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

export default Loading;
