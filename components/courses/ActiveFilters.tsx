"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
export default function ActiveFilters({ filter }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* active categories */}
      {filter.categories.length > 0 &&
        filter.categories.map((category) => (
          <Button
            key={category}
            variant="ghost"
            className="h-7 gap-1 rounded-full bg-muted text-xs text-sky-700"
            onClick={() =>
              applyArrayFilter({ type: "categories", value: category })
            }
          >
            {category}
            <X className="w-3" />
          </Button>
        ))}
      {/* active prices */}
      {filter.price.length > 0 &&
        filter.price.map((price) => (
          <Button
            key={price}
            variant="ghost"
            className="h-7 gap-1 rounded-full bg-muted text-xs text-sky-700"
            onClick={() => applyArrayFilter({ type: "price", value: price })}
          >
            {price}
            <X className="w-3" />
          </Button>
        ))}
    </div>
  );
}
