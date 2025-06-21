'use client';
import React, {useState} from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import ResizableNavbar from './ResizableNavbar';

const Spotlight: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
const codeString = `import React, { useState, useEffect } from 'react';
import { Moon, Sun, Twitter, Instagram, Linkedin } from 'lucide-react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ResizableNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <nav className={cn(
        "fixed font-JB font-bold top-0 left-1/2 transform 
        -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
        "bg-white/80 dark:bg-black/80 backdrop-blur-md border 
        border-gray-200/20 dark:border-gray-800/20",
        "shadow-lg shadow-black/5 dark:shadow-white/5",
        isScrolled 
          ? "w-[85%] md:w-[70%] lg:w-[60%] mt-4 rounded-2xl px-4 py-1.5" 
          : "w-full mt-0 rounded-none px-6 py-3")}>
        <div className="flex items-center justify-between">
          <div className="flex font-JB font-bold items-center space-x-3 
          flex-shrink-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 
            to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SX</span>
            </div>
            <span className="font-JB font-bold text-lg text-gray-900 
            dark:text-white tracking-tight">
              Shadyx UI
            </span>
          </div>

          <div className={cn(
            "hidden md:flex items-center space-x-6 transition-opacity duration-300 ml-8 mr-4",
            isScrolled ? "opacity-0 md:opacity-100" : "opacity-100")}>
            <a href="#home" className="font-bold text-sm text-gray-700 dark:text-gray-300 
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="font-bold text-sm text-gray-700 dark:text-gray-300 
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              About
            </a>
            <a href="#services" className="font-bold text-sm text-gray-700 dark:text-gray-300 
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Services
            </a>
            <a href="#contact" className="font-bold text-sm text-gray-700 dark:text-gray-300 
            hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <div className={cn(
              "flex items-center space-x-1 transition-all duration-300",
              isScrolled ? "hidden lg:flex" : "flex")}>
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-200"
                aria-label="Twitter">
                <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-200"
                aria-label="Instagram">
                <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
              </a>
              <a
                href="#"
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-colors duration-200"
                aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
              </a>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 
              transition-colors duration-200 ml-2"
              aria-label="Toggle dark mode">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500"/>
              ) : (
                <Moon className="w-5 h-5 text-gray-600"/>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResizableNavbar;
`;

return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Navbar</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        A dynamic navigation bar that adjusts seamlessly to your layout needs.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Navbar', 'Dynamic', 'Special'].map((tag, index) => (
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
          
          <div className="relative rounded-md overflow-hidden sm:h-[500px] h-[300px] bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-200">
            <div className="flex flex-col items-center justify-center h-full px-2 -mt-2 sm:mt-0">
              <p className="text-center font-JB text-black sm:text-5xl text-xl font-bold">
                Navbar will appear at</p> <span className='sm:mt-6 mt-2 text-center font-JB text-xl text-black sm:text-5xl font-bold'>the top of this page</span>             
            </div>
            <div className='h-[1200px] w-full overflow-auto'>
              <ResizableNavbar/>
            </div>
          </div>
        ) : (
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden">
            <CodeBlock
              language="typescript"
              fileName="ResizableNavbar.tsx"
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
          npm: "npm install lucide-react",
          yarn: "yarn add lucide-react",
          pnpm: "pnpm add lucide-react",
          bun: "bun add lucide-react",
        }}
      />
      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<ResizableNavbar/>" />
      </div>
    </div>
    </div>
  );
};

export default Spotlight;

