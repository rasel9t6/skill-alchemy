"use server";

import { replaceMongoIdInArray } from "../convertData";
import { Category } from "../models/Category";
import { connectToDB } from "../mongoDB";

export const getCategories = async () => {
  await connectToDB();
  // Replace with actual database query to fetch categories
  const categories = await Category.find({}).lean();
  return replaceMongoIdInArray(categories);
};
