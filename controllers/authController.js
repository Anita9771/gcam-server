const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendWelcomeEmail } = require("../utils/emailSender");
const Admin = require('../models/Admin');

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    
    // Send welcome email
    await sendWelcomeEmail(email, name);
    
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ token: signToken(admin.id) });
};

// (optional) create initial admin
exports.register = async (req, res) => {
  const admin = await Admin.create(req.body);
  res.status(201).json({ token: signToken(admin.id) });
};
