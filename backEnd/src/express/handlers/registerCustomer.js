const operations = require("../../mongoose/customerOperations");
const validateRegisterCustomer = require("../../joi/validateRegisterCustomer");
const Customer = require("../../mongoose//customerModel");
async function registerCustomer(req, res) {
  const { error } = validateRegisterCustomer(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  let user = await Customer.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  const retVal = await operations.registerCustomer(req.body);
  if (retVal == null) return res.json("customer dont added");

  res.json({ id: retVal._id, name: retVal.name, email: retVal.email });
}

module.exports = registerCustomer;
