const mongoose = require('mongoose');

mongoose
  // .connect("mongodb://localhost/CustomersAndCardsProject")
  .connect(
    'mongodb+srv://Doron:drmnhxe12@cluster0.rofpi.mongodb.net/CustomersAndCardsProject?retryWrites=true&w=majority'
  )
  .then((x) => console.log('Connected to mongo DB'))
  .catch((x) => console.log('Problems to connect mongo db'));
