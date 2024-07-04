import Category from "@/lib/models/Category";
import { Course } from "@/lib/models/Course";
import { Module } from "@/lib/models/Module";
import { Testimonial } from "@/lib/models/Testimonial";
import { User } from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectToDB();

    const course = await Course.findById(params.id)
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

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json(console.log(course), { status: 200 });
  } catch (error) {
    console.error("[courses_GET] Error fetching course:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
