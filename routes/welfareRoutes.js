const express = require("express");
const router = express.Router();
const { submitWelfare, getWelfareEntries } = require("../controllers/welfareController");

router.post("/", submitWelfare);

// Optional: If you want to retrieve all welfare entries (for admin use)
router.get("/", getWelfareEntries); // Uncomment if you implement this function

module.exports = router;
