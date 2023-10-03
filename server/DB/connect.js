const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { dataTransfer } = require("../utilities/expiredTransfer");
const cron = require("node-cron");

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    cron.schedule("0 0 * * *", async () => {
      console.log("Running Cron Job");
      await dataTransfer();
    });
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnect", () => {
  console.log("Disconnect from Database");
});

module.exports = connect;
