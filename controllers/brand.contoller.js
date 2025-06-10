import { asyncHandler } from "../utils/asyncHandler.js";
import { Brand } from "../models/brand.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import mongoose from "mongoose";

//Create brand
export const createBrand = asyncHandler(async (req, res) => {
  const { brandName } = req.body;
  if (!brandName) {
    throw new ApiError(400, "Brand name is required");
  }

  const brandModel = new Brand({
    brandName,
  });
  await brandModel.save();
  res
    .status(201)
    .json(new ApiResponse(201, "Brand is created", brandModel));
});

// Get brands
export const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find();
  if (brands.length === 0) {
    throw new ApiError(404, "Not Found");
  }
  res.status(200).json(new ApiResponse(200, "All Brands", brands));
});

// Get brand By Id
export const getBrandById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let brand = await Brand.findById(id);
  if (!brand) {
    throw new ApiError(400, "Not Found");
  }
  res.status(201).json(new ApiResponse(201, "Brand by Id", brand));
});

// Update brand
export const updateBrand = asyncHandler(async (req, res) => {
  const { brandName } = req.body;
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let brand = await Brand.findById(id);
  if (!brand) {
    throw new ApiError(400, "Not Found");
  }

  await Brand.findByIdAndUpdate(id, { brandName }, { new: true });

  res
    .status(201)
    .json(new ApiResponse(201, "Brand is Updated", brandName));
});

// Delete brand By Id
export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (id === null || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let brand = await Brand.findById(id);
  if (!brand) {
    throw new ApiError(400, "Not Found");
  }

  await Brand.findByIdAndDelete(id);
  res.status(201).json(new ApiResponse(201, "Brand is deleted"));
});
