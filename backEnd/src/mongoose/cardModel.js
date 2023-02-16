const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  businessName: {
    type: String,
    required: [true, 'A business must have a name'],
    maxlength: [
      30,
      'A business name must have less or equal then 30 characters',
    ],
    minlength: [0, 'A business name must have less or equal then 5 characters'],
  },
  businessDescription: {
    type: String,
    required: [true, 'A business must have a Description'],
    maxlength: [
      60,
      'A business Description must have less or equal then 60 characters',
    ],
    minlength: [
      0,
      'A business Description must have less or equal then 10 characters',
    ],
  },
  businessAddress: {
    type: String,
    required: [true, 'A businessAddress must have a businessAddress'],
    maxlength: [
      30,
      'A business Address must have less or equal then 30 characters',
    ],
    minlength: [
      0,
      'A business Address must have less or equal then 20 characters',
    ],
  },
  businessPhone: {
    type: String,
    required: [true, 'A business must have a Phone'],
    maxlength: [
      14,
      'A business Phone must have less or equal then 14 characters',
    ],
    minlength: [
      0,
      'A business Phone must have less or equal then 9 characters',
    ],
  },
  businessImage: {
    type: String,
    required: false,
    maxlength: [
      500,
      'A business Image must have less or equal then 500 characters',
    ],
  },
  userId: String,
});

const cardModel = mongoose.model('card', cardSchema);

module.exports = cardModel;
