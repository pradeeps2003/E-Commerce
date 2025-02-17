const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const product = new Product({ ...req.body, vendor: req.user._id });
    await product.save();
    res.status(201).send(product);
};
