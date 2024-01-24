const Products = require('../model/products');

const getProducts = async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

module.exports = getProducts;