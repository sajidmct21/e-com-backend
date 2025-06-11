import mongoose, { Schema } from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      unique: [true, "Product name is already exist. Please change it"],
    },
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    purchasePrice: {
      type: Number,
      required: [true, "Purchase price is required"],
    },
    discount: {
      type: Number,
    },
    images: {
      type: Array(String),
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export const Product = new mongoose.model("Product", productSchema);
