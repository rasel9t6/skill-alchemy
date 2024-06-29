import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight } from "lucide-react";

import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
interface Course {
  id: string;
  thumbnail: string;
  title: string;
  category: {
    title: string;
  };
  modules: {
    length: number;
  }[];
  price: number;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { id, thumbnail, title, category, modules, price } = course;
  console.log(thumbnail);
  const defaultImg = 'course_1.png';
  return (
    <Link key={id} href={`/courses/${id}`}>
      <div className="group h-full overflow-hidden rounded-lg border p-3 transition hover:shadow-sm">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={
              thumbnail === defaultImg
                ? `/assets/images/courses/${thumbnail}`
                : "/assets/images/courses/course_1.png"
            }
            alt={title}
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category?.title}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <div>
                <BookOpen className="w-4" />
              </div>
              <span>{modules?.length} Chapters</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-md font-medium text-slate-700 md:text-sm">
              {formatPrice(price)}
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
