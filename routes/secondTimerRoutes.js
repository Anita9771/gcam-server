const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/secondTimerController');
const validate = require('../middleware/validate');

const rules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
  body('email').optional().isEmail().withMessage('Email must be valid'),
  body('previousVisitDate').notEmpty().isISO8601().toDate().withMessage('Date is required and must be valid'),
];

router.post('/', validate(rules), controller.createSecondTimer);
router.get('/', controller.getAllSecondTimers); // protect with auth if needed

module.exports = router;
