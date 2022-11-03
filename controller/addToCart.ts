const Cart = require("../models/cart");
const Product = require("../models/product");
import { Request, Response} from "express";


const addToCart = async (req: Request, res: Response) => {
    const productsCart = await Cart.find();
    const products = await Product.find();
    const requestData = req.body;

    const isItProducts = products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '') === requestData.name.toLowerCase().replace(/\s/g, '')); 
    const userCart = productsCart.find((obj: any) => obj.userId === requestData.username); 

    // revisamos si el producto a agregar se encuentra en la base de datos
    if(!isItProducts){
        res.send("El producto no se encuentra disponible");
    }

    // si el carrito no existe, lo creamos
    if(!userCart){
        const newCart = new Cart({
            "userId": requestData.username,
            "products": []
        })
        newCart.save();
    }

    else{
        

        // revisamos si el carrito ya cuenta con el producto agregado
        const isInCart = userCart.products.find((obj: any) => obj.productId.toLowerCase().replace(/\s/g, '') === requestData.name.toLowerCase().replace(/\s/g, '')); 
        
        // si el item esta en el carrito, no hacemos nada
        if(isInCart){
            res.send("El producto ya se encuentra en el carrito");
        }

        // si el item no esta en el carrito, lo agregamos
        else if (!isInCart){
            const orderObj = {"productId": requestData.name, "amount": requestData.amount}
            userCart.products.push(orderObj);
            userCart.save();
            res.json(productsCart);
        }
        
    }

};

module.exports = addToCart;