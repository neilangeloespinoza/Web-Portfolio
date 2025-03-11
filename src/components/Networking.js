import React from 'react';
import '../styles/animations.css';

// Import networking images
import ciscoCertified from '../assets/network/cisco-certified.png';
import networkPlan from '../assets/network/network-plan.gif';
import networkSimulation from '../assets/network/network-simulation.gif';

// Networking component
const Networking = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white text-center">
          Next-Gen Networks Designed for Resilience
        </h1>
        
        {/* Why Next-Gen Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Why Next-Gen?</h2>
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <p className="text-gray-300 text-lg text-center mb-6">
                A strong networking foundation positions him as a future leader in the field. His comprehensive networking skills make him a true "next-gen" networker. He proved his leadership by successfully overseeing all classroom networking projects, from initial design to practical simulation. His proactive approach to professional growth is evident in his ongoing preparation for the CCNA exam, which he plans to take before graduation.
              </p>
              <div className="flex flex-col items-center">
                <span className="text-white text-lg mb-2">Soon to be...</span>
                <img src={ciscoCertified} alt="Cisco Certified" className="h-32 w-auto object-contain" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Project Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Network Planning */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white text-xl mb-4 text-center">Network Planning</h3>
              <div className="flex flex-col items-center">
                <img src={networkPlan} alt="Network Planning" className="w-full h-64 object-contain mb-4 rounded-lg" />
                <p className="text-gray-300 text-lg text-center">
                  His ability to implement networking concepts was evident in his school project: a disaster-resilient network designed for his hometown of Malasiqui.
                </p>
              </div>
            </div>

            {/* Network Configuration */}
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <h3 className="font-bold text-white text-xl mb-4 text-center">Network Configuration</h3>
              <div className="flex flex-col items-center">
                <img src={networkSimulation} alt="Network Configuration" className="w-full h-64 object-contain mb-4 rounded-lg" />
                <p className="text-gray-300 text-lg text-center">
                  Through a school project that required him to design and simulate a network for San Julian National High School, featuring a VPN for division office remote access, he demonstrated his networking proficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Networking;