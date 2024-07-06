import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "../models/Lesson";

export async function getLesson(lessonId: any) {
  const lesson = await Lesson.findById(lessonId).lean();
  return replaceMongoIdInObject(lesson);
}
