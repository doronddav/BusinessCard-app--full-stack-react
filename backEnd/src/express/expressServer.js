const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

const getAllCustomers = require("./handlers/getAllCustomers");
const registerCustomer = require("./handlers/registerCustomer");
const signinCustomer = require("./handlers/signinCustomer");
const detailsOfCustomer = require("./handlers/detailsOfCustomer");
const createCard = require("./handlers/createCard");
const getAllCards = require("./handlers/getAllCards");
const getMyCards = require("./handlers/getMyCards");
const authenticateCustomer = require("./middlewares/authenticateCustomer");
const getMyCardByUserAndCardId = require("./handlers/getMyCardByUserAndCardId");
const deleteCard = require("./handlers/deleteCard");
const updateCard = require("./handlers/updateCard");

server.get("/customers", getAllCustomers);
server.post("/customers/register", registerCustomer);
server.post("/customers/signin", signinCustomer);
server.get("/customers/getmydetails", authenticateCustomer, detailsOfCustomer);
server.post("/cards/create", authenticateCustomer, createCard);
server.get("/cards", getAllCards);
server.get("/cards/getmycards", authenticateCustomer, getMyCards);
server.get(
  "/cards/getmycardbyid",
  authenticateCustomer,
  getMyCardByUserAndCardId
);
server.delete("/cards/deleteone", authenticateCustomer, deleteCard);
server.put("/cards/updatecard", authenticateCustomer, updateCard);

server.listen(8000, () => console.log("Express listening"));
