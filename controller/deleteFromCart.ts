const Cart = require("../models/cart");
const Product = require("../models/product");
import { Request, Response} from "express";

const deleteFromCart = async (req: Request, res: Response) => {
    const productsCart = await Cart.find();
    const products = await Product.find();
    const requestData = req.body;
  
    const userCart = productsCart.find((obj: any) => obj.userId === requestData.username);
    const isInCart = userCart.products.find((obj: any) => obj.productId.toLowerCase().replace(/\s/g, '') === requestData.name.toLowerCase().replace(/\s/g, ''));
    // primero revisamos si el usuario cuenta con un carrito
    if(!userCart){
        res.json("El usuario no cuenta con ningun carrito");
    }

    else{
        // revisamos si el producto se encuentra en el carrito
        if(!isInCart){
            res.json("El producto no se encuentra en el carrito");
        }
        // si el producto se encuentra en el carrito, lo eliminamos
        else{
            const arrIndex = userCart.products.findIndex((obj: any) => obj.productId.toLowerCase().replace(/\s/g, '') === requestData.name.toLowerCase().replace(/\s/g, ''));
            userCart.products.splice(arrIndex, 1);
            userCart.save();
            res.json(userCart.products);
        }

    }
}

module.exports = deleteFromCart;