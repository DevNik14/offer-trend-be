import express from "express";

export default async function start() {
  const app = express();

  app.get("/", (req, res) => {
    res.write("Hello, Node! <3");
    res.end()
  })

  app.listen(3000, () => console.log("listening"))
}