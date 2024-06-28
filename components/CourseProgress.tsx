import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface ProgressProps {
  value: number;
  variant?: "default" | "success"; // Limit the variants to specific strings
  size?: "default" | "sm"; // Limit the sizes to specific strings
}

const colorByVariant: { [key: string]: string } = {
  default: "bg-sky-700",
  success: "bg-green-500",
};

const sizeByVariant: { [key: string]: string } = {
  default: "h-2",
  sm: "h-1",
};

export default function CourseProgress({
  value,
  variant = "default", // Set default variant
  size = "default", // Set default size
}: ProgressProps) {
  return (
    <div>
      <Progress
        value={value}
        className={cn(sizeByVariant[size], colorByVariant[variant])}
      />
      <p
        className={cn(
          "mt-2 font-medium",
          colorByVariant[variant],
          sizeByVariant[size],
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
}
