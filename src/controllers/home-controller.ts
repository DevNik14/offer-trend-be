
import { chromium } from "playwright"

import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  let greet: string | undefined = "";
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://playwright.dev/");

  const heading: string[] = await page.locator(".hero__title").allTextContents();
  if (heading.length > 0) {
    greet = heading[0]
  } else {
    greet = "hello"
  }
  console.log(heading);


  await context.close();
  await browser.close();

  res.send(greet);
})

export default router;