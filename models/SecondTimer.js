const mongoose = require('mongoose');

const secondTimerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    previousVisitDate: { type: Date, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SecondTimer', secondTimerSchema);
