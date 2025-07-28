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

module.exports = { submitWelfare };
