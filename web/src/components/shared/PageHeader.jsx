'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Shared page banner component with responsive breadcrumbs, decorative wave, and local background fallback
const PageHeader = ({ title, subtitle, breadcrumb = [], bgImage = '/assets/img/page-header-bg.jpg' }) => {
  const [imgSrc, setImgSrc] = useState(bgImage);

  return (
    <div className="relative py-20 md:py-24 px-4 overflow-hidden min-h-[260px] flex items-center justify-center bg-[#dbeff8]">
      <Image
        src={imgSrc}
        alt="Page Header Background"
        fill
        priority
        unoptimized
        sizes="100vw"
        onError={() => setImgSrc('/assets/img/page-header-bg.jpg')}
        className="object-cover object-center"
      />

      <div className="container mx-auto relative z-10 text-center max-w-4xl space-y-3">
        <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-primary tracking-wide leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#00668f] font-medium max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        <div className="inline-flex items-center justify-center space-x-2 text-xs md:text-sm font-semibold pt-1 font-sans text-slate-700 bg-white/80 backdrop-blur-xs px-5 py-1.5 rounded-full shadow-xs border border-white/50">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-amber-500" />
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-primary font-bold">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHeader;
