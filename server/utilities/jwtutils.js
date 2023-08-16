const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
};

const SendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    // expires:new Date(Date.now(process.env.JWT_COOKIE*24*60*60*1000)),
    httpOnly: true,
  };
  res.cookie("jwt", token, cookieOptions);
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

module.exports = SendToken;
