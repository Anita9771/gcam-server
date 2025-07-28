const NewBeliever = require('../models/NewBeliever');

exports.createNewBeliever = async (req, res) => {
  try {
    const record = await NewBeliever.create(req.body);
    res.status(201).json({ message: 'New believer registered', data: record });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register new believer' });
  }
};

exports.getAllNewBelievers = async (req, res) => {
  try {
    const list = await NewBeliever.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch new believers' });
  }
};
