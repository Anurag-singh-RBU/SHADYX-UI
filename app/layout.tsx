import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
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
  description: "From Copy to Vibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SquigglyUnderline></SquigglyUnderline>
        {children}
        <Analytics />
        <Footerdemo></Footerdemo>
      </body>
    </html>
  );
}
