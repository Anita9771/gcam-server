// File: routes/coupleRoutes.js
const express = require('express');
const router = express.Router();
const { createCouple, getAllCouples } = require('../controllers/coupleController');

router.post('/', createCouple);
router.get('/', getAllCouples);

module.exports = router;
