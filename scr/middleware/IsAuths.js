exports.isAuths = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: "auth false",
    });
  }
};
