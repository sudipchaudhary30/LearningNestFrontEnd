import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import FeaturedSkillsMentors from '../components/FeaturedSkillsMentors';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedSkillsMentors />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;