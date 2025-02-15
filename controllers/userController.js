const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('vendor', 'username email');
        res.send(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = { getAllProducts };