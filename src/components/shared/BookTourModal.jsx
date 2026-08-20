'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Calendar, Phone, Mail, User, Sparkles } from 'lucide-react';
import programs from '@/data/programs.json';

export default function BookTourModal({ open, onOpenChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      phone: '',
      email: '',
      service: programs[0]?.title || 'Speech & Language Therapy',
      preferredDate: '',
      notes: '',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-6 sm:p-8 bg-white border-2 border-primary/20 shadow-2xl rounded-3xl">
        {!submitted ? (
          <>
            <DialogHeader className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/15 text-accent-orange text-xs font-bold w-fit mx-auto sm:mx-0">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book A Tour & Free Consultation</span>
              </div>
              <DialogTitle className="text-3xl text-primary font-flavors">
                Schedule a Visit at Cares
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-600">
                Fill out the form below and our clinical team will contact you to confirm your visit.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Child's Name</label>
                  <Input
                    placeholder="Child's Name"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Child's Age</label>
                  <Input
                    placeholder="e.g. 4 years"
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Select Program *</label>
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
                <label className="text-xs font-semibold text-slate-700 block mb-1">Additional Notes / Concerns</label>
                <Textarea
                  rows={2}
                  placeholder="Tell us briefly about your child's needs or your questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                disabled={loading}
                className="w-full font-bold shadow-md mt-2"
              >
                {loading ? 'Submitting...' : 'Confirm Tour Request'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-flavors text-3xl text-primary">Thank You!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Your tour request has been received. Our team will contact you shortly at <strong>{formData.phone}</strong>.
            </p>
            <Button variant="default" size="default" onClick={handleReset} className="font-semibold">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
