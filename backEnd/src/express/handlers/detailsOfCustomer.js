const operations = require("../../mongoose/customerOperations");

async function detailsOfCustomer(req, res) {
  const customer = await operations.getCustomerDetailsById(req.userID);
  res.status(204).json({
    status: "success",
    data: customer,
  });
}
module.exports = detailsOfCustomer;
