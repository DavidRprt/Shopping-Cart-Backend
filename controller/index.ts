const getProducts = require("./getProducts");
const getCart = require("./getCart")
const getSingleProduct = require("./getSingleProduct");
const addToCart = require("./addToCart");
const deleteFromCart = require("./deleteFromCart");
const getSingleCart = require("./getSingleCart");
const changeAmount = require("./changeAmount");
const addProduct = require("./addProducts");
const deleteProduct = require("./deleteProduct");

module.exports = {
  getProducts,
  getCart,
  getSingleProduct,
  addToCart,
  deleteFromCart,
  getSingleCart,
  changeAmount,
  addProduct,
  deleteProduct
};