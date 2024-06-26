import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
