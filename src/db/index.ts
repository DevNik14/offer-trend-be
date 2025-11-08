import sqlite from "sqlite3";
const sql3 = sqlite.verbose();

import determineSlash from "../utils/determineSlash.js";

const startDB = async () => {

  const db = new sql3.Database(`${process.cwd()}${determineSlash}src${determineSlash}db${determineSlash}products.db`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      db.run(
        `CREATE TABLE IF NOT EXISTS products (
          id TEXT PRIMARY KEY,
          name TEXT,
          description TEXT,
          unitPrice TEXT,
          basePrice TEXT,
          image TEXT,
          priceTagDiscount TEXT,
          priceTag TEXT,
          oldPriceTag TEXT
        )`,
        (err) => {
          if (err) {
            console.error(err.message);
            return
          }
          console.log("Table created");
        }
      );
    }
  })
}

export default startDB;