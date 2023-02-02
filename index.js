const express = require("express");
const cors = require("cors");
const db = require("./databse/db");
const app = express();
const cookiesParser = require("cookie-parser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./.env" });
}
const productRoutes = require("./scr/Products/Routes/AllProductRoutes");
const googleRoute = require("./scr/Users/Routes/GoogleRoute");
const userRoutes = require("./scr/Users/Routes/RegistrationRoutes");
app.use("/api/v1", productRoutes);
app.use("/api/v1", googleRoute);
app.use("/api/v1", userRoutes);
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     allRoutes: {
//       message: "all end point hers key method value endpoint",
//       getproducts: "/api/v1/products?size=4&page=1",
//       getproductbyid: "/app/v1/product/:id",
//       postproductid: "/app/v1/product/:cart",
//     },
//   });
// });

app.listen(process.env.PORT, async () => {
  await db();
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
