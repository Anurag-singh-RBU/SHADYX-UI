/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import BehindTerminal from "./BehindTerminal";
// import { SquigglyUnderline } from "./SquigglyUnderline";
import Working from "./Working";
import { ColorGroup } from "./components/ui/ColorGroup";
import { Introduction } from "./components/ui/Introduction";
// import Footerdemo from "./components/ui/Footerdemo";
// import CPnAll from "./components/ui/CPnAll";
import ReadDocs from "./components/ui/ReadDocs";
import { TerminalDemo } from "./components/ui/TerminalDemo";
import { Cover } from "./components/ui/cover";
import { Spotlight } from "./components/ui/spotlight-new";
import { getColors } from "@/app/lib/colors"

export default function Home() {
  const colorGroups = getColors();

  return (
    <>

      <div className="relative overflow-hidden sm:min-h-full min-h-full px-4">
        <Spotlight/>
        
        <div className="sm:mt-40 mt-35 sm:-mb-5 -mb-8">
          <Introduction></Introduction>
        </div>

        <main className="relative z-10 flex flex-col justify-center items-center text-center px-4">
          <div className="sm:mt-15 mt-15">
            <div
              id="spacing"
              className="text-3xl sm:text-7xl text-nowrap font-JB font-extrabold mb-3 sm:mb-5 text-gray-800 whitespace-nowrap sm:whitespace-nowrap text-center px-4">
              Shortcut to Stunning
            </div>

            <div
              id="spacing"
              className="text-2xl sm:text-7xl font-JB font-black transition duration-200 text-gray-800 flex justify-center">
              <Cover>
                <div
                  id="spacing"
                  className="text-3xl sm:text-7xl text-center font-extrabold sm:text-center sm:pb-4 sm:pt-2 font-JB px-4 sm:px-5"
                >
                  from Copy to Vibe
                </div>
              </Cover>
            </div>
          </div>

          <div className="flex justify-center h-[80px] sm:mt-10 mt-7 w-full">
            <div className="h-full flex justify-evenly sm:pl-0 pl-4 items-center w-[600px]">
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="sm:ml-0 ml-3 h-20 w-20" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="sm:ml-0 ml-8 h-10 w-10 sm:h-12 sm:w-12" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="Aceternity UI" className="sm:ml-0 ml-5 h-9 w-9 sm:h-12 sm:w-12 rounded-full" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="sm:ml-0 ml-3 h-8 w-8 sm:h-12 sm:w-12" />
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:mt-8 mt-5 gap-4 sm:gap-8 flex-wrap">
            <button className="relative group inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all duration-300">
              <span className="absolute inset-0 rounded-md bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.3)_0%,rgba(56,189,248,0)_75%)] opacity-0"></span>
              <span className="relative z-10 flex items-center space-x-2 cursor-pointer">
                <span className="text-sm">✨</span>
                <span className="font-bold font-JB"><span className="font-bold font-JB">Explore </span>Components</span>
                <svg
                  className="ml-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>

            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto sm:gap-3 gap-4 font-JB text-center font-bold rounded-md border border-gray-300 bg-white sm:mt-0 px-5 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 h-4 -ml-5 sm:ml-0 text-gray-700"
              >
                <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.7.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.91-3.64-4.04 0-.89.31-1.61.82-2.18-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.47 7.47 0 0 1 2-.27 7.45 7.45 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.18 0 3.14-1.87 3.84-3.65 4.04.29.25.54.74.54 1.49 0 1.07-.01 1.93-.01 2.2 0 .21.15.47.55.39A8.01 8.01 0 0 0 16 8.13C16 3.64 12.42 0 8 0z" />
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </main>

        <div className="text-center text-sm text-gray-700 mono-text mt-5">
          Current release&nbsp;
          <span className="font-bold font-JB text-black">v1.0.0</span>
        </div>

        <Working/>
        <ReadDocs/>
        <div className="h-auto flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:mt-3 sm:mb-15 my-5 sm:px-23">
          <div>
            <TerminalDemo/>
          </div>
        </div>

      </div>
    </>
  );
}
