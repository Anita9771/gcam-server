const express = require('express');
const router = express.Router();
const { submitTestimonies, getTestimonies } = require('../controllers/testimoniesController');

router.post('/', submitTestimonies);
router.get('/', getTestimonies);

module.exports = router;