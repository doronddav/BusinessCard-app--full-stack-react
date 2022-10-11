const operations = require("../../mongoose/cardOperations");
async function updateCard(req, res) {
  const cardID = req.query.cardid;
  const userID = req.userID;
  if (!cardID) {
    return (
      res.status(400).json("id not found"), console.log("error here!!!!!!")
    );
  }

  const result = await operations.updateOneCard(cardID, userID, req.body);
  if (result != null)
    return res.status(200).json({
      status: "success update",
      data: {
        result,
      },
    });

  return res.status(500).json("fail,card didnt update");
}

module.exports = updateCard;
