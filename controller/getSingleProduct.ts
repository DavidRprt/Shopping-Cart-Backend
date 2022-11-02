const Product = require("../models/product");
import { Request, Response} from "express";

const getSingleProduct = async (req: Request, res: Response) => {
    const products = await Product.find();
    const productId = req.params.productID.toLowerCase();
    const singleProduct = await products.find((obj: any) => obj.name.toLowerCase().replace(/\s/g, '')==productId);
    if (singleProduct){
        res.json(singleProduct);
        console.log("Producto encontrado");  
    }
  
    else if (!singleProduct) {
      res.status(404).send("El producto no existe en nuestro sitio web");
    }
  };

  module.exports = getSingleProduct; 