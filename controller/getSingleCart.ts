const Cart = require("../models/cart");
import { Request, Response} from "express";

const getSingleCart = async (req: Request, res: Response) => {
    const productsCart = await Cart.find();
    const userId = req.params.userId.toLowerCase();
    const user = await productsCart.find((obj: any) => obj.userId.toLowerCase().replace(/\s/g, '')==userId);
    if (user){
        res.json(user);
    }
  
    else if (!user) {
      res.status(404).send("El usuario existe");
    }
  };

  module.exports = getSingleCart; 