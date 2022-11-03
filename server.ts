import express, { Express } from "express";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cartControllers = require("./controller/cartController");
const productControllers = require("./controller/productController");
const product = require('./models/product');
dotenv.config();

const app: Express = express();
const port = 3000

app.use(express.json());  

// Mongo DB connection
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Succesfully connected to db'))
.catch((err: any) => console.log(err));


app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get("/products", productControllers.getProducts);
app.get("/products/:productID", productControllers.getSingleProduct);
app.get("/carts", cartControllers.getCart);
app.get("/carts/:userId", cartControllers.getSingleCart); 

app.post("/cart", cartControllers.addToCart);
app.post("/products", productControllers.addProduct);

app.put("/cart/:productId/:userId/:amount?", cartControllers.changeAmount);

app.delete("/cart/delete", cartControllers.deleteFromCart);
app.delete("/products", productControllers.deleteProduct);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
 