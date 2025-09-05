import express from "express";
import userController from "../controllers/user-controller.js";
import homeController from "../controllers/home-controller.js"
import productsController from "../controllers/products-controller.js";


export default async function start() {
  const app = express();

  app.use("/", homeController)

  app.use("/user", userController);

  app.use("/products", productsController);

  app.listen(3000, () => console.log("listening"))
}