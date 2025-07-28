const ProgramAttendance = require("../models/ProgramAttendance");

exports.submitAttendance = async (req, res) => {
  try {
    const entry = await ProgramAttendance.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAttendance = async (req, res) => {
  try {
    const all = await ProgramAttendance.find().sort({ date: -1 });
    res.json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
