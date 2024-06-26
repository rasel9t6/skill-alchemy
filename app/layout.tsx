import type { Metadata } from "next";
import { Inter, Poppins, Oswald } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Skill Alchemy",
  description: "Learn and practice new skills online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(oswald.className, inter.className, poppins.className)}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
