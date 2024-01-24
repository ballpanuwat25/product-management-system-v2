const Products = require('../model/products');

const getProductById = async (req, res) => {
    try {
        const product = await Products.findByPk(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

module.exports = getProductById;