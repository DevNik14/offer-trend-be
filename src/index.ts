import connectToCloudinary from "./config/cloudinary.js";
import runDB from "./config/db.js";
import start from "./config/express.js";
import scrape from "./scrapers/kaufland-scraper.js";

start();

runDB()
  .then(() => console.log("connected"))
  .catch(console.log);

connectToCloudinary();