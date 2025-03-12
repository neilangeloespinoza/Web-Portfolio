import React from 'react';
import NeilImage from '../assets/Neil.png';
import NeilTTImage from '../assets/Neil_tt.jpg';
import NarutoImage from '../assets/about/naruto.jpg';
import OnePieceImage from '../assets/about/onepiece.jpg';
import HxHImage from '../assets/about/hxh.jpg';
import CodeGeassImage from '../assets/about/codegeass.jpg';

// About component
const About = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-16">
          {/* Name and Image */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white text-center">
            Neil Angelo Espinoza
          </h1>
          <img 
            src={NeilImage}
            alt="Neil Angelo Espinoza" 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-8 shadow-xl"
          />
          <p className="text-white text-base sm:text-lg text-center max-w-3xl leading-relaxed px-4">
            A Fourth-year IT student at the Polytechnic University of the Philippines, 
            focusing on cybersecurity, networking, IoT integration, and full-stack development. 
            A Jack of all trades with a knack for solving real-world problems through computers.
          </p>
        </div>
        
        {/* Education Section */}
        <section className="mb-16 w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-stretch auto-rows-fr px-4">
            {/* Current Education */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex flex-col min-h-[200px]">
              <h3 className="text-lg font-semibold text-white mb-2 text-center line-clamp-2">Polytechnic University of the Philippines</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-300 font-medium mb-2 text-sm text-center line-clamp-2">Bachelor of Science in Information Technology</p>
                <p className="text-blue-400 mb-2 text-sm text-center line-clamp-2">President's Lister (2022 - 2024)</p>
                <p className="text-gray-400 text-sm text-center">2021 - Present</p>
              </div>
            </div>

            {/* Senior High School */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex flex-col min-h-[200px]">
              <h3 className="text-lg font-semibold text-white mb-2 text-center line-clamp-2">Polytechnic University of the Philippines</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-300 font-medium mb-2 text-sm text-center line-clamp-2">Senior High School - General Academic Strand</p>
                <p className="text-blue-400 mb-2 text-sm text-center line-clamp-2">With Highest Honors (2021) - 98.13%</p>
                <p className="text-gray-400 text-sm text-center">2019 - 2021</p>
              </div>
            </div>

            {/* Junior High School */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex flex-col min-h-[200px]">
              <h3 className="text-lg font-semibold text-white mb-2 text-center line-clamp-2">Malasiqui Catholic School</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-300 font-medium mb-2 text-sm text-center line-clamp-2">Junior High School</p>
                <p className="text-blue-400 mb-2 text-sm text-center line-clamp-2">Superintendent's Lister and Salutatorian (2019) - 96%</p>
                <p className="text-blue-400 mb-2 text-sm text-center line-clamp-2">Journalist of the Year (2019)</p>
                <p className="text-gray-400 text-sm text-center">2015 - 2019</p>
              </div>
            </div>

            {/* Primary Education */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex flex-col min-h-[200px]">
              <h3 className="text-lg font-semibold text-white mb-2 text-center line-clamp-2">Malasiqui Catholic School</h3>
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-gray-300 font-medium mb-2 text-sm text-center line-clamp-2">Primary Education</p>
                <p className="text-blue-400 mb-2 text-sm text-center line-clamp-2">Salutatorian (2015) - 97.28%</p>
                <p className="text-gray-400 text-sm text-center">2009 - 2015</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experiences Section */}
        <section className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Experiences</h2>
          <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto px-4">
            {/* Internship */}
            <div className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">IT Intern</h3>
              <p className="text-gray-300 font-medium text-base mb-2 text-center">Zynappse Corporation</p>
              <p className="text-gray-400 text-base mb-3 text-center">2025-Present</p>
              <ul className="list-disc list-inside text-gray-300 text-base space-y-1">
                <li className="text-center list-none line-clamp-3">Participating in their Internship Program for Web Development, Mobile Development, and UI/UX Design.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="w-full mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Hobbies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
            {/* Table Tennis */}
            <div className="flex flex-col items-center bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Table Tennis</h3>
              <img 
                src={NeilTTImage}
                alt="Neil Angelo Espinoza playing table tennis" 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg object-cover mb-8 shadow-xl"
              />
              <p className="text-white text-base sm:text-lg text-center max-w-3xl leading-relaxed px-4">
                Always competing since elementary, runner up on provincial meet, and former PUP table tennis varsity team.
              </p>
            </div>
            {/* Anime */}
            <div className="flex flex-col items-center bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Anime</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img 
                  src={NarutoImage}
                  alt="Naruto"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-xl"
                />
                <img 
                  src={OnePieceImage}
                  alt="One Piece"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-xl"
                />
                <img 
                  src={HxHImage}
                  alt="Hunter x Hunter"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-xl"
                />
                <img 
                  src={CodeGeassImage}
                  alt="Code Geass"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg object-cover shadow-xl"
                />
              </div>
              <p className="text-white text-base sm:text-lg text-center max-w-3xl leading-relaxed px-4">
                His favorite animes are One Piece, Naruto, Hunter x Hunter, and Code Geass.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;