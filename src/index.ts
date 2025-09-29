import start from "./config/express.js";
import db from "./config/db.js";
import scrape from "./scrapers/kaufland-scraper.js";

start();
console.log(db);


// runDB()
//   .then(() => console.log("connected"))
//   .catch(console.log);