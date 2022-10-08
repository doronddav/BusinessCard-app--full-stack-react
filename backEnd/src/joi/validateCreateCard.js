const joi = require("joi");

const myCardObject = {
  businessName: joi.string().required().min(5).max(255),
  businessDescription: joi.string().required().min(20).max(255),
  businessAddress: joi.string().required().min(5).max(255),
  businessPhone: joi.string().required().min(9).max(14),
  businessImage: joi.string().max(500),
  userId: joi.string(),
};

const validateCardByJoi = joi.object(myCardObject);

function validateCard(cardDetails) {
  return validateCardByJoi.validate(cardDetails);
}

module.exports = validateCard;
