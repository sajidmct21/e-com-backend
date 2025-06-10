import mongoose from "mongoose";

const brandSchema = mongoose.Schema(
  {
    brandName: {
      type: String,
      required: [true, "Brand Name is Required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export const Brand = new mongoose.model("Brand", brandSchema);
