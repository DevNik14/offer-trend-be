import express from "express";
import cors from "cors";
import userController from "../controllers/user-controller.ts";
import homeController from "../controllers/home-controller.ts"
import productsController from "../controllers/products-controller.ts";

export default async function start() {
  const app = express();
  app.use(cors());

  app.use("/", homeController)

  app.use("/user", userController);

  app.use("/products", productsController);

  app.listen(3000, () => console.log("listening"))
}