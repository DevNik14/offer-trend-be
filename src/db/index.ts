import fs from "fs";
import Database from "better-sqlite3";

import determineSlash from "../utils/determineSlash.js";

const dbPath = `${process.cwd()}${determineSlash}src${determineSlash}db${determineSlash}products.db`;

const initSQLQUery = `CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT,
  unitPrice TEXT,
  basePrice TEXT,
  image TEXT,
  priceTagDiscount TEXT,
  priceTag TEXT,
  oldPriceTag TEXT
)`;


const initDB = () => {
  let db;
  if (!fs.existsSync(dbPath)) {
    db = new Database(dbPath, { verbose: console.log });
    db.exec(initSQLQUery);
    console.log("Table created");
  }
  db = new Database(dbPath, { verbose: console.log, fileMustExist: true });
  console.log("Connected to database");
  return db;
}

export default initDB;