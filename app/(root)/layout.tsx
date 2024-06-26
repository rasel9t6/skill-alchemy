import Navbar from "@/components/Navbar";
import React from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default AppLayout;
