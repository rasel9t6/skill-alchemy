"use server";

import { replaceMongoIdInArray, replaceMongoIdInObject } from "../convertData";
import { Category } from "../models/Category";
import { Course } from "../models/Course";
import { Module } from "../models/Module";
import { Testimonial } from "../models/Testimonial";
import { User } from "../models/User";

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
