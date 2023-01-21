const express = require("express");
require("dotenv").config({ path: "./databse/.env" });
const db = require("./databse/db");
const app = express();
app.use(express.json());

const productRoutes = require("./scr/Products/Routes/AllProductRoutes");

app.use("/api/v1", productRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    allRoutes: {
      message: "all end point hers key method value endpoint",
      getproducts: "/api/v1/products?size=4&page=1",
      getproductbyid: "/app/v1/product/:id",
      postproductid: "/app/v1/product/:cart",
    },
  });
});

app.listen(process.env.PORT, async () => {
  await db();
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
