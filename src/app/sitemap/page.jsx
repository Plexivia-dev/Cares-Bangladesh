'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import programs from '@/data/programs.json';
import posts from '@/data/posts.json';

export default function HtmlSitemapPage() {
  return (
    <>
      <PageHeader
        title="Website Sitemap"
        subtitle="Overview of all pages, therapy services, and guides"
        breadcrumb={[{ name: 'Sitemap' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-4">
            <h3 className="font-flavors text-3xl text-primary border-b pb-2">Core Pages</h3>
            <ul className="space-y-2 text-sm text-secondary font-medium">
              <li><Link href="/" className="hover:underline">• Home</Link></li>
              <li><Link href="/about" className="hover:underline">• About Us</Link></li>
              <li><Link href="/our-programs-child-care-in-dhaka-bangladesh" className="hover:underline">• Our Programs</Link></li>
              <li><Link href="/speech-language-therapy-therapist" className="hover:underline">• Meet The Team</Link></li>
              <li><Link href="/speech-and-language-therapy-bangla-near-me" className="hover:underline">• Location & Contact</Link></li>
              <li><Link href="/faqs" className="hover:underline">• FAQs</Link></li>
              <li><Link href="/book-a-tour" className="hover:underline">• Book A Tour</Link></li>
              <li><Link href="/news-events" className="hover:underline">• News & Events</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">• Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-flavors text-3xl text-primary border-b pb-2">Therapy Programs</h3>
            <ul className="space-y-2 text-sm text-secondary font-medium">
              {programs.map((p) => (
                <li key={p.id}>
                  <Link href={`/${p.slug}`} className="hover:underline">
                    • {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
