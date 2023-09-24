const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./router/userRoutes");
const requestRoutes = require("./router/requesterRoutes");
const approverRoutes = require("./router/approverRoutes");
const adminRoutes = require("./router/adminRoutes");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

// app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/request", requestRoutes);
app.use("/approver", approverRoutes);
app.use("/admin", adminRoutes);


dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnect", () => {
  console.log("Disconnect from Database");
});

app.listen(8000, () => {
  connect();
  console.log("Backend Started");
});
