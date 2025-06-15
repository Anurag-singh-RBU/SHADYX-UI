import React from 'react';
import Link from "next/link";

const Artifacts = () => {
  return (
    <div className="sm:flex gap-10 w-full items-center mono-text px-4 sm:px-8">
      {/* Card 1 */}
      <Link href="/parallaxcomponent" className="flex flex-col cursor-pointer sm:mx-0 mb-10 sm:mb-0">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="para" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Parallax Effect</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Move your cursor and watch it shift
        </h4>
      </Link>

      {/* Card 2 */}
      <Link href="/illuminationeffect" className="flex flex-col cursor-pointer sm:mx-0">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraTwo" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Illumination Effect</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Every glow and movement speaks your life
        </h4>
      </Link>
    </div>
  );
};

export default Artifacts;
