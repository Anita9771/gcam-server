const Request = require("../models/Request");

const submitRequest = async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error submitting request:", error);
    res.status(500).json({ message: "Failed to submit request" });
  }
};

// This function retrieves all requests from the database
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching requests:", error);
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};

module.exports = { submitRequest, getAllRequests };
