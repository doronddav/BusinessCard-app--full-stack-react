const operations = require("../../mongoose/customerOperations");
const validateSigninCustomer = require("../../joi/validateSigninCustomer");
const jsonwebtoken = require("jsonwebtoken");
async function signinCustomer(req, res) {
  const { error } = validateSigninCustomer(req.body);
  if (error) return res.status(400).json(error.details[0].message);
  const { email, password } = req.body;
  const retVal = await operations.signInCustomer(email, password);
  console.log("retval!!!!!!:", retVal);
  if (!retVal) return res.status(500).json("didnt find customer");
  const { name } = retVal;
  const token = jsonwebtoken.sign(
    {
      customerid: retVal._id,
      isBusinessAccount: retVal.isBusinessAccount,
    },

    "mykey"
  );
  let id = retVal._id;
  let isBusinessAccount = retVal.isBusinessAccount;
  console.log(token);
  res.status(200).json({
    status: "success",
    data: {
      token,
      id,
      isBusinessAccount,
      name,
    },
  });
}
module.exports = signinCustomer;
