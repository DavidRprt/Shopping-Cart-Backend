const Product = require("../models/product");
import { Request, Response} from "express";

const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  

  if (products) {
    res.json({ products });
  } else {
    res.json({ mensaje: "No hay productos" });
  }
};

module.exports = getProducts; 