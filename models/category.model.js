import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category Required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const Category = new mongoose.model("Category", categorySchema);
