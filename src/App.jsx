import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import FeaturedSkillsMentors from './components/FeaturedSkillsMentors';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedSkillsMentors />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default App;