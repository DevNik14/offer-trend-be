import { Schema, model } from "mongoose";

const productSchema = new Schema({
  _id: String,
  name: String,
  description: String,
  unitPrice: String,
  basePrice: String
});