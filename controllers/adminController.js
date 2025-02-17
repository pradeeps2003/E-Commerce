const Product = require('../models/Product');
const User = require('../models/User');

exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.send(users);
};