import fs from "fs";
import sqlite from "sqlite3";
const sql3 = sqlite.verbose();

import determineSlash from "../utils/determineSlash.js";

const dbPath = `${process.cwd()}${determineSlash}src${determineSlash}db${determineSlash}products.db`;

const initSQLQUery = `CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT,
  description TEXT,
  unitPrice TEXT,
  basePrice TEXT,
  image TEXT,
  priceTagDiscount TEXT,
  priceTag TEXT,
  oldPriceTag TEXT
)`;

const createTable = (db: sqlite.Database) => db.run(initSQLQUery);

const initDB = () => {

  if (!fs.existsSync(dbPath)) {
    const db = new sql3.Database(dbPath, (err) => {
      if (err) {
        return console.error(err.message);
      }
      createTable(db);
    })
    console.log("Database created and connections established");
    return db;
  } else {
    console.log("Connection established");
    return new sql3.Database(dbPath);
  }

}

export default initDB;