const productmodel = require("../Models/ProductModel");
const getProducts = async (req, res) => {
  try {
    let page = req.query.page || 1;
    let size = req.query.size || 8;
    let category = req.query.category;
    console.log(req.query);
    const limit = parseInt(size);
    const product = await productmodel
      .find({ category })
      .skip((page - 1) * size)
      .limit(limit);
    res.status(200).json({
      success: true,
      size: product.length,
      product,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
const getProductId = async (req, res) => {
  try {
    // console.log(req.params.id);
    const product = await productmodel.findById({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const product = await productmodel.find({});
    res.status(200).json({
      success: true,
      size: product.length,
      product,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getProducts, getAllProducts, getProductId };
