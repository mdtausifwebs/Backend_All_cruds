const Model = require("../Model/RegistrationModel");

const registeruser = async (req, res) => {
  try {
    // console.log(req.body);
    let user = await Model.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (user) {
      let match = await user.matchPassword(req.body.password);
      // console.log("match", match);
      if (!match) {
        return res.status(200).json({
          success: true,
          user,
          message: "something wrong in match",
        });
      }
      const LoginToken = await user.GenrateToken();
      const option = {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      if (!LoginToken) {
        return res.status(404).json({
          success: true,
          user,
          message: "something wrong  LoginToken",
        });
      }
      return res.status(200).cookie("LoginToken", LoginToken, option).json({
        success: true,
        user,
        message: "user login successfully",
      });
    }
    user = await Model.create(req.body);
    const option = {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const LoginToken = await user.GenrateToken();
    if (!LoginToken) {
      return res.status(404).json({
        success: true,
        user,
        message: "something wrong  LoginToken",
      });
    }
    return res.status(201).cookie("LoginToken", LoginToken, option).json({
      success: true,
      user,
      message: "user registred successfully",
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
const userlist = async (req, res) => {
  try {
    const user = await Model.find();
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { registeruser, userlist };
