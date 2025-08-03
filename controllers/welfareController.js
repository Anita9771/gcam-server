const Welfare = require("../models/Welfare");

const submitWelfare = async (req, res) => {
  try {
    const newWelfare = new Welfare(req.body);
    await newWelfare.save();
    res.status(201).json({ message: "Welfare request submitted successfully" });
  } catch (error) {
    console.error("Welfare submission error:", error);
    res.status(500).json({ message: "Failed to submit welfare request" });
  }
};

const getWelfareEntries = async (req, res) => {
  try {
    const welfareEntries = await Welfare.find();
    res.status(200).json(welfareEntries);
  } catch (error) {
    console.error("Failed to retrieve welfare entries:", error);
    res.status(500).json({ message: "Failed to retrieve welfare entries" });
  }
};

module.exports = { submitWelfare, getWelfareEntries };
