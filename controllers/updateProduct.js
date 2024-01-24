const Products = require('../model/products');

const updateProduct = async (req, res) => {
    try {
        const product = await Products.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

module.exports = updateProduct;