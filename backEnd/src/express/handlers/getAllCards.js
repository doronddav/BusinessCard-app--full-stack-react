const operations = require("../../mongoose/cardOperations");
const customerOperations = require("../../mongoose/customerOperations");

/** @type {import("express").RequestHandler} */
async function getAllCards(req, res) {
  const cards = await operations.getAllCards();

  res.status(200).json({
    status: "success",
    results: cards.length,
    data: {
      cards,
    },
  });
}

module.exports = getAllCards;
