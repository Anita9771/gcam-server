const mongoose = require('mongoose');

const newBelieverSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    testimony: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('NewBeliever', newBelieverSchema);
