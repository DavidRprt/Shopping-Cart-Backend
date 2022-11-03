const Product = require("../models/product");
import { Request, Response} from "express";

const addProduct = async (req: Request, res: Response) => {
    const requestData = req.body;
    const products = await Product.find();

    if (requestData.name != "" && requestData.price != ""){
    const singleProduct = await products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '')==requestData.name.toLowerCase().replace(/\s/g, ''));
        if (singleProduct == undefined){
        const newProduct = new Product({
            "name": requestData.name,
            "img": requestData.img,
            "genre": requestData.genre,
            "price": requestData.price
        })
            newProduct.save();
            res.send("El producto se ha agregado exitosamente");
        }
        else{
            res.send("El producto ya se encuentra en la base de datos");
        }
        }
    else{
        res.send("Se ha producido un error");
    }
        
} 
 
module.exports = addProduct; 