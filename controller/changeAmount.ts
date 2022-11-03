const Cart = require("../models/cart");
const Product = require("../models/product");
import { Request, Response} from "express";

const changeAmount = async (req: Request, res: Response) => {
  const productsCart = await Cart.find();
  const products = await Product.find();

  const userId = req.params.userId.toLowerCase();
  const productId = req.params.productId.toLowerCase();
  const amount = parseInt(req.params.amount) || 1;

  const isItProducts = products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '') === productId.toLowerCase().replace(/\s/g, '')); 
  const userCart = productsCart.find((obj: any) => obj.userId.toLowerCase() === userId.toLowerCase()); 
  const isInCart = userCart.products.find((obj: any) => obj.productId.toLowerCase().replace(/\s/g, '') === productId.toLowerCase().replace(/\s/g, '')); 

  if(!isItProducts){
    res.send("El producto no se encuentra disponible");
 }

  else if(!isInCart){
    res.send("El producto no se encuentra en el carrito");
 }

 else{
    const singleProduct = userCart.products.find((obj: any) => obj.productId.toLowerCase().replace(/\s/g, '') === productId.toLowerCase().replace(/\s/g, '')); 
    if (singleProduct.amount + amount >= 1){
        singleProduct.amount +=  amount;
        userCart.save();
        res.json(userCart);
    }
    else{
        res.send("No se cuentan con los suficientes elementos en el carrito para eliminar");
    }
    
 }

  
};

module.exports = changeAmount;