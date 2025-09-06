import express from "express";

import scrape from "../scrapers/kaufland-scraper.js";

const router = express.Router();

router.get("/kaufland", async (req, res) => {
  const data = await scrape()

  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.status(404).send("No products at this times");
  }
})

export default router;