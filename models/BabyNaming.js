// File: models/BabyNaming.js
const mongoose = require('mongoose');

const babyNamingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  babyName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  pastor: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('BabyNaming', babyNamingSchema);