import React from 'react';
import '../styles/animations.css';

// Import tech stack images
import pythonIcon from '../assets/tech/python.png';
import typescriptIcon from '../assets/tech/typescript.png';
import javascriptIcon from '../assets/tech/javascript.png';
import phpIcon from '../assets/tech/php.png';
import cppIcon from '../assets/tech/cpp.png';
import javaIcon from '../assets/tech/java.png';
import reactNativeIcon from '../assets/tech/react-native.png';
import expoIcon from '../assets/tech/expo.png';
import nodejsIcon from '../assets/tech/nodejs.png';
import flaskIcon from '../assets/tech/flask.png';
import mysqlIcon from '../assets/tech/mysql.png';
import awsIcon from '../assets/tech/aws.png';
import arduinoIcon from '../assets/tech/arduino.png';
import esp32Icon from '../assets/tech/esp32.png';
import micropythonIcon from '../assets/tech/micropython.png';
import firebaseIcon from '../assets/tech/firebase.png';

// Import IDEMETER project images
import idemeterLogo from '../assets/projects/idemeter-logo.png';
import idemeterPhone from '../assets/projects/idemeter-phone.png';
import idemeterSchematic from '../assets/projects/idemeter-schematic.png';
import idemeterSample from '../assets/projects/idemeter-sample.png';

// SoftwareDevelopment component
const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4 pb-20 md:pt-8 md:pb-24 flex flex-col items-center justify-center">
      <div className="text-center w-full max-w-[1400px] mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-white text-center">
          Engineered Code for Real-World Impact
        </h1>
        
        {/* Tech Stack Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Languages & Frameworks */}
            <div className="group perspective">
              <div className="relative preserve-3d group-hover:rotate-y-180 duration-1000 w-full aspect-square">
                {/* Front */}
                <div className="absolute backface-hidden w-full h-full">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center gap-4">
                    <h3 className="font-medium text-white text-xl mb-3">Languages & Frameworks</h3>
                    <div className="grid grid-cols-4 gap-4 w-full">
                      {/* Languages */}
                      <img src={pythonIcon} alt="Python" className="w-12 h-12 object-contain mx-auto" />
                      <img src={typescriptIcon} alt="TypeScript" className="w-12 h-12 object-contain mx-auto" />
                      <img src={javascriptIcon} alt="JavaScript" className="w-12 h-12 object-contain mx-auto" />
                      <img src={phpIcon} alt="PHP" className="w-12 h-12 object-contain mx-auto" />
                      <img src={cppIcon} alt="C++" className="w-12 h-12 object-contain mx-auto" />
                      <img src={javaIcon} alt="Java" className="w-12 h-12 object-contain mx-auto" />
                      {/* Frameworks */}
                      <img src={reactNativeIcon} alt="React Native" className="w-12 h-12 object-contain mx-auto" />
                      <img src={expoIcon} alt="Expo" className="w-12 h-12 object-contain mx-auto" />
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute backface-hidden w-full h-full rotate-y-180">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center">
                    <h3 className="font-medium text-white text-xl mb-4">Languages & Frameworks</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <h4 className="text-white mb-2">Languages</h4>
                        <ul className="text-gray-300 text-center space-y-1">
                          <li>Python</li>
                          <li>TypeScript</li>
                          <li>JavaScript</li>
                          <li>PHP</li>
                          <li>C++</li>
                          <li>Java</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Frameworks</h4>
                        <ul className="text-gray-300 text-center space-y-1">
                          <li>React Native</li>
                          <li>Expo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="group perspective">
              <div className="relative preserve-3d group-hover:rotate-y-180 duration-1000 w-full aspect-square">
                {/* Front */}
                <div className="absolute backface-hidden w-full h-full">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center gap-4">
                    <h3 className="font-medium text-white text-xl mb-3">Backend</h3>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <img src={nodejsIcon} alt="Node.js" className="w-12 h-12 object-contain mx-auto" />
                      <img src={flaskIcon} alt="Flask" className="w-12 h-12 object-contain mx-auto" />
                      <img src={mysqlIcon} alt="MySQL" className="w-12 h-12 object-contain mx-auto" />
                      <img src={awsIcon} alt="AWS" className="w-12 h-12 object-contain mx-auto" />
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute backface-hidden w-full h-full rotate-y-180">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center">
                    <h3 className="font-medium text-white text-xl mb-4">Backend</h3>
                    <ul className="text-gray-300 text-center space-y-2">
                      <li>Node.js</li>
                      <li>Flask</li>
                      <li>MySQL</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* IoT */}
            <div className="group perspective">
              <div className="relative preserve-3d group-hover:rotate-y-180 duration-1000 w-full aspect-square">
                {/* Front */}
                <div className="absolute backface-hidden w-full h-full">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center gap-4">
                    <h3 className="font-medium text-white text-xl mb-3">IoT</h3>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <img src={arduinoIcon} alt="Arduino" className="w-12 h-12 object-contain mx-auto" />
                      <img src={esp32Icon} alt="ESP32" className="w-12 h-12 object-contain mx-auto" />
                      <img src={micropythonIcon} alt="MicroPython" className="w-12 h-12 object-contain mx-auto" />
                      <img src={firebaseIcon} alt="Firebase" className="w-12 h-12 object-contain mx-auto" />
                    </div>
                  </div>
                </div>
                {/* Back */}
                <div className="absolute backface-hidden w-full h-full rotate-y-180">
                  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 h-full flex flex-col items-center justify-center">
                    <h3 className="font-medium text-white text-xl mb-4">IoT</h3>
                    <ul className="text-gray-300 text-center space-y-1">
                      <li>Arduino</li>
                      <li>ESP32/NODEMCU</li>
                      <li>MicroPython</li>
                      <li>Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Project Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white border-b border-gray-700 pb-2 text-center">Featured Project</h2>
          <div className="bg-gray-800/30 p-8 rounded-lg border border-gray-700 max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <img src={idemeterLogo} alt="IDEMETER Logo" className="h-24 w-auto mb-6 object-contain" />
              <h3 className="font-bold text-white text-2xl mb-6 text-center">IDEMETER: IoT-Based Smart Aeroponics System</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="bg-gray-800/30 rounded-lg p-4 flex items-center justify-center h-80">
                <img src={idemeterPhone} alt="IDEMETER Mobile App" className="max-w-full max-h-full rounded-lg object-contain" />
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 flex items-center justify-center h-80">
                <img src={idemeterSample} alt="IDEMETER Sample Result" className="max-w-full max-h-full rounded-lg object-contain" />
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 flex items-center justify-center h-80 md:col-span-2 lg:col-span-1">
                <img src={idemeterSchematic} alt="IDEMETER System Schematic" className="max-w-full max-h-full rounded-lg object-contain" />
              </div>
            </div>

            <ul className="space-y-4 text-gray-300 text-lg text-center">
              <li>
                Built a mobile app for real-time monitoring of aeroponics systems using React Native, Expo, Python,
                 MicroPython, Firebase, AWS MySQL, and Node.js.
              </li>
              <li>
                Integrated IoT sensors (pH, CO2, light, temperature, and humidity) with Arduino/ESP32 for automated lettuce cultivation.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;