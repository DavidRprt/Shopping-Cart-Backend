const Cart = require("../models/cart");
const Product = require("../models/product");
import { Request, Response} from "express";

const getSingleCart = async (req: Request, res: Response) => {
    const productsCart = await Cart.find();
    const products = await Product.find();

    const userId = req.params.userId.toLowerCase();
    const user = await productsCart.find((obj: any) => obj.userId.toLowerCase().replace(/\s/g, '')==userId);
    if (user){
      // obteniendo el valor total del carrito
      const userCart = user.products;
      let totalPrice = 0
      for (let i = 0; i < userCart.length; i++) { 
        const name = userCart[i].productId.toLowerCase().replace(/\s/g, '');
        const amount = userCart[i].amount;
        const productPrice = await products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '')==name).price;
        totalPrice += amount * productPrice;
      }
      res.json(user);
      // imprimimos el precio total del carrito
      console.log(totalPrice);
    }
  
    else if (!user) {
      res.status(404).send("El usuario no existe");
    }
  };

  module.exports = getSingleCart; 