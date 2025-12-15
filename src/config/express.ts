import express from "express";
import cors from "cors";
import productsController from "../controllers/kauflandProductsController.js";
import getKauflandProducts from "../controllers/kauflandProductsController.js";

export default async function start() {
  const app = express();
  app.use(cors());

  app.use("/products", getKauflandProducts);

  app.listen(3000, () => console.log("listening"));
}