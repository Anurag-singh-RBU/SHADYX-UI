/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Working from "./Working";
import { ColorGroup } from "./components/ui/ColorGroup";
import { Introduction } from "./components/ui/Introduction";
import ReadDocs from "./components/ui/ReadDocs";
import { TerminalDemo } from "./components/ui/TerminalDemo";
import { Cover } from "./components/ui/cover";
import { Spotlight } from "./components/ui/spotlight-new";
import { getColors } from "@/app/lib/colors"
import { Button } from "@/components/ui/button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import clsx from "clsx";
import Link from "next/link";

import { useEffect } from "react";

export default function Home() {

  const colorGroups = getColors();

  return (
    <>
      <div className="relative overflow-hidden sm:min-h-full min-h-full px-4">
        <Spotlight/>
        <div className="flex flex-col items-center justify-center sm:mt-40 mt-38 sm:-mb-2 -mb-8 space-y-6"> 
          <Introduction/>
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
                  className="text-3xl sm:text-7xl text-center font-extrabold sm:text-center sm:pb-4 sm:pt-2 font-JB px-4 sm:px-5">
                  from Copy to Vibe
                </div>
              </Cover>
            </div>
          </div>

          <div className="flex justify-center h-[80px] sm:mt-10 mt-7 w-full">
            <div className="h-full flex justify-evenly sm:pl-0 pl-4 items-center w-[600px]">
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/b8ccc46db9f441d6bf3976a402faad5a" alt="Next.js" className="sm:ml-0 mr-3 sm:h-13 sm:w-13 h-10 w-10" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="h-10 w-10 sm:ml-0 mr-2 sm:h-12 sm:w-12" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://avatars.githubusercontent.com/u/139895814?s=200&v=4" alt="Shadcn UI" className="h-9 w-9 sm:h-12 sm:w-12 rounded-full" />
              </span>
              <span className="h-full w-20 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="sm:mr-0 mr-2 h-8 w-8 sm:h-12 sm:w-12" />
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center sm:mt-8 mt-5 gap-4 sm:gap-8 flex-wrap">

            <Link href="/component" passHref legacyBehavior>
              <a className="relative group inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-all duration-300">
                <span className="absolute inset-0 rounded-md bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.3)_0%,rgba(56,189,248,0)_75%)] opacity-0"></span>
                <span className="relative z-10 flex items-center space-x-2 cursor-pointer">
                  <span className="text-sm">✨</span>
                  <span className="font-bold font-JB">
                    <span className="font-bold font-JB">Explore </span>Components
                  </span>
                  <svg
                    className="ml-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </Link>
            <a
              href="https://github.com/Anurag-singh-RBU/SHADYX-UI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full sm:w-auto sm:gap-3 gap-3 font-JB text-center font-bold rounded-md border border-gray-300 bg-white sm:mt-0 px-5 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 h-4 -ml-3 sm:ml-0 text-gray-700"
              >
                <path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.59 2.29 6.63 5.47 7.7.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.91-3.64-4.04 0-.89.31-1.61.82-2.18-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.47 7.47 0 0 1 2-.27 7.45 7.45 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.57.82 1.29.82 2.18 0 3.14-1.87 3.84-3.65 4.04.29.25.54.74.54 1.49 0 1.07-.01 1.93-.01 2.2 0 .21.15.47.55.39A8.01 8.01 0 0 0 16 8.13C16 3.64 12.42 0 8 0z" />
              </svg>
              <span className="mt-[1px] sm:mt-0">Star on GitHub</span>
            </a> 
          </div>
        </main>

        <div className="text-center text-sm text-gray-700 mono-text mt-5">
          Current release&nbsp;
          <span className="font-bold font-JB text-black">v1.0.2</span>
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-20 mt-15 sm:-mb-2 -mb-8 space-y-6">
          <span className="font-JB font-bold text-xl">Featured On</span>        
          <div className="flex -mb-3 sm:ml-3 sm:gap-10">
            <a href="https://sourceforge.net/p/shadyxui/">
            <img alt="Download SHADYX-UI" className="sm:py-2 py-2 mr-7 sm:mr-0 sm:w-[200px] w-[150px]" src="https://sourceforge.net/sflogo.php?type=17&amp;group_id=3887196"/>
            </a>
             <a
            href="https://www.saashub.com/shadyx-ui?utm_source=badge&utm_campaign=badge&utm_content=shadyx-ui&badge_variant=color&badge_kind=approved"
            target="_blank">
            <img
              src="https://cdn-b.saashub.com/img/badges/approved-color.png?v=1"
              alt="Shadyx UI badge"
              style={{maxWidth: "130px"}}/>
            </a>
          </div> 
        </div>

        <Working/>
        <ReadDocs/>
            <div className="h-auto md:hidden lg:flex flex sm:flex-row flex-col sm:justify-center sm:gap-25 justify-center items-center sm:mt-3 sm:mb-15 my-5 sm:px-23">
            <div>
                <TerminalDemo/>
              </div>

              <section className="text-center sm:block sm:px-4 sm:py-20 pt-10 space-y-6 bg-white text-black font-JB">
                <h1 className="text-2xl mb-2 md:text-5xl font-bold leading-tight">
                  Frontend Development </h1><span className="text-2xl hidden sm:block md:text-5xl font-bold leading-tight">at Lightning Speed</span> 
                

              <p className="text-xl mt-5 md:text-2xl flex flex-wrap items-center justify-center gap-2">
                <Cover>
                <div
                  id="spacing"
                  className="sm:text-2xl text-xl text-center font-bold mono-text sm:text-center">
                  Design
                </div>
              </Cover>{" "}
                to{" "}
                <span className="text-yellow-500 font-mono sm:text-2xl text-xl">
                  {"{code}"}
                </span>{" "}
                in a{"  "}
                <Cover>
                <div
                  id="spacing"
                  className="sm:text-2xl text-xl text-center font-bold mono-text sm:text-center">
                  Flash
                </div>
              </Cover>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:pt-4 pt-2">
                <Button className="bg-black text-white cursor-pointer px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-900">
                  <a href="https://www.linkedin.com/in/anuragsinghrbu/">Follow Me</a>
                </Button>

                <Button variant="outline" className="text-center font-JB font-bold rounded-full border border-gray-300 bg-white sm:mt-0 px-5 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-gray-100">
                  <a href="/about">Get Started</a>
                </Button>
              </div>

              <p className="max-w-xl text-sm hidden sm:block text-gray-700 pt-4 leading-relaxed mx-auto">
                Build UI 10x faster : Copy paste the components and use them in your websites without having to worry about styling and animations.
              </p>
            </section>
        </div>

      </div>
    </>
  );
}
