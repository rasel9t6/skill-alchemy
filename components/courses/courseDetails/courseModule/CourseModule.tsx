import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Video } from "lucide-react";

export default function CourseModule({ module }) {
  return (
    <AccordionItem className="border-none" value="item-1">
      <AccordionTrigger>{module?.title}</AccordionTrigger>
      <AccordionContent>
        {/* header */}
        <div className="mb-6 mt-4 flex flex-wrap items-center gap-x-5 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <Video className="size-4" />
            {(module?.duration / 60).toPrecision(2)} Hours
          </span>
        </div>
        {/* header ends */}

        <div className="space-y-3">
          {module?.lessonIds &&
            module?.lessonIds.map((lessonId) => (
              <CourseLessonList lessonId={lessonId} />
            ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
