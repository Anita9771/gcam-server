const express = require("express");
const router = express.Router();
const { submitEnquiry, getEnquiries } = require("../controllers/enquiryController");

router.post("/", submitEnquiry);

// Optional: If you want to retrieve all enquiries (for admin use)
router.get("/", getEnquiries); // Uncomment if you implement this function

module.exports = router;
