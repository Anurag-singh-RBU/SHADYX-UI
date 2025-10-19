'use client';
import React, {useState} from 'react';
import { Monitor, FileCode, Command } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import CliOutput from './CliOutput';
import Cards from './Cards';
import Swipe from './Swipe';

const CardStack: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'cli'>('preview');

const code = `
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Swipeable() {
  const [cards, setCards] = useState([
    {
      title: "Asthetic",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      className:
        "absolute rounded-sm bg-white h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-8 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Awesome",
      img: "https://images.unsplash.com/photo-1760533120264-0b82c7f169ea?ixlib=rb-4.1.0&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      className:
        "absolute rounded-sm bg-white border-t border-r border-l border-gray-200 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-10 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Heaven",
      img: "https://images.unsplash.com/photo-1760301269447-fbc82b5a8d14?ixlib=rb-4.1.0&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2050",
      className:
        "absolute rounded-sm bg-white border-t border-r border-l border-gray-100 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
  ]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden sm:whitespace-none whitespace-nowrap">
      <div className="relative flex items-center justify-center sm:my-80 my-60">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={card.className}
              drag="x"
              dragElastic={0.5}
              initial={{
                rotate: index === 0 ? 0 : index === 1 ? -10 : 20,
                x: 0,
                zIndex: cards.length - index,
              }}
              animate={{
                x: 0,
                zIndex: cards.length - index,
                rotate: index === 0 ? 0 : index === 1 ? -10 : 20,
                scale: index === 0 ? 1 : index === 1 ? 0.95 : 0.9,
                y: index * 20,
              }}
              exit={{ x: 300, opacity: 0, rotate: 45 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                ease: "easeOut",
                duration: 0.5,
              }}
              whileTap={{ scale: 0.97, zIndex: 50 }}
              onDragEnd={(event, info: PanInfo) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;
                if (Math.abs(offset) > 100 || Math.abs(velocity) > 500) {
                  setCards((prevCards) => {
                    const newCards = [...prevCards];
                    const [removed] = newCards.splice(index, 1);
                    newCards.push(removed);
                    return newCards;
                  });
                }
              }}>
              <div className="h-[300px] w-[250px] bg-green-200">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover pointer-events-none relative z-10"/>
              </div>
              <span className="mx-auto font-mono text-2xl font-bold text-neutral-700">
                {card.title}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
`;


const codeString = `import { motion } from "framer-motion";

export default function Cards() {
  const items = [
    {
      title: "Asthetic",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
      =format&fit=crop&w=1170&q=80",
      className:
        "absolute rounded-sm bg-white h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mb-5 z-10 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Awesome",
      img: "https://images.unsplash.com/photo-1760533120264-0b82c7f169ea?ixlib=rb-4.1.0&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
      =format&fit=crop&q=80&w=2069",
      className:
        "absolute rounded-sm bg-gray-50/2 border-t border-r border-l border-gray-200 h-auto pt-6 pb-4 px-6 flex flex-col gap-5 mt-10 z-0 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
    {
      title: "Heaven",
      img: "https://images.unsplash.com/photo-1760301269447-fbc82b5a8d14?ixlib=rb-4.1.0&ixid=
      M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto
      =format&fit=crop&q=80&w=2050",
      className:
        "absolute rounded-sm bg-gray-50/3 border-t border-r border-l border-gray-100 h-auto pt-6 pb-4 px-6 flex flex-col mt-8 gap-5 z-0 
        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
    },
  ];

  return (
    <div className="h-ful w-full flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center my-80">
        {items.map((item, index) => (
          <motion.div
            key={index}
            drag
            initial={{ rotate: 0, scale: 1, zIndex: items.length - index }}
            animate={{
              rotate: index === 0 ? 5 : index === 1 ? -10 : -15,
              x: index === 0 ? 0 : index === 1 ? 200 : -250,
            }}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              ease: "anticipate",
              duration: 0.5,
            }}
            whileTap={{ cursor: "grabbing" }}
            style={{ position: "absolute" }}>
            <div className={item.className.replace("absolute ", "")}>
              <div className="h-[300px] w-[250px] bg-green-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover pointer-events-none relative z-10"/>
              </div>
              <span className="mx-auto font-mono text-2xl font-bold text-neutral-700">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
`;


return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Draggable Card</h1>

      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        A tiltable and draggable card component that jumps on bounds.
      </p>

      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['tiltable', 'draggable' , 'Card'].map((tag, index) => (
          <div key={tag} className={`relative sm:ml-0 ml-1 rounded-full p-[2px] tag-wrapper tag-${index}`}>
            <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-2 py-1 rounded-full font-medium">
              {tag}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 sm:mt-20 mt-15">        <button
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
          <div className="relative rounded-md border-1 sm:h-auto h-auto sm:px-15 px-0 border-gray-300">
            <Cards/>
          </div>
        ) : activeTab === 'code' ? (
          <div className="h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden hide-scrollbar-mobile">
            <CodeBlock
              language="javascript"
              fileName="Cards.jsx"
              code={codeString}/>
          </div>
        ) : (
          <div className="h-auto overflow-x-auto overflow-hidden">
            <CliOutput
              commands={{
                npm: 'npx @anuragcodes/shadyx add https://shadyxui.in/r/cardstack.json',
                pnpm: 'pnpm dlx @anuragcodes/shadyx add https://shadyxui.in/r/cardstack.json',
                yarn: 'yarn dlx @anuragcodes/shadyx add https://shadyxui.in/r/cardstack.json',
                bun: 'bunx @anuragcodes/shadyx add https://shadyxui.in/r/cardstack.json',
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
          npm: "npm install framer-motion",
          yarn: "yarn add framer-motion",
          pnpm: "pnpm add framer-motion",
          bun: "bun add framer-motion",
        }}/>

      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<Cards/>"/>
      </div>
    </div>

    <h2 className='font-mono font-bold text-black sm:-mb-15 sm:mt-15 mt-10 text-xl'>Swipeable Card</h2>
    <div className="flex gap-4 sm:mt-20 mt-5">
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
          <div className="relative rounded-md border-1 sm:h-auto h-[600px] sm:px-15 border-gray-300">
            <Swipe/>
          </div>
        ) : activeTab === 'code' ? (
          <div className="h-[500px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden hide-scrollbar-mobile">
            <CodeBlock
              language="javascript"
              fileName="Swipeable.jsx"
              code={code}/>
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
          npm: "npm install framer-motion",
          yarn: "yarn add framer-motion",
          pnpm: "pnpm add framer-motion",
          bun: "bun add framer-motion",
        }}/>

      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<Swipeable/>"/>
      </div>
    </div>

    </div>
  );
};

export default CardStack;

