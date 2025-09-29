import sqlite from "sqlite3";
const sql3 = sqlite.verbose();

const db = new sql3.Database(":memory:", sqlite.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, title TEXT, content TEXT)', (err) => {
      if (err) {
        console.error(err.message);
        return
      }
      console.log("Table created");
    });
  }
})

export default db;