const form = require("../models/formModel");
const User = require("../models/LoginModel");
const sendEmail = require("../utilities/email_sender");
const pReq = 'jaters1200@gmail.com';

exports.approvalRequestList = async (req, res) => {
  try {
    const currentDate = new Date();
    const { user } = req; 
    const { role, location } = user;

    if (role !== "approver") {
      return res.status(403).json({
        status: "fail",
        message: "User does not have permission to view approval requests",
      });
    }
      
      // Fetch all forms with resource names matching the ones from approver users
      const allForms = await form.find({
          startDate: { $gte: currentDate },
          resourceName: { $in: location }
      })
      .sort({ startDate: 1 })
      .lean()
      .exec();
      
      // Sort the forms based on their startDate proximity to the currentDate
      allForms.sort((a, b) => Math.abs(a.startDate - currentDate) - Math.abs(b.startDate - currentDate));
      
      // Split the forms into two arrays based on whether the email matches pReq
      const pMails = allForms.filter(item => item.email === pReq);
      const npMails = allForms.filter(item => item.email !== pReq);
      
      // Concatenate the two arrays to get the final sorted forms array
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
