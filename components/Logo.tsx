import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/skill-alchemy.svg";
export default function Logo({ className = "" }) {
  return (
    <div className="flex items-center">
      <Image className={cn("max-w-[60px]", className)} src={logo} alt="logo" />
      <p className="font-oswald text-2xl font-bold uppercase text-charcoal">
        skill <span className="text-mint">alchemy</span>
      </p>
    </div>
  );
}
