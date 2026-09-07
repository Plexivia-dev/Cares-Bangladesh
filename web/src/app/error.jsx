'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home, HeartHandshake } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled page error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-amber-200/80 space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
          <HeartHandshake className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h2 className="font-flavors text-3xl sm:text-4xl text-primary">
            Something Went Wrong
          </h2>
          <p className="text-sm text-slate-600 font-sans leading-relaxed">
            We encountered a temporary issue while loading this page. Please try refreshing or return to the homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            onClick={() => reset()}
            variant="accent"
            size="default"
            className="w-full sm:w-auto rounded-full font-bold px-6 bg-amber-500 hover:bg-amber-600 text-white shadow-md cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>

          <Link href="/" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="default"
              className="w-full sm:w-auto rounded-full font-bold px-6 border-2 border-primary/20 text-primary hover:bg-primary hover:text-white cursor-pointer"
            >
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
