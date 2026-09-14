import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import ContactWidget from '@/components/shared/ContactWidget';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import programs from '@/data/programs.json';
import seoMetadata from '@/data/seoMetadata.json';

const currentSlug = 'best-speech-language-therapy-dhaka-bangladesh';

export async function generateMetadata() {
  const seo = seoMetadata[currentSlug] || {};
  return {
    title: seo.title || 'Speech & Language Therapy | Cares Bangladesh',
    description: seo.description || 'Expert speech and language therapy to help individuals communicate effectively and overcome speech delays, articulation issues, and language disorders.',
    alternates: {
      canonical: seo.canonical || 'https://caresbangladesh.com/' + currentSlug,
    },
    openGraph: {
      title: seo.openGraphTitle || seo.title || 'Speech & Language Therapy',
      description: seo.openGraphDescription || seo.description,
      url: 'https://caresbangladesh.com/' + currentSlug,
      images: [{ url: seo.openGraphImage || '/uploads/2025/01/Service-Banner_Speech-Therapy-01.png' }],
    },
  };
}

// Specialized clinical program page detailing therapeutic approaches and parental guidance
const ServicePage = () => {
  const prog = programs.find((p) => p.slug === currentSlug) || {"id":"speech-therapy","title":"Speech & Language Therapy","slug":"best-speech-language-therapy-dhaka-bangladesh","shortDescription":"Expert speech and language therapy to help individuals communicate effectively and overcome speech delays, articulation issues, and language disorders.","badge":"Communication & Speech","icon":"Mic","bannerImage":"/uploads/2025/01/Service-Banner_Speech-Therapy-01.png","features":["Individualized speech assessments and customized intervention plans","Articulation and pronunciation training for clear verbal communication","Expressive and receptive language skill development","Alternative and Augmentative Communication (AAC) support","Fluency / Stuttering therapy and voice modulation"],"faqs":[{"question":"What is Speech and Language Therapy?","answer":"Speech and Language Therapy provides treatment, support and care for children and adults who have difficulties with communication, eating, drinking or swallowing."},{"question":"When should a child start speech therapy?","answer":"Early intervention is key. If a child is not meeting speech milestones (such as not babbling by 12 months, or lack of words by 18-24 months), an evaluation should be scheduled immediately."},{"question":"How long does speech therapy take?","answer":"The duration varies based on the individual needs and severity of the condition. Many children show remarkable progress within a few months of regular sessions."}]};

  return (
    <>
      <PageHeader
        title={prog.title}
        subtitle="Individualized Therapy & Clinical Care at Cares Bangladesh"
        breadcrumb={[
          { name: 'Our Programs', href: '/our-programs-child-care-in-dhaka-bangladesh' },
          { name: prog.title },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-10">
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50">
                <Image
                  src={prog.bannerImage}
                  alt={prog.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md font-sans tracking-wide border border-white/60">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
                    {prog.badge}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Comprehensive Intervention</span>
                </div>

                <h2 className="font-flavors text-3xl sm:text-4xl text-primary leading-tight">
                  About Our {prog.title} Program
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  {prog.shortDescription}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  At Cares Bangladesh, our specialized therapists work one-on-one with each individual to identify strengths, overcome challenges, and build long-term confidence. Our sessions incorporate scientifically validated protocols and sensory-friendly tools to ensure therapy is both enjoyable and profoundly effective.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-slate-50/80 border border-slate-100 space-y-5">
                <h3 className="font-flavors text-2xl text-primary">What We Focus On:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-white shadow-xs border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700 leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs for this program */}
              {prog.faqs && prog.faqs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-flavors text-3xl text-primary">Frequently Asked Questions</h3>
                  <FaqAccordion items={prog.faqs} />
                </div>
              )}

              {/* Bottom CTA Box */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-primary to-secondary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-flavors text-2xl text-accent">Ready to Get Started?</h4>
                  <p className="text-xs text-slate-200">
                    Book an initial assessment with our senior {prog.title} specialists today.
                  </p>
                </div>
                <Link href="/book-a-tour" className="shrink-0">
                  <Button variant="accent" size="lg" className="font-bold shadow-md">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Assessment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8 sticky top-24">
              <ContactWidget />

              {/* Other Programs List */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-flavors text-2xl text-primary border-b pb-2">Other Programs</h4>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {programs
                    .filter((p) => p.slug !== currentSlug)
                    .map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/${p.slug}`}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 hover:text-primary transition-colors group"
                        >
                          <span className="font-semibold">{p.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
