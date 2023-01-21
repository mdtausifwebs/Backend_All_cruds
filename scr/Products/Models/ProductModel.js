const mongoose = require("mongoose");
const productmodel = new mongoose.Schema(
  {
    id_product: String,
    sku: String,
    name: String,
    price: Number,
    selling_price: Number,
    discount: Number,
    stock_status: String,
    price: String,
    quantity: String,
    status: String,
    description: String,
    fit: String,
    new_launch: String,
    color: String,
    length: String,
    material: String,
    neck: String,
    occasion: String,
    pattern: String,
    sleeve: String,
    fabric_family: String,
    category: String,
    gallery:[]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("products", productmodel);
