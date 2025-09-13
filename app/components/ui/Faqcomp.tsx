'use client';
import React, {useState} from 'react';
import { Monitor, FileCode, Command } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import CliOutput from './CliOutput';
import Accordian from './Accordian';

const Faqcomp: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'cli'>('preview');

const codeString = `import { useState } from "react";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "What is Shadyx UI ?",
      answer: "Shadyx UI is a reuseable components library for web devs based on Next Js and Tailwind CSS to 
      create clean and stunning interfaces."
    },
    {
      question: "Is it compatible with React 19 ?",
      answer: "Yes. Shadyx UI works smoothly with Next.js 15 and React 19. Refer to the updated guide for more."
    },
    {
      question: "Do I need to install Shadcn UI ?",
      answer: "No. this setup works even without Shadcn and will be mentioned wherever required."
    },
    {
      question: "Can I customize the theme ?",
      answer: "Absolutely ! You can modify Tailwind config or add your own components to match your design system."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const DownArrow = (

    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>

  );

  const UpArrow = (

    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>

  );

  return (

    <div className="mt-22 space-y-4">

      {questions.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-md">

          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50">
            <span className="font-medium text-[15px] sm:text-[15px]">{item.question}</span>
            <span className="ml-2">{openIndex === index ? UpArrow : DownArrow}</span>
          </button>

          {openIndex === index && (

            <div className="px-4 pb-4 text-[12px] sm:text-[14px] text-gray-600 font-JB sm:font-semibold font-bold text-justify">
              {item.answer}
            </div>

          )}
        </div>
      ))}

    </div>
  );
};

export default Accordian;
`;


return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Accordian</h1>

      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        Expand to discover hidden content — click to reveal more !!
      </p>

      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Accordian', 'Questions' , 'Sleek'].map((tag, index) => (
          <div key={tag} className={`relative sm:ml-0 ml-1 rounded-full p-[2px] tag-wrapper tag-${index}`}>
            <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
              {tag}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center sm:text-md text-sm gap-2 sm:px-5 sm:py-2 py-2 px-3 rounded-md ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
          <Monitor className="w-4 h-4"/>
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center sm:text-md text-sm gap-2 sm:px-5 sm:py-2 py-2 px-3 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
          <FileCode className="w-4 h-4"/>
          <span className="font-medium">Code</span>
        </button>

        <button
          onClick={() => setActiveTab('cli')}
          className={`flex items-center gap-2 sm:text-md text-sm font-JB sm:px-5 sm:py-2 py-2 px-3 rounded-md ${
            activeTab === 'cli'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
          <Command className="w-4 h-4"/>
          <span className="font-medium">CLI</span>
        </button>
      </div>

      <div className="sm:mt-10 rounded-md mt-5 min-h-[400px] -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md border-1 pb-20 sm:px-15 px-3 border-gray-300">
            <Accordian/>
          </div>
        ) : activeTab === 'code' ? (
          <div className="h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden hide-scrollbar-mobile">
            <CodeBlock
              language="javascript"
              fileName="Accordian.jsx"
              code={codeString}/>
          </div>
        ) : (
          <div className="h-auto overflow-x-auto overflow-hidden">
            <CliOutput
              commands={{
                npm: 'npx @anuragcodes/shadyx add https://shadyxui.in/r/accordian.json',
                pnpm: 'pnpm dlx @anuragcodes/shadyx add https://shadyxui.in/r/accordian.json',
                yarn: 'yarn dlx @anuragcodes/shadyx add https://shadyxui.in/r/accordian.json',
                bun: 'bunx @anuragcodes/shadyx add https://shadyxui.in/r/accordian.json',
              }}/>
          </div>
        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className={`text-3xl font-bold mb-6 sm:ml-1 ${activeTab === "preview" || activeTab === "code" ? "sm:mt-25 mt-42" : "sm:-mt-46 -mt-45"}`}>
        Installation
      </h2>

      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      <ScriptCopyBtn
        commandMap={{
          npm: "npm install",
          yarn: "yarn add",
          pnpm: "pnpm add",
          bun: "bun add",
        }}/>

      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<Accordian/>"/>
      </div>
    </div>

    </div>
  );
};

export default Faqcomp;

