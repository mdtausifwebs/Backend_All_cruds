const {  getProducts, getAllProducts } = require("../Controller/getproductdata");

const routes = require("express").Router();
routes.get("/productsall", getAllProducts);
routes.get("/products", getProducts);

module.exports = routes;
