import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Intro from './Intro';
import About from './About';
import SoftwareDevelopment from './SoftwareDevelopment';
import Networking from './Networking';
import Cybersecurity from './Cybersecurity';
import Contact from './Contact';

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Side Panel Navigation - Always visible */}
      <div className="w-64 bg-cyber-darker border-r border-neon-blue/30 shadow-neon-blue/20 h-screen fixed left-0 top-0">
        <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      </div>

      {/* Main Content - Full width from sidebar */}
      <div className="flex-1 ml-64">
        <section id="intro" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-10" />
          <div className="relative z-10 w-full">
            <Intro />
          </div>
        </section>
        <section id="about" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-5" />
          <div className="relative z-10 w-full">
            <About />
          </div>
        </section>
        <section id="software" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-10" />
          <div className="relative z-10 w-full">
            <SoftwareDevelopment />
          </div>
        </section>
        <section id="networking" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-5" />
          <div className="relative z-10 w-full">
            <Networking />
          </div>
        </section>
        <section id="cybersecurity" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-10" />
          <div className="relative z-10 w-full">
            <Cybersecurity />
          </div>
        </section>
        <section id="contact" className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="cyber-grid opacity-5" />
          <div className="relative z-10 w-full">
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;