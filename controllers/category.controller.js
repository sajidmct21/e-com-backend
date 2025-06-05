import { asyncHandler } from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import mongoose from "mongoose";

//Create Category
export const createCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) {
    throw new ApiError(400, "Category name is required");
  }

  const categoryModel = new Category({
    categoryName,
  });
  await categoryModel.save();
  res
    .status(201)
    .json(new ApiResponse(201, "Category is created", categoryModel));
});

// Get categories
export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  if (categories.length === 0) {
    throw new ApiError(404, "Not Found");
  }
  res.status(200).json(new ApiResponse(200, "All Categories", categories));
});

// Get Category By Id
export const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let cat = await Category.findById(id);
  if (!cat) {
    throw new ApiError(400, "Not Found");
  }
  res.status(201).json(new ApiResponse(201, "Category by Id", cat));
});

// Update Category
export const updateCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let cat = await Category.findById(id);
  if (!cat) {
    throw new ApiError(400, "Not Found");
  }

  await Category.findByIdAndUpdate(id, { categoryName }, { new: true });

  res
    .status(201)
    .json(new ApiResponse(201, "Category is Updated", categoryName));
});

// Delete Category By Id
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let cat = await Category.findById(id);
  if (!cat) {
    throw new ApiError(400, "Not Found");
  }

  await Category.findByIdAndDelete(id);
  res.status(201).json(new ApiResponse(201, "Category is deleted"));
});
