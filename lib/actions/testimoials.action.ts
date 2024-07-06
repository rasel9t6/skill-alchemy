import { replaceMongoIdInArray } from "@/lib/convertData";
import { Testimonial } from "../models/Testimonial";

export async function getTestimonialsForCourse(courseId: any) {
  const testimonials = await Testimonial.find({ courseId }).lean();
  return replaceMongoIdInArray(testimonials);
}
