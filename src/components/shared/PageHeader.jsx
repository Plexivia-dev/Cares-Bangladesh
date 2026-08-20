import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumb = [] }) {
  return (
    <div className="relative bg-gradient-to-r from-primary via-primary-light to-secondary text-white py-16 px-4 overflow-hidden">
      {/* Playful background decorative shapes */}
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary/30 blur-2xl pointer-events-none" />

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <h1 className="font-flavors text-4xl sm:text-5xl md:text-6xl text-white tracking-wide drop-shadow-md mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sister text-lg md:text-xl text-accent font-medium max-w-2xl mx-auto mb-4">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb */}
        <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-white/80 font-medium">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          {breadcrumb.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-accent" />
              {item.href ? (
                <Link href={item.href} className="hover:text-accent transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-accent font-semibold">{item.name}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
