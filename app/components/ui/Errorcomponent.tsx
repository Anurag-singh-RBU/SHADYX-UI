'use client';
import React, {useState} from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import { NotFound } from './NotFound';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const Spotlight: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
const codeString = `import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <h1 className="text-center text-black -mb-10 text-6xl sm:text-7xl md:text-8xl">
              404
            </h1>
            <div
            className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] 
            h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
            aria-hidden="true">
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl text-black sm:text-3xl font-bold mb-4">
                Look like you&apos;re lost
              </h3>
              <p className="mb-6 text-black sm:mb-5">
                The page you are looking for is not available !
              </p>

              <button
                onClick={() => navigate("/")}
                className="my-5 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};`;

return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Error Page</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        Where have you gone ? We&apos;ve been searching for you — come back soon.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Error', '404', 'Funny'].map((tag, index) => (
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
          <div className="relative rounded-md border-1 py-5 sm:px-0 px-3 border-gray-300">
                <NotFound/>
            </div>
        ) : (
          <div className="sm:h-[500px] h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden">
            <CodeBlock
              language="typescript"
              fileName="ResizableNavbar.tsx"
              code={codeString}
            />
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 sm:mt-25 mt-42">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <ScriptCopyBtn
        commandMap={{
          npm: "npm install react-router-dom",
          yarn: "yarn add react-router-dom",
          pnpm: "pnpm add react-router-dom",
          bun: "bun add react-router-dom",
        }}
      />
      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<NotFound/>" />
      </div>
        <p className='sm:ml-1 mt-30 text-xl font-bold flex'>Credits : 
            <Avatar>
            <AvatarImage src="./tanh.avif" alt="@shadcn"/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className='ml-3 text-blue-600'>Le Thanh</span>
        </p>
    </div>

    </div>
  );
};

export default Spotlight;

