import React from 'react';
import Link from "next/link";

const Artifacts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 sm:px-8 mono-text">
      {/* Card 1 */}
      <Link href="/parallaxcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="para" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Parallax Effect</h1>
        <h4 className="text-center text-sm mt-1 font-bold sm:font-medium">
          Move your cursor and watch it shift
        </h4>
      </Link>

      {/* Card 2 */}
      <Link href="/illuminationeffect" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraTwo" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Illumination Effect</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Every glow and movement speaks your life
        </h4>
      </Link>

      {/* Card 3 */}
      <Link href="/svgcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraThree" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Svg Masking</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Shape vision with beautiful SVG masks
        </h4>
      </Link>

      {/* Card 4 */}
      <Link href="/paintcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-[rgb(82,82,82)] rounded-2xl overflow-hidden py-3">
          <div id="paraFour" />
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Paint Board</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Where Crazy Ideas Take Brilliant Color
        </h4>
      </Link>

      <Link href="/planetcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraFive"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">3D Planet</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Cutest World in the Universe
        </h4>
      </Link>

      <Link href="/navbarcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-[rgb(217,232,252)] rounded-2xl overflow-hidden py-3">
          <div id="paraSix"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Resizable Navbar</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium">
          Navigation That Adapts to You
        </h4>
      </Link>

      <Link href="/pricingcomponent" className="flex flex-col cursor-pointer">
        <div className="bg-[rgb(245,245,244)] rounded-2xl overflow-hidden py-3">
          <div id="paraSeven"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Pricing Section</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium sm:mb-0 -mb-18">
          Retro Style Pricing Section
        </h4>
      </Link>

      <Link href="/errorcomponent" className="flex sm:mt-0 mt-18 flex-col cursor-pointer">
        <div className="bg-black rounded-2xl overflow-hidden py-3">
          <div id="paraEight"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Page Not Found</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium sm:mb-0 -mb-18">
          Eye Catchy Error Page
        </h4>
      </Link>

      <Link href="/reviewcomponent" className="flex sm:mt-0 mt-18 flex-col cursor-pointer">
        <div className="bg-[rgb(219,234,254)] rounded-2xl overflow-hidden py-3">
          <div id="paraNine"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Reviews Section</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium sm:mb-0 -mb-18">
          Sleek Showcasing of Reviews
        </h4>
      </Link>

      <Link href="/faqcomponent" className="flex sm:mt-0 mt-18 flex-col cursor-pointer">
        <div className="bg-white border-1 border-gray-200 rounded-2xl overflow-hidden py-3">
          <div id="paraTen"/>
        </div>
        <h1 className="text-center text-xl mt-6 font-bold">Accordian</h1>
        <h4 className="text-center mono-text text-sm mt-1 font-bold sm:font-medium sm:mb-0 -mb-18">
          Frequently Asked Questions
        </h4>
      </Link>

    </div>
  );
};

export default Artifacts;
