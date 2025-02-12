import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedSkillsMentors from '../components/FeaturedSkillsMentors';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeaturedSkillsMentors />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;