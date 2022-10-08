const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/CustomersAndCardsProject")
  .then((x) => console.log("Connected to mongo DB"))
  .catch((x) => console.log("Problems to connect mongo db"));
