import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";

import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
export default function CourseCard({ course }) {
  return (
    <Link key={course.id} href={`/courses/${course.id}`}>
      <div className="group h-full overflow-hidden rounded-lg border p-3 transition hover:shadow-sm">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={`/assets/images/courses/${course?.thumbnail}`}
            alt={course?.title}
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base">
            {course?.title}
          </div>
          <p className="text-xs text-muted-foreground">
            {course?.category?.title}
          </p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <div>
                <BookOpen className="w-4" />
              </div>
              <span>{course?.modules?.length} Chapters</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-md font-medium text-slate-700 md:text-sm">
              {formatPrice(course?.price)}
            </p>

            <Button variant="ghost" className="h-7 gap-1 text-xs text-sky-700">
              Enroll
              <ArrowRight className="w-3" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
