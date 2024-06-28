import { cn } from "@/lib/utils";
import React from "react";
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}
export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2 className={cn("text-xl font-bold md:text-2xl lg:text-3xl", className)}>
      {children}
    </h2>
  );
}
