const express = require("express");
const cors = require("cors");
const connect = require("./DB/connect");
const userRoutes = require("./router/userRoutes");
const requestRoutes = require("./router/requesterRoutes");
const approverRoutes = require("./router/approverRoutes");
const adminRoutes = require("./router/adminRoutes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();


app.use(morgan("tiny"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/request", requestRoutes);
app.use("/approver", approverRoutes);
app.use("/admin", adminRoutes);

app.listen(8000, () => {
  connect()
  console.log("Backend Started");
});
