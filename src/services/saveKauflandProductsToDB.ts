import initDB from "../db/index.js";
import { data } from "../controllers/kauflandProductsController.js";
import { KauflandProduct } from "../types/products.js";
import { SqliteError } from "better-sqlite3";

const db = initDB();

const constructSQLStatement = () => {
  const productKeys = Object.keys(data[0] as KauflandProduct);
  const productColumnNames = productKeys.join(", ");
  const parameterPlaceholders = productKeys.map(p => `@${p}`).join(",");

  return `INSERT INTO products(${productColumnNames}) VALUES(${parameterPlaceholders})`;
}

export function saveKauflandProductsToDB() {
  if (data !== "Error") {
    claerDB();
    const sql = constructSQLStatement();
    try {
      const insert = db.prepare(sql);
      const insetMany = db.transaction((products: KauflandProduct[]) => {
        for (const product of products) insert.run(product);
      })

      insetMany(data);

    } catch (e) {
      if (e instanceof SqliteError) {
        console.log(e);
        throw e;
      }
    }
  }
}

function claerDB() {
  const claerDB = db.prepare("DELETE FROM products");
  claerDB.run();
}