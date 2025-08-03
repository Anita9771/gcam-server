// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { submitContact, getContacts } = require("../controllers/contactController");

router.post("/", submitContact);
// Optional: If you want to retrieve all contacts (for admin use)
router.get("/", getContacts); // Uncomment if you implement this function

module.exports = router;