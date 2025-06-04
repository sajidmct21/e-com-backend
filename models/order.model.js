import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    date: {
      type: Date,
    },
    items: {
      type: Array(any),
      required: [true, "Minimum one item is required for order"],
    },
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Order = new mongoose.model("Order", orderSchema);
