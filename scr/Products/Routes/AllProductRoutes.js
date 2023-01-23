// const { isAuths } = require("../../middleware/IsAuths");
const {
  getProducts,
  getAllProducts,
  getProductId,
} = require("../Controller/getproductdata");
const {
  filterPrice,
  filterDiscount,
  filtersubCategory,
} = require("../Controller/SortingController");

const routes = require("express").Router();
routes.get("/productsall", getAllProducts);
routes.get("/products", getProducts);
routes.get("/product/:id", getProductId);
routes.get("/products/filterPrice", filterPrice);
routes.get("/products/filterdiscount", filterDiscount);
routes.get("/products/filtersubcategory", filtersubCategory);

module.exports = routes;
