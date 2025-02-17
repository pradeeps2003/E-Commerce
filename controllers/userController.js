const Product = require('../models/Product');

exports.viewProducts = async (req, res) => {
    const products = await Product.find({});
    res.send(products);
};