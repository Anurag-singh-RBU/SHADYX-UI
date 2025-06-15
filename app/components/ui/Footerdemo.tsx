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
import { Github, Instagram, Linkedin, Send, Twitter } from "lucide-react"
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
                <a href="https://anuragfolio.netlify.app/" className="font-JB hover:text-violet-700">My Portfolio</a>
                <p className="font-JB mt-2">Phone : 7387857715</p>
              </address>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold mono-text">Follow Me</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Check us out on GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
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
