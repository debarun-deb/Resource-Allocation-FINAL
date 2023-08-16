const loginForm = require("./../models/LoginModel");
const jwt = require("jsonwebtoken");
const SendToken = require("./../utilities/jwtutils");
const sendEmail = require("../utilities/email_sender");
const crypto = require('crypto')


//signup
exports.signup = async (req, res) => {
  try {
    const newUser = await loginForm.create({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    console.log(newUser);
    SendToken(newUser, 200, res);
  } catch (err) {
    res.status(409).json({
      error: err.message,
      message: "user already exists",
    });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from request body

    const user = await loginForm.findOne({ email }).select("+password"); // Find user by email and retrieve the password field

    if (!user || !(await user.validatePassword(password, user.password))) {
      // If user does not exist or the provided password does not match the stored password
      return res.status(401).json({
        status: "failed",
        message: "Incorrect email or password",
      });
    }

    // console.log(user); // Log the user object for debugging purposes
    SendToken(user, 200, res);
  } catch (err) {
    // If an error occurs during the login process
    res.status(500).json({
      error: err.message,
      message: "Internal server error",
    });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await loginForm.findOne({ email });
    if (!user)
      return res.status(404).json({ status: "fail", message: "Bad request" });
    const resetToken = await user.resetPassToken();
    await user.save({ validateBeforeSave: false });
    // const resetUrl = `${req.protocol}://${req.get('host')}/resetPass/${}`
    const message = `Here is your password reset token ${resetToken}.\nUse this to reset your password`;
    try {
    const mailOptions = {
      from: "resourcemsg@outlook.com",
      to: user.email,
      subject: "Password Reset token",
      text: message,
    };
    await sendEmail(mailOptions);

    res.status(200).json({ status: "success" });
    } catch (e) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
      res.status(404).json({ status: "fail", message: "Bad request" });
    }
    next()
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Internal server error",
    });
  }
};


exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Find the user with the provided reset token
    const user = await loginForm.findOne({
      passwordResetToken: crypto.createHash('sha256').update(token).digest('hex'),
      passwordResetExpires: { $gt: Date.now() }, // Check if the token has not expired
    });

    if (!user) {
      return res.status(400).json({ status: 'fail', message: 'Invalid or expired token' });
    }

    // Update the user's password and clear the reset token fields
    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    // Save the updated user document
    await user.save();

 
    res.status(200).json({ status: 'success', message: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: 'Internal server error',
    });
  }
};
