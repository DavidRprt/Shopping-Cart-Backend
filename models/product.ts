import { Schema, model } from "mongoose";

const productsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  desc: { type: String, required: false},
  genre: { type: String, required: false },
  price: { type: Number, required: true },
});

module.exports = model("products", productsSchema);