import express from "express";
import getKauflandProducts from "../controllers/kauflandProductsController.js";

const router = express.Router();

router.get("/kaufland", getKauflandProducts)

export default router;