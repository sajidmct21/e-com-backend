import { Product } from "../models/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import mongoose from "mongoose";

// Create Product
export const createProduct = asyncHandler(async (req, res) => {
  const {
    productName,
    shortDescription,
    description,
    purchasePrice,
    discount,
    images,
    categoryId,
  } = req.body;

  if (!productName) {
    throw new ApiError(400, "Product name is required");
  }

  let p = await Product.findOne({ productName });
  if (p) {
    throw new ApiError(400, "Product already exsist");
  }
  if (!purchasePrice) {
    throw new ApiError(400, "Purchase price is required");
  }
  let model = new Product({ ...req.body });
  await model.save();
  res.status(201).json(new ApiResponse(201, `Product is created`, model));
});

// Get All Products
export const getAllProducts = asyncHandler(async (req, res) => {
  const productList = await Product.find();
  if (productList.length === 0) {
    throw new ApiError(404, "No product to display");
  }
  res.status(200).json(new ApiResponse(200, "All Products", productList));
});

// Get product by id
export const getProductById = asyncHandler(async (req, res) => {
  let { id } = req.params;
  // console.log(id);
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "No product to find");
  }
  res
    .status(200)
    .json(new ApiResponse(200, "Product with the given id", product));
});

// Update product
export const updateProduct = asyncHandler(async (req, res) => {
  let { id } = req.params;
  let model = new Product({
    ...req.body,
  });
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Id is invalid");
  }
  let product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product is not found");
  }

  await Product.findByIdAndUpdate(id, { ...req.body }, { new: true });
  res.status(200).json(new ApiResponse(200, "Product is updated", model));
});

// Delete Product
export const deleteProduct = asyncHandler(async (req, res) => {
  let { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Given id is not valid");
  }

  let product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, "Product is not found");
  }
  await Product.findByIdAndDelete(id);
  res.status(200).json(new ApiResponse(200, "Product is deleted"));
});
