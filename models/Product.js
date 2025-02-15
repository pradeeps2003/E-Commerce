const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    deliveryAmount: { type: Number, default: 0 },
    freeDelivery: { type: Boolean, default: false },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true },
    images: [{ type: String }],
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    url: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Product', ProductSchema);