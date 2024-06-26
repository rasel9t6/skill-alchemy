import Category from "@/lib/models/Category";
import { Course } from "@/lib/models/Course";
import { Module } from "@/lib/models/Module";
import { Testimonial } from "@/lib/models/Testimonial";
import { User } from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

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
      });

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("[courses_GET] Error fetching courses:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
