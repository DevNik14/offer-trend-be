import start from "./config/express.js";
import db from "./config/db.js";
import scrape from "./scrapers/kaufland-scraper.js";
import startDB from "./db/index.js";

start();
startDB();

// runDB()
//   .then(() => console.log("connected"))
//   .catch(console.log);