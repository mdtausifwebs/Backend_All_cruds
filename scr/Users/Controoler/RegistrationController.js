const Model = require("../Model/RegistrationModel");

const registeruser = async (req, res) => {
  try {
    // console.log(req.body);
    let user = await Model.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (user) {
      const option = {
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      const token = await user.GenrateToken();
      let match = await user.matchPassword(req.body.password);
      // console.log("match", match);
      if (!match) {
        return res.status(200).json({
          success: true,
          user,
          message: "something wrong in match",
        });
      }
      return res.status(200).cookie("token", token, option).json({
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
    const token = await user.GenrateToken();
    if (!token) {
      return res.status(404).json({
        success: true,
        user,
        message: "something wrong  token",
      });
    }
    return res.status(201).cookie("token", token, option).json({
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
module.exports = { registeruser };
