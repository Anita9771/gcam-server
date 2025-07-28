const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/firstTimerController');
const validate = require('../middleware/validate');

const rules = [
  body('fullName').notEmpty().withMessage('Full name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
];

router.post('/', validate(rules), controller.createFirstTimer);
router.get('/', controller.getAllFirstTimers); // protect this with auth if needed

module.exports = router;
