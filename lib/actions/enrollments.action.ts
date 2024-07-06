import { replaceMongoIdInArray } from "@/lib/convertData";
import { Enrollment } from "../models/Enrollment";

export async function getEnrollmentsForCourse(courseId: any) {
  const enrollments = await Enrollment.find({ course: courseId }).lean();
  return replaceMongoIdInArray(enrollments);
}
