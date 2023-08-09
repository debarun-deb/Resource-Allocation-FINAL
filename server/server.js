const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require('./router/userRoutes')
const requestRoutes = require('./router/requesterRoutes')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const app = express()

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


app.use("/",userRoutes)
app.use("/",requestRoutes)


dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connect to Database')
  } catch (error) {
    throw(error);
  }
};
mongoose.connection.on('disconnect',() => {
  console.log('Disconnect from Database');
})


app.listen(8000, () => {
  connect();
  console.log("port connected");
});
