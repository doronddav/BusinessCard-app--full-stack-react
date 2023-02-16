const joi = require('joi');

const myCardObject = {
  businessName: joi.string().required().min(0).max(30),
  businessDescription: joi.string().required().min(10).max(60),
  businessAddress: joi.string().required().min(0).max(30),
  businessPhone: joi.string().required().min(0).max(14),
  businessImage: joi.string().allow('').max(500),
  userId: joi.string(),
};

const validateCardByJoi = joi.object(myCardObject);

function validateCard(cardDetails) {
  return validateCardByJoi.validate(cardDetails);
}

module.exports = validateCard;
