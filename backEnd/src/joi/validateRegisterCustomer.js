const joi = require("joi");

const schema = joi.object({
  email: joi.string().required().email(),
  name: joi.string().required(),
  password: joi.string().required(),
  isBusinessAccount: joi.boolean().required(),
});

function validateRegisterCustomer(customer) {
  return schema.validate(customer);
}

module.exports = validateRegisterCustomer;
