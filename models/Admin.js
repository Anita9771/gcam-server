// models/Admin.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Avoid duplicate emails
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // Do not return password by default in queries
  },
});

// 🔐 Hash password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// ✅ Compare entered password with hashed password
adminSchema.methods.correctPassword = async function (candidatePassword, storedHash) {
  return await bcrypt.compare(candidatePassword, storedHash);
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

