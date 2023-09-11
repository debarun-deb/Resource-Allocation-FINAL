const form = require("./../models/formModel");
const sendEmail = require("../utilities/email_sender");
const formModel = require("../models/formModel.js")
const email_Template = require("../utilities/email_template");
const custodians = {
  "Seminar Hall": "jaters1200@gmail.com",
  "Multipurpose Hall": "debarrun@gmail.com",
  "Central Computing Facility": "samprit62@gmail.com",
} 


exports.getRequesterForms = async (req, res) => {
  try {
    const userName = req.user.email
    console.log(userName)
    const requesterForms = await form.find({ userEmail: userName})
    res.status(200).json(requesterForms);
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
    const emailhtml = email_Template(savedForm)
    const mailOptions ={
      from: 'resourcemsg@outlook.com',
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

exports.updateFormStatus = async (req,res) => {
  try {
     const { id , status , resourceName } = req.body
     console.log(req.body)
     if(!id || !status) {
      return res.status(400).json({ status: 'failed', message: 'Parameter missing'})
     }
     const updateForm = await  form.findByIdAndUpdate(
      id,
      { status },
      {new : true}
     )
     if(!updateForm) {
      return res.status(400).json({ status: 'failed', message:'form not found'})
     }
    
    sender = [updateForm.email]

    status === 'Submitted' && updateForm.status ==='Cancelled'?true:sender.push(custodians[updateForm.resourceName]);
      //  const emailhtml = email_Template(updateForm)
    const mailOptions = {
      to: sender,
      from: 'resourcemsg@outlook.com',
      subject: 'Form Status Update',
      text: `The form with FormID: ${formID} has been: ${status}`
    };
    await sendEmail(mailOptions);    
    res.status(200).json({status: 'Success', data: updateForm})
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
} 

