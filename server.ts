import express, { Express } from "express";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const controllers = require("./controller");
const product = require('./models/product');
dotenv.config();

const app: Express = express();
const port = 3000

app.use(express.json());  

// Mongo DB conncetion
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Succesfully connected to db'))
.catch((err: any) => console.log(err));


app.get('/', (req, res) => {
  res.send("Hello world");
})

app.get("/products", controllers.getProducts);
app.get("/products/:productID", controllers.getSingleProduct);
app.get("/carts", controllers.getCart);
app.get("/carts/:userId", controllers.getSingleCart); 

app.post("/cart", controllers.addToCart);

app.put("/cart/:productId/:userId/:amount?", controllers.changeAmount);

app.delete("/cart/delete", controllers.deleteFromCart);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
 