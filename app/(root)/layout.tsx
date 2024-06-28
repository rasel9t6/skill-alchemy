import Footer from "@/components/Footer";
import MainNav from "@/components/navbar/MainNav";

import React from "react";
const navLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-40 border-b bg-background/60 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main className="flex flex-1 flex-col pt-20">{children}</main>
      <Footer />
    </div>
  );
}
