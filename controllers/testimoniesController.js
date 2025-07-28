const Testimonies = require('../models/Testimonies');

exports.submitTestimonies = async (req, res) => {
  try {
    const { fullName, message } = req.body;
    const newTestimonies = new Testimonies({ fullName, message });
    await newTestimonies.save();
    res.status(201).json({ message: 'Testimonies submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit testimonies' });
  }
};

exports.getTestimonies = async (req, res) => {
  try {
    const testimonies = await Testimonies.find().sort({ createdAt: -1 }).limit(10);
    res.json(testimonies);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch testimonies' });
  }
};