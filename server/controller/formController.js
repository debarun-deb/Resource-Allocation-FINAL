const form = require("./../models/formModel");
const sendEmail = require("../utilities/email_sender");
const email_Template = require("../utilities/email_template");
const custodians = {
  "Seminar Hall": "jaters1200@gmail.com",
  "Multipurpose Hall": "debarrun@gmail.com",
  "Central Computing Facility": "samprit62@gmail.com",
};

exports.getRequesterForms = async (req, res) => {
  try {
    const userName = req.user.email;
    console.log(userName);
    const requesterForms = await form.find({ userEmail: userName });
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
    const emailhtml = email_Template(savedForm);
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

exports.updateFormStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    console.log(id, status);

    if (!id || !status) {
      return res
        .status(400)
        .json({ status: "failed", message: "Parameter missing" });
    }

    // Find the form by ID and update its status
    const updatedForm = await form.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedForm) {
      return res
        .status(400)
        .json({ status: "failed", message: "Form not found" });
    }

    const userEmail = updatedForm.email;
    const startDate = updatedForm.startDate.toLocaleDateString();
    const endDate = updatedForm.endDate.toLocaleDateString();

    const userMailOptions = {
      to: userEmail,
      from: "resourcemsg@outlook.com",
      subject: "Form Status Update",
      text: `Dear Requester,

      This is to inform you that a form with Form ID: ${updatedForm.formID} for the resource named ${updatedForm.resourceName} has undergone a status change. The status has been updated to "${status}" for the period from ${startDate} to ${endDate}.
  
      If you have any questions or need further assistance, please feel free to reach out to us at resourcemsg@gmail.com.
  
      Sincerely,
      Resource Management System`,
    };

    await sendEmail(userMailOptions);

    if (status === "Approved" || status === "Cancelled") {
      const resourceCustodianEmail = custodians[updatedForm.resourceName];

      if (resourceCustodianEmail) {
        const custodianMailOptions = {
          to: resourceCustodianEmail,
          from: "resourcemsg@outlook.com",
          subject: "Form Status Update",
          text: `Dear Resource Custodian,

          This is to inform you that a form with Form ID: ${updatedForm.formID} for the resource named ${updatedForm.resourceName} has undergone a status change. The status has been updated to "${status}" for the period from ${startDate} to ${endDate}.
      
          If you have any questions or need further assistance, please feel free to reach out to us at resourcemsg@gmail.com.
      
          Sincerely,
          Resource Management System`,
        };

        await sendEmail(custodianMailOptions);
      }
    }

    res.status(200).json({ status: "Success", data: updatedForm });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};
