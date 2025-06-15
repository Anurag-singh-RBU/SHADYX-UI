'use client';
import React, { useEffect, useState } from 'react';
import { MouseParallax } from 'react-just-parallax';

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 opacity-[0.7] left-1/2 w-[16rem] sm:w-[20rem] md:w-[28rem] xl:w-[36rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.6] left-1/2 w-[12rem] sm:w-[16rem] md:w-[20rem] xl:w-[28rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.5] left-1/2 w-[8rem] sm:w-[12rem] md:w-[16rem] xl:w-[20rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.4] left-1/2 w-[4rem] sm:w-[8rem] md:w-[12rem] xl:w-[12rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

interface ParallaxHeroProps {
  parallaxRef: React.RefObject<HTMLDivElement>;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute border-transparent top-[5rem] sm:top-[3rem] md:top-[5rem] left-1/2 w-[18rem] sm:w-[24rem] md:w-[32rem] xl:w-[40rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div className="w-5 h-5 -ml-10 -mt-12 sm:w-10 sm:h-10 sm:-mt-30 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div className="w-10 h-10 ml-25 -mt-3 sm:w-10 sm:h-10 sm:-mt-35 sm:ml-10 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div className="w-4 h-4 sm:w-8 sm:h-8 mt-[10rem] sm:ml-25 sm:mt-[8rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div className="w-8 h-8 -ml-1 mt-[5rem] sm:w-10 sm:h-10 sm:mt-[8rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div className="w-6 h-6 -ml-5 sm:w-12 sm:h-12 sm:-mt-20 sm:-ml-5 mt-5 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div className="w-6 h-6 -ml-2 sm:w-8 sm:h-8 sm:ml-1 sm:-mt-14 mt-16 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
      </MouseParallax>
    </div>
  );
};
