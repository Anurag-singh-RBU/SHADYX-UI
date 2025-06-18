import React from 'react';
import Link from "next/link";

const Artifacts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 sm:px-8">
      {/* Card 1 */}
      <Link href="/parallaxcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="para" />
        </div>
        <h1 className="text-center text-xl mt-6 mono-text font-bold">Parallax Effect</h1>
        <h4 className="text-center font-GS text-sm mt-1 sm:font-medium">
          Move your cursor and watch it shift
        </h4>
      </Link>

      {/* Card 2 */}
      <Link href="/illuminationeffect" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraTwo" />
        </div>
        <h1 className="text-center text-xl mt-6 mono-text font-bold">Illumination Effect</h1>
        <h4 className="text-center font-GS text-sm mt-1 sm:font-medium">
          Every glow and movement speaks your life
        </h4>
      </Link>

      {/* Card 3 */}
      <Link href="/svgcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraThree" />
        </div>
        <h1 className="text-center text-xl mt-6 mono-text font-bold">Svg Masking</h1>
        <h4 className="text-center font-GS text-sm mt-1 sm:font-medium">
          Shape vision with beautiful SVG masks
        </h4>
      </Link>

      {/* Card 4 */}
      <Link href="/paintcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-[rgb(82,82,82)] rounded-2xl overflow-hidden py-3">
          <div id="paraFour" />
        </div>
        <h1 className="text-center text-xl mt-6 mono-text font-bold">Paint Board</h1>
        <h4 className="text-center font-GS text-sm mt-1 sm:font-medium">
          Shape vision with beautiful SVG masks
        </h4>
      </Link>
    </div>
  );
};

export default Artifacts;
