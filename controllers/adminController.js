const User = require('../models/User');
const Product = require('../models/Product');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
};

const createProduct = async (req, res) => {
    const { name, description, category, startDate, expiryDate, deliveryAmount, freeDelivery, oldPrice, newPrice, images, vendor, url } = req.body;
    try {
        const product = new Product({ name, description, category, startDate, expiryDate, deliveryAmount, freeDelivery, oldPrice, newPrice, images, vendor, url });
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = { getAllUsers, createProduct };