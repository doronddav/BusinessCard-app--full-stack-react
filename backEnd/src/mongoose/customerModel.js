const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isBusinessAccount: Boolean,
  createDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customer", customerSchema);
