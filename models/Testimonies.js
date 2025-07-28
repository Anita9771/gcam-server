// File: models/Testimonies.js
const mongoose = require('mongoose');

const testimoniesSchema = new mongoose.Schema({
  message: { type: String, required: true },
    fullName: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Testimonies', testimoniesSchema);