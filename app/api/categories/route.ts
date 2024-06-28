import { replaceMongoIdInArray } from "@/lib/converData";
import Category from "@/lib/models/Category";
import { connectToDB } from "@/lib/mongoDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const categories = await Category.find().lean();
    return NextResponse.json(replaceMongoIdInArray(categories), { status: 200 });
  } catch (error) {
    console.error("[categories_GET] Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
