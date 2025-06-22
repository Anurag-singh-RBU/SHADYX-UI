import type { Metadata } from "next";
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
  title: "Shadyx UI",
  description:
    "Build sleek, beautiful UIs with Shadyx UI – a modern and customizable component kit built with Next.js and Tailwind CSS.",
  keywords: [
    "shadcn ui",
    "shadcn",
    "shadcn navbar",
    "Shadyx UI",
    "shadyx ui",
    "Shadyx Ui",
    "shadyx",
    "Shadyx",
    "Anurag Singh",
    "anurag singh",
    "React components",
    "Anurag",
    "frontend development",
    "web development",
    "UI library",
    "Next.js",
    "Tailwind CSS",
    "Component library",
    "shadcn ui",
    "aceternity",
    "From Copy to Vibe",
    "from copy to vibe",
    "Vercel",
  ],
  robots: "index, follow",
  metadataBase: new URL("https://shadyxui.in"),
  authors: [
    {
      name: "Anurag Singh",
      url: "https://anuragwebdev.vercel.app/",
    },
  ],
  creator: "Anurag Singh",
  publisher: "Shadyx UI",
  icons: {
    icon: "/favicon.ico", // ✅ Must be in /public
  },
  openGraph: {
    title: "Shadyx UI",
    description:
      "A sleek, developer-friendly UI kit built with Next.js & Tailwind CSS.",
    url: "https://shadyxui.in",
    siteName: "Shadyx UI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://shadyxui.in/shadyxui.png",
        width: 1200,
        height: 630,
        alt: "Shadyx UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadyx UI",
    description: "Build sleek, beautiful UIs with Shadyx UI.",
    creator: "@anuragrbu",
    images: ["https://shadyxui.in/shadyxui.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SquigglyUnderline />
        {children}
        <Analytics />
        <Footerdemo />
      </body>
    </html>
  );
}
