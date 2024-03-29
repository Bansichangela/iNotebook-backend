const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoURI = "mongodb://localhost:27017/iNotebook";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
