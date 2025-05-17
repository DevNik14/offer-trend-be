import { connect } from "mongoose";
import dotenv from "dotenv";

async function runDB() {
  dotenv.config();

  await connect(process.env.DB_CONN_STRING!);
}

export default runDB;