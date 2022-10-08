const { response } = require("express");
const cardOperations = require("../../mongoose/cardOperations");

async function getMyCardByUserAndCardId(req, res) {
  const cardId = req.query.cardId;
  if (!cardId) return res.status(400).json("you didnt write id");
  const card = await cardOperations.getOneCardbyUserIDAndCardID(
    req.userID,
    req.query.cardId
  );
  res.status(200).json({
    status: "success",
    data: {
      card,
    },
  });
}

module.exports = getMyCardByUserAndCardId;
