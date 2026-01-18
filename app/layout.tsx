import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import CursorFollower from "../components/CursorFollower";
import BackgroundGlow from "../components/BackgroundGlow";
import Navbar from "../components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Irice | Portfolio",
  description: "Portfolio interactif et humoristique dédié à Irice.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} bg-white font-sans text-slate-900 antialiased md:cursor-none`}
      >
        <BackgroundGlow />
        <CursorFollower />
        <div className="pointer-events-none fixed left-0 right-0 top-0 z-30 flex justify-center px-4 pt-4">
          <div className="pointer-events-auto w-full max-w-6xl">
            <Navbar />
          </div>
        </div>
        <div className="relative z-10 pt-28">{children}</div>
      </body>
    </html>
  );
}
