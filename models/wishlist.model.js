import mongoose, { Schema } from "mongoose";

const wishlistSchema = mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    productsId: {
      type: Array(String),
    },
  },
  { timestamps: true }
);

export const Wishlist = new mongoose.model("Wishlist", wishlistSchema);
