import { chromium } from "playwright";

export default async function scrape() {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.kaufland.bg/");

  await page.locator("#onetrust-accept-btn-handler").click();

  await page.goto("https://www.kaufland.bg/aktualni-predlozheniya/oferti.html?kloffer-category=0001_TopArticle/");


  await page.$$eval(".k-grid__show-more", offers => offers.forEach(offer => offer.click()))

  const allItems = await page.$$eval(".k-grid__item", items => {
    const titles: string[] = [];
    items.forEach(item => {
      const itemTitle = item.querySelector(".k-product-tile__title").textContent;
      titles.push(itemTitle);
    })
    return titles;
  })



}