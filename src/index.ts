import start from "./config/express.js";
import { saveKauflandProductsToDB } from "./services/saveKauflandProductsToDB.js";

start();

saveKauflandProductsToDB();