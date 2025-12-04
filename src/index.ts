import start from "./config/express.js";
import scrape from "./scrapers/kaufland-scraper.js";
import initDB from "./db/index.js";

start();
initDB();