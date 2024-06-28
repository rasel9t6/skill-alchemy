import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/skill-alchemy.svg";
export default function Logo({ className = "" }) {
  return (
    <div className="flex items-center">
      <Image className={cn("max-w-[50px]", className)} src={logo} alt="logo" />
      <p className="font-garamond text-2xl font-extrabold tracking-wider text-charcoal">
        Skill<span className="text-mint">Alchemy</span>
      </p>
    </div>
  );
}
