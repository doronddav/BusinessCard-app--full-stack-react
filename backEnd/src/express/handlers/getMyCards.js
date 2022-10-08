const cardOperations = require("../../mongoose/cardOperations");
async function getMyCards(req, res) {
  const userCards = await cardOperations.getCardsByUserId(req.userID);
  console.log(userCards);
  res.status(200).json({
    status: "success",
    data: {
      userCards,
    },
  });
}

module.exports = getMyCards;
