// File: controllers/babyNamingController.js
const BabyNaming = require('../models/BabyNaming');

exports.submitForm = async (req, res) => {
  try {
    const newEntry = new BabyNaming(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Baby naming form submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to submit baby naming form.' });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await BabyNaming.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch baby naming entries.' });
  }
};