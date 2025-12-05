import express from "express";
import cors from "cors";
import productsController from "../controllers/products-controller.js";

export default async function start() {
  const app = express();
  app.use(cors());

  app.use("/products", productsController);

  app.listen(3000, () => console.log("listening"));
}