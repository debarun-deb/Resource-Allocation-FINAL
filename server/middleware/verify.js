const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  try {
    let token;
    //token is not present
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ status: "failed", message: "please login to continue" });
    }
    //split between bearer and jwt token
    if (req.headers.authorization.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      return res.status(401).json({ error: "Invalid token" });
    }
    //token verification
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verified) {
      return res.status(403).json({ status: "failed", message: "forbidden" });
    }
    if (!verified.role) {
      return res
        .status(403)
        .json({ status: "failed", message: "No role found in the token" });
    }

    req.user = verified;
    console.log(req.user);
    // console.log('User Role:', req.user.role); // Log the user's role for debugging

    // console.log(req.user) for debugging purposes
    next();
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Internal server error",
    });
  }
};
