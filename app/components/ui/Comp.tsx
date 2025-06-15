'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Artifacts from './Artifacts';

const Comp: React.FC = () => {
  return (
    <div className="relative sm:mt-30 mt-15 overflow-hidden flex flex-col items-center">
      {/* Grid Background */}
      <div className="absolute inset-y-0 right-0 w-3/5 z-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid-light.svg')] bg-repeat opacity-40"></div>
      </div>

      {/* Text Section */}
      <div className="relative z-10 w-full sm:px-4 px-2 py-16 sm:ml-25 sm:mr-auto md:font-GS font-JB sm:text-left sm:leading-tight text-center">
        <h1 className="text-2xl sm:text-left text-center md:text-[52px] sm:mt-0 mt-2 sm:ml-0 mx-3 sm:font-extrabold font-bold mb-8 sm:font-JB">
          <span className="text-2xl md:text-[48px]  sm:font-JB sm:font-extrabold text-zinc-700">Awesome </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8]">Tailwind CSS </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB sm:font-extrabold text-zinc-700">and </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB bg-clip-text text-transparent bg-gradient-to-t from-emerald-600 to-emerald-600/[0.8]">Framer Motion </span>
          <br className="hidden sm:block" />
          <span className="text-2xl md:text-[48px] sm:font-JB  text-zinc-700">components </span>
          <span className="text-2xl md:text-[48px]  sm:font-JB font-extrabold text-zinc-700 sm:inline hidden">for your React project</span>
        </h1>

       <motion.p
  className="font-bold sm:font-normal sm:-mt-5 -mt-5 text-sm sm:text-lg text-zinc-500 mb-8 hidden sm:block px-4 sm:px-0 max-w-4xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
>
  Create beautiful React components with ease using Tailwind CSS for sleek styling and Framer Motion for smooth and eye-catching animations.
</motion.p>

      </div>

      {/* Artifact Card Positioned Below */}
      <div className="z-10 mb-20 sm:mt-0 -mt-10">
        <Artifacts />
      </div>
    </div>
  );
};

export default Comp;
