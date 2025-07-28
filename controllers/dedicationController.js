// File: controllers/dedicationController.js
const Dedication = require('../models/Dedication');

exports.createDedication = async (req, res) => {
  try {
    const dedication = new Dedication(req.body);
    await dedication.save();
    res.status(201).json({ message: 'Dedication request submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit dedication request', error: err.message });
  }
};

exports.getAllDedications = async (req, res) => {
  try {
    const dedications = await Dedication.find().sort({ createdAt: -1 });
    res.json(dedications);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch dedications' });
  }
};
