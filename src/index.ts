import runDB from "./config/db.js";
import start from "./config/express.js";

start();

runDB()
  .then(() => console.log("connected"))
  .catch(console.log);
