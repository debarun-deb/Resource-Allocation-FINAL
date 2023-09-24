const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

const dater = () => {
  let d = Date();
  let a = d.toString();
  return a;
};
const expirySchema = new mongoose.Schema({
  formID: {
    type: String,
    required: true,
    unique: true,
    default: () => uuidv4(),
  },
  status: {
    type: String,
    enum: ["Submitted", "Approved", "Cancelled"],
    default: "Submitted",
  },
  deptartment: {
    type: String,
    enum: ["cse", "it", "me", "chem", "phy", "eee", "maths", "student"],
    default: "student",
  },
  userEmail: {
    type: String,
    required: true,
  },
  resourceName: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDetails: {
    type: String,
    required: true,
  },
  submittedTime: {
    type: String,
    default: dater,
    select: false,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[6-9]\d{9}$/.test(v);
      },
      message: "{VALUE} is not a valid Indian phone number!",
    },
    required: [true, "User phone number required"],
  },
  studentCoordinator: {
    type: String,
  },
  registrationNumber: {
    type: Number,
  },
  studentEmail: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  Technician: {
    type: Boolean,
  },
  Cleaning: {
    type: Boolean,
  },
  Sound: {
    type: Boolean,
  },
  isSubmitted: {
    type: Boolean,
    required: true,
    default: true,
  },
});
const Expired = mongoose.model("Expired", expirySchema);

module.exports = Expired;
