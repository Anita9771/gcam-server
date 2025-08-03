const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });


// Register Admin
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin with this email already exists" });
    }

    const admin = await Admin.create({ name, email, password });
    res.status(201).json({ token: signToken(admin.id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login Admin
// ✅ Must be an async function
exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // ✅ 'await' is now valid here
      const admin = await Admin.findOne({ email }).select("+password");
  
      if (!admin || !(await admin.correctPassword(password, admin.password))) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      const token = signToken(admin.id);
      res.status(200).json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
