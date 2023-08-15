const form = require("./../models/formModel");
const sendEmail = require("../utilities/email_sender");

exports.approvalRequestList = async (req , res) => {
    try {
        const approvalRequest = await form.find({ status: 'Submitted' });
        console.log(approvalRequest)
        res.status(200).json({ status  : 'Success' , data : approvalRequest})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}