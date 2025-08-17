const router = require('express').Router();
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const c = require('../controllers/authController');
const { register, login } = require('../controllers/adminController');

router.post(
  '/login',
  validate([
    body('email').isEmail(),
    body('password').notEmpty(),
  ]),
  c.login
);

// create login admin
router.post("/admin/login", login);

// create the first admin manually or expose /register temporarily
router.post("/admin/register", register);
module.exports = router;

