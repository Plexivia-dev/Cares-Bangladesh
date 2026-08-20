import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <div className="relative text-white py-20 px-4 overflow-hidden min-h-[260px] flex items-center justify-center bg-primary">
      {/* Background Image: General-Bg-01.jpg */}
      <Image
        src="/uploads/2024/09/General-Bg-01.jpg"
        alt="Page Header Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient Overlay for Text Legibility & Brand Consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00364d]/85 via-[#004460]/75 to-[#002e42]/85 backdrop-blur-[1px]" />

      <div className="container mx-auto relative z-10 text-center max-w-4xl space-y-3">
        <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-white tracking-wide drop-shadow-md leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sister text-lg md:text-xl text-amber-300 font-medium max-w-2xl mx-auto drop-shadow-xs">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-white/90 font-medium pt-2 font-sans">
          <Link href="/" className="hover:text-amber-300 transition-colors">
            Home
          </Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              {item.href ? (
                <Link href={item.href} className="hover:text-amber-300 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-amber-300 font-semibold">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 text-white fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
}
