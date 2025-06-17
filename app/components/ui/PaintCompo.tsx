'use client';
import React, {useState} from 'react';
import { Monitor, FileCode } from 'lucide-react';
import { CodeBlock } from './code-block';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import { PaintBoard } from './PaintBoard';

const Spotlight: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
const codeString = `import React from 'react';
import { Lamp } from 'lucide-react';
  
  const IlluminationComp = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="relative text-center -mt-38">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <Lamp className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
  
          <div className="absolute -top-20 left-1/2 
          transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-yellow-400/30 via-yellow-400/10 
          to-transparent rounded-full animate-glow pointer-events-none"></div>
  
          <h1 className="sm:text-7xl text-2xl md:text-9xl font-bold relative">
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent animate-pulse">
              ILLUMINATED
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 via-white/50 to-yellow-400/50 
            bg-clip-text text-transparent animate-glow blur-sm"></div>
          </h1>
  
          <p className="text-xl text-gray-300 mt-6 animate-fade-in-scale" style={{ animationDelay: '2s' }}>
            Light up your ideas
          </p>
        </div>
      </div>
    );
  };
  
  export default IlluminationComp;
`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Illumination</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        A glowing fusion of light and motion that brings your interface to life with a radiant visual focus.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Lamp', 'illuminated', 'Section'].map((tag, index) => (
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
      <div className="sm:mt-10 rounded-md mt-5 min-h-[400px] md:-ml-10 ml-0 -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md mb-40 sm:mb-0 overflow-hidden sm:h-auto h-auto bg-gradient-to-b from-black via-gray-900 to-black">
            <PaintBoard></PaintBoard>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-md overflow-hidden border border-gray-300">
            <CodeBlock
              language="typescript"
              filename="IlluminationComp.tsx"
              code={codeString}
            />
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 sm:mt-25 mt-15">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <ScriptCopyBtn
        commandMap={{
          npm: "npm install lucide-react",
          yarn: "yarn add lucide-react",
          pnpm: "pnpm add lucide-react",
          bun: "bun add lucide-react",
        }}
      />
      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 ml-2">App.jsx</p>
         <ScriptImport command="<IlluminationComp/>" />
      </div>
    </div>
    </div>
  );
};

export default Spotlight;
