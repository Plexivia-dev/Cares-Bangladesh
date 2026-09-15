import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';

// Sidebar contact card displaying hotline, email, address, and booking button
const ContactWidget = () => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-6 border border-primary/15 shadow-sm space-y-5">
      <h3 className="font-flavors text-2xl text-primary">Need Assistance?</h3>
      <p className="text-xs text-slate-600 leading-relaxed">
        Speak with our expert therapists and educational consultants today to book an assessment.
      </p>

      <div className="space-y-3 text-xs text-slate-700">
        <a href={`tel:${siteConfig.phone}`} className="flex items-center space-x-3 p-2.5 rounded-xl bg-white shadow-xs hover:text-primary transition-colors">
          <Phone className="w-4 h-4 text-accent shrink-0" />
          <span className="font-semibold">{siteConfig.phone}</span>
        </a>
        <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-3 p-2.5 rounded-xl bg-white shadow-xs hover:text-primary transition-colors">
          <Mail className="w-4 h-4 text-accent shrink-0" />
          <span className="font-semibold">{siteConfig.email}</span>
        </a>
        <div className="flex items-start space-x-3 p-2.5 rounded-xl bg-white shadow-xs">
          <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <span>{siteConfig.address}</span>
        </div>
      </div>

      <Link href="/book-a-tour" className="block">
        <Button size="default" className="w-full font-bold shadow-md bg-secondary text-primary hover:bg-secondary/90 border border-primary/20 flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>Book An Assessment</span>
        </Button>
      </Link>
    </div>
  );
};

export default ContactWidget;
