import type React from "react";
import type { Metadata } from "next";
import {
  Lora,
  Roboto,
  DM_Serif_Display,
  Solway,
  Playfair_Display,
  Dancing_Script,
} from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});

const solway = Solway({
  variable: "--font-solway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Molecor - PVC-O Pipes and Fittings",
  description:
    "High-quality PVC-O pipes and fittings for water distribution and irrigation systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${lora.variable} ${roboto.variable} ${dmSerifDisplay.variable} ${solway.variable} ${playfairDisplay.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
