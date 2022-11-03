const Cart = require("../models/cart");
const Product = require("../models/product");
import { Request, Response} from "express";

const addProduct = async (req: Request, res: Response) => {
    const requestData = req.body;

    if (requestData.name != "" && requestData.price != ""){
    const newProduct = new Product({
        "name": requestData.name,
        "img": requestData.img,
        "genre": requestData.genre,
        "price": requestData.price
    })
        newProduct.save();
        res.json("El producto se ha agregado exitosamente");
    }
    else{
        res.json("Se ha producido un error");
    }
        
}
 
module.exports = addProduct; 