const form = require("./../models/formModel");
const sendEmail = require("../utilities/email_sender");
const email_Template = require("../utilities/email_templates");
const custodians = {
  "Seminar Hall": "jaters1200@gmail.com",
  "Multipurpose Hall": "debarrun@gmail.com",
  "Central Computing Facility": "samprit62@gmail.com",
} 
const pReq = 'jaters1200@gmail.com';

exports.getAllForms = async (req, res) => {
  try {
    const currentDate = new Date();
    const allForms = await form.find()
      .sort({
        startDate: 1, // Sort in ascending order based on startDate
      })
      .lean() // Convert Mongoose documents to plain objects
      .exec();

    allForms.sort((a, b) => Math.abs(a.startDate - currentDate) - Math.abs(b.startDate - currentDate));
    const pMails = allForms.filter(item => item.email === pReq);
    const npMails = allForms.filter(item => item.email !== pReq);
    const sortedForms = [...pMails, ...npMails];
    res.status(200).json(sortedForms);
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
     const mailOptions = {
      to: [],
      from: 'resourcemsg@outlook.com',
      subject: 'Form Status Update',
      text: ''
    };

    if (status === 'Submitted' && updateForm.status === 'Cancelled') {
      // Don't send email in this case
      console.log('Form status not changed, no email sent.');
    } else {
      mailOptions.to.push(updateForm.email,custodians[updateForm.resourceName]);
      mailOptions.text = `Your form status has been changed to: ${status}`;
      console.log('Sending email...');
      await sendEmail(mailOptions);
    }

    
     res.status(200).json({status: 'Success', data: updateForm})
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
}

exports.updateCardStatus = async (req , res) => {
  try{
    const approveForm = await form.find({ status: 'Approved'})
    console.log(approveForm)
    res.status(200).json({ status: 'Success' , data: approveForm})
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }
}