// File: routes/babyNamingRoutes.js
const express = require('express');
const router = express.Router();
const { submitForm, getAllEntries } = require('../controllers/babyNamingController');

router.post('/', submitForm);
router.get('/', getAllEntries); // optional for admin use

module.exports = router;