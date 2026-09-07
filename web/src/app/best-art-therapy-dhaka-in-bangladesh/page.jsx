import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import ContactWidget from '@/components/shared/ContactWidget';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Sparkles, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import programs from '@/data/programs.json';
import seoMetadata from '@/data/seoMetadata.json';

const currentSlug = 'best-art-therapy-dhaka-in-bangladesh';

export async function generateMetadata() {
  const seo = seoMetadata[currentSlug] || {};
  return {
    title: seo.title || 'Art Therapy & Creative Expression | Cares Bangladesh',
    description: seo.description || 'Therapeutic creative arts to foster emotional healing, self-expression, cognitive development, and stress relief in a nurturing space.',
    alternates: {
      canonical: seo.canonical || 'https://caresbangladesh.com/' + currentSlug,
    },
    openGraph: {
      title: seo.openGraphTitle || seo.title || 'Art Therapy & Creative Expression',
      description: seo.openGraphDescription || seo.description,
      url: 'https://caresbangladesh.com/' + currentSlug,
      images: [{ url: seo.openGraphImage || '/uploads/2025/01/Service-Banner_ART-Therapy.png' }],
    },
  };
}

export default function ServicePage() {
  const prog = programs.find((p) => p.slug === currentSlug) || {"id":"art-therapy","title":"Art Therapy & Creative Expression","slug":"best-art-therapy-dhaka-in-bangladesh","shortDescription":"Therapeutic creative arts to foster emotional healing, self-expression, cognitive development, and stress relief in a nurturing space.","badge":"Creativity & Emotion","icon":"Palette","bannerImage":"/uploads/2025/01/Service-Banner_ART-Therapy.png","features":["Non-verbal emotional expression through painting, sculpting, and drawing","Boosts self-esteem, focus, and emotional regulation","Promotes fine motor dexterity and visual-spatial imagination","Therapeutic safe space guided by compassionate therapists"],"faqs":[{"question":"Does my child need to be good at art for Art Therapy?","answer":"Not at all! Art therapy is about the creative process and emotional expression, not artistic skill or creating a masterpiece."}]};

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
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-10">
              {/* Banner Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50">
                <Image
                  src={prog.bannerImage}
                  alt={prog.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="accent" className="bg-accent text-primary-dark font-bold text-sm px-4 py-1.5 shadow-md">
                    {prog.badge}
                  </Badge>
                </div>
              </div>

              {/* Description */}
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

              {/* Key Features / Advantages */}
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

            {/* Sidebar */}
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
}
