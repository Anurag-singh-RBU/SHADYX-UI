'use client';
import React, {useState} from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import SvgMaskHero from './SvgMaskHero';

const Spotlight: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
const codeString = `import React, { useState, useEffect } from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SvgMaskHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [textActive, setTextActive] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    function handleMouseMove(e) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });

      const dx = x - 50;
      const dy = y - 50;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setTextActive(distance < 20);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full bg-white overflow-hidden 
    flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="liquidMask">
            <rect width="100%" height="100%" fill="black" />
            <circle
              cx={\`\${mousePosition.x}%\`}
              cy={\`\${mousePosition.y}%\`}
              r="150"
              fill="white"
            >
              <animate attributeName="r" values="120;180;120" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle
              cx={\`\${mousePosition.x + 10}%\`}
              cy={\`\${mousePosition.y + 5}%\`}
              r="80"
              fill="white"
              opacity="0.7"
            >
              <animate attributeName="r" values="60;100;60" dur="3s" repeatCount="indefinite" />
            </circle>
          </mask>

          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          <radialGradient id="spotlightGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGradient)" />

        <g mask="url(#liquidMask)">
          <rect width="100%" height="100%" fill="url(#spotlightGradient)" />

          <path
            d={
              'M0,' + (50 + Math.sin(mousePosition.x * 0.1) * 20) +
              ' Q25,' + (30 + Math.cos(mousePosition.y * 0.1) * 15) +
              ' 50,' + (50 + Math.sin(mousePosition.x * 0.15) * 25) +
              ' T100,' + (40 + Math.cos(mousePosition.y * 0.12) * 20)
            }
            stroke="rgba(59, 130, 246, 0.6)"
            strokeWidth="3"
            fill="none"
          >
            <animate
              attributeName="d"
              values="M0,50 Q25,30 50,50 T100,40;M0,60 Q25,20 50,40 T100,50;M0,50 Q25,30 50,50 T100,40"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d={
              \`M0,\${70 + Math.cos(mousePosition.y * 0.1) * 15} Q30,\${80 + 
              Math.sin(mousePosition.x * 0.12) * 20} 60,
              \${60 + Math.cos(mousePosition.y * 0.15) * 25} T100,\${70 + 
              Math.sin(mousePosition.x * 0.1) * 15}\`
            }
            stroke="rgba(139, 92, 246, 0.5)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="d"
              values="M0,70 Q30,80 60,60 T100,70;M0,80 Q30,60 60,80 
              T100,60;M0,70 Q30,80 60,60 T100,70"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>

          {Array.from({ length: 12 }).map((_, i) => (
            <circle
              key={i}
              cx={\`\${20 + i * 8}%\`}
              cy={\`\${30 + Math.sin(i + mousePosition.x * 0.01) * 40}%\`}
              r="4"
              fill={\`rgba(\${59 + i * 10}, \${130 + i * 5}, 246, 0.\${4 + i})\`}
            >
              <animate
                attributeName="cy"
                values={\`\${25 + i * 5}%;\${75 - i * 3}%;\${25 + i * 5}%\`}
                dur={\`\${4 + i * 0.5}s\`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="2;6;2"
                dur={\`\${3 + i * 0.3}s\`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>

      <div className="relative z-10 text-center max-w-4xl px-8">
        <div
          className={cn(
            "transform transition-all duration-1000 ease-out",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h1
            className="text-5xl md:text-8xl font-bold text-gray-900 
            mb-8 leading-tight transition-transform duration-300 ease-out"
            style={{
              transform:
                'translate(' + ((mousePosition.x - 50) / 15) + '%, ' + 
                ((mousePosition.y - 50) / 15) + '%) ' +
                'scale(' + (textActive ? 1.1 : 1) + ') ' +
                'rotate(' + ((mousePosition.x - 50) / 50) + 'deg)'
            }}
          >
            <span className="block">SVG</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 
            to-pink-600 bg-clip-text text-transparent">
              Effect
            </span>
          </h1>
          <p className="text-xl hidden sm:block text-gray-600 -mt-5 mb-10 
          max-w-2xl mx-auto leading-relaxed">
            Experience the power of SVG masking with interactive liquid effects
            that respond to your cursor movement
          </p>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 
      border-t-4 border-gray-300 opacity-30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 
      border-t-4 border-gray-300 opacity-30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 
      border-b-4 border-gray-300 opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 
      border-b-4 border-gray-300 opacity-30"></div>
    </div>
  );
};

export default SvgMaskHero;
`;


  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Svg Masking</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        Create immersive experiences by revealing visuals through animated SVG shapes with smooth interactive effects.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Svg', 'Masking', 'Hero' , 'Special'].map((tag, index) => (
          <div key={tag} className={`relative sm:ml-0 ml-1 rounded-full p-[2px] tag-wrapper tag-${index}`}>
            <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
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
      <div className="sm:mt-10 rounded-md mt-5 min-h-[400px] -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md overflow-hidden sm:h-[500px] h-[300px] bg-gradient-to-b from-black via-gray-900 to-black">
            <SvgMaskHero></SvgMaskHero>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-md overflow-hidden">
            <CodeBlock
              language="typescript"
              fileName="SvgMaskHero.tsx"
              code={codeString}
            />
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 sm:mt-25 mt-18">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <ScriptCopyBtn
        commandMap={{
          npm: "npm install",
          yarn: "yarn",
          pnpm: "pnpm install",
          bun: "bun install",
        }}
      />
      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<SvgMaskHero/>" />
      </div>
    </div>
    </div>
  );
};

export default Spotlight;
