import { Response, Request } from "express";
import scrape from "../scrapers/kauflandScraper.js";

const data = await scrape();

const getKauflandProducts = async (req: Request, res: Response) => {

  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.status(204).send();
  }
}

export default getKauflandProducts;