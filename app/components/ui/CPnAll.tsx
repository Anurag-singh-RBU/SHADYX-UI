/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Link from 'next/link'; // Import Link
import { Linkedin, Github, Twitter } from 'lucide-react'; // For consistent social icons

const CPnAll: React.FC = () => {
  return (
    <footer className="bg-white text-black py-16 px-0 -ml-1 sm:ml-0 sm:px-12 font-GS border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

        {/* Left Section: Logo, Tagline, Share Button, Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left md:w-1/3">
          <div className="flex items-center gap-2 font-JB text-4xl mb-2 font-extrabold text-gray-900">
            <span>Shadyx UI</span>
          </div>
          <p className="font-JB text-base text-gray-700">
            Inspired by <span className="font-JB font-bold">Spectrum UI</span>
          </p>
          <a
            href="https://linkedin.com/share-your-thoughts" // Replace with actual LinkedIn share link
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 font-bold bg-gray-300 px-4 font-JB py-3 w-auto flex gap-3 rounded-md"
            style={{ backgroundColor: 'rgb(245, 245, 245)' }}
          >Share your Thoughts on <Linkedin size={20} className='mt-[0.5px]' />
          </a>
          <p className="text-sm text-gray-500 mt-4 font-GS">
            © 2025 Shadyx UI. All rights reserved.
          </p>
        </div>

        {/* Right Section: Navigation Links & Socials */}
        <div className="grid grid-cols-2 gap-10 mt-3 sm:gap-20 md:gap-24 text-center sm:ml-0 -ml-4 md:text-left md:w-2/3">
          {/* Pages */}
          <div>
            <h4 className="font-bold font-JB mb-5 text-base sm:text-lg text-gray-800">Pages</h4>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/docs" className="hover:text-blue-600 transition-colors">Docs</Link></li>
              <li><Link href="/blocks" className="hover:text-blue-600 transition-colors">Blocks</Link></li>
              <li><Link href="/colors" className="hover:text-blue-600 transition-colors">Colors</Link></li>
            </ul>
          </div>

          {/* Socials - These are external links, so <a> tags are correct */}
          <div>
            <h4 className="font-bold font-JB mb-5 text-base sm:text-lg text-gray-800">Socials</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Github</a></li>
              <li><a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a></li>
              <li><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">X</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Large SHADYX UI text */}
      <h1 className="text-center mt-16 md:mt-24 text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold font-JB bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none leading-none">SHADYX UI</h1>
    </footer>
  );
};

export default CPnAll;