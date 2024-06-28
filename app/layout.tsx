import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Poppins, EB_Garamond } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["600", "700", "800"],
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
        className={cn(garamond.variable, inter.className, poppins.variable)}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
