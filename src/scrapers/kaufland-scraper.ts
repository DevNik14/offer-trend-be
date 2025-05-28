import { chromium } from "playwright";

export default async function scrape() {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.kaufland.bg/");

  await page.locator("#onetrust-accept-btn-handler").click();

  await page.goto("https://www.kaufland.bg/aktualni-predlozheniya/oferti.html?kloffer-category=0001_TopArticle/");

  await page.$$eval(".k-grid__show-more", offers => offers.forEach(offer => offer.click()));

  const allItems = await page.$$eval(".k-product-tile", items => {
    const products: Array<{}> = [];
    items.forEach(item => {
      const name = item.querySelector(".k-product-tile__title").textContent;
      const description = item.querySelector(".k-product-tile__subtitle").textContent;
      const unitPrice = item.querySelector(".k-price-tag__price").textContent;
      const basePrice = item.querySelector(".k-product-tile__base-price").textContent;
      products.push({ name, description, unitPrice, basePrice });
    })
    return products;
  })

  console.log(allItems[1]);

  await browser.close();
}