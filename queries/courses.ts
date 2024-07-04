import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";

// import { getEnrollmentsForCourse } from "./enrollments";
// import { getTestimonialsForCourse } from "./testimonials";
import Category from "@/lib/models/Category";
import { Course } from "@/lib/models/Course";
import { Testimonial } from "@/lib/models/Testimonial";

import { Module } from "@/lib/models/Module";
import { User } from "@/lib/models/User";


export async function getCourseList() {
  const courses = await Course.find({})
    .select([
      "title",
      "subtitle",
      "thumbnail",
      "modules",
      "price",
      "category",
      "instructor",
    ])
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .lean();
  return replaceMongoIdInArray(courses);
}

export async function getCourseDetails(id:string) {
  const course = await Course.findById(id)
    .populate({
      path: "category",
      model: Category,
    })
    .populate({
      path: "instructor",
      model: User,
    })
    .populate({
      path: "testimonials",
      model: Testimonial,
      populate: {
        path: "user",
        model: User,
      },
    })
    .populate({
      path: "modules",
      model: Module,
    })
    .lean();

  return replaceMongoIdInObject(course);
}

// export async function getCourseDetailsByInstructor(instructorId:string) {
//   const courses = await Course.find({ instructor: instructorId }).lean();

//   const enrollments = await Promise.all(
//     courses.map(async (course:any) => {
//       const enrollment = await getEnrollmentsForCourse(course._id.toString());
//       return enrollment;
//     }),
//   );

//   const totalEnrollments = enrollments.reduce((item, currentValue) => {
//     return item.length + currentValue.length;
//   });

//   const testimonials = await Promise.all(
//     courses.map(async (course) => {
//       const testimonial = await getTestimonialsForCourse(course._id.toString());
//       return testimonial;
//     }),
//   );

//   const totalTestimonials = testimonials.flat();
//   const avgRating =
//     totalTestimonials.reduce(function (acc, obj) {
//       return acc + obj.rating;
//     }, 0) / totalTestimonials.length;

//   //   console.log("testimonials", totalTestimonials, avgRating);

//   return {
//     courses: courses.length,
//     enrollments: totalEnrollments,
//     reviews: totalTestimonials.length,
//     ratings: avgRating.toPrecision(2),
//   };
// }