const express = require('express');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const router = express.Router();
const controller = require('../controllers/churchMemberController');

const rules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone is required'),
];

router.post('/', validate(rules), controller.createMember);
router.get('/', controller.getAllMembers); // Add auth if needed

module.exports = router;
