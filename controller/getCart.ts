const Cart = require("../models/cart");
import { Request, Response} from "express";

const getCart = async (req: Request, res: Response) => {
  const productsCart = await Cart.find();

  if (productsCart) {
    res.json({ productsCart });
    console.log("El carrito se ha obtenido")
  } else {
    res.json("No hay productos en el carrito");
  }
};

module.exports = getCart;