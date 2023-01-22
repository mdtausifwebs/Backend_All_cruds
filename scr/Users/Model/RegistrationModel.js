const mongoose = require("mongoose");

const userModer = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    cart: [],
  },
  { timestamps: true, versionKey: false }
);
module.exports = mongoose.model("Users", userModer);
