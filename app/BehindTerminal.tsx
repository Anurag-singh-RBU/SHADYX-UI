"use client";
import React from "react";
import { Vortex } from "./components/ui/Vortex";
import { SparklesCore } from "./components/ui/sparkles";

const Content = () => (
  <div className="w-full text-white font-JB relative z-10">
    <div className="max-w-4xl mx-auto text-justify sm:text-center space-y-8 sm:space-y-15">
      <h1 className="text-2xl text-nowrap sm:text-4xl md:text-5xl font-extrabold text-sky-400">
        Who&apos;s building ShadYx{" "}
        <span className="hidden sm:inline sm:text-4xl md:text-5xl font-extrabold text-sky-400">UI</span> ?
      </h1>
      <p className="text-[15px] sm:text-base md:text-lg leading-relaxed">
        Hi, <span className="bg-gray-600 px-1 font-bold">I&apos;m Anurag</span>. I&apos;ve been building web applications for more than{" "}
        <span className="bg-gray-600 px-1 font-bold">1 year</span>. While I am at the beginning of my web development journey, I am deeply committed to learning and building impactful digital experiences.
      </p>
      <p className="text-[15px] sm:text-base md:text-lg leading-relaxed">
        I started <span className="bg-gray-600 px-1 font-bold">Shadyx UI</span> to simplify modern frontend development and share my design vision with the dev community.
      </p>
      <p className="text-[15px] sm:text-base md:text-lg leading-relaxed">
        Also, I post relevant web development projects{" "}
        <span className="bg-gray-600 px-1 font-bold">on my LinkedIn</span>.
      </p>
    </div>
  </div>
);

const BehindTerminal = () => {
  return (
    <>
      {/* Desktop & tablet: show Vortex */}
      <Vortex
        particleCount={700}
        baseHue={240}
        rangeY={100}
        baseSpeed={0.2}
        rangeSpeed={1.0}
        backgroundColor="#000000"
        containerClassName="hidden sm:min-h-screen sm:flex flex-col items-center justify-center pt-20 pb-40 px-4 sm:px-6 md:px-10"
      >
        <Content />
      </Vortex>

      {/* Mobile view: dark blue gradient with justified text */}
<div className="relative sm:hidden mt-8 rounded-xl h-auto bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex flex-col items-center justify-center mb-10 overflow-hidden">
  {/* Sparkles Background */}
  <SparklesCore
    className="absolute inset-0 z-0"
    background="transparent"
    minSize={1}
    maxSize={3}
    speed={2}
    particleColor="#FFFFFF"
    particleDensity={50}
  />

  {/* Foreground Content */}
  <div className="relative z-10 text-white font-JB w-screen text-justify space-y-6 py-10 px-8">
    <h1 className="text-xl font-extrabold text-nowrap text-sky-400">
      Who&apos;s building ShadYx UI ?
    </h1>
    <p className="text-[15px] leading-relaxed">
      Hi, <span className="bg-gray-600 px-1 font-bold">I&apos;m Anurag</span>. I&apos;m at the beginning of my web development journey but deeply passionate about building meaningful digital experiences.
    </p>
    <p className="text-[15px] leading-relaxed">
      I started <span className="bg-gray-600 px-1 font-bold">Shadyx UI</span> to simplify frontend development and bring beautiful design to developers.
    </p>
    <p className="text-[15px] leading-relaxed">
      Also, I share my projects <span className="bg-gray-600 px-1 font-bold">on LinkedIn</span>.
    </p>
  </div>
</div>


    </>
  );
};

export default BehindTerminal;
