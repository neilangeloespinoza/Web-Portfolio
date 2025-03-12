import React from 'react';
import logo from '../assets/NAE Logo.png';

const Sidebar = ({ activeSection, scrollToSection }) => {
  // Menu items with their respective section IDs and labels
  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'software', label: 'Software Development' },
    { id: 'networking', label: 'Networking' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'contact', label: 'Get in Touch' }
  ];

  return (
    <div className="h-full flex flex-col bg-cyber-darker">
      {/* Logo and tagline */}
      <div className="p-6 flex flex-col items-center border-b-2 border-neon-blue/50">
        <button 
          onClick={() => scrollToSection('intro')} 
          className="focus:outline-none relative"
        >
          <img 
            src={logo} 
            alt="NAE Logo" 
            className="w-18 h-18 mb-4 relative z-10 hover:opacity-80 transition-opacity filter invert" 
          />
        </button>
        <p className="text-sm text-center font-cyber-secondary text-white">
          <span>
            <span className="animate-pulse text-gradient font-bold">N</span>ext-Gen networks.
          </span><br />
          <span>
            <span className="animate-pulse text-gradient font-bold">A</span>bsolute security.
          </span><br />
          <span>
            <span className="animate-pulse text-gradient font-bold">E</span>ngineered code.
          </span>
        </p>
      </div>
      {/* Navigation menu */}
      <nav className="flex-1 flex flex-col justify-evenly px-4 py-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left px-4 py-3 font-cyber transition-all duration-300 relative overflow-hidden
              ${activeSection === item.id
                ? 'text-white border-2 border-neon-blue shadow-neon-blue bg-neon-blue/20'
                : 'text-gray-100 hover:text-white hover:bg-neon-purple/20'
              }`}
          >
            <span className="relative z-10">{item.label}</span>
            {activeSection === item.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-transparent"></div>
            )}
          </button>
        ))}
      </nav>
      {/* Footer */}
      <div className="p-4 text-sm text-center font-cyber-secondary text-white border-t-2 border-neon-purple/50">
        © 2025 Neil Angelo Espinoza
      </div>
    </div>
  );
};

export default Sidebar;