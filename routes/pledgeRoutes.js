const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const pledgeController = require('../controllers/pledgeController');
const validate = require('../middleware/validate');

// Validation schema
const pledgeSchema = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('amount').isFloat({ min: 1 }).withMessage('Amount must be a number'),
];

router.post('/', validate(pledgeSchema), pledgeController.createPledge);

// Admin route to list all pledges (optional protection)
router.get('/', pledgeController.getAllPledges);

module.exports = router;
