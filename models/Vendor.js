const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyName: { type: String, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model('Vendor', VendorSchema);