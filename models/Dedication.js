// File: models/Dedication.js
const mongoose = require('mongoose');

const dedicationSchema = new mongoose.Schema({
  childName: String,
  dateOfBirth: Date,
  parentsNames: String,
  contactEmail: String,
  phone: String,
  dedicationDate: Date,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model('Dedication', dedicationSchema);