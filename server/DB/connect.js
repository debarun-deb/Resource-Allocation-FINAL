const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {dataTransfer} = require("../utilities/expiredTransfer");

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    await dataTransfer();
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnect", () => {
  console.log("Disconnect from Database");
});

module.exports = connect;