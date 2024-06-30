import { Accordion } from "@/components/ui/accordion";
import { BookCheck, Clock10 } from "lucide-react";
import CourseModule from "./courseModule/CourseModule";

export default function CourseCurriculum({ course }) {
  const totalDuration = course?.modules.reduce(function (acc, obj) {
    return acc + obj.duration;
  }, 0);
  return (
    <>
      <div className="mb-6 mt-4 flex flex-wrap items-center justify-center gap-x-5 text-sm text-gray-600">
        <span className="flex items-center gap-1.5">
          <BookCheck className="size-4" />
          {course?.modules?.length} Chapters
        </span>
        <span className="flex items-center gap-1.5">
          <Clock10 className="size-4" />
          {(totalDuration / 60).toPrecision(2)} Hours
        </span>
      </div>

      {/* contents */}
      <Accordion
        defaultValue={["item-1", "item-2", "item-3"]}
        type="multiple"
        collapsible
        className="w-full"
      >
        {course?.modules &&
          course?.modules.map((module: any, i: number) => (
            <CourseModule module={module} key={i} />
          ))}
      </Accordion>
    </>
  );
}
