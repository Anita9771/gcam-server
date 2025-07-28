const Enquiry = require("../models/Enquiry");

const submitEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit enquiry" });
  }
};

module.exports = { submitEnquiry };
