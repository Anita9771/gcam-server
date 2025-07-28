const Partnership = require('../models/Partnership');

exports.createPartnership = async (req, res) => {
  try {
    const newPartner = await Partnership.create(req.body);
    res.status(201).json({ message: 'Partnership request received!', data: newPartner });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save partnership' });
  }
};

exports.getAllPartnerships = async (req, res) => {
  try {
    const partners = await Partnership.find().sort({ createdAt: -1 });
    res.json(partners);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch partnerships' });
  }
};
