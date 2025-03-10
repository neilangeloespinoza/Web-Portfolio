import React from 'react';
import logo from '../assets/NAE Logo.png';

const Intro = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto -mt-16">
        <img 
          src={logo} 
          alt="NAE Logo" 
          className="w-96 h-96 mb-12 mx-auto invert brightness-0 filter animate-pulse" 
        />
        <h1 className="text-6xl font-bold mb-12">
          Welcome to <span className="text-blue-500">NAE</span>
        </h1>
        <div className="space-y-8 px-4">
          <p className="text-4xl text-white">
            Next-Gen Networks. Absolute Security. Engineered Code.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
            Driving your IT success, one solution at a time. Expect expert results, 
            driven by innovation in software development, networking, and cybersecurity. 
            Innovation and expertise, personally delivered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;