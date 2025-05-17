import express from "express"
import { chromium } from "playwright"

import runDB from "./config/db.js";
import start from "./config/express.js";

const app = express();

start();

runDB()
  .then(() => console.log("connected"))
  .catch(console.log);

let greet: string | undefined = "";

(async () => {
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
})();
