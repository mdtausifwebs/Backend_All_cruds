
const UserModel = require("../Users/Model/RegistrationModel");
const jwt = require("jsonwebtoken");
exports.isAuths = async (req, res, next) => {
  try {
    const { LoginToken } = req.cookies;
    // console.log("LoginToken",LoginToken)
    if (!LoginToken) {
      return res.status(400).json({
        success: false,
        massage: "Please login first",
      });
    }
    const matchtoken = await jwt.verify(LoginToken, process.env.JWTSECTRETKEY);
    req.user = await UserModel.findById(matchtoken._id);
    next();
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: "auth false",
    });
  }
};
