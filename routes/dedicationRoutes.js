// File: routes/dedicationRoutes.js
const express = require("express");
const router = express.Router();
const {
  createDedication,
  getAllDedications,
} = require("../controllers/dedicationController");

router.post("/", createDedication);
router.get("/", getAllDedications);

module.exports = router;
