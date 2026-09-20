'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Calendar, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';
import programs from '@/data/programs.json';

import { submitInquiry } from '@/lib/api';

// Clinic visit booking page enabling parents to schedule an in-person assessment and consultation
const BookTourPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    service: programs[0]?.title || 'Speech & Language Therapy',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    const res = await submitInquiry({
      ...formData,
      source: 'book-a-tour-page',
    });

    setLoading(false);
    if (res.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(res.message || 'Unable to submit your request. Please try again or call us directly.');
    }
  };

  return (
    <>
      <PageHeader
        title="Book An Assessment"
        subtitle="Experience our welcoming environment and consult with our therapy specialists"
        breadcrumb={[{ name: 'Book An Assessment' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            <div className="lg:col-span-5 bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Visit Cares Bangladesh</span>
                </div>

                <h2 className="font-flavors text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
                  Take the First Step Towards Your Child's Growth
                </h2>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                  A clinic tour gives you the opportunity to view our therapy spaces, meet our clinical specialists, and understand how our individualized programs can support your child.
                </p>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <h4 className="font-flavors text-xl sm:text-2xl text-primary">What to Expect During Your Visit:</h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                    <li className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>Tour of sensory integration & therapy rooms</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>Informal discussion with lead therapists</span>
                    </li>
                    <li className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>Personalized guidance on assessments & timing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200/70 space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <span className="font-medium">Call us: {siteConfig.phone}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span className="font-medium">{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col justify-between h-full">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4">
                    <h3 className="font-flavors text-2xl sm:text-4xl text-primary mb-1">Schedule Your Visit</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-sans">
                      Fill out this form and our admission counselor will call to confirm your scheduled slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Parent's Name *</label>
                      <Input
                        required
                        placeholder="Your Full Name"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+880 18..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Child's Name</label>
                      <Input
                        placeholder="Child's Full Name"
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Child's Age</label>
                      <Input
                        placeholder="e.g. 3.5 years"
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Program of Interest *</label>
                      <select
                        className="flex h-12 w-full rounded-2xl border border-input bg-background px-3 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xs"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        {programs.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Preferred Date</label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Notes / Questions</label>
                    <Textarea
                      rows={3}
                      placeholder="Any specific questions or details you would like our therapists to know..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 font-sans">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    variant="accent"
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full font-bold shadow-md hover:shadow-lg mt-3 rounded-full py-6 text-sm sm:text-base cursor-pointer"
                  >
                    {loading ? 'Submitting...' : 'Confirm Assessment Request'}
                  </Button>
                </form>
              ) : (
                <div className="py-16 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-flavors text-3xl sm:text-4xl text-primary">Tour Request Received!</h3>
                  <p className="text-sm text-slate-700 max-w-sm mx-auto font-sans">
                    Thank you, <strong>{formData.parentName}</strong>. Our clinical team will contact you at <strong>{formData.phone}</strong> to confirm your visit.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BookTourPage;
