import { data } from "../controllers/kauflandProductsController.js";
import { KauflandProduct } from "../types/products.js";

const constructSQLStatement = () => {
  const productKeys = Object.keys(data[0] as KauflandProduct);
  const productColumnNames = productKeys.join(", ");
  const parameterPlaceholders = productKeys.map(p => "?").join(",");

  return `INSERT INTO products(${productColumnNames}) VALUES(${parameterPlaceholders})`;
}

export function saveKauflandProductsToDB() {
  if (data !== "Error") {

    const sql = constructSQLStatement();

  }
}
