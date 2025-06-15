"use client";
import React from 'react';
import { BookOpen, Code2 } from 'lucide-react';

const ReadDocs = () => {
  return (
    <div className="flex flex-col sm:items-center sm:text-center items-start text-left px-4 sm:py-12 py-8">
      {/* Icon */}
      <div className="bg-purple-100 p-4 rounded-2xl mb-6">
        <Code2 className="text-purple-600 w-6 h-6" />
      </div>

      {/* Title */}
      <h1 className="sm:hidden sm:text-4xl text-3xl font-JB font-extrabold mb-4 text-nowrap text-gray-800">
        Start in Style
      </h1>

      <h1 className="sm:inline hidden sm:text-4xl text-2xl font-JB font-extrabold mb-4 text-nowrap text-gray-800">
        Get started any way you want
      </h1>

      {/* Subtitle */}
      <p className="sm:text-sm text-[14px] -mt-1 sm:mt-0 sm:text-center text-justify text-gray-900 font-semiibold font-JB max-w-xl mb-4 leading-relaxed">
        Jump right into building with 
        <span className='sm:text-sm text-[13px] font-JB font-extrabold text-red-500'> Shadyx UI</span> just follow the Steps to install mandatory dependencies and copy the source code.
      </p>

      {/* Link */}
      <a
        href="/docs"
        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-base sm:mt-3 mt-2 font-medium px-5 py-2.5 rounded-xl transition duration-300"
      >
        <BookOpen className="w-5 h-5" />
        Read the docs
      </a>
    </div>
  );
};

export default ReadDocs;
