const Products = require('../model/products');

const deleteProduct = async (req, res) => {
    try {
        const product = await Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    };

module.exports = deleteProduct;