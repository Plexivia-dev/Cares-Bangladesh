'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

export default function TopBar() {
  return (
    <div className="bg-primary-dark text-white/90 text-xs py-2 px-4 border-b border-primary/20 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center space-x-2 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>{siteConfig.phone}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center space-x-2 hover:text-accent transition-colors">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>{siteConfig.email}</span>
          </a>
          <div className="flex items-center space-x-2 text-white/70">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{siteConfig.workingHours}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white/60">Follow Us:</span>
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
