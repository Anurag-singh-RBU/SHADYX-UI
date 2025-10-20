"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Instagram, Linkedin, Send, Twitter } from "lucide-react"
import { Mail } from "lucide-react"


export default function Footerdemo() {

  return (
    <footer className="relative border-t mt-10 bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between lg:flex-row lg:justify-between">
          <div className="relative lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold tracking-tight font-JB pl-3">Stay Connected</h2>
              <p className="mb-6 px-3 text-muted-foreground font-JB font-bold sm:font-semibold flex items-center gap-2 whitespace-nowrap text-sm sm:text-base">
                Looking for a developer ? Drop your <Mail className="h-5 w-5 inline" />
              </p>
            <form className="relative inline-flex pl-2 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-16 w-auto sm:min-w-[350px] h-10 font-JB placeholder:font-bold placeholder:sm:font-medium"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-primary-foreground"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* RIGHT SIDE - Grid of 3 blocks */}
          <div className="grid grid-cols-2 pl-3 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:w-1/2">
            <div>
              <h3 className="mb-4 text-lg font-bold font-JB">Pages</h3>
              <nav className="space-y-2 text-sm font-JB">
                <Link href="/" className="block transition-colors">Home</Link>
                <Link href="/docs" className="block transition-colors">Docs</Link>
                <Link href="/component" className="block transition-colors">Components</Link>
                <Link href="/colors" className="block transition-colors">Colors</Link>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg -ml-3 font-bold font-JB">Contact Me</h3>
              <address className="space-y-3 gap-3 -ml-3 text-sm not-italic">
                <a href="https://anufolio.vercel.app/" className="font-JB hover:text-violet-700">My Portfolio</a>
                <p className="font-JB mt-2">Phone : 7387857715</p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold mono-text">Follow Me</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://github.com/Anurag-singh-RBU" className="" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full p-2 dark:border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          width="18" 
                          height="18">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 
                                0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                                C4.422 18.07 3.633 17.7 3.633 17.7 
                                c-1.087-.744.084-.729.084-.729 
                                1.205.084 1.838 1.236 1.838 1.236 
                                1.07 1.835 2.809 1.305 3.495.998 
                                .108-.776.417-1.305.76-1.605 
                                -2.665-.3-5.466-1.332-5.466-5.93 
                                0-1.31.465-2.38 1.235-3.22 
                                -.135-.303-.54-1.523.105-3.176 
                                0 0 1.005-.322 3.3 1.23 
                                .96-.267 1.98-.399 3-.405 
                                1.02.006 2.04.138 3 .405 
                                2.28-1.552 3.285-1.23 3.285-1.23 
                                .645 1.653.24 2.873.12 3.176 
                                .765.84 1.23 1.91 1.23 3.22 
                                0 4.61-2.805 5.625-5.475 5.92 
                                .42.36.81 1.096.81 2.22 
                                0 1.606-.015 2.896-.015 3.286 
                                0 .315.21.69.825.57 
                                C20.565 22.092 24 17.592 24 12.297 
                                c0-6.627-5.373-12-12-12"/>
                          </svg>
                        <span className="sr-only">Github</span>
                      </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Check me out on GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://x.com/anuragRBU" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow me on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow me on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="https://www.linkedin.com/in/anuragsinghrbu/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with me on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground font-GS">
            © 2025 Shadyx UI. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm font-GS">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
