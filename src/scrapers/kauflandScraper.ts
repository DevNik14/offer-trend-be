import { chromium } from "playwright";

import { KauflandProduct } from "../types/products.js";

export default async function scrape(): Promise<KauflandProduct[] | "Error"> {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.setDefaultTimeout(10000);

  await page.goto("https://www.kaufland.bg/");

  try {
    const consent = page.locator("#onetrust-accept-btn-handler");
    await consent.waitFor({ state: "visible", timeout: 3000 });
    await consent.click();
  } catch {
    // consent not shown; continue
  }

  await page.goto("https://www.kaufland.bg/aktualni-predlozheniya/oferti.html?kloffer-category=0001_TopArticle/");

  try {
    await page.$$eval(".k-grid__show-more", offers => offers.forEach(offer => offer.click()));
  } catch {
    // no show-more buttons found; continue
  }

  await page.waitForSelector(".k-grid__item", { state: "attached" });

  try {
    const allItems = await page.$$eval(".k-grid__item", items => {
      const products: KauflandProduct[] = [];
      items.forEach(item => {
        const titleEl = item.querySelector(".k-product-tile__title");
        const subtitlesEl = item.querySelector(".k-product-tile__subtitle");
        const unitPriceEl = item.querySelector(".k-product-tile__unit-price");
        const basePriceEl = item.querySelector(".k-product-tile__base-price");
        const discountEl = item.querySelector(".k-price-tag__discount");
        const priceEl = item.querySelector(".k-price-tag__price");
        const oldPriceEl = item.querySelector(".k-price-tag__old-price span");
        const imageEl = item.querySelector(".k-product-tile__image img");

        const name = (titleEl?.textContent || "").trim();
        const description = (subtitlesEl?.textContent || "").replace("\n", " ").trim();
        const unitPrice = (unitPriceEl?.textContent || "").trim();
        const basePriceRaw = (basePriceEl?.textContent || "").trim();
        const basePrice = basePriceRaw.length > 2 ? basePriceRaw.slice(1, -1) : basePriceRaw;
        const priceTagDiscount = (discountEl?.textContent || "").trim();
        const priceTag = (priceEl?.textContent || "").trim();
        const oldPriceTag = (oldPriceEl?.textContent || "").trim();
        const image = imageEl?.src;
        const id = (() => {
          const urlParts: string[] = image.split("/");
          const lastEl = urlParts[urlParts.length - 1]!.split("_").sort((a, b) => b.length - a.length)[0];
          return lastEl ? lastEl : "";
        })()

        products.push({ name, description, unitPrice, basePrice, image, priceTagDiscount, priceTag, oldPriceTag, id });
      })
      return products;
    })
    return allItems;
  } catch (err: any) {
    console.error("Extraction error:", err?.name || err?.message || err);
    return "Error";
  } finally {
    await context.close();
    await browser.close();
  }
}