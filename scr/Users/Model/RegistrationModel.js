const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usermodel = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    cart: [],
  },
  { timestamps: true, versionKey: false }
);
Usermodel.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, process.env.SALT);
  }
  next();
});
Usermodel.methods.matchPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
Usermodel.methods.GenrateToken = function () {
  return jwt.sign({_id:this._id},process.env.JWTSECTRETKEY)
};
module.exports = mongoose.model("Userslist", Usermodel);
