const SecondTimer = require('../models/SecondTimer');

exports.createSecondTimer = async (req, res) => {
  try {
    const entry = await SecondTimer.create(req.body);
    res.status(201).json({ message: 'Second timer registered', data: entry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register second timer' });
  }
};

exports.getAllSecondTimers = async (req, res) => {
  try {
    const list = await SecondTimer.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch second timers' });
  }
};
