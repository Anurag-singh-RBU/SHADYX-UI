"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Menu, X, Linkedin, Twitter, ChevronRight, Palette, Download} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./components/ui/buttontop";

type NavItem = {
  name: string;
  submenu?: string[];
};

const navItems: NavItem[] = [
  { name: "Home" },
  { name: "Docs" },
  { name: "Components" },
  { name: "About" },
  { name: "Colors" }, // This array is correct
];

export const SquigglyUnderline = () => {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setSelectedLink("Home");
    } else if (pathname.startsWith("/docs")) {
      setSelectedLink("Docs");
    } else if (pathname.startsWith("/component")) {
      setSelectedLink("Components");
    } else if (pathname.startsWith("/about")) {
      setSelectedLink("About");
    } else if (pathname.startsWith("/colors")) {
      setSelectedLink("Colors");
    }
  }, [pathname]);

  return (
    <>
    <Link href="/errorcomponent" className="w-auto h-auto cursor-pointer">
    <div className="w-full h-[48px] font-JB font-medium bg-gradient-to-b from-blue-400 to-blue-500 px-2 py-2 text-left font-sans text-xs text-white sm:px-4 sm:py-3 sm:text-base md:text-center">
      Introducing <span className="rounded-sm px-1 py-1 font-bold">Shadyx CLI - </span>
    <span className="font-GS">Effortlessly add ready made <span className="font-JB">UI</span> blocks to your project in seconds</span>
    </div>
    </Link>
    <header className={`fixed left-0 w-full z-50 border-b border-gray-200 bg-white px-6 py-4 font-mono font-bold transition-all duration-300 ${
      scrolled ? 'top-0' : ''
      }`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3 text-xl">
          <div className="w-8 logo h-7 rounded-full" />
          <Link href="/" onClick={() => setSelectedLink("Home")} className="w-auto h-auto cursor-pointer">
            <div className="w-30 h-8 text-svg mt-1"></div>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden lg:flex bg-transparent items-center gap-8">
          {/* Home - Updated Link usage */}
          <Link
            href="/"
            onClick={() => setSelectedLink("Home")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Home" ? "text-black" : "text-gray-500"
            }`}>
            Home
            {selectedLink === "Home" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}>
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Docs - Updated Link usage */}
          <Link
            href="/docs"
            onClick={() => setSelectedLink("Docs")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Docs" ? "text-black" : "text-gray-500"
            }`}>
            Docs
            {selectedLink === "Docs" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Components */}
          <Link
            href="/component"
            onClick={() => setSelectedLink("Components")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Components" ? "text-black" : "text-gray-500"
            }`}
          >
            Components
            {selectedLink === "Components" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* About */}
          <Link // Changed from button to Link for consistency and proper navigation
            href="/about"
            onClick={() => setSelectedLink("About")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "About" ? "text-black" : "text-gray-500"
            }`}
          >
            About
            {selectedLink === "About" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: 84.2, strokeDashoffset: 84.2 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>

          {/* Colors (formerly "Contact" and incorrectly labeled "Components") */}
          <Link
            href="/colors"
            onClick={() => setSelectedLink("Colors")}
            className={`relative flex items-center hover:text-gray-700 gap-1 cursor-pointer text-sm transition-colors duration-200 ${
              selectedLink === "Colors" ? "text-black" : "text-gray-500"
            }`}
          >
            Colors {/* Changed text from "Components" to "Colors" */}
            {selectedLink === "Colors" && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full lg:mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.2,
                      strokeDashoffset: 84.2,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>
        </nav>

        {/* Right: CTA & Socials (Desktop only) */}
        <div className="hidden lg:flex font-GS items-center space-x-8">
          <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className="rounded-none shadow-none first:rounded-s-lg cursor-pointer last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Download className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true"/>
        <a href="https://ui.shadcn.com/docs/installation/vite">Shadcn</a>
      </Button>
      <Button
        className="rounded-none shadow-none first:rounded-s-lg cursor-pointer last:rounded-e-lg focus-visible:z-10"
        variant="outline"
      >
        <Palette className="-ms-1 me-2 opacity-60" size={16} strokeWidth={2} aria-hidden="true"/>
        <a href="/colors">Colors</a>
      </Button>
      <Button
        className="rounded-none cursor-pointer shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      ><Link
        href="/about"
        className="inline-flex items-center justify-center px-3 py-2 hover:bg-gray-100 text-gray-800"
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
      </Button>
    </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a href="https://www.linkedin.com/in/anuragsinghrbu/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
            </a>
              <a href="https://github.com/Anurag-singh-RBU/SHADYX-UI" target="_blank" rel="noopener noreferrer">
                <div id = "githubicon" className="w-6 h-6 text-gray-600 hover:text-black transition"/>
              </a>
            <a href="https://x.com/anuragRBU" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500 transition" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
  {mobileOpen && (
    <div
      className="absolute top-full left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg lg:hidden space-y-4 py-4 flex flex-col items-center"
    >
      {navItems.map((item) => {
        const isSelected = item.name === selectedLink;
        let itemHref = "/";
        if (item.name === "Docs") itemHref = "/docs";
        if (item.name === "Components") itemHref = "/component";
        if (item.name === "About") itemHref = "/about";
        if (item.name === "Colors") itemHref = "/colors"; // Corrected this line

        return (
          <Link
            key={item.name}
            href={itemHref}
            onClick={() => {
              setSelectedLink(item.name);
              setMobileOpen(false);
            }}
            className="w-full px-2 py-2 text-sm font-bold text-gray-800 relative text-center block"
          >
            {item.name}
            {isSelected && (
              <motion.div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1">
                <motion.svg
                  width="37"
                  height="8"
                  viewBox="0 0 37 8"
                  fill="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.path
                    d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      strokeDasharray: 84.2,
                      strokeDashoffset: 84.2,
                    }}
                    animate={{
                      strokeDashoffset: 0,
                    }}
                    transition={{ duration: 1 }}
                  />
                </motion.svg>
              </motion.div>
            )}
          </Link>
        );
      })}

      {/* Add social icons here for mobile */}
      <div className="flex space-x-6 mt-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 transition"/>
        </a>
        <a href="https://github.com/Anurag-singh-RBU" target="_blank" rel="noopener noreferrer">
          <div id = "githubicon" className="w-6 h-6 text-gray-600 hover:text-black transition"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <Twitter className="w-6 h-6 text-gray-500 hover:text-sky-500 transition"/>
        </a>
      </div>
    </div>
  )}
  </AnimatePresence>

    </header>
  </>
  );
};
