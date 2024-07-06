"use server";

import { replaceMongoIdInArray, replaceMongoIdInObject } from "../convertData";
import { Category } from "../models/Category";
import { Course } from "../models/Course";
import { Module } from "../models/Module";
import { Testimonial } from "../models/Testimonial";
import { User } from "../models/User";
import { getEnrollmentsForCourse } from "./enrollments.action";
import { getTestimonialsForCourse } from "./testimoials.action";

export const getCourses = async () => {
  const courses = await Course.find()
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
};

export const getCourseDetails = async (id: string) => {
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
};
export async function getCourseDetailsByInstructor(instructorId:any) {
  const courses = await Course.find({ instructor: instructorId }).lean();

  const enrollments = await Promise.all(
    courses.map(async (course) => {
      const enrollment = await getEnrollmentsForCourse(course._id.toString());
      return enrollment;
    }),
  );

  const totalEnrollments = enrollments.reduce((item, currentValue) => {
    return item.length + currentValue.length;
  });

  const testimonials = await Promise.all(
    courses.map(async (course) => {
      const testimonial = await getTestimonialsForCourse(course._id.toString());
      return testimonial;
    }),
  );

  const totalTestimonials = testimonials.flat();
  const avgRating =
    totalTestimonials.reduce(function (acc, obj) {
      return acc + obj.rating;
    }, 0) / totalTestimonials.length;

  // console.log("testimonials", totalTestimonials, avgRating);

  return {
    courses: courses.length,
    enrollments: totalEnrollments,
    reviews: totalTestimonials.length,
    ratings: avgRating.toPrecision(2),
  };
}
