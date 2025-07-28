// File: models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  address: String,
  password: String,
  image: String,
  country: String,
  memberType: String,
  referral: String,
  localPastor: String,
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);