const Product = require("../models/product");
import { Request, Response} from "express";

const deleteProduct = async (req: Request, res: Response) => {
    const requestData = req.body;
    const products = await Product.find();
    

    const product = products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '') === requestData.name.toLowerCase().replace(/\s/g, '')); 
    if (product){
        product.deleteOne({ _id: product._id });
        res.json("El producto se ha eliminado");
    }

    else{
        res.json("El producto no existe");
    }

        
}
 
module.exports = deleteProduct; 