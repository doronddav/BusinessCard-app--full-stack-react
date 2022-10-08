const operations = require("../../mongoose/customerOperations");

async function getAllCustomers(req, res) {
  const allCustomers = await operations.getAllCustomers();
  res.status(200).json({
    status: "success",
    results: allCustomers.length,
    data: {
      allCustomers,
    },
  });
}

module.exports = getAllCustomers;
