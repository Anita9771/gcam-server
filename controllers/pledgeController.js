const Pledge = require('../models/Pledge');

exports.createPledge = async (req, res) => {
  try {
    const pledge = await Pledge.create(req.body);
    res.status(201).json({ message: 'Pledge received', pledge });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save pledge' });
  }
};

exports.getAllPledges = async (req, res) => {
  try {
    const pledges = await Pledge.find().sort({ createdAt: -1 });
    res.json(pledges);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve pledges' });
  }
};
