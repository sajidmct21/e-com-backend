import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        categoryName:String,
        required:[true,'Category Required'],
        unique:[true,'Category already exist. Please change it']
    },
    {timestamps:true}
)

export const Category = new mongoose.model("Category", categorySchema)