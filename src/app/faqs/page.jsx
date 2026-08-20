'use client';

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, HelpCircle, Phone } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

export default function FaqsPage() {
  const faqList = [
    {
      question: 'What therapy services does Cares Bangladesh provide?',
      answer: 'We provide comprehensive Speech & Language Therapy, Occupational Therapy, Applied Behavior Analysis (ABA) Therapy, Art Therapy, Early Childhood Learning, Inclusive Preschool, and Special Education programs.'
    },
    {
      question: 'How do I know if my child needs Speech or Occupational Therapy?',
      answer: 'Signs include speech delays (no words by 18-24 months), difficulty pronouncing sounds, sensory sensitivities (covering ears, avoiding textures), trouble with fine motor skills (holding pencils, buttons), or behavioral struggles. An initial clinical assessment will identify exact needs.'
    },
    {
      question: 'What is the initial assessment process?',
      answer: 'During the initial evaluation, our senior therapists observe the child, conduct standardized clinical assessments, and discuss developmental history with the parents to formulate an Individualized Intervention Plan.'
    },
    {
      question: 'Can parents observe or participate in therapy sessions?',
      answer: 'Yes! We believe in active parent partnership. Therapists regularly demonstrate techniques and provide home exercise plans so parents can reinforce learning at home.'
    },
    {
      question: 'Where is Cares Bangladesh located and what are the visiting hours?',
      answer: `Our center is located at ${siteConfig.address}. We are open ${siteConfig.workingHours}.`
    },
    {
      question: 'How do I book a tour or consultation?',
      answer: 'You can book a tour directly on our website via the Book A Tour page or call us directly at ' + siteConfig.phone + '.'
    }
  ];

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Answers to common questions regarding therapy, admissions, and child development"
        breadcrumb={[{ name: 'FAQs' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-accent/15 text-accent-orange text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions? We Have Answers</span>
            </div>
            <h2 className="font-flavors text-4xl text-primary">Everything You Need to Know</h2>
          </div>

          <FaqAccordion items={faqList} />

          <div className="mt-14 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center space-y-4">
            <h3 className="font-flavors text-2xl text-primary">Still Have Questions?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our clinical counseling team is here to guide you every step of the way.
            </p>
            <div className="flex justify-center items-center gap-4 pt-2">
              <a href={`tel:${siteConfig.phone}`}>
                <Button variant="default" size="default" className="font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call {siteConfig.phone}
                </Button>
              </a>
              <Link href="/book-a-tour">
                <Button variant="accent" size="default" className="font-bold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book A Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
