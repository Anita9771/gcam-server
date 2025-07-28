const express = require("express");
const router = express.Router();
const { submitWelfare } = require("../controllers/welfareController");

router.post("/", submitWelfare);

module.exports = router;
