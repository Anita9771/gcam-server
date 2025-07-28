// File: models/Couple.js
const mongoose = require('mongoose');

const coupleSchema = new mongoose.Schema({
  partner1Name: { type: String, required: true },
  partner2Name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  weddingDate: { type: Date, required: true },
  address: { type: String, required: true },
  churchAffiliation: String,
  pastor: String,
}, { timestamps: true });

module.exports = mongoose.model('Couple', coupleSchema);