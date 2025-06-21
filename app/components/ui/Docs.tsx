'use client'

import React, { useState } from 'react'
import Accordian from './Accordian'

const Docs = () => {
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({})

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [id]: true })
    setTimeout(() => {
      setCopied({ ...copied, [id]: false })
    }, 2000)
  }

  const ClipboardIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4H18a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2H8" />
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    </svg>
  )

  const TickIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  return (
    <>
      <div className="max-w-4xl mx-2 sm:mx-auto sm:mt-28 mt-20 sm:px-4 px-5 py-10">
        {/* Header */}
        <h2 className="text-sm text-gray-500 mb-2 font-JB">Installation</h2>
        <h1 className="text-4xl font-extrabold mb-2 font-JB">Shadyx UI</h1>
        <p className="text-gray-700 mb-6 font-JB">Install and configure React Js.</p>

        {/* Step 1 */}
        <div className="mb-6 sm:mt-18 mt-15">
          <div className="flex items-center space-x-2 mb-2">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">1</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Create project</h2>
          </div>
          <p className="text-sm text-gray-500 sm:font-semibold font-bold mb-4 mt-4 text-justify font-JB">
            Run <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">init</code> to create a new React project or to setup an existing one :
          </p>
          <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
            <span>npm create vite@latest</span>
            <button
              // Changed ID from 'step1' to 'createReactApp'
              onClick={() => handleCopy('npx create-react-app@latest', 'createReactApp')}
              className="text-gray-600 hover:text-black"
            >
              {copied['createReactApp'] ? TickIcon : ClipboardIcon}
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <div className="flex items-center space-x-2 mb-3 sm:mt-15 mt-15">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">2</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Install Shadcn UI</h2>
          </div>
          <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
            <span>npx shadcn@latest init</span>
            <button
              // This ID is correctly 'step2' for the initial Shadcn init command
              onClick={() => handleCopy('npx shadcn@latest init', 'step2')}
              className="text-gray-600 hover:text-black"
            >
              {copied['step2'] ? TickIcon : ClipboardIcon}
            </button>
          </div>
        </div>
        <div className="py-6 rounded-lg space-y-4 max-w-4xl mx-auto text-sm font-mono">
          <div className="sm:p-8 text-justify rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-3 p-3">
            <p className='font-JB sm:font-semibold font-bold text-gray-500'>
              You can use the <code className="bg-gray-200 px-1 py-1 rounded">-d</code> flag for defaults for the css variables.
            </p>
            <div className="mt-6 bg-gray-100 p-3 flex justify-between items-center text-sm font-mono rounded-lg border text-card-foreground shadow-sm w-full">
              <code>npx shadcn@latest init -d</code>
              <button
                // Changed ID from 'step1' to 'shadcnInitDefault'
                onClick={() => handleCopy('npx shadcn@latest init -d', 'shadcnInitDefault')}
                className="text-gray-600 hover:text-black"
              >
                {copied['shadcnInitDefault'] ? TickIcon : ClipboardIcon}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex space-x-2 mb-2 sm:mt-18 mt-16">
              <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">3</div>
              <h2 className="text-lg text-justify ml-2 font-bold font-JB">Configure Components.json</h2>
            </div>
            <p className="text-sm text-gray-500 mb-5 mt-3 font-JB sm:font-semibold font-bold">
              You will be asked a few questions to configure <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">components.json</code> :
            </p>
            <div className="bg-gray-100 p-4 rounded border space-y-2 sm:overflow-hidden overflow-x-auto whitespace-nowrap pr-4">
              <p>1. Which style would you like to use ? &gt; New York</p>
              <p>2. Which color would you like to use as base color ? &gt; Zinc&nbsp;</p>
              <p>3. Do you want to use CSS variables for colors ? &gt; no / yes</p>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mt-10 mt-10">
          <div className="flex items-center space-x-2 mb-2">
            <div className="border-1 border-gray-300 text-sm font-bold px-2 py-1 font-JB rounded">4</div>
            <h2 className="text-lg ml-2 font-bold font-JB">Enjoy The Vibe</h2>
          </div>
          <p className="text-sm text-gray-500 mb-3 mt-3 font-JB sm:font-semibold font-bold">
            You can now start adding components to your project.
          </p>
        </div>
        <Accordian />
      </div>
    </>
  )
}

export default Docs