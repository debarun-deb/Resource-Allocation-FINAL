const form = require("./../models/formModel");
const sendEmail = require("../utilities/email_sender");

const pReq = 'jaters1200@gmail.com';

exports.approvalRequestList = async (req, res) => {
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
  