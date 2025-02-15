const Product = require('../models/Product');

const addProduct = async (req, res) => {
    const { name, description, category, startDate, expiryDate, deliveryAmount, freeDelivery, oldPrice, newPrice, images, url } = req.body;
    try {
        const product = new Product({ name, description, category, startDate, expiryDate, deliveryAmount, freeDelivery, oldPrice, newPrice, images, vendor: req.user._id, url });
        await product.save();
        res.status(201).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = { addProduct };