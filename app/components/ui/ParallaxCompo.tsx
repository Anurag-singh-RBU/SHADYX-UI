
'use client';
import React, { useState, useRef } from 'react';
import { Monitor, FileCode } from 'lucide-react';
import { ParallaxHero } from './ParallaxHero';
import CodeBlock from './CodeBlock';
// import { Copy, Check } from 'lucide-react';
import { ScriptCopyBtn } from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';

const Spotlight: React.FC = () => {

  // const [copied1, setCopied1] = useState(false);
  // const [copied2, setCopied2] = useState(false);

  // const installCmd = `npm install react-just-parallax`;

  // const utilCode = `
  // <ParallaxHero parallaxRef = {parallaxRef}/>`;
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const parallaxRef = useRef<HTMLDivElement>(null!);

  const codeString = `import React, { useEffect, useState } from 'react';
import { MouseParallax } from 'react-just-parallax';

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 opacity-[0.7] left-1/2 w-[16rem] sm:w-[20rem] md:w-[28rem] 
      xl:w-[36rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.6] left-1/2 w-[12rem] sm:w-[16rem] md:w-[20rem] 
      xl:w-[28rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.5] left-1/2 w-[8rem] sm:w-[12rem] md:w-[16rem] 
      xl:w-[20rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 opacity-[0.4] left-1/2 w-[4rem] sm:w-[8rem] md:w-[12rem] 
      xl:w-[12rem] aspect-square border border-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
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
    <div className="absolute border-transparent top-[5rem] 
    sm:top-[3rem] md:top-[5rem] left-1/2 w-[18rem] sm:w-[24rem] md:w-[32rem] xl:w-[40rem] aspect-square 
    border border-n-2/5 rounded-full -translate-x-1/2">
      <Rings />
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
          <div className="w-5 h-5 -ml-10 -mt-12 sm:w-10 sm:h-10 
          sm:-mt-30 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform 
          duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
          <div className="w-10 h-10 ml-25 -mt-3 sm:w-10 sm:h-10 
          sm:-mt-35 sm:ml-10 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] 
          rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
          <div className="w-4 h-4 sm:w-8 sm:h-8 mt-[10rem] sm:ml-25 sm:mt-[8rem] 
          bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block 
          transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
          <div className="w-8 h-8 -ml-1 mt-[5rem] sm:w-10 sm:h-10 sm:mt-[8rem] 
          bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform 
          duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
          <div className="w-6 h-6 -ml-5 
          sm:w-12 sm:h-12 sm:-mt-20 sm:-ml-5 mt-5 
          bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] 
          rounded-full transition-transform duration-500 ease-out translate-y-0 opacity-100" />
        </div>
        <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
          <div className="w-6 h-6 -ml-2 sm:w-8 sm:h-8 sm:ml-1 sm:-mt-14 mt-16 
          bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform
          duration-500 ease-out translate-y-0 opacity-100" />
        </div>
      </MouseParallax>
    </div>
  );
};
`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 font-JB">Parallax</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        A parallax effect with Tailwind CSS which is good for drawing attention to a particular element on the page.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
  {['Hero', 'Parallax', 'Section', 'Special'].map((tag, index) => (
    <div key={tag} className={`relative rounded-full p-[2px] tag-wrapper tag-${index}`}>
      <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-3 py-1 rounded-full font-medium">
        {tag}
      </div>
    </div>
  ))}
</div>


      {/* Toggle Buttons */}
      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-sm ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="font-medium">Code</span>
        </button>
      </div>

      {/* Content Switcher */}
      <div className="sm:mt-10 mt-5 min-h-[400px] -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md sm:h-[500px] h-[300px] bg-gradient-to-b from-black via-gray-900 to-black">
            <ParallaxHero parallaxRef={parallaxRef}/>
            <h1 className="text-center text-white sm:text-4xl text-xl font-JB sm:pt-54 pt-29 sm:pl-3 px-3">
              Give your screen some life with motion
            </h1>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-md border border-gray-300">
            <CodeBlock
              language="typescript"
              fileName="ParallaxHero.tsx"
              code={codeString}
            />
          </div>
        )}
      </div>

 <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 mt-25">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <div className="mb-10 relative">
        <ScriptCopyBtn
                commandMap={{
                  npm: "npm install react-just-parallax",
                  yarn: "yarn add react-just-parallax",
                  pnpm: "pnpm add react-just-parallax",
                  bun: "bun add react-just-parallax",
                }}
              />
      </div>

      {/* Add util file */}
            <div className="relative -mb-15">
              <h3 className="text-base sm:font-semibold font-bold mb-2 ml-2">Update App file</h3>
              <p className="text-sm text-muted-foreground mb-2 ml-2">App.jsx</p>
               <ScriptImport command="<ParallaxHero parallaxRef = {parallaxRef}/>" />
            </div>
    </div>
    </div>
  );
};

export default Spotlight;
