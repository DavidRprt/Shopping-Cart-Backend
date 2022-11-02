import { Schema, model } from "mongoose";

const CartSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        amount: { type: Number, default: 1 }
      },
    ],
});

module.exports = model("carts", CartSchema); 