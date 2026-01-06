import fs from "fs";
import Database from "better-sqlite3";

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


const initDB = () => {

  console.log("Not implemented");

}

export default initDB;