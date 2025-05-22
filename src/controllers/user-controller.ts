import User from "../models/User.js";
import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await User.findOne({ name: "Pesho" });
  res.send(user);
})

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  const name = userId.split("").map((char, i) => (
    i === 0 ? char.toUpperCase() : char
  )).join("");
  const user = await User.findOne({ name });
  // res.send("User")
  // res.send(user);
  res.json(user)
})

export default router;