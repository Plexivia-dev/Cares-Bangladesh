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

// Main storefront homepage rendering interactive heroes, clinical programs, and latest news
const HomePage = () => {
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
};

export default HomePage;
