import mongoose, { Schema } from "mongoose";

const cartSchema = mongoose.Schema(
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

export const Cart = new mongoose.model("Cart", cartSchema);
