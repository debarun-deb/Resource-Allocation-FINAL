const form = require("./../models/formModel");
const fs = require("fs");
const path = require("path");
const sendEmail = require("../utilities/email_sender");
const email_Template = require("../utilities/email_templates");
const APIfeatures = require("../utilities/apiFeatures");

exports.getAllForms = async (req, res) => {
  try {
    const features = new APIfeatures(form.find(), req.query)
      .filter()
      .sort()
      .fields()
      .page();
    const allForms = await features.query;

    res.status(200).json(
      allForms
    );
  } catch (err) {
    console.error(err);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.forms = async (req, res) => {
  const newForm = new form(req.body);
  try {
    const savedForm = await newForm.save();
    const imagePath = path.join(
      __dirname,
      "server",
      "data",
      "image",
      "smitlogo.png"
    );
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString("base64");
    const imageMimeType = "image/png";
    const imageUrl = `data:${imageMimeType};base64,${imageBase64}`;
    const emailhtml = email_Template(savedForm, imageUrl);
    const mailOptions = {
      from: "resourcemsg@outlook.com",
      to: savedForm.email,
      subject: "Form submission confirmation",
      html: emailhtml,
    };
    await sendEmail(mailOptions);
    res.status(200).json({
      status: "success",
      data: {
        newForm,
      },
    });
    console.log(savedForm);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
exports.deleteForm = async (req, res) => {
  try {
    await form.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", data: null });
  } catch (e) {
    res.status(500).json(e);
  }
};
//need the email in form when sending it to database
exports.sortForm = async (req, res) => {
  const currentDate = new Date();
  try {
    const results = await form
      .find({ startDate: { $gte: currentDate } })
      .exec();
    console.log(results);
  } catch (err) {}
};

exports.changeFormStatus = async (req, res) => {
  const newStatus = req.body.newStatus;
  const user = req.params.id;
  try {
    await form.findByIdAndUpdate(user, { status: newStatus });
  } catch (err) {
    res.status(500).json(err);
  }
};
