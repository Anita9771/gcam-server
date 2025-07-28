const { validationResult } = require('express-validator');

const validate = (schema) => async (req, res, next) => {
  await Promise.all(schema.map((rule) => rule.run(req)));
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  next();
};

module.exports = validate;
