const Products = require('../model/products');

const createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
};

module.exports = createProduct;