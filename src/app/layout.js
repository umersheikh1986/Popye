"use client";
import localFont from "next/font/local";

import "./globals.css";
import { WalletProvider } from "./connectWallet";

export const popeyeFont = localFont({
  src: "./fonts/Heyam.ttf",
  variable: "--font-popeye",
  weight: "100 900",
});

export const popeye2 = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--popeye2",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body className={` antialiased bg-[#74bad4]  `}>      
          <WalletProvider>
              {children}
          </WalletProvider>
      </body>
    </html>
  );
}
