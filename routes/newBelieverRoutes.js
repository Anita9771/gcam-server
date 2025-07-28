const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/newBelieverController');
const validate = require('../middleware/validate');

const rules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
];

router.post('/', validate(rules), controller.createNewBeliever);
router.get('/', controller.getAllNewBelievers); // Add auth middleware if needed

module.exports = router;
