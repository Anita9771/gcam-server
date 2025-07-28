const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const partnershipController = require('../controllers/partnershipController');
const validate = require('../middleware/validate');

// Validation rules
const partnershipSchema = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
];

// POST new partnership entry
router.post('/', validate(partnershipSchema), partnershipController.createPartnership);

// GET all partnerships (admin)
router.get('/', partnershipController.getAllPartnerships);

module.exports = router;
