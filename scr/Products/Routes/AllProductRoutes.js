// const { isAuths } = require("../../middleware/IsAuths");
const {
  getProducts,
  getAllProducts,
  getProductId,
} = require("../Controller/getproductdata");
const { filterPrice } = require("../Controller/SortingController");

const routes = require("express").Router();
routes.get("/productsall", getAllProducts);
routes.get("/products", getProducts);
routes.get("/product/:id", getProductId);
routes.get("/products/filterPrice", filterPrice);

module.exports = routes;
