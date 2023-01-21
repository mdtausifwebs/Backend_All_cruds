const { addProduct, getProducts } = require("../Controller/AddProduct");

const routes = require("express").Router();

routes.get("/product", addProduct);
routes.get("/products", getProducts);

module.exports = routes;
