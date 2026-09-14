import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InteractiveGrid } from "@/components/ui/InteractiveGrid";
//import { InteractiveGrid } from "@/components/ui/InteractiveGrid";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tameer Khan — Frontend Engineer",
  description:
    "Frontend Engineer building modern web applications with React, Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
        
<InteractiveGrid/>


        {children}
      </body>
    </html>
  );
}