const operations = require("../../mongoose/cardOperations");

async function deleteCard(req, res) {
  const cardid = req.query.cardid;
  if (cardid) {
    const retVal = await operations.deleteOneCard(cardid, req.userID);
    if (retVal != null) return res.status(204).json({
      status: "success",
      data: null,
    });;
  }
  res.status(500).json("card wasnt deleted");
}

module.exports = deleteCard;
