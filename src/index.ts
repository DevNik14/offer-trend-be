import start from "./config/express.js";
import initDB from "./db/index.js";
import { saveKauflandProductsToDB } from "./services/saveKauflandProductsToDB.js";

start();
initDB();

saveKauflandProductsToDB();