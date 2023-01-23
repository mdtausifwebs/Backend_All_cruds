const Model = require("../Models/ProductModel");

const filterPrice = async (req, res) => {
  try {
    const price = req.query.sort;
    const size = req.query.size || 10;
    const page = req.query.page || 1;
    let products = await Model.find({
      selling_price: { $gt: price - 1000, $lt: price },
    })
      .skip((page - 1) * size)
      .limit(size)
    console.log("product", page,size,price)
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: err.message,
    });
  }
};
module.exports = { filterPrice };
