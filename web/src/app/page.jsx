'use client';

import React from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import AboutSection from '@/components/home/AboutSection';
import ProgramsGrid from '@/components/home/ProgramsGrid';
import PhilosophyValuesTabs from '@/components/home/PhilosophyValuesTabs';
import LearningSection from '@/components/home/LearningSection';
import AdvantageSection from '@/components/home/AdvantageSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import LatestNews from '@/components/home/LatestNews';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProgramsGrid />
      <PhilosophyValuesTabs />
      <LearningSection />
      <AdvantageSection />
      <ReviewsSection />
      <LatestNews />
    </>
  );
}
