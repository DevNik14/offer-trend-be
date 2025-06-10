import { chromium } from "playwright";

import { KauflandProduct } from "../types/products.js";

export default async function scrape() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.kaufland.bg/");

  await page.locator("#onetrust-accept-btn-handler").click();

  await page.goto("https://www.kaufland.bg/aktualni-predlozheniya/oferti.html?kloffer-category=0001_TopArticle/");

  await page.$$eval(".k-grid__show-more", offers => offers.forEach(offer => offer.click()));

  const allItems = await page.$$eval(".k-grid__item", items => {
    const products: Array<KauflandProduct> = [];
    items.forEach(item => {
      const name = item.querySelector(".k-product-tile__title").textContent;
      const description = item.querySelector(".k-product-tile__subtitle").textContent.replace("\n", " ");
      const unitPrice = item.querySelector(".k-product-tile__unit-price").textContent.trim();
      const basePrice = item.querySelector(".k-product-tile__base-price").textContent.slice(1, -1);
      const image = item.querySelector(".k-product-tile__image img").src
      products.push({ name, description, unitPrice, basePrice, image });
    })
    return products;
  })
  return allItems;
}