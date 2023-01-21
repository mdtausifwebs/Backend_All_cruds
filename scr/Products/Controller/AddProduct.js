const productmodel = require("../Models/ProductModel");

const addProduct = async (req, res) => {
  res.send("<h1>hello i am product routes</h1>");
};
const getProducts = async (req, res) => {
  //   console.log(req.query);
  let { page, size } = req.query;
  if (!size) {
    size = 8;
  }
  if (!page) {
    page = 1;
  }
  const limit = parseInt(size);
  const product = await productmodel.find().limit(limit);
  res.status(200).json({
    success: true,
    size: product.length,
    product,
  });
};

module.exports = { addProduct, getProducts };
