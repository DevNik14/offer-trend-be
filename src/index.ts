import runDB from "./config/db.ts";
import start from "./config/express.ts";

start();

// runDB()
//   .then(() => console.log("connected"))
//   .catch(console.log);