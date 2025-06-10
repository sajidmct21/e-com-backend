import express from "express";
import { createBrand, deleteBrand, getAllBrands, getBrandById, updateBrand } from "../controllers/brand.contoller.js";


const router = express.Router();

router.post("/createBrand", createBrand);
router.put("/updateBrand/:id", updateBrand);
router.get("/getAllBrands", getAllBrands);
router.get("/getBrandById/:id", getBrandById);
router.delete("/deleteBrand/:id", deleteBrand);

export default router;
