const FirstTimer = require('../models/FirstTimer');

exports.createFirstTimer = async (req, res) => {
  try {
    const entry = await FirstTimer.create(req.body);
    res.status(201).json({ message: 'First timer registered', data: entry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register first timer' });
  }
};

exports.getAllFirstTimers = async (req, res) => {
  try {
    const list = await FirstTimer.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch first timers' });
  }
};
