const Model = require("../Model/RegistrationModel");

const registeruser = async (req, res) => {
  try {
    // let user = await Model.findOne();
    // if (user) {
    //   return res.status(200).json({
    //     success: true,
    //     user,
    //     message: "user already registred",
    //   });
    // }
    // user = await Model.create(req.body);
    // return res.status(201).json({
    //   success: true,
    //   user,
    //   message: "user registred successfully",
    // });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { registeruser };
