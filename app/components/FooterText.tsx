"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function FooterText() {
  return (
    <div className="sm:h-[25rem] h-[20rem] w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl sm:mb-0 mb-1 text-5xl lg:text-9xl font-bold text-center text-black relative z-20">
        SHADYX UI
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#000000" // blue
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">
        </div>
      </div>
    </div>
  );
}
