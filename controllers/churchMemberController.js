const ChurchMember = require('../models/ChurchMember');

exports.createMember = async (req, res) => {
  try {
    const newMember = await ChurchMember.create(req.body);
    res.status(201).json({ message: 'Church member registered', data: newMember });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register member' });
  }
};

exports.getAllMembers = async (req, res) => {
  try {
    const members = await ChurchMember.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve members' });
  }
};
