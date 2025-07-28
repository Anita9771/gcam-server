const mongoose = require('mongoose');

const churchMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ChurchMember', churchMemberSchema);
