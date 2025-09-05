import express from "express";

import scrape from "../scrapers/kaufland-scraper.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await scrape()

  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.send("Something went wrong!");
  }
})

export default router;