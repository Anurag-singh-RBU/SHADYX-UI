import React from 'react';
import { Lamp } from 'lucide-react';

const IlluminationComp = () => {
  return (
    <div className="flex bg-black flex-col items-center justify-center sm:justify-start">
      <div className="flex flex-col items-center justify-center relative sm:mt-28 mt-14 text-center">
        {/* Lamp Icon */}
        <Lamp className="w-16 h-16 text-yellow-400 animate-pulse mb-4" />

        {/* Light Effect Behind */}
        <div className="absolute w-96 h-96 bg-gradient-radial from-yellow-400/30 via-yellow-400/10 to-transparent rounded-full animate-glow pointer-events-none z-[-1]"></div>

        {/* Main Heading */}
        <h1 className="lg:text-8xl text-4xl md:text-8xl font-bold relative">
          <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent font-JB animate-pulse">
            ILLUMINATED
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-white/50 to-yellow-400/50 bg-clip-text text-transparent animate-glow blur-sm"></div>
        </h1>

        {/* Subtext */}
        <p className="text-xl text-gray-300 sm:mt-6 mt-3 font-JB animate-fade-in-scale" style={{ animationDelay: '2s' }}>
          Light up your ideas
        </p>
      </div>
    </div>
  );
};

export default IlluminationComp;
