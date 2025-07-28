const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const c = require('../controllers/authController');

router.post(
  '/login',
  validate([
    body('email').isEmail(),
    body('password').notEmpty(),
  ]),
  c.login
);

// create the first admin manually or expose /register temporarily
module.exports = router;
