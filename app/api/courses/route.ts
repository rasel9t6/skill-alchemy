import { Course } from "@/lib/models/Course";
import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectToDB();

    const courses = await Course.find();

    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("[courses_GET] Error fetching courses:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
