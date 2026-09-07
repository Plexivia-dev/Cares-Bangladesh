'use client';

import React from 'react';
import PageHeader from '@/components/shared/PageHeader';

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding your family's personal & clinical privacy"
        breadcrumb={[{ name: 'Privacy Policy' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
          <h2 className="font-flavors text-3xl text-primary">Information We Collect</h2>
          <p>
            At Cares Bangladesh, we respect the privacy of our visitors and clients. We collect personal contact information (such as name, phone number, email) solely when you voluntarily provide it through our appointment, tour booking, or contact forms.
          </p>

          <h2 className="font-flavors text-3xl text-primary">How We Use Your Information</h2>
          <p>
            Information collected is strictly used to schedule assessments, respond to clinical inquiries, communicate progress updates, and provide high quality therapy and education services.
          </p>

          <h2 className="font-flavors text-3xl text-primary">Confidentiality & Data Security</h2>
          <p>
            All developmental records, medical history, and clinical documentation are treated with the highest degree of medical confidentiality and are never shared with third parties without explicit parental consent.
          </p>
        </div>
      </section>
    </>
  );
}
