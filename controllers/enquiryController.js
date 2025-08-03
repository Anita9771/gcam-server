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

const getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve enquiries" });
  }
};

module.exports = { submitEnquiry, getEnquiries };
