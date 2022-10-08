const customerOperations = require("../../mongoose/customerOperations");
const jsonwebtoken = require("jsonwebtoken");

async function authenticateCustomer(req, response, next) {
  const token = req.headers.token;
  if (!token)
    return response.status(401).json({ message: "there si no token" });

  try {
    const data = jsonwebtoken.verify(token, "mykey");
    req.userID = data.customerid;
    next();
  } catch {
    return response.status(401).json({ message: "unavailble token" });
  }
}

module.exports = authenticateCustomer;
