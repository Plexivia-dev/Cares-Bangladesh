'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

export default function LocationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <PageHeader
        title="Our Location & Contact"
        subtitle="Visit our specialized therapy center in Uttara, Dhaka"
        breadcrumb={[{ name: 'Location' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info & Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-accent/15 text-accent-orange text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Us</span>
              </div>

              <h2 className="font-flavors text-4xl text-primary leading-tight">
                Get in Touch with Cares Bangladesh
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-sans">
                Our clinic is conveniently located in Uttara Sector 11 with child-friendly facilities, sensory therapy rooms, and easy parking.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Address</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Phone & WhatsApp</h4>
                    <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm text-secondary font-semibold hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Email Support</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm text-secondary font-semibold hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Visiting Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{siteConfig.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7 bg-slate-50/80 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-flavors text-3xl text-primary mb-2">Send Us a Message</h3>
              <p className="text-xs text-slate-600 mb-6">
                Have questions or need to inquire about therapy slots? Send us a quick note.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Your Name *</label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+880 18..."
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">Subject</label>
                      <Input
                        placeholder="e.g. Speech Therapy Inquiry"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Message *</label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Write your message or inquiry here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" variant="accent" size="lg" disabled={loading} className="font-bold shadow-md">
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-flavors text-2xl text-primary">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will review your message and respond shortly.
                  </p>
                </div>
              )}
            </div>

          </div>

          {/* Map Embed Container */}
          <div className="mt-16 rounded-3xl overflow-hidden border-2 border-slate-100 shadow-md h-96 w-full">
            <iframe
              title="Cares Bangladesh Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.435748259779!2d90.3842188!3d23.8741753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41498b3c683%3A0xe10842e2a0f8bf95!2sSector%2011%2C%20Uttara%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </>
  );
}
