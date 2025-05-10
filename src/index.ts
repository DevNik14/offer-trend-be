import express from "express"
import { chromium } from "playwright"

const app = express();
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

app.get("/", (req, res) => {
  res.write(greet);
  res.end()
})

app.listen(3000, () => {
  console.log("listening");

})