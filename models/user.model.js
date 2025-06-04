import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is requird"],
    },
    username: {
      type: String,
      requird: [true, "username is requird"],
      unique: [true, "username is already exist please change it"],
    },
    email: {
      type: String,
      requird: [true, "Email is required"],
      unique: [true, "Email is already exist please change it"],
    },
    password: {
      type: String,
      required: [true, "Password is requird"],
    },
    role:{
      type:Schema.Types.ObjectId,
      ref:"Role"
    }
  },
  { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);
