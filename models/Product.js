const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    delivery: {
        isFree: { type: Boolean, default: false },
        amount: { type: Number, default: 0 }
    },
    images: [{ type: String }],
    url: { type: String, required: true, unique: true },
    oldPrice: { type: Number, required: true },
    newPrice: { type: Number, required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
