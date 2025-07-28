// File: controllers/coupleController.js
const Couple = require('../models/Couple');

exports.createCouple = async (req, res) => {
  try {
    const couple = new Couple(req.body);
    await couple.save();
    res.status(201).json({ message: 'Couple registration successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving registration', error: err.message });
  }
};

exports.getAllCouples = async (req, res) => {
  try {
    const couples = await Couple.find().sort({ createdAt: -1 });
    res.json(couples);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching registrations', error: err.message });
  }
};
