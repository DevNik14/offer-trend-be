import express from "express";
import userController from "../controllers/user-controller.js";
import homeController from "../controllers/home-controller.js"


export default async function start() {
  const app = express();

  // app.get("/", (req, res) => {
  //   res.send("Hello, Node! <3")
  // })

  app.use("/", homeController)

  app.use("/user", userController);

  app.listen(3000, () => console.log("listening"))
}