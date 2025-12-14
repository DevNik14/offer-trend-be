import start from "./config/express.js";
import scrape from "./scrapers/kauflandScraper.js";
import initDB from "./db/index.js";

start();
initDB();