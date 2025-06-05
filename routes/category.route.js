import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.post("/createCategory", createCategory);
router.put("/updateCategory/:id", updateCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/getCategoryById/:id", getCategoryById);
router.delete("/deleteCategory/:id", deleteCategory);

export default router;
