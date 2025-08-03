// controllers/profileController.js
const Profile = require("../models/Profile");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const nodemailer = require("nodemailer");

exports.registerProfile = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      address,
      country,
      memberType,
      referral,
      localPastor,
      password,
    } = req.body;

    const existing = await Profile.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const profile = new Profile({
      fullName,
      email,
      phone,
      address,
      country,
      memberType,
      referral,
      localPastor,
      password: hashedPassword,
      image: req.file ? `/uploads/${req.file.filename}` : undefined,
    });

    const savedProfile = await profile.save();
    res.status(201).json(savedProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.loginProfile = async (req, res) => {
  try {
    const { email, password, isAdmin } = req.body;
    const user = await Profile.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });
    if (isAdmin && !user.isAdmin) return res.status(403).json({ message: 'Not an admin user' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: 'Login error' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await Profile.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"GCAM INTERNATIONAL" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Reset Confirmation',
      html: `
        <p>Hello ${user.fullName || ''},</p>
        <p>This is a confirmation that your password has been successfully changed.</p>
        <p>If you did not initiate this change, please contact our support team immediately.</p>
        <p>God bless you,<br />Glorious Christ Ambassadors Ministries Int'l</p>
      `,
    });

    res.json({ message: 'Password reset successful and confirmation sent' });
  } catch (err) {
    res.status(500).json({ message: 'Password reset failed' });
  }
};

exports.sendResetLink = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Profile.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Email not found' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${token}`;
    console.log(`Reset URL: ${resetURL}`); // For debugging
    
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"GCAM INTERNATIONAL" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Reset',
      html: `<p>Click to reset your password: <a href="${resetURL}">${resetURL}</a></p>`
    });

    res.json({ message: 'Reset link sent' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send reset link' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id).select('-password');
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) updates.password = await bcrypt.hash(updates.password, 10);
    if (req.file) updates.image = `/uploads/${req.file.filename}`;

    const profile = await Profile.findByIdAndUpdate(req.params.id, updates, { new: true });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile' });
  }
};

exports.getAllProfiles = async (req, res) => {
    try {
      const profiles = await Profile.find().select("-password");
      res.json(profiles);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch profiles" });
    }
  };
  
