const express = require("express");
const router = express.Router();
const { submitRequest, getAllRequests } = require("../controllers/requestController");

router.post("/", submitRequest);

router.get("/", getAllRequests); // Add auth middleware if needed

module.exports = router;
