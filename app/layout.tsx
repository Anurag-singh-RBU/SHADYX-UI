import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SquigglyUnderline } from "./SquigglyUnderline";
import Footerdemo from "./components/ui/Footerdemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shadyxui.in"),
  title: {
    default: "Shadyx UI",
    template: "%s | Shadyx UI",
  },
  description:
    "Build sleek, beautiful UIs with Shadyx UI – a modern and customizable component kit built with Next.js and Tailwind CSS.",
  keywords: [
    "Shadyx UI",
    "shadcn ui",
    "React components",
    "Tailwind CSS",
    "UI library",
    "frontend development",
    "Next.js templates",
    "Anurag Singh",
    "component library",
    "responsive design",
    "modern UI kit",
    "developer tools",
  ],
  authors: [{ name: "Anurag Singh", url: "https://anuragwebdev.vercel.app/" }],
  creator: "Anurag Singh",
  publisher: "Shadyx UI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shadyxui.in",
    title: "Shadyx UI - Build Sleek React Components",
    description:
      "Build sleek, beautiful UIs with Shadyx UI – a modern and customizable component kit built with Next.js and Tailwind CSS.",
    siteName: "Shadyx UI",
    images: [
      {
        url: "https://shadyxui.in/shadyxui.png",
        width: 1200,
        height: 630,
        alt: "Shadyx UI - React & Tailwind CSS Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadyx UI - From Copy to Vibe",
    description:
      "Build sleek, beautiful UIs with Shadyx UI – a modern and customizable component kit built with Next.js and Tailwind CSS.",
    images: ["https://shadyxui.in/shadyxui.png"],
    creator: "@anuragrbu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://shadyxui.in",
    languages: {
      "en-US": "https://shadyxui.in",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://shadyxui.in"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <SquigglyUnderline />
        {children}
        <Analytics />
        <Footerdemo />
      </body>
    </html>
  );
}
