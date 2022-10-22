const customerModel = require("./customerModel");
const bcryptjs = require("bcryptjs");

async function registerCustomer(customerDetails) {
  try {
    customerDetails.password = bcryptjs.hashSync(customerDetails.password);

    return await new customerModel(customerDetails).save();
  } catch {
    return null;
  }
}

async function signInCustomer(email, password) {
  try {
    const customerFromDB = await customerModel.findOne({ email: email });
    if (customerFromDB == null) return null;

    const result = bcryptjs.compareSync(password, customerFromDB.password);
    if (result) {
      console.log(customerFromDB);
      return customerFromDB;
    }
    return null;
  } catch {
    return null;
  }
}

async function getCustomerDetailsById(id) {
  try {
    return await customerModel.findById(id);
  } catch {
    return null;
  }
}

async function getAllCustomers() {
  try {
    return await customerModel.find();
  } catch {
    return null;
  }
}

module.exports = {
  registerCustomer,
  signInCustomer,
  getCustomerDetailsById,
  getAllCustomers,
};
