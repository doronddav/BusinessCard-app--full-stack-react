const joi = require('joi');

const schema=  joi.object ({
    email:joi.string().required().email(),
    password:joi.string().required().min(6),
});

function validateSigninCustomer(customer){
    return schema.validate(customer);
}

module.exports= validateSigninCustomer;