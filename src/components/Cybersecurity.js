import React from 'react';
import '../styles/animations.css';

// Import cybersecurity badges
import cnaIntro from '../assets/cybersecurity/cna-intro.png';
import cnaCyberthreat from '../assets/cybersecurity/cna-cyberthreat.png';
import slIntro from '../assets/cybersecurity/sl-intro.png';

// Cybersecurity component
const Cybersecurity = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white text-center">
          Absolute Security, Proactively Engineered
        </h1>
        
        {/* Focus Areas Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Focus Areas</h2>
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto">
            <p className="text-gray-300 text-lg text-center">
              With a keen understanding of the evolving cybersecurity landscape, he demonstrates expertise in threat analysis, vulnerability assessments, and penetration testing. His past membership in the AWS Cloud Club - PUP Security Department underscores his commitment to, and practical experience in, cloud security principles.
            </p>
          </div>
        </section>
        
        {/* Digital Badges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Digital Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Cisco NetAcad Intro */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center">
                <img src={cnaIntro} alt="Cisco NetAcad Intro" className="h-32 w-auto object-contain mb-4" />
                <h3 className="font-bold text-white text-xl mb-2 text-center">Cisco NetAcad</h3>
                <p className="text-gray-300 text-lg text-center">
                  Introduction to Cybersecurity
                  <br />
                  October 17, 2023
                </p>
              </div>
            </div>

            {/* Cisco NetAcad Cyber Threat */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center">
                <img src={cnaCyberthreat} alt="Cisco NetAcad Cyber Threat" className="h-32 w-auto object-contain mb-4" />
                <h3 className="font-bold text-white text-xl mb-2 text-center">Cisco NetAcad</h3>
                <p className="text-gray-300 text-lg text-center">
                  Cyber Threat Management
                  <br />
                  February 11, 2025
                </p>
              </div>
            </div>

            {/* Simplilearn Intro */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <div className="flex flex-col items-center">
                <img src={slIntro} alt="Simplilearn Intro" className="h-32 w-auto object-contain mb-4" />
                <h3 className="font-bold text-white text-xl mb-2 text-center">Simplilearn</h3>
                <p className="text-gray-300 text-lg text-center">
                  Introduction to Cybersecurity
                  <br />
                  March 24, 2024
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cybersecurity;