const mongoose = require("mongoose");
require("dotenv").config(); 

var connectionString = process.env.DB_URI

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, 
    serverSelectionTimeoutMS: 5000, 
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
