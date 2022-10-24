const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  businessName: {
    type: String,
    required: [true, "A business must have a name"],
    maxlength: [
      255,
      "A business name must have less or equal then 255 characters",
    ],
    minlength: [5, "A business name must have less or equal then 5 characters"],
  },
  businessDescription: {
    type: String,
    required: [true, "A business must have a Description"],
    maxlength: [
      255,
      "A business Description must have less or equal then 255 characters",
    ],
    minlength: [
      20,
      "A business Description must have less or equal then 20 characters",
    ],
  },
  businessAddress: {
    type: String,
    required: [true, "A businessAddress must have a businessAddress"],
    maxlength: [
      255,
      "A business Address must have less or equal then 255 characters",
    ],
    minlength: [
      5,
      "A business Address must have less or equal then 20 characters",
    ],
  },
  businessPhone: {
    type: String,
    required: [true, "A business must have a Phone"],
    maxlength: [
      14,
      "A business Phone must have less or equal then 14 characters",
    ],
    minlength: [
      9,
      "A business Phone must have less or equal then 9 characters",
    ],
  },
  businessImage: {
    type: String,
    required: false,
    maxlength: [
      500,
      "A business Image must have less or equal then 500 characters",
    ],
  },
  userId: String,
});

const cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;
