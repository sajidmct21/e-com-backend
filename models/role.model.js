import mongoose, { model } from "mongoose";

const roleSchema = mongoose.Schema(
  {
    roleName: {
      type: String,
      required: [true,'Role name is required']
    },
  },
  { timestamps: true }
);

export const Role = new model("Role", roleSchema);

