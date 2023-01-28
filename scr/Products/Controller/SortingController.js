const Model = require("../Models/ProductModel");
const filterPrice = async (req, res) => {
  try {
    const category = req.query.category;
    const price = req.query.price;
    const size = req.query.size || 10;
    const page = req.query.page || 1;
    let products = await Model.find({
      category,
      selling_price: { $gt: parseInt(price) - 1000, $lt: parseInt(price) },
    })
      .skip((page - 1) * size)
      .limit(size);
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
const filterDiscount = async (req, res) => {
  try {
    const category = req.query.category;
    const discount = req.query.discount;
    const size = req.query.size || 10;
    const page = req.query.page || 1;
    // console.log("product", req.query);
    let products = await Model.find({
      category,
      discount,
      //   discount: { $gt: discount - 10, $lt: discount },
      //   discount: { $gt: parseInt(discount) - 10, $lt: parseInt(discount) },
    })
      .skip((page - 1) * size)
      .limit(size);

    // console.log(products);
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
const filtersubCategory = async (req, res) => {
  try {
    const category = req.query.category;
    const discount = req.query.discount;
    const size = req.query.size || 10;
    const page = req.query.page || 1;
    // console.log("product", req.query);
    const obj = {
      sleeve: discount,
      pattern: discount,
      occasion: discount,
      neck: discount,
      category,
    };
    console.log(obj);
    let products = await Model.find(obj)
      .skip((page - 1) * size)
      .limit(size);
    console.log(products);
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

module.exports = { filterPrice, filterDiscount, filtersubCategory };
