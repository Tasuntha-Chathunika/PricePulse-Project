const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    url: String,
    title: String,
    image: String,
    site: String,
    currentPrice: Number,
    priceHistory: [{ price: Number, date: { type: Date, default: Date.now } }],
    lastChecked: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);